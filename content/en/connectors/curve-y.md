---
title: Curve Y
description: 'Swapping and On-chain Liquidity from Y Pool'
position: 16
category: 'Connectors'
---
> Swapping and On-chain Liquidity from Y Pool

Curve connector triggers methods like buy, sell and withdraw. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x861a2250FcDBe57041289623561D5D79585DF5dc#code).

- use -1 or `dsa.maxValue` for the maximum amount in functions.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Sell

Sell Stable ERC20 Token.

```javascript
spells.add({
    connector: "curve-y",
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
    <td>The address of the token to sell.</td>
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
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
</table>

---

### Deposit

Deposit Token into the Curve Pool.

```javascript
spells.add({
    connector: "curve-y",
    method: "deposit",
    args: [token, amt, unitAmt, getId, setId]
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
    <td><code>amt</code></td>
    <td>number</td>
    <td>The amount of tokens to deposit. use -1 or `dsa.maxValue` to deposit 100%.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The amount of curve_amt/token_amt with slippage.</td>
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


### Withdraw

Withdraw Token from the Curve Pool.

```javascript
spells.add({
    connector: "curve-y",
    method: "withdraw",
    args: [token, amt, unitAmt, getId, setId]
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
    <td><code>amt</code></td>
    <td>number</td>
    <td>The amount of tokens to deposit. use -1 or `dsa.maxValue` to withdraw 100%.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The amount of curve_amt/token_amt with slippage.</td>
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