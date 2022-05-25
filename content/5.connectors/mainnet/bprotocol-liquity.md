---
title: B.Protocol Liquity
description: Lending & Borrowing.
draft: true
---
> Lending & Borrowing.
B.Liquity-v1 connector triggers methods like deposit, withdraw. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x19574e5dfb40bbd63a4f3bdcf27ed662b329b2ff#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- use -1 or `dsa.maxValue` for the maximum amount in function.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Deposit

Deposit LUSD into Stability Pool

```javascript
spells.add({
  connector: "B-LIQUITY-A",
  method: "deposit",
  args: [amount, getDepositId, setDepositId, setLqtyGainId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>amount</code></td>
     <td>uint</td>
     <td>Amount of LUSD to deposit into Stability Pool</td>
   <tr>
   <tr>
     <td><code>getDepositId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the amount of LUSD from</td>
   <tr>
   <tr>
     <td><code>setDepositId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the final amount of LUSD deposited</td>
   <tr>
   <tr>
     <td><code>setLqtyGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any LQTY gains in</td>
   <tr>
</table>

---

### Withdraw

Withdraw LUSD from Stability Pool

```javascript
spells.add({
  connector: "B-LIQUITY-A",
  method: "withdraw",
  args: [numShares, getWithdrawId, setWithdrawId, setLqtyGainId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
   <tr>
     <td><code>numShares</code></td>
     <td>uint</td>
     <td>amount of shares to withdraw from the BAMM</td>
   <tr>
   <tr>
     <td><code>getWithdrawId</code></td>
     <td>uint</td>
     <td>Optional storage slot to retrieve the amount of LUSD to withdraw from</td>
   <tr>
   <tr>
     <td><code>setWithdrawId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store the withdrawn LUSD</td>
   <tr>
   <tr>
     <td><code>setLqtyGainId</code></td>
     <td>uint</td>
     <td>Optional storage slot to store any LQTY gains in</td>
   <tr>
</table>