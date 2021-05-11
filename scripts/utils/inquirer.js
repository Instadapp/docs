import { getTree } from "./treeGenerator";
import inquirer from "inquirer";
// import ConnectorsModel from '../models/Connectors'
import Web3 from "web3";
import config from  "../env";

const web3 = new Web3(
  new Web3.providers.HttpProvider(config.ETH_NODE_URL)
);

export const requestFilePath = async () => {
  const commonPath =
    "https://raw.githubusercontent.com/Instadapp/dsa-connectors/main/contracts/";
  const tree = await getTree();
  const question1 = {
    type: "list",
    name: "chain",
    message: "Which Chain?",
    choices: ["Mainnet", "Polygon"],
  };
  let { chain } = await inquirer.prompt(question1);

  chain = chain.toLowerCase();
  const question2 = {
    type: "confirm",
    name: "isFullPath",
    message: "Do you want to enter full path?",
    default: false,
  };
  const { isFullPath } = await inquirer.prompt(question2);
  if (isFullPath) {
    const question3 = {
      type: "input",
      name: "url",
      message: "Enter url?",
      validate: (url) => !!url || "url is required!",
    };
    let { url } = await inquirer.prompt(question3);
    url = url
      .replace("https://github.com/", "https://raw.githubusercontent.com/")
      .replace("blob/", "");
    return { url, chain };
  } else {
    const question3 = {
      type: "list",
      name: "path",
      message: "Choose File?",
      choices: tree[chain].map((a) => a.split("connectors/")[1]),
    };
    const { path } = await inquirer.prompt(question3);
    return { url: `${commonPath}${chain}/connectors/${path}`, chain };
  }
};

export const askFirstQuestions = async () => {
  const hardCodedAddress = "0xf73c94402bc24148b744083ed02654eec2c37d5b"; // dev
  // const hardCodedAddress = '0xA4BF319968986D2352FA1c550D781bBFCCE3FcaB' // dev
  // const hardCodedAddress = '0x839c2D3aDe63DF5b0b8F3E57D5e145057Ab41556' // dev
  // const hardCodedAddress = '0x0AD8CC89bfB3b265a6De52438a26a44C6d66E74E' // dev

  const questions1 = [
    {
      type: "input",
      name: "connectorName",
      message: "Please enter connector name?",
      validate: async (connectorName) =>
        !!connectorName || "Connector name is required!",
      // message: 'Please enter unique connector name?',
      // validate: async (connectorName) => {
      //   const count = await ConnectorsModel.countDocuments({ connectorName })
      //   return !count
      //     ? (!!connectorName || 'Connector name is required!')
      //     : 'Connector name is not unique'
      // }
    },
    {
      type: "list",
      name: "useEtherscan",
      message: "How to get Source Code?",
      choices: ["From Address (Only for Mainnet)", "From url"],
    },
    {
      type: "list",
      name: "outputFormat",
      message: "Choose output format?",
      choices: ["markdown", "json"],
    },
  ];
  let answers1 = await inquirer.prompt(questions1);

  let connectorFileName = `${answers1.connectorName
    .replace(/\s/g, "-")
    .toLowerCase()}.${answers1.outputFormat === "json" ? "json" : "md"}`;

  let connectorPathAnswer = await inquirer.prompt({
    type: "input",
    name: "connectorPath",
    message: "Please enter full output path?",
    default: "content/en/connectors/" + connectorFileName,
  });

  answers1.useEtherscan = answers1.useEtherscan === questions1[1].choices[0];
  if (answers1.outputFormat === "markdown") {
    const questions2 = [
      {
        type: "input",
        name: "position",
        message: "Enter position?",
        validate: (position) => !!position || "position is required!",
      },
    ];
    const answers2 = await inquirer.prompt(questions2);
    answers1 = { ...answers1, ...answers2 };
  }
  if (answers1.outputFormat === "markdown" || answers1.useEtherscan) {
    const questions3 = [
      {
        type: "input",
        name: "address",
        message: "Enter address?",
        validate: (address) => {
          if (config.NODE_ENV === "dev-skip") address = hardCodedAddress;
          return address
            ? web3.utils.isAddress(address) || "Enter a valid address!"
            : "address is required!";
        },
      },
    ];
    let answers3 = await inquirer.prompt(questions3);
    if (config.NODE_ENV === "dev-skip")
      answers3 = { address: hardCodedAddress };
    answers1 = { ...answers1, ...answers3 };
  }
  return { ...answers1, ...connectorPathAnswer };
};
