import {fun1,fun2} from '../../src/easy/lesson2'

test('should reverse', () => {
  expect(fun1(1563847412)).toEqual(0)
})
test('should reverse', () => {
  expect(fun1(-34823)).toEqual(-32843)
})
test('should reverse', () => {
  expect(fun1(146)).toEqual(641)
})

test('should reverse', () => {
  expect(fun2(1563847412)).toEqual(0)
})
test('should reverse', () => {
  expect(fun2(-34823)).toEqual(-32843)
})
test('should reverse', () => {
  expect(fun2(146)).toEqual(641)
})