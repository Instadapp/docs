---
title: stkAave.
description: 'Staked Aave.'
draft: true
---
> Lending & Borrowing
Aave-Stake-v1 connector triggers methods like claim, stake, cooldown, redeem, delegate. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xf73c94402bc24148b744083ed02654eec2c37d5b#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Claim

Claim Accrued AAVE Token rewards.

```javascript
spells.add({
  connector: "AAVE-STAKE-A",
  method: "claim",
  args: [amount, getId, setId]
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
     <td>uint256</td>
     <td>The amount of rewards to claim. uint(-1) for max.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens claimed.</td>
   <tr>
</table>

---

### Stake

Stake AAVE Token in Aave security module

```javascript
spells.add({
  connector: "AAVE-STAKE-A",
  method: "stake",
  args: [amount, getId, setId]
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
     <td>uint256</td>
     <td>The amount of AAVE to stake. uint(-1) for max.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens staked.</td>
   <tr>
</table>

---

### Cooldown

Initiate cooldown to unstake from Aave security module

```javascript
spells.add({
  connector: "AAVE-STAKE-A",
  method: "cooldown",
  args: []
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
</table>

---

### Redeem

Redeem AAVE tokens from Staked AAVE after cooldown period is over

```javascript
spells.add({
  connector: "AAVE-STAKE-A",
  method: "redeem",
  args: [amount, getId, setId]
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
     <td>uint256</td>
     <td>The amount of AAVE to redeem. uint(-1) for max.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens redeemed.</td>
   <tr>
</table>

---

### Delegate

Delegate AAVE or stkAAVE

```javascript
spells.add({
  connector: "AAVE-STAKE-A",
  method: "delegate",
  args: [delegatee, delegateAave, delegateStkAave, aaveDelegationType, stkAaveDelegationType]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>delegatee</code></td>
     <td>address</td>
     <td>The address of the delegatee</td>
   <tr>
   <tr>
     <td><code>delegateAave</code></td>
     <td>bool</td>
     <td>Whether to delegate Aave balance</td>
   <tr>
   <tr>
     <td><code>delegateStkAave</code></td>
     <td>bool</td>
     <td>Whether to delegate Staked Aave balance</td>
   <tr>
   <tr>
     <td><code>aaveDelegationType</code></td>
     <td>uint8</td>
     <td>Aave delegation type. Voting power - 0, Proposition power - 1, Both - 2</td>
   <tr>
   <tr>
     <td><code>stkAaveDelegationType</code></td>
     <td>uint8</td>
     <td>Staked Aave delegation type. Values similar to aaveDelegationType</td>
   <tr>
</table>