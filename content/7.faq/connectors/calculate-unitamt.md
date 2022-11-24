# How to calculate UnitAmt?

```js
function caculateUnitAmt(buyAmount, sellAmount, buyDecimal, sellDecimal, maxSlippage) {
  let unitAmt = new BigNumber(buyAmount)
    .dividedBy(10 ** buyDecimal)
    .dividedBy(new BigNumber(sellAmount).dividedBy(10 ** sellDecimal))
  unitAmt = unitAmt.multipliedBy((100 - maxSlippage) / 100)
  unitAmt = unitAmt.multipliedBy(1e18).toFixed(0)
  return unitAmt
}
```

