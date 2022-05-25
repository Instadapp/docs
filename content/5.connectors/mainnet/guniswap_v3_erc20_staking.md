---
title: G-UNI Staking
description: Stake G-UNI for earning rewards.
draft: true
---
> Stake G-UNI for earning rewards.
Stake-G-UNI-v1.1 connector triggers methods like deposit, withdraw, claimReward. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xb8e9ef2a085671858d923aa947cb93b88714d2f8#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit Tokens to staking pool.

```javascript
spells.add({
  connector: "INST-STAKING-B",
  method: "deposit",
  args: [stakingPool, stakingToken, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>stakingPool</code></td>
     <td>address</td>
     <td>staking pool address.</td>
   <tr>
   <tr>
     <td><code>stakingToken</code></td>
     <td>address</td>
     <td>staking token address.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint</td>
     <td>staking token amount.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of staked tokens.</td>
   <tr>
</table>

---

### Withdraw

Withdraw Tokens from the staking pool.

```javascript
spells.add({
  connector: "INST-STAKING-B",
  method: "withdraw",
  args: [stakingPool, stakingToken, amt, getId, setIdAmount, setIdReward]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>stakingPool</code></td>
     <td>address</td>
     <td>staking pool address.</td>
   <tr>
   <tr>
     <td><code>stakingToken</code></td>
     <td>address</td>
     <td>staking token address.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint</td>
     <td>staking token amount.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><code>setIdAmount</code></td>
     <td>uint</td>
     <td>ID stores the amount of stake tokens withdrawn.</td>
   <tr>
   <tr>
     <td><code>setIdReward</code></td>
     <td>uint</td>
     <td>ID stores the amount of reward tokens claimed.</td>
   <tr>
</table>

---

### ClaimReward

Claim Pending Rewards of tokens staked.

```javascript
spells.add({
  connector: "INST-STAKING-B",
  method: "claimReward",
  args: [stakingPool, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>stakingPool</code></td>
     <td>address</td>
     <td>staking pool address.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of reward tokens claimed.</td>
   <tr>
</table>