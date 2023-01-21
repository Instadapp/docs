# Authority
> Manage Authorities to DSA.
Auth-v1.1 connector triggers methods like add, remove. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x351bb32e90c35647df7a584f3c1a3a0c38f31c68#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
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
     <td><Badge>authority</Badge></td>
     <td><Badge>address</Badge></td>
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
     <td><Badge>authority</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The authority Address.</td>
   <tr>
</table>