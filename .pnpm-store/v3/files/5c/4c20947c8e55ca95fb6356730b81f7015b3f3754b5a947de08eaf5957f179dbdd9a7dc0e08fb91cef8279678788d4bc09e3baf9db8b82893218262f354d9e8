const ProviderSubprovider = require('./json-rpc-engine-middleware')
const createFetchMiddleware = require('eth-json-rpc-middleware/fetch')

class FetchSubprovider extends ProviderSubprovider {
  constructor(opts) {
    super(({ blockTracker, provider, engine }) => {
      return createFetchMiddleware(opts)
    })
  }
}

module.exports = FetchSubprovider
