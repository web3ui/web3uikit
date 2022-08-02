import { debug } from 'debug'

const log = debug('http normalizeWriteArgs')

export type ClientRequestWriteCallback = (error?: Error | null) => void
export type ClientRequestWriteArgs = [
  chunk: string | Buffer,
  encoding?: BufferEncoding | ClientRequestWriteCallback,
  callback?: ClientRequestWriteCallback
]

export type NormalizedClientRequestWriteArgs = [
  chunk: string | Buffer,
  encoding?: BufferEncoding,
  callback?: ClientRequestWriteCallback
]

export function normalizeClientRequestWriteArgs(
  args: ClientRequestWriteArgs
): NormalizedClientRequestWriteArgs {
  log('normalizing ClientRequest.write arguments...', args)

  const chunk = args[0]
  const encoding =
    typeof args[1] === 'string' ? (args[1] as BufferEncoding) : undefined
  const callback = typeof args[1] === 'function' ? args[1] : args[2]

  const writeArgs: NormalizedClientRequestWriteArgs = [
    chunk,
    encoding,
    callback,
  ]
  log('successfully normalized ClientRequest.write arguments:', writeArgs)

  return writeArgs
}
