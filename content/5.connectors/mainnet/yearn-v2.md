---
title: Yearn V2
description: Vaults & yield.
draft: true
---
> Vaults & yield.
YearnV2-v1.0 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x598522c536612550be09f01de201a6634dafa307#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

This will deposit funds to a specific Yearn Vault.

```javascript
spells.add({
  connector: "YEARN-VAULT-A",
  method: "deposit",
  args: [vault, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>address</td>
     <td>The address of the vault to deposit funds into.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of tokens to deposit.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of shares received.</td>
   <tr>
</table>

---

### Withdraw

This will withdraw the share from a specific Yearn Vault.

```javascript
spells.add({
  connector: "YEARN-VAULT-A",
  method: "withdraw",
  args: [vault, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>address</td>
     <td>The address of the vault to withdraw shares from.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of shares to withdraw.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount want token redeemed.</td>
   <tr>
</table>