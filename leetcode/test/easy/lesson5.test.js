import reverseStr from '../../src/easy/lesson5'

test('should reverse', () => {
  expect(reverseStr(["flower","flow","flight"])).toEqual('fl')
})