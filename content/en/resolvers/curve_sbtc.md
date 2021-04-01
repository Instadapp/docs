---
title: Curve sBTC
description: 'Curve sBTC Resolver'
position: 34
category: 'Resolvers'
---
> Curve sBTC Resolver


Curve Resolver fetch Position of user, Buy, Deposit and Withdraw details. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x55d71Dd2d3A8A5932dF7fd6c94347FA6507535BA#code).

---

### Get Position

Fetch the Curve position details of an address.

```javascript
dsa.curve_sbtc.getPosition(address);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>address</code></td>
    <td>address/string</td>
    <td>The owner address.</td>
  <tr>
</table>

**Returns:** `Object` with all the Position details.

```javascript
{
    "curveBalance": 0,
    "userShare": 0,
    "virtualPrice": 1.0020898812279617,
    "totalSupply": 1734.150556270193,
    "renBtcPoolBalance": 790.60846199,
    "wBtcPoolBalance": 545.62278272
    "sBtcPoolBalance": 402.2394863091501,
    }
```

<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>curveBalance</code></td>
    <td>number</td>
    <td>User's curve token balance.</td>
  <tr>
  <tr>
    <td><code>totalSupply</code></td>
    <td>number</td>
    <td>Total supply of the curve token</td>
  <tr>
  <tr>
    <td><code>virtualPrice</code></td>
    <td>number/string</td>
    <td>Virtual price of the curve token on sBTC pool.</td>
  <tr>
  <tr>
    <td><code>userShare</code></td>
    <td>number</td>
    <td>The users share in % eg - 1 = 1% share</td>
  <tr>
  <tr>
    <td><code>renBtcPoolBalance</code></td>
    <td>number</td>
    <td>Balance of renBTC in the pool.</td>
  <tr>
  <tr>
    <td><code>wBtcPoolBalance</code></td>
    <td>number</td>
    <td>Balance of wBTC in the pool.</td>
  <tr>
  <tr>
    <td><code>sBtcPoolBalance</code></td>
    <td>number</td>
    <td>Balance of sBTC in the pool.</td>
  <tr>
</table>

---

### Get Buy Amount

Fetch amount of tokens to buy of a user with just a single call.

```javascript
dsa.curve_sbtc.getBuyAmount(buyToken, sellToken, sellAmt, slippage)
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
    <td>The amount of tokens to sell. Amount to be written in normal form eg - 1.1 wBTC, 0.3 renBTC.</td>
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
    unitAmt: "216388900000000000000",
    virtualPrice: "1.0020898812279617"
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
    <td>The unit amount is the minimum amount of curve token amount expected per token amount. It is calculated with the help of slippage. The parameter is passed directly in the curve connector.</td>
  <tr>
  <tr>
    <td><code>virtualPrice</code></td>
    <td>number/string</td>
    <td>Virtual price of the curve token on sBTC pool.</td>
  <tr>
</table>

### Get Deposit Amount

Fetch amount of tokens to deposit of a user with just a single call.

```javascript
dsa.curve_sbtc.getDepositAmount(token, amount, slippage)
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token</code></td>
    <td>string</td>
    <td>The deposit token symbol.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to deposit. This should be a decimal value.</td>
  <tr>
  <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage to deposit in percent eg - 1 means 1%, 10 means 10%, etc.</td>
  <tr>
</table>

**Returns:** `Object` of buy token details.

```javascript
{
    curveAmt: "2208.0499999999997",
    curveAmtRaw: "2208050000000000000000",
    unitAmt: "216388900000000000000",
    virtualPrice: "1.0020898812279617"
}
```
<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>curveAmt</code></td>
    <td>number/string</td>
    <td>Expected deposit token amount.</td>
  <tr>
  <tr>
    <td><code>curveAmtRaw</code></td>
    <td>number/string</td>
    <td>Expected deposit token amount in decimal form.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number/string</td>
    <td>The unit amount is the minimum amount of curve token expected per token. It is calculated with the help of slippage. The parameter is passed directly in the curve_sbtc connector.</td>
  <tr>
  <tr>
    <td><code>virtualPrice</code></td>
    <td>number/string</td>
    <td>Virtual price of the curve token on sBTC pool.</td>
  <tr>
</table>

### Get Withdraw Amount

Fetch amount of tokens to withdraw of a user with just a single call.

```javascript
dsa.curve_sbtc.getWithdrawAmount(token, amount, slippage)
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token</code></td>
    <td>string</td>
    <td>The withdraw token symbol.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to withdraw. This should be a decimal value.</td>
  <tr>
  <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage to withdraw in percent eg - 1 means 1%, 10 means 10%, etc.</td>
  <tr>
</table>

**Returns:** `Object` of withdraw token details.

```javascript
{
    curveAmt: "2208.0499999999997",
    curveAmtRaw: "2208050000000000000000",
    unitAmt: "216388900000000000000",
    virtualPrice: "1.0020898812279617"
}
```
<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>curveAmt</code></td>
    <td>number/string</td>
    <td>Expected withdraw token amount.</td>
  <tr>
  <tr>
    <td><code>curveAmtRaw</code></td>
    <td>number/string</td>
    <td>Expected withdraw token amount in decimal form.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number/string</td>
    <td>The unit amount is the minimum amount of curve token expected per token. It is calculated with the help of slippage. The parameter is passed directly in the curve_sbtc connector.</td>
  <tr>
  <tr>
    <td><code>virtualPrice</code></td>
    <td>number/string</td>
    <td>Virtual price of the curve token on sBTC pool.</td>
  <tr>
</table>


