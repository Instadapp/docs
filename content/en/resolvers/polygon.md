---
title: Polygon 
description: "Polygon resolvers"
position: 11
category: "resolvers"
---
## Aave

AaveV2-v1.6 resolver triggers methods like getPosition, getConfiguration, getReservesList. You can view details like source code, ABIs on [polygonscan](https://polygonscan.com/address/0x1f5e200493adB54FEB4a7D734E48649143ecE2CA).
### getPosition
Returns the position of user on compound.
```solidity
function getPosition(
        address user, 
        address[] memory tokens
        ) public view returns (AaveUserTokenData[] memory, AaveUserData memory);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| owner | address | The address of the user whose tokens data you want.|
| cAddress | address[] | String array of tokens whose data you want. |

### getConfiguration
Returns the user's configuration across all the reserves, which tokens the user-supplied as collateral and which user borrowed.
```solidity
function getConfiguration(address user) public view returns (uint256[] memory collateral, uint256[] memory borrowed);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| user | address | The address of the user whose tokens data you want.|

### getReservesList
Returns the list of initialized reserves.
```solidity
 function getReservesList() public view returns (address[] memory data);
```
--- 
## Instadapp

Instapoolv2 resolver triggers methods like getAuthorityAccounts, getAuthorityIDs, getAccountAuthorities, getIDAuthorities. You can view details like source code, ABIs on [polygonscan](https://polygonscan.com/address/0xdF19Da523DA64bBE82eE0E4DFf00d676A8386474).
### getAuthorityAccounts
Returns all accounts related to an authority
```solidity
function getAuthorityAccounts(address authority) public view returns(address[] memory);
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| authority | address | The authority Address.|

### getAuthorityIDs
Returns all IDs related to authority.
```solidity
function getAuthorityIDs(address authority) public view returns(uint64[] memory);
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| authority | address | The authority Address.|

### getAccountAuthorities
Returns the authoriy (owner) of an account.
```solidity
function getAccountAuthorities(address account) public view returns(address[] memory);
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| account | address | 	Address of the account.|

### getAccountAuthorities
Returns the authoriy (owner) of an account.
```solidity
function getAccountAuthorities(address account) public view returns(address[] memory);
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| account | address | Address of the account.|

---
