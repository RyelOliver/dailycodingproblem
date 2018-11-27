const productExceptIndex = (args) => {
  const { integerList } = args

  const productList = []

  for(let index = 0; index < integerList.length; index++) {
    const filteredList = integerList.slice()
    filteredList.splice(index, 1)

    const product = filteredList.reduce((integer, product) => {
      return product * integer
    }, 1)
    productList.push(product)
  }

  return productList
}

module.exports = productExceptIndex