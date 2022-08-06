import { parseJson } from './parseJson'

test('parses a given string into JSON', () => {
  expect(parseJson('{"id":1}')).toEqual({ id: 1 })
})

test('returns null given invalid JSON string', () => {
  expect(parseJson('{"o:2\'')).toBeNull()
})
