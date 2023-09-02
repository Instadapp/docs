# Instadapp

Instapoolv2 resolver triggers methods like getAuthorityAccounts, getAuthorityIDs, getAccountAuthorities, getIDAuthorities. You can view details like source code, ABIs on [Basescan](https://basescan.org/address/0x254A12C367160560BCc2B07c0b0a9cc40EF01f25).

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




