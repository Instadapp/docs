---
title: Instadapp on Mainnet
menuTitle: Mainnet
description: ""
position: 6
category: "Networks"
---

## Deployed addresses

Below are all the addresses of Core Contracts of the DSL ecosystem on Main-net:

| Contract | Address |
| ---------- | ---------- |
| Index.sol | [0x2971adfa57b20e5a416ae5a708a8655a9c74f723](https://etherscan.io/address/0x2971adfa57b20e5a416ae5a708a8655a9c74f723#code) |
| InstaList.sol | [0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb](https://etherscan.io/address/0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb#code) |
| InstaAccount.sol | [0xFE02a32Cbe0CB9ad9A945576A5bb53A3C123A3A3](https://etherscan.io/address/0xFE02a32Cbe0CB9ad9A945576A5bb53A3C123A3A3#code) |
| InstaConnectors.sol | [0x97b0B3A8bDeFE8cB9563a3c610019Ad10DB8aD11](https://etherscan.io/address/0x97b0B3A8bDeFE8cB9563a3c610019Ad10DB8aD11#code) |
| InstaMemory.sol | [0x8a5419CfC711B2343c17a6ABf4B2bAFaBb06957F](https://etherscan.io/address/0x8a5419CfC711B2343c17a6ABf4B2bAFaBb06957F#code) |
| Implementations | [0xCBA828153d3a85b30B5b912e1f2daCac5816aE9D](https://etherscan.io/address/0xCBA828153d3a85b30B5b912e1f2daCac5816aE9D#code) |

List of other Instadapp related address (non core to DSAs):
| Contract | Address |
| ---------- | ---------- | 
| InstaFlashAggregator | [0x619Ad2D02dBeE6ebA3CDbDA3F98430410e892882](https://etherscan.io/address/0x619Ad2D02dBeE6ebA3CDbDA3F98430410e892882#code) |
| InstaFlashResolver | [0x33759cF68a3Ab9e8d582d8A4717104848E0fa8B9](https://etherscan.io/address/0x33759cF68a3Ab9e8d582d8A4717104848E0fa8B9#code) |
| Treasury | [0x28849D2b63fA8D361e5fc15cB8aBB13019884d09](https://etherscan.io/address/0x28849D2b63fA8D361e5fc15cB8aBB13019884d09#code) |

## Networks and Underlying meanings

- Index.sol: This is the Main Contract for all the DeFi Smart Accounts. Used for creating a new DeFi Smart Account of a user and to run a cast function in the new smart account.
- InstaList.sol: Maintains a registry of all the DeFi Smart Account users using a Linked List. Using the user’s address, a smart account Id is created which is later mapped to get a smart account address. With this address, an account link is created which is utilised to add and remove accounts from the LinkedList.
- InstaAccounts.sol: It’s the DeFi Smart Account Wallet. All smart accounts that are created are a clone of this contract.
- InstaConnectors.sol: Holds a registry of all the Connectors associated with InstaDapp. An array of all the connectors is maintained using their address.
- InstaMemory: All the data (bytes, uint, address and Storage Id) for the cast function are stored in this contract.
