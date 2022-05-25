---
title: SUSHISWAP
description: Decentralized Exchange.
draft: true
---
> Decentralized Exchange.
Sushiswap-v1 connector triggers methods like deposit, withdraw, buy, sell. You can view details like source code, ABIs on [Snowtrace](https://snowtrace.io/address/0x8da60dee0815a08d16c066b07814b10722fa9306#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate AVAX.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit Liquidity to a SushiSwap pool.

```javascript
spells.add({
  connector: "SUSHISWAP-A",
  method: "deposit",
  args: [tokenA, tokenB, amtA, unitAmt, slippage, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenA</code></td>
     <td>address</td>
     <td>The address of token A.(For Avax: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>tokenB</code></td>
     <td>address</td>
     <td>The address of token B.(For Avax: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amtA</code></td>
     <td>uint256</td>
     <td>The amount of A tokens to deposit.</td>
   <tr>
   <tr>
     <td><code>unitAmt</code></td>
     <td>uint256</td>
     <td>The unit amount of of amtB/amtA with slippage.</td>
   <tr>
   <tr>
     <td><code>slippage</code></td>
     <td>uint256</td>
     <td>Slippage amount.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amtA.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of pools tokens received.</td>
   <tr>
</table>

---

### Withdraw

Withdraw Liquidity from a SushiSwap pool.

```javascript
spells.add({
  connector: "SUSHISWAP-A",
  method: "withdraw",
  args: [tokenA, tokenB, uniAmt, unitAmtA, unitAmtB, getId, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenA</code></td>
     <td>address</td>
     <td>The address of token A.(For Avax: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>tokenB</code></td>
     <td>address</td>
     <td>The address of token B.(For Avax: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>uniAmt</code></td>
     <td>uint256</td>
     <td>The amount of pool tokens to withdraw.</td>
   <tr>
   <tr>
     <td><code>unitAmtA</code></td>
     <td>uint256</td>
     <td>The unit amount of amtA/uniAmt with slippage.</td>
   <tr>
   <tr>
     <td><code>unitAmtB</code></td>
     <td>uint256</td>
     <td>The unit amount of amtB/uniAmt with slippage.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve uniAmt.</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint256[]</td>
     <td>Array of IDs to store the amount tokens received.</td>
   <tr>
</table>

---

### Buy

Buy a token using a SushiSwap

```javascript
spells.add({
  connector: "SUSHISWAP-A",
  method: "buy",
  args: [buyAddr, sellAddr, buyAmt, unitAmt, getId, setId]
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
     <td><code>buyAmt</code></td>
     <td>uint256</td>
     <td>The amount of tokens to buy.</td>
   <tr>
   <tr>
     <td><code>unitAmt</code></td>
     <td>uint256</td>
     <td>The unit amount of sellAmt/buyAmt with slippage.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve buyAmt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID to store the amount of tokens sold.</td>
   <tr>
</table>

---

### Sell

Sell a token using a SushiSwap

```javascript
spells.add({
  connector: "SUSHISWAP-A",
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
     <td>The address of the token to buy.(For Avax: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAddr</code></td>
     <td>address</td>
     <td>The address of the token to sell.(For Avax: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAmt</code></td>
     <td>uint256</td>
     <td>The amount of the token to sell.</td>
   <tr>
   <tr>
     <td><code>unitAmt</code></td>
     <td>uint256</td>
     <td>The unit amount of buyAmt/sellAmt with slippage.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve sellAmt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of token brought.</td>
   <tr>
</table>