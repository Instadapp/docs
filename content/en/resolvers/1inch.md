---
title: 1inch
description: '1inch Resolver'
position: 37
category: 'Resolvers'
---
> 1inch Resolver


1inch Resolver to get buy and sell details. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x16F0a50305c6aCf1A44A3DAa225531e731f39A9F#code).

---

### Get buy amount.

Get buy token details like amount and unit amount.


```javascript
dsa.oneInch.getBuyAmount(buyToken, sellToken, sellAmt, slippage, distribution, disableDexes);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buyToken</code></td>
    <td>address</td>
    <td>The buy token symbol.</td>
  <tr>
  <tr>
    <td><code>sellToken</code></td>
    <td>address</td>
    <td>The sell token symbol.</td>
  <tr>
  <tr>
    <td><code>sellAmt</code></td>
    <td>number</td>
    <td>The amount of tokens to sells.</td>
  <tr>
  <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage in percent eg - 1 means 1%, 10 means 10%, etc</td>
  <tr>
  <tr>
    <td><code>distribution</code></td>
    <td>array</td>
    <td>(Optional) If not defined, default will be used. The distribution of DEXs to swap accross</td>
  <tr>
  <tr>
    <td><code>disableDexes</code></td>
    <td>number</td>
    <td>(Optional) If not all DEXs will stay enabled. The number of DEXs to disable.</td>
  <tr>
</table>

**Returns:** `Object` of sell token details.

```javascript
{
    buyAmt: "2208.0499999999997",
    buyAmtRaw: "2208050000000000000000",
    unitAmt: "216388900000000000000",
    distribution: ["0", "0", ..]
}
```
<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buyAmt</code></td>
    <td>number/string</td>
    <td>Expected buy token amount.</td>
  <tr>
  <tr>
    <td><code>buyAmtRaw</code></td>
    <td>number/string</td>
    <td>Expected buy token amount in decimal form.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number/string</td>
    <td>The unit amount is the minimum amount of buy token expected per sell token. It is calculated with the help of slippage. The parameter is passed directly in the kyber connector.</td>
  <tr>
  <tr>
    <td><code>distribution</code></td>
    <td>array</td>
    <td>The distribution of swap across differnt DEXs.</td>
  <tr>

</table>
