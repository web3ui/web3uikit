import http from 'http'
import https from 'https'
import { invariant } from 'outvariant'
import { HttpRequestEventMap, IS_PATCHED_MODULE } from '../../glossary'
import { Interceptor } from '../../Interceptor'
import { AsyncEventEmitter } from '../../utils/AsyncEventEmitter'
import { get } from './http.get'
import { request } from './http.request'
import { NodeClientOptions, Protocol } from './NodeClientRequest'

export type MaybePatchedModule<Module> = Module & {
  [IS_PATCHED_MODULE]?: boolean
}

export type ClientRequestEmitter = AsyncEventEmitter<HttpRequestEventMap>

export type ClientRequestModules = Map<
  Protocol,
  MaybePatchedModule<typeof http> | MaybePatchedModule<typeof https>
>

/**
 * Intercept requests made via the `ClientRequest` class.
 * Such requests include `http.get`, `https.request`, etc.
 */
export class ClientRequestInterceptor extends Interceptor<HttpRequestEventMap> {
  static symbol = Symbol('http')
  private modules: ClientRequestModules

  constructor() {
    super(ClientRequestInterceptor.symbol)

    this.modules = new Map()
    this.modules.set('http', http)
    this.modules.set('https', https)
  }

  protected setup(): void {
    const log = this.log.extend('setup')

    for (const [protocol, requestModule] of this.modules) {
      const { request: pureRequest, get: pureGet } = requestModule

      invariant(
        !requestModule[IS_PATCHED_MODULE],
        'Failed to patch the "%s" module: already patched.',
        protocol
      )

      this.subscriptions.push(() => {
        Object.defineProperty(requestModule, IS_PATCHED_MODULE, {
          value: undefined,
        })

        requestModule.request = pureRequest
        requestModule.get = pureGet

        log('native "%s" module restored!', protocol)
      })

      const options: NodeClientOptions = {
        emitter: this.emitter,
        log: this.log,
      }

      // @ts-ignore
      requestModule.request =
        // Force a line break.
        request(protocol, options)

      // @ts-ignore
      requestModule.get =
        // Force a line break.
        get(protocol, options)

      Object.defineProperty(requestModule, IS_PATCHED_MODULE, {
        configurable: true,
        enumerable: true,
        value: true,
      })

      log('native "%s" module patched!', protocol)
    }
  }
}
