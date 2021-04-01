---
title: Long Eth
description: 'Leverage Ethereum price spike'
position: 19
category: 'Use Cases'
---
> Leverage Ethereum price spike

#### Step 1

[Installation](/get-started/installation) or just use your browser console.

#### Step 2 

[Setup Account](/get-started/setup)

#### Step 3

Trigger the following uniquely designed spells to fulfill this use case. Check [this section](/get-started/cast) for generic details around casting spells.

The DSA will cast the spells across the [Compound](/connectors/compound), [OasisDEX](/connectors/oasis) and [Instapool](/connectors/instapool/) connectors in the following sequence.

##### Benefits

* Bullish on ETH? Get benefit whenever ETH goes up.

##### Recipe

1. **Instapool**: borrow DAI
2. **OasisDEX**: swap DAI with ETH
3. **Compound**: deposit ETH
4. **Compound**: borrow DAI
5. **Instapool**: return DAI

##### Requirements

* User should have base amount of ETH to perform the leverage. Liquidation on Compound is 75% which means for $1 borrowed amount, user needs to have the balance of $0.33 worth ETH for collateral to perform this spell.

```javascript
let borrowAmount = 20; // 20 DAI
let borrowAmtInWei = dsa.tokens.fromDecimal(borrowAmount, "dai"); // borrow flash loan and swap via OasisDEX

let slippage = 2; // 2% slippage.
let dai_address = dsa.tokens.info.dai.address;
let eth_address = dsa.tokens.info.eth.address;

let buyDetail = await dsa.oasis.getBuyAmount("ETH", "DAI", borrowAmount, slippage);

let spells = dsa.Spell();

spells.add({
    connector: "instapool",
    method: "flashBorrow",
    args: [dai_address, borrowAmtInWei, 0, 0]
});

spells.add({
    connector: "oasis",
    method: "sell",
    args: [eth_address, dai_address, borrowAmtInWei, buyDetail.unitAmt, 0, 0]
});

spells.add({
    connector: "compound",
    method: "deposit",
    args: [eth_address, "-1", 0, 0]
});

spells.add({
    connector: "compound",
    method: "borrow",
    args: [dai_address, borrowAmtInWei, 0, 0]
});

spells.add({
    connector: "instapool",
    method: "flashPayback",
    args: [dai_address, 0, 0]
});

dsa.cast(spells).then(console.log)
```