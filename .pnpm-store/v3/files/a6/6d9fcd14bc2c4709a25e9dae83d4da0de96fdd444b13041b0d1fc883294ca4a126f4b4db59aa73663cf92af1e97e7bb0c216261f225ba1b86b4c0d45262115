import { concatChunkToBuffer } from './concatChunkToBuffer'

test('returns a concatenation result of two buffers', () => {
  const nextBuffers = concatChunkToBuffer(Buffer.from('two'), [
    Buffer.from('one'),
  ])
  expect(nextBuffers.map((buffer) => buffer.toString())).toEqual(['one', 'two'])
})

test('concatencates a given string to the buffer', () => {
  const nextBuffers = concatChunkToBuffer('two', [Buffer.from('one')])
  expect(nextBuffers.map((buffer) => buffer.toString())).toEqual(['one', 'two'])
})
