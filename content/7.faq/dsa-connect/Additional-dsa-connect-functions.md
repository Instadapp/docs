# Useful dsa-connect functions

Some more important methods that the dsa-connect provides include -

## getAuthById()

This method takes dsaId as input and returns the Authority/Authorities for the DSA account.

```js
await dsa.getAuthById(dsaId);
```

| Parameter | Type            | Description                |
| --------- | --------------- | -------------------------- |
| `dsaId`   | _string/number_ | The Id of the DSA account. |

## encodeCastABI()

This method returns the encoded format of spells to be used in the low-level call.

```js
await dsa.encodeCastABI(spells);
```

| Parameter | Type     | Description                                                      |
| --------- | -------- | ---------------------------------------------------------------- |
| `spells`  | _object_ | The instance of `Spells` with the spells to be cast added to it. |

## encodeSpells()

This method returns the parameters for the cast function.

```js
await dsa.encodeSpells(spells);
```

| Parameter | Type     | Description                                                      |
| --------- | -------- | ---------------------------------------------------------------- |
| `spells`  | _object_ | The instance of `Spells` with the spells to be cast added to it. |
