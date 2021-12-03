---
title: Flashloan Aggregator
menuTitle: Flashloan Aggregator
description: "flashloan aggregator and resolvers"
position: 14
category: "flashloan"
---



## Flashloans

Flash Loans are special uncollateralized loans that allow the borrowing of an asset, as long as the borrowed amount (and a fee) is returned before the end of the transaction. There is no real-world analogy to Flash Loans, so it requires some basic understanding of how state is managed within blocks in blockchains.
Flash Loans are an advanced concept aimed at developers. You must have a good understanding of Ethereum, programming, and smart contracts to take advantage of them.

## Applications of Flashloans

At Instadapp flashloans are used very extensively for many strategies like Protection Automation, Leverage / Max mining, Save / Unwind mining, Collateral swap, Debt swap, etc. Other examples in the wild include:

- Arbitrage between assets, without needing to have the principal amount to execute the arbitrage. Example: [ArbitrageDAO](https://medium.com/@bneiluj/flash-boys-arbitrage-dao-c0b96d094f93).
- Other examples and ideas are listed on our blog [here](https://medium.com/aave/sneak-peek-at-flash-loans-f2b28a394d62) and [here](https://medium.com/aave/building-the-post-liquidation-era-4e650935fc88).

## Flashloan Aggregator

There are many flashloan providers which charge different fees (eg Aave, MakerDAO, Balancer, etc). Instadapp has aggregated all these different routes along with other complex ways to get flashloans in the 'Flashloan Aggregator' using **advanced routing**.
The user can pass in the route through which he/she wants to take flashloan from.

## Overview

For developers, a helpful mental model to consider when developing your solution:
1. Your receiver contract calls the aggregator contract, requesting a Flash Loan of certain amounts using flashloan() mentioning the route.
2. After some sanity checks, the aggregator routes the transaction to the passed route, gets the requested amounts, transfers the requested amounts to your contract, and calls the executeOperation() of your contract.
3. Your contract, now holding the flash loaned amounts, executes any arbitrary operation in its code.
4. When your code has finished, your contract transfer the flash loaned amounts with fees back to the aggregator.
5. The aggregator verifies if you have sent the correct amounts, and then sends the amounts back to the respective routes' flashloan provider.
6. All of the above happens in 1 transaction (hence in a single ethereum block).

## Routes

- **Route 1 -** Aave route. Flashloan provider is aave.
- **Route 2 -** Maker route. Flashloan provider is makerDAO. Provides flashloan only for DAI.
- **Route 3 -** Maker-Compound route. **Advanced Routing Pair** MakerDAO - Compound.
- **Route 4 -** Maker-Aave route. **Advanced Routing Pair** MakerDAO - Aave.
- **Route 5 -** Balancer route. Flashloan provider is balancer.
- **Route 6 -** Balancer-Compound route. **Advanced Routing Pair** Balancer - Compound.
- **Route 7 -** Balancer-Aave route. **Advanced Routing Pair** Balancer - Aave.

| Chains\Routes | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| ---------- | ---- | ----| ----| ----| ----| ----| ----| 
| Arbitrum| ✖️ | ✖️ | ✖️  | ✖️ | :heavy_check_mark: | ✖️ | ✖️ |
| Avalanche | :heavy_check_mark: | ✖️ | ✖️ | ✖️ | ✖️ | ✖️ | ✖️ |
| Mainnet | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Polygon | :heavy_check_mark: | ✖️ | ✖️ | ✖️ | :heavy_check_mark: | ✖️ | :heavy_check_mark: |

## Functions 

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

## Receiver Contract Interface

The receiver contract must follow the below interface to use the flashloan aggregator.

```solidity
interface InstaFlashReceiverInterface {
    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address initiator,
        bytes calldata _data
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

## Flash Resolver

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