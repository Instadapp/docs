---
title: InstaPool
description: 'Get info of Flash Loans liquidity'
position: 27
category: 'Resolvers'
---
> Get info of Flash Loans liquidity


InstaPool Resolver helps you to get balance of liquidity available to borrow. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x6d11A71575C34eB7b5E22949fAfCd49A2FA2A8F9#code).

---

### Get Liquidity

Get the mutiple tokens balances in liquidity pool.

```javascript
dsa.instapool.getLiquidity();
```

**Returns:** `Object` of Liquidity available.

```javascript
{
    eth: 1183.5532798509166,
    dai: 255364.28949054258,
    usdc: 256292.54498531684
}
```
