import { invariant } from 'outvariant'
import {
  HttpRequestEventMap,
  InteractiveIsomorphicRequest,
  IS_PATCHED_MODULE,
} from '../../glossary'
import { Interceptor } from '../../Interceptor'
import { AsyncEventEmitter } from '../../utils/AsyncEventEmitter'
import { createXMLHttpRequestOverride } from './XMLHttpRequestOverride'

export type XMLHttpRequestEventListener = (
  request: InteractiveIsomorphicRequest
) => Promise<void> | void

export type XMLHttpRequestEmitter = AsyncEventEmitter<HttpRequestEventMap>

export class XMLHttpRequestInterceptor extends Interceptor<HttpRequestEventMap> {
  static symbol = Symbol('xhr')

  constructor() {
    super(XMLHttpRequestInterceptor.symbol)
  }

  protected checkEnvironment() {
    return (
      typeof window !== 'undefined' &&
      typeof window.XMLHttpRequest !== 'undefined'
    )
  }

  protected setup() {
    const log = this.log.extend('setup')

    log('patching "XMLHttpRequest" module...')

    const PureXMLHttpRequest = window.XMLHttpRequest

    invariant(
      !(PureXMLHttpRequest as any)[IS_PATCHED_MODULE],
      'Failed to patch the "XMLHttpRequest" module: already patched.'
    )

    window.XMLHttpRequest = createXMLHttpRequestOverride({
      XMLHttpRequest: PureXMLHttpRequest,
      emitter: this.emitter,
      log: this.log,
    })

    log('native "XMLHttpRequest" module patched!', window.XMLHttpRequest.name)

    Object.defineProperty(window.XMLHttpRequest, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true,
    })

    this.subscriptions.push(() => {
      Object.defineProperty(window.XMLHttpRequest, IS_PATCHED_MODULE, {
        value: undefined,
      })

      window.XMLHttpRequest = PureXMLHttpRequest
      log(
        'native "XMLHttpRequest" module restored!',
        window.XMLHttpRequest.name
      )
    })
  }
}
