---
title: Aave
description: 'Deposit & Borrow'
position: 11
category: 'Connectors'
---
> Deposit & Borrow

Aave connector triggers methods like deposit, borrow, withdraw, payback. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x3fd79E82CCAc22A1c1b504e8a04bec133CB3f282#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Lend / Collateralize tokens.

```javascript
spells.add({
    connector: "aave",
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

Withdraw tokens.

```javascript
spells.add({
    connector: "aave",
    method: "withdraw",
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
    <td>The token address to withdraw. use -1 or `dsa.maxValue` to withdraw 100%.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to withdraw.</td>
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

---

### Borrow

Borrow tokens.

```javascript
spells.add({
    connector: "aave",
    method: "borrow",
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
    <td>The token address to borrow.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to borrow.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to borrow.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token borrowed.</td>
  <tr>
</table>

---

### Payback

Payback borrowed ERC20 Tokens.

```javascript
spells.add({
    connector: "aave",
    method: "payback",
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
    <td>The token address to payback.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to payback. use -1 or `dsa.maxValue` to payback 100%.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to payback.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token paid back.</td>
  <tr>
</table>