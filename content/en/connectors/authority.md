---
title: Authority
description: 'Manage Authorities to DSA'
position: 6
category: 'Connectors'
---
> Manage Authorities to DSA

Auth connector triggers the methods adding and removing the DSA Authorities. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xB3242e09C8E5cE6E14296b3d3AbC4C6965F49b98#code).

---

### Add Authority

Add Authority to DSA.

```javascript
spells.add({
    connector: "authority",
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
    <td>The authority address.</td>
  <tr>
</table>

---

### Remove Authority

Remove Authority to DSA.

```javascript
spells.add({
    connector: "authority",
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
    <td>The authority address.</td>
  <tr>
</table>