---
title: Short Dai
description: 'Earn instant return by arbitraging DAI price'
position: 20
category: 'Use Cases'
---
> Earn instant return by arbitraging DAI price

#### Step 1

[Installation](/get-started/installation) or just use your browser console.

#### Step 2 

[Setup Account](/get-started/setup)

#### Step 3

The DSA will cast the spells across the [MakerDAO](/connectors/makerdao/), [OasisDEX](/connectors/oasis) and [Instapool](/connectors/instapool/) connectors in the following sequence.

##### Benefits

* When DAI > $1. Arbitrage benefit due to price difference of DAI & USDC.
* Help make DAI stable.

##### Recipe

1. **Instapool**: borrow DAI
2. **OasisDEX**: swap DAI with USDC
3. **MakerDAO**: open USDC vault
4. **MakerDAO**: deposit USDC in vault
5. **MakerDAO**: borrow DAI from vault
6. **Instapool**: payback DAI

##### Requirements

* User should have base amount of USDC to perform the leverage. Liquidation on Compound is 83.33% which means for 1 DAI borrowed, user needs to have the balance of 0.25 USDC for collateral to perform this spell.
* Maker vault minimum debt requirement is 20 DAI.

```javascript
let borrowAmount = 20; // 20 DAI
let borrowAmtInWei = dsa.tokens.fromDecimal(borrowAmount, "dai"); // borrow flash loan and swap via OasisDEX

let slippage = 2; // 2% slippage.
let dai_address = dsa.tokens.info.dai.address
let usdc_address = dsa.tokens.info.usdc.address

let buyAmount = await dsa.oasis.getBuyAmount("USDC", "DAI", borrowAmount, slippage);

let spells = dsa.Spell();

spells.add({
    connector: "instapool",
    method: "flashBorrow",
    args: [dai_address, borrowAmtInWei, 0, 0]
});

spells.add({
    connector: "oasis",
    method: "sell",
    args: [usdc_address, dai_address, borrowAmtInWei, buyAmount.unitAmt, 0, 0]
});

spells.add({
    connector: "maker",
    method: "open",
    args: ["USDC-A"]
});

spells.add({
    connector: "maker",
    method: "deposit",
    args: [0, -1, 0, 0] // deposit all USDC
});

spells.add({
    connector: "maker",
    method: "borrow",
    args: [0, borrowAmtInWei, 0, 0]
});

spells.add({
    connector: "instapool",
    method: "flashPayback",
    args: [dai_address, 0, 0]
});

dsa.cast(spells).then(console.log)
```

