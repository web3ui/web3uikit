interface EthereumProvider {
    isMetaMask?: boolean;
}
declare global {
    interface Window {
        ethereum?: EthereumProvider;
    }
}
export = detectEthereumProvider;
/**
 * Returns a Promise that resolves to the value of window.ethereum if it is
 * set within the given timeout, or null.
 * The Promise will not reject, but an error will be thrown if invalid options
 * are provided.
 *
 * @param options - Options bag.
 * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
 * Default: false
 * @param options.silent - Whether to silence console errors. Does not affect
 * thrown errors. Default: false
 * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
 * be dispatched. Default: 3000
 * @returns A Promise that resolves with the Provider if it is detected within
 * given timeout, otherwise null.
 */
declare function detectEthereumProvider({ mustBeMetaMask, silent, timeout, }?: {
    mustBeMetaMask?: boolean | undefined;
    silent?: boolean | undefined;
    timeout?: number | undefined;
}): Promise<unknown>;
