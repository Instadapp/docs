---
title: OasisDEX
description: 'Decentralised Exchange'
draft: true
---
> Decentralised Exchange

OasisDEX connector triggers the methods like buy and sell tokens You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x57118572267072fcaEe72b15aE18B07A8b0d6144#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- Slippage amount is in percentage. For example, use `2 * 10 ** 16` to denote 2%.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Buy

Buy tokens.

```javascript
spells.add({
    connector: "oasis",
    method: "buy",
    args: [buy_token, sell_token, buy_amt, unit_amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buy_token</code></td>
    <td>address</td>
    <td>The token address to buy.</td>
  <tr>
  <tr>
    <td><code>sell_token</code></td>
    <td>address</td>
    <td>The token address to sell.</td>
  <tr>
  <tr>
    <td><code>buy_amt</code></td>
    <td>number</td>
    <td>The amount of tokens to buy.</td>
  <tr>
  <tr>
    <td><code>unit_amt</code></td>
    <td>number</td>
    <td>sell token amt per buy token</td>
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

### Sell

Sell tokens.

```javascript
spells.add({
    connector: "oasis",
    method: "sell",
    args: [buy_token, sell_token, sell_amt, unit_amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buy_token</code></td>
    <td>address</td>
    <td>The token address to buy.</td>
  <tr>
  <tr>
    <td><code>sell_token</code></td>
    <td>address</td>
    <td>The token address to sell.</td>
  <tr>
  <tr>
    <td><code>sell_amt</code></td>
    <td>number</td>
    <td>The amount of tokens to sell.</td>
  <tr>
    <tr>
    <td><code>unit_amt</code></td>
    <td>number</td>
    <td>buy token amt per sell token</td>
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