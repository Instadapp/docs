---
title: Debt Bridge
description: 'Port positions b/w Maker & Compound'
position: 21
category: 'Use Cases'
---
> Port positions b/w Maker & Compound

#### Step 1

[Installation](/get-started/installation) or just use your browser console.

#### Step 2 

[Setup Account](/get-started/setup)

#### Step 3

The DSA will cast the spells across the [MakerDAO](/connectors/makerdao/), [Compound](/connectors/compound) and [Instapool](/connectors/instapool/) connectors in the specified sequence.

### Maker -> Compound

##### Benefits

* When Borrow rate on Maker > Compound. Pay less interest on your debt.
* Help make DAI stable.

##### Recipe

1. **Instapool**: borrow DAI
2. **MakerDAO**: payback DAI
3. **MakerDAO**: withdraw ETH
4. **Compound**: deposit ETH
5. **Compound**: borrow DAI
6. **Instapool**: return DAI

##### Requirements

* User must have a Maker Vault.
* Be sure to check the borrowing power on Compound to have enough margin from liquidation.

```javascript
let borrowAmount = dsa.tokens.fromDecimal(200000, "dai"); // 200000 DAI
let dai_address = dsa.tokens.info.dai.address
let eth_address = dsa.tokens.info.eth.address
let vault_id = 0; // User's Vault ID

let spells = dsa.Spell();

spells.add({
    connector: "instapool",
    method: "flashBorrow",
    args: [dai_address, borrowAmount, 0, 0]
});

spells.add({
    connector: "maker",
    method: "payback",
    args: [vault_id, -1, 0, "534"] // max payback and setting the payback amount with id 534
});

spells.add({
    connector: "maker",
    method: "withdraw",
    args: [vault_id, -1, 0, "987"] // max withdraw and setting the withdrawn amount with id 987
});

spells.add({
    connector: "compound",
    method: "deposit",
    args: [eth_address, 0, "987", 0] // get deposit amount with id 987
});

spells.add({
    connector: "compound",
    method: "borrow",
    args: [dai_address, 0, "534", 0] // get borrow amount with id 534
});

spells.add({
    connector: "instapool",
    method: "flashPayback",
    args: [dai_address, 0, 0]
});

dsa.cast(spells).then(console.log)
```

### Compound -> Maker

##### Benefits

* When Borrow rate on Maker < Compound. Pay less interest on your debt.
* Help make DAI stable.

##### Recipe

1. **Instapool**: borrow DAI
2. **Compound**: payback DAI
3. **Compound**: withdraw ETH
4. **MakerDAO**: deposit ETH
5. **MakerDAO**: borrow DAI
6. **Instapool**: return DAI

##### Requirements

* User must have a Maker Vault. If not, [create a new vault](/connectors/makerdao#open) in the same transaction itself.
* Be sure to check the borrowing power on MakerDAO to have enough margin from liquidation.

```javascript
let borrowAmount = dsa.tokens.fromDecimal(200000, "dai"); // 200000 DAI
let dai_address = dsa.tokens.info.dai.address;
let eth_address = dsa.tokens.info.eth.address;
let vault_id = 0; // User's Vault ID

let spells = dsa.Spell();

spells.add({
    connector: "instapool",
    method: "flashBorrow",
    args: [dai_address, borrowAmount, 0, 0]
});

spells.add({
    connector: "compound",
    method: "payback",
    args: [dai_address, -1, 0, "692"] // max payback and setting the payback amount with id 692
});

spells.add({
    connector: "compound",
    method: "withdraw",
    args: [eth_address, -1, 0, "578"] // max withdraw and setting the withdrawn amount with id 578
});

spells.add({
    connector: "maker",
    method: "deposit",
    args: [vault_id, 0, "578", 0] // get deposit amount with id 578
});

spells.add({
    connector: "maker",
    method: "borrow",
    args: [vault_id, 0, "692", 0] // get borrow amount with id 534
});

spells.add({
    connector: "instapool",
    method: "flashPayback",
    args: [dai_address, 0, 0]
});

dsa.cast(spells).then(console.log)
```
