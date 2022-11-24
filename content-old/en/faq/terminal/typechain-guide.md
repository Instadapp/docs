---
title: Typechain-guide
description: 'desc'
draft: true 
---
Common functions or variables available on terminal :

**Libraries**
> 1) BigNumber
> 2) axios
> 3) DSA
> 4) Web3
> 5) wait

**Constants**
> 1) MAINNET_TOKENS
> 2) POLYGON_TOKENS
> 3) AVALACHE_TOKENS
> 4) ARBITRUM_TOKENS
> 5) USER_ADDRESS
> 6) ACCOUNT_ADDRESS

**Library Instances**
> 1) Web3
> 2) DSA

**You can also use top level await -**

Usually you need async wrapper in JS:
```js
const run = async () => {
   const gas = await web3.eth.getGasPrice();
}

run()
 .then(() => console.log("Done"))
 .catch((error) => console.log(error.message))
```
But we have top level await, no need to any wrapper
```js
const gas = await web3.eth.getGasPrice();
```

