---
title: Security
description: 'Our highest priority'
position: 38
category: ''
---
> Our highest priority


Uniswap Resolver to get buy and sell details. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x492e5f3f01d20513fc0d53ca0215b6499faec8a0#code).

---

### Get Buy amount.

Get buy token details like amount and unit amount.

**Note:** Price is depends on the route, so with direct route of two tokens you may not get the best price

```javascript
dsa.uniswap.getBuyAmount(buyToken, sellToken, sellAmt, slippage);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buyToken</code></td>
    <td>address/string</td>
    <td>The buy token address or symbol.</td>
  <tr>
  <tr>
    <td><code>sellToken</code></td>
    <td>address/string</td>
    <td>The sell token address or symbol.</td>
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
</table>

**Returns:** `Object` of buy token details.

```javascript
{
    buyAmt: 236.20778018242365,
    buyAmtRaw: "236207780182423627288",
    unitAmt: "236184159404405384925"
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
    <td>number</td>
    <td>Expected buy token amount.</td>
  <tr>
  <tr>
    <td><code>buyAmtRaw</code></td>
    <td>number</td>
    <td>Expected buy token amount in decimal form.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The unit amount is the minimum amount of buy token expected per sell token. It is calculated with the help of slippage. The parameter is passed directly in the Uniswap connector.</td>
  <tr>
</table>


### Get Sell amount.

Get sell token details like amount and unit amount.

**Note:** Price is depends on the route, so with direct route of two tokens you may not get the best price

```javascript
dsa.uniswap.getSellAmount(buyToken, sellToken, buyAmt, slippage);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buyToken</code></td>
    <td>address/string</td>
    <td>The buy token address or symbol.</td>
  <tr>
  <tr>
    <td><code>sellToken</code></td>
    <td>address/string</td>
    <td>The sell token address or symbol.</td>
  <tr>
  <tr>
    <td><code>buyAmt</code></td>
    <td>number</td>
    <td>The amount of tokens to buy.</td>
  <tr>
  <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage in percent eg - 1 means 1%, 10 means 10%, etc</td>
  <tr>
</table>

**Returns:** `Object` of buy token details.

```javascript
{
    sellAmt: 4.234905980688704,
    sellAmtRaw: "4234905980688704170",
    unitAmt: "4235329471286773"
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
    <td>number</td>
    <td>Expected sell token amount.</td>
  <tr>
  <tr>
    <td><code>sellAmtRaw</code></td>
    <td>number</td>
    <td>Expected sell token amount in decimal form.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The unit amount is the minimum amount of buy token expected per sell token. It is calculated with the help of slippage. The parameter is passed directly in the Uniswap connector.</td>
  <tr>
</table>

### Get Deposit amount.

Get deposit token details like amount and unit amount.


```javascript
dsa.uniswap.getDepositAmount(tokenA, tokenB, amtA);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>tokenA</code></td>
    <td>address/string</td>
    <td>The token A address/symbol</td>
  <tr>
  <tr>
    <td><code>tokenB</code></td>
    <td>address</td>
    <td>The token B address/symbol.</td>
  <tr>
  <tr>
    <td><code>amtA</code></td>
    <td>number</td>
    <td>The token A amount in decimals form.</td>
  <tr>
</table>

**Returns:** `Object` of deposit token details.

```javascript
{
    amountA: 1000,
    amountB: 4.220445538525322,
    amountB_Raw: "4220445538525322000",
    unitAmt: "4220445538525322"
}
```
<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>amountA</code></td>
    <td>number</td>
    <td>The amount of token A to deposit.</td>
  <tr>
  <tr>
    <td><code>amountB</code></td>
    <td>number</td>
    <td>The expected tokenB amount to deposit.</td>
  <tr>
  <tr>
    <td><code>amountB_Raw</code></td>
    <td>number</td>
    <td>The expected tokenB amount to deposit in decimal form.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The amountB / amountA with slippage. The unit amount is the minimum amount of tokenB per tokenA to deposit.</td>
  <tr>
</table>

### Get Withdraw amount.

Get withdraw token details like amount and unit amount.


```javascript
dsa.uniswap.getWithdrawAmount(tokenA, tokenB, uniAmt, slippage);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>tokenA</code></td>
    <td>address/string</td>
    <td>The token A address or symbol</td>
  <tr>
  <tr>
    <td><code>tokenB</code></td>
    <td>address/string</td>
    <td>The token B address or symbol.</td>
  <tr>
  <tr>
    <td><code>uniAmt</code></td>
    <td>number</td>
    <td>The uni token amount in decimals.</td>
  <tr>
  <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage of trade.</td>
  <tr>
</table>

**Returns:** `Object` of withdraw token details.

```javascript
{
    amountA: 15861.653879312871,
    amountB: 66.94324634857887,
    amountA_Raw: "15861653879312872303739",
    amountB_Raw: "66943246348578875300",
    unitAmtA: "15860067713924941017",
    unitAmtB: "66936552023944017"
}
```
<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>amountA</code></td>
    <td>number</td>
    <td>The expected amount of tokenA to withdraw.</td>
  <tr>
  <tr>
    <td><code>amountB</code></td>
    <td>number</td>
    <td>The expected amount of tokenB to withdraw.</td>
  <tr>
  <tr>
    <td><code>amountA_Raw</code></td>
    <td>number</td>
    <td>The expected tokenA amount to withdraw in decimal form.</td>
  <tr>
  <tr>
    <td><code>amountB_Raw</code></td>
    <td>number</td>
    <td>The expected tokenB amount to withdraw in decimal form.</td>
  <tr>
  <tr>
    <td><code>unitAmtA</code></td>
    <td>number</td>
    <td>The unit amount is the minimum amount of tokenA per uni token to withdraw.</td>
  <tr>
  <tr>
    <td><code>unitAmtB</code></td>
    <td>number</td>
    <td>The unit amount is the minimum amount of tokenB per uni token to withdraw.</td>
  <tr>
</table>

### Get Position.

Fetch the Uniswap position details of an address.

```javascript
dsa.uniswap.getPosition(address, tokenPair);
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>address</code></td>
    <td>address</td>
    <td>The user address.</td>
  <tr>
  <tr>
    <td><code>key</code></td>
    <td>array</td>
    <td>The token pair array. Eg: [{tokenA: _addrA, tokenB: _addrB}]</td>
  <tr>
</table>

**Returns:** `Object` with all the Uniswap details.

```javascript
[
    {
        amountA: 18137.821372507322,
        amountB: 18451.728375,
        uniTokenAmount: 0.018134598864049847
    }
]
```

<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>amountA</code></td>
    <td>number</td>
    <td>The amount of token A.</td>
  <tr>
  <tr>
    <td><code>amountB</code></td>
    <td>number</td>
    <td>The amount of token B.</td>
  <tr>
  <tr>
    <td><code>uniTokenAmount</code></td>
    <td>number</td>
    <td>The uni token amount i.e. Uniswap token amount for a specific pool to determine the share in the pool.</td>
  <tr>
</table>
