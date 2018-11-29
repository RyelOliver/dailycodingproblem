const firstMissingPositiveInteger = require('./app')

it('Example 1', () => {
  const input = [3, 4, -1, 1]
  const output = 2

  expect(firstMissingPositiveInteger({
    integerList: input
  })).toBe(output)
})

it('Example 2', () => {
  const input = [1, 2, 0]
  const output = 3

  expect(firstMissingPositiveInteger({
    integerList: input
  })).toBe(output)
})

it('Example 3', () => {
  const input = [-1, -2, -3, -4, 5, 1, 2, 2, 2, 3]
  const output = 4

  expect(firstMissingPositiveInteger({
    integerList: input
  })).toBe(output)
})