# Aave V1
> Lending & Borrowing.
AaveV1-v1.1 connector triggers methods like deposit, withdraw, borrow, payback, enableCollateral. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x612c5ca43230d9f97a0ac87e4420f66b8df97e9d#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit a token to Aave v1 for lending / collaterization.

```javascript
spells.add({
  connector: "AAVE-V1-A",
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

Withdraw deposited token from Aave v1

```javascript
spells.add({
  connector: "AAVE-V1-A",
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

Borrow a token using Aave v1

```javascript
spells.add({
  connector: "AAVE-V1-A",
  method: "borrow",
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
     <td>The address of the token to borrow.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of the token to borrow.</td>
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
  connector: "AAVE-V1-A",
  method: "payback",
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
     <td>The address of the token to payback.(For ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)</td>
   <tr>
   <tr>
     <td><Badge>amt</Badge></td>
     <td><Badge>uint256</Badge></td>
     <td>The amount of the token to payback. (For max: `uint256(-1)`)</td>
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
  connector: "AAVE-V1-A",
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