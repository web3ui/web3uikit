"use strict";

var xhr = process.browser ? require('xhr') : require('request');

var inherits = require('util').inherits;

var createPayload = require('../util/create-payload.js');

var Subprovider = require('./subprovider.js');

var _require = require('eth-rpc-errors'),
    ethErrors = _require.ethErrors,
    serializeError = _require.serializeError;

module.exports = RpcSource;
inherits(RpcSource, Subprovider);

function RpcSource(opts) {
  var self = this;
  self.rpcUrl = opts.rpcUrl;
}

RpcSource.prototype.handleRequest = function (payload, next, end) {
  var self = this;
  var targetUrl = self.rpcUrl; // overwrite id to conflict with other concurrent users

  var sanitizedPayload = sanitizePayload(payload);
  var newPayload = createPayload(sanitizedPayload);
  xhr({
    uri: targetUrl,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPayload),
    rejectUnauthorized: false,
    timeout: 20000
  }, function (err, res, body) {
    if (err) return end(serializeError(err)); // check for error code

    switch (res.statusCode) {
      case 405:
        return end(ethErrors.rpc.methodNotFound());

      case 504:
        // Gateway timeout
        return function () {
          var msg = "Gateway timeout. The request took too long to process. ";
          msg += "This can happen when querying logs over too wide a block range.";
          var err = new Error(msg);
          return end(serializeError(err));
        }();

      case 429:
        // Too many requests (rate limiting)
        return function () {
          var err = new Error("Too Many Requests");
          return end(serializeError(err));
        }();

      default:
        if (res.statusCode != 200) {
          var msg = 'Unknown Error: ' + res.body;

          var _err = new Error(msg);

          return end(serializeError(_err));
        }

    } // parse response


    var data;

    try {
      data = JSON.parse(body);
    } catch (err) {
      console.error(err.stack);
      return end(serializeError(err));
    }

    if (data.error) return end(data.error);
    end(null, data.result);
  });
}; // drops any non-standard params


function sanitizePayload(payload) {
  return {
    id: payload.id,
    jsonrpc: payload.jsonrpc,
    method: payload.method,
    params: payload.params
  };
}