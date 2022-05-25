---
title: PoolTogether
description: Deposit & Withdraw from PoolTogether
draft: true
---
> Deposit & Withdraw from PoolTogether
PoolTogether-v1 connector triggers methods like claim, claimAll, claimPodTokenDrop, depositToPod. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xbf254fa556703c78d70b4cec8459d1ff2b33cd87#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
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

---

### ClaimPodTokenDrop

Claim asset rewards from a TokenDrop

```javascript
spells.add({
  connector: "POOLTOGETHER-A",
  method: "claimPodTokenDrop",
  args: [podTokenDrop, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>podTokenDrop</code></td>
     <td>address</td>
     <td>Pod TokenDrop address</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>Set claimed amount at this ID in `InstaMemory` Contract.</td>
   <tr>
</table>

---

### DepositToPod

Deposit assets into the Pod in exchange for share tokens

```javascript
spells.add({
  connector: "POOLTOGETHER-A",
  method: "depositToPod",
  args: [prizePoolToken, pod, tokenAmount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>prizePoolToken</code></td>
     <td>address</td>
     <td>Prize Pool Token Address</td>
   <tr>
   <tr>
     <td><code>pod</code></td>
     <td>address</td>
     <td>Pod address to deposit to</td>
   <tr>
   <tr>
     <td><code>tokenAmount</code></td>
     <td>uint256</td>
     <td>The amount of tokens to deposit.  These are the same tokens used to deposit into the underlying prize pool.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>Get token amount at this ID from `InstaMemory` Contract.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>Set token amount at this ID in `InstaMemory` Contract.</td>
   <tr>
</table>