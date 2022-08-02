# Torus Embed — New Frictionless login for Dapps

[![npm version](https://badge.fury.io/js/%40toruslabs%2Fsolana-embed.svg)](https://badge.fury.io/js/%40toruslabs%2Fsolana-embed)
![npm](https://img.shields.io/npm/dw/@toruslabs/solana-embed)

## Introduction

This module generates the javascript to include in a DApp via a script tag.
It creates an iframe that loads the Torus page and sets up communication streams between
the iframe and the DApp javascript context.

Please refer to docs for API Reference available [here](https://docs.tor.us/wallet/api-reference/installation) or [change log](https://docs.tor.us/torus-wallet/changelog).

## Features

- Typescript compatible. Includes Type definitions

Please refer to docs for API Reference available [here](https://docs.tor.us/wallet/api-reference/installation) or [change log](https://docs.tor.us/torus-wallet/changelog).

## Installation

### Bundling

This module is distributed in 3 formats

- `esm` build `dist/torus.esm.js` is es6 format
- `commonjs` build `dist/torus.cjs.js` in es5 format
- `umd` build `dist/torus.umd.min.js` in es5 format without polyfilling corejs minified

By default, the appropriate format is used for your specified usecase
You can use a different format (if you know what you're doing) by referencing the correct file

The cjs build is not polyfilled with core-js.
It is upto the user to polyfill based on the browserlist they target

### Directly in Browser

CDN's serve the non-core-js polyfilled version by default. You can use a different

jsdeliver

```js
<script src="https://cdn.jsdelivr.net/npm/@toruslabs/solana-embed"></script>
```

unpkg

```js
<script src="https://unpkg.com/@toruslabs/solana-embed"></script>
```

### Tips for NUXT

This is a plugin that works [only on the client side](https://nuxtjs.org/guide/plugins/#client-side-only). So please register it as a ssr-free plugin.

## Usage

Please refer to the [examples](examples) folder for details on usage using dynamic import.

## Rehydration

Torus uses `window.sessionStorage` to store user details.

So, if the user reloads the page, all his data would be rehydrated and the user doesn't need to log in.

The samples provided in the [examples](examples) folder illustrate the above case.

## Build

Ensure you have a `Node.JS` development environment setup:

```
git clone https://github.com/torusresearch/solana-embed.git
cd solana-embed
npm install
npm run build
```

To run tests:

```
npm run test:e2e:headful
npm run test:build-embed
```

entry-point: `index.js`

## Requirements

- This package requires a peer dependency of `@babel/runtime`
- Node 10+

## License

`solana-embed` is [MIT Licensed](LICENSE)
