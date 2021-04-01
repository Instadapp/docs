---
title: Uniswap
description: 'Decentralized Exchange'
position: 18
category: 'Connectors'
---
> Decentralized Exchange

Uniswap connector triggers the methods like buy, sell, deposit, withdraw tokens You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x62ebff47b2ba3e47796efae7c51676762dc961c0#code).

- Use `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` to indicate ETH.
- Slippage amount is in percentage. For example, use `2 * 10 ** 16` to denote 2%.
- If not sure about the arguments `getId` and `setId`, pass 0.

---

### Buy

Buy tokens.

```javascript
spells.add({
    connector: "uniswap",
    method: "buy",
    args: [buyAddr, sellAddr, buyAmt, unitAmt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buyAddr</code></td>
    <td>address</td>
    <td>The token address to buy.</td>
  <tr>
  <tr>
    <td><code>sellAddr</code></td>
    <td>address</td>
    <td>The token address to sell.</td>
  <tr>
  <tr>
    <td><code>buyAmt</code></td>
    <td>number</td>
    <td>The amount of tokens to buy.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The unit amount of sellAmt/buyAmt with slippage.</td>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the buy amount of buy token.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the sold amount of sell token.</td>
  <tr>
</table>

---
### Sell

Sell ETH/ERC20 tokens.

```javascript
spells.add({
    connector: "uniswap",
    method: "sell",
mad    args: [buyAddr, sellAddr, sellAmt, unitAmt, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>buyAddr</code></td>
    <td>address</td>
    <td>The token address to buy.</td>
  <tr>
  <tr>
    <td><code>sellAddr</code></td>
    <td>address</td>
    <td>The token address to sell.</td>
  <tr>
  <tr>
    <td><code>sellAmt</code></td>
    <td>number</td>
    <td>The amount of tokens to sell.</td>
  <tr>
  <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The unit amount of sellAmt/buyAmt with slippage.</td>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the sell amount of sell token.</td>
  <tr>
  <tr>
    <td><code>setId</code></td>
    <td>number</td>
    <td>ID stores the bought amount of buy token.</td>
  <tr>
</table>

### Deposit

Deposit Liquidity.

```javascript
spells.add({
    connector: "uniswap",
    method: "deposit",
    args: [tokenA, tokenB, amtA, unitAmt, slippage, getId, setId]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>tokenA</code></td>
    <td>address</td>
    <td>The token A address.</td>
  <tr>
  <tr>
    <td><code>tokenB</code></td>
    <td>address</td>
    <td>The token B address.</td>
  <tr>
  <tr>
    <td><code>amtA</code></td>
    <td>number</td>
    <td>The amount of token A.</td>
  <tr>
    <tr>
    <td><code>unitAmt</code></td>
    <td>number</td>
    <td>The unit amount of amtB/amtA with slippage.</td>
  <tr>
  <tr>
    <tr>
    <td><code>slippage</code></td>
    <td>number</td>
    <td>The slippage amount.</td>
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

### Withdraw

Withdraw Liquidity.

```javascript
spells.add({
    connector: "uniswap",
    method: "withdraw",
    args: [tokenA, tokenB, uniAmt, unitAmtA, unitAmtB, getId, setIds]
});
```

<table class="table">
  <tr>
    <th>Parameter</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>tokenA</code></td>
    <td>address</td>
    <td>The token A address.</td>
  <tr>
  <tr>
    <td><code>tokenB</code></td>
    <td>address</td>
    <td>The token B address.</td>
  <tr>
  <tr>
    <td><code>uniAmt</code></td>
    <td>number</td>
    <td>The uni token amount.</td>
  <tr>
    <tr>
    <td><code>unitAmtA</code></td>
    <td>number</td>
    <td>The unit amount of amtA/uniAmt with slippage.</td>
  <tr>
  <tr>
    <tr>
    <td><code>unitAmtB</code></td>
    <td>number</td>
    <td>unit amount of amtB/uniAmt with slippage.</td>
  <tr>
  <tr>
    <td><code>getId</code></td>
    <td>number</td>
    <td>ID fetches the uni token amount to withdraw.</td>
  <tr>
  <tr>
    <td><code>setIds</code></td>
    <td>number array</td>
    <td>ID stores the amount of tokenA and tokenB withdrawn. If not sure, pass `["0", "0"]`</td>
  <tr>
</table>