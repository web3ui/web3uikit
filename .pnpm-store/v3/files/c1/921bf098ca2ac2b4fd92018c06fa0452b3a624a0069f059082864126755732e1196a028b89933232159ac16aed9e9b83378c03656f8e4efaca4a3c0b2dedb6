# Torus.js

[![npm version](https://badge.fury.io/js/%40toruslabs%2Ftorus.js.svg)](https://badge.fury.io/js/%40toruslabs%2Ftorus.js)
![npm](https://img.shields.io/npm/dw/@toruslabs/torus.js)

## Introduction

A JS utility library (w/ typescript bindings!) to make calls to the Torus network

The Torus network assumes that n/4 of nodes may be malicious, and n/2 + 1 of the nodes are required
for key reconstruction. Given these threshold assumptions, all API calls to the Torus nodes need to be checked
for consistency while still allowing for early exits in optimistic scenarios where the first n/2 + 1 responses
are from honest nodes.

Also, in order to prevent front-running by nodes, a commit-reveal process is also necessary for share retrieval.

This library handles these checks and allows you to query the Torus network easily through these APIs:

- retrieveShares
- getPublicAddress

## Features

- Typescript compatible. Includes Type definitions
- All API's return `Promises`

## Installation

### Bundling

This module is distributed in 5 formats

- `esm` build `dist/torusUtils.esm.js` in es6 format
- `commonjs` build `dist/torusUtils.cjs.js` in es5 format
- `commonjs` build `dist/torusUtils-bundled.cjs.js` in es5 format with problematic packages bundled (benfits non-webpack users)
- `umd` build `dist/torusUtils.umd.min.js` in es5 format without polyfilling corejs minified
- `nodejs` build `dist/torusUtils-node.js` in es5 format

By default, the appropriate format is used for your specified usecase
You can use a different format (if you know what you're doing eg. node) by referencing the correct file

The cjs build is not polyfilled with core-js.
It is upto the user to polyfill based on the browserlist they target

### Directly in Browser

CDN's serve the non-core-js polyfilled version by default. You can use a different

jsdeliver

```js
<script src="https://cdn.jsdelivr.net/npm/@toruslabs/torus.js"></script>
```

unpkg

```js
<script src="https://unpkg.com/@toruslabs/torus.js"></script>
```

### Tips for NUXT

This is a plugin that works [only on the client side](https://nuxtjs.org/guide/plugins/#client-side-only). So please register it as a ssr-free plugin.

## Usage

Add [`@toruslabs/torus.js`](https://www.npmjs.com/package/@toruslabs/torus.js) to your project:

Needs to be used in conjuction with [`@toruslabs/fetch-node-details`](https://www.npmjs.com/package/@toruslabs/fetch-node-details)

```ts
import FetchNodeDetails from '@toruslabs/fetch-node-details'
import TorusUtils from '@toruslabs/torus.js'

const fetchNodeDetails = new FetchNodeDetails()
const torus = new TorusUtils({ network: 'mainnet' })
const verifier = 'google'
const verifierId = 'hello@tor.us'
const { torusNodeEndpoints, torusNodePub, torusIndexes } = await fetchNodeDetails.getNodeDetails()
const publicAddress = await torus.getPublicAddress(torusNodeEndpoints, torusNodePub, { verifier, verifierId })

const idToken = 'YOUR_ID_TOKEN'
const keyData = await torus.retrieveShares(torusNodeEndpoints, torusIndexes, verifier, { verifier_id: verifierId }, idToken)
```

```js
const FetchNodeDetails = require('@toruslabs/fetch-node-details').default
const TorusUtils = require('@toruslabs/torus.js').default

const fetchNodeDetails = new FetchNodeDetails()
const torus = new TorusUtils({ network: 'mainnet' })
const verifier = 'google' // any verifier
const verifierId = 'hello@tor.us' // any verifier id
fetchNodeDetails
  .getNodeDetails()
  .then(({ torusNodeEndpoints, torusNodePub }) => torus.getPublicAddress(torusNodeEndpoints, torusNodePub, { verifier, verifierId }))
  .then((publicAddress) => console.log(publicAddress))

const idToken = 'YOUR_ID_TOKEN'
fetchNodeDetails
  .getNodeDetails()
  .then(({ torusNodeEndpoints, torusIndexes }) =>
    torus.retrieveShares(torusNodeEndpoints, torusIndexes, verifier, { verifier_id: verifierId }, idToken)
  )
  .then((keyData) => console.log(keyData))
```

```js
// For Node.js
const FetchNodeDetails = require('@toruslabs/fetch-node-details/dist/fetchNodeDetails-node.js').default
const TorusUtils = require('@toruslabs/torus.js/dist/torusUtils-node.js').default

const fetchNodeDetails = new FetchNodeDetails()
const torus = new TorusUtils({ network: 'mainnet' })
const verifier = 'google' // any verifier
const verifierId = 'hello@tor.us' // any verifier id
fetchNodeDetails
  .getNodeDetails()
  .then(({ torusNodeEndpoints, torusNodePub }) => torus.getPublicAddress(torusNodeEndpoints, torusNodePub, { verifier, verifierId }))
  .then((publicAddress) => console.log(publicAddress))
```

## Requirements

- This package requires a peer dependency of `@babel/runtime`
- Node 14+
