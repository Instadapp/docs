---
title: UBIQUITY
description: Ubiquity Dollar (uAD).
draft: true
---
> Ubiquity Dollar (uAD).
Ubiquity-v1 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x8ec066d75d665616a94f2eccdbe49b54eaeefc78#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

3POOL (DAI / USDC / USDT) => METAPOOL (3CRV / uAD) => uAD3CRV-f => Ubiquity BondingShareSTEP 1 : 3POOL (DAI / USDC / USDT) => 3CRVSTEP 2 : METAPOOL(3CRV / UAD) => uAD3CRV-fSTEP 3 : uAD3CRV-f => Ubiquity BondingShare

```javascript
spells.add({
  connector: "UBIQUITY-A",
  method: "deposit",
  args: [token, amount, durationWeeks, getId, setId]
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
     <td>Token deposited : DAI, USDC, USDT, 3CRV, uAD or uAD3CRV-f</td>
   <tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint256</td>
     <td>Amount of tokens to deposit (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>durationWeeks</code></td>
     <td>uint256</td>
     <td>Duration in weeks tokens will be locked (4-208)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the bonding share id of tokens deposited.</td>
   <tr>
</table>

---

### Withdraw

Ubiquity BondingShare => uAD3CRV-f => METAPOOL (3CRV / uAD) => 3POOL (DAI / USDC / USDT)STEP 1 : Ubiquity BondingShare  => uAD3CRV-fSTEP 2 : uAD3CRV-f => METAPOOL(3CRV / UAD)STEP 3 : 3CRV => 3POOL (DAI / USDC / USDT)

```javascript
spells.add({
  connector: "UBIQUITY-A",
  method: "withdraw",
  args: [bondingShareId, token, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>bondingShareId</code></td>
     <td>uint256</td>
     <td>Bonding Share Id to withdraw</td>
   <tr>
   <tr>
     <td><code>token</code></td>
     <td>address</td>
     <td>Token to withdraw to : DAI, USDC, USDT, 3CRV, uAD or uAD3CRV-f</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID</td>
   <tr>
</table>