const { Node, serialise, deserialise } = require('./app')

it('Node can be serialised', () => {
  const node = Node('root', Node('left', Node('left.left')), Node('right'))

  expect(serialise(node)).toBe('{"value":"root","left":{"value":"left","left":{"value":"left.left"}},"right":{"value":"right"}}')
})

it('Node can be deserialised', () => {
  const node = Node('root', Node('left', Node('left.left')), Node('right'))

  expect(deserialise('{"value":"root","left":{"value":"left","left":{"value":"left.left"}},"right":{"value":"right"}}')).toEqual(node)
})

it('Node can be serialised and deserialised', () => {
  const node = Node('root', Node('left', Node('left.left')), Node('right'))

  expect(deserialise(serialise(node)).left.left.value).toBe('left.left')
})