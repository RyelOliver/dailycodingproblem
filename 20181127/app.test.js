const productExceptIndex = require('./app')

it('Example 1', () => {
  const input = [1, 2, 3, 4, 5]
  const output = [120, 60, 40, 30, 24]

  expect(productExceptIndex({
    integerList: input
  })).toEqual(output)
})

it('Example 2', () => {
  const input = [3, 2, 1]
  const output = [2, 3, 6]

  expect(productExceptIndex({
    integerList: input
  })).toEqual(output)
})