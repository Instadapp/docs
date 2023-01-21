# Basic C (ERC1155)
> Deposit & Withdraw from ERC1155 DSA.
BASIC-ERC1155-v1.0 connector triggers methods like depositERC1155, withdrawERC1155. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x6ecbf5a77d65f857c66fe729cb3cd7835369c42b#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
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
     <td><Badge>amount</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>Amount to deposit.</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
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
     <td><Badge>amount</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>Amount to withdraw.</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amount.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the amount.</td>
   <tr>
</table>