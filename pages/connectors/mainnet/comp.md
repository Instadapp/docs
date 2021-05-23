---
title: COMP.
description: 'Claim COMP.'
---
> Lending & Borrowing
COMP-v1 connector triggers methods like ClaimComp, ClaimCompTwo, ClaimCompThree, delegate. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xb446e325d44c52b93ec122bf76301f235f90b9c9#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### ClaimComp

Claim Accrued COMP Token.

```javascript
spells.add({
  connector: "COMP-A",
  method: "ClaimComp",
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
     <td>ID stores the amount of COMP claimed.</td>
   <tr>
</table>

---

### ClaimCompTwo

Claim Accrued COMP Token.

```javascript
spells.add({
  connector: "COMP-A",
  method: "ClaimCompTwo",
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
     <td>ID stores the amount of COMP claimed.</td>
   <tr>
</table>

---

### ClaimCompThree

Claim Accrued COMP Token.

```javascript
spells.add({
  connector: "COMP-A",
  method: "ClaimCompThree",
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
     <td>ID stores the amount of COMP claimed.</td>
   <tr>
</table>

---

### Delegate

Delegate votes.

```javascript
spells.add({
  connector: "COMP-A",
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