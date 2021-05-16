---
title: Compound.
description: 'Lending & Borrowing.'
draft: true
---
> Lending & Borrowing
Compound-v1 connector triggers methods like depositRaw, deposit, withdrawRaw, withdraw, borrowRaw, borrow, paybackRaw, payback, depositCTokenRaw, depositCToken, withdrawCTokenRaw, withdrawCToken, liquidateRaw, liquidate. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x911f4e4e762aefa6f2fc1b24e6b1a928200a88a8#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### DepositRaw

Deposit a token to Compound for lending / collaterization.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "depositRaw",
  args: [token, cToken, amt, getId, setId]
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
     <td>The address of the token to deposit. (For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>cToken</code></td>
     <td>address</td>
     <td>The address of the corresponding cToken.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens deposited.</td>
   <tr>
</table>

---

### Deposit

Deposit a token to Compound for lending / collaterization.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "deposit",
  args: [tokenId, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>string</td>
     <td>The token id of the token to deposit.(For eg: ETH-A)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens deposited.</td>
   <tr>
</table>

---

### WithdrawRaw

Withdraw deposited token from Compound

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "withdrawRaw",
  args: [token, cToken, amt, getId, setId]
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
     <td>The address of the token to withdraw. (For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>cToken</code></td>
     <td>address</td>
     <td>The address of the corresponding cToken.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens withdrawn.</td>
   <tr>
</table>

---

### Withdraw

Withdraw deposited token from Compound

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "withdraw",
  args: [tokenId, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>string</td>
     <td>The token id of the token to withdraw.(For eg: ETH-A)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens withdrawn.</td>
   <tr>
</table>

---

### BorrowRaw

Borrow a token using Compound

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "borrowRaw",
  args: [token, cToken, amt, getId, setId]
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
     <td>The address of the token to borrow. (For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>cToken</code></td>
     <td>address</td>
     <td>The address of the corresponding cToken.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to borrow.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens borrowed.</td>
   <tr>
</table>

---

### Borrow

Borrow a token using Compound

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "borrow",
  args: [tokenId, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>string</td>
     <td>The token id of the token to borrow.(For eg: DAI-A)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to borrow.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens borrowed.</td>
   <tr>
</table>

---

### PaybackRaw

Payback debt owed.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "paybackRaw",
  args: [token, cToken, amt, getId, setId]
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
     <td>The address of the token to payback. (For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>cToken</code></td>
     <td>address</td>
     <td>The address of the corresponding cToken.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens paid back.</td>
   <tr>
</table>

---

### Payback

Payback debt owed.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "payback",
  args: [tokenId, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>string</td>
     <td>The token id of the token to payback.(For eg: COMP-A)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens paid back.</td>
   <tr>
</table>

---

### DepositCTokenRaw

Same as depositRaw. The only difference is this method stores cToken amount in set ID.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "depositCTokenRaw",
  args: [token, cToken, amt, getId, setId]
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
     <td>The address of the token to deposit. (For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>cToken</code></td>
     <td>address</td>
     <td>The address of the corresponding cToken.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of cTokens received.</td>
   <tr>
</table>

---

### DepositCToken

Same as deposit. The only difference is this method stores cToken amount in set ID.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "depositCToken",
  args: [tokenId, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>string</td>
     <td>The token id of the token to depositCToken.(For eg: DAI-A)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of cTokens received.</td>
   <tr>
</table>

---

### WithdrawCTokenRaw

Same as withdrawRaw. The only difference is this method fetch cToken amount in get ID.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "withdrawCTokenRaw",
  args: [token, cToken, cTokenAmt, getId, setId]
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
     <td>The address of the token to withdraw. (For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>cToken</code></td>
     <td>address</td>
     <td>The address of the corresponding cToken.</td>
   <tr>
   <tr>
     <td><code>cTokenAmt</code></td>
     <td>uint</td>
     <td>The amount of cTokens to withdraw</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve cTokenAmt</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of tokens withdrawn.</td>
   <tr>
</table>

---

### WithdrawCToken

Same as withdraw. The only difference is this method fetch cToken amount in get ID.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "withdrawCToken",
  args: [tokenId, cTokenAmt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokenId</code></td>
     <td>string</td>
     <td>The token id of the token to withdraw CToken.(For eg: ETH-A)</td>
   <tr>
   <tr>
     <td><code>cTokenAmt</code></td>
     <td>uint</td>
     <td>The amount of cTokens to withdraw</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve cTokenAmt</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of tokens withdrawn.</td>
   <tr>
</table>

---

### LiquidateRaw

Liquidate a position.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "liquidateRaw",
  args: [borrower, tokenToPay, cTokenPay, tokenInReturn, cTokenColl, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>borrower</code></td>
     <td>address</td>
     <td>Borrower's Address.</td>
   <tr>
   <tr>
     <td><code>tokenToPay</code></td>
     <td>address</td>
     <td>The address of the token to pay for liquidation.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>cTokenPay</code></td>
     <td>address</td>
     <td>Corresponding cToken address.</td>
   <tr>
   <tr>
     <td><code>tokenInReturn</code></td>
     <td>address</td>
     <td>The address of the token to return for liquidation.</td>
   <tr>
   <tr>
     <td><code>cTokenColl</code></td>
     <td>address</td>
     <td>Corresponding cToken address.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The token amount to pay for liquidation.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of paid for liquidation.</td>
   <tr>
</table>

---

### Liquidate

Liquidate a position using the mapping.

```javascript
spells.add({
  connector: "COMPOUND-A",
  method: "liquidate",
  args: [borrower, tokenIdToPay, tokenIdInReturn, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>borrower</code></td>
     <td>address</td>
     <td>Borrower's Address.</td>
   <tr>
   <tr>
     <td><code>tokenIdToPay</code></td>
     <td>string</td>
     <td>token id of the token to pay for liquidation.(For eg: ETH-A)</td>
   <tr>
   <tr>
     <td><code>tokenIdInReturn</code></td>
     <td>string</td>
     <td>token id of the token to return for liquidation.(For eg: USDC-A)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>token amount to pay for liquidation.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of paid for liquidation.</td>
   <tr>
</table>