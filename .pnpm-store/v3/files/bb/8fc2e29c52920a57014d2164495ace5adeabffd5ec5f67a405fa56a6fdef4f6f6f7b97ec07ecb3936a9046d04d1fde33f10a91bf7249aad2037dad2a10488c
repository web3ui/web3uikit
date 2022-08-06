# @metamask/detect-provider

A tiny utility for detecting the MetaMask Ethereum provider, or any provider injected at `window.ethereum`.

It has 0 dependencies and works out of the box in any modern browser, for synchronously and asynchronously injected providers.

## Usage

Keep in mind that the providers detected by this package may or may not support [the Ethereum JavaScript Provider API](https://eips.ethereum.org/EIPS/eip-1193).
Please consult [the MetaMask documentation](https://docs.metamask.io/guide/ethereum-provider.html) to learn how to use our provider.

### Node.js

```javascript
import detectEthereumProvider from '@metamask/detect-provider'

const provider = await detectEthereumProvider()

if (provider) {

  console.log('Ethereum successfully detected!')

  // From now on, this should always be true:
  // provider === window.ethereum

  // Access the decentralized web!

  // Legacy providers may only have ethereum.sendAsync
  const chainId = await provider.request({
    method: 'eth_chainId'
  })
} else {

  // if the provider is not detected, detectEthereumProvider resolves to null
  console.error('Please install MetaMask!', error)
}
```

### HTML

```html
<script src="https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js"></script>
<script type="text/javascript">
  const provider = await detectEthereumProvider()

  if (provider) {
    // handle provider
  } else {
    // handle no provider
  }
</script>
```

### Options

The exported function takes an optional `options` object.
If invalid options are provided, an error will be thrown.
All options have default values.

#### `options.mustBeMetaMask`

Type: `boolean`

Default: `false`

Whether `window.ethereum.isMetaMask === true` is required for the returned Promise to resolve.

#### `options.silent`

Type: `boolean`

Default: `false`

Whether error messages should be logged to the console.
Does not affect errors thrown due to invalid options.

#### `options.timeout`

Type: `number`

Default: `3000`

How many milliseconds to wait for asynchronously injected providers.

## Advanced Topics

### Synchronous and Asynchronous Injection

Providers can be either synchronously or asynchronously injected:

- _Synchronously_ injected providers will be available by the time website code starts executing.
- _Asynchronously_ injected providers may not become available until later in the page lifecycle.

The MetaMask _extension_ provider is synchronously injected, while the MetaMask _mobile_ provider is asynchronously injected.

To notify sites of asynchronous injection, MetaMask dispatches the `ethereum#initialized` event on `window` immediately after the provider has been set as `window.ethereum`.
This package relies on that event to detect asynchronous injection.

### Overwriting or Modifying `window.ethereum`

The detected provider object returned by this package will strictly equal (`===`) `window.ethereum` for the entire page lifecycle, unless `window.ethereum` is overwritten.
In general, consumers should never overwrite `window.ethereum` or attempt to modify the provider object.

If, as a dapp developer, you notice that the provider returned by this package does not strictly equal `window.ethereum`, something is wrong.
This may happen, for example, if the user has multiple wallets installed.
After confirming that your code and dependencies are not modifying or overwriting `window.ethereum`, you should ask the user to ensure that they only have a single provider-injecting wallet enabled at any one time.
