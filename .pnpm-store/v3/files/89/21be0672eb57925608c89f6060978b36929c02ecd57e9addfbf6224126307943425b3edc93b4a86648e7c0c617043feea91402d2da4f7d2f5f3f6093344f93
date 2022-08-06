import { Agent as HttpAgent } from 'http'
import { RequestOptions, Agent as HttpsAgent } from 'https'
import { getUrlByRequestOptions } from './getUrlByRequestOptions'

test('returns a URL based on the basic RequestOptions', () => {
  const options: RequestOptions = {
    protocol: 'https:',
    host: '127.0.0.1',
    path: '/resource',
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('port', '')
  expect(url).toHaveProperty('href', 'https://127.0.0.1/resource')
})

test('inherits protocol and port from http.Agent, if set', () => {
  const options: RequestOptions = {
    host: '127.0.0.1',
    path: '/',
    agent: new HttpAgent(),
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('protocol', 'http:')
  expect(url).toHaveProperty('port', '')
  expect(url).toHaveProperty('href', 'http://127.0.0.1/')
})

test('inherits protocol and port from https.Agent, if set', () => {
  const options: RequestOptions = {
    host: '127.0.0.1',
    path: '/',
    agent: new HttpsAgent({
      port: 3080,
    }),
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('protocol', 'https:')
  expect(url).toHaveProperty('port', '3080')
  expect(url).toHaveProperty('href', 'https://127.0.0.1:3080/')
})

test('resolves protocol to "http" given no explicit protocol and no certificate', () => {
  const options: RequestOptions = {
    host: '127.0.0.1',
    path: '/',
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('protocol', 'http:')
  expect(url).toHaveProperty('port', '')
  expect(url).toHaveProperty('href', 'http://127.0.0.1/')
})

test('resolves protocol to "https" given no explicit protocol, but certificate', () => {
  const options: RequestOptions = {
    host: '127.0.0.1',
    path: '/secure',
    cert: '<!-- SSL certificate -->',
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('protocol', 'https:')
  expect(url).toHaveProperty('port', '')
  expect(url).toHaveProperty('href', 'https://127.0.0.1/secure')
})

test('resolves protocol to "https" given no explicit protocol, but port is 443', () => {
  const options: RequestOptions = {
    host: '127.0.0.1',
    port: 443,
    path: '/resource',
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('port', '')
  expect(url).toHaveProperty('href', 'https://127.0.0.1/resource')
})

test('resolves protocol to "https" given no explicit protocol, but agent port is 443', () => {
  const options: RequestOptions = {
    host: '127.0.0.1',
    agent: new HttpsAgent({
      port: 443,
    }),
    path: '/resource',
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('port', '')
  expect(url).toHaveProperty('href', 'https://127.0.0.1/resource')
})

test('inherits "port" if given', () => {
  const options = {
    protocol: 'http:',
    host: '127.0.0.1',
    port: 4002,
    path: '/',
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('port', '4002')
  expect(url).toHaveProperty('protocol', 'http:')
  expect(url).toHaveProperty('href', 'http://127.0.0.1:4002/')
})

test('inherits "username" and "password"', () => {
  const options: RequestOptions = {
    protocol: 'https:',
    host: '127.0.0.1',
    path: '/user',
    auth: 'admin:abc-123',
  }
  const url = getUrlByRequestOptions(options)

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('username', 'admin')
  expect(url).toHaveProperty('password', 'abc-123')
  expect(url).toHaveProperty('protocol', 'https:')
  expect(url).toHaveProperty('href', 'https://admin:abc-123@127.0.0.1/user')
})

test('resolves hostname to localhost if none provided', () => {
  const url = getUrlByRequestOptions({})

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('protocol', 'http:')
  expect(url).toHaveProperty('href', 'http://localhost/')
})
