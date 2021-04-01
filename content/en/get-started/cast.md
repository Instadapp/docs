---
title: Cast
description: "Build Money Lego Transactions"
position: 4
category: "Get Started"
---
> Build Money Lego Transactions

**Spells** denotes a sequence of connector functions that will achieve a given use case. Spells can comprise of any number of functions across any number of connectors.

With this SDK, performing DeFi operations on your dapp consists of creating a `spells` instance to add transactions. Here is where you can initiate complex transactions amongst different protocols.

Create an instance.

```javascript
let spells = dsa.Spell();
```

<!-- @vishva -->

Add **spells** that you want to execute. Think of any actions, and by just adding new SPELLS, you can wonderfully CAST transactions across protocols. Let's try to execute the following actions:

1. Lend 1 ETH on Compound
2. Borrow 50 DAI on Compound

```javascript
spells.add({
  connector: "compound",
  method: "deposit",
  args: [dsa.tokens.info.eth.address, dsa.tokens.fromDecimal(1, "eth"), 0, 0],
});

spells.add({
  connector: "compound",
  method: "borrow",
  args: [dsa.tokens.info.dai.address, dsa.tokens.fromDecimal(50, "dai"), 0, 0],
});
```

**Note:** Make sure, your smart account have the equivalent ETH balance before executing the above actions. Check [this section](/get-started/setup#transfer-tokens) for more details.

At last, cast your spell using `cast()` method.

```javascript
dsa.cast(spells).then(console.log); // returns transaction hash
```

You can also pass an object to send **optional** parameters like sending ETH along with the transaction.

```javascript
dsa.cast({
  spells: spells,
  gasPrice: web3.utils.toWei(gasPrice, "gwei"), // in gwei, used in node implementation.
  value: dsa.tokens.fromDecimal(1, "eth"), // sending 1 Eth along the transaction.
  nonce: nonce,
});
```

<table class="table">
  <tr>
    <th>Parameter (optional)</th>
    <th>Type</th> 
    <th>Description</th>
  </tr>
  <tr>
    <td><code>spells</code></td>
    <td>object</td>
    <td>Instance of the <code>spells()</code> method</td>
  </tr>
  <tr>
    <td><code>gasPrice</code></td>
    <td>string/number</td>
    <td>The gas price in gwei. Mostly used in Node implementation to configure the transaction confirmation speed. </td>
  </tr>
  <tr>
    <tr>
    <td><code>value</code></td>
    <td>string/number</td>
    <td>Amount/value of tokens which you want to send along with the transaction.</td>
  <tr>
  <tr>
    <tr>
    <td><code>nonce</code></td>
    <td>string/number</td>
    <td>Nonce of your sender account. Mostly used in Node implementation to send transaction with a particular nonce.</td>
  <tr>
</table>

This will send the transaction to blockchain in node implementation (or ask users to confirm the transaction on web3 wallet like Metamask).

### Start with your use case

<div class="grid gap-5 grid-cols-1 md:grid-cols-3 mb-20">
  <div class="rounded-lg p-5" style="background-color: rgb(214, 227, 244);">
    <nuxt-link style="text-decoration: none !important;" to="/usecases/long-eth">
        <h5 class="font-bold text-black">Long ETH</h5>
        <span class="text-black font-medium">Tap the upside spike in Ethereum price</span>
    </nuxt-link>
  </div>
  <div class="rounded-lg p-5" style="background-color: rgb(206, 239, 229);">
    <nuxt-link style="text-decoration: none !important;" to="/usecases/short-dai">
        <h5 class="font-bold text-black">Short DAI</h5>
        <span class="text-black font-medium">Earn instant return & make DAI stable</span>
    </nuxt-link>
  </div>
  <div class="rounded-lg p-5"  style="background-color: rgb(242, 228, 192);">
    <nuxt-link style="text-decoration: none !important;" to="/usecases/debt-bridge">
        <h5 class="font-bold text-black">Bridging</h5>
        <span class="text-black font-medium">Port positions b/w Maker & Compound</span>
    </nuxt-link>
  </div>
</div>
