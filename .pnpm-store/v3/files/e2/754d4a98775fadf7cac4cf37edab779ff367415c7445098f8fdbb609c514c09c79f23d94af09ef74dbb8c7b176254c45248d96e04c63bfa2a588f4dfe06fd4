import { debug } from 'debug'
import { IncomingMessage } from 'http'
import { PassThrough } from 'stream'
import * as zlib from 'zlib'

const log = debug('http getIncomingMessageBody')

export function getIncomingMessageBody(
  response: IncomingMessage
): Promise<string> {
  return new Promise((resolve, reject) => {
    log('cloning the original response...')

    // Pipe the original response to support non-clone
    // "response" input. No need to clone the response,
    // as we always have access to the full "response" input,
    // either a clone or an original one (in tests).
    const responseClone = response.pipe(new PassThrough())
    const stream =
      response.headers['content-encoding'] === 'gzip'
        ? responseClone.pipe(zlib.createGunzip())
        : responseClone

    const encoding = response.readableEncoding || 'utf8'
    stream.setEncoding(encoding)
    log('using encoding:', encoding)

    let body = '';

    stream.on('data', (responseBody) => {
      log('response body read:', responseBody)
      body += responseBody;
    })

    stream.once('end', () => {
      log('response body end');
      resolve(body);
    })

    stream.once('error', (error) => {
      log('error while reading response body:', error)
      reject(error)
    })
  })
}
