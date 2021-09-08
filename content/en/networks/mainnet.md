---
title: Mainnet
description: ""
position: 2
category: "Networks"
---

## Networks: Deployed addresses

Below are all the addresses of Core Contracts of the DSL ecosystem on Main-net:


1. Index.sol: [0x2971adfa57b20e5a416ae5a708a8655a9c74f723](https://etherscan.io/address/0x2971adfa57b20e5a416ae5a708a8655a9c74f723#code)
2. InstaList.sol: [0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb](https://etherscan.io/address/0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb#code)
3. InstaAccount.sol: [0xFE02a32Cbe0CB9ad9A945576A5bb53A3C123A3A3](https://etherscan.io/address/0xFE02a32Cbe0CB9ad9A945576A5bb53A3C123A3A3#code)
4. InstaConnectors.sol: [0x97b0B3A8bDeFE8cB9563a3c610019Ad10DB8aD11](https://etherscan.io/address/0x97b0B3A8bDeFE8cB9563a3c610019Ad10DB8aD11#code)
5. InstaMemory.sol: [0x8a5419CfC711B2343c17a6ABf4B2bAFaBb06957F](https://etherscan.io/address/0x8a5419CfC711B2343c17a6ABf4B2bAFaBb06957F#code)
6. Implementations: [0xCBA828153d3a85b30B5b912e1f2daCac5816aE9D](https://etherscan.io/address/0xCBA828153d3a85b30B5b912e1f2daCac5816aE9D#code)

## Networks and Underlying meanings

- Index.sol: This is the Main Contract for all the DeFi Smart Accounts. Used for creating a new DeFi Smart Account of a user and to run a cast function in the new smart account.
- InstaList.sol: Maintains a registry of all the DeFi Smart Account users using a Linked List. Using the user’s address, a smart account Id is created which is later mapped to get a smart account address. With this address, an account link is created which is utilised to add and remove accounts from the LinkedList.
- InstaAccounts.sol: It’s the DeFi Smart Account Wallet. All smart accounts that are created are a clone of this contract.
- InstaConnectors.sol: Holds a registry of all the Connectors associated with InstaDapp. An array of all the connectors is maintained using their address.
- InstaMemory: All the data (bytes, uint, address and Storage Id) for the cast function are stored in this contract.
