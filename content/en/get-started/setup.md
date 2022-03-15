---
title: Setup Account
description: "DeFi Smart Account Setup"
position: 3
category: "Get Started"
---

> Defi Account Setup

Every user needs to create a Smart Account to interact with DeFi protocols through Instadapp. These DeFi Smart Accounts (DSAs) allow developers to build extensible use-cases with maximum security and composability. It is also possible to create multiple DSAs for a single ethereum address.

The protocol provides three methods pertaining to setting up a DSA -

- Create a Smart Account - `build()`
- Fetch all Smart Accounts owned by an ethereum address - `getAccounts()`
- Set a Smart Account to be used for function calls - `setInstance()`

## build()

Used to create a new DSA account. For an already created account, you can use the `setInstance()` method to activate the particular DSA to start casting spells.

```js
// in async functions
await dsa.build();

// or
dsa.build().then(console.log);
```

For implementations on NodeJs, it is required to pass the otherwise optional gasPrice parameter as well. There are also some other optional parameters that can be passed to the method as shown below -

```js
dsa.build({
  gasPrice: gasPrice // estimated gas price
  origin: origin,
  authority: authority,
  version: 2
})
```

All the parameters that this method accepts are listed below -
Parameter | Type | Description
|--------------|--------|----------------
| `gasPrice` | _string/number_ | The gas price in gwei. Mostly used in Node implementations to configure the transaction confirmation speed.
| `origin` | _address_ | The address to track the origin of the transaction. Used for analytics and affiliates.
| `authority` | _address_ | The address to be added as the DSA authority.
| `from` | _address_ | The account with which you want to create your DSA. This is helpful to create DSA for other addresses.
| `nonce` | _string/number_ | Nonce of your sender account. Mostly used in Node implementation to send transaction with a particular nonce either to override unconfirmed transaction or for other purposes.
| `version` | _number_ | The version of DSA to use (it is recommended to use version 2 which is latest)

The method returns the hash of the transaction and creates a uniquely numbered Smart Account which acts as a proxy to interact with verified DeFi protocols. Each DSA has a unique ethereum address.

## getAccounts()

Used to fetch all accounts owned by an ethereum address.

```js
// in async functions
await dsa.getAccounts(address);

// or
dsa.getAccounts(address).then(console.log);
```

| Parameter  | Type    | Description                                                               |
| ---------- | ------- | ------------------------------------------------------------------------- |
| ` address` | address | The ethereum address for which the list of held DSA accounts is required. |

The method returns an array of objects with all the DSA accounts which have the passed `address` as one of their authorities:

```js
[
  {
      id: 52, // DSA ID
      address: "0x...", // DSA Address
      version: 2 // DSA protocol version
  },
  ...
]
```

## setInstance()

`setInstance()` method is used to configure global values and use the account having the `dsaId` equal to the passed Id for all subsequent operations.

```js
dsa.setInstance(dsaId); // DSA ID
```

| Parameters | Type     | Description                               |
| ---------- | -------- | ----------------------------------------- |
| `dsaId`    | _number_ | The DSA Id to be used for casting spells. |
