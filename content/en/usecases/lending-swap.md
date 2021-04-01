---
title: Lending Swap
description: 'Swap lending b/w DAI & USDC on Compound'
position: 24
category: 'Use Cases'
---
> Swap lending b/w DAI & USDC on Compound

#### Step 1

[Installation](/get-started/installation) or just use your browser console.

#### Step 2 

[Setup Account](/get-started/setup)

#### Step 3

The DSA will cast the spells across the [Compound](/connectors/compound) and [OasisDEX](/connectors/oasis) connectors in the specified sequence.

### DAI Lending -> USDC Lending

##### Benefits

* When DAI > $1. Arbitrage benefit due to price difference of DAI & USDC.
* Help make DAI stable.

##### Recipe

1. **Instapool**: borrow DAI
2. **OasisDEX**: Swap DAI for USDC
3. **Compound**: deposit USDC
4. **Compound**: withdraw DAI
5. **Instapool**: return DAI

##### Requirements

* User must have some DAI deposited.

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
    method: "deposit",
    args: [usdc_address, 0, "423", 0] // get Deposit amount with id 423
});

spells.add({
    connector: "compound",
    method: "withdraw",
    args: [dai_address, borrowAmtInWei, 0, 0]
});

spells.add({
    connector: "instapool",
    method: "flashPayback",
    args: [dai_address, 0, 0]
});

dsa.cast(spells).then(console.log)
```

### USDC Lending -> DAI Lending

##### Benefits

* When DAI < $1. Arbitrage benefit due to price difference of DAI & USDC.
* Help make DAI stable.

##### Recipe

1. **Instapool**: borrow USDC
2. **OasisDEX**: Swap USDC for DAI
3. **Compound**: deposit DAI
4. **Compound**: withdraw USDC
5. **Instapool**: return USDC

##### Requirements

* User must have some USDC deposited.

```javascript
let borrowAmount = 20; // 20 USDC
let borrowAmtInWei = dsa.tokens.fromDecimal(borrowAmount, "usdc"); // borrow flash loan and swap via OasisDEX

let slippage = 0.1; // 0.1% slippage.
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
    args: [dai_address, usdc_address, borrowAmtInWei, buyAmount.unitAmt, 0, "423"] // setting DAI amount with id 423
});

spells.add({
    connector: "compound",
    method: "deposit",
    args: [dai_address, 0, "423", 0] // get Deposit amount with id 423
});

spells.add({
    connector: "compound",
    method: "withdraw",
    args: [usdc_address, borrowAmtInWei, 0, 0]
});

spells.add({
    connector: "instapool",
    method: "flashPayback",
    args: usdc_address, 0, 0]
});

dsa.cast(spells).then(console.log)
```


