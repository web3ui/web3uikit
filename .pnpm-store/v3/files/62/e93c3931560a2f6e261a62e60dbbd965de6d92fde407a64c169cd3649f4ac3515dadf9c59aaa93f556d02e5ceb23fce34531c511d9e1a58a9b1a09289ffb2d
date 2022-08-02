"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CoreManager = _interopRequireDefault(require("../CoreManager"));

var _convert = require("../utils/convert");

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

var _MoralisRpcs = require("./MoralisRpcs");

var _ethers = require("ethers");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class MiniRpcProvider {
  constructor(chainId, url) {
    _defineProperty(this, "request", async (method, params) => {
      if (typeof method !== 'string') {
        // eslint-disable-next-line prefer-destructuring
        params = method.params; // eslint-disable-next-line prefer-destructuring

        method = method.method;
      }

      const RESTController = _CoreManager.default.getRESTController();

      try {
        const response = await RESTController.ajax('POST', this.url, JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method,
          params
        }), {
          'Content-Type': 'application/json'
        });

        if (!response) {
          throw new Error('No response');
        }

        if (!response.status || response.status > 400) {
          throw new Error(`Error response [${response.status}] ${response.statusText}`);
        }

        const body = response.response;

        if ('error' in body) {
          var _body$error, _body$error2, _body$error3;

          throw new Error(body === null || body === void 0 ? void 0 : (_body$error = body.error) === null || _body$error === void 0 ? void 0 : _body$error.message, body === null || body === void 0 ? void 0 : (_body$error2 = body.error) === null || _body$error2 === void 0 ? void 0 : _body$error2.code, body === null || body === void 0 ? void 0 : (_body$error3 = body.error) === null || _body$error3 === void 0 ? void 0 : _body$error3.data);
        }

        if (!('result' in body)) {
          throw new Error(`Received unexpected JSON-RPC response`);
        }

        return body.result;
      } catch (error) {
        throw new Error(`Failed to make "${method}" request with networkConnector: "${error.message}"`);
      }
    });

    this.chainId = chainId;
    this.url = url;
    const parsed = new URL(url);
    this.host = parsed.host;
    this.path = parsed.pathname;
  }

}
/**
 * Connect to web3 via a network url
 * Note: this has no knowledge of any user accounts
 */


class NetworkWeb3Connector extends _AbstractWeb3Connector.default {
  constructor({
    urls,
    // `defaultChainId` is deprecated, use `chaiId` instead
    defaultChainId,
    chainId,
    speedyNodeApiKey
  } = {}) {
    var _ref;

    super();

    _defineProperty(this, "type", 'network');

    if (!urls && speedyNodeApiKey) {
      urls = (0, _MoralisRpcs.getMoralisRpcs)(speedyNodeApiKey);
    }

    if (!urls && !speedyNodeApiKey) {
      throw new Error('Cannot connect to rpc: No urls or speedyNodeApiKey provided for NetworkWeb3Connector.');
    }

    this.chainId = (0, _verifyChainId.default)((_ref = chainId !== null && chainId !== void 0 ? chainId : defaultChainId) !== null && _ref !== void 0 ? _ref : Number(Object.keys(urls)[0]));
    this.providers = Object.keys(urls).reduce((accumulator, chainId) => {
      accumulator[Number(chainId)] = new MiniRpcProvider(Number(chainId), urls[Number(chainId)]);
      return accumulator;
    }, {});
  }

  async activate({
    chainId: providedChainId,
    privateKey = null
  } = {}) {
    if (providedChainId) {
      this.chainId = (0, _verifyChainId.default)(providedChainId);
    }

    const provider = this.providers[(0, _convert.fromHexToDecimal)(this.chainId)];

    if (!provider) {
      throw new Error(`No rpc url provided for chainId ${this.chainId}`);
    }

    if (privateKey != null) {
      this.account = await new _ethers.ethers.Wallet(privateKey).getAddress();
    }

    return {
      provider,
      chainId: this.chainId,
      account: this.account
    };
  }

}

var _default = NetworkWeb3Connector;
exports.default = _default;