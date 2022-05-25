---
title: Lite-A
description: Supply, Withdraw & Deleverage
draft: true
---
> Supply, Withdraw & Deleverage
InstaLite-v1 connector triggers methods like supply, withdraw, deleverage. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x60f9054214066a62550aec23efa4c78013f4a2ee#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Supply

Supply a token into Instalite.

```javascript
spells.add({
  connector: "LITE-A",
  method: "supply",
  args: [vaultAddr, token, amt, getId, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vaultAddr</code></td>
     <td>address</td>
     <td>Address of instaLite Contract.</td>
   <tr>
   <tr>
     <td><code>token</code></td>
     <td>address</td>
     <td>The address of the token to be supplied. (For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of token to be supplied. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint256[]</td>
     <td>array of IDs to store the amount of tokens deposited.</td>
   <tr>
</table>

---

### Withdraw

Withdraw deposited tokens from Instalite.

```javascript
spells.add({
  connector: "LITE-A",
  method: "withdraw",
  args: [vaultAddr, amt, getId, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vaultAddr</code></td>
     <td>address</td>
     <td>Address of vaultAddress Contract.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to withdraw.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint256[]</td>
     <td>array of IDs to stores the amount of tokens withdrawn.</td>
   <tr>
</table>

---

### Deleverage

Deleverage Instalite vault.

```javascript
spells.add({
  connector: "LITE-A",
  method: "deleverage",
  args: [vaultAddr, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vaultAddr</code></td>
     <td>address</td>
     <td>Address of vaultAddress Contract.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to deleverage.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID to set amt.</td>
   <tr>
</table>