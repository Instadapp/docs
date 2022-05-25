---
title: Gelato Aave Protection
description: Protect DSA against Liquidation risk on Aave with Gelato.
draft: true
---
> Protect DSA against Liquidation risk on Aave with Gelato.
GAaveProtectionMainnetConnector-v1 connector triggers methods like submitProtection, updateProtection, cancelProtection, cancelAndRevoke. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x825832a5a589ed9500caee2aa2d2c3117218d6a9#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### SubmitProtection



```javascript
spells.add({
  connector: "GELATO-AAVE-A",
  method: "submitProtection",
  args: [_wantedHealthFactor, _minimumHealthFactor, _isPermanent]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_wantedHealthFactor</code></td>
     <td>uint256</td>
     <td>targeted health after protection.</td>
   <tr>
   <tr>
     <td><code>_minimumHealthFactor</code></td>
     <td>uint256</td>
     <td>trigger protection when current health</td>
   <tr>
   <tr>
     <td><code>_isPermanent</code></td>
     <td>bool</td>
     <td>boolean to set a protection as permanent</td>
   <tr>
</table>

---

### UpdateProtection



```javascript
spells.add({
  connector: "GELATO-AAVE-A",
  method: "updateProtection",
  args: [_wantedHealthFactor, _minimumHealthFactor, _isPermanent]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>_wantedHealthFactor</code></td>
     <td>uint256</td>
     <td>targeted health after protection.</td>
   <tr>
   <tr>
     <td><code>_minimumHealthFactor</code></td>
     <td>uint256</td>
     <td>trigger protection when current health</td>
   <tr>
   <tr>
     <td><code>_isPermanent</code></td>
     <td>bool</td>
     <td>boolean to set a protection as permanent</td>
   <tr>
</table>

---

### CancelProtection



```javascript
spells.add({
  connector: "GELATO-AAVE-A",
  method: "cancelProtection",
  args: []
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
</table>

---

### CancelAndRevoke



```javascript
spells.add({
  connector: "GELATO-AAVE-A",
  method: "cancelAndRevoke",
  args: []
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
</table>