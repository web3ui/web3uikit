/**
 * @jest-environment node
 */
import { debug } from 'debug'
import * as express from 'express'
import { HttpServer } from '@open-draft/test-server/http'
import { NodeClientRequest } from './NodeClientRequest'
import { getIncomingMessageBody } from './utils/getIncomingMessageBody'
import { normalizeClientRequestArgs } from './utils/normalizeClientRequestArgs'
import { AsyncEventEmitter } from '../../utils/AsyncEventEmitter'
import { sleep } from '../../../test/helpers'
import { HttpRequestEventMap } from '../../glossary'

interface ErrorConnectionRefused extends NodeJS.ErrnoException {
  address: string
  port: number
}

const httpServer = new HttpServer((app) => {
  app.post('/comment', (_req, res) => {
    res.status(200).send('original-response')
  })

  app.post('/write', express.text(), (req, res) => {
    res.status(200).send(req.body)
  })
})

const log = debug('test')

beforeAll(async () => {
  await httpServer.listen()
})

afterAll(async () => {
  await httpServer.close()
})

test('gracefully finishes the request when it has a mocked response', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', 'http://any.thing', {
      method: 'PUT',
    }),
    {
      emitter,
      log,
    }
  )

  emitter.on('request', (request) => {
    request.respondWith({
      status: 301,
      headers: {
        'x-custom-header': 'yes',
      },
      body: 'mocked-response',
    })
  })

  request.on('response', async (response) => {
    // Request must be marked as finished.
    expect(request.finished).toEqual(true)
    expect(request.writableEnded).toEqual(true)
    expect(request.writableFinished).toEqual(true)
    expect(request.writableCorked).toEqual(0)

    expect(response.statusCode).toEqual(301)
    expect(response.headers).toHaveProperty('x-custom-header', 'yes')

    const text = await getIncomingMessageBody(response)
    expect(text).toEqual('mocked-response')

    done()
  })

  request.end()
})

test('responds with a mocked response when requesting an existing hostname', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', httpServer.http.url('/comment')),
    {
      emitter,
      log,
    }
  )

  emitter.on('request', (request) => {
    request.respondWith({
      status: 201,
      body: 'mocked-response',
    })
  })

  request.on('response', async (response) => {
    expect(response.statusCode).toEqual(201)

    const text = await getIncomingMessageBody(response)
    expect(text).toEqual('mocked-response')

    done()
  })

  request.end()
})

test('performs the request as-is given resolver returned no mocked response', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', httpServer.http.url('/comment'), {
      method: 'POST',
    }),
    {
      emitter,
      log,
    }
  )

  request.on('response', async (response) => {
    expect(request.finished).toEqual(true)
    expect(request.writableEnded).toEqual(true)

    expect(response.statusCode).toEqual(200)
    expect(response.statusMessage).toEqual('OK')
    expect(response.headers).toHaveProperty('x-powered-by', 'Express')

    const text = await getIncomingMessageBody(response)
    expect(text).toEqual('original-response')

    done()
  })

  request.end()
})

test('emits the ENOTFOUND error connecting to a non-existing hostname given no mocked response', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', 'http://non-existing-url.com'),
    {
      emitter,
      log,
    }
  )

  request.on('error', (error: NodeJS.ErrnoException) => {
    expect(error.code).toEqual('ENOTFOUND')
    expect(error.syscall).toEqual('getaddrinfo')
    done()
  })

  request.end()
})

test('emits the ECONNREFUSED error connecting to an inactive server given no mocked response', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', 'http://localhost:12345'),
    {
      emitter,
      log,
    }
  )

  request.on('error', (error: ErrorConnectionRefused) => {
    expect(error.code).toEqual('ECONNREFUSED')
    expect(error.syscall).toEqual('connect')
    expect(error.address).toEqual('127.0.0.1')
    expect(error.port).toEqual(12345)

    done()
  })

  request.end()
})

test('does not emit ENOTFOUND error connecting to an inactive server given mocked response', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const handleError = jest.fn()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', 'http://non-existing-url.com'),
    {
      emitter,
      log,
    }
  )

  emitter.on('request', async (request) => {
    await sleep(250)
    request.respondWith({
      status: 200,
      statusText: 'Works',
    })
  })

  request.on('error', handleError)
  request.on('response', (response) => {
    expect(handleError).not.toHaveBeenCalled()
    expect(response.statusCode).toEqual(200)
    expect(response.statusMessage).toEqual('Works')
    done()
  })
  request.end()
})

test('does not emit ECONNREFUSED error connecting to an inactive server given mocked response', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const handleError = jest.fn()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', 'http://localhost:9876'),
    {
      emitter,
      log,
    }
  )

  emitter.on('request', async (request) => {
    await sleep(250)
    request.respondWith({
      status: 200,
      statusText: 'Works',
    })
  })

  request.on('error', handleError)
  request.on('response', (response) => {
    expect(handleError).not.toHaveBeenCalled()
    expect(response.statusCode).toEqual(200)
    expect(response.statusMessage).toEqual('Works')
    done()
  })
  request.end()
})

test('sends the request body to the server given no mocked response', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', httpServer.http.url('/write'), {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
    }),
    {
      emitter,
      log,
    }
  )

  request.write('one')
  request.write('two')

  request.on('response', async (response) => {
    expect(response.statusCode).toEqual(200)

    const text = await getIncomingMessageBody(response)
    expect(text).toEqual('onetwothree')

    done()
  })

  request.end('three')
})

test('does not send request body to the original server given mocked response', (done) => {
  const emitter = new AsyncEventEmitter<HttpRequestEventMap>()
  const request = new NodeClientRequest(
    normalizeClientRequestArgs('http:', httpServer.http.url('/write'), {
      method: 'POST',
    }),
    {
      emitter,
      log,
    }
  )

  emitter.on('request', async (request) => {
    await sleep(200)
    request.respondWith({
      status: 301,
      body: 'mock created!',
    })
  })

  request.write('one')
  request.write('two')

  request.on('response', async (response) => {
    expect(response.statusCode).toEqual(301)

    const text = await getIncomingMessageBody(response)
    expect(text).toEqual('mock created!')

    done()
  })

  request.end()
})
