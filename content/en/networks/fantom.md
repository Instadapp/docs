---
title: Instadapp on Fantom
menuTitle: Fantom
description: ""
position: 2
category: "Networks"
---

## Deployed addresses

Below are all the addresses of Core Contracts of the DSL ecosystem on Fantom:


1. Index.sol: [0x2fa042BEEB7A40A7078EaA5aC755e3842248292b](https://ftmscan.com/address/0x2fa042BEEB7A40A7078EaA5aC755e3842248292b#code)
2. InstaList.sol: [0x10e166c3FAF887D8a61dE6c25039231eE694E926](https://ftmscan.com/address/0x10e166c3FAF887D8a61dE6c25039231eE694E926#code)
3. InstaAccount.sol: [0x1a0862ecA9eAc5028aBdf85bD095fd13a7eebA2f](https://ftmscan.com/address/0x1a0862ecA9eAc5028aBdf85bD095fd13a7eebA2f#code)
4. InstaConnectors.sol: [0x819910794a030403F69247E1e5C0bBfF1593B968](https://ftmscan.com/address/0x819910794a030403F69247E1e5C0bBfF1593B968#code)
5. InstaMemory.sol: [0x56439117379A53bE3CC2C55217251e2481B7a1C8](https://ftmscan.com/address/0x56439117379A53bE3CC2C55217251e2481B7a1C8#code)
6. Implementations: [0xF0b36681C9d3ED74227880646De41c4a979AC191](https://ftmscan.com/address/0xF0b36681C9d3ED74227880646De41c4a979AC191#code)

## Networks and Underlying meanings

- Index.sol: This is the Main Contract for all the DeFi Smart Accounts. Used for creating a new DeFi Smart Account of a user and to run a cast function in the new smart account.
- InstaList.sol: Maintains a registry of all the DeFi Smart Account users using a Linked List. Using the user’s address, a smart account Id is created which is later mapped to get a smart account address. With this address, an account link is created which is utilised to add and remove accounts from the LinkedList.
- InstaAccounts.sol: It’s the DeFi Smart Account Wallet. All smart accounts that are created are a clone of this contract.
- InstaConnectors.sol: Holds a registry of all the Connectors associated with InstaDapp. An array of all the connectors is maintained using their address.
- InstaMemory: All the data (bytes, uint, address and Storage Id) for the cast function are stored in this contract.
