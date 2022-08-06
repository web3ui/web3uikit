const createAsyncMiddleware = require('json-rpc-engine/src/createAsyncMiddleware')
const { ethErrors } = require('eth-rpc-errors')
const fetch = require('node-fetch')

const RETRIABLE_ERRORS = [
  // ignore server overload errors
  'Gateway timeout',
  'ETIMEDOUT',
  'ECONNRESET',
  // ignore server sent html error pages
  // or truncated json responses
  'SyntaxError',
]

module.exports = createInfuraMiddleware
module.exports.fetchConfigFromReq = fetchConfigFromReq

function createInfuraMiddleware (opts = {}) {
  const network = opts.network || 'mainnet'
  const maxAttempts = opts.maxAttempts || 5
  const { source, projectId, headers = {} } = opts

  // validate options
  if (!projectId || typeof projectId !== 'string') {
    throw new Error(`Invalid value for 'projectId': "${projectId}"`)
  }
  if (!headers || typeof headers !== 'object') {
    throw new Error(`Invalid value for 'headers': "${headers}"`)
  }
  if (!maxAttempts) {
    throw new Error(`Invalid value for 'maxAttempts': "${maxAttempts}" (${typeof maxAttempts})`)
  }

  return createAsyncMiddleware(async (req, res) => {
    // retry MAX_ATTEMPTS times, if error matches filter
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        // attempt request
        await performFetch(network, projectId, headers, req, res, source)
        // request was successful
        break
      } catch (err) {
        // an error was caught while performing the request
        // if not retriable, resolve with the encountered error
        if (!isRetriableError(err)) {
          // abort with error
          throw err
        }
        // if no more attempts remaining, throw an error
        const remainingAttempts = maxAttempts - attempt
        if (!remainingAttempts) {
          const errMsg = `InfuraProvider - cannot complete request. All retries exhausted.\nOriginal Error:\n${err.toString()}\n\n`
          const retriesExhaustedErr = new Error(errMsg)
          throw retriesExhaustedErr
        }
        // otherwise, ignore error and retry again after timeout
        await timeout(1000)
      }
    }
    // request was handled correctly, end
  })
}

function timeout (length) {
  return new Promise((resolve) => {
    setTimeout(resolve, length)
  })
}

function isRetriableError (err) {
  const errMessage = err.toString()
  return RETRIABLE_ERRORS.some((phrase) => errMessage.includes(phrase))
}

async function performFetch (network, projectId, extraHeaders, req, res, source) {
  const { fetchUrl, fetchParams } = fetchConfigFromReq({ network, projectId, extraHeaders, req, source })
  const response = await fetch(fetchUrl, fetchParams)
  const rawData = await response.text()
  // handle errors
  if (!response.ok) {
    switch (response.status) {
      case 405:
        throw ethErrors.rpc.methodNotFound()

      case 429:
        throw createRatelimitError()

      case 503:
      case 504:
        throw createTimeoutError()

      default:
        throw createInternalError(rawData)
    }
  }

  // special case for now
  if (req.method === 'eth_getBlockByNumber' && rawData === 'Not Found') {
    res.result = null
    return
  }

  // parse JSON
  const data = JSON.parse(rawData)

  // finally return result
  res.result = data.result
  res.error = data.error
}

function fetchConfigFromReq ({ network, projectId, extraHeaders, req, source }) {
  const requestOrigin = req.origin || 'internal'
  const headers = Object.assign({}, extraHeaders, {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  })

  if (source) {
    headers['Infura-Source'] = `${source}/${requestOrigin}`
  }

  return {
    fetchUrl: `https://${network}.infura.io/v3/${projectId}`,
    fetchParams: {
      method: 'POST',
      headers,
      body: JSON.stringify(normalizeReq(req)),
    },
  }
}

// strips out extra keys that could be rejected by strict nodes like parity
function normalizeReq (req) {
  return {
    id: req.id,
    jsonrpc: req.jsonrpc,
    method: req.method,
    params: req.params,
  }
}

function createRatelimitError () {
  const msg = `Request is being rate limited.`
  return createInternalError(msg)
}

function createTimeoutError () {
  let msg = `Gateway timeout. The request took too long to process. `
  msg += `This can happen when querying logs over too wide a block range.`
  return createInternalError(msg)
}

function createInternalError (msg) {
  return ethErrors.rpc.internal(msg)
}
