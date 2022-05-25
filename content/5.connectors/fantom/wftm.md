---
title: WFTM
description: Wrap and Unwrap WFTM.
draft: true
---
> Wrap and Unwrap WFTM.
WFTM-v1.0 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Etherscan](https://ftmscan.com//address/0x1310f478a37bbdccf47e8e10962d3bb888fec62c#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Wrap FTM into WFTM

```javascript
spells.add({
  connector: "WFTM-A",
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
     <td>The amount of FTM to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of FTM deposited.</td>
   <tr>
</table>

---

### Withdraw

Unwrap FTM from WFTM

```javascript
spells.add({
  connector: "WFTM-A",
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
     <td>The amount of wFTM to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of FTM withdrawn.</td>
   <tr>
</table>