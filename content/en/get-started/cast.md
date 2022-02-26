---
title: Cast
description: "Casting Spells"
position: 4
category: "Get Started"
---

> Casting Spells

A "spell" denotes a sequence of connector function calls that achieves a particular use case. Spells can comprise of any number of functions across any number of connectors.
So, in essence, performing DeFi operations through Instadapp consists of creating a `Spell` instance to add transactions. This guide shows how you can use spells to perform operations in your dapp.

Create a "Spell" instance -

```js
let spells = dsa.Spell();
```

Add _spells_ for the transactions you want to execute in your dapp to this instance using the `add()` method. As an example, let's try to execute the following sequence of transactions using casting -

- Deposit 1 ETH to Aave
- Borrow 100 DAI
- Deposit borrowed DAI on Compound

```js
spells.add({
  connector: "AAVE-V2-A", // ID for AAVE connector
  method: "deposit",
  args: [
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // address to be used for ETH transactions on AAVE
    "1000000000000000000", // 1 ETH (10^18 wei)
    0,
    0,
  ],
});

spells.add({
  connector: "AAVE-V2-A",
  method: "borrow",
  args: [
    "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI token contract address
    "100000000000000000000",
    1, // rateMode - to decide between stable and variable interest rates while borrowing
    0,
    0,
  ],
});

spells.add({
  connector: "COMPOUND-A", // ID for Compound connector
  method: "deposit",
  args: [
    "DAI-A", // DAI token id
    "100000000000000000000",
    0,
    0,
  ],
});
```

_For more details on the arguments required for various methods in connectors, refer to the connector docs of the respective protocol (Connector docs for mainnet - https://docs.instadapp.io/connectors/mainnet)._

**Note**: Make sure your account has enough ETH (and ERC20) balance before executing transactions.

Finally, we execute the added spells using the `cast()` method.

```js
// in async functions
let transactionHash = await spells.cast();

// or
spells.cast().then(console.log); // returns transaction hash
```

You can also pass an object to send optional parameters like sending ETH along with transaction.

```js
spells.cast({
  gasPrice: web3.utils.toWei(gasPrice, "gwei"), // in gwei, required in node implementation.
  value: "1000000000000000000", // sending 1 Eth along the transaction.
  nonce: nonce,
});
```

Below is a list of all (optional) parameters you can pass with the `cast()` method -
| Parameter | Type | Description |
|----------------|--------|----------------|
| `gasPrice` | _string/number_ | The gas price in gwei. Required in NodeJs implementation to configure the transaction confirmation speed.
| `value` | _string/number_ | The amount of ETH you want to send along with the transactions (in wei).
| `nonce` | _string/number_ | Nonce of your sender account. Mostly used in Node implementation to send transactions with a particular nonce either to override unconfirmed transaction or some other purpose.

This will send the transaction to blockchain in node implementation (or ask users to confirm the transaction on web3 wallet like Metamask).

Some more important methods that the DSA contract provides include -

## getAuthById()

This method takes dsaId as input and returns the Auth for the DSA account.

```js
await dsa.getAuthById(dsaId);
```

| Parameter | Type            | Description                |
| --------- | --------------- | -------------------------- |
| `dsaId`   | _string/number_ | The Id of the DSA account. |

## encodeCastABI()

This method returns the encoded format of spells to be used in the low-level call.

```js
await dsa.encodeCastABI(spells);
```

| Parameter | Type     | Description                                                      |
| --------- | -------- | ---------------------------------------------------------------- |
| `spells`  | _object_ | The instance of `Spells` with the spells to be cast added to it. |

## encodeSpells()

This method returns the parameters for the cast function.

```js
await dsa.encodeSpells(spells);
```

| Parameter | Type     | Description                                                      |
| --------- | -------- | ---------------------------------------------------------------- |
| `spells`  | _object_ | The instance of `Spells` with the spells to be cast added to it. |

Check out the FAQs section for more details on these functions.
