import { isObject } from './isObject'

test('resolves given an object', () => {
  expect(isObject({})).toBe(true)
  expect(isObject({ a: 1 })).toBe(true)
})

test('rejects given an object-like instance', () => {
  expect(isObject([1])).toBe(false)
  expect(isObject(function () {})).toBe(false)
})

test('rejects given a non-object instance', () => {
  expect(isObject(null)).toBe(false)
  expect(isObject(undefined)).toBe(false)
  expect(isObject(false)).toBe(false)
  expect(isObject(123)).toBe(false)
  expect(isObject(Symbol('object Object'))).toBe(false)
})
