---
title: Accounts
description: 'Accounts Resolver'
position: 25
category: 'Resolvers'
---
> Accounts Resolver

## Get Accounts

Get all accounts for addresses owned by address.

```javascript
dsa.getAccounts(authority) // an ethereum address
    .then(data => {
      return data
    })
    .catch(error => {
      return error
    })
```

### Returns

`Array` of `Object` with all the DSA where address is authorised.

```javascript
[
    {
        id: 52, // DSA ID
        address: "0x...", // DSA Address
        version: 1 // DSA version
    },
    ...
]
```

---

## Get Auth by Address

Get all the authorised address(es) of a DSA by address.

```javascript
dsa.getAuthByAddress(address) // an ethereum address
    .then(data => {
      return data
    })
    .catch(error => {
      return error
    })
```

### Returns

`Array` of address(es) authorised to make calls to the DSA.

```javascript
[
    "0x...",
    "0x...",
    "0x...",
    ...
]
```

---

## Get Auth by ID

Get all the authorised address(es) of a DSA by ID.

```javascript
dsa.getAuthById(dsaID) // the DSA ID
    .then(data => {
      return data
    })
    .catch(error => {
      return error
    })
```

### Returns
`Array` of address(es) authorised to make calls to the DSA.

```javascript
[
    "0x...",
    "0x...",
    "0x...",
    ...
]
```
---

## Get Count

Get global number of DSAs.

```javascript
dsa.count()
    .then(data => {
      return data
    })
    .catch(error => {
      return error
    })
```

### Returns
`Number` of DSA accounts created globally.
