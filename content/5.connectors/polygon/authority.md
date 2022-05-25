---
title: Authority
description: Manage Authorities to DSA.
draft: true
---
> Manage Authorities to DSA.
Auth-v1 connector triggers methods like add, remove. You can view details like source code, ABIs on [Polygonscan](https://polygonscan.com/address/0xf73c94402bc24148b744083ed02654eec2c37d5b#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Add

Add an address as account authority

```javascript
spells.add({
  connector: "AUTHORITY-A",
  method: "add",
  args: [authority]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>authority</code></td>
     <td>address</td>
     <td>The authority Address.</td>
   <tr>
</table>

---

### Remove

Remove an address as account authority

```javascript
spells.add({
  connector: "AUTHORITY-A",
  method: "remove",
  args: [authority]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>authority</code></td>
     <td>address</td>
     <td>The authority Address.</td>
   <tr>
</table>