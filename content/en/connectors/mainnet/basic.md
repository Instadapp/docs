---
title: Basic
description: 'Deposit Assets To Smart Account.'
draft: true
---
> Lending & Borrowing
Basic-v1 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x9926955e0Dd681Dc303370C52f4Ad0a4dd061687#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit



```javascript
spells.add({
  connector: "BASIC-A",
  method: "deposit",
  args: [token, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>token</code></td>
     <td>address</td>
     <td>Token Address.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>Token Amount.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>Get Storage ID.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>Set Storage ID.</td>
   <tr>
</table>

---

### Withdraw



```javascript
spells.add({
  connector: "BASIC-A",
  method: "withdraw",
  args: [token, amt, to, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>token</code></td>
     <td>address</td>
     <td>Token Address.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint</td>
     <td>Token Amount.</td>
   <tr>
   <tr>
     <td><code>to</code></td>
     <td>address</td>
     <td>Withdraw token address.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>Get Storage ID.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>Set Storage ID.</td>
   <tr>
</table>