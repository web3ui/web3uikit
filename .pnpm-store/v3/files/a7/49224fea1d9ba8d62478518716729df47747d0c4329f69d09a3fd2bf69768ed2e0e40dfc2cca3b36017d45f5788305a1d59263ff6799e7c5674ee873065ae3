const debug = require('debug')('http normalizeClientRequestEndArgs')

export type ClientRequestEndChunk = string | Buffer
type ClientRequestEndCallback = () => void

type HttpRequestEndArgs =
  | []
  | [ClientRequestEndCallback]
  | [ClientRequestEndChunk, ClientRequestEndCallback?]
  | [ClientRequestEndChunk, BufferEncoding, ClientRequestEndCallback?]

type NormalizedHttpRequestEndParams = [
  ClientRequestEndChunk | null,
  BufferEncoding | null,
  ClientRequestEndCallback | null
]

/**
 * Normalizes a list of arguments given to the `ClientRequest.end()`
 * method to always include `chunk`, `encoding`, and `callback`.
 */
export function normalizeClientRequestEndArgs(
  ...args: HttpRequestEndArgs
): NormalizedHttpRequestEndParams {
  debug('arguments', args)
  const normalizedArgs = new Array(3)
    .fill(null)
    .map((value, index) => args[index] || value)

  normalizedArgs.sort((a, b) => {
    // If first element is a function, move it rightwards.
    if (typeof a === 'function') {
      return 1
    }

    // If second element is a function, move the first leftwards.
    if (typeof b === 'function') {
      return -1
    }

    // If both elements are strings, preserve their original index.
    if (typeof a === 'string' && typeof b === 'string') {
      return normalizedArgs.indexOf(a) - normalizedArgs.indexOf(b)
    }

    return 0
  })

  debug('normalized args', normalizedArgs)
  return normalizedArgs as NormalizedHttpRequestEndParams
}
