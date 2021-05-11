---
title: Compound
description: 'Lending & Borrowing'
draft: true
---
> Lending & Borrowing
Compound connector triggers methods like deposit, borrow, withdraw, payback, and more. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xaeCfA2c0f4bAD0Ecee46dcd1250cd0334fE28BC0#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Lend / Collateralize tokens.

```javascript
spells.add({
    connector: "compound",
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
    connector: "compound",
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
    <td>The token address to withdraw.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to withdraw. use -1 or `dsa.maxValue` to withdraw 100%.</td>
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
    connector: "compound",
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

Payback debt.

```javascript
spells.add({
    connector: "compound",
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

---

### Liquidate

Liquidate a position.

```javascript
spells.add({
    connector: "compound",
    method: "liquidate",
    args: [borrower, tokenToPay, tokenInReturn, amount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>borrower</code></td>
    <td>address</td>
    <td>Borrower's Address.</td>
  <tr>
  <tr>
    <td><code>tokenToPay</code></td>
    <td>address</td>
    <td>Token Address to pay for liquidation.</td>
  <tr>
  <tr>
    <td><code>tokenInReturn</code></td>
    <td>address</td>
    <td>Token Address to return on liquidation.</td>
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

---

## Extra Functions

### Deposit ctoken

Same as `deposit`. The only difference is this method stores cToken amount in set ID.

```javascript
spells.add({
    connector: "compound",
    method: "depositCToken",
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
    <td>ID stores the amount of ctoken minted.</td>
  <tr>
</table>

---

### Withdraw ctoken

Same as `withdraw`. The only difference is this method fetch cToken amount in get ID.

```javascript
spells.add({
    connector: "compound",
    method: "withdrawCToken",
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
    <td>The token address to withdraw.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of ctokens to withdraw. use -1 or `dsa.maxValue` to withdraw 100%.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of ctoken to withdraw.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token withdrawn.</td>
  <tr>
</table>