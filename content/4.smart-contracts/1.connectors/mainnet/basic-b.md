# Basic B (ERC721)
> Deposit & Withdraw ERC721 from DSA.
BASIC-ERC721-v1.0 connector triggers methods like depositERC721, withdrawERC721. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x4dfa1780ae85f0ec7197c61ffe533c7dc84f15e9#code).

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
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>Address of token.</td>
   <tr>
   <tr>
     <td><Badge>tokenId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID of token.</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve tokenId.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
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
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>Address of the token.</td>
   <tr>
   <tr>
     <td><Badge>tokenId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID of token.</td>
   <tr>
   <tr>
     <td><Badge>to</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address to receive the token upon withdrawal</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve tokenId.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the tokenId.</td>
   <tr>
</table>