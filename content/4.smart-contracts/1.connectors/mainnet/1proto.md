# 1Inch (on-chain)
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
     <td><Badge>buyAddr</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to buy.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>sellAddr</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to sell.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>sellAmt</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>The amount of the token to sell.</td>
   <tr>
   <tr>
     <td><Badge>unitAmt</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>The amount of buyAmt/sellAmt with slippage.</td>
   <tr>
   <tr>
     <td><Badge>distribution</Badge></td>
     <td><Badge>uint[]</Badge></td>
     <td>The distribution of swap across different DEXs.</td>
   <tr>
   <tr>
     <td><Badge>disableDexes</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>Disable a dex. (To disable none: 0)</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>ID to retrieve sellAmt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint</Badge></td>
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
     <td><Badge>tokens</Badge></td>
     <td><Badge>address[]</Badge></td>
     <td>Array of tokens.</td>
   <tr>
   <tr>
     <td><Badge>sellAmt</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>The amount of the token to sell.</td>
   <tr>
   <tr>
     <td><Badge>unitAmt</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>The amount of buyAmt/sellAmt with slippage.</td>
   <tr>
   <tr>
     <td><Badge>distribution</Badge></td>
     <td><Badge>uint[]</Badge></td>
     <td>The distribution of swap across different DEXs.</td>
   <tr>
   <tr>
     <td><Badge>disableDexes</Badge></td>
     <td><Badge>uint[]</Badge></td>
     <td>Disable a dex. (To disable none: 0)</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>ID to retrieve sellAmt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>ID stores the amount of token brought.</td>
   <tr>
</table>