# Aave V2
> Lending & Borrowing.
AaveV2-v1.2 connector triggers methods like deposit, withdraw, borrow, payback, paybackOnBehalfOf, enableCollateral, swapBorrowRateMode. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xdb8e3f36c6f4368cb2c023f41225428e366b0b2a#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit a token to Aave v2 for lending / collaterization.

```javascript
spells.add({
  connector: "AAVE-V2-A",
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
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to deposit.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of the token to deposit. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the amount of tokens deposited.</td>
   <tr>
</table>

---

### Withdraw

Withdraw deposited token from Aave v2

```javascript
spells.add({
  connector: "AAVE-V2-A",
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
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to withdraw.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of the token to withdraw. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the amount of tokens withdrawn.</td>
   <tr>
</table>

---

### Borrow

Borrow a token using Aave v2

```javascript
spells.add({
  connector: "AAVE-V2-A",
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
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to borrow.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of the token to borrow.</td>
   <tr>
   <tr>
     <td><Badge>rateMode</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The type of borrow debt. (For Stable: 1, Variable: 2)</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the amount of tokens borrowed.</td>
   <tr>
</table>

---

### Payback

Payback debt owed.

```javascript
spells.add({
  connector: "AAVE-V2-A",
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
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to payback.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><Badge>rateMode</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The type of debt paying back. (For Stable: 1, Variable: 2)</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the amount of tokens paid back.</td>
   <tr>
</table>

---

### PaybackOnBehalfOf

Payback debt owed on behalf os a user.

```javascript
spells.add({
  connector: "AAVE-V2-A",
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
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to payback.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
   <tr>
   <tr>
     <td><Badge>rateMode</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The type of debt paying back. (For Stable: 1, Variable: 2)</td>
   <tr>
   <tr>
     <td><Badge>onBehalfOf</Badge></td>
     <td><Badge>address</Badge></td>
     <td>Address of user who's debt to repay.</td>
   <tr>
   <tr>
     <td><Badge>getId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID to retrieve amt.</td>
   <tr>
   <tr>
     <td><Badge>setId</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>ID stores the amount of tokens paid back.</td>
   <tr>
</table>

---

### EnableCollateral

Enable an array of tokens as collateral

```javascript
spells.add({
  connector: "AAVE-V2-A",
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
     <td><Badge>tokens</Badge></td>
     <td><Badge>address[]</Badge></td>
     <td>Array of tokens to enable collateral</td>
   <tr>
</table>

---

### SwapBorrowRateMode

Swaps user borrow rate mode between variable and stable

```javascript
spells.add({
  connector: "AAVE-V2-A",
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
     <td><Badge>token</Badge></td>
     <td><Badge>address</Badge></td>
     <td>The address of the token to swap borrow rate.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>rateMode</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>Current Rate mode. (Stable = 1, Variable = 2)</td>
   <tr>
</table>