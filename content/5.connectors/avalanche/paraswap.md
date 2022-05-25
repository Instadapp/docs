---
title: PARASWAP-V5
description: DEX Aggregator.
draft: true
---
> DEX Aggregator.
Paraswap-v5 connector triggers methods like swap. You can view details like source code, ABIs on [Snowtrace](https://snowtrace.io/address/0x8a7fcee0e1ff6db33c7e83060c18e3b97915a970#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate AVAX.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Swap

Swap tokens from exchanges like kyber, 0x etc, with calculation done off-chain.

```javascript
spells.add({
  connector: "PARASWAP-A",
  method: "swap",
  args: [buyAddr, sellAddr, sellAmt, unitAmt, callData, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>buyAddr</code></td>
     <td>address</td>
     <td>The address of the token to buy.(For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAddr</code></td>
     <td>address</td>
     <td>The address of the token to sell.(For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAmt</code></td>
     <td>uint256</td>
     <td>The amount of the token to sell.</td>
   <tr>
   <tr>
     <td><code>unitAmt</code></td>
     <td>uint256</td>
     <td>The amount of buyAmt/sellAmt with slippage.</td>
   <tr>
   <tr>
     <td><code>callData</code></td>
     <td>bytes</td>
     <td>Data from paraswap API.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of token brought.</td>
   <tr>
</table>