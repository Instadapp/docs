---
title: Aave Rewards.
description: 'Claim Aave rewards.'
draft: true
---
> Lending & Borrowing
Aave-Incentives-v1 connector triggers methods like claim.

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Claim

Claim Pending Rewards from Aave incentives contract.

```javascript
spells.add({
  connector: "AAVE-CLAIM-A",
  method: "claim",
  args: [assets, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>assets</code></td>
     <td>address[]</td>
     <td>The list of assets supplied and borrowed.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of reward to claim. (uint(-1) for max)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of rewards claimed.</td>
   <tr>
</table>