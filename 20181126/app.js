const sumOfTwo = (args) => {
  const { numberList, number } = args

  const remainderList = []

  for(let index = 0; index < numberList.length; index++) {
    const remainder = number - numberList[index]
  
    if(remainderList.includes(remainder)) {
      return true
    }
    remainderList.push(numberList[index])
  }
  
  return false
}

module.exports = sumOfTwo