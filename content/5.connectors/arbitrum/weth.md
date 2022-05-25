---
title: WETH
description: Wrap and Unwrap WETH.
draft: true
---
> Wrap and Unwrap WETH.
WETH-v1.0 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Etherscan](https://arbiscan.io/address/0x6c7256cf7c003dd85683339f75dde9971f98f2fd#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Wrap ETH into WETH

```javascript
spells.add({
  connector: "WETH-A",
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
     <td>The amount of ETH to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of ETH deposited.</td>
   <tr>
</table>

---

### Withdraw

Unwrap ETH from WETH

```javascript
spells.add({
  connector: "WETH-A",
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
     <td>The amount of weth to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of ETH withdrawn.</td>
   <tr>
</table>