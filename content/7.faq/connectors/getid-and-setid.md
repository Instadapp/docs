# What's the use of getId and setId?



`setId` and `getId` will help you share data/value from one spell to another. You can get a value from a specific `Id` that had been stored before.

**Example where getId and setId can be used**

> Let's say I want to sell USDC to buy ETH on 1Inch and then deposit bought ETH into Compound.
1) So I sell USDC on 1Inch, and I store the bought ETH amount at `setId` (let's say it's `482` as setId for now) on `sell()` function of 1inch. 
2) Then I will use `482` as getId on compound deposit() function and deposit the bought ETH in Compound. In deposit function, I don't need to mention the amount specifically to deposit. It will get the deposit amount from `getId` that is passed. 

**Code Snippet:**
```js
spells.add({
  connector: "1INCH-A",
  method: "sell",
  args: [eth_address, usdc_address, sellAmount, unitAmt, 0, "482"] // setting bought ETH amount at id 482
});

spells.add({
  connector: "COMPOUND-A",
  method: "deposit",
  args: ["ETH-A", 0, "482", 0] // getting deposit amount from id 482
});
```

**Note:** 
1) For `getId`, if the id is `0` then it won't get the stored amount but it will use the amount that's passed in the function.
2) For `setId`, if the id is `0` then it won't stored amount.