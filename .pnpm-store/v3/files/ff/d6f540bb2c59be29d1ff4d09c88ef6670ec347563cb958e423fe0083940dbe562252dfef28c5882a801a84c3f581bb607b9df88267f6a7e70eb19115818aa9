# Metadata-helpers

[![npm version](https://badge.fury.io/js/%40toruslabs%2Fmetadata-helpers.svg)](https://badge.fury.io/js/%40toruslabs%2Fmetadata-helpers)
![npm](https://img.shields.io/npm/dw/@toruslabs/metadata-helpers)

## Introduction

This repo allow you to get and set metadata

## Features

- Typescript compatible. Includes Type definitions
- All API's return `Promises`

## Installation

### Bundling

This module is distributed in 3 formats

- `commonjs` build `dist/metadataHelpers.cjs.js` in es5 format
- `commonjs` build `dist/metadataHelpers-bundled.cjs.js` in es5 format with problematic packages bundled (benfits non-webpack users)
- `umd` build `dist/metadataHelpers.umd.min.js` in es5 format without polyfilling corejs minified
- `umd` build `dist/metadataHelpers.polyfill.umd.min.js` in es5 format with polyfilling corejs minified

By default, the appropriate format is used for your specified usecase
You can use a different format (if you know what you're doing) by referencing the correct file

The cjs build is not polyfilled with core-js.
It is upto the user to polyfill based on the browserlist they target

### Directly in Browser

CDN's serve the non-core-js polyfilled version by default. You can use a different

jsdeliver

```js
<script src="https://cdn.jsdelivr.net/npm/@toruslabs/metadata-helpers"></script>
```

unpkg

```js
<script src="https://unpkg.com/@toruslabs/metadata-helpers"></script>
```

### Tips for NUXT

This is a plugin that works [only on the client side](https://nuxtjs.org/guide/plugins/#client-side-only). So please register it as a ssr-free plugin.

## Usage

Add [`@toruslabs/metadata-helpers`](https://www.npmjs.com/package/@toruslabs/metadata-helpers) to your project:

To allow your web app to retrieve keys:

Install the package
   `npm i @toruslabs/metadata-helpers`
   or
   `yarn add @toruslabs/metadata-helpers`

## Requirements

- This package requires a peer dependency of `@babel/runtime`
- Node 10+

