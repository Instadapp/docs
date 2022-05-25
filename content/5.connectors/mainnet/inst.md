---
title: INST Governance
description: Governance.
draft: true
---
> Governance.
Instadapp-governance-bravo-v1 connector triggers methods like delegate, voteCast, voteCastWithReason. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x52c2c4a0db049255ff345eb9d3fb1f555b7a924a#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Delegate

Delegating votes to delegatee.

```javascript
spells.add({
  connector: "INST-A",
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
     <td>The address to delegate the votes.</td>
   <tr>
</table>

---

### VoteCast

Casting vote for a proposal

```javascript
spells.add({
  connector: "INST-A",
  method: "voteCast",
  args: [proposalId, support]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>proposalId</code></td>
     <td>uint256</td>
     <td>The id of the proposal to vote on</td>
   <tr>
   <tr>
     <td><code>support</code></td>
     <td>uint256</td>
     <td>The support value for the vote. 0=against, 1=for, 2=abstain</td>
   <tr>
</table>

---

### VoteCastWithReason

Casting vote for a proposal

```javascript
spells.add({
  connector: "INST-A",
  method: "voteCastWithReason",
  args: [proposalId, support, reason]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>proposalId</code></td>
     <td>uint256</td>
     <td>The id of the proposal to vote on</td>
   <tr>
   <tr>
     <td><code>support</code></td>
     <td>uint256</td>
     <td>The support value for the vote. 0=against, 1=for, 2=abstain</td>
   <tr>
   <tr>
     <td><code>reason</code></td>
     <td>string</td>
     <td>The reason given for the vote</td>
   <tr>
</table>