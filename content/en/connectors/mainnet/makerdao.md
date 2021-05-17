---
title: MakerDAO.
description: 'Collateralized Borrowing.'
draft: true
---
> Lending & Borrowing
MakerDao-v1 connector triggers methods like open, close, deposit, withdraw, borrow, payback, withdrawLiquidated, depositAndBorrow, exitDai, depositDai, withdrawDai. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x839c2d3ade63df5b0b8f3e57d5e145057ab41556#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Open

Open a MakerDAO Vault

```javascript
spells.add({
  connector: "MAKERDAO-A",
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

Close a MakerDAO Vault

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "close",
  args: [vault]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>uint256</td>
     <td>Vault ID to close.</td>
   <tr>
</table>

---

### Deposit

Deposit collateral to a MakerDAO vault

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "deposit",
  args: [vault, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>uint256</td>
     <td>Vault ID. (Use 0 for last opened vault)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of tokens to deposit. (For max: `uint256(-1)`)</td>
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

### Withdraw

Withdraw collateral from a MakerDAO vault

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "withdraw",
  args: [vault, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>uint256</td>
     <td>Vault ID. (Use 0 for last opened vault)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of tokens to withdraw. (For max: `uint256(-1)`)</td>
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

### Borrow

Borrow DAI using a MakerDAO vault

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "borrow",
  args: [vault, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>uint256</td>
     <td>Vault ID. (Use 0 for last opened vault)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of DAI to borrow.</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of DAI borrowed.</td>
   <tr>
</table>

---

### Payback

Payback DAI debt owed by a MakerDAO vault

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "payback",
  args: [vault, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>uint256</td>
     <td>Vault ID. (Use 0 for last opened vault)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of DAI to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of DAI paid back.</td>
   <tr>
</table>

---

### WithdrawLiquidated

Withdraw leftover collateral after Liquidation.

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "withdrawLiquidated",
  args: [vault, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>uint256</td>
     <td>Vault ID. (Use 0 for last opened vault)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>token amount to Withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of collateral withdrawn.</td>
   <tr>
</table>

---

### DepositAndBorrow

Deposit collateral and borrow DAI.

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "depositAndBorrow",
  args: [vault, depositAmt, borrowAmt, getIdDeposit, getIdBorrow, setIdDeposit, setIdBorrow]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>uint256</td>
     <td>Vault ID. (Use 0 for last opened vault)</td>
   <tr>
   <tr>
     <td><code>depositAmt</code></td>
     <td>uint256</td>
     <td>The amount of tokens to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>borrowAmt</code></td>
     <td>uint256</td>
     <td>The amount of DAI to borrow.</td>
   <tr>
   <tr>
     <td><code>getIdDeposit</code></td>
     <td>uint256</td>
     <td>ID to retrieve depositAmt.</td>
   <tr>
   <tr>
     <td><code>getIdBorrow</code></td>
     <td>uint256</td>
     <td>ID to retrieve borrowAmt.</td>
   <tr>
   <tr>
     <td><code>setIdDeposit</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens deposited.</td>
   <tr>
   <tr>
     <td><code>setIdBorrow</code></td>
     <td>uint256</td>
     <td>ID stores the amount of DAI borrowed.</td>
   <tr>
</table>

---

### ExitDai

Exit DAI from urn.

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "exitDai",
  args: [vault, amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>vault</code></td>
     <td>uint256</td>
     <td>Vault ID. (Use 0 for last opened vault)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of DAI to exit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of DAI exited.</td>
   <tr>
</table>

---

### DepositDai

Deposit DAI in DSR.

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "depositDai",
  args: [amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of DAI to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of DAI deposited.</td>
   <tr>
</table>

---

### WithdrawDai

Withdraw DAI from DSR.

```javascript
spells.add({
  connector: "MAKERDAO-A",
  method: "withdrawDai",
  args: [amt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of DAI to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of DAI withdrawn.</td>
   <tr>
</table>