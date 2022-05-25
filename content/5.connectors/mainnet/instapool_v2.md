---
title: Instapool V2
description: Inbuilt Flash Loan in DSA
draft: true
---
> Inbuilt Flash Loan in DSA
Instapool-v1.1 connector triggers methods like flashBorrowAndCast, flashPayback. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x5806af7ab22e2916fa582ff05731bf7c682387b2#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### FlashBorrowAndCast

Borrow Flashloan and Cast spells.

```javascript
spells.add({
  connector: "INSTAPOOL-A",
  method: "flashBorrowAndCast",
  args: [token, amt, route, data]
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
     <td>Flashloan source route. (0: dYdX(ETH,DAI,USDC only), 1: MakerDAO(DAI only), 2: Compound(All borrowable tokens in Compound), 3: AaveV2(All borrowable tokens in AaveV2))</td>
   <tr>
   <tr>
     <td><code>data</code></td>
     <td>bytes</td>
     <td>targets & data for cast.</td>
   <tr>
</table>

---

### FlashPayback

Return token to InstaPool.

```javascript
spells.add({
  connector: "INSTAPOOL-A",
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