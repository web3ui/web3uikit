const ProviderSubprovider = require('./json-rpc-engine-middleware')
const createBlockCacheMiddleware = require('eth-json-rpc-middleware/block-cache')

class BlockCacheSubprovider extends ProviderSubprovider {
  constructor(opts) {
    super(({ blockTracker }) => createBlockCacheMiddleware(Object.assign({ blockTracker }, opts)))
  }
}

module.exports = BlockCacheSubprovider
