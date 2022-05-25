---
title: 1INCH-V4
description: On-chain DEX Aggregator.
draft: true
---
> On-chain DEX Aggregator.
1Inch-v4 connector triggers methods like sell. You can view details like source code, ABIs on [Snowtrace](https://snowtrace.io/address/0x63995c71e2f57d0af786485e255a805603e54e76#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate AVAX.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Sell

Swap tokens from exchanges like kyber, 0x etc, with calculation done off-chain.

```javascript
spells.add({
  connector: "1INCH-A",
  method: "sell",
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
     <td>The address of the token to buy.(For Avax: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAddr</code></td>
     <td>address</td>
     <td>The address of the token to sell.(For Avax: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAmt</code></td>
     <td>uint</td>
     <td>The amount of the token to sell.</td>
   <tr>
   <tr>
     <td><code>unitAmt</code></td>
     <td>uint</td>
     <td>The amount of buyAmt/sellAmt with slippage.</td>
   <tr>
   <tr>
     <td><code>callData</code></td>
     <td>bytes</td>
     <td>Data from 1inch API.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of token brought.</td>
   <tr>
</table>