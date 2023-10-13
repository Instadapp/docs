# Compound

Compound-v1.5 resolver triggers methods like getPriceInEth, getCompoundData, getPosition. You can view details like source code, ABIs on [Basescan](https://basescan.org/address/0x832925F26de92062fca39262aC90939Ed508325b).

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
