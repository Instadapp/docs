---
title: Uniswap v2.
description: 'Decentralized Exchange.'
draft: true
---
> Lending & Borrowing
UniswapV2-v1 connector triggers methods like deposit, withdraw, buy, sell. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xa4bf319968986d2352fa1c550d781bbfcce3fcab#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit Liquidity to a Uniswap v2 pool.

```javascript
spells.add({
  connector: "UNISWAP-A",
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
     <td>The address of token A.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>tokenB</code></td>
     <td>address</td>
     <td>The address of token B.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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

Withdraw Liquidity from a Uniswap v2 pool.

```javascript
spells.add({
  connector: "UNISWAP-A",
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
     <td>The address of token A.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>tokenB</code></td>
     <td>address</td>
     <td>The address of token B.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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

Buy a token using a Uniswap v2

```javascript
spells.add({
  connector: "UNISWAP-A",
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
     <td>The address of the token to buy.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAddr</code></td>
     <td>address</td>
     <td>The address of the token to sell.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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

Sell a token using a Uniswap v2

```javascript
spells.add({
  connector: "UNISWAP-A",
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
     <td>The address of the token to buy.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>sellAddr</code></td>
     <td>address</td>
     <td>The address of the token to sell.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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