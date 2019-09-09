import fun from '../../src/easy/lesson6'

test('should reverse', () => {
  expect(fun("([)]")).toEqual(false)
})
test('should reverse', () => {
  expect(fun("()[]{}")).toEqual(true)
})