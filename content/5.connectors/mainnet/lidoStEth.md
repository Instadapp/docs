---
title: LidoStETH
description: Stake ETH and receive stETH while staking.
draft: true
---
> Stake ETH and receive stETH while staking.
LidoStEth-v1 connector triggers methods like deposit. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x7d1fbc29794b3fdae9096349a12693044e6969f2#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

stake Eth in Lido, users receive stETH tokens on a 1:1 basis representing their staked ETH.

```javascript
spells.add({
  connector: "LIDO-STETH-A",
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