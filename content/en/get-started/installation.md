---
title: Installation
description: ''
position: 2
category: 'get-started'
---

To get started, install the DSA SDK package from NPM:

```javascript
npm install dsa-sdk
```

For browsers, via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/dsa-sdk@latest/build/dsa.min.js"></script>
```

For production, we recommend linking to a specific version number ([jsdeliver](https://www.jsdelivr.com/package/npm/dsa-sdk))
    
## Usage

To enable web3 calls via SDK, instantiate [web3 library](https://github.com/ethereum/web3.js/#installation).

```javascript
// in browser
if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
} else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
} else {
    window.web3 = new Web3(customProvider)
}

// in nodejs
const Web3 = require('web3')
const DSA = require('dsa-sdk');
const web3 = new Web3(new Web3.providers.HttpProvider(ETH_NODE_URL))
```

Now instantiate DSA with web3 instance.

```javascript
// in browser
const dsa = new DSA(web3);

// in nodejs
const dsa = new DSA({
    web3: web3,
    mode: "node",
    privateKey: PRIVATE_KEY
});
```

That's it. You're all set to start using the SDK methods.