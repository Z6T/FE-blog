import fun from '../../src/easy/lesson3'

test('should reverse', () => {
  expect(fun(-123)).toEqual(false)
})
test('should reverse', () => {
  expect(fun(-121)).toEqual(false)
})
test('should reverse', () => {
  expect(fun(10)).toEqual(false)
})
test('should reverse', () => {
  expect(fun(121)).toEqual(true);
})
