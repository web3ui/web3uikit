"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.EthereumEvents = exports.ConnectorEvents = void 0;

var _freeze = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/freeze")); // Events being emitted by an eip-1193 provider
// See https://eips.ethereum.org/EIPS/eip-1193#events


var EthereumEvents = (0, _freeze.default)({
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  CHAIN_CHANGED: 'chainChanged',
  ACCOUNTS_CHANGED: 'accountsChanged'
}); // Events emitted by the connectors,
// The InternalWeb3Provider of Moralis will listen to these

exports.EthereumEvents = EthereumEvents;
var ConnectorEvents = (0, _freeze.default)({
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  CHAIN_CHANGED: 'chainChanged',
  ACCOUNT_CHANGED: 'accountChanged'
});
exports.ConnectorEvents = ConnectorEvents;