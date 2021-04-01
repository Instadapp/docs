---
title: OasisDEX
description: 'Get expected prices for swaps'
position: 31
category: 'Resolvers'
---
> Get expected prices for swaps


OasisDEX Resolver to get buy and sell details. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xE554c84c030bd5e850cDbd17f6583818b8dE5b1F#code).

---

### Get Buy Amount

Fetch the buy token details like amount and unit.

```javascript
dsa.oasis.getBuyAmount(buyToken, sellToken, sellAmt, slippage);
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
    <td>The amount of tokens to sell. Amount to be written in decimal form like 1.1, 100.2, etc</td>
  <tr>
  <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage in % like 1 means 1%, 10 means 10%.</td>
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
    <td>The unit amount is the minimum amount of buy token expected per sell token. It is calculated with the help of slippage. The parameter is passed directly in the OasisDEX connector.</td>
  <tr>
</table>

---

### Get Sell Amount

Fetch the sell token details like amount and unit.

```javascript
dsa.oasis.getSellAmount(buyToken, sellToken, buyAmt, slippage);
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
    <td><code>buyAmt</code></td>
    <td>number</td>
    <td>The amount of tokens to buy. Amount in decimal form like 1.1, 100.2.</td>
  <tr>
  <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage in % like 1 means 1%, 10 means 10%.</td>
  <tr>
</table>

**Returns:** `Object` of buy token details.

```javascript
{
    sellAmt: "4.513042693383879",
    sellAmtRaw: "4513042693383879411",
    unitAmt: "4422781839516201"
}
```
<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>sellAmt</code></td>
    <td>number/string</td>
    <td>The expected sell token amount.</td>
  <tr>
  <tr>
    <td><code>sellAmtRaw</code></td>
    <td>number/string</td>
    <td>The expected sell token amount in decimal form.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number/string</td>
    <td>The unit amount is the minimum amount of buy token expected per sell token. It is calculated with the help of slippage. The parameter is passed directly in the OasisDEX connector.</td>
  <tr>
</table>

