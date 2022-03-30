---
title: Aave V3
description: 'desc'
draft: true 
---

AaveV3-v1.0 resolver triggers methods like getPosition, getPositionAll, getConfiguration, getReservesList. You can view details like source code, ABIs on [Polygonscan](https://polygonscan.com/address/0x7cdBD859f2EDA545289378112FD991571d6eb73e).
### getPosition
Returns the position of user on aave v3.
```solidity
function getPosition(
        address user, 
        address[] memory tokens
        ) public view returns (AaveV3UserData memory,
        AaveV3UserTokenData[] memory, AaveV3TokenData[] memory, ReserveIncentiveData[] memory);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| user | address | The address of the user whose tokens data you want.|
| tokens | address[] | String array of tokens whose data you want. |

### getPositionAll
Returns the position of user on aave v3 for all reserves of the market.
```solidity
function getPositionAll(
        address user
        ) public view returns (AaveV3UserData memory,
        AaveV3UserTokenData[] memory, AaveV3TokenData[] memory, ReserveIncentiveData[] memory);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| user | address | The address of the user whose tokens data you want.|

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