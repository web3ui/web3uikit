import { Debugger, debug } from 'debug'
import { AsyncEventEmitter } from './utils/AsyncEventEmitter'
import { nextTick } from './utils/nextTick'

export type InterceptorEventMap = Record<string, (...args: any[]) => void>
export type InterceptorSubscription = () => void

export function getGlobalSymbol<V>(symbol: Symbol): V | undefined {
  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/24587
    globalThis[symbol] || undefined
  )
}

function setGlobalSymbol(symbol: Symbol, value: any): void {
  // @ts-ignore
  globalThis[symbol] = value
}

export function deleteGlobalSymbol(symbol: Symbol): void {
  // @ts-ignore
  delete globalThis[symbol]
}

export enum InterceptorReadyState {
  IDLE = 'IDLE',
  APPLYING = 'APPLYING',
  APPLIED = 'APPLIED',
  DISPOSING = 'DISPOSING',
  DISPOSED = 'DISPOSED',
}

export type ExtractEventNames<EventMap extends Record<string, any>> =
  EventMap extends Record<infer EventName, any> ? EventName : never

export class Interceptor<EventMap extends InterceptorEventMap> {
  protected emitter: AsyncEventEmitter<EventMap>
  protected subscriptions: InterceptorSubscription[]
  protected log: Debugger

  public readyState: InterceptorReadyState

  constructor(private readonly symbol: Symbol) {
    this.readyState = InterceptorReadyState.IDLE

    this.emitter = new AsyncEventEmitter()
    this.subscriptions = []
    this.log = debug(symbol.description!)

    // Do not limit the maximum number of listeners
    // so not to limit the maximum amount of parallel events emitted.
    this.emitter.setMaxListeners(0)

    this.log('constructing the interceptor...')
  }

  /**
   * Determine if this interceptor can be applied
   * in the current environment.
   */
  protected checkEnvironment(): boolean {
    return true
  }

  /**
   * Apply this interceptor to the current process.
   * Returns an already running interceptor instance if it's present.
   */
  public apply(): void {
    const log = this.log.extend('apply')
    log('applying the interceptor...')

    if (this.readyState === InterceptorReadyState.APPLIED) {
      log('intercepted already applied!')
      return
    }

    const shouldApply = this.checkEnvironment()

    if (!shouldApply) {
      log('the interceptor cannot be applied in this environment!')
      return
    }

    this.readyState = InterceptorReadyState.APPLYING

    // Always activate the emitter when applying the interceptor.
    // This will ensure the interceptor can process events after it's
    // been disposed and re-applied again (it may be a singleton).
    this.emitter.activate()
    log('activated the emiter!', this.emitter.readyState)

    // Whenever applying a new interceptor, check if it hasn't been applied already.
    // This enables to apply the same interceptor multiple times, for example from a different
    // interceptor, only proxying events but keeping the stubs in a single place.
    const runningInstance = this.getInstance()

    if (runningInstance) {
      log('found a running instance, reusing...')

      // Proxy any listeners you set on this instance to the running instance.
      this.on = (event, listener) => {
        log('proxying the "%s" listener', event)

        // Add listeners to the running instance so they appear
        // at the top of the event listeners list and are executed first.
        runningInstance.emitter.addListener(event, listener)

        // Ensure that once this interceptor instance is disposed,
        // it removes all listeners it has appended to the running interceptor instance.
        this.subscriptions.push(() => {
          runningInstance.emitter.removeListener(event, listener)
          log('removed proxied "%s" listener!', event)
        })
      }

      nextTick(() => {
        this.readyState = InterceptorReadyState.APPLIED
      })

      return
    }

    log('no running instance found, setting up a new instance...')

    // Setup the interceptor.
    this.setup()

    // Store the newly applied interceptor instance globally.
    this.setInstance()

    nextTick(() => {
      this.readyState = InterceptorReadyState.APPLIED
    })
  }

  /**
   * Setup the module augments and stubs necessary for this interceptor.
   * This method is not run if there's a running interceptor instance
   * to prevent instantiating an interceptor multiple times.
   */
  protected setup(): void {}

  /**
   * Listen to the interceptor's public events.
   */
  public on<Event extends ExtractEventNames<EventMap>>(
    event: Event,
    listener: EventMap[Event]
  ): void {
    const log = this.log.extend('on')

    if (
      this.readyState === InterceptorReadyState.DISPOSING ||
      this.readyState === InterceptorReadyState.DISPOSED
    ) {
      log('cannot listen to events, already disposed!')
      return
    }

    log('adding "%s" event listener:', event, listener.name)

    this.emitter.on(event, listener)
  }

  /**
   * Disposes of any side-effects this interceptor has introduced.
   */
  public dispose(): void {
    const log = this.log.extend('dispose')

    if (this.readyState === InterceptorReadyState.DISPOSED) {
      log('cannot dispose, already disposed!')
      return
    }

    log('disposing the interceptor...')
    this.readyState = InterceptorReadyState.DISPOSING

    if (!this.getInstance()) {
      log('no interceptors running, skipping dispose...')
      return
    }

    // Delete the global symbol as soon as possible,
    // indicating that the interceptor is no longer running.
    this.clearInstance()

    log('global symbol deleted:', getGlobalSymbol(this.symbol))

    if (this.subscriptions.length > 0) {
      log('disposing of %d subscriptions...', this.subscriptions.length)

      for (const dispose of this.subscriptions) {
        dispose()
      }

      this.subscriptions = []

      log('disposed of all subscriptions!', this.subscriptions.length)
    }

    this.emitter.deactivate()
    log('destroyed the listener!')

    nextTick(() => {
      this.readyState = InterceptorReadyState.DISPOSED
    })
  }

  private getInstance(): this | undefined {
    const instance = getGlobalSymbol<this>(this.symbol)
    this.log('retrieved global instance:', instance?.constructor?.name)
    return instance
  }

  private setInstance(): void {
    setGlobalSymbol(this.symbol, this)
    this.log('set global instance!', this.symbol.description)
  }

  private clearInstance(): void {
    deleteGlobalSymbol(this.symbol)
    this.log('cleared global instance!', this.symbol.description)
  }
}
