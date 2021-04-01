---
title: Basic
description: 'Deposit & Withdraw from DSA'
position: 5
category: 'Connectors'
---
> Deposit & Withdraw from DSA

Basic connector triggers the methods like deposit and withdraw of token in DSA. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x9370236a085A99Aa359f4bD2f0424b8c3bf25C99#code).

---

### Deposit

Deposit tokens in DSA. Make sure user gave allowance to DSA.

Alternate way:- Transfer ETH / Tokens directly to DSA address.

```javascript
spells.add({
    connector: "basic",
    method: "deposit",
    args: [token, amount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token</code></td>
    <td>address</td>
    <td>The token address to deposit.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to deposit. use -1 or `dsa.maxValue` to deposit 100%.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to deposit.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
</table>

---

### Withdraw

Withdraw tokens from DSA.

```javascript
spells.add({
    connector: "basic",
    method: "withdraw",
    args: [token, amount, to, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token</code></td>
    <td>address</td>
    <td>The token address to withdraw.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to withdraw. use -1 or `dsa.maxValue` to withdraw 100%.</td>
  <tr>
  <tr>
    <td><code>to</code></td>
    <td>address</td>
    <td>The `to` address to withdraw. `to` must be one of the authorities.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to withdraw.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token withdrawn.</td>
  <tr>
</table>