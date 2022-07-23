import { ChildProcess } from 'child_process'
import { Headers } from 'headers-polyfill'
import type {
  HttpRequestEventMap,
  InteractiveIsomorphicRequest,
  IsomorphicRequest,
} from './glossary'
import { Interceptor } from './Interceptor'
import { BatchInterceptor } from './BatchInterceptor'
import { ClientRequestInterceptor } from './interceptors/ClientRequest'
import { XMLHttpRequestInterceptor } from './interceptors/XMLHttpRequest'
import { createLazyCallback } from './utils/createLazyCallback'
import { toIsoResponse } from './utils/toIsoResponse'

export class RemoteHttpInterceptor extends BatchInterceptor<
  [ClientRequestInterceptor, XMLHttpRequestInterceptor]
> {
  constructor() {
    super({
      name: 'remote-interceptor',
      interceptors: [
        new ClientRequestInterceptor(),
        new XMLHttpRequestInterceptor(),
      ],
    })
  }

  protected setup() {
    super.setup()

    let handleParentMessage: NodeJS.MessageListener

    this.on('request', async (request) => {
      // Send the stringified intercepted request to
      // the parent process where the remote resolver is established.
      const serializedRequest = JSON.stringify(request)

      this.log('sent serialized request to the child:', serializedRequest)
      process.send?.(`request:${serializedRequest}`)

      const responsePromise = new Promise<void>((resolve) => {
        handleParentMessage = (message) => {
          if (typeof message !== 'string') {
            return resolve()
          }

          if (message.startsWith(`response:${request.id}`)) {
            const [, serializedResponse] =
              message.match(/^response:.+?:(.+)$/) || []

            if (!serializedResponse) {
              return resolve()
            }

            const mockedResponse = JSON.parse(serializedResponse)
            request.respondWith(mockedResponse)
            resolve()
          }
        }
      })

      // Listen for the mocked resopnse message from the parent.
      this.log(
        'add "message" listener to the parent process',
        handleParentMessage
      )
      process.addListener('message', handleParentMessage)

      return responsePromise
    })

    this.subscriptions.push(() => {
      process.removeListener('message', handleParentMessage)
    })
  }
}

export function requestReviver(key: string, value: any) {
  switch (key) {
    case 'url':
      return new URL(value)

    case 'headers':
      return new Headers(value)

    default:
      return value
  }
}

export interface RemoveResolverOptions {
  process: ChildProcess
}

export class RemoteHttpResolver extends Interceptor<HttpRequestEventMap> {
  static symbol = Symbol('remote-resolver')
  private process: ChildProcess

  constructor(options: RemoveResolverOptions) {
    super(RemoteHttpResolver.symbol)
    this.process = options.process
  }

  protected setup() {
    const log = this.log.extend('setup')

    const handleChildMessage: NodeJS.MessageListener = async (message) => {
      log('received message from child!', message)

      if (typeof message !== 'string' || !message.startsWith('request:')) {
        log('unknown message, ignoring...')
        return
      }

      const [, serializedRequest] = message.match(/^request:(.+)$/) || []

      if (!serializedRequest) {
        return
      }

      const isomorphicRequest: IsomorphicRequest = JSON.parse(
        serializedRequest,
        requestReviver
      )

      log('parsed intercepted request', isomorphicRequest)

      const interactiveIsomorphicRequest: InteractiveIsomorphicRequest = {
        ...isomorphicRequest,
        respondWith: createLazyCallback(),
      }

      this.emitter.emit('request', interactiveIsomorphicRequest)
      await this.emitter.untilIdle('request', ({ args: [request] }) => {
        return request.id === interactiveIsomorphicRequest.id
      })
      const [mockedResponse] =
        await interactiveIsomorphicRequest.respondWith.invoked()

      log('event.respondWith called with:', mockedResponse)

      // Send the mocked response to the child process.
      const serializedResponse = JSON.stringify(mockedResponse)

      this.process.send(
        `response:${isomorphicRequest.id}:${serializedResponse}`,
        (error) => {
          if (error) {
            return
          }

          if (mockedResponse) {
            // Emit an optimistinc "response" event at this point,
            // not to rely on the back-and-forth signaling for the sake of the event.
            this.emitter.emit(
              'response',
              isomorphicRequest,
              toIsoResponse(mockedResponse)
            )
          }
        }
      )

      log('sent serialized mocked response to the parent:', serializedResponse)
    }

    this.subscriptions.push(() => {
      this.process.removeListener('message', handleChildMessage)
      log('removed the "message" listener from the child process!')
    })

    log('adding a "message" listener to the child process')
    this.process.addListener('message', handleChildMessage)

    this.process.once('error', () => this.dispose())
    this.process.once('exit', () => this.dispose())
  }
}
