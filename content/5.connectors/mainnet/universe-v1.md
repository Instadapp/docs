---
title: UNIVERSE
description: Maximising uniswap v3 returns
draft: true
---
> Maximising uniswap v3 returns
UniverseFinance-v1 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xd7a7296623c56f884b0a753ebd6653911f3986ca#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit in Universe Vault by Adapter

```javascript
spells.add({
  connector: "UNIVERSE-A",
  method: "deposit",
  args: [universeVault, amountA, amountB, getIds, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>universeVault</code></td>
     <td>address</td>
     <td>Universe Official Vault Address</td>
   <tr>
   <tr>
     <td><code>amountA</code></td>
     <td>uint256</td>
     <td>Amount of tokenA</td>
   <tr>
   <tr>
     <td><code>amountB</code></td>
     <td>uint256</td>
     <td>Amount of tokenB</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint256[]</td>
     <td>ID to retrieve amountA and amountB</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint256[]</td>
     <td>ID to store amountA and amountB</td>
   <tr>
</table>

---

### Withdraw

Withdraw Token0 & Token1 From Universe Vault

```javascript
spells.add({
  connector: "UNIVERSE-A",
  method: "withdraw",
  args: [universeVault, share0, share1, getIds, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>universeVault</code></td>
     <td>address</td>
     <td>Universe Official Vault Address</td>
   <tr>
   <tr>
     <td><code>share0</code></td>
     <td>uint256</td>
     <td>Amount of uToken0.</td>
   <tr>
   <tr>
     <td><code>share1</code></td>
     <td>uint256</td>
     <td>Amount of uToken1.</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint256[]</td>
     <td>ID to retrieve amount of output token</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint256[]</td>
     <td>stores the amount of output tokens</td>
   <tr>
</table>