---
title: Uniswap V3
description: Decentralized Exchange.
draft: true
---
> Decentralized Exchange.
UniswapV3-v1 connector triggers methods like mint, deposit, withdraw, collect, burn. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x25b0c76de86c3457b9b8b9ee3775f5a7b8d4c475#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Mint

Mint New NFT LP Position

```javascript
spells.add({
  connector: "UNISWAP-V3-A",
  method: "mint",
  args: [tokenA, tokenB, fee, tickLower, tickUpper, amtA, amtB, slippage, getIds, setId]
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
     <td>tokenA addreess</td>
   <tr>
   <tr>
     <td><code>tokenB</code></td>
     <td>address</td>
     <td>tokenB addreess</td>
   <tr>
   <tr>
     <td><code>fee</code></td>
     <td>uint24</td>
     <td>fee percentage</td>
   <tr>
   <tr>
     <td><code>tickLower</code></td>
     <td>int24</td>
     <td>Lower tick</td>
   <tr>
   <tr>
     <td><code>tickUpper</code></td>
     <td>int24</td>
     <td>Upper tick</td>
   <tr>
   <tr>
     <td><code>amtA</code></td>
     <td>uint256</td>
     <td>amount of tokenA</td>
   <tr>
   <tr>
     <td><code>amtB</code></td>
     <td>uint256</td>
     <td>amount of tokenB</td>
   <tr>
   <tr>
     <td><code>slippage</code></td>
     <td>uint256</td>
     <td>slippage percentage</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint256[]</td>
     <td>ID to retrieve amtA</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of LP token</td>
   <tr>
</table>

---

### Deposit

Increase Liquidity of NFT Position

```javascript
spells.add({
  connector: "UNISWAP-V3-A",
  method: "deposit",
  args: [tokenId, amountA, amountB, slippage, getIds, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP Token ID.</td>
   <tr>
   <tr>
     <td><code>amountA</code></td>
     <td>uint256</td>
     <td>tokenA amounts.</td>
   <tr>
   <tr>
     <td><code>amountB</code></td>
     <td>uint256</td>
     <td>tokenB amounts.</td>
   <tr>
   <tr>
     <td><code>slippage</code></td>
     <td>uint256</td>
     <td>slippage.</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint256[]</td>
     <td>IDs to retrieve token amounts</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>stores the liquidity amount</td>
   <tr>
</table>

---

### Withdraw

Decrease Liquidity of NFT Position

```javascript
spells.add({
  connector: "UNISWAP-V3-A",
  method: "withdraw",
  args: [tokenId, liquidity, amountAMin, amountBMin, getId, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP Token ID.</td>
   <tr>
   <tr>
     <td><code>liquidity</code></td>
     <td>uint256</td>
     <td>LP Token amount.</td>
   <tr>
   <tr>
     <td><code>amountAMin</code></td>
     <td>uint256</td>
     <td>Min amount of tokenA.</td>
   <tr>
   <tr>
     <td><code>amountBMin</code></td>
     <td>uint256</td>
     <td>Min amount of tokenB.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve LP token amounts</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint256[]</td>
     <td>stores the amount of output tokens</td>
   <tr>
</table>

---

### Collect

Collect from NFT Position

```javascript
spells.add({
  connector: "UNISWAP-V3-A",
  method: "collect",
  args: [tokenId, amount0Max, amount1Max, getIds, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP Token ID.</td>
   <tr>
   <tr>
     <td><code>amount0Max</code></td>
     <td>uint256</td>
     <td>Max amount of token0.</td>
   <tr>
   <tr>
     <td><code>amount1Max</code></td>
     <td>uint256</td>
     <td>Max amount of token1.</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint256[]</td>
     <td>IDs to retrieve amounts</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint256[]</td>
     <td>stores the amount of output tokens</td>
   <tr>
</table>

---

### Burn

Burn NFT LP Position

```javascript
spells.add({
  connector: "UNISWAP-V3-A",
  method: "burn",
  args: [tokenId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP Token ID</td>
   <tr>
</table>