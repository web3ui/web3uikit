"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
/* eslint-disable no-console */

/* global window */


var filteredWarnings = [// Optional dependencies, where we handle the dependency check on run-time
"Module not found: Can't resolve '@walletconnect/web3-provider'", "Module not found: Can't resolve 'magic-sdk'", "Module not found: Can't resolve '@web3auth/web3auth'"];
/**
 * Filters console messages that include text from the blacklist
 */

var filterConsole = function () {
  // Filter console.warn
  var preservedConsoleWarn = console.warn;

  console.warn = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var value = args ? args[0] : null; // For the current use-cases we only care about the first argument being string

    if (!value || typeof value !== 'string') {
      return preservedConsoleWarn.apply(console, args);
    } // Raplace all types of single quotes to one format


    value = value.replace('’', "'").replace('‘', "'").replace('’', "'"); // Filter out blacklisted strings

    if ((0, _filter.default)(filteredWarnings).call(filteredWarnings, function (filter) {
      return (0, _includes.default)(value).call(value, filter);
    }).length >= 1) {
      return;
    } // Otherwise return default function


    return preservedConsoleWarn.apply(console, args);
  };
};

module.exports = {
  filterConsole: filterConsole
};