const sumOfTwo = require('./app')

it('Example is true', () => {
  const numbers = [10, 15, 3, 7]
  const k = 17

  expect(sumOfTwo({
    numberList: numbers,
    number: k
  })).toBeTruthy()
})

it('Example is false', () => {
  const numbers = [10, 15, 3, 7]
  const k = 11

  expect(sumOfTwo({
    numberList: numbers,
    number: k
  })).toBeFalsy()
})