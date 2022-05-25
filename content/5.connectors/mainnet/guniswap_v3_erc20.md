---
title: G-Uniswap V3 ERC20
description: G-Uniswap V3 Wrapper to deposit and withdraw.
draft: true
---
> G-Uniswap V3 Wrapper to deposit and withdraw.
G-Uniswap-v3-ERC20-v1.0 connector triggers methods like deposit, withdraw, swapAndDeposit. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x2fca923c7535083f25f761dcf289d7d81f024dda#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit Liquidity to Gelato Uniswap V3 pool.

```javascript
spells.add({
  connector: "G-UNISWAP-A",
  method: "deposit",
  args: [pool, amt0Max, amt1Max, slippage, getIds, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>pool</code></td>
     <td>address</td>
     <td>The address of pool.</td>
   <tr>
   <tr>
     <td><code>amt0Max</code></td>
     <td>uint256</td>
     <td>Amount0 Max amount</td>
   <tr>
   <tr>
     <td><code>amt1Max</code></td>
     <td>uint256</td>
     <td>Amount1 Max amount</td>
   <tr>
   <tr>
     <td><code>slippage</code></td>
     <td>uint</td>
     <td>use to calculate minimum deposit. 100% = 1e18</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint256[]</td>
     <td>Array of IDs to retrieve amounts.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of pools tokens received.</td>
   <tr>
</table>

---

### Withdraw

Withdraw Liquidity from Gelato Uniswap V3 pool.

```javascript
spells.add({
  connector: "G-UNISWAP-A",
  method: "withdraw",
  args: [pool, liqAmt, minAmtA, minAmtB, getId, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>pool</code></td>
     <td>address</td>
     <td>The address of pool.</td>
   <tr>
   <tr>
     <td><code>liqAmt</code></td>
     <td>uint256</td>
     <td>Amount0 Max amount</td>
   <tr>
   <tr>
     <td><code>minAmtA</code></td>
     <td>uint256</td>
     <td>Min AmountA amount</td>
   <tr>
   <tr>
     <td><code>minAmtB</code></td>
     <td>uint256</td>
     <td>Min AmountB amount</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve liqAmt.</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint256[]</td>
     <td>Array of IDs tp stores the amounts of pools tokens received.</td>
   <tr>
</table>

---

### SwapAndDeposit

Withdraw Liquidity to Gelato Uniswap V3 pool.

```javascript
spells.add({
  connector: "G-UNISWAP-A",
  method: "swapAndDeposit",
  args: [pool, amount0In, amount1In, zeroForOne, swapAmount, swapThreshold, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>pool</code></td>
     <td>address</td>
     <td>The address of pool.</td>
   <tr>
   <tr>
     <td><code>amount0In</code></td>
     <td>uint256</td>
     <td>amount of token0 to deposit.</td>
   <tr>
   <tr>
     <td><code>amount1In</code></td>
     <td>uint256</td>
     <td>amount of token1 to deposit.</td>
   <tr>
   <tr>
     <td><code>zeroForOne</code></td>
     <td>bool</td>
     <td>Swap excess of one token to deposit in equal ratio.</td>
   <tr>
   <tr>
     <td><code>swapAmount</code></td>
     <td>uint256</td>
     <td>Amount of tokens to swap</td>
   <tr>
   <tr>
     <td><code>swapThreshold</code></td>
     <td>uint160</td>
     <td>Slippage that the swap could take.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>Not used anywhere here.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>Set the amount of tokens minted.</td>
   <tr>
</table>