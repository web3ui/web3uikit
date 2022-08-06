export default {
  errors: {
    disconnected: (): string => "Torus: Lost connection to Torus.",
    permanentlyDisconnected: (): string => "Torus: Disconnected from iframe. Page reload required.",
    unsupportedSync: (method: string): string =>
      `Torus: The Torus Ethereum provider does not support synchronous methods like ${method} without a callback parameter.`,
    invalidDuplexStream: (): string => "Must provide a Node.js-style duplex stream.",
    invalidOptions: (maxEventListeners: number): string => `Invalid options. Received: { maxEventListeners: ${maxEventListeners}}`,
    invalidRequestArgs: (): string => `Expected a single, non-array, object argument.`,
    invalidRequestMethod: (): string => `'args.method' must be a non-empty string.`,
    invalidRequestParams: (): string => `'args.params' must be an object or array if provided.`,
    invalidLoggerObject: (): string => `'args.logger' must be an object if provided.`,
    invalidLoggerMethod: (method: string): string => `'args.logger' must include required method '${method}'.`,
  },
  info: {
    connected: (chainId: string): string => `Torus: Connected to chain with ID "${chainId}".`,
  },
  warnings: {},
};
