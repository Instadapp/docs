---
title: dYdX
description: 'dYdX Resolver'
position: 36
category: 'Resolvers'
---
> dYdX Resolver


dYdX Resolver fetch Position of user. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xcb704D9505Fbbf61478F06741C75F34eA84Ec85C#code).

---

### Get Position

Fetch compound position of a user with just a single call.

```javascript
dsa.dydx.getPosition(address, key);
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
    <td>number</td>
    <td>(<b>Optional</b>) The key indicates the token.<br>
      - `token` (<b>default</b>) eth, dai, usdc, etc.<br>
      - `address` "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "0x6B175474E89094C44Da98b954EedeAC495271d0F", etc.<br>
      - `market` 0, 1, 3, etc.<br>
    </td>
  <tr>
</table>

**Returns:** `Object` with all the dYdX details.

```javascript
{
    "eth": {
      "price": 210,
      "supply": 0.020001941382760555,
      "borrow": 0,
      "supplyRate": 0.01053365240736,
      "supplyYield": 0.010534205695367227,
      "borrowRate": 2.05689983754528,
      "borrowYield": 2.078140652407834,
    },
    "dai": {},
    "usdc": {},
    ....
    "totalSupplyInEth": 0.043728986801881906,
    "totalBorrowInEth": 0.0023955855814168704,
    "maxBorrowLimitInEth": 0.032796740101411426,
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
    <td><code>price</code></td>
    <td>number</td>
    <td>Price of the token.</td>
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
    <td><code>supplyRate</code></td>
    <td>number</td>
    <td>Supply APR of token.</td>
  <tr>
  <tr>
    <td><code>supplyYield</code></td>
    <td>number</td>
    <td>Supply APY of token.</td>
  <tr>
  <tr>
    <td><code>borrowRate</code></td>
    <td>number</td>
    <td>Borrow APR of token.</td>
  <tr>
  <tr>
    <td><code>borrowRate</code></td>
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
    <td><code>status</code></td>
    <td>number</td>
    <td>Current status.</td>
  <tr>
  <tr>
    <td><code>status</code></td>
    <td>number</td>
    <td>Current status.<br>Mulitply by 100 to convert into %.</td>
  <tr>
  <tr>
    <td><code>liquidation</code></td>
    <td>number</td>
    <td>Position breakage limit.<br>Mulitply by 100 to convert into %.</td>
  <tr>
</table>

