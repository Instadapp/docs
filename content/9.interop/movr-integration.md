---
title: How to interact with Interop with Non DSA account?
description: "desc"
draft: true
---

Interop is a cross-chain refinancing platform that harnesses the true power of Defi.

Currently, DSA users can interact with Interop to migrate their assets/position from one chain to another using their DSA accounts. But now, Interop has become more flexible and allows anyone to interact with it and play with it.

### Deployed Addresses:

| chain     | Address                                                                                                                    | dsaID |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | ----- |
| Mainnet   | [0x36805559e5d1d59afe3673da4fe26d0dadf015cb](https://etherscan.io/address/0x36805559e5d1d59afe3673da4fe26d0dadf015cb)      | 34274 |
| Polygon   | [0xAD65B8095A6eFB3fe510608a5d9d131C7151598a](https://polygonscan.com/address/0xAD65B8095A6eFB3fe510608a5d9d131C7151598a)   | 53608 |
| Avalanche | [0x0a237e941d6b5fc1c6143cfc4686e67f1b33881e](https://snowtrace.io/address/0x0a237e941d6b5fc1c6143cfc4686e67f1b33881e#code) | 1507  |

## How to Interact with Interop if you're not a DSA user!

Interop has launched a periphery contract to enable ordinary users to interact and use its functionality.
To interact with Interop, you need to get familiar with these functions.

### 1. transfer

To transfer the ERC20 standard token from one chain to another.

> You need to approve periphery contract in order to use and migrate your ERC20 tokens.

```solidity
    function transfer(
        address srcChainTokenAddress_,
        address targetChainTokenAddress_,
        uint256 tokenAmount_,
        uint256 targetDsaId_,
        uint256 targetChainId_
    ) public {
```

| Params                    | Type    | Description                                                           | Example                                                                                                                |
| ------------------------- | ------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| srcChainTokenAddress\_    | address | The address of source chain ERC20 token.                              | [0x2791bca1f2de4661ed88a30c99a7a9449aa84174](https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174) |
| targetChainTokenAddress\_ | address | The address of target chain ERC20 token.                              | [0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e](https://snowtrace.io/token/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e)    |
| tokenAmount\_             | uint256 | The amount of source chain ERC20 token to migrate in proper decimals. | 1000000                                                                                                                |
| targetDsaId\_             | uint256 | The dsa ID of target chain.                                           | 5216                                                                                                                   |
| targetChainId\_           | uint256 | The chain ID of target chain.                                         | 43114                                                                                                                  |

- Working terminal script on how to use transfer function can be found [here](https://terminal.instadapp.io/R6O9nUKuA)

### 2. transferETH

To transfer ETH from one chain to another.

> Send ETH in `msg.value` to transfer and migrate your asset.

```solidity
    function transferETH(
        address targetChainTokenAddress_,
        uint256 targetDsaId_,
        uint256 targetChainId_
    ) public payable {
```

| Params                    | Type    | Description                              | Example                                                                                                             |
| ------------------------- | ------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| targetChainTokenAddress\_ | address | The address of target chain ERC20 token. | [0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e](https://snowtrace.io/token/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e) |
| targetDsaId\_             | uint256 | The dsa ID of target chain.              | 5216                                                                                                                |
| targetChainId\_           | uint256 | The chain ID of target chain.            | 43114                                                                                                               |

## How to use API to fetch data:

### 1. Liquidity

- To get all the liquidity available for supporting ERC20 and native tokens for all the chains (mainnet, Avalanche, polygon)

```js
const URL = "https://movr-interop.api.instadapp.io/v1/liquidity";
const params = {
  chainId: 1, // optional supported - 1, 137, 43114
  tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F", // optional
  amount: 10000000, // optional
};
const response = await axios.get(URL, { params: params });
```

Response -

```js
[
    1: {
        key: "dai",
        type: "token",
        symbol: "DAI",
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        name: "DAI Stable",
        decimals: 18,
        isStableCoin: true,
        price: 1.003,
        chainId: "1",
        liquidity: "1206223377695556578414654",
        liquidityInUSD: 1209842.0478286431,
        cap: "1794616151545363908275174",
        capInUSD: 1800000
    },
]
```

> If the third param `amount` passed, then it will notify us whether that much liquidity is available or not!

### 2. Estimate Transfer:

- To estimate transfer data, like the amount of fee, estimate bridge time in seconds, validate transferred amount.

```js
const data = {
  type: "balance",
  sourceChainId: "137",
  targetChainId: "1",
  position: [
    {
      sourceTokenAddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      amount: "100000000000000000",
    },
  ],
};

const response = await axios.post(
  "https://movr-interop.api.instadapp.io/v1/estimate-transfer",
  data
);
```

**Response** -

```js
{
  position: [
    {
      sourceToken: {
        key: "eth",
        type: "token",
        symbol: "ETH",
        name: "Ethereum",
        address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        decimals: 18,
        chainId: "137",
      },
      targetToken: {
        key: "eth",
        type: "token",
        symbol: "ETH",
        name: "Ethereum",
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        decimals: 18,
        chainId: "1",
      },
      sourceAmount: "100000000000000000",
      targetAmount: "87500000000000000",
      fees: "12500000000000000",
    },
  ],
  estimatedTime: 1280,
};
```

> In case of Error-422:

```js
{
    "message": "The given data was invalid",
    "errors": {
        "position": [
            "Minimum ETH balance transfer threshold not reached. Please migrate at least 0.012506."
        ]
    }
}
```

### 3. Transaction:

All queries related to transactions.

```js
const URL = "https://movr-interop.api.instadapp.io/v1/transactions";
const params = {
  status: "pending", // optional supported - pending, failed, success
  type: "balance", // optional supported - asset, balance
  search: <"transactionId">, // optional supported - transactionId, sourceDsaSender, submitEvent.transactionHash
  sourceChainId: 1 ,// optional supported - 1, 137, 43114
  targetChainId: 137, // optional supported - 1, 137, 43114
  submitEventTransactionHash: <"TX hash"> // optional
};
const response = await axios.get(URL, { params: params });
```

> note: tx can take ~10sec to register on our system.

> Movr need to use `search` or `submitEventTransactionHash` to find the tx hash from `transfer` or `transferETH`.
