import type { Debugger } from 'debug'
import type { RequestOptions } from 'http'
import { ClientRequest, IncomingMessage } from 'http'
import { until } from '@open-draft/until'
import { Headers, objectToHeaders } from 'headers-polyfill/lib'
import type {
  InteractiveIsomorphicRequest,
  IsomorphicRequest,
  MockedResponse,
} from '../../glossary'
import { uuidv4 } from '../../utils/uuid'
import type { ClientRequestEmitter } from '.'
import { concatChunkToBuffer } from './utils/concatChunkToBuffer'
import {
  ClientRequestEndChunk,
  normalizeClientRequestEndArgs,
} from './utils/normalizeClientRequestEndArgs'
import { NormalizedClientRequestArgs } from './utils/normalizeClientRequestArgs'
import { toIsoResponse } from '../../utils/toIsoResponse'
import { getIncomingMessageBody } from './utils/getIncomingMessageBody'
import { bodyBufferToString } from './utils/bodyBufferToString'
import {
  ClientRequestWriteArgs,
  ClientRequestWriteCallback,
  normalizeClientRequestWriteArgs,
} from './utils/normalizeClientRequestWriteArgs'
import { cloneIncomingMessage } from './utils/cloneIncomingMessage'
import { createLazyCallback } from '../../utils/createLazyCallback'
import { invariant } from 'outvariant'

export type Protocol = 'http' | 'https'

export interface NodeClientOptions {
  emitter: ClientRequestEmitter
  log: Debugger
}

export class NodeClientRequest extends ClientRequest {
  /**
   * The list of internal Node.js errors to suppress while
   * using the "mock" response source.
   */
  static suppressErrorCodes = [
    'ENOTFOUND',
    'ECONNREFUSED',
    'ECONNRESET',
    'EAI_AGAIN',
  ]

  private url: URL
  private options: RequestOptions
  private response: IncomingMessage
  private emitter: ClientRequestEmitter
  private log: Debugger
  private chunks: Array<{
    chunk?: string | Buffer
    encoding?: BufferEncoding
  }> = []
  private responseSource: 'mock' | 'bypass' = 'mock'
  private capturedError?: NodeJS.ErrnoException

  public requestBody: Buffer[] = []

  constructor(
    [url, requestOptions, callback]: NormalizedClientRequestArgs,
    options: NodeClientOptions
  ) {
    super(requestOptions, callback)

    this.log = options.log.extend(
      `request ${requestOptions.method} ${url.href}`
    )

    this.log('constructing ClientRequest using options:', {
      url,
      requestOptions,
      callback,
    })

    this.url = url
    this.options = requestOptions
    this.emitter = options.emitter

    // Construct a mocked response message.
    this.response = new IncomingMessage(this.socket!)
  }

  write(...args: ClientRequestWriteArgs): boolean {
    const [chunk, encoding, callback] = normalizeClientRequestWriteArgs(args)
    this.log('write:', { chunk, encoding, callback })
    this.chunks.push({ chunk, encoding })
    this.requestBody = concatChunkToBuffer(chunk, this.requestBody)
    this.log('chunk successfully stored!', this.requestBody)

    /**
     * Prevent invoking the callback if the written chunk is empty.
     * @see https://nodejs.org/api/http.html#requestwritechunk-encoding-callback
     */
    if (!chunk || chunk.length === 0) {
      this.log('written chunk is empty, skipping callback...')
    } else {
      callback?.()
    }

    // Do not write the request body chunks to prevent
    // the Socket from sending data to a potentially existing
    // server when there is a mocked response defined.
    return true
  }

  end(...args: any): this {
    this.log('end', args)

    const [chunk, encoding, callback] = normalizeClientRequestEndArgs(...args)
    this.log('normalized arguments:', { chunk, encoding, callback })

    const requestBody = this.getRequestBody(chunk)
    const isomorphicRequest = this.toIsomorphicRequest(requestBody)
    const interactiveIsomorphicRequest: InteractiveIsomorphicRequest = {
      ...isomorphicRequest,
      respondWith: createLazyCallback({
        maxCalls: 1,
        maxCallsCallback() {
          invariant(
            false,
            'Failed to respond to "%s %s" request: the "request" event has already been responded to.',
            isomorphicRequest.method,
            isomorphicRequest.url.href
          )
        },
      }),
    }

    // Notify the interceptor about the request.
    // This will call any "request" listeners the users have.
    this.log(
      'emitting the "request" event for %d listener(s)...',
      this.emitter.listenerCount('request')
    )
    this.emitter.emit('request', interactiveIsomorphicRequest)

    // Execute the resolver Promise like a side-effect.
    // Node.js 16 forces "ClientRequest.end" to be synchronous and return "this".
    until(async () => {
      await this.emitter.untilIdle('request', ({ args: [request] }) => {
        /**
         * @note Await only those listeners that are relevant to this request.
         * This prevents extraneous parallel request from blocking the resolution
         * of another, unrelated request. For example, during response patching,
         * when request resolution is nested.
         */
        return request.id === interactiveIsomorphicRequest.id
      })

      const [mockedResponse] =
        await interactiveIsomorphicRequest.respondWith.invoked()
      this.log('event.respondWith called with:', mockedResponse)

      return mockedResponse
    }).then(([resolverException, mockedResponse]) => {
      this.log('the listeners promise awaited!')

      // Halt the request whenever the resolver throws an exception.
      if (resolverException) {
        this.log(
          'encountered resolver exception, aborting request...',
          resolverException
        )
        this.emit('error', resolverException)
        this.terminate()

        return this
      }

      if (mockedResponse) {
        this.log('received mocked response:', mockedResponse)
        this.responseSource = 'mock'

        const isomorphicResponse = toIsoResponse(mockedResponse)
        this.respondWith(mockedResponse)
        this.log(
          isomorphicResponse.status,
          isomorphicResponse.statusText,
          isomorphicResponse.body,
          '(MOCKED)'
        )

        callback?.()

        this.log('emitting the custom "response" event...')

        this.emitter.emit('response', isomorphicRequest, isomorphicResponse)

        return this
      }

      this.log('no mocked response received!')

      // Set the response source to "bypass".
      // Any errors emitted past this point are not suppressed.
      this.responseSource = 'bypass'

      // Propagate previously captured errors.
      // For example, a ECONNREFUSED error when connecting to a non-existing host.
      if (this.capturedError) {
        this.emit('error', this.capturedError)
        return this
      }

      // Write the request body chunks in the order of ".write()" calls.
      // Note that no request body has been written prior to this point
      // in order to prevent the Socket to communicate with a potentially
      // existing server.
      this.log('writing request chunks...', this.chunks)

      for (const { chunk, encoding } of this.chunks) {
        if (encoding) {
          super.write(chunk, encoding)
        } else {
          super.write(chunk)
        }
      }

      this.once('error', (error) => {
        this.log('original request error:', error)
      })

      this.once('abort', () => {
        this.log('original request aborted!')
      })

      this.once('response-internal', async (response: IncomingMessage) => {
        const responseBody = await getIncomingMessageBody(response)
        this.log(response.statusCode, response.statusMessage, responseBody)
        this.log('original response headers:', response.headers)

        this.log('emitting the custom "response" event...')
        this.emitter.emit('response', isomorphicRequest, {
          status: response.statusCode || 200,
          statusText: response.statusMessage || 'OK',
          headers: objectToHeaders(response.headers),
          body: responseBody,
        })
      })

      this.log('performing original request...')

      return super.end(
        ...[
          chunk,
          encoding as any,
          () => {
            this.log('original request end!')
            callback?.()
          },
        ].filter(Boolean)
      )
    })

    return this
  }

  emit(event: string, ...data: any[]) {
    this.log('event:%s', event)

    if (event === 'response') {
      this.log('found "response" event, cloning the response...')

      try {
        /**
         * Clone the response object when emitting the "response" event.
         * This prevents the response body stream from locking
         * and allows reading it twice:
         * 1. Internal "response" event from the observer.
         * 2. Any external response body listeners.
         * @see https://github.com/mswjs/interceptors/issues/161
         */
        const response = data[0] as IncomingMessage
        const firstClone = cloneIncomingMessage(response)
        const secondClone = cloneIncomingMessage(response)

        this.emit('response-internal', secondClone)

        this.log('response successfully cloned, emitting "response" event...')
        return super.emit(event, firstClone, ...data.slice(1))
      } catch (error) {
        this.log('error when cloning response:', error)
        return super.emit(event, ...data)
      }
    }

    if (event === 'error') {
      const error = data[0] as NodeJS.ErrnoException
      const errorCode = error.code || ''

      this.log('error:\n', error)

      // Suppress certain errors while using the "mock" source.
      // For example, no need to destroy this request if it connects
      // to a non-existing hostname but has a mocked response.
      if (
        this.responseSource === 'mock' &&
        NodeClientRequest.suppressErrorCodes.includes(errorCode)
      ) {
        // Capture the first emitted error in order to replay
        // it later if this request won't have any mocked response.
        if (!this.capturedError) {
          this.capturedError = error
          this.log('captured the first error:', this.capturedError)
        }
        return false
      }
    }

    return super.emit(event, ...data)
  }

  private respondWith(mockedResponse: MockedResponse): void {
    this.log('responding with a mocked response...', mockedResponse)

    const { status, statusText, headers, body } = mockedResponse
    this.response.statusCode = status
    this.response.statusMessage = statusText

    if (headers) {
      this.response.headers = {}

      for (const [headerName, headerValue] of Object.entries(headers)) {
        this.response.rawHeaders.push(
          headerName,
          ...(Array.isArray(headerValue) ? headerValue : [headerValue])
        )

        const insensitiveHeaderName = headerName.toLowerCase()
        const prevHeaders = this.response.headers[insensitiveHeaderName]
        this.response.headers[insensitiveHeaderName] = prevHeaders
          ? Array.prototype.concat([], prevHeaders, headerValue)
          : headerValue
      }
    }
    this.log('mocked response headers ready:', headers)

    if (body) {
      this.response.push(Buffer.from(body))
    }

    // Push "null" to indicate that the response body is complete
    // and shouldn't be written to anymore.
    this.response.push(null)
    this.response.complete = true

    /**
     * Set the internal "res" property to the mocked "OutgoingMessage"
     * to make the "ClientRequest" instance think there's data received
     * from the socket.
     * @see https://github.com/nodejs/node/blob/9c405f2591f5833d0247ed0fafdcd68c5b14ce7a/lib/_http_client.js#L501
     */
    // @ts-ignore
    this.res = this.response

    this.finished = true
    Object.defineProperty(this, 'writableEnded', {
      value: true,
    })

    this.emit('finish')
    this.emit('response', this.response)

    this.terminate()
  }

  /**
   * Terminates a pending request.
   */
  private terminate(): void {
    // @ts-ignore
    this.agent.destroy()
  }

  private getRequestBody(chunk: ClientRequestEndChunk | null): string {
    const writtenRequestBody = bodyBufferToString(
      Buffer.concat(this.requestBody)
    )
    this.log('written request body:', writtenRequestBody)

    // Write the last request body chunk to the internal request body buffer.
    if (chunk) {
      this.requestBody = concatChunkToBuffer(chunk, this.requestBody)
    }

    const resolvedRequestBody = bodyBufferToString(
      Buffer.concat(this.requestBody)
    )

    this.log('resolved request body:', resolvedRequestBody)

    return resolvedRequestBody
  }

  private toIsomorphicRequest(body: string): IsomorphicRequest {
    this.log('creating isomorphic request object...')

    const outgoingHeaders = this.getHeaders()
    this.log('request outgoing headers:', outgoingHeaders)

    const headers = new Headers()
    for (const [headerName, headerValue] of Object.entries(outgoingHeaders)) {
      if (!headerValue) {
        continue
      }

      headers.set(headerName.toLowerCase(), headerValue.toString())
    }

    const isomorphicRequest: IsomorphicRequest = {
      id: uuidv4(),
      url: this.url,
      method: this.options.method || 'GET',
      credentials: 'same-origin',
      headers,
      body,
    }

    this.log('successfully created isomorphic request!', isomorphicRequest)
    return isomorphicRequest
  }
}
