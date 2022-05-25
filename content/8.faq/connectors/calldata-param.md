---
title: How to get calldata and unit for uniswap v3 swap connector?
description: 'desc'
draft: true 
---

```js
const network = "polygon"
const url = `https://api.instadapp.io/defi/${network}/uniswap/v3/swap/router`;
const params = {
    buyToken:<"buy-token">,
    sellToken: <"sell-token">,
    sellAmount: <"amount">,
    dsaAddress: USER_ADDRESS
}
const response = await axios.get(url, {
    params: params
});
const calldata = response.data.calldata;
const unitAmt = response.data.unitAmt;
```