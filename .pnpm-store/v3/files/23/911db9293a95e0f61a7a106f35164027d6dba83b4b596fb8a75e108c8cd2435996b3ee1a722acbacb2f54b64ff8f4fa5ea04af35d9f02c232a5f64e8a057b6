import { bodyBufferToString } from './bodyBufferToString'

test('given a utf8 buffer returns utf8 string', () => {
  const utfBuffer = Buffer.from('one')
  expect(bodyBufferToString(utfBuffer)).toEqual('one')
})

test('given a hex buffer returns a hex buffer', () => {
  const hexBuffer = Buffer.from('7468697320697320612074c3a97374', 'hex')
  expect(bodyBufferToString(hexBuffer)).toEqual('this is a tést')
})

test('given a non-utf buffer returns a hex buffer', () => {
  const anyBuffer = Buffer.from('tést', 'latin1')
  expect(bodyBufferToString(anyBuffer)).toEqual('74e97374')
})
