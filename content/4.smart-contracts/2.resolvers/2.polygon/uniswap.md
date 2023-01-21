# Uniswap V3

UniswapV3-v1 resolver triggers methods like getPoolDetails, getPositionInfoByTokenId, getPositionsInfo, getMintAmount, getDepositAmount, getSingleDepositAmount, getSingleMintAmount, getWithdrawAmount, getCollectAmount, getUserNFTs. You can view details like source code, ABIs on [Polygonscan](https://polygonscan.com/address/0x8dA60dee0815a08d16C066b07814b10722fA9306).
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

