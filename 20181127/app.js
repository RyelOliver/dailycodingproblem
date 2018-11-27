const productExceptIndex = (args) => {
  const { integerList } = args

  let productList = []
  const totalProduct = integerList.reduce((integer, product) => {
    return product * integer
  }, 1)

  for(let index = 0; index < integerList.length; index++) {
    productList.push(totalProduct / integerList[index])
  }

  return productList
}

module.exports = productExceptIndex