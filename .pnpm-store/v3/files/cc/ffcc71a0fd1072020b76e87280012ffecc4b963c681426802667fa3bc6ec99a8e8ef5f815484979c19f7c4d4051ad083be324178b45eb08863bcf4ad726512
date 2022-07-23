import { debug } from 'debug'
import { ClientRequest } from 'http'
import {
  NodeClientOptions,
  NodeClientRequest,
  Protocol,
} from './NodeClientRequest'
import {
  normalizeClientRequestArgs,
  ClientRequestArgs,
} from './utils/normalizeClientRequestArgs'

const log = debug('http request')

export function request(protocol: Protocol, options: NodeClientOptions) {
  return (...args: ClientRequestArgs): ClientRequest => {
    log('request call (protocol "%s"):', protocol, args)

    const clientRequestArgs = normalizeClientRequestArgs(
      `${protocol}:`,
      ...args
    )
    return new NodeClientRequest(clientRequestArgs, options)
  }
}
