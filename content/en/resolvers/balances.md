---
title: Balances
description: 'Get ETH / Tokens balances for a specific address'
position: 26
category: 'Resolvers'
---
> Get ETH / Tokens balances for a specific address


Balance Resolver fetch multiple token balances. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x6B9aE204B9779fbd15Fdbd027c9F0d266A32f0b7#code).

---

### Get Balances

Get mutiple token balances for a specific address.


```javascript
dsa.balances.getBalances(address, type);
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
    <td><code>type</code></td>
    <td>string</td>
    <td>(<b>Optional</b>) the type of token. Default will use `token`.<br>
        - `token` eth, dai, usdc, etc.<br>
        - `ctoken` ceth, cdai, cusdc, etc.<br>
        - `all` eth, ceth, dai, cdai, usdc, cusdc, etc.
    </td>
  <tr>
</table>

**Returns:** `Object` of token Balances.

```javascript
{
    bat: 0,
    dai: 63.09232716193875,
    eth: 1.0100010098441603,
    knc: 1,
    mkr: 0,
    rep: 0,
    ...
}
```
