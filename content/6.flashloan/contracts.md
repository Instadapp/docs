# Contracts

> flashloan contract addresses

| Network | Address |
| ---------- | ---------- |
| Mainnet | [0x619Ad2D02dBeE6ebA3CDbDA3F98430410e892882](https://etherscan.io/address/0x619Ad2D02dBeE6ebA3CDbDA3F98430410e892882#code) |
| Polygon | [0xB2A7F20D10A006B0bEA86Ce42F2524Fde5D6a0F4](https://polygonscan.com/address/0xB2A7F20D10A006B0bEA86Ce42F2524Fde5D6a0F4#code) |
| Avalanche | [0x2b65731A085B55DBe6c7DcC8D717Ac36c00F6d19](https://snowtrace.io/address/0x2b65731A085B55DBe6c7DcC8D717Ac36c00F6d19/contract/43114/code) |
| Arbitrum | [0x1f882522DF99820dF8e586b6df8bAae2b91a782d](https://arbiscan.io/address/0x1f882522DF99820dF8e586b6df8bAae2b91a782d#code) |
| Optimism | [0x84E6b05A089d5677A702cF61dc14335b4bE5b282](https://optimistic.etherscan.io/address/0x84E6b05A089d5677A702cF61dc14335b4bE5b282#code) |


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

### getRoutes()

This function returns all routes that are supported by FLA (Flashloan Aggregator) for that particiular chain.

```solidity
function getRoutes() public view returns (uint16[] memory)
```

### getBestRoutes()

This function returns the `bestRoutes` (can be more than 1), the best fee in BPS (1 BPS = 0.01%) and the `bestData` . The best routes are found considering the tokens availability, amounts of tokens for flashloan, and the fee.

```solidity
function getBestRoutes(address[] memory tokens, uint256[] memory amounts) public view returns (uint16[] memory, uint256, bytes[] memory)
```

| params | type | Description | 
| ------ | ---- | ----------- | 
| tokens | address[] | The addresses of the tokens for which user needs flashloan.|
| amounts | uint256[] | The amounts of the respective tokens for flashloan. This needs to contain the same number of elements as tokens.|

### getData()

This function internally calls `getRoutes()` and `getBestRoutes()` functions and returns the compiled data.

```solidity
function getData(address[] memory tokens, uint256[] memory amounts) public view returns (uint16[] memory, uint16[] memory, uint256, bytes[] memory)
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
