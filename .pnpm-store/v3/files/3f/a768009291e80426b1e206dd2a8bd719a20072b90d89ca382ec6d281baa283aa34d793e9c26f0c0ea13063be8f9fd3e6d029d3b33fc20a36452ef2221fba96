import {
  Headers,
  flattenHeadersObject,
  objectToHeaders,
  headersToObject,
} from 'headers-polyfill'
import { invariant } from 'outvariant'
import {
  HttpRequestEventMap,
  InteractiveIsomorphicRequest,
  IsomorphicResponse,
  IS_PATCHED_MODULE,
} from '../../glossary'
import { Interceptor } from '../../Interceptor'
import { createLazyCallback } from '../../utils/createLazyCallback'
import { toIsoResponse } from '../../utils/toIsoResponse'
import { uuidv4 } from '../../utils/uuid'

export class FetchInterceptor extends Interceptor<HttpRequestEventMap> {
  static symbol = Symbol('fetch')

  constructor() {
    super(FetchInterceptor.symbol)
  }

  protected checkEnvironment() {
    return (
      typeof globalThis !== 'undefined' &&
      typeof globalThis.fetch !== 'undefined'
    )
  }

  protected setup() {
    const pureFetch = globalThis.fetch

    invariant(
      !(pureFetch as any)[IS_PATCHED_MODULE],
      'Failed to patch the "fetch" module: already patched.'
    )

    globalThis.fetch = async (input, init) => {
      const request = new Request(input, init)

      const url = typeof input === 'string' ? input : input.url
      const method = request.method

      this.log('[%s] %s', method, url)

      const isomorphicRequest: InteractiveIsomorphicRequest = {
        id: uuidv4(),
        url: new URL(url, location.origin),
        method: method,
        headers: new Headers(request.headers),
        credentials: request.credentials,
        body: await request.clone().text(),
        respondWith: createLazyCallback(),
      }

      this.log('isomorphic request', isomorphicRequest)

      this.log(
        'emitting the "request" event for %d listener(s)...',
        this.emitter.listenerCount('request')
      )
      this.emitter.emit('request', isomorphicRequest)

      this.log('awaiting for the mocked response...')

      await this.emitter.untilIdle('request', ({ args: [request] }) => {
        return request.id === isomorphicRequest.id
      })
      this.log('all request listeners have been resolved!')

      const [mockedResponse] = await isomorphicRequest.respondWith.invoked()
      this.log('event.respondWith called with:', mockedResponse)

      if (mockedResponse) {
        this.log('received mocked response:', mockedResponse)

        const isomorphicResponse = toIsoResponse(mockedResponse)
        this.log('derived isomorphic response:', isomorphicResponse)

        this.emitter.emit('response', isomorphicRequest, isomorphicResponse)

        const response = new Response(mockedResponse.body, {
          ...isomorphicResponse,
          // `Response.headers` cannot be instantiated with the `Headers` polyfill.
          // Apparently, it halts if the `Headers` class contains unknown properties
          // (i.e. the internal `Headers.map`).
          headers: flattenHeadersObject(mockedResponse.headers || {}),
        })

        // Set the "response.url" property to equal the intercepted request URL.
        Object.defineProperty(response, 'url', {
          writable: false,
          enumerable: true,
          configurable: false,
          value: isomorphicRequest.url.href,
        })

        return response
      }

      this.log('no mocked response received!')

      return pureFetch(request).then(async (response) => {
        const cloneResponse = response.clone()
        this.log('original fetch performed', cloneResponse)

        this.emitter.emit(
          'response',
          isomorphicRequest,
          await normalizeFetchResponse(cloneResponse)
        )
        return response
      })
    }

    Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true,
    })

    this.subscriptions.push(() => {
      Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
        value: undefined,
      })

      globalThis.fetch = pureFetch

      this.log('restored native "globalThis.fetch"!', globalThis.fetch.name)
    })
  }
}

async function normalizeFetchResponse(
  response: Response
): Promise<IsomorphicResponse> {
  return {
    status: response.status,
    statusText: response.statusText,
    headers: objectToHeaders(headersToObject(response.headers)),
    body: await response.text(),
  }
}
