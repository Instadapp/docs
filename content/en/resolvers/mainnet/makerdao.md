# MakerDAO

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

