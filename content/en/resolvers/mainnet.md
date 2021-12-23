---
title: Mainnet Resolvers
menuTitle: Mainnet
description: "Avalanche resolvers"
position: 15
category: "resolvers"
---

* [Compound](/resolvers/mainnet/compound)

* [Aave](/resolvers/mainnet/aave)

* [MakerDAO](/resolvers/mainnet/makerdao)

* [Uniswap v3](/resolvers/mainnet/uniswap)


* [Instadapp](/resolvers/mainnet/instadapp)


<!-- ## Compound

Compound-v1.5 resolver triggers methods like getPriceInEth, getCompoundData, getPosition. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x9fA9f5Ce281a42BbB5D1c9af6D26aF06dd4d964A).
### getPriceInEth
Returns the price of cToken in Eth and in USD.
```solidity
function getPriceInEth(CTokenInterface cToken) public view returns (uint256 priceInETH, uint256 priceInUSD); 
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| cToken | address | The address of the token whose price you need.|

### getCompoundData
Returns tokens data of address of an user.
```solidity
function getCompoundData(
        address owner, 
        address[] memory cAddress
        ) public view returns (CompData[] memory); 
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| owner | address | The address of the user whose tokens data you want.|
| cAddress | address[] | String array of tokens whose data you want. |

### getPosition
Returns the position of user on compound.
```solidity
 function getPosition(
        address owner, 
        address[] memory cAddress
        ) public returns (CompData[] memory, CompReadInterface.CompBalanceMetadataExt memory);
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| owner | address | The address of the user whose tokens data you want.|
| cAddress | address[] | String array of tokens whose data you want. |


## Aave

AaveV2-v1.6 resolver triggers methods like getPosition, getConfiguration, getReservesList. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0xF0317C5Bc206F2291dd2f3eE9C4cDB5Bbb25418d).
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

## Uniswap v3

UniswapV3-v1 resolver triggers methods like getPoolDetails, getPositionInfoByTokenId, getPositionsInfo, getMintAmount, getDepositAmount, getSingleDepositAmount, getSingleMintAmount, getWithdrawAmount, getCollectAmount, getUserNFTs. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x9156cd73ba5f792e26e9a1762dfc05162d9408c5).
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

--- 

## MakerDAO

MakerDAO-v1.2 resolver triggers methods like getColInfo, getVaultById, getVaults. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x84addce4fac0b6ee4b0cd132120d6d4b700e35c0).
### getColInfo
Get details around collateral types in maker vault.
```solidity
function getColInfo(string[] memory name) public view returns (ColInfo[] memory);
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| name | string[] | String array containing names of collateral|

### getVaultById
Get the vaults details by vault id.
```solidity
function getVaultById(uint256 id) external view returns (VaultData memory);
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| id | uint256 | Vault ID.|

### getVaults
Returns the details of all maker vault related to user.
```solidity
function getVaults(address owner) external view returns (VaultData[] memory);
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| owner | address | 	Address of the owner of the vault.|

--- 

## Instadapp

Instapoolv2 resolver triggers methods like getAuthorityAccounts, getAuthorityIDs, getAccountAuthorities, getIDAuthorities. You can view details like source code, ABIs on [Etherscan](https://etherscan.io/address/0x621AD080ad3B839e7b19e040C77F05213AB71524).
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
