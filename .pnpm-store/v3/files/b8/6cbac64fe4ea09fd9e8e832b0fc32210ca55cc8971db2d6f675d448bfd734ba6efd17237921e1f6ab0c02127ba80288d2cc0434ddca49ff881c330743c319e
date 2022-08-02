import type { HeadersObject, Headers } from 'headers-polyfill'
import type { LazyCallback } from './utils/createLazyCallback'

export const IS_PATCHED_MODULE: unique symbol = Symbol('isPatchedModule')

export type RequestCredentials = 'omit' | 'include' | 'same-origin'

export interface IsomorphicRequest {
  id: string
  url: URL
  method: string
  headers: Headers
  /**
   * The value of the request client's "credentials" option
   * or a compatible alternative (i.e. `withCredentials` for `XMLHttpRequest`).
   * Always equals to "omit" in Node.js.
   */
  credentials: RequestCredentials
  body?: string
}

export interface InteractiveIsomorphicRequest extends IsomorphicRequest {
  respondWith: LazyCallback<(mockedResponse: MockedResponse) => void>
}

export interface IsomorphicResponse {
  status: number
  statusText: string
  headers: Headers
  body?: string
}

export interface MockedResponse
  extends Omit<Partial<IsomorphicResponse>, 'headers'> {
  headers?: HeadersObject
}

export type HttpRequestEventMap = {
  request(request: InteractiveIsomorphicRequest): Promise<void> | void
  response(
    request: IsomorphicRequest,
    response: IsomorphicResponse
  ): Promise<void> | void
}
