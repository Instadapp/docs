---
title: Aave V3 Import
description: Import EOA's aave V3 position to DSA's aave v3 position
draft: true
---
> Import EOA's aave V3 position to DSA's aave v3 position
Aave-v3-import-v1.1 connector triggers methods like importAave, importAaveWithCollateral. You can view details like source code, ABIs on [Etherscan](https://arbiscan.io/address/0xdff1091149be811adb2e5fe0fb48dba8dce5a755#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### ImportAave

Import EOA's aave V3 position to DSA's aave v3 position

```javascript
spells.add({
  connector: "AAVE-V3-IMPORT-A",
  method: "importAave",
  args: [userAccount, inputData]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>userAccount</code></td>
     <td>address</td>
     <td>The address of the EOA from which aave position will be imported</td>
   <tr>
   <tr>
     <td><code>inputData</code></td>
     <td>ImportInputData</td>
     <td>The struct containing all the neccessary input data</td>
   <tr>
</table>

---

### ImportAaveWithCollateral

Import EOA's aave V3 position to DSA's aave v3 position

```javascript
spells.add({
  connector: "AAVE-V3-IMPORT-A",
  method: "importAaveWithCollateral",
  args: [userAccount, inputData, enableCollateral]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>userAccount</code></td>
     <td>address</td>
     <td>The address of the EOA from which aave position will be imported</td>
   <tr>
   <tr>
     <td><code>inputData</code></td>
     <td>ImportInputData</td>
     <td>The struct containing all the neccessary input data</td>
   <tr>
   <tr>
     <td><code>enableCollateral</code></td>
     <td>bool[]</td>
     <td>The boolean array to enable selected collaterals in the imported position</td>
   <tr>
</table>