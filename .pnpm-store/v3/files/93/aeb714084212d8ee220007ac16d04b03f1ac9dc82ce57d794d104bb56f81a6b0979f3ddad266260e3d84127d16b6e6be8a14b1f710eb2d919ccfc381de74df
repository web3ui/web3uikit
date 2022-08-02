# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [16.0.1] - 2020-09-23

- Fix broken publish files ([#356](https://github.com/MetaMask/web3-provider-engine/pull/356))

## [16.0.0] - 2020-09-22

### Changed

- **Breaking:** Use Infura V3 API ([#352](https://github.com/MetaMask/web3-provider-engine/pull/352))
  - The previously used Infura API is deprecated and will be (or is already) removed.
  - Using the Infura Provider now requires an API key.
  See [`eth-json-rpc-infura`](https://npmjs.com/package/eth-json-rpc-infura) and [infura.io](https://infura.io) for details.
- Update various dependencies
  - eth-json-rpc-middleware@6.0.0 ([#350](https://github.com/MetaMask/web3-provider-engine/pull/350))
  - eth-json-rpc-filters@4.2.1 ([#351](https://github.com/MetaMask/web3-provider-engine/pull/351))
  - eth-json-rpc-infura@5.1.0 ([#352](https://github.com/MetaMask/web3-provider-engine/pull/352))
  - eth-rpc-errors@3.0.0 ([#353](https://github.com/MetaMask/web3-provider-engine/pull/353))
- Specify publish files

## [15.0.0]

### Changed

- uses eth-block-tracker@4, but still provides block body on ('block', 'latest', and 'rawBlock'). Other events ('sync') provide block number hex string instead of block body.
- SubscriptionsSubprovider automatically forwards events to provider
- replacing subprovider implementations with those in [`eth-json-rpc-engine`](https://github.com/MetaMask/eth-json-rpc-middleware)
- browserify: moved to `babelify@10` + `@babel/core@7`

## [14.0.0]

### Changed

- default dataProvider for zero is Infura mainnet REST api
- websocket support
- subscriptions support
- remove solc subprovider
- removed `dist` from git (but published in npm module)
- es5 builds in `dist/es5`
- zero + ProviderEngine bundles are es5
- web3 subprovider renamed to provider subprovider
- error if provider subprovider is missing a proper provider
- removed need to supply getAccounts hook
- fixed `hooked-wallet-ethtx` message signing
- fixed `hooked-wallet` default txParams

## [13.0.0]

### Changed

- txs included in blocks via [`eth-block-tracker`](https://github.com/kumavis/eth-block-tracker)@2.0.0

## [12.0.0]

### Changed

- moved block polling to [`eth-block-tracker`](https://github.com/kumavis/eth-block-tracker).

## [11.0.0]

### Changed

- zero.js - replaced http subprovider with fetch provider (includes polyfill for node).

## [10.0.0]

### Changed

- renamed HookedWalletSubprovider `personalRecoverSigner` to `recoverPersonalSignature`

## [9.0.0]

### Changed

- `pollingShouldUnref` option now defaults to false

[Unreleased]:https://github.com/MetaMask/web3-provider-engine/compare/v16.0.1...HEAD
[16.0.1]:https://github.com/MetaMask/web3-provider-engine/compare/v16.0.0...v16.0.1
