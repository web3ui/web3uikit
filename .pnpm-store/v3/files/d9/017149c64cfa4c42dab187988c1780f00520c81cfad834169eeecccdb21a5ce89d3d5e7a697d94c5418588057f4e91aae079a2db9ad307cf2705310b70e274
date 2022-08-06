[![Latest version](https://img.shields.io/npm/v/@mswjs/interceptors.svg)](https://www.npmjs.com/package/@mswjs/interceptors)

# `@mswjs/interceptors`

Low-level HTTP/HTTPS/XHR/fetch request interception library.

**Intercepts any requests issued by:**

- `http.get`/`http.request`
- `https.get`/`https.request`
- `XMLHttpRequest`
- `fetch`
- Any third-party libraries that use the modules above (i.e. `request`, `node-fetch`, `supertest`, etc.)

## Motivation

While there are a lot of network communication mocking libraries, they tend to use request interception as an implementation detail, giving you a high-level API that includes request matching, timeouts, retries, and so forth.

This library is a strip-to-bone implementation that provides as little abstraction as possible to execute arbitrary logic upon any request. It's primarily designed as an underlying component for high-level API mocking solutions such as [Mock Service Worker](https://github.com/mswjs/msw).

### How is this library different?

A traditional API mocking implementation in Node.js looks roughly like this:

```js
import http from 'http'

function applyMock() {
  // Store the original request module.
  const originalHttpRequest = http.request

  // Rewrite the request module entirely.
  http.request = function (...args) {
    // Decide whether to handle this request before
    // the actual request happens.
    if (shouldMock(args)) {
      // If so, never create a request, respond to it
      // using the mocked response from this blackbox.
      return coerceToResponse.bind(this, mock)
    }

    // Otherwise, construct the original request
    // and perform it as-is (receives the original response).
    return originalHttpRequest(...args)
  }
}
```

This library deviates from such implementation and uses _class extensions_ instead of module rewrites. Such deviation is necessary because, unlike other solutions that include request matching and can determine whether to mock requests _before_ they actually happen, this library is not opinionated about the mocked/bypassed nature of the requests. Instead, it _intercepts all requests_ and delegates the decision of mocking to the end consumer.

```js
class NodeClientRequest extends ClientRequest {
  async end(...args) {
    // Check if there's a mocked response for this request.
    // You control this in the "resolver" function.
    const mockedResponse = await resolver(isomorphicRequest)

    // If there is a mocked response, use it to respond to this
    // request, finalizing it afterward as if it received that
    // response from the actual server it connected to.
    if (mockedResponse) {
      this.respondWith(mockedResponse)
      this.finish()
      return
    }

    // Otherwise, perform the original "ClientRequest.prototype.end" call.
    return super.end(...args)
  }
}
```

By extending the native modules, this library actually constructs requests as soon as they are constructed by the consumer. This enables all the request input validation and transformations done natively by Node.js—something that traditional solutions simply cannot do (they replace `http.ClientRequest` entirely). The class extension allows to fully utilize Node.js internals instead of polyfilling them, which results in more resilient mocks.

## What this library does

This library extends (or patches, where applicable) the following native modules:

- `http.get`/`http.request`
- `https.get`/`https.request`
- `XMLHttpRequest`
- `fetch`

Once extended, it intercepts and normalizes all requests to the _isomorphic request instances_. The isomorphic request is an abstract representation of the request coming from different sources (`ClientRequest`, `XMLHttpRequest`, `window.Request`, etc.) that allows us to handle such requests in the same, unified manner.

You can respond to an isomorphic request using an _isomorphic response_. In a similar way, the isomorphic response is a representation of the response to use for different requests. Responding to requests differs substantially when using modules like `http` or `XMLHttpRequest`. This library takes the responsibility for coercing isomorphic responses into appropriate responses depending on the request module automatically.

## What this library doesn't do

- Does **not** provide any request matching logic;
- Does **not** decide how to handle requests.

## Getting started

```bash
npm install @mswjs/interceptors
```

## API

### Individual interceptors

There are multiple individual interceptors exported from this library:

- `ClientRequestInterceptor`
- `XMLHttpRequestInterceptor`
- `FetchInterceptor`

All aforementioned interceptors implement the same HTTP request interception contract, meaning that they allow you to handle intercepted requests in the same way, regardless of the request origin (`http`/`XMLHttpRequest`/`fetch`).

To use multiple interceptors at once, consider [`BatchInterceptor`](#BatchInterceptor).

```js
import { ClientRequestInterceptor } from '@mswjs/interceptors/lib/interceptors/ClientRequest'

const interceptor = new ClientRequestInterceptor()
interceptor.on('request', (request) => {
  // Introspect request or mock its response
  // via "request.respondWith()".
})
```

### `BatchInterceptor`

Applies multiple request interceptors at the same time.

```js
import { BatchInterceptor } from '@mswjs/interceptors'
import nodeInterceptors from '@mswjs/interceptors/lib/presets/node'

const interceptor = BatchInterceptor({
  name: 'my-interceptor',
  interceptors: nodeInterceptors,
})

interceptor.on('request', (request) => {
  // Inspect the intercepted "request".
  // Optionally, return a mocked response.
})
```

> Using the `/presets/node` interceptors preset is the recommended way to ensure all requests get intercepted, regardless of their origin.

### `RemoteHttpInterceptor`

Enables request interception in the current process while delegating the response resolution logic to the _parent process_. **Requires the current process to be a child process**. Requires the parent process to establish a resolver by calling the `createRemoteResolver` function.

```js
// child.js
import { RemoteHttpInterceptor } from '@mswjs/interceptors/lib/RemoteHttpInterceptor'
import { ClientRequestInterceptor } from '@mswjs/interceptors/lib/interceptors/ClientRequest'

const interceptor = new RemoteHttpInterceptor({
  // Alternatively, you can use presets.
  interceptors: [new ClientRequestInterceptor()],
})

interceptor.apply()

process.on('disconnect', () => {
  interceptor.dispose()
})
```

You can still listen to and handle any requests in the child process via the `request` event listener. Keep in mind that a single request can only be responded to once.

### `RemoteHttpResolver`

Resolves an intercepted request in the given child `process`. Requires for that child process to enable request interception by calling the `createRemoteInterceptor` function.

```js
// parent.js
import { spawn } from 'child_process'
import { RemoteHttpResolver } from '@mswjs/interceptors/lib/RemoteHttpInterceptor'

const appProcess = spawn('node', ['app.js'], {
  stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
})

const resolver = new RemoteHttpResolver({
  process: appProcess,
})

resolver.on('request', (request) => {
  // Optionally, return a mocked response
  // for a request that occurred in the "appProcess".
})
```

### Methods

#### `apply`

Applies interceptor, enabling the interception of requests in the current process.

```js
interceptor.apply()
```

The same interceptor can be applied multiple times. If that happens, each subsequent interceptor instance will reusing a single running instance instead of applying itself repeatedly. Each interceptor instance should still be disposed individually.

#### `on`

Listens to the interceptor events.

Each interceptor decides what event map to implement. Currently, all exported interceptors implement an HTTP request event map that consists of the following events:

- `request`, signals when a new request happens;
- `response`, signals when a response was sent.

```js
interceptor.on('request', (request) => {
  console.log('[%s] %s', request.method, request.url.toString())
})

interceptor.on('response', (request, response) => {
  console.log(
    'Received response to [%s] %s:',
    request.method,
    request.url.href,
    response
  )
})
```

#### `dispose`

Disposes of the applied interceptor. This cleans up all the side-effects introduced by the interceptor (i.e. restores augmented modules).

```js
interceptor.dispose()
```

## Special mention

The following libraries were used as an inspiration to write this low-level API:

- [`node`](https://github.com/nodejs/node)
- [`nock`](https://github.com/nock/nock)
- [`mock-xmlhttprequest`](https://github.com/berniegp/mock-xmlhttprequest)
