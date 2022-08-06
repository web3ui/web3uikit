import { Socket } from 'net'
import { IncomingMessage } from 'http'
import { Stream, Readable, EventEmitter } from 'stream'
import { cloneIncomingMessage, IS_CLONE } from './cloneIncomingMessage'

test('clones a given IncomingMessage', () => {
  const message = new IncomingMessage(new Socket())
  message.statusCode = 200
  message.statusMessage = 'OK'
  message.headers = { 'x-powered-by': 'msw' }
  const clone = cloneIncomingMessage(message)

  // Prototypes must be preserved.
  expect(clone).toBeInstanceOf(IncomingMessage)
  expect(clone).toBeInstanceOf(EventEmitter)
  expect(clone).toBeInstanceOf(Stream)
  expect(clone).toBeInstanceOf(Readable)

  expect(clone.statusCode).toEqual(200)
  expect(clone.statusMessage).toEqual('OK')
  expect(clone.headers).toHaveProperty('x-powered-by', 'msw')

  // Cloned IncomingMessage must be marked respectively.
  expect(clone[IS_CLONE]).toEqual(true)
})
