# Fetch-Node-Details

[![npm version](https://badge.fury.io/js/%40toruslabs%2Ffetch-node-details.svg)](https://badge.fury.io/js/%40toruslabs%2Ffetch-node-details)
![npm](https://img.shields.io/npm/dw/@toruslabs/fetch-node-details)

## Introduction

Use this package to fetch details about Torus nodes, from a specified Smart Contract that holds details about the list of nodes & network.
This will dynamically get updates about the node list, allowing the front end to continue querying the different set of nodes after migrations.

This utility library serves to find the endpoints and public keys associated
with the current set of qualified nodes, which are used for key lookups, key
assignments, and key retrievals by other dependent libraries.

## Features

- Multi network support
- Allows passing in custom provider + contract address for querying node info
- Caching
- Typescript compatible. Includes Type definitions
- All API's return `Promises`

## Installation

### Bundling

This module is distributed in 5 formats

- `esm` build `dist/fetchNodeDetails.esm.js` in es6 format
- `commonjs` build `dist/fetchNodeDetails.cjs.js` in es5 format
- `commonjs` build `dist/fetchNodeDetails-bundled.cjs.js` in es5 format with problematic packages bundled (benefits non-webpack users)
- `umd` build `dist/fetchNodeDetails.umd.min.js` in es5 format without polyfilling corejs minified
- `node` build `dist/fetchNodeDetails-node.js` in es5 format

By default, the appropriate format is used for your specified usecase
You can use a different format (if you know what you're doing eg. node) by referencing the correct file

The cjs build is not polyfilled with core-js.
It is upto the user to polyfill based on the browserlist they target

### Directly in Browser

CDN's serve the non-core-js polyfilled version by default. You can use a different

jsdeliver

```js
<script src="https://cdn.jsdelivr.net/npm/@toruslabs/fetch-node-details"></script>
```

unpkg

```js
<script src="https://unpkg.com/@toruslabs/fetch-node-details"></script>
```

## Usage

Add [`@toruslabs/fetch-node-details`](https://www.npmjs.com/package/@toruslabs/fetch-node-details) to your project:

```ts
import FetchNodeDetails from "@toruslabs/fetch-node-details";

const fetchNodeDetails = new FetchNodeDetails();
const nodeInfo = await fetchNodeDetails.getNodeDetails();
```

```js
const FetchNodeDetails = require("@toruslabs/fetch-node-details").default;

const fetchNodeDetails = new FetchNodeDetails();
fetchNodeDetails.getNodeDetails().then((nodeInfo) => console.log(nodeInfo));
```

```js
// For Node.js
const FetchNodeDetails = require("@toruslabs/fetch-node-details/dist/fetchNodeDetails-node.js").default;

const fetchNodeDetails = new FetchNodeDetails();
fetchNodeDetails.getNodeDetails().then((nodeInfo) => console.log(nodeInfo));
```

## Requirements

- This package requires a peer dependency of `@babel/runtime`
- Node 14+

## Local Development

Requires a .env file with the parameters in .env.development
