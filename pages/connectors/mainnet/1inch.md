---
title: 1Inch.
description: 'On-chain DEX Aggregator.'
---
> Lending & Borrowing
1Inch-v1 connector triggers methods like sell. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x6c7256cf7c003dd85683339f75dde9971f98f2fd#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
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
     <td>The address of the token to buy.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAddr</code></td>
     <td>address</td>
     <td>The address of the token to sell.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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