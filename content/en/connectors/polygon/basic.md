---
title: Basic.
description: 'Deposit & Withdraw from DSA.'
draft: true
---
> Lending & Borrowing
Basic-v1 connector triggers methods like deposit, withdraw.

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit a token to DSA

```javascript
spells.add({
  connector: "BASIC-A",
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
     <td>The address of the token to deposit. (For MATIC: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of tokens to deposit. (For max: `uint256(-1)` (Not valid for MATIC))</td>
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

Withdraw a token from DSA

```javascript
spells.add({
  connector: "BASIC-A",
  method: "withdraw",
  args: [token, amt, to, getId, setId]
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
     <td>The address of the token to withdraw. (For MATIC: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint</td>
     <td>The amount of tokens to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>to</code></td>
     <td>address</td>
     <td>The address to receive the token upon withdrawal</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of tokens withdrawn.</td>
   <tr>
</table>