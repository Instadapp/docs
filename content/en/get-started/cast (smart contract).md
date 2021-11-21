---
title: Cast (smart contract)
description: "Interact with DSA on smart contract level"
position: 5
category: "Get Started"
---
> Interact with DSA on smart contract level
This guide will show you how to interact with DSA on the smart contract level.

### Quick setup

```solidity
pragma solidity ^0.8.3;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
interface IInstaIndex {
    function build(
        address _owner,
        uint256 _accountVersion,
        address _origin
    ) external returns (address _account);
}

interface IDSA {
    function cast(
        string[] calldata _targetNames,
        bytes[] calldata _datas,
        address _origin
    ) external payable returns (bytes32);
}

contract InteractingDSA {

    IInstaIndex instaIndex = IInstaIndex(0x2971adfa57b20e5a416ae5a708a8655a9c74f723); // this address is only of mainnet.

    function buildAndCast(address _owner) external {
        // creating an account
        address _account = instaIndex.build(_owner, 2, address(0)); // 2 is the most recent DSA version
        
        // encoding data to run multiple things through cast on account
        // Depositing in DSA and then deposit in Compound through DSA.
        string[] memory _targets = new string[](2);
        bytes[] memory _data = new bytes[](2);
        
        _targets[0] = "BASIC-A";
        _targets[1] = "COMPOUND-A";
        
        bytes4 memory basicDeposit = bytes4(keccak256("deposit(address,uint256,uint256,uint256)"));
        bytes4 memory compoundDeposit = bytes4(keccak256("deposit(string,uint256,uint256,uint256)"));
        
        address dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
        uint amtToDeposit = 1e18; // 1 DAI
        
        _data[0] = abi.encodeWithSelector(basicDeposit, dai, amtToDeposit, 0, 0);
        _data[1] = abi.encodeWithSelector(compoundDeposit, "DAI-A", amtToDeposit, 0, 0);
        
        IDSA(_account).cast(_targets, _data, address(0)); // Magic!!
    }

}   
```
Now we can start interacting with the DSA contract.
Go to Networks to find each chain-related address.

> Go to [Networks](https://docs.instadapp.io/networks/mainnet) to find each chain-related address.

### Usage

* #### InstaIndex [#](https://github.com/Instadapp/dsa-contracts/blob/master/contracts/registry/index.sol)
This is the Main Contract for all the Defi Smart Accounts. Used to create a new Defi Smart Account for a user and run a cast function in the new smart account.


* #### InstaImplementationM1 [#](https://github.com/Instadapp/dsa-contracts/blob/master/contracts/v2/accounts/module1/Implementation_m1.sol)
This contract contains most core functions of smart account name cast(). It is only called by owners of smart accounts and has full-fledge access over the smart account. Used also to access all the DSA.

* #### build(owner, accountVersion, _origin) [#](https://github.com/Instadapp/dsa-contracts/blob/master/contracts/registry/index.sol#L170)
Create a DSA Account using this function. It returns the address of the DSA account created.

|parameter|type|description|
|---------|----|-----------|
|owner|address| Owner of the Smart Account|
|accountversion|uint256|Account Module version|
|_origin|address|Where Smart Account is created|

* #### cast(_targets, _datas, _origin) [#](https://github.com/Instadapp/dsa-contracts/blob/master/contracts/v2/accounts/module1/Implementation_m1.sol#L80)
Using cast() user can access the connectors, which allows the smart account to interact with protocols or set up any settings on the smart account.

|parameter|type|description|
|---------|----|-----------|
_target|string[]|string array mentioning connectors, encoded data|
|_datas|bytes[]|encoded data containing function abi and params|

 
### DSA Setup
Inside the interactingDSA contract, we will create a DSA account and use that to cast a spell.

Creating InstaIndex instance

```solidity
IInstaIndex instaIndex = IInstaIndex(0x2971adfa57b20e5a416ae5a708a8655a9c74f723);
```

Creating DSA account

```solidity
address _account = instaIndex.build(_owner, 2, address(0));
```

### Casting Spell
Spells denote a sequence of connector functions that will achieve a given use case. Spells can comprise any number of tasks across any number of connectors.


```solidity
 IDSA(_account).cast(_targets, _data, address(0));
```
We create an InstaIplementationM1 contract instance using our DSA account and then cast function to cast the spell.
