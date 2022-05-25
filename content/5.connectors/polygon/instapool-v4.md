---
title: INSTAPOOL-V4
description: Inbuilt Flash Loan in DSA
draft: true
---
> Inbuilt Flash Loan in DSA
Instapool-v4 connector triggers methods like flashBorrowAndCast, flashPayback, flashMultiBorrowAndCast, flashMultiPayback. You can view details like source code, ABIs on [Polygonscan](https://polygonscan.com/address/0x2092ae1dc7170167b86b78ea820db25abebd5505#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### FlashBorrowAndCast

Borrow Flashloan and Cast spells.

```javascript
spells.add({
  connector: "INSTAPOOL-C",
  method: "flashBorrowAndCast",
  args: [token, amt, route, data, extraData]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>token</code></td>
     <td>address</td>
     <td>Token Address.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint</td>
     <td>Token Amount.</td>
   <tr>
   <tr>
     <td><code>route</code></td>
     <td>uint</td>
     <td>Flashloan source route.</td>
   <tr>
   <tr>
     <td><code>data</code></td>
     <td>bytes</td>
     <td>targets & data for cast.</td>
   <tr>
   <tr>
     <td><code>extraData</code></td>
     <td>bytes</td>
     <td>to be kept bytes(0) in most cases. Can be useful to decide data for some particular routes</td>
   <tr>
</table>

---

### FlashPayback

Return token to InstaPool.

```javascript
spells.add({
  connector: "INSTAPOOL-C",
  method: "flashPayback",
  args: [token, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>token</code></td>
     <td>address</td>
     <td>Token Address.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint</td>
     <td>Token Amount.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>Get token amount at this ID from `InstaMemory` Contract.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>Set token amount at this ID in `InstaMemory` Contract.</td>
   <tr>
</table>

---

### FlashMultiBorrowAndCast

Borrow multi-tokens Flashloan and Cast spells.

```javascript
spells.add({
  connector: "INSTAPOOL-C",
  method: "flashMultiBorrowAndCast",
  args: [tokens_, amts_, route, data, extraData]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokens_</code></td>
     <td>address[]</td>
     <td>Array of Token Addresses.</td>
   <tr>
   <tr>
     <td><code>amts_</code></td>
     <td>uint[]</td>
     <td>Array of Token Amounts.</td>
   <tr>
   <tr>
     <td><code>route</code></td>
     <td>uint</td>
     <td>Flashloan source route.</td>
   <tr>
   <tr>
     <td><code>data</code></td>
     <td>bytes</td>
     <td>targets & data for cast.</td>
   <tr>
   <tr>
     <td><code>extraData</code></td>
     <td>bytes</td>
     <td>to be kept bytes(0) in most cases. Can be useful to decide data for some particular routes</td>
   <tr>
</table>

---

### FlashMultiPayback

Return multi-tokens to InstaPool.

```javascript
spells.add({
  connector: "INSTAPOOL-C",
  method: "flashMultiPayback",
  args: [tokens_, amts_, getIds, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokens_</code></td>
     <td>address[]</td>
     <td>Array of Token Addresses.</td>
   <tr>
   <tr>
     <td><code>amts_</code></td>
     <td>uint[]</td>
     <td>Array of Token Amounts.</td>
   <tr>
   <tr>
     <td><code>getIds</code></td>
     <td>uint[]</td>
     <td>Array of getId token amounts.</td>
   <tr>
   <tr>
     <td><code>setIds</code></td>
     <td>uint[]</td>
     <td>Array of setId token amounts.</td>
   <tr>
</table>