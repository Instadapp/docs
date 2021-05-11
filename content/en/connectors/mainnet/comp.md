---
title: Comp
description: 'Claim Comp'
draft: true
---
> 
Compound connector triggers methods like deposit, borrow, withdraw, payback, and more. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xB4a04F1C194bEed64FCE27843B5b3079339cdaD4#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### ClaimComp

Claim Comp tokens and stores the amount of token claimed with setId

```javascript
spells.add({
    connector: "comp",
    method: "ClaimComp",
    args: [setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token claimed.</td>
  <tr>
</table>

---

### ClaimCompTwo

Claim Comp with array of tokens supplied and borrowed and stores the amount of token claimed with setId

```javascript
spells.add({
    connector: "comp",
    method: "ClaimCompTwo",
    args: [tokens, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>tokens</code></td>
    <td>address[]</td>
    <td>Array of tokens supplied and borrowed.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token claimed.</td>
  <tr>
</table>

---

### ClaimCompThree

Claim Comp with array of tokens supplied and array of tokens borrowed and stores the amount of token claimed with setId

```javascript
spells.add({
    connector: "comp",
    method: "ClaimCompThree",
    args: [supplyTokens, borrowTokens, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>supplyTokens</code></td>
    <td>address[]</td>
    <td>Array of tokens supplied.</td>
  <tr>
  <tr>
    <td><code>borrowTokens</code></td>
    <td>address[]</td>
    <td>Array of tokens borrowed.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token claimed.</td>
  <tr>
</table>