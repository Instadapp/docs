# Assets Transfer Polygon Bridge
> Polygon assets bridge.
Polygon-Bridge-v1.1 connector triggers methods like deposit. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x1b79b302132370b434fb7807b36cb72fb0510ad5#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit assets to the bridge.

```javascript
spells.add({
  connector: "POLYGON-BRIDGE-A",
  method: "deposit",
  args: [targetDsa, token, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><Badge>targetDsa</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address to receive the token on Polygon</td>
   <tr>
   <tr>
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to deposit. (For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of tokens to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the amount of tokens deposit.</td>
   <tr>
</table>