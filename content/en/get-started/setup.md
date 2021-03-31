---
title: Setup Account
description: ''
position: 3
category: 'get-started'
---

<alert>
        Connected to Web3 (<a href="#" onclick="" class="text-danger font-weight-normal web3disconnect"><u>disconnect</u></a>). You can run commands on this guide on your chrome console. Be sure to <a href="/setup" class="font-weight-normal"><u>setup an account</u></a>.
</alert>

<alert>
        <b>Note</b>: You can run this guide directly from here by <a id="web3connect" class="font-weight-normal" href="#"><u>connecting to web3</u></a> and opening up chrome console.
</alert>

Every user needs to create Smart Account to interact with DeFi Protocols seamlessly; this allows developers to build extensible use-cases with maximum security and composability. You can also create multiple account for a single address.

- Create Smart Account - `build()`
- Fetch Smart Accounts - `getAccounts()`
- Set Smart Account - `setInstance()`

---

### build()

If the above function returns an empty array OR if a use-case requires you to create multiple accounts, trigger `build()` method.

```javascript
dsa.build().then(console.log);
```

The build method also accepts an optional `Object` parameter as shown below:

```javascript
dsa.build({
    gasPrice: gasPrice // estimated gas price
    origin: origin,
    authority: authority,
})
```
<!-- The build method also accepts an **optional** `Object` parameter as shown below. You can also checkout [our gist](https://gist.github.com/Sowmayjain/64690959985a1b47715c79f49ac79a34) for the implementation of this method.

```javascript
dsa.build({
    gasPrice: web3.utils.toWei(gasPrice, 'gwei'), // estimate gas price*
    origin: origin, 
    authority: authority, 
    from: from,  
    nonce: nonce  
})
``` -->

* View our [Gist](https://gist.github.com/thrilok209/8b19dbd8d46b2805ab8bb8973611aea2) for estimation of gas price.

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>gasPrice</code></td>
    <td>string/number</td>
    <td>The gas price in gwei. Mostly used in Node implementation to configure the transaction confirmation speed.</td>
  </tr>
  <tr>
    <td><code>origin</code></td>
    <td>address</td>
    <td>The address to track the origin of transaction. Used for analytics and affiliates.</td>
  </tr>
  <tr>
    <td><code>authority</code></td>
    <td>address</td>
    <td>The DSA authority. The address to be added as authority.</td>
  </tr>
  <tr>
    <td><code>from</code></td>
    <td>address</td>
    <td>The account with which you want to create your DSA. This is helpful to create DSA for other addresses.</td>
  </tr>
  <tr>
    <td><code>nonce</code></td>
    <td>string/number</td>
    <td>Nonce of your sender account. Mostly used in Node implementation to send transaction with a particular nonce either to override unconfirmed transaction or some other purpose.</td>
  </tr>
</table>

#### Returns
`string`: Transaction hash.

This creates a uniquely numbered Smart Account which acts as a proxy to interact with verified DeFi protocols and each DSA has a unique ethereum address.

---

### getAccounts()

Fetch all the accounts owned by an ethereum address by calling `getAccounts()`.

```javascript
dsa.getAccounts(address).then(console.log);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>address</code></td>
    <td>address</td>
    <td>An ethereum address.</td>
  <tr>
</table>

#### Returns
`Array` of `Object` with all the DSA where `address` is authorised:

```javascript
[
    {
        id: 52, // DSA Number
        address: "0x...", // DSA Address
        version: 1 // DSA version
    },
    ...
]
```

---

### setInstance()

Be sure to configure global values by calling `setInstance()`. You can get the `id` by calling `getAccounts()`. The configured account will be used for all subsequent calls.

```javascript
dsa.setInstance(dsaId); // DSA ID
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>dsaId</code></td>
    <td>number</td>
    <td>The DSA unique number.</td>
  <tr>
  <!-- <tr>
    <td><code>dsaAddress</code></td>
    <td>address</td>
    <td>The DSA smart contract address.</td>
  <tr>
  <tr>
    <td><code>dsaVersion</code></td>
    <td>number</td>
    <td>The smart account version. Use the default </td>
  <tr>
  <tr>
    <td><code>origin</code></td>
    <td>address</td>
    <td>The address to track the origin of transaction. Used for analytics and affiliates.</td>
  <tr> -->
</table>

--- 

<!-- ### setOrigin()

(Optional) To find the origin of the transaction for affiliation and on-chain analytics, trigger the `setOrigin()`.

```javascript
dsa.setOrigin(origin); 
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>origin</code></td>
    <td>address</td>
    <td>The address to track the origin of transaction. Used for analytics and affiliates.</td>
  <tr>
</table> -->

## Transfer Tokens

Now that you have an account setup, transfer assets to your DSA address, which can be eventually used as collateral, liquidity, et cetera in DeFi protocols. Developers can trigger the ETH / Token transfer by calling a SDK method - [dsa.transfer()](/basic/#dsatransfer). Alternatively, call `transfer()` method from the respective ERC20 token contract.

<!-- To build extensible use cases with maximum security and composability, our platform is designed in a way that discourages the deposit of tokens by allowance as this might manifest [vulnerabilities](https://twitter.com/koeppelmann/status/1230615922311925760) in some cases.

Therefore, users need to transfer assets to Smart Account, which can be eventually used as collateral, liquidity, et cetera in DeFi protocols. Developers can trigger the ETH / Token transfer by calling a SDK method - [dsa.transfer()](/methods/#dsatransfer). Alternatively, call `transfer()` method from the respective ERC20 token contract. -->