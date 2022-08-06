import { debug } from 'debug'
import {
  Agent as HttpAgent,
  globalAgent as httpGlobalAgent,
  IncomingMessage,
} from 'http'
import {
  RequestOptions,
  Agent as HttpsAgent,
  globalAgent as httpsGlobalAgent,
} from 'https'
import { Url as LegacyURL } from 'url'
import { getRequestOptionsByUrl } from '../../../utils/getRequestOptionsByUrl'
import {
  ResolvedRequestOptions,
  getUrlByRequestOptions,
} from '../../../utils/getUrlByRequestOptions'
import { cloneObject } from '../../../utils/cloneObject'
import { isObject } from '../../../utils/isObject'

const log = debug('http normalizeClientRequestArgs')

export type HttpRequestCallback = (response: IncomingMessage) => void

export type ClientRequestArgs =
  | [string | URL | LegacyURL, HttpRequestCallback?]
  | [string | URL | LegacyURL, RequestOptions, HttpRequestCallback?]
  | [RequestOptions, HttpRequestCallback?]

function resolveRequestOptions(
  args: ClientRequestArgs,
  url: URL
): RequestOptions {
  // Calling `fetch` provides only URL to `ClientRequest`
  // without any `RequestOptions` or callback.
  if (typeof args[1] === 'undefined' || typeof args[1] === 'function') {
    log('request options not provided, deriving from the url', url)
    return getRequestOptionsByUrl(url)
  }

  if (args[1]) {
    log('has custom RequestOptions!', args[1])
    const requestOptionsFromUrl = getRequestOptionsByUrl(url)

    log('derived RequestOptions from the URL:', requestOptionsFromUrl)

    /**
     * Clone the request options to lock their state
     * at the moment they are provided to `ClientRequest`.
     * @see https://github.com/mswjs/interceptors/issues/86
     */
    log('cloning RequestOptions...')
    const clonedRequestOptions = cloneObject(args[1])
    log('successfully cloned RequestOptions!', clonedRequestOptions)

    return {
      ...requestOptionsFromUrl,
      ...clonedRequestOptions,
    }
  }

  log('using an empty object as request options')
  return {} as RequestOptions
}

function resolveCallback(
  args: ClientRequestArgs
): HttpRequestCallback | undefined {
  return typeof args[1] === 'function' ? args[1] : args[2]
}

export type NormalizedClientRequestArgs = [
  url: URL,
  options: ResolvedRequestOptions,
  callback?: HttpRequestCallback
]

/**
 * Normalizes parameters given to a `http.request` call
 * so it always has a `URL` and `RequestOptions`.
 */
export function normalizeClientRequestArgs(
  defaultProtocol: string,
  ...args: ClientRequestArgs
): NormalizedClientRequestArgs {
  let url: URL
  let options: ResolvedRequestOptions
  let callback: HttpRequestCallback | undefined

  log('arguments', args)
  log('using default protocol:', defaultProtocol)

  // Convert a url string into a URL instance
  // and derive request options from it.
  if (typeof args[0] === 'string') {
    log('first argument is a location string:', args[0])

    url = new URL(args[0])
    log('created a url:', url)

    const requestOptionsFromUrl = getRequestOptionsByUrl(url)
    log('request options from url:', requestOptionsFromUrl)

    options = resolveRequestOptions(args, url)
    log('resolved request options:', options)

    callback = resolveCallback(args)
  }
  // Handle a given URL instance as-is
  // and derive request options from it.
  else if (args[0] instanceof URL) {
    url = args[0]
    log('first argument is a URL:', url)

    options = resolveRequestOptions(args, url)
    log('derived request options:', options)

    callback = resolveCallback(args)
  }
  // Handle a legacy URL instance and re-normalize from either a RequestOptions object
  // or a WHATWG URL.
  else if ('hash' in args[0] && !('method' in args[0])) {
    const [legacyUrl] = args
    log('first argument is a legacy URL:', legacyUrl)

    if (legacyUrl.hostname === null) {
      /**
       * We are dealing with a relative url, so use the path as an "option" and
       * merge in any existing options, giving priority to exising options -- i.e. a path in any
       * existing options will take precedence over the one contained in the url. This is consistent
       * with the behaviour in ClientRequest.
       * @see https://github.com/nodejs/node/blob/d84f1312915fe45fe0febe888db692c74894c382/lib/_http_client.js#L122
       */
      log('given legacy URL is relative (no hostname)')

      return isObject(args[1])
        ? normalizeClientRequestArgs(
            defaultProtocol,
            { path: legacyUrl.path, ...args[1] },
            args[2]
          )
        : normalizeClientRequestArgs(
            defaultProtocol,
            { path: legacyUrl.path },
            args[1] as HttpRequestCallback
          )
    }

    log('given legacy url is absolute')

    // We are dealing with an absolute URL, so convert to WHATWG and try again.
    const resolvedUrl = new URL(legacyUrl.href)

    return args[1] === undefined
      ? normalizeClientRequestArgs(defaultProtocol, resolvedUrl)
      : typeof args[1] === 'function'
      ? normalizeClientRequestArgs(defaultProtocol, resolvedUrl, args[1])
      : normalizeClientRequestArgs(
          defaultProtocol,
          resolvedUrl,
          args[1],
          args[2]
        )
  }
  // Handle a given "RequestOptions" object as-is
  // and derive the URL instance from it.
  else if (isObject(args[0])) {
    options = args[0]
    log('first argument is RequestOptions:', options)

    // When handling a "RequestOptions" object without an explicit "protocol",
    // infer the protocol from the request issuing module (http/https).
    options.protocol = options.protocol || defaultProtocol
    log('normalized request options:', options)

    url = getUrlByRequestOptions(options)
    log('created a URL from RequestOptions:', url.href)

    callback = resolveCallback(args)
  } else {
    throw new Error(
      `Failed to construct ClientRequest with these parameters: ${args}`
    )
  }

  options.protocol = options.protocol || url.protocol
  options.method = options.method || 'GET'

  /**
   * Infer a fallback agent from the URL protocol.
   * The interception is done on the "ClientRequest" level ("NodeClientRequest")
   * and it may miss the correct agent. Always align the agent
   * with the URL protocol, if not provided.
   *
   * @note Respect the "agent: false" value.
   */
  if (typeof options.agent === 'undefined') {
    const agent =
      options.protocol === 'https:'
        ? new HttpsAgent({
            rejectUnauthorized: options.rejectUnauthorized,
          })
        : new HttpAgent()

    options.agent = agent
    log('resolved fallback agent:', agent)
  }

  /**
   * Ensure that the default Agent is always set.
   * This prevents the protocol mismatch for requests with { agent: false },
   * where the global Agent is inferred.
   * @see https://github.com/mswjs/msw/issues/1150
   * @see https://github.com/nodejs/node/blob/418ff70b810f0e7112d48baaa72932a56cfa213b/lib/_http_client.js#L130
   * @see https://github.com/nodejs/node/blob/418ff70b810f0e7112d48baaa72932a56cfa213b/lib/_http_client.js#L157-L159
   */
  if (!options._defaultAgent) {
    log(
      'has no default agent, setting the default agent for "%s"',
      options.protocol
    )

    options._defaultAgent =
      options.protocol === 'https:' ? httpsGlobalAgent : httpGlobalAgent
  }

  log('successfully resolved url:', url.href)
  log('successfully resolved options:', options)
  log('successfully resolved callback:', callback)

  return [url, options, callback]
}
