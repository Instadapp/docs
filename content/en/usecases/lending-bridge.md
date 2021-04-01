---
title: Lending Bridge
description: 'Port lent DAI b/w Maker & Compound'
position: 22
category: 'Use Cases'
---
> Port lent DAI b/w Maker & Compound

#### Step 1

[Installation](/get-started/installation) or just use your browser console.

#### Step 2 

[Setup Account](/get-started/setup)

#### Step 3

The DSA will cast the spells across the [MakerDAO](/connectors/makerdao/), [Compound](/connectors/compound) and [Instapool](/connectors/instapool/) connectors in the specified sequence.

### Maker -> Compound

##### Benefits

* When DAI Supply rate on Compound > Maker. Generally happens when DAI > $1.
* Help make DAI stable.

##### Recipe

1. **MakerDAO**: withdraw DAI
2. **Compound**: deposit DAI

##### Requirements

* User must have DAI deposited in Maker.

```javascript
let withdrawAmount = 20; // 20 DAI
let withdrawAmtInWei = dsa.tokens.fromDecimal(withdrawAmount, "dai");
let dai_address = dsa.tokens.info.dai.address;

let spells = dsa.Spell();

spells.add({
    connector: "maker",
    method: "withdrawDai",
    args: [withdrawAmtInWei, 0, 0]
});

spells.add({
    connector: "compound",
    method: "deposit",
    args: [dai_address, 0, 0, 0]
});

dsa.cast(spells).then(console.log)
```

### Compound -> Maker

##### Benefits

* When DAI Supply rate on Maker > Compound. Generally happens when DAI < $1.
* Help make DAI stable.

##### Recipe

1. **Compound**: withdraw DAI
2. **MakerDAO**: deposit DAI

##### Requirements

* User must have DAI deposited in Compound.

```javascript
let withdrawAmount = 20; // 20 DAI
let withdrawAmtInWei = dsa.tokens.fromDecimal(withdrawAmount, "dai");
let dai_address = dsa.tokens.info.dai.address;

let spells = dsa.Spell();

spells.add({
    connector: "compound",
    method: "withdraw",
    args: [eth_address, withdrawAmtInWei, 0, 0]
});

spells.add({
    connector: "maker",
    method: "depositDai",
    args: [withdrawAmtInWei, 0, 0]
});

dsa.cast(spells).then(console.log)
```
