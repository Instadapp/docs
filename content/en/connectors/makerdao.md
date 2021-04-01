---
title: MakerDAO
description: 'Collateralized Borrowing'
position: 10
category: 'Connectors'
---
> Collateralized Borrowing

MakerDAO connector triggers methods like open vault, deposit, borrow, and others. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x58Bbb677296B6d1B596288B31Abb928492400fBF#code).


- If `vault_id` is 0, then it assumes the latest vault created.
- use -1 or `dsa.maxValue` for the maximum amount in functions.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Open

Open a new vault.

```javascript
spells.add({
    connector: "maker",
    method: "open",
    args: [coll_name]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>coll_name</code></td>
    <td>string</td>
    <td>Vault collateral type like ETH-A, BAT-A, USDC-A.</td>
  <tr>
</table>

---

### Close

To close a vault.

```javascript
spells.add({
    connector: "maker",
    method: "close",
    args: [vault_id]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>vault_id</code></td>
    <td>number</td>
    <td>The vault number.</td>
  <tr>
</table>

### Deposit

Deposit collateral in vault.

```javascript
spells.add({
    connector: "maker",
    method: "deposit",
    args: [vault_id, amount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>vault_id</code></td>
    <td>number</td>
    <td>The vault number.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to deposit. use -1 or `dsa.maxValue` to deposit 100% of tokens.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to deposit.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token deposited.</td>
  <tr>
</table>

---

### Withdraw

Withdraw collateral from vault.

```javascript
spells.add({
    connector: "maker",
    method: "withdraw",
    args: [vault_id, amount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>vault_id</code></td>
    <td>number</td>
    <td>The vault number.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of tokens to withdraw. use -1 or `dsa.maxValue` to withdraw 100%.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of token to withdraw.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of token withdrawn.</td>
  <tr>
</table>

---

### Borrow

Borrow DAI from vault.

```javascript
spells.add({
    connector: "maker",
    method: "borrow",
    args: [vault_id, amount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>vault_id</code></td>
    <td>address</td>
    <td>The vault number.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of DAI to borrow.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of DAI to borrow.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of DAI borrowed.</td>
  <tr>
</table>

---

### Payback

Payback DAI Debt in vault.

```javascript
spells.add({
    connector: "maker",
    method: "payback",
    args: [vault_id, amount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>vault_id</code></td>
    <td>number</td>
    <td>The vault number.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of DAI to payback. use -1 or `dsa.maxValue` to payback 100%.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of DAI to payback.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of DAI paid back.</td>
  <tr>
</table>

### Transfer

Vault ID to transfer.

```javascript
spells.add({
    connector: "maker",
    method: "transfer",
    args: [vault, nextOwner]
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
    <td>number</td>
    <td>The vault ID.</td>
  <tr>
  <tr>
    <td><code>nextOwner</code></td>
    <td>address</td>
    <td>The address of the next owner of the vault. Note: The new owner should be one the Auths of the DSA that is being transferred.</td>
  <tr>
</table>

### Exit DAI

 Withdraws any locked DAI in a vault's urn address.

```javascript
spells.add({
    connector: "maker",
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
    <td>number</td>
    <td>The vault ID.</td>
  <tr>
  <tr>
    <td><code>amt</code></td>
    <td>number</td>
    <td>The amount of DAI to payback. use -1 or `dsa.maxValue` to payback 100%.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of DAI to payback.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of DAI paid back.</td>
  <tr>
</table>

---

## Extra Functions

### Withdraw Liquidated Collateral

Withdraw the leftover collateral after a vault gets liquidated.

```javascript
spells.add({
    connector: "maker",
    method: "withdrawLiquidated",
    args: [vault_id, amount, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>vault_id</code></td>
    <td>number</td>
    <td>The vault number.</td>
  <tr>
  <tr>
    <td><code>amount</code></td>
    <td>number</td>
    <td>The amount of liquidated collateral. use -1 or `dsa.maxValue` to withdraw 100%.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of liquidated collateral to withdraw.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of liquidated collateral withdrawn.</td>
  <tr>
</table>

---

### Deposit in DSR

Deposit DAI in DSR.

```javascript
spells.add({
    connector: "maker",
    method: "depositDai",
    args: [amount, getId, setId]
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
    <td>number</td>
    <td>The amount of DAI to deposit in DSR. use -1 or `dsa.maxValue` to deposit 100%.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of DAI to deposit.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of DAI deposited.</td>
  <tr>
</table>

---

### Withdraw from DSR

Withdraw DAI from DSR.

```javascript
spells.add({
    connector: "maker",
    method: "withdrawDai",
    args: [amount, getId, setId]
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
    <td>number</td>
    <td>The amount of DAI to withdraw from DSR. use -1 or `dsa.maxValue` to withdraw 100%</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the amount of DAI to withdraw.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the amount of DAI withdrawn.</td>
  <tr>
</table>