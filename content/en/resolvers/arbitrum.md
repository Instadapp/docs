---
title: Arbitrum Resolvers
menuTitle: Arbitrum
description: "Arbitrum resolvers"
position: 17
category: "resolvers"
---

* [Uniswap v3](./arbitrum/uniswap) 

* [Instadapp](./arbitrum/instadapp)

<!-- 
## Uniswap v3

UniswapV3-v1 resolver triggers methods like getPoolDetails, getPositionInfoByTokenId, getPositionsInfo, getMintAmount, getDepositAmount, getSingleDepositAmount, getSingleMintAmount, getWithdrawAmount, getCollectAmount, getUserNFTs. You can view details like source code, ABIs on [arbiscan](https://arbiscan.io/address/0x04F8a41be023f839E709eeEaA0725FD766139A4d).
### getPoolDetails
Returns the pool details
```solidity
function getPoolDetails(PoolConfig[] memory poolConfigs) public view returns (PoolData[] memory poolDatas);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| poolConfigs  | PoolConfig[] | Struct containing tokenA, tokenB addresses and the fee.|

### getPositionInfoByTokenId
Returns the positIon info by token id.
```solidity
function getPositionInfoByTokenId(uint256 tokenId) public view returns (PositionInfo memory pInfo);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| tokenId  | uint256 | 	NFT LP Token ID.|

### getPositionsInfo  
Returns the position info of tokens the user has used as stakes.
```solidity
 function getPositionsInfo(
    address user, 
    uint256[] memory stakedTokenIds
    ) public view returns (uint256[] memory tokenIds, PositionInfo[] memory positionsInfo);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| user | address | The address of the user whose tokens position you want.|
| stakedTokenIds | uint256[] | uint256 array of tokens-ids, the user has staked.|

### getMintAmount
Get the mint amount 
```solidity
function getMintAmount(MintParams memory mintParams) public view returns 
        (
            address token0,
            address token1,
            uint256 liquidity,
            uint256 amount0,
            uint256 amount1,
            uint256 amount0Min,
            uint256 amount1Min
        );
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| mintParams | MintParams | Struct of mint params containing tokenA, tokenB, fee, lowerTick, upperTick, amountA, amountB, slippage.|

### getDepositAmount  
Get the Deposit amount
```solidity
    function getDepositAmount (
        uint256 tokenId,
        uint256 amountA,
        uint256 amountB,
        uint256 slippage
    ) public view returns (
         uint256 liquidity,
         uint256 amount0,
         uint256 amount1,
         uint256 amount0Min,
         uint256 amount1Min
        );
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| tokenId | uint256 | NFT LP Token ID.|
| amountA | uint256 | tokenA amounts.|
| amountB | uint256 | tokenB amounts.|
| slippage | uint256 | slippage|

### getSingleDepositAmount
Get single deposit amount
```solidity
    function getSingleDepositAmount(
        uint256 tokenId,
        address tokenA,
        uint256 amountA,
        uint256 slippage
    ) public view returns (
         uint256 liquidity,
         address tokenB,
         uint256 amountB,
         uint256 amountAMin,
         uint256 amountBMin
        );
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| tokenId | uint256 | NFT LP Token ID.|
| tokenA | address | 	tokenA address.|
| amountA | uint256 | tokenA amounts.|
| slippage | uint256 | slippage.|

### getSingleMintAmount  
Get single mint amount
```solidity
     function getSingleMintAmount(
        address tokenA,
        address tokenB,
        uint256 amountA,
        uint256 slippage,
        uint24 fee,
        int24 tickLower,
        int24 tickUpper
    )
        public
        view
        returns (
            uint256 liquidity,
            uint256 amountB,
            uint256 amountAMin,
            uint256 amountBMin
        );
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| tokenA | address | 	tokenA address.|
| tokenB | address | 	tokenB address.|
| amountA | uint256 | tokenA amounts.|
| slippage | uint256 | slippage.|
| tickLower | uint24 | Lower tick.|
| tickUpper | uint24 | Upper tick.|

### getWithdrawAmount  
Get withdraw amount
```solidity
    function getWithdrawAmount(
        uint256 tokenId,
        uint256 liquidity,
        uint256 slippage
    )
        public
        view
        returns (
            uint256 amount0,
            uint256 amount1,
            uint256 amount0Min,
            uint256 amount1Min
        );
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| tokenId | uint256 | NFT LP Token ID.|
| liquidity |	uint256	| LP Token amount.|
| slippage | uint256 | slippage.|

### getCollectAmount  
Get collect amount using token-id
```solidity
function getCollectAmount(uint256 tokenId) public view returns (uint256 amountA, uint256 amountB);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| tokenId | uint256 | NFT LP Token ID.|

### getUserNFTs  
Get userNft token-ids
```solidity
function getUserNFTs(address user) public view returns (uint256[] memory tokenIds);
```
| params | type | Description | 
| ------ | ---- | ----------- | 
| user | address | The address of the user whose token-ids you want.|

## Instadapp

Instapoolv2 resolver triggers methods like getAuthorityAccounts, getAuthorityIDs, getAccountAuthorities, getIDAuthorities. You can view details like source code, ABIs on [arbiscan](https://arbiscan.io/address/0xdF19Da523DA64bBE82eE0E4DFf00d676A8386474).
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

---  -->
