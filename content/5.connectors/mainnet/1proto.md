---
title: 1Inch (on-chain)
description: On-chain and off-chian DEX Aggregator.
draft: true
---
> On-chain and off-chian DEX Aggregator.
1Proto-v1.1 connector triggers methods like sell, sellMulti. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xabac3dcf164ed827eafda8e05ecc8208d6bc5e04#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Sell

Swap tokens from exchanges like Uniswap, Kyber etc, with calculation done off-chain.

```javascript
spells.add({
  connector: "1INCH-B",
  method: "sell",
  args: [buyAddr, sellAddr, sellAmt, unitAmt, distribution, disableDexes, getId, setId]
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
     <td><code>distribution</code></td>
     <td>uint[]</td>
     <td>The distribution of swap across different DEXs.</td>
   <tr>
   <tr>
     <td><code>disableDexes</code></td>
     <td>uint</td>
     <td>Disable a dex. (To disable none: 0)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve sellAmt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of token brought.</td>
   <tr>
</table>

---

### SellMulti

Swap multiple tokens from exchanges like Uniswap, Kyber etc, with calculation done off-chain.

```javascript
spells.add({
  connector: "1INCH-B",
  method: "sellMulti",
  args: [tokens, sellAmt, unitAmt, distribution, disableDexes, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokens</code></td>
     <td>address[]</td>
     <td>Array of tokens.</td>
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
     <td><code>distribution</code></td>
     <td>uint[]</td>
     <td>The distribution of swap across different DEXs.</td>
   <tr>
   <tr>
     <td><code>disableDexes</code></td>
     <td>uint[]</td>
     <td>Disable a dex. (To disable none: 0)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve sellAmt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of token brought.</td>
   <tr>
</table>