import { normalizeClientRequestEndArgs } from './normalizeClientRequestEndArgs'

test('returns [null, null, cb] given only the callback', () => {
  const callback = () => {}
  expect(normalizeClientRequestEndArgs(callback)).toEqual([
    null,
    null,
    callback,
  ])
})

test('returns [chunk, null, null] given only the chunk', () => {
  expect(normalizeClientRequestEndArgs('chunk')).toEqual(['chunk', null, null])
})

test('returns [chunk, cb] given the chunk and the callback', () => {
  const callback = () => {}
  expect(normalizeClientRequestEndArgs('chunk', callback)).toEqual([
    'chunk',
    null,
    callback,
  ])
})

test('returns [chunk, encoding] given the chunk with the encoding', () => {
  expect(normalizeClientRequestEndArgs('chunk', 'utf8')).toEqual([
    'chunk',
    'utf8',
    null,
  ])
})

test('returns [chunk, encoding, cb] given all three arguments', () => {
  const callback = () => {}
  expect(normalizeClientRequestEndArgs('chunk', 'utf8', callback)).toEqual([
    'chunk',
    'utf8',
    callback,
  ])
})
