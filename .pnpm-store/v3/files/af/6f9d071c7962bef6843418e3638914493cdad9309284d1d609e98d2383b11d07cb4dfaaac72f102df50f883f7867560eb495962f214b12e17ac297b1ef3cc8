import { RequestOptions } from 'http'

/**
 * Converts a URL instance into the RequestOptions object expected by
 * the `ClientRequest` class.
 * @see https://github.com/nodejs/node/blob/908292cf1f551c614a733d858528ffb13fb3a524/lib/internal/url.js#L1257
 */
export function getRequestOptionsByUrl(url: URL): RequestOptions {
  const options: RequestOptions = {
    method: 'GET',
    protocol: url.protocol,
    hostname:
      typeof url.hostname === 'string' && url.hostname.startsWith('[')
        ? url.hostname.slice(1, -1)
        : url.hostname,
    host: url.host,
    path: `${url.pathname}${url.search || ''}`,
  }

  if (!!url.port) {
    options.port = Number(url.port)
  }

  if (url.username || url.password) {
    options.auth = `${url.username}:${url.password}`
  }

  return options
}
