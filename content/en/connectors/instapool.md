---
title: Instapool
description: 'Inbuilt Flash Loan in DSA'
position: 7
category: 'connectors'
---

An Inbuilt Flash Loan mechanism for Smart Accounts powered by Compound Finance.

Instapool connector triggers the methods like flashBorrow, flashPayback, and more. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x6d11A71575C34eB7b5E22949fAfCd49A2FA2A8F9#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.

---

### Flash Borrow

Flash borrow tokens for a particular transaction.

```javascript
spells.add({
    connector: "instapool",
    method: "flashBorrow",
    args: [token, amount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token</code></td>
    <td>address</td>
    <td>The token address to borrow.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of token to borrow.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to borrow.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token borrowed.</td>
  <tr>
</table>

---

### Flash Payback

Flash payback tokens for a particular transaction.

```javascript
spells.add({
    connector: "instapool",
    method: "flashPayback",
    args: [token, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token</code></td>
    <td>address</td>
    <td>The token address to payback.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>Always keep it 0 because payback is always 100%.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token payed back.</td>
  <tr>
</table>

---

### flashMultiBorrow

Flash borrow multiple tokens for a particular transaction.

```javascript
spells.add({
    connector: "instapool",
    method: "flashMultiBorrow",
    args: [[token_array], [amount_array], [get_array], [set_array]]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token_array</code></td>
    <td>address array</td>
    <td>The token addresses to borrow.</td>
  <tr>
  <tr>
    <td><code>amount_array</code></td>
    <td>number array</td>
    <td>The amount of tokens to borrow.</td>
  <tr>
  <tr>
    <td><code>get_array</code></td>
    <td>number array</td>
    <td>ID fetches the amount of token to borrow.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number array</td>
    <td>ID stores the amount of token borrowed.</td>
  <tr>
</table>

---

### flashMultiPayback

Flash payback multiple tokens for a particular transaction.

```javascript
spells.add({
    connector: "instapool",
    method: "flashMultiPayback",
    args: [[token_array], [get_array], [set_array]]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token_array</code></td>
    <td>address array</td>
    <td>The token addresses to payback.</td>
  <tr>
  <tr>
    <td><code>get_array</code></td>
    <td>number array</td>
    <td>Always keep it 0 because payback is always 100%.</td>
  <tr>
  <tr>
    <td><code>set_array</code></td>
    <td>number array</td>
    <td>ID stores the amount of token payed back.</td>
  <tr>
</table>

### flashPaybackOrigin 

Return token liquidity from InstaPool and transfer 20% of collected fee to `origin`.

```javascript
spells.add({
    connector: "instapool",
    method: "flashPaybackOrigin",
    args: [origin, token, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>origin</code></td>
    <td>address</td>
    <td>The address to transfer 20% of the collected fee.</td>
  <tr>
  <tr>
    <td><code>token</code></td>
    <td>address</td>
    <td>The token address.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>Get token amount at this ID from `InstaMemory` Contract</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>Set token amount at this ID in `InstaMemory` Contract.</td>
  <tr>
</table>

### flashMultiPaybackOrigin 

Return multiple token liquidity from InstaPool and tranfer 20% of the fee to `origin`.

```javascript
spells.add({
    connector: "instapool",
    method: "flashMultiPaybackOrigin",
    args: [origin, tokens, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>origin</code></td>
    <td>address</td>
    <td>The address to transfer 20% of the collected fee.</td>
  <tr>
  <tr>
    <td><code>tokens</code></td>
    <td>address</td>
    <td>An array of token addresses.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>Get token amount at this ID from `InstaMemory` Contract</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>Set token amount at this ID in `InstaMemory` Contract.</td>
  <tr>
</table>

### addFeeAmount 

Add fee amount to borrowed flashloan.

```javascript
spells.add({
    connector: "instapool",
    method: "addFeeAmount",
    args: [token, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>token</code></td>
    <td>address</td>
    <td>The address of the token in which flashloan is borrowed.</td>
  <tr>
  <tr>
    <td><code>amt</code></td>
    <td>number</td>
    <td>The amount of flashloan fee to be added.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>Get token amount at this ID from `InstaMemory` Contract</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>Set token amount at this ID in `InstaMemory` Contract.</td>
  <tr>
</table>