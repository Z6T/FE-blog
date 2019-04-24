import fun from '../../src/easy/lesson4'

test('should reverse', () => {
  expect(fun("LVIII")).toEqual(58)
})
test('should reverse', () => {
  expect(fun("MCMXCIV")).toEqual(1994)
})
test('should reverse', () => {
  expect(fun("III")).toEqual(3)
})
