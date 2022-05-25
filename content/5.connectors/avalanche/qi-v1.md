---
title: QI
description: Claim Reward.
draft: true
---
> Claim Reward.
Benqi-Incentives-v1 connector triggers methods like ClaimQiReward, ClaimQiRewardTwo, ClaimQiRewardThree, ClaimAvaxReward, ClaimAvaxRewardTwo, ClaimAvaxRewardThree, delegate. You can view details like source code, ABIs on [Snowtrace](https://snowtrace.io/address/0x5d72e1b68a5043c99d700d0928f0a922963f186e#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate AVAX.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### ClaimQiReward

Claim Accrued Qi Token.

```javascript
spells.add({
  connector: "QI-A",
  method: "ClaimQiReward",
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
     <td>uint256</td>
     <td>ID stores the amount of Reward claimed.</td>
   <tr>
</table>

---

### ClaimQiRewardTwo

Claim Accrued Qi Token.

```javascript
spells.add({
  connector: "QI-A",
  method: "ClaimQiRewardTwo",
  args: [tokenIds, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenIds</code></td>
     <td>string[]</td>
     <td>Array of supplied and borrowed token IDs.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of Reward claimed.</td>
   <tr>
</table>

---

### ClaimQiRewardThree

Claim Accrued Qi Token.

```javascript
spells.add({
  connector: "QI-A",
  method: "ClaimQiRewardThree",
  args: [supplyTokenIds, borrowTokenIds, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>supplyTokenIds</code></td>
     <td>string[]</td>
     <td>Array of supplied tokenIds.</td>
   <tr>
   <tr>
     <td><code>borrowTokenIds</code></td>
     <td>string[]</td>
     <td>Array of borrowed tokenIds.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of Reward claimed.</td>
   <tr>
</table>

---

### ClaimAvaxReward

Claim Accrued Avax Token.

```javascript
spells.add({
  connector: "QI-A",
  method: "ClaimAvaxReward",
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
     <td>uint256</td>
     <td>ID stores the amount of Reward claimed.</td>
   <tr>
</table>

---

### ClaimAvaxRewardTwo

Claim Accrued Avax Token.

```javascript
spells.add({
  connector: "QI-A",
  method: "ClaimAvaxRewardTwo",
  args: [tokenIds, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenIds</code></td>
     <td>string[]</td>
     <td>Array of supplied and borrowed token IDs.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of Reward claimed.</td>
   <tr>
</table>

---

### ClaimAvaxRewardThree

Claim Accrued Avax Token.

```javascript
spells.add({
  connector: "QI-A",
  method: "ClaimAvaxRewardThree",
  args: [supplyTokenIds, borrowTokenIds, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>supplyTokenIds</code></td>
     <td>string[]</td>
     <td>Array of supplied tokenIds.</td>
   <tr>
   <tr>
     <td><code>borrowTokenIds</code></td>
     <td>string[]</td>
     <td>Array of borrowed tokenIds.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of Reward claimed.</td>
   <tr>
</table>

---

### Delegate

Delegate votes.

```javascript
spells.add({
  connector: "QI-A",
  method: "delegate",
  args: [delegatee]
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
     <td>The address to delegate the votes to.</td>
   <tr>
</table>