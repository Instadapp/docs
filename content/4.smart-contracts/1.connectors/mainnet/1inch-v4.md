# 1INCH-V4
> On-chain DEX Aggregator.
1Inch-v4 connector triggers methods like sell. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x16ac1e894abb854519243e9ff982673ab5497549#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Sell

Swap tokens from exchanges like kyber, 0x etc, with calculation done off-chain.

```javascript
spells.add({
  connector: "1INCH-V4-A",
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
     <td><Badge>callData</Badge></td>
     <td><Badge>bytes</Badge></td>
     <td>Data from 1inch API.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint</Badge></td>
     <td>ID stores the amount of token brought.</td>
   <tr>
</table>