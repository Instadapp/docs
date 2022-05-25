---
title: Reflexer
description: Collateralized Borrowing.
draft: true
---
> Collateralized Borrowing.
Reflexer-v1 connector triggers methods like open, close, deposit, withdraw, borrow, payback, withdrawLiquidated, depositAndBorrow, exit. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xac6dc28a6251f49bbe5755e630107dccde9ae2c8#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Open

Open a Reflexer Safe.

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "open",
  args: [colType]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>colType</code></td>
     <td>string</td>
     <td>Type of Collateral.(eg: 'ETH-A')</td>
   <tr>
</table>

---

### Close

Close a Reflexer Safe.

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "close",
  args: [safe]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>safe</code></td>
     <td>uint256</td>
     <td>Safe ID to close.</td>
   <tr>
</table>

---

### Deposit

Deposit collateral to a Reflexer safe

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "deposit",
  args: [safe, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>safe</code></td>
     <td>uint256</td>
     <td>Safe ID.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>token amount to deposit.</td>
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

---

### Withdraw

Withdraw collateral from a Reflexer Safe

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "withdraw",
  args: [safe, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>safe</code></td>
     <td>uint256</td>
     <td>Safe ID.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>token amount to withdraw.</td>
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

---

### Borrow

Borrow Coin using a Reflexer safe

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "borrow",
  args: [safe, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>safe</code></td>
     <td>uint256</td>
     <td>Safe ID.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>token amount to borrow.</td>
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

---

### Payback

Payback Coin debt owed by a Reflexer safe

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "payback",
  args: [safe, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>safe</code></td>
     <td>uint256</td>
     <td>Safe ID.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>token amount to payback.</td>
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

---

### WithdrawLiquidated

Withdraw leftover collateral after Liquidation.

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "withdrawLiquidated",
  args: [safe, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>safe</code></td>
     <td>uint256</td>
     <td>Safe ID.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>token amount to Withdraw.</td>
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

---

### DepositAndBorrow

Deposit collateral and borrow Coin.

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "depositAndBorrow",
  args: [safe, depositAmt, borrowAmt, getIdDeposit, getIdBorrow, setIdDeposit, setIdBorrow]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>safe</code></td>
     <td>uint256</td>
     <td>Safe ID.</td>
   <tr>
   <tr>
     <td><code>depositAmt</code></td>
     <td>uint256</td>
     <td>token deposit amount to Withdraw.</td>
   <tr>
   <tr>
     <td><code>borrowAmt</code></td>
     <td>uint256</td>
     <td>token borrow amount to Withdraw.</td>
   <tr>
   <tr>
     <td><code>getIdDeposit</code></td>
     <td>uint256</td>
     <td>Get deposit token amount at this ID from `InstaMemory` Contract.</td>
   <tr>
   <tr>
     <td><code>getIdBorrow</code></td>
     <td>uint256</td>
     <td>Get borrow token amount at this ID from `InstaMemory` Contract.</td>
   <tr>
   <tr>
     <td><code>setIdDeposit</code></td>
     <td>uint256</td>
     <td>Set deposit token amount at this ID in `InstaMemory` Contract.</td>
   <tr>
   <tr>
     <td><code>setIdBorrow</code></td>
     <td>uint256</td>
     <td>Set borrow token amount at this ID in `InstaMemory` Contract.</td>
   <tr>
</table>

---

### Exit

Exit Coin from handler.

```javascript
spells.add({
  connector: "REFLEXER-A",
  method: "exit",
  args: [safe, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>safe</code></td>
     <td>uint256</td>
     <td>Safe ID.</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>token amount to exit.</td>
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