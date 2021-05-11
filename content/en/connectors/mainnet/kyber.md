---
title: Kyber
description: 'Decentralised Swapping'
draft: true
---
> Decentralised Swapping

Kyber Network connector triggers methods like buy and sell. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x7043fc2e21865c091eeae37c38e3d82bccdf5d5c#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Sell

Buy / Sell tokens.

```javascript
spells.add({
    connector: "kyber",
    method: "sell",
    args: [buyAddr, sellAddr, sellAmt, unitAmt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buyAddr</code></td>
    <td>address</td>
    <td>The address of the token to buy.</td>
  <tr>
  <tr>
    <td><code>sellAddr</code></td>
    <td>address</td>
    <td>The address of the token to buy.</td>
  <tr>
  <tr>
    <td><code>sellAmt</code></td>
    <td>number</td>
    <td>The amount of token to sell.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The amount of buyAmt/sellAmt with slippage.</td>
  <tr>
  <tr>
    <td><code>getID</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
</table>