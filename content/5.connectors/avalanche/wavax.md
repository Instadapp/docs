---
title: WAVAX
description: Wrap and Unwrap WAVAX.
draft: true
---
> Wrap and Unwrap WAVAX.
WAVAX-v1.0 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Snowtrace](https://snowtrace.io/address/0x497bc53507df17e60f731e9534cff74e8bc9dbb8#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate AVAX.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Wrap AVAX into WAVAX

```javascript
spells.add({
  connector: "WAVAX-A",
  method: "deposit",
  args: [amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of AVAX to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of AVAX deposited.</td>
   <tr>
</table>

---

### Withdraw

Unwrap AVAX from WAVAX

```javascript
spells.add({
  connector: "WAVAX-A",
  method: "withdraw",
  args: [amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint</td>
     <td>The amount of wavax to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of AVAX withdrawn.</td>
   <tr>
</table>