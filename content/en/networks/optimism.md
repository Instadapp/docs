---
title: Instadapp on Optimism
menuTitle: Optimism
description: ""
position: 10
category: "Networks"
---

## Deployed addresses

Below are all the addresses of Core Contracts of the DSL ecosystem on Optimism:

| Contract | Address |
| ---------- | ---------- |
| Index | [0x6CE3e607C808b4f4C26B7F6aDAeB619e49CAbb25](https://optimistic.etherscan.io/address/0x6CE3e607C808b4f4C26B7F6aDAeB619e49CAbb25#code) |
| InstaList | [0x9926955e0Dd681Dc303370C52f4Ad0a4dd061687](https://optimistic.etherscan.io/address/0x9926955e0Dd681Dc303370C52f4Ad0a4dd061687#code) |
| InstaAccount | [0x0a0a82D2F86b9E46AE60E22FCE4e8b916F858Ddc](https://optimistic.etherscan.io/address/0x0a0a82D2F86b9E46AE60E22FCE4e8b916F858Ddc#code) |
| InstaConnectors | [0x127d8cD0E2b2E0366D522DeA53A787bfE9002C14](https://optimistic.etherscan.io/address/0x127d8cD0E2b2E0366D522DeA53A787bfE9002C14#code) |
| InstaMemory | [0x3254Ce8f5b1c82431B8f21Df01918342215825C2](https://optimistic.etherscan.io/address/0x3254Ce8f5b1c82431B8f21Df01918342215825C2#code) |
| Implementations | [0x01fEF4d2B513C9F69E34b2f93Ef707FA9Ff60109](https://optimistic.etherscan.io/address/0x01fEF4d2B513C9F69E34b2f93Ef707FA9Ff60109#code) |

## Networks and Underlying meanings

- Index: This is the Main Contract for all the DeFi Smart Accounts. Used for creating a new DeFi Smart Account of a user and to run a cast function in the new smart account.
- InstaList: Maintains a registry of all the DeFi Smart Account users using a Linked List. Using the user’s address, a smart account Id is created which is later mapped to get a smart account address. With this address, an account link is created which is utilised to add and remove accounts from the LinkedList.
- InstaAccounts: It’s the DeFi Smart Account Wallet. All smart accounts that are created are a clone of this contract.
- InstaConnectors: Holds a registry of all the Connectors associated with InstaDapp. An array of all the connectors is maintained using their address.
- InstaMemory: All the data (bytes, uint, address and Storage Id) for the cast function are stored in this contract.
