---
title: Uniswap V3 Staker
description: Decentralized Exchange.
draft: true
---
> Decentralized Exchange.
Uniswap-V3-Staker-v1.2 connector triggers methods like deposit, depositAndStake, transferDeposit, withdraw, stake, unstake, claimRewards, createIncentive. You can view details like source code, ABIs on [Etherscan](https://optimistic.etherscan.io/address/0x16ac1e894abb854519243e9ff982673ab5497549#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Transfer deposited NFT token

```javascript
spells.add({
  connector: "UNISWAP-V3-STAKER-B",
  method: "deposit",
  args: [_tokenId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP Token ID</td>
   <tr>
</table>

---

### DepositAndStake

To Deposit and Stake NFT for Staking

```javascript
spells.add({
  connector: "UNISWAP-V3-STAKER-B",
  method: "depositAndStake",
  args: [_rewardToken, _startTime, _endTime, _refundee, _tokenId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_rewardToken</code></td>
     <td>address</td>
     <td>_rewardToken address</td>
   <tr>
   <tr>
     <td><code>_startTime</code></td>
     <td>uint256</td>
     <td>stake start time</td>
   <tr>
   <tr>
     <td><code>_endTime</code></td>
     <td>uint256</td>
     <td>stake end time</td>
   <tr>
   <tr>
     <td><code>_refundee</code></td>
     <td>address</td>
     <td>refundee address</td>
   <tr>
   <tr>
     <td><code>_tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP token id</td>
   <tr>
</table>

---

### TransferDeposit

Transfer deposited NFT token

```javascript
spells.add({
  connector: "UNISWAP-V3-STAKER-B",
  method: "transferDeposit",
  args: [_tokenId, _to]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP Token ID</td>
   <tr>
   <tr>
     <td><code>_to</code></td>
     <td>address</td>
     <td>address to transfer</td>
   <tr>
</table>

---

### Withdraw

Withdraw NFT LP token from staking pool

```javascript
spells.add({
  connector: "UNISWAP-V3-STAKER-B",
  method: "withdraw",
  args: [_tokenId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP Token ID</td>
   <tr>
</table>

---

### Stake

Stake NFT LP Position

```javascript
spells.add({
  connector: "UNISWAP-V3-STAKER-B",
  method: "stake",
  args: [_rewardToken, _startTime, _endTime, _refundee, _tokenId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_rewardToken</code></td>
     <td>address</td>
     <td>_rewardToken address</td>
   <tr>
   <tr>
     <td><code>_startTime</code></td>
     <td>uint256</td>
     <td>stake start time</td>
   <tr>
   <tr>
     <td><code>_endTime</code></td>
     <td>uint256</td>
     <td>stake end time</td>
   <tr>
   <tr>
     <td><code>_refundee</code></td>
     <td>address</td>
     <td>refundee address</td>
   <tr>
   <tr>
     <td><code>_tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP token id</td>
   <tr>
</table>

---

### Unstake

Unstake NFT LP Position

```javascript
spells.add({
  connector: "UNISWAP-V3-STAKER-B",
  method: "unstake",
  args: [_rewardToken, _startTime, _endTime, _refundee, _tokenId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_rewardToken</code></td>
     <td>address</td>
     <td>_rewardToken address</td>
   <tr>
   <tr>
     <td><code>_startTime</code></td>
     <td>uint256</td>
     <td>stake start time</td>
   <tr>
   <tr>
     <td><code>_endTime</code></td>
     <td>uint256</td>
     <td>stake end time</td>
   <tr>
   <tr>
     <td><code>_refundee</code></td>
     <td>address</td>
     <td>refundee address</td>
   <tr>
   <tr>
     <td><code>_tokenId</code></td>
     <td>uint256</td>
     <td>NFT LP token id</td>
   <tr>
</table>

---

### ClaimRewards

Claim rewards

```javascript
spells.add({
  connector: "UNISWAP-V3-STAKER-B",
  method: "claimRewards",
  args: [_rewardToken, _amount]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_rewardToken</code></td>
     <td>address</td>
     <td>_rewardToken address</td>
   <tr>
   <tr>
     <td><code>_amount</code></td>
     <td>uint256</td>
     <td>requested amount</td>
   <tr>
</table>

---

### CreateIncentive

Create incentive

```javascript
spells.add({
  connector: "UNISWAP-V3-STAKER-B",
  method: "createIncentive",
  args: [_rewardToken, _startTime, _endTime, _refundee, _poolAddr, _reward]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_rewardToken</code></td>
     <td>address</td>
     <td>_rewardToken address</td>
   <tr>
   <tr>
     <td><code>_startTime</code></td>
     <td>uint256</td>
     <td>stake start time</td>
   <tr>
   <tr>
     <td><code>_endTime</code></td>
     <td>uint256</td>
     <td>stake end time</td>
   <tr>
   <tr>
     <td><code>_refundee</code></td>
     <td>address</td>
     <td>refundee address</td>
   <tr>
   <tr>
     <td><code>_poolAddr</code></td>
     <td>address</td>
     <td>Uniswap V3 Pool address</td>
   <tr>
   <tr>
     <td><code>_reward</code></td>
     <td>uint256</td>
     <td>reward amount</td>
   <tr>
</table>