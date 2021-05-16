import axios from "axios";
import del from "del";
import fs from "fs";
import generateMd from "./utils/generateMd";
import path from "path";
import config from "./env";
import connectors from "./connectors.json";
import { exit } from "process";

const getDefiConnectors = async () => {
  try {
    let responce = await axios.get(config.DEFI_CONNECTORS_URL);
    return responce.data.data;
  } catch (error) {
    Promise.reject(error);
  }
};

const findSourceStrings = (sourceCode) => {
  try {
    let sourceStrings = sourceCode.split("\r\n");
    if (sourceStrings.length === 1) sourceStrings = sourceCode.split("\n");
    return sourceStrings;
  } catch (error) {
    Promise.reject(error);
  }
};

const parseSourceStrings = (sourceStrings) => {
  const soursesStart = sourceStrings.findIndex((str) =>
    str.includes('"sources"')
  );
  if (soursesStart !== -1) {
    let soursesEnd = -2;
    const soursesPre = sourceStrings[soursesStart].split('"sources"')[0];
    sourceStrings = sourceStrings.slice(soursesStart + 1);
    const endIndex = sourceStrings.findIndex((str) =>
      str.startsWith(`${soursesPre}},`)
    );
    if (endIndex !== -1) soursesEnd = endIndex;
    sourceStrings = sourceStrings.slice(0, soursesEnd);
    let sourcesArr = [];
    let sourceObj;
    for (let index = 0; index < sourceStrings.length; index++) {
      switch (index % 3) {
        case 0:
          sourceObj = {};
          sourceObj.path = sourceStrings[index].split('"')[1];
          break;
        case 1:
          sourceObj.content = parseContent(sourceStrings[index]);
          break;
        case 2:
          sourcesArr.push(sourceObj);
          break;

        default:
          break;
      }
    }
    sourcesArr = sourcesArr.filter((sourceObj) => sourceObj.content.length);
    sourcesArr = sourcesArr
      .map(parseCommits)
      .filter((sourceObj) => sourceObj.connectorVersion);
    return sourcesArr;
  } else {
    const content = parseContent(sourceStrings);
    const commits = parseCommits({ content, path: "" });
    return [commits];
  }
};

const parseContent = (content) => {
  const contentStrings =
    typeof content === "string"
      ? content.split('"content": "')[1].split("\\n")
      : content;
  const allComments = [];
  let commentRaw = {
    data: [],
  };
  let description;
  let title;
  let isComment1type = false;
  let isComment2type = false;
  for (let index = 0; index < contentStrings.length; index++) {
    let str = contentStrings[index].trim();
    if (str.startsWith("///")) isComment1type = true;
    if (str.startsWith("/**")) isComment2type = true;
    if (isComment1type) {
      if (str.startsWith("///")) {
        str = str.split("///")[1].trim();
        commentRaw.data.push(str);
      } else {
        if (str.includes("function") && !str.includes(")")) {
          let i2 = 1;
          while (!str.includes(")")) {
            let str2 = contentStrings[index + i2];
            if (str2.includes("//")) str2 = str2.split("//")[0];
            str += str2.trim();
            i2++;
          }
        }
        commentRaw.nameData = str;
        if (commentRaw.nameData !== "") allComments.push(commentRaw);
        isComment1type = false;
        commentRaw = {
          data: [],
        };
      }
    }
    if (isComment2type) {
      if (str.includes("*/")) {
        let str3 = contentStrings[index + 1];
        if (str3.includes("function") && !str3.includes(")")) {
          let i2 = 2;
          while (!str3.includes(")")) {
            let str2 = contentStrings[index + i2];
            if (str2.includes("//")) str2 = str2.split("//")[0];
            str3 += str2.trim();
            i2++;
          }
        }
        commentRaw.nameData = str3;
        if (commentRaw.nameData !== "") allComments.push(commentRaw);
        isComment2type = false;
        commentRaw = {
          data: [],
        };
      } else if (str !== "/**") {
        if (str.startsWith("*")) str = str.split("*")[1].trim();
        commentRaw.data.push(str);
      }
    }
    if (str.includes(" name =") && str.includes('"')) {
      str = str.split('"')[1].replace("\\", "");
      allComments.push({ parent: str });
    }
    if (str.includes("@dev") && !description) {
      description = str.split("@dev")[1].trim();
      allComments.push({ description });
    }
    if (str.includes("@title") && !title) {
      title = str.split("@title")[1].trim();
      allComments.push({ title });
    }
  }
  return allComments;
};

const parseCommits = (data) => {
  const namesTypes = ["function"];
  let connectorVersion;
  let title;
  let description;
  let functions = [];
  for (let i1 = 0; i1 < data.content.length; i1++) {
    const content = data.content[i1];
    if (content.parent) {
      connectorVersion = content.parent;
      continue;
    }
    if (content.title) {
      title = content.title;
      continue;
    }
    if (content.description) {
      description = content.description;
      continue;
    }
    const resultItem = { description: "" };
    let parameters = [];
    let funcName;
    for (let i2 = 0; i2 < namesTypes.length; i2++) {
      if (content.nameData.includes(namesTypes[i2])) {
        funcName = content.nameData
          .split(namesTypes[i2])[1]
          .trim()
          .split(" ")[0]
          .split("(")[0]
          .split("{")[0];
        resultItem.functionName = funcName;
      }
    }
    if (content.nameData.includes("function")) {
      const funcArgs = content.nameData.split("(")[1].split(")")[0];
      if (funcArgs !== "") {
        parameters = funcArgs.split(",").map((val) => {
          const splited = val.trim().split(" ");
          return {
            name: splited[splited.length - 1],
            type: splited[0],
          };
        });
      }
    }
    if (
      !content.nameData.includes("private") &&
      !content.nameData.includes("internal")
    ) {
      for (let i3 = 0; i3 < content.data.length; i3++) {
        const str = content.data[i3];
        if (str.includes("@notice")) {
          resultItem.description += str.split("@notice")[1].trim();
        }
        if (str.includes("@param") && parameters.length) {
          const parameterName = str
            .split("@param")[1]
            .trim()
            .split(" ")[0];
          const parameterI = parameters.findIndex(
            (parameter) => parameter.name === parameterName
          );
          parameters[parameterI].description = str
            .split("@param")[1]
            .trim()
            .split(" ")
            .slice(1)
            .join(" ");
        }
      }
      functions.push({ ...resultItem, parameters });
    }
  }
  functions = functions.filter((func) => func.functionName);
  return { connectorVersion, title, description, functions };
};

const getGithubSourceCode = async (path, network) => {
  try {
    const responce = await axios.get(
      `https://raw.githubusercontent.com/Instadapp/dsa-connectors/main/contracts/${network}/connectors/${path}`
    );
    return responce.data;
  } catch (error) {
    return null;
  }
};

const getSourceCode = async (connector, network) => {
  return await getGithubSourceCode(connector.path, network);
};

(async function main() {
  try {
    await del(path.resolve("./content/en/connectors"));
    fs.mkdirSync(path.resolve("./content/en/connectors"));
    fs.mkdirSync(path.resolve("./content/en/connectors/mainnet"));
    fs.mkdirSync(path.resolve("./content/en/connectors/polygon"));
  } catch (error) {}

  let mainnetMd = `---
title: Mainnet
position: 6
category: 'Connectors'
---
  `;
  let defiConnectors = await getDefiConnectors();
  for (const connector of connectors["mainnet"]) {
    const sourceCode = await getSourceCode(connector, "mainnet");
    if (!sourceCode) {
      console.log("[Mainnet] Source not found for " + connector.slug);
      continue;
    }
    const sourceStrings = findSourceStrings(sourceCode);
    let data = parseSourceStrings(sourceStrings)[0];
    data.title = data.title ?? connector.title;
    const defiConnector = defiConnectors.find(
      (con) => con.connectorName === data.connectorVersion
    );

    if (!defiConnector) {
      console.log("[Polygon] Connector not found for " + data.connectorVersion);
      continue;
    }

    data.connectorId = defiConnector.connectorId;

    const md = await generateMd(
      data,
      connector.address || defiConnector.connectorAddress,
      "mainnet"
    );

    fs.writeFileSync(
      path.resolve("./content/en/connectors/mainnet") +
        "/" +
        connector.slug +
        ".md",
      md
    );

    mainnetMd += `
- [${data.title}](/connectors/mainnet/${connector.slug})`;
  }

  fs.writeFileSync(
    path.resolve("./content/en/connectors/mainnet.md"),
    mainnetMd
  );

  let polygonMd = `---
title: Polygon
position: 7
category: 'Connectors'
---
`;

  for (const connector of connectors["polygon"]) {
    const sourceCode = await getGithubSourceCode(connector.path, "polygon");
    if (!sourceCode) {
      console.log("[Polygon] Source not found for " + connector.slug);
      continue;
    }

    const sourceStrings = findSourceStrings(sourceCode);
    let data = parseSourceStrings(sourceStrings)[0];
    data.title = data.title ?? connector.title;
    const defiConnector = defiConnectors.find(
      (con) => con.connectorName === data.connectorVersion
    );

    if (!defiConnector) {
      console.log("[Polygon] Connector not found for " + data.connectorVersion);
      continue;
    }
    data.connectorId = defiConnector.connectorId;

    const md = await generateMd(
      data,
      connector.address || defiConnector.connectorAddress,
      "polygon"
    );

    fs.writeFileSync(
      path.resolve("./content/en/connectors/polygon") +
        "/" +
        connector.slug +
        ".md",
      md
    );

    polygonMd += `
- [${data.title}](/connectors/polygon/${connector.slug})`;
  }

  fs.writeFileSync(
    path.resolve("./content/en/connectors/polygon.md"),
    polygonMd
  );

  exit(0);
})();
