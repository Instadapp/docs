---
title: PoolTogether
description: Deposit & Withdraw from PoolTogether
draft: true
---
> Deposit & Withdraw from PoolTogether
PoolTogether-v1 connector triggers methods like claim, claimAll. You can view details like source code, ABIs on [Polygonscan](https://polygonscan.com/address/0xbf254fa556703c78d70b4cec8459d1ff2b33cd87#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate MATIC.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Claim

Claim token from a Token Faucet

```javascript
spells.add({
  connector: "POOLTOGETHER-A",
  method: "claim",
  args: [tokenFaucet, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenFaucet</code></td>
     <td>address</td>
     <td>TokenFaucet address</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>Set claimed amount at this ID in `InstaMemory` Contract.</td>
   <tr>
</table>

---

### ClaimAll

Runs claim on all passed comptrollers for a user.

```javascript
spells.add({
  connector: "POOLTOGETHER-A",
  method: "claimAll",
  args: [tokenFaucetProxyFactory, tokenFaucets]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenFaucetProxyFactory</code></td>
     <td>address</td>
     <td>The TokenFaucetProxyFactory address</td>
   <tr>
   <tr>
     <td><code>tokenFaucets</code></td>
     <td>TokenFaucetInterface[]</td>
     <td>The tokenFaucets to call claim on.</td>
   <tr>
</table>