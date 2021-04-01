---
title: Debt Swap
description: 'Swap debt b/w DAI & USDC on Compound'
position: 23
category: 'Use Cases'
---
> Swap debt b/w DAI & USDC on Compound

#### Step 1

[Installation](/get-started/installation) or just use your browser console.

#### Step 2 

[Setup Account](/get-started/setup)

#### Step 3

The DSA will cast the spells across the [Compound](/connectors/compound), [OasisDEX](/connectors/oasis) and [Instapool](/connectors/instapool/) connectors in the specified sequence.

### USDC Debt -> DAI Debt

##### Benefits

* When DAI > $1. Arbitrage benefit due to price difference of DAI & USDC.
* Help make DAI stable.

##### Recipe

1. **Instapool**: borrow DAI
2. **OasisDEX**: Swap DAI for USDC
3. **Compound**: Payback USDC
4. **Compound**: Borrow DAI
5. **Instapool**: return DAI

##### Requirements

* User must have a some debt in USDC.

```javascript
let borrowAmount = 20; // 20 DAI
let borrowAmtInWei = dsa.tokens.fromDecimal(borrowAmount, "dai"); // borrow flash loan and swap via OasisDEX

let slippage = 0.1; // 0.1% slippage.
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
    args: [usdc_address, dai_address, borrowAmtInWei, buyAmount.unitAmt, 0, "423"] // setting USDC amount with id 423
});

spells.add({
    connector: "compound",
    method: "payback",
    args: [usdc_address, 0, "423", 0] // get Payback amount with id 423
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

### DAI Debt -> USDC Debt

##### Benefits

* When DAI < $1. Arbitrage benefit due to price difference of DAI & USDC.
* Help make DAI stable.

##### Recipe

1. **Instapool**: borrow USDC
2. **OasisDEX**: Swap USDC for DAI
3. **Compound**: Payback DAI
4. **Compound**: Borrow USDC
5. **Instapool**: return USDC

##### Requirements

* User must have a some debt in DAI.

```javascript
let borrowAmount = 20; // 20 USDC
let borrowAmtInWei = dsa.tokens.fromDecimal(borrowAmount, "usdc"); // borrow flash loan and swap via OasisDEX

let slippage = 0.2; // 0.2% slippage.
let dai_address = dsa.tokens.info.dai.address
let usdc_address = dsa.tokens.info.usdc.address

let buyAmount = await dsa.oasis.getBuyAmount("DAI", "USDC", borrowAmount, slippage);

let spells = dsa.Spell();

spells.add({
    connector: "instapool",
    method: "flashBorrow",
    args: [usdc_address, borrowAmtInWei, 0, 0]
});

spells.add({
    connector: "oasis",
    method: "sell",
    args: [dai_address, usdc_address, borrowAmtInWei, buyAmount.unitAmt, 0, "924"] // setting DAI amount with id 924
});

spells.add({
    connector: "compound",
    method: "payback",
    args: [dai_address, 0, "924", 0] // get Payback amount with id 924
});

spells.add({
    connector: "compound",
    method: "borrow",
    args: [usdc_address, borrowAmtInWei, 0, 0]
});

spells.add({
    connector: "instapool",
    method: "flashPayback",
    args: [usdc_address, 0, 0]
});

dsa.cast(spells).then(console.log)
```

