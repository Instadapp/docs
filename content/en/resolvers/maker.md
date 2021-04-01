---
title: MakerDao
description: 'MakerDao Resolver'
position: 29
category: 'Resolvers'
---
> MakerDao Resolver


Maker Resolver fetch Vault Position of user, Collateral-Type Details, DSR Position and etc. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x3dF605ca85E8d677C8f6E2665EbcdDbd801Ee9f9#code).

- Different Collateral-Types: `ETH-A`, `USDC-A`, `BAT-A`
---

### Get Vaults

Fetch all of the Vaults detail owned by an address.

```javascript
dsa.maker.getVaults(address);
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
</table>

**Returns:** `Object` with all the Vaults details. Object key is Vault ID.

```javascript
{
  "3245": {
    "owner": "0x981C549A74Dc36Bd82fEd9097Bc13904E8db14f9",
    "colName": "ETH-A",
    "token": "ETH",
    "col": 0.4,
    "debt": 41,
    "liquidatedCol": 0,
    "rate": 0,
    "price": 216.54,
    "status": 0.4733536529047751,
    "liquidation": 0.6666666666666667,
    "urn": "0xcC0e5E76eC81aD472D6Df9fC83eaE22E1000Fe53"
  },
  "971": {...}
}
```

<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>owner</code></td>
    <td>address</td>
    <td>The user address.</td>
  <tr>
  <tr>
    <td><code>colName</code></td>
    <td>string</td>
    <td>Collateral name. Eg - ETH-A, USDC-A, etc.</td>
  <tr>
  <tr>
    <td><code>token</code></td>
    <td>string</td>
    <td>Collateral token. Eg - ETH, USDC, etc.</td>
  <tr>
  <tr>
    <td><code>col</code></td>
    <td>number</td>
    <td>Amount of collateral deposited.</td>
  <tr>
  <tr>
    <td><code>debt</code></td>
    <td>number</td>
    <td>Amount of debt borrowed.</td>
  <tr>
  <tr>
    <td><code>liquidatedCol</code></td>
    <td>number</td>
    <td>Unlocked collateral when the vault gets liquidated.</td>
  <tr>
  <tr>
    <td><code>rate</code></td>
    <td>number</td>
    <td>Borrow APY.</td>
  <tr>
  <tr>
    <td><code>price</code></td>
    <td>number</td>
    <td>Collateral price of Maker's oracle.</td>
  <tr>
  <tr>
    <td><code>status</code></td>
    <td>number</td>
    <td>Vault status.<br>Mulitply by 100 to convert it into %.</td>
  <tr>
  <tr>
    <td><code>liquidation</code></td>
    <td>number</td>
    <td>Position breakage limit.<br>Mulitply by 100 to convert it into %.</td>
  <tr>
  <tr>
    <td><code>urn</code></td>
    <td>address</td>
    <td>The Vault address</td>
  <tr>
</table>


### Get Collateral Info

Fetch the collateral type details.

```javascript
dsa.maker.getCollateralInfo();
```

**Returns:** `Object` with all the Collateral Types. Object key is Collateral Type.

```javascript
{
  "ETH-A" : {
    "price": 215.56044374049998,
    "rate": 0,
    "ratio": 0.6666666666666667,
    "token": "ETH"
  },
  "BAT-A" : {...},
  ...
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
    <td>Collateral price w.r.t USD from Maker's Oracle.</td>
  <tr>
  <tr>
    <td><code>rate</code></td>
    <td>number</td>
    <td>Borrow rate.</td>
  <tr>
  <tr>
    <td><code>ratio</code></td>
    <td>number</td>
    <td>Liquidation ratio.</td>
  <tr>
  <tr>
    <td><code>token</code></td>
    <td>number</td>
    <td>Collateral token.</td>
  <tr>

</table>

---

### Get DAI Position

Fetch the DAI DSR position of an address.

```javascript
dsa.maker.getDaiPosition(address);
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
    <td>User address</td>
  <tr>
</table>

**Returns:**

```javascript
{
    "balance": 5.068008860190327,
    "rate": 0
}
```

<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>balance</code></td>
    <td>number</td>
    <td>DAI balance in DSR.</td>
  <tr>
  <tr>
    <td><code>rate</code></td>
    <td>number</td>
    <td>DAI saving rate.</td>
  <tr>
</table>

---

### Get DSR

Fetch the DAI saving rate.

```javascript
dsa.maker.getDaiRate();
```

**Returns:**

```javascript
{
    "rate" : 2
}
```

<table class="table">
  <tr>
    <th>Return Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>rate</code></td>
    <td>number</td>
    <td>DAI Saving Rate in %.</td>
  <tr>
</table>
