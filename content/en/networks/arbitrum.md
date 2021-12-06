---
title: Instadapp on Arbitrum
menuTitle: Arbitrum
description: ""
position: 2
category: "Networks"
---

## Deployed addresses

Below are all the addresses of Core Contracts of the DSL ecosystem on Arbitrum:

| Contract | Address |
| ---------- | ---------- |
| Index.sol | [0x1eE00C305C51Ff3bE60162456A9B533C07cD9288](https://arbiscan.io/address/0x1eE00C305C51Ff3bE60162456A9B533C07cD9288#code) |
| InstaList.sol | [0x3565F6057b7fFE36984779A507fC87b31EFb0f09](https://arbiscan.io/address/0x3565F6057b7fFE36984779A507fC87b31EFb0f09#code) |
| InstaAccount.sol | [0x857f3b524317C0C403EC40e01837F1B160F9E7Ab](https://arbiscan.io/address/0x857f3b524317C0C403EC40e01837F1B160F9E7Ab#code) |
| InstaConnectors.sol | [0x67fCE99Dd6d8d659eea2a1ac1b8881c57eb6592B](https://arbiscan.io/address/0x67fCE99Dd6d8d659eea2a1ac1b8881c57eb6592B#code) |
| InstaMemory.sol | [0xc109f7Ef06152c3a63dc7254fD861E612d3Ac571](https://arbiscan.io/address/0xc109f7Ef06152c3a63dc7254fD861E612d3Ac571#code) |
| Implementations | [0xF3Bb2FbdCDa1B8B6d19f513D69462eA548d0eF12](https://arbiscan.io/address/0xF3Bb2FbdCDa1B8B6d19f513D69462eA548d0eF12#code) |

List of other Instadapp related address (non core to DSAs):
| Contract | Address |
| ---------- | ---------- | 
| InstaFlashAggregator | [0x1f882522DF99820dF8e586b6df8bAae2b91a782d](https://arbiscan.io/address/0x1f882522DF99820dF8e586b6df8bAae2b91a782d#code) |
| InstaFlashResolver | [0x9963F588C905f0D3a49b1810a3dEadd83Ca42143](https://arbiscan.io/address/0x9963F588C905f0D3a49b1810a3dEadd83Ca42143#code) |
| Treasury | [0xf81AB897E3940E95d749fF2e1F8D38f9b7cBe3cf](https://arbiscan.io/address/0xf81AB897E3940E95d749fF2e1F8D38f9b7cBe3cf) |

## Networks and Underlying meanings

- Index.sol: This is the Main Contract for all the DeFi Smart Accounts. Used for creating a new DeFi Smart Account of a user and to run a cast function in the new smart account.
- InstaList.sol: Maintains a registry of all the DeFi Smart Account users using a Linked List. Using the user’s address, a smart account Id is created which is later mapped to get a smart account address. With this address, an account link is created which is utilised to add and remove accounts from the LinkedList.
- InstaAccounts.sol: It’s the DeFi Smart Account Wallet. All smart accounts that are created are a clone of this contract.
- InstaConnectors.sol: Holds a registry of all the Connectors associated with InstaDapp. An array of all the connectors is maintained using their address.
- InstaMemory: All the data (bytes, uint, address and Storage Id) for the cast function are stored in this contract.
