---
title: Benqi
description: Lending & Borrowing.
draft: true
---
> Lending & Borrowing.
Benqi-v1 connector triggers methods like depositRaw, deposit, withdrawRaw, withdraw, borrowRaw, borrow, paybackRaw, payback, depositQiTokenRaw, depositQiToken, withdrawQiTokenRaw, withdrawQiToken, liquidateRaw, liquidate. You can view details like source code, ABIs on [Snowtrace](https://snowtrace.io/address/0xff5a7a16619d3f4c4bdc2fef7af8a9d0b6c35ca8#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate AVAX.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### DepositRaw

Deposit a token to Benqi for lending / collaterization.

```javascript
spells.add({
  connector: "BENQI-A",
  method: "depositRaw",
  args: [token, qiToken, amt, getId, setId]
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
     <td>The address of the token to deposit. (For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>qiToken</code></td>
     <td>address</td>
     <td>The address of the corresponding qiToken.</td>
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

Deposit a token to Benqi for lending / collaterization.

```javascript
spells.add({
  connector: "BENQI-A",
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
     <td>The token id of the token to deposit.(For eg: AVAX-A)</td>
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

Withdraw deposited token from Benqi

```javascript
spells.add({
  connector: "BENQI-A",
  method: "withdrawRaw",
  args: [token, qiToken, amt, getId, setId]
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
     <td>The address of the token to withdraw. (For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>qiToken</code></td>
     <td>address</td>
     <td>The address of the corresponding qiToken.</td>
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

Withdraw deposited token from Benqi

```javascript
spells.add({
  connector: "BENQI-A",
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
     <td>The token id of the token to withdraw.(For eg: AVAX-A)</td>
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

Borrow a token using Benqi

```javascript
spells.add({
  connector: "BENQI-A",
  method: "borrowRaw",
  args: [token, qiToken, amt, getId, setId]
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
     <td>The address of the token to borrow. (For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>qiToken</code></td>
     <td>address</td>
     <td>The address of the corresponding qiToken.</td>
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

Borrow a token using Benqi

```javascript
spells.add({
  connector: "BENQI-A",
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
  connector: "BENQI-A",
  method: "paybackRaw",
  args: [token, qiToken, amt, getId, setId]
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
     <td>The address of the token to payback. (For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>qiToken</code></td>
     <td>address</td>
     <td>The address of the corresponding qiToken.</td>
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
  connector: "BENQI-A",
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
     <td>The token id of the token to payback.(For eg: BENQI-A)</td>
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

### DepositQiTokenRaw

Same as depositRaw. The only difference is this method stores qiToken amount in set ID.

```javascript
spells.add({
  connector: "BENQI-A",
  method: "depositQiTokenRaw",
  args: [token, qiToken, amt, getId, setId]
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
     <td>The address of the token to deposit. (For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>qiToken</code></td>
     <td>address</td>
     <td>The address of the corresponding qiToken.</td>
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
     <td>ID stores the amount of qiTokens received.</td>
   <tr>
</table>

---

### DepositQiToken

Same as deposit. The only difference is this method stores qiToken amount in set ID.

```javascript
spells.add({
  connector: "BENQI-A",
  method: "depositQiToken",
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
     <td>The token id of the token to depositQiToken.(For eg: DAI-A)</td>
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
     <td>ID stores the amount of qiTokens received.</td>
   <tr>
</table>

---

### WithdrawQiTokenRaw

Same as withdrawRaw. The only difference is this method fetch qiToken amount in get ID.

```javascript
spells.add({
  connector: "BENQI-A",
  method: "withdrawQiTokenRaw",
  args: [token, qiToken, qiTokenAmt, getId, setId]
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
     <td>The address of the token to withdraw. (For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>qiToken</code></td>
     <td>address</td>
     <td>The address of the corresponding qiToken.</td>
   <tr>
   <tr>
     <td><code>qiTokenAmt</code></td>
     <td>uint</td>
     <td>The amount of qiTokens to withdraw</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve qiTokenAmt</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint</td>
     <td>ID stores the amount of tokens withdrawn.</td>
   <tr>
</table>

---

### WithdrawQiToken

Same as withdraw. The only difference is this method fetch qiToken amount in get ID.

```javascript
spells.add({
  connector: "BENQI-A",
  method: "withdrawQiToken",
  args: [tokenId, qiTokenAmt, getId, setId]
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
     <td>The token id of the token to withdraw QiToken.(For eg: AVAX-A)</td>
   <tr>
   <tr>
     <td><code>qiTokenAmt</code></td>
     <td>uint</td>
     <td>The amount of qiTokens to withdraw</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint</td>
     <td>ID to retrieve qiTokenAmt</td>
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
  connector: "BENQI-A",
  method: "liquidateRaw",
  args: [borrower, tokenToPay, qiTokenPay, tokenInReturn, qiTokenColl, amt, getId, setId]
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
     <td>The address of the token to pay for liquidation.(For AVAX: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>qiTokenPay</code></td>
     <td>address</td>
     <td>Corresponding qiToken address.</td>
   <tr>
   <tr>
     <td><code>tokenInReturn</code></td>
     <td>address</td>
     <td>The address of the token to return for liquidation.</td>
   <tr>
   <tr>
     <td><code>qiTokenColl</code></td>
     <td>address</td>
     <td>Corresponding qiToken address.</td>
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
  connector: "BENQI-A",
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
     <td>token id of the token to pay for liquidation.(For eg: AVAX-A)</td>
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