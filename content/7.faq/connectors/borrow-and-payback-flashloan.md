# How to take and payback flashloan on polygon chain?

```js
const token = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270" // wmatic token address on polygon 
const amount = web3.utils.toWei('100', 'ether') 
const amountWithFee = web3.utils.toWei('100.09', 'ether') 

let spells = new dsa.Spell()

spells.add({
      connector: 'INSTAPOOL-C',
      method: 'flashPayback',
      args: [token, amountWithFee, 0, 0],
})

const cd = dsa.instapool_v2.encodeFlashCastData(spells);
let flashloanWrappedSpells = new dsa.Spell();

console.log(cd)
flashloanWrappedSpells.add({
      connector: 'INSTAPOOL-C',
      method: 'flashBorrowAndCast',
      args: [ token , amount, 1, cd, "0x"],
})

console.log(dsa.instance)
console.log(dsa.encodeSpells(flashloanWrappedSpells))

// keep adding spells across DeFi protocols to execute.

console.log("Transaction hash:",
            await dsa.cast({spells:flashloanWrappedSpells})
            .catch(err => {console.log(err)})
           )
```