---
title: Instadapp on Polygon
menuTitle: Polygon
description: ""
position: 2
category: "Networks"
---

## Deployed addresses

Below are all the addresses of Core Contracts of the DSL ecosystem on Polygon:

| Contract | Address |
| ---------- | ---------- |
|  Index.sol | [0xA9B99766E6C676Cf1975c0D3166F96C0848fF5ad](https://explorer-mainnet.maticvigil.com/address/0xA9B99766E6C676Cf1975c0D3166F96C0848fF5ad/contracts) |
|  InstaList.sol | [0x839c2D3aDe63DF5b0b8F3E57D5e145057Ab41556](https://explorer-mainnet.maticvigil.com/address/0x839c2D3aDe63DF5b0b8F3E57D5e145057Ab41556/contracts) |
|  InstaAccountV2 | [0x28846f4051EB05594B3fF9dE76b7B5bf00431155](https://explorer-mainnet.maticvigil.com/address/0x28846f4051EB05594B3fF9dE76b7B5bf00431155/contracts) |
|  InstaConnectorsV2 | [0x2A00684bFAb9717C21271E0751BCcb7d2D763c88](https://polygonscan.com/address/0x2A00684bFAb9717C21271E0751BCcb7d2D763c88/contracts) |
|  InstaMemory | [0x6C7256cf7C003dD85683339F75DdE9971f98f2FD](https://explorer-mainnet.maticvigil.com/address/0x6C7256cf7C003dD85683339F75DdE9971f98f2FD/contracts) |
|  InstaImplementations | [0x39d3d5e7c11D61E072511485878dd84711c19d4A](https://explorer-mainnet.maticvigil.com/address/0x39d3d5e7c11D61E072511485878dd84711c19d4A/contracts) |

List of other Instadapp related address (non core to DSAs):
| Contract | Address |
| ---------- | ---------- | 
| InstaFlashAggregator | [0xB2A7F20D10A006B0bEA86Ce42F2524Fde5D6a0F4](https://polygonscan.com/address/0xB2A7F20D10A006B0bEA86Ce42F2524Fde5D6a0F4#code) |
| InstaFlashResolver | [0xFC6E0651a8D4a54D533b2d26c8f59536557307f3](https://polygonscan.com/address/0xFC6E0651a8D4a54D533b2d26c8f59536557307f3#code) |
| Treasury | [0x6e9d36eaeC63Bc3aD4A47fb0d7826A9922AAfC22](https://polygonscan.com/address/0x6e9d36eaeC63Bc3aD4A47fb0d7826A9922AAfC22#code) |

## Networks and Underlying meanings

- Index.sol: This is the Main Contract for all the DeFi Smart Accounts. Used for creating a new DeFi Smart Account of a user and to run a cast function in the new smart account.
- InstaList.sol: Maintains a registry of all the DeFi Smart Account users using a Linked List. Using the user’s address, a smart account Id is created which is later mapped to get a smart account address. With this address, an account link is created which is utilised to add and remove accounts from the LinkedList.
- InstaAccounts.sol: It’s the DeFi Smart Account Wallet. All smart accounts that are created are a clone of this contract.
- InstaConnectors.sol: Holds a registry of all the Connectors associated with InstaDapp. An array of all the connectors is maintained using their address.
- InstaMemory: All the data (bytes, uint, address and Storage Id) for the cast function are stored in this contract.
