---
title: Basic C (ERC1155)
description: Deposit & Withdraw from ERC1155 DSA.
draft: true
---
> Deposit & Withdraw from ERC1155 DSA.
BASIC-ERC1155-v1.0 connector triggers methods like depositERC1155, withdrawERC1155. You can view details like source code, ABIs on [Snowtrace](https://snowtrace.io/address/0xe11d191af6c834ce5b11a0ea52cbc16d0fd52f1e#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate AVAX.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### DepositERC1155

Deposit a ERC1155 token to DSA

```javascript
spells.add({
  connector: "BASIC-C",
  method: "depositERC1155",
  args: [token, tokenId, amount, getId, setId]
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
     <td>Address of token.</td>
   <tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>uint256</td>
     <td>ID of token.</td>
   <tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint256</td>
     <td>Amount to deposit.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount.</td>
   <tr>
</table>

---

### WithdrawERC1155

Withdraw a ERC1155 token from DSA

```javascript
spells.add({
  connector: "BASIC-C",
  method: "withdrawERC1155",
  args: [token, tokenId, to, amount, getId, setId]
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
     <td>Address of the token.</td>
   <tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>uint256</td>
     <td>ID of token.</td>
   <tr>
   <tr>
     <td><code>to</code></td>
     <td>address</td>
     <td>The address to receive the token upon withdrawal</td>
   <tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint256</td>
     <td>Amount to withdraw.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount.</td>
   <tr>
</table>