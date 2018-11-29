const firstMissingPositiveInteger = (args) => {
  const { integerList } = args

  let orderedPositiveIntegerList = integerList.filter((integer) => {
    return integer > 0
  }).sort((a, b) => {
    return a - b
  })
  
  let lowestInteger = 1
  let lowestIntegerFound = false
  while(!lowestIntegerFound) {
    lowestIntegerFound = true

    for(let index = 0; index < orderedPositiveIntegerList.length; index++) {
      if(orderedPositiveIntegerList[index] === lowestInteger) {
        orderedPositiveIntegerList = orderedPositiveIntegerList.filter((integer) => {
          return integer !== lowestInteger
        })
        lowestInteger++
        lowestIntegerFound = false
        break
      }
    }
  }

  return lowestInteger
}

module.exports = firstMissingPositiveInteger