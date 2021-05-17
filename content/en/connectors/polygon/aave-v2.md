---
title: Aave v2.
description: 'Lending & Borrowing.'
draft: true
---
> Lending & Borrowing
AaveV2-v1 connector triggers methods like deposit, withdraw, borrow, payback, enableCollateral, swapBorrowRateMode.

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit a token to Aave v2 for lending / collaterization.

```javascript
spells.add({
  connector: "AAVE-V2-A",
  method: "deposit",
  args: [token, amt, getId, setId]
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
     <td>The address of the token to deposit.(For MATIC: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens deposited.</td>
   <tr>
</table>

---

### Withdraw

Withdraw deposited token from Aave v2

```javascript
spells.add({
  connector: "AAVE-V2-A",
  method: "withdraw",
  args: [token, amt, getId, setId]
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
     <td>The address of the token to withdraw.(For MATIC: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens withdrawn.</td>
   <tr>
</table>

---

### Borrow

Borrow a token using Aave v2

```javascript
spells.add({
  connector: "AAVE-V2-A",
  method: "borrow",
  args: [token, amt, rateMode, getId, setId]
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
     <td>The address of the token to borrow.(For MATIC: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to borrow.</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>The type of borrow debt. (For Stable: 1, Variable: 2)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens borrowed.</td>
   <tr>
</table>

---

### Payback

Payback debt owed.

```javascript
spells.add({
  connector: "AAVE-V2-A",
  method: "payback",
  args: [token, amt, rateMode, getId, setId]
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
     <td>The address of the token to payback.(For MATIC: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>The type of debt paying back. (For Stable: 1, Variable: 2)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens paid back.</td>
   <tr>
</table>

---

### EnableCollateral

Enable an array of tokens as collateral

```javascript
spells.add({
  connector: "AAVE-V2-A",
  method: "enableCollateral",
  args: [tokens]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokens</code></td>
     <td>address[]</td>
     <td>Array of tokens to enable collateral</td>
   <tr>
</table>

---

### SwapBorrowRateMode

Swaps user borrow rate mode between variable and stable

```javascript
spells.add({
  connector: "AAVE-V2-A",
  method: "swapBorrowRateMode",
  args: [token, rateMode]
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
     <td>The address of the token to swap borrow rate.(For MATIC: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint</td>
     <td>Desired borrow rate mode. (Stable = 1, Variable = 2)</td>
   <tr>
</table>