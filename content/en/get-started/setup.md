---
title: Setup Account
description: 'DeFi Smart Account Setup'
position: 2
category: 'Get Started'
---
> DeFi Smart Account Setup

Every user needs to create Smart Account to interact with DeFi Protocols seamlessly; this allows developers to build extensible use-cases with maximum security and composability. You can also create multiple account for a single address.

* Create Smart Account - `build()`
* Fetch Smart Accounts - `getAccounts()`
* Set Smart Account - `setInstance()`

### build()

Create a DSA Account. If the account is already created, you can use the `setInstance` method to activate a paricular DSA account and start casting spells.

```js
// in async functions
await dsa.build()

// or
dsa.build().then(console.log)
```

The build method also accepts an optional parameters as shown below:

```js
dsa.build({
  gasPrice: gasPrice // estimated gas price
  origin: origin,
  authority: authority,
})
```

> View this [Gist](https://gist.github.com/thrilok209/8b19dbd8d46b2805ab8bb8973611aea2) for estimation of gas price

| **Parameter** | **Type**        | **Description**                                                                                                                                                                |
|---------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `gasPrice`    | *string/number* | The gas price in gwei. Mostly used in Node implementation to configure the transaction confirmation speed.                                                                     |
| `origin`      | *address*       | The address to track the origin of transaction. Used for analytics and affiliates.                                                                                             |
| `authority`   | *address*       | The DSA authority. The address to be added as authority.                                                                                                                       |
| `from`        | *address*       | The account with which you want to create your DSA. This is helpful to create DSA for other addresses.                                                                         |
| `nonce`       | *string/number* | Nonce of your sender account. Mostly used in Node implementation to send transaction with a particular nonce either to override unconfirmed transaction or some other purpose. |

The method returns the transaction hash.

This creates a uniquely numbered Smart Account which acts as a proxy to interact with verified DeFi protocols and each DSA has a unique ethereum address.

### getAccounts()

Fetch all the accounts owned by an ethereum address by calling `getAccounts()`.

```js
// in async functions
await dsa.getAccounts(address)

// or
dsa.getAccounts(address).then(console.log)
```

| **Parameter** | **Type**        | **Description**                                                                                                                                                                |
|---------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `address`    | *address* | An ethereum address. |

The method returns an array of objects with all the DSA accounts where `address` is authorised:

```js
[
  {
      id: 52, // DSA ID
      address: "0x...", // DSA Address
      version: 1 // DSA version
  },
  ...
]
```

### setInstance()

Be sure to configure global values by calling `setInstance()`. You can get the id by calling `getAccounts()`. The configured account will be used for all subsequent calls.

```js
dsa.setInstance(dsaId); // DSA ID
```

| **Parameter** | **Type**        | **Description**                                                                                                                                                                |
|---------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `dsaId`    | *Number* | DSA ID to be used for casting. |
