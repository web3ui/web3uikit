import * as http from 'http'
import { HttpServer } from '@open-draft/test-server/http'
import { ClientRequestInterceptor } from '.'

const httpServer = new HttpServer((app) => {
  app.get('/', (_req, res) => {
    res.status(200).send('/')
  })
  app.get('/get', (_req, res) => {
    res.status(200).send('/get')
  })
})

const interceptor = new ClientRequestInterceptor()

beforeAll(async () => {
  await httpServer.listen()

  interceptor.apply()
})

afterAll(async () => {
  interceptor.dispose()
  await httpServer.close()
})

it('forbids calling "respondWith" multiple times for the same request', (done) => {
  const requestUrl = httpServer.http.url('/')

  interceptor.on('request', (request) => {
    request.respondWith({ status: 200 })
  })

  interceptor.on('request', (request) => {
    expect(() => request.respondWith({ status: 301 })).toThrow(
      `Failed to respond to "GET ${requestUrl}" request: the "request" event has already been responded to.`
    )

    done()
  })

  http.get(requestUrl)
})
