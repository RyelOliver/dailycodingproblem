const Node = (value, left, right) => {
  const node = {
    value: value
  }
  if(left !== undefined) {
    node.left = left
  }
  if(right !== undefined) {
    node.right = right
  }
  return node
}

const serialise = (args) => {
  return JSON.stringify(args)
}

const deserialise = (args) => {
  return JSON.parse(args)
}

module.exports.Node = Node
module.exports.serialise = serialise
module.exports.deserialise = deserialise