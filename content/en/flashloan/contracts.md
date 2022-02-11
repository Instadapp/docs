---
title: Contracts
menuTitle: Contracts
description: "flashloan contract addresses"
position: 21
category: "flashloan"
---


## InstaFlashAggregator 

### flashloan()
Sends the requested amounts of assets to the contract which called it, passing the included params, using the passed route.
If the flash loaned amounts + fee is not returned by the end of the transaction, then the transaction will revert.
```solidity
function flashLoan(	
        address[] memory tokens,	
        uint256[] memory amounts,
        uint256 route,
        bytes calldata data,
        bytes calldata instaData
    );
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| tokens | address[] | The addresses of the tokens for which user needs flashloan.|
| amounts | uint256[] | The amounts of the respective tokens for flashloan. This needs to contain the same number of elements as tokens.|
| route | uint256 | Route through which user wants flashloan.|
| data | bytes | bytes-encoded parameters to be used by the receiver contract.|
| instaData | bytes | bytes-encoded parameters. Kept for future use by instadapp. Currently used nowhere.|

### getRoutes()

Returns an integer list of available routes.
```solidity
function getRoutes() public pure returns (uint16[] memory routes);
```

## InstaFlashResolver

This contract can be used to get data from the flashloan aggregator which can be helpful in deciding the route through which user wants to take flashloan. The flashResolver has the following functions:-

### getRoutesInfo()

This function returns a list of available routes and a list of respective fee in BPS (1 BPS = 0.01%).

```solidity
function getRoutesInfo() public view returns (uint16[] memory, uint256[] memory)
```

### getBestRoutes()

This function returns the best routes(can be more than 1) and a the best fee in BPS (1 BPS = 0.01%). The best routes are found considering the tokens availability, amounts of tokens for flashloan, and the fee.

```solidity
function getBestRoutes(address[] memory tokens, uint256[] memory amounts) public view returns (uint16[] memory, uint256)
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| tokens | address[] | The addresses of the tokens for which user needs flashloan.|
| amounts | uint256[] | The amounts of the respective tokens for flashloan. This needs to contain the same number of elements as tokens.|

## Receiver Contract Interface

The receiver contract must follow the below interface to use the flashloan aggregator.

```solidity
interface InstaFlashReceiverInterface {
    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address initiator,
        bytes calldata data
    ) external returns (bool);
}
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| assets | address[] | The addresses of the tokens for which user needs flashloan.|
| amounts | uint256[] | The amounts of the respective tokens for flashloan. This needs to contain the same number of elements as tokens.|
| premiums | uint256[] | The fee for the respective tokens based on the amounts borrowed. At the end user need to return the amount + premium for all the tokens.|
| initiator | address | The address which initiated the flashloan transaction.|
| data | bytes | bytes-encoded parameters to be used by the receiver contract.|
