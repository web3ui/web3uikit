import { objectToHeaders } from 'headers-polyfill'
import { IsomorphicResponse, MockedResponse } from '../glossary'

/**
 * Converts a given mocked response object into an isomorphic response.
 */
export function toIsoResponse(response: MockedResponse): IsomorphicResponse {
  return {
    status: response.status || 200,
    statusText: response.statusText || 'OK',
    headers: objectToHeaders(response.headers || {}),
    body: response.body,
  }
}
