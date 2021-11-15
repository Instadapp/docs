---
title: Cast
description: "Casting Spells"
position: 4
category: "Get Started"
---
> Casting Spells

**Spells** denotes a sequence of connector functions that will achieve a given use case. Spells can comprise of any number of functions across any number of connectors.

With this SDK, performing DeFi operations on your dapp consists of creating a `spells` instance to add transactions. Here is where you can initiate complex transactions amongst different protocols.

Create an instance:

```js
let spells = dsa.Spell()
```

Add **spells** that you want to execute. Think of any actions, and by just adding new SPELLS, you can wonderfully CAST transactions across protocols. Let's try to execute the following actions:

* Deposit 1 ETH to Aave
* Borrow 100 DAI
* Deposit borrowed DAI on Compound

```js
spells.add({
  connector: "aave",
  method: "deposit",
  args: [
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "1000000000000000000", // 1 ETH (10^18 wei)
    0,
    0
  ]
})

spells.add({
  connector: "aave",
  method: "borrow",
  args: [
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "100000000000000000000", // 100 * 10^18 wei
    0,
    0
  ]
})

spells.add({
  connector: "compound",
  method: "deposit",
  args: [
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "100000000000000000000", // 100 * 10^18 wei
    0,
    0
  ]
})
```

**Note** - Make sure, your smart account have the equivalent ETH balance before executing the above actions.

At last, cast your spell using `cast()` method.

```js
// in async functions
let transactionHash = await spells.cast();

// or
spells.cast().then(console.log) // returns transaction hash
```

You can also pass an object to send **optional** parameters like sending ETH along with the transaction.

```js
spells.cast({
  gasPrice: web3.utils.toWei(gasPrice, 'gwei'), // in gwei, used in node implementation.
  value: "1000000000000000000", // sending 1 Eth along the transaction.
  nonce: nonce
})
```

| **Parameter (optional)** | **Type**        | **Description**                                                                                                                                                                |
|--------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|                                                                                                       
| `gasPrice`               | *string/number* | The gas price in gwei. Mostly used in Node implementation to configure the transaction confirmation speed.                                                                     |
| `value`                  | *string/number* | Amount of ETH which you want to send along with the transaction (in wei).                                                                                                      |
| `nonce`                  | *string/number* | Nonce of your sender account. Mostly used in Node implementation to send transaction with a particular nonce either to override unconfirmed transaction or some other purpose. |

This will send the transaction to blockchain in node implementation (or ask users to confirm the transaction on web3 wallet like Metamask).