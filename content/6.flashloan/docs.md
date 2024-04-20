# Flashloan Aggregator

> flashloan aggregator and resolvers

## Flashloans

Flash Loans are special uncollateralized loans that allow the borrowing of an asset, as long as the borrowed amount (and a fee) is returned before the end of the transaction. There is no real-world analogy to Flash Loans, so it requires some basic understanding of how state is managed within blocks in blockchains.
Flash Loans are an advanced concept aimed at developers. You must have a good understanding of Ethereum, programming, and smart contracts to take advantage of them.

## Applications of Flashloans

At Instadapp flashloans are used very extensively for many strategies like Protection Automation, Leverage / Max mining, Save / Unwind mining, Collateral swap, Debt swap, etc. Other examples in the wild include:

- Arbitrage between assets, without needing to have the principal amount to execute the arbitrage. Example: [ArbitrageDAO](https://medium.com/@bneiluj/flash-boys-arbitrage-dao-c0b96d094f93).
- Other examples and ideas are listed in these blogs [here](https://medium.com/aave/sneak-peek-at-flash-loans-f2b28a394d62) and [here](https://medium.com/aave/building-the-post-liquidation-era-4e650935fc88).

## Flashloan Aggregator

There are many flashloan providers which charge different fees (eg Aave, MakerDAO, Balancer, etc). Instadapp has aggregated all these different routes along with other complex ways to get flashloans in the 'Flashloan Aggregator' using **advanced routing**.
The user can pass in the route through which he/she wants to take flashloan from.

## Overview

For developers, a helpful mental model to consider when developing your solution:
1. Your receiver contract calls the aggregator contract, requesting a Flash Loan of certain amounts using flashloan() mentioning the route.
2. After some sanity checks, the aggregator routes the transaction to the passed route, gets the requested amounts, transfers the requested amounts to your contract, and calls the executeOperation() of your contract.
3. Your contract, now holding the flash loaned amounts, executes any arbitrary operation in its code.
4. When your code has finished, your contract transfers the flash loaned amounts with fees back to the aggregator.
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
- **Route 8 -** Uniswap route. Flashloan provider is uniswap.

| Chains\Routes | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| ---------- | - | -| -| -| -| -| -| -|
| Arbitrum| ❌ | ❌ | ❌  | ❌ | ✔️ | ❌ | ❌ | ✔️ |
| Avalanche | ✔️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Mainnet | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ |
| Polygon | ✔️ | ❌ | ❌ | ❌ | ✔️ | ❌ | ✔️ | ✔️ |
| Optimism| ❌ | ❌ | ❌  | ❌ | ❌ | ❌ | ❌ | ✔️ |


