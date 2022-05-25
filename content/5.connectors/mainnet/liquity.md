---
title: Liquity
description: Lending & Borrowing.
draft: true
---
> Lending & Borrowing.
Liquity-v1 connector triggers methods like open, close, deposit, withdraw, borrow, repay, adjust, claimCollateralFromRedemption, stabilityDeposit, stabilityWithdraw, stabilityMoveEthGainToTrove, stake, unstake, claimStakingGains. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x3643ba40b8e2bd8f77233bdb6abe38c218f31bfe#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Open

Opens a Trove by depositing ETH and borrowing LUSD

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "open",
  args: [depositAmount, maxFeePercentage, borrowAmount, upperHint, lowerHint, getIds, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>depositAmount</code></td>
     <td>uint</td>
     <td>The amount of ETH to deposit</td>
   <tr>
   <tr>
     <td><code>maxFeePercentage</code></td>
     <td>uint</td>
     <td>The maximum borrow fee that this transaction should permit</td>
   <tr>
   <tr>
     <td><code>borrowAmount</code></td>
     <td>uint</td>
     <td>The amount of LUSD to borrow</td>
   <tr>
   <tr>
     <td><code>upperHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the upper bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>lowerHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the lower bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint[]</td>
     <td>Optional (default: 0) Optional storage slot to get deposit & borrow amounts stored using other spells</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint[]</td>
     <td>Optional (default: 0) Optional storage slot to set deposit & borrow amounts to be used in future spells</td>
   <tr>
</table>

---

### Close

Closes a Trove by repaying LUSD debt

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "close",
  args: [setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the ETH withdrawn from the Trove</td>
   <tr>
</table>

---

### Deposit

Increase Trove collateral (collateral Top up)

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "deposit",
  args: [amount, upperHint, lowerHint, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of ETH to deposit into Trove</td>
   <tr>
   <tr>
     <td><code>upperHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the upper bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>lowerHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the lower bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the ETH from</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>Optional storage slot to set the ETH deposited</td>
   <tr>
</table>

---

### Withdraw

Move Trove collateral from Trove to DSA

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "withdraw",
  args: [amount, upperHint, lowerHint, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of ETH to move from Trove to DSA</td>
   <tr>
   <tr>
     <td><code>upperHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the upper bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>lowerHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the lower bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>Optional storage slot to get the amount of ETH to withdraw</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the withdrawn ETH in</td>
   <tr>
</table>

---

### Borrow

Borrow LUSD via an existing Trove

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "borrow",
  args: [maxFeePercentage, amount, upperHint, lowerHint, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>maxFeePercentage</code></td>
     <td>uint</td>
     <td>The maximum borrow fee that this transaction should permit</td>
   <tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of LUSD to borrow</td>
   <tr>
   <tr>
     <td><code>upperHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the upper bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>lowerHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the lower bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the amount of LUSD to borrow</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the final amount of LUSD borrowed</td>
   <tr>
</table>

---

### Repay

Repay LUSD Trove debt

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "repay",
  args: [amount, upperHint, lowerHint, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of LUSD to repay</td>
   <tr>
   <tr>
     <td><code>upperHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the upper bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>lowerHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the lower bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the amount of LUSD from</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the final amount of LUSD repaid</td>
   <tr>
</table>

---

### Adjust

Adjust Trove debt and/or collateral

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "adjust",
  args: [maxFeePercentage, depositAmount, withdrawAmount, borrowAmount, repayAmount, upperHint, lowerHint, getIds, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>maxFeePercentage</code></td>
     <td>uint</td>
     <td>The maximum borrow fee that this transaction should permit</td>
   <tr>
   <tr>
     <td><code>depositAmount</code></td>
     <td>uint</td>
     <td>Amount of ETH to deposit</td>
   <tr>
   <tr>
     <td><code>withdrawAmount</code></td>
     <td>uint</td>
     <td>Amount of ETH to withdraw</td>
   <tr>
   <tr>
     <td><code>borrowAmount</code></td>
     <td>uint</td>
     <td>Amount of LUSD to borrow</td>
   <tr>
   <tr>
     <td><code>repayAmount</code></td>
     <td>uint</td>
     <td>Amount of LUSD to repay</td>
   <tr>
   <tr>
     <td><code>upperHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the upper bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>lowerHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the lower bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint[]</td>
     <td>Optional Get Ids for deposit, withdraw, borrow & repay</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint[]</td>
     <td>Optional Set Ids for deposit, withdraw, borrow & repay</td>
   <tr>
</table>

---

### ClaimCollateralFromRedemption

Claim remaining collateral from Trove

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "claimCollateralFromRedemption",
  args: [setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the ETH claimed</td>
   <tr>
</table>

---

### StabilityDeposit

Deposit LUSD into Stability Pool

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "stabilityDeposit",
  args: [amount, frontendTag, getDepositId, setDepositId, setEthGainId, setLqtyGainId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of LUSD to deposit into Stability Pool</td>
   <tr>
   <tr>
     <td><code>frontendTag</code></td>
     <td>address</td>
     <td>Address of the frontend to make this deposit against (determines the kickback rate of rewards)</td>
   <tr>
   <tr>
     <td><code>getDepositId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the amount of LUSD from</td>
   <tr>
   <tr>
     <td><code>setDepositId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the final amount of LUSD deposited</td>
   <tr>
   <tr>
     <td><code>setEthGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any ETH gains in</td>
   <tr>
   <tr>
     <td><code>setLqtyGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any LQTY gains in</td>
   <tr>
</table>

---

### StabilityWithdraw

Withdraw LUSD from Stability Pool

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "stabilityWithdraw",
  args: [amount, getWithdrawId, setWithdrawId, setEthGainId, setLqtyGainId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of LUSD to withdraw from Stability Pool</td>
   <tr>
   <tr>
     <td><code>getWithdrawId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the amount of LUSD to withdraw from</td>
   <tr>
   <tr>
     <td><code>setWithdrawId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the withdrawn LUSD</td>
   <tr>
   <tr>
     <td><code>setEthGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any ETH gains in</td>
   <tr>
   <tr>
     <td><code>setLqtyGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any LQTY gains in</td>
   <tr>
</table>

---

### StabilityMoveEthGainToTrove

Moves user's ETH gain from the Stability Pool into their Trove

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "stabilityMoveEthGainToTrove",
  args: [upperHint, lowerHint]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>upperHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the upper bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
   <tr>
     <td><code>lowerHint</code></td>
     <td>address</td>
     <td>Address of the Trove near the lower bound of where the user's Trove should now sit in the ordered Trove list</td>
   <tr>
</table>

---

### Stake

Stake LQTY in Staking Pool

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "stake",
  args: [amount, getStakeId, setStakeId, setEthGainId, setLusdGainId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of LQTY to stake</td>
   <tr>
   <tr>
     <td><code>getStakeId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the amount of LQTY to stake</td>
   <tr>
   <tr>
     <td><code>setStakeId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the final staked amount (can differ if requested with max balance: uint(-1))</td>
   <tr>
   <tr>
     <td><code>setEthGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any ETH gains</td>
   <tr>
   <tr>
     <td><code>setLusdGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any LUSD gains</td>
   <tr>
</table>

---

### Unstake

Unstake LQTY in Staking Pool

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "unstake",
  args: [amount, getUnstakeId, setUnstakeId, setEthGainId, setLusdGainId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of LQTY to unstake</td>
   <tr>
   <tr>
     <td><code>getUnstakeId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the amount of LQTY to unstake</td>
   <tr>
   <tr>
     <td><code>setUnstakeId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the unstaked LQTY</td>
   <tr>
   <tr>
     <td><code>setEthGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any ETH gains</td>
   <tr>
   <tr>
     <td><code>setLusdGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any LUSD gains</td>
   <tr>
</table>

---

### ClaimStakingGains

Claim ETH and LUSD gains from Staking

```javascript
spells.add({
  connector: "LIQUITY-A",
  method: "claimStakingGains",
  args: [setEthGainId, setLusdGainId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>setEthGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the claimed ETH</td>
   <tr>
   <tr>
     <td><code>setLusdGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the claimed LUSD</td>
   <tr>
</table>