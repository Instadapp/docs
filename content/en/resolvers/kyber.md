---
title: Kyber
description: 'Kyber Resolver'
position: 32
category: 'Resolvers'
---
> Kyber Resolver


Kyber Resolver to get buy and sell details. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x8240b601d9B565e2BefaA3DA82Cc984E76cB3499#code).

---

### Get buy amount.

Get buy token details like amount and unit amount.


```javascript
dsa.kyber.getBuyAmount(buyToken, sellToken, sellAmt, slippage);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buyToken</code></td>
    <td>string</td>
    <td>The buy token symbol.</td>
  <tr>
  <tr>
    <td><code>sellToken</code></td>
    <td>string</td>
    <td>The sell token symbol.</td>
  <tr>
  <tr>
    <td><code>sellAmt</code></td>
    <td>number</td>
    <td>The amount of tokens to sell. Amount to be written in normal form eg - 1.1 ETH, 100 DAI.</td>
  <tr>
  <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage in percent eg - 1 means 1%, 10 means 10%, etc.</td>
  <tr>
</table>

**Returns:** `Object` of buy token details.

```javascript
{
    buyAmt: "2208.0499999999997",
    buyAmtRaw: "2208050000000000000000",
    unitAmt: "216388900000000000000"
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
</table>
