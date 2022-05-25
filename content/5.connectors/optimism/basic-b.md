---
title: Basic B (ERC721)
description: Deposit & Withdraw ERC721 from DSA.
draft: true
---
> Deposit & Withdraw ERC721 from DSA.
BASIC-ERC721-v1.0 connector triggers methods like depositERC721, withdrawERC721. You can view details like source code, ABIs on [Etherscan](https://optimistic.etherscan.io/address/0x3bca6531edb2b41319fc56ba3c142367f83b65ee#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### DepositERC721

Deposit a ERC721 token to DSA

```javascript
spells.add({
  connector: "BASIC-B",
  method: "depositERC721",
  args: [token, tokenId, getId, setId]
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
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve tokenId.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the tokenId.</td>
   <tr>
</table>

---

### WithdrawERC721

Withdraw a ERC721 token from DSA

```javascript
spells.add({
  connector: "BASIC-B",
  method: "withdrawERC721",
  args: [token, tokenId, to, getId, setId]
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
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve tokenId.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the tokenId.</td>
   <tr>
</table>