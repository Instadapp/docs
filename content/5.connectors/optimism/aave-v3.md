---
title: Aave V3
description: Lending & Borrowing.
draft: true
---
> Lending & Borrowing.
AaveV3-v1.2 connector triggers methods like deposit, depositWithoutCollateral, withdraw, borrow, borrowOnBehalfOf, payback, paybackWithATokens, paybackOnBehalfOf, enableCollateral, disableCollateral, swapBorrowRateMode, setUserEMode, delegateBorrow. You can view details like source code, ABIs on [Etherscan](https://optimistic.etherscan.io/address/0x22ed23cc6eff065afdb7d5ff0cbf6886fd19aee1#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit a token to Aave v3 for lending / collaterization.

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "deposit",
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
     <td>The address of the token to deposit.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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

### DepositWithoutCollateral

Deposit a token to Aave v3 without enabling it as collateral.

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "depositWithoutCollateral",
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
     <td>The address of the token to deposit.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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

### Withdraw

Withdraw deposited token from Aave v3

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "withdraw",
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
     <td>The address of the token to withdraw.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
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

### Borrow

Borrow a token using Aave v3

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "borrow",
  args: [token, amt, rateMode, getId, setId]
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
     <td>The address of the token to borrow.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to borrow.</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>The type of debt. (For Stable: 1, Variable: 2)</td>
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

### BorrowOnBehalfOf

Borrow a token using Aave v3 on behalf of a user

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "borrowOnBehalfOf",
  args: [token, amt, rateMode, onBehalfOf, getId, setId]
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
     <td>The address of the token to borrow.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to borrow.</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>The type of debt. (For Stable: 1, Variable: 2)</td>
   <tr>
   <tr>
     <td><code>onBehalfOf</code></td>
     <td>address</td>
     <td>The user who will incur the debt</td>
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

### Payback

Payback debt owed.

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "payback",
  args: [token, amt, rateMode, getId, setId]
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
     <td>The address of the token to payback.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>The type of debt paying back. (For Stable: 1, Variable: 2)</td>
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

### PaybackWithATokens

Repays a borrowed `amount` on a specific reserve using the reserve aTokens, burning the equivalent debt tokens.

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "paybackWithATokens",
  args: [token, amt, rateMode, getId, setId]
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
     <td>The address of the token to payback.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>The type of debt paying back. (For Stable: 1, Variable: 2)</td>
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

### PaybackOnBehalfOf

Payback debt owed on behalf os a user.

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "paybackOnBehalfOf",
  args: [token, amt, rateMode, onBehalfOf, getId, setId]
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
     <td>The address of the token to payback.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>amt</code></td>
     <td>uint256</td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>The type of debt paying back. (For Stable: 1, Variable: 2)</td>
   <tr>
   <tr>
     <td><code>onBehalfOf</code></td>
     <td>address</td>
     <td>Address of user who's debt to repay.</td>
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

### EnableCollateral

Enable an array of tokens as collateral

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "enableCollateral",
  args: [tokens]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokens</code></td>
     <td>address[]</td>
     <td>Array of tokens to enable collateral</td>
   <tr>
</table>

---

### DisableCollateral

Disable an array of tokens as collateral

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "disableCollateral",
  args: [tokens]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>tokens</code></td>
     <td>address[]</td>
     <td>Array of tokens to disable as collateral</td>
   <tr>
</table>

---

### SwapBorrowRateMode

Swaps user borrow rate mode between variable and stable

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "swapBorrowRateMode",
  args: [token, rateMode]
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
     <td>The address of the token to swap borrow rate.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>Desired borrow rate mode. (Stable = 1, Variable = 2)</td>
   <tr>
</table>

---

### SetUserEMode

Updates the user's e-mode category

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "setUserEMode",
  args: [categoryId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>categoryId</code></td>
     <td>uint8</td>
     <td>The category Id of the e-mode user want to set</td>
   <tr>
</table>

---

### DelegateBorrow

Gives approval to delegate debt tokens

```javascript
spells.add({
  connector: "AAVE-V3-A",
  method: "delegateBorrow",
  args: [token, amount, rateMode, delegateTo, getId, setId]
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
     <td>The address of token</td>
   <tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint256</td>
     <td>The amount</td>
   <tr>
   <tr>
     <td><code>rateMode</code></td>
     <td>uint256</td>
     <td>The type of debt</td>
   <tr>
   <tr>
     <td><code>delegateTo</code></td>
     <td>address</td>
     <td>The address to whom the user is delegating</td>
   <tr>
   <tr>
     <td><code>getId</code></td>
     <td>uint256</td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><code>setId</code></td>
     <td>uint256</td>
     <td>ID stores the amount of tokens delegated.</td>
   <tr>
</table>