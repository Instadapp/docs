# Aave Rewards
> Claim Aave rewards.
Aave-Incentives-v1 connector triggers methods like claim. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x611c1fa59aa1d6352c4c8bd44882063c6aee85e0#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Claim

Claim Pending Rewards from Aave incentives contract.

```javascript
spells.add({
  connector: "AAVE-CLAIM-A",
  method: "claim",
  args: [assets, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><Badge>assets</Badge></td>
     <td><Badge>address[]</Badge></td>
     <td>The list of assets supplied and borrowed.</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of reward to claim. (uint(-1) for max)</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the amount of rewards claimed.</td>
   <tr>
</table>