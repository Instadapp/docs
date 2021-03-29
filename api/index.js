const bodyParser = require('body-parser')
const express = require('express')
const app = express();

app.use(bodyParser.json())

const connectors = [
  {
    "id": 1,
    "name": "Compound",
    "slug": "compound",
    "image": "connectors/compound.svg",
    "functions": [
      {
        "name": "deposit",
        "description": "Deposit a token to Compound for lending / collaterization.",
        "snippet": "spells.add({\n" +
          "\tconnector: 'compound',\n" +
          "\tmethod: 'deposit',\n" +
          "\targs: [tokenId, amount, getId, setId]\n" +
          "});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to deposit.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to deposit.(For max: `uint256(-1)`)."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens deposited."
          }
        ]
      },
      {
        "name": "borrow",
        "description": "Borrow a token using Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'borrow',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to borrow.(For eg: DAI-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to borrow."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens borrowed."
          }
        ]
      },
      {
        "name": "withdraw",
        "description": "Withdraw deposited token from Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'withdraw',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to withdraw.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to withdraw.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens withdrawn."
          }
        ]
      },
      {
        "name": "payback",
        "description": "Payback debt owed.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'payback',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to payback.(For eg: COMP-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to payback.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens paid back."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Curve",
    "slug": "curve",
    "image": "connectors/curve.svg",
    "functions": [
      {
        "name": "deposit",
        "description": "Deposit a token to Compound for lending / collaterization.",
        "snippet": "spells.add({\n" +
          "\tconnector: 'compound',\n" +
          "\tmethod: 'deposit',\n" +
          "\targs: [tokenId, amount, getId, setId]\n" +
          "});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to deposit.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to deposit.(For max: `uint256(-1)`)."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens deposited."
          }
        ]
      },
      {
        "name": "borrow",
        "description": "Borrow a token using Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'borrow',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to borrow.(For eg: DAI-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to borrow."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens borrowed."
          }
        ]
      },
      {
        "name": "withdraw",
        "description": "Withdraw deposited token from Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'withdraw',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to withdraw.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to withdraw.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens withdrawn."
          }
        ]
      },
      {
        "name": "payback",
        "description": "Payback debt owed.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'payback',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to payback.(For eg: COMP-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to payback.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens paid back."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "DyDx",
    "slug": "dydx",
    "image": "connectors/dydx.svg",
    "functions": [
      {
        "name": "deposit",
        "description": "Deposit a token to Compound for lending / collaterization.",
        "snippet": "spells.add({\n" +
          "\tconnector: 'compound',\n" +
          "\tmethod: 'deposit',\n" +
          "\targs: [tokenId, amount, getId, setId]\n" +
          "});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to deposit.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to deposit.(For max: `uint256(-1)`)."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens deposited."
          }
        ]
      },
      {
        "name": "borrow",
        "description": "Borrow a token using Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'borrow',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to borrow.(For eg: DAI-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to borrow."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens borrowed."
          }
        ]
      },
      {
        "name": "withdraw",
        "description": "Withdraw deposited token from Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'withdraw',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to withdraw.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to withdraw.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens withdrawn."
          }
        ]
      },
      {
        "name": "payback",
        "description": "Payback debt owed.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'payback',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to payback.(For eg: COMP-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to payback.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens paid back."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Kyber",
    "slug": "kyber",
    "image": "connectors/kyber.svg",
    "functions": [
      {
        "name": "deposit",
        "description": "Deposit a token to Compound for lending / collaterization.",
        "snippet": "spells.add({\n" +
          "\tconnector: 'compound',\n" +
          "\tmethod: 'deposit',\n" +
          "\targs: [tokenId, amount, getId, setId]\n" +
          "});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to deposit.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to deposit.(For max: `uint256(-1)`)."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens deposited."
          }
        ]
      },
      {
        "name": "borrow",
        "description": "Borrow a token using Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'borrow',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to borrow.(For eg: DAI-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to borrow."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens borrowed."
          }
        ]
      },
      {
        "name": "withdraw",
        "description": "Withdraw deposited token from Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'withdraw',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to withdraw.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to withdraw.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens withdrawn."
          }
        ]
      },
      {
        "name": "payback",
        "description": "Payback debt owed.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'payback',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to payback.(For eg: COMP-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to payback.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens paid back."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "Maker Dao",
    "slug": "maker-dao",
    "image": "connectors/makerdao.svg",
    "functions": [
      {
        "name": "deposit",
        "description": "Deposit a token to Compound for lending / collaterization.",
        "snippet": "spells.add({\n" +
          "\tconnector: 'compound',\n" +
          "\tmethod: 'deposit',\n" +
          "\targs: [tokenId, amount, getId, setId]\n" +
          "});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to deposit.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to deposit.(For max: `uint256(-1)`)."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens deposited."
          }
        ]
      },
      {
        "name": "borrow",
        "description": "Borrow a token using Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'borrow',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to borrow.(For eg: DAI-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to borrow."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens borrowed."
          }
        ]
      },
      {
        "name": "withdraw",
        "description": "Withdraw deposited token from Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'withdraw',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to withdraw.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to withdraw.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens withdrawn."
          }
        ]
      },
      {
        "name": "payback",
        "description": "Payback debt owed.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'payback',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to payback.(For eg: COMP-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to payback.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens paid back."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "Uniswap",
    "slug": "uniswap",
    "image": "connectors/uniswap.svg",
    "functions": [
      {
        "name": "deposit",
        "description": "Deposit a token to Compound for lending / collaterization.",
        "snippet": "spells.add({\n" +
          "\tconnector: 'compound',\n" +
          "\tmethod: 'deposit',\n" +
          "\targs: [tokenId, amount, getId, setId]\n" +
          "});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to deposit.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to deposit.(For max: `uint256(-1)`)."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens deposited."
          }
        ]
      },
      {
        "name": "borrow",
        "description": "Borrow a token using Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'borrow',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to borrow.(For eg: DAI-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to borrow."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens borrowed."
          }
        ]
      },
      {
        "name": "withdraw",
        "description": "Withdraw deposited token from Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'withdraw',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to withdraw.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to withdraw.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens withdrawn."
          }
        ]
      },
      {
        "name": "payback",
        "description": "Payback debt owed.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'payback',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to payback.(For eg: COMP-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to payback.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens paid back."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "1inch",
    "slug": "1inch",
    "image": "connectors/1inch.svg",
    "functions": [
      {
        "name": "deposit",
        "description": "Deposit a token to Compound for lending / collaterization.",
        "snippet": "spells.add({\n" +
          "\tconnector: 'compound',\n" +
          "\tmethod: 'deposit',\n" +
          "\targs: [tokenId, amount, getId, setId]\n" +
          "});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to deposit.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to deposit.(For max: `uint256(-1)`)."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens deposited."
          }
        ]
      },
      {
        "name": "borrow",
        "description": "Borrow a token using Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'borrow',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to borrow.(For eg: DAI-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to borrow."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens borrowed."
          }
        ]
      },
      {
        "name": "withdraw",
        "description": "Withdraw deposited token from Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'withdraw',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to withdraw.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to withdraw.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens withdrawn."
          }
        ]
      },
      {
        "name": "payback",
        "description": "Payback debt owed.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'payback',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to payback.(For eg: COMP-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to payback.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens paid back."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "name": "Aave",
    "slug": "aave",
    "image": "connectors/aave.svg",
    "functions": [
      {
        "name": "deposit",
        "description": "Deposit a token to Compound for lending / collaterization.",
        "snippet": "spells.add({\n" +
          "\tconnector: 'compound',\n" +
          "\tmethod: 'deposit',\n" +
          "\targs: [tokenId, amount, getId, setId]\n" +
          "});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to deposit.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to deposit.(For max: `uint256(-1)`)."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens deposited."
          }
        ]
      },
      {
        "name": "borrow",
        "description": "Borrow a token using Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'borrow',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to borrow.(For eg: DAI-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to borrow."
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens borrowed."
          }
        ]
      },
      {
        "name": "withdraw",
        "description": "Withdraw deposited token from Compound.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'withdraw',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to withdraw.(For eg: ETH-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to withdraw.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens withdrawn."
          }
        ]
      },
      {
        "name": "payback",
        "description": "Payback debt owed.",
        "snippet": "spells.add({\n\tconnector: 'compound',\n\tmethod: 'payback',\n\targs: [tokenId, amount, getId, setId]\n});",
        "parameters": [
          {
            "name": "tokenId",
            "type": "string",
            "description": "The token id of the token to payback.(For eg: COMP-A)."
          },
          {
            "name": "amount",
            "type": "number",
            "description": "The amount of the token to payback.(For max: `uint256(-1)`)"
          },
          {
            "name": "getId",
            "type": "number",
            "description": "ID to retrieve amt."
          },
          {
            "name": "setId",
            "type": "number",
            "description": "ID stores the amount of tokens paid back."
          }
        ]
      }
    ]
  }
]

const useCases = [
  {
    "id": 1,
    "slug": "long-eth",
    "title": "long eth",
    "description": "Tap the upside spike in Ethereum price",
    "color": "#D6E3F4"
  },
  {
    "id": 2,
    "slug": "short-dai",
    "title": "short dai",
    "description": "Make instant return & make DAI stable",
    "color": "#CEEFE5"
  },
  {
    "id": 3,
    "slug": "bridging",
    "title": "bridging",
    "description": "Port position b/w Maker & Compound",
    "color": "#F2E4C0"
  },
  {
    "id": 4,
    "slug": "long-eth",
    "title": "long eth",
    "description": "Tap the upside spike in Ethereum price",
    "color": "#E2D6F4"
  },
  {
    "id": 5,
    "slug": "short-dai",
    "title": "short dai",
    "description": "Make instant return & make DAI stable",
    "color": "#EFCED8"
  },
  {
    "id": 6,
    "slug": "bridging",
    "title": "bridging",
    "description": "Port position b/w Maker & Compound",
    "color": "#C0E6F2"
  },
  {
    "id": 7,
    "slug": "long-eth",
    "title": "long eth",
    "description": "Tap the upside spike in Ethereum price",
    "color": "#D6E3F4"
  },
  {
    "id": 8,
    "slug": "short-dai",
    "title": "short dai",
    "description": "Make instant return & make DAI stable",
    "color": "#CEEFE5"
  },
  {
    "id": 9,
    "slug": "bridging",
    "title": "bridging",
    "description": "Port position b/w Maker & Compound",
    "color": "#F2E4C0"
  },
  {
    "id": 10,
    "slug": "long-eth",
    "title": "long eth",
    "description": "Tap the upside spike in Ethereum price",
    "color": "#E2D6F4"
  },
  {
    "id": 11,
    "slug": "short-dai",
    "title": "short dai",
    "description": "Make instant return & make DAI stable",
    "color": "#C0E6F2"
  },
  {
    "id": 12,
    "slug": "bridging",
    "title": "bridging",
    "description": "Port position b/w Maker & Compound",
    "color": "#C0E6F2"
  }
];

app.get('/connectors', (req, res) => {
  const {limit} = req.query
  let data = connectors;
  if (limit) {
    data = data.slice(0, limit)
  }
  res.json(data)
})

app.get('/connectors/:slug', (req, res) => {
  const {slug} = req.params;
  const connector = connectors.find(item => item.slug === slug);
  res.json(connector);
})

app.get('/usecases', (req, res) => {
  res.json(useCases);
})

app.get('/usecases/:slug', (req, res) => {
  const {slug} = req.params;
  const useCase = useCases.find(item => item.slug === slug);
  res.json(useCase)
});

module.exports = app;
