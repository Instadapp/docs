---
title: Aave
description: 'Get Aave Positions'
position: 30
category: 'Resolvers'
---
> Get Aave Positions


Aave Resolver fetch Position of user. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x7CD232014C63d218d67E06C9CC56205098a4D54c#code).

---

### Get Position

Fetch aave position of a user with just a single call.

```javascript
dsa.aave.getPosition(address, key);
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
    <td>string</td>
    <td>(<b>Optional</b>) the key type to return in the response. Default will use `token`.<br>
      - `token` eth, dai, usdc, etc.<br>
      - `address` "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "0x6B175474E89094C44Da98b954EedeAC495271d0F", etc.<br>
      - `caddress` "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5", "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643", etc.
    </td>
  <tr>
</table>

**Returns:** `Object` with all the Compound details.

```javascript
{
  "eth": {
    "priceInEth": 1,
    "supply": 0.020001941382760555,
    "borrow": 0,
    "borrowFee": 0,
    "supplyYield": 0.010534205695367227,
    "borrowYield": 2.078140652407834,
  },
  "dai": {},
  "usdc": {},
  ....
  "totalSupplyInEth": 0.043728986801881906,
  "totalBorrowInEth": 0.0023955855814168704,
  "maxBorrowLimitInEth": 0.032796740101411426,
  "totalFeeInETH": 0.000003279674010141,
  "status": 0.05478255401320606,
  "liquidation": 0.7499999999999999
}
```

<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>priceInEth</code></td>
    <td>number</td>
    <td>Token price w.r.t Ethereum price.</td>
  <tr>
  <tr>
    <td><code>supply</code></td>
    <td>number</td>
    <td>Supply balance of token.</td>
  <tr>
  <tr>
    <td><code>borrow</code></td>
    <td>number</td>
    <td>Borrow balance of token.</td>
  <tr>
  <tr>
    <td><code>borrowFee</code></td>
    <td>number</td>
    <td>The borrowing fee.</td>
  <tr>
  <tr>
    <td><code>supplyYield</code></td>
    <td>number</td>
    <td>Supply APY of token.</td>
  <tr>
  <tr>
    <td><code>borrowYield</code></td>
    <td>number</td>
    <td>Borrow APY of token.</td>
  <tr>
  <tr>
    <td><code>totalSupplyInEth</code></td>
    <td>number</td>
    <td>Total supply w.r.t Ethereum.</td>
  <tr>
  <tr>
    <td><code>totalBorrowInEth</code></td>
    <td>number</td>
    <td>Total borrow w.r.t Ethereum.</td>
  <tr>
  <tr>
    <td><code>maxBorrowLimitInEth</code></td>
    <td>number</td>
    <td>Max borrow limit w.r.t Ethereum.</td>
  <tr>
  <tr>
    <td><code>totalFeeInETH</code></td>
    <td>number</td>
    <td>Total fee for overall borrowing in ETH.</td>
  <tr>
  <tr>
    <td><code>status</code></td>
    <td>number</td>
    <td>Current status.</td>
  <tr>
  <tr>
    <td><code>liquidation</code></td>
    <td>number</td>
    <td>Position breakage limit.<br>Mulitply by 100 to convert into %.</td>
  <tr>
</table>

