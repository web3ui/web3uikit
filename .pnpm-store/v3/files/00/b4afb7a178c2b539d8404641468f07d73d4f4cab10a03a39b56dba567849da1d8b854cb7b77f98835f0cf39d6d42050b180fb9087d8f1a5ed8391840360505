const ProviderSubprovider = require('./json-rpc-engine-middleware')
const createFilterMiddleware = require('eth-json-rpc-filters')

class SubscriptionsSubprovider extends ProviderSubprovider {
  constructor() {
    super(({ blockTracker, provider, engine }) => {
      return createFilterMiddleware({ blockTracker, provider })
    })
  }
}

module.exports = SubscriptionsSubprovider
