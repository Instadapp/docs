---
title: Overview
position: 1
---

Welcome to the Instadapp docs!
 
Our platform is open to developers of all sizes, from solo programmers, to hacker groups and globally scaled teams. Our team and members of our community look forward to helping you build an application on top of Instadapp with maximum security and composability.
 
The following pages contain a comprehensive guide to Instadapp’s ecosystem, also known as the ‘Defi Smart Layer’. The protocol’s codebase is hosted on [Github](https://github.com/instadapp).

## Introduction

The Instadapp platform is a full feature platform for both users and developers to leverage the full potential of DeFi. 
The Instadapp protocol ('DSL') acts as the middleware that aggregates multiple DeFi protocols into one upgradable smart contract layer. This structure allows Instadapp to access the full potential of Decentralized Finance.

The main functionalities of the DSL are account extensions and upgradability. The unique upgradability means that the upcoming and new extensions will be upgraded, maintained and managed by INST governance. The DSL also includes a new operability layer that acts as a ‘Account Extension.’ These extensions allow the user to access new and unique functionality for their DSL account. These extensions and the evolution of the platform form a DeFi hub through which new use cases and extensions can be created, some examples of possible use cases include: Flash Loan Module, Authority extension, L2 extension, etc.

For more in-depth knowledge of DSL, head over to the blog post-  [Instadapp Protocol & Governance](https://blog.instadapp.io/protocol-and-governance).


## How Smart Accounts work: The Execution trace
![New DSL Accounts](/img/overview/1.jpg)

Interacting with the new DSL Accounts:

- While calling a function, users interact with their Smart Account. 
- The smart account contract uses a fallback function to fetch the address of the Extension Module to call via Implementation - contract using (msg.sig) of the function called by the user. 
- Once the address is fetched, our smart account uses it to obtain the implementation code and runs it.

The mapping of Function sigs to extensions will be added by the INST governance. Instadapp team is focused on building and excited for community collaboration on extending the smart account capabilities. In the meantime, developers can begin playing with Extension Module 1 today! 

To simulate a transaction in Module 1, the user interacts with their smart account using the `cast()` function. This is the core function that allows smart accounts to interact with DeFi protocols and complete composable transactions.

However, the cast function does not reside in the smart account contract of the user, hence the fallback function is called to get the implementation contract using msg.sig.

After getting the extension contract, a delegate call is made to the respective extension which contains the cast function to run all the spells.

Inside the spell function, delegate call(s) is done to execute the function called by the user.

![DSL User Interaction](/img/overview/2.jpg)

## Networks: Deployed addresses
 
Below are all the addresses of Core Contracts of the DSL ecosystem on Main-net and Kovan:
 
1. 	Index.sol: [0x2971adfa57b20e5a416ae5a708a8655a9c74f723](https://etherscan.io/address/0x2971adfa57b20e5a416ae5a708a8655a9c74f723#code)
2. 	InstaList.sol: [0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb](https://etherscan.io/address/0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb#code)
3. 	InstaAccount.sol: [0xFE02a32Cbe0CB9ad9A945576A5bb53A3C123A3A3](https://etherscan.io/address/0xFE02a32Cbe0CB9ad9A945576A5bb53A3C123A3A3#code)
4. 	InstaConnectors.sol: [0x97b0B3A8bDeFE8cB9563a3c610019Ad10DB8aD11](https://etherscan.io/address/0x97b0B3A8bDeFE8cB9563a3c610019Ad10DB8aD11#code)
5. 	InstaMemory.sol: [0x8a5419CfC711B2343c17a6ABf4B2bAFaBb06957F](https://etherscan.io/address/0x8a5419CfC711B2343c17a6ABf4B2bAFaBb06957F#code)
6.  Implementations: [0xCBA828153d3a85b30B5b912e1f2daCac5816aE9D](https://etherscan.io/address/0xCBA828153d3a85b30B5b912e1f2daCac5816aE9D#code)

## Networks and Underlying meanings

- Index.sol: This is the Main Contract for all the DeFi Smart Accounts. Used for creating a new DeFi Smart Account of a user and to run a cast function in the new smart account.
- InstaList.sol: Maintains a registry of all the DeFi Smart Account users using a Linked List. Using the user’s address, a smart account Id is created which is later mapped to get a smart account address. With this address, an account link is created which is utilised to add and remove accounts from the LinkedList.
- InstaAccounts.sol: It’s the DeFi Smart Account Wallet. All smart accounts that are created are a clone of this contract.
- InstaConnectors.sol: Holds a registry of all the Connectors associated with InstaDapp. An array of all the connectors is maintained using their address. 
- InstaMemory: All the data (bytes, uint, address and Storage Id) for the cast function are stored in this contract.

## Get Started

To walk through the entire process of installation and interacting with the DeFi Smart Layer (DSL), get started with [Installation](/get-started/installation).

Explore the sidebar to find more developer specific documentation covering all the aspects of the protocol.

## We want to hear from you!

To get involved and to stay up to date with new updates and launches, please join the #dev room in the Instadapp’s community Discord server; our team, and members of the community, look forward to helping you. Your questions and feedback help us improve, so please don't hesitate to ask if you can't find what you are looking for here. Get connected:

- Join the Instadapp [Discord](https://discord.gg/C76CeZc)
- Follow Instadapp on [Twitter](https://twitter.com/Instadapp)
- Subscribe to the [Instadapp blog](https://blog.instadapp.io/)
