---
title: Aave
description: 'desc'
draft: true 
---

AaveV2-v1.6 resolver triggers methods like getPosition, getConfiguration, getReservesList. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xF0317C5Bc206F2291dd2f3eE9C4cDB5Bbb25418d).
### getPosition
Returns the position of user on aave.

```solidity
function getPosition(
        address user, 
        address[] memory tokens
        ) public view returns (AaveUserTokenData[] memory, AaveUserData memory);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| user | address | The address of the user whose tokens data you want.|
| tokens | address[] | String array of tokens whose data you want. |

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