---
title: Aave V2 to V3 import
description: migrate aave V2 position to aave v3 position
draft: true
---
> migrate aave V2 position to aave v3 position
Aave-Import-v2-to-v3 connector triggers methods like importAaveV2ToV3, migrateAaveV2ToV3. You can view details like source code, ABIs on [Polygonscan](https://polygonscan.com/address/0x39a7dd80abfcb49dc418dc65f3b8cac7fc661f01#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### ImportAaveV2ToV3

Import EOA's aave V2 position to DSA's aave v3 position

```javascript
spells.add({
  connector: "AAVE-IMPORT-V2-V3-A",
  method: "importAaveV2ToV3",
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

### MigrateAaveV2ToV3

Migrate DSA's aave V2 position to DSA's aave v3 position

```javascript
spells.add({
  connector: "AAVE-IMPORT-V2-V3-A",
  method: "migrateAaveV2ToV3",
  args: [inputData]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>inputData</code></td>
     <td>ImportInputData</td>
     <td>The struct containing all the neccessary input data</td>
   <tr>
</table>