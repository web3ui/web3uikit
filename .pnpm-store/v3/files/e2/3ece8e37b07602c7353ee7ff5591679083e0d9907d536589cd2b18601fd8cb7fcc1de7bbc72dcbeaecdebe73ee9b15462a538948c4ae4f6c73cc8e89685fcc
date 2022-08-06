"use strict";
/* eslint-disable no-console */

/* global window */

const filteredWarnings = [// Optional dependencies, where we handle the dependency check on run-time
`Module not found: Can't resolve '@walletconnect/web3-provider'`, `Module not found: Can't resolve 'magic-sdk'`, `Module not found: Can't resolve '@web3auth/web3auth'`];
/**
 * Filters console messages that include text from the blacklist
 */

const filterConsole = () => {
  // Filter console.warn
  const preservedConsoleWarn = console.warn;

  console.warn = (...args) => {
    let value = args ? args[0] : null; // For the current use-cases we only care about the first argument being string

    if (!value || typeof value !== 'string') {
      return preservedConsoleWarn.apply(console, args);
    } // Raplace all types of single quotes to one format


    value = value.replace('’', "'").replace('‘', "'").replace('’', "'"); // Filter out blacklisted strings

    if (filteredWarnings.filter(filter => value.includes(filter)).length >= 1) {
      return;
    } // Otherwise return default function


    return preservedConsoleWarn.apply(console, args);
  };
};

module.exports = {
  filterConsole
};