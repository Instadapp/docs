---
title: UNISWAP-V3-ROUTER
description: DEX.
draft: true
---
> DEX.
UniswapV3-Auto-Router-v1 connector triggers methods like sell. You can view details like source code, ABIs on [Polygonscan](https://polygonscan.com/address/0x7403d218116ce56139161df0d42b83f8a7f23802#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Sell

Swap tokens from getting an optimized trade routes

```javascript
spells.add({
  connector: "UNISWAP-V3-ROUTER-A",
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
     <td>The address of the token to buy.(For Matic: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAddr</code></td>
     <td>address</td>
     <td>The address of the token to sell.(For Matic: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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
     <td>Data from Uniswap V3 auto router SDK. You can generate calldata and unitAmt using uniswap-v3-autorouter or using this <a href="https://docs.instadapp.io/faq/connectors/calldata-param" target="_blank">API</a></td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of token brought.</td>
   <tr>
</table>