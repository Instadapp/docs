import axios from "axios";
import fs from "fs";
import generateMd from "./utils/generateMd";
import { askFirstQuestions, requestFilePath } from "./utils/inquirer";
import path from 'path';
import config from  "./env";
import { exit } from "process";

const getEtherscanSourceCode = async (address) => {
  try {
    const responce = await axios.get(config.ETHERSCAN_API_URL, {
      params: {
        module: "contract",
        action: "getsourcecode",
        address,
        apikey: config.ETHERSCAN_API_KEY,
      },
    });
    return responce.data.result[0].SourceCode;
  } catch (error) {
    Promise.reject(error);
  }
};

const getGithubSourceCode = async (filePath) => {
  try {
    const responce = await axios.get(filePath);
    return responce.data;
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
  functions = functions.filter(func => func.functionName)
  return { connectorVersion, title, description, functions };
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
  let description
  let title
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

(async function main() {
  try {
    let sourceCode;
    let chain;
    const {
      connectorName,
      connectorPath,
      useEtherscan,
      outputFormat,
      position,
      address,
    } = await askFirstQuestions();

    if (useEtherscan) {
      chain = "mainnet";
      sourceCode = await getEtherscanSourceCode(address);
    } else {
      const urlData = await requestFilePath();
      chain = urlData.chain;
      sourceCode = await getGithubSourceCode(urlData.url);
    }
    const sourceStrings = findSourceStrings(sourceCode);
    let data = parseSourceStrings(sourceStrings);
    data = data.map((obj) => ({ connectorName, ...obj }));
    // await ConnectorsModel.insertMany(data)
    // dbDisconnect()
    if (!fs.existsSync("generated")) {
      fs.mkdirSync("generated");
    }
    let savePath = path.resolve(connectorPath);

    if (outputFormat === "markdown") {
      const md = await generateMd(data, address, position, chain);
      await fs.writeFileSync(savePath, md);
    } else {
      await fs.writeFileSync(savePath, JSON.stringify(data, null, 2));
    }
    console.log(`Your data saved in: ${savePath}`);
  } catch (error) {
    console.error("error: ", error);
  }

  exit(0)
})();
