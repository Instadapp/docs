---
title: WMATIC
description: Wrap and Unwrap WMATIC.
draft: true
---
> Wrap and Unwrap WMATIC.
WMATIC-v1.0 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Polygonscan](https://polygonscan.com/address/0xa3eefdc2de9dfa59968becff3e15b53e6162460f#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Wrap MATIC into WMATIC

```javascript
spells.add({
  connector: "WMATIC-A",
  method: "deposit",
  args: [amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of MATIC to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of MATIC deposited.</td>
   <tr>
</table>

---

### Withdraw

Unwrap MATIC from WMATIC

```javascript
spells.add({
  connector: "WMATIC-A",
  method: "withdraw",
  args: [amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint</td>
     <td>The amount of wmatic to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of MATIC withdrawn.</td>
   <tr>
</table>