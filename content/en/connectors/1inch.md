---
title: 1inch
description: 'DEX Aggregator'
position: 18
category: 'Connectors'
---
> DEX Aggregator

1inch connector triggers methods like sell. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x1beCC315E044E8ee8898011609E63F8259d3B124#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Sell via On-Chain DEXs

Swap tokens from exchanges like kyber, uniswap etc. Calculation is done on-chain, with *high gas cost*.

```javascript
spells.add({
    connector: "oneInch",
    method: "sell",
    args: [buyAddr, sellAddr, sellAmt, unitAmt, getId, setId]
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
    <td>The address of the token to buy.</td>
  <tr>
  <tr>
    <td><code>sellAddr</code></td>
    <td>address</td>
    <td>The address of the token to sell.</td>
  <tr>
    <tr>
    <td><code>sellAmt</code></td>
    <td>number</td>
    <td>The amount of the token to sell.</td>
  <tr>
    <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The amount of buyAmt/sellAmt with slippage.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to deposit.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
</table>

---

### Sell via DEXs with Off-Chain Calculation

Swap tokens from exchanges like kyber, uniswap etc, but with the calculation done off-chain, thus, with a lower gas cost.

<!-- TODO: link resolver -->

```javascript
spells.add({
    connector: "oneInch",
    method: "sellTwo",
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
    <td>The address of the token to buy.</td>
  <tr>
  <tr>
    <td><code>sellAddr</code></td>
    <td>address</td>
    <td>The address of the token to sell.</td>
  <tr>
    <tr>
    <td><code>sellAmt</code></td>
    <td>number</td>
    <td>The amount of the token to sell.</td>
  <tr>
    <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The amount of buyAmt/sellAmt with slippage.</td>
  <tr>
  <tr>
    <tr>
    <td><code>distribution</code></td>
    <td>array</td>
    <td>The distribution of swap across different DEXs.</td>
  <tr>
  <tr>
    <tr>
    <td><code>disableDexes</code></td>
    <td>number</td>
    <td>To disable a dex. (To disable none: 0)</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to deposit.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
</table>

---

### Sell via On-Chain and Off-Chain Exchanges

Swap tokens from exchanges like kyber, 0x etc, with calculation done off-chain.

<!-- TODO: link 1inch docs -->

```javascript
spells.add({
    connector: "oneInch",
    method: "sellThree",
    args: [buyAddr, sellAddr, sellAmt, unitAmt, callData, getId, setId]
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
    <td>The address of the token to buy.</td>
  <tr>
  <tr>
    <td><code>sellAddr</code></td>
    <td>address</td>
    <td>The address of the token to sell.</td>
  <tr>
    <tr>
    <td><code>sellAmt</code></td>
    <td>number</td>
    <td>The amount of the token to sell.</td>
  <tr>
    <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The amount of buyAmt/sellAmt with slippage.</td>
  <tr>
  <tr>
    <tr>
    <td><code>callData</code></td>
    <td>number</td>
    <td>This is the data from the 1inch API.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to deposit.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
</table>