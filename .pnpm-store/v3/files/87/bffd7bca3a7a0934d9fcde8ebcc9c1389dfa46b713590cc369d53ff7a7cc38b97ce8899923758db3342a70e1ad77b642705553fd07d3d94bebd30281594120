var filteredWarnings = ["Module not found: Can't resolve '@walletconnect/web3-provider'", "Module not found: Can't resolve 'magic-sdk'", "Module not found: Can't resolve '@web3auth/web3auth'"];

var filterConsole = function () {
  var preservedConsoleWarn = console.warn;

  console.warn = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var value = args ? args[0] : null;

    if (!value || typeof value !== 'string') {
      return preservedConsoleWarn.apply(console, args);
    }

    value = value.replace('’', "'").replace('‘', "'").replace('’', "'");

    if (filteredWarnings.filter(function (filter) {
      return value.includes(filter);
    }).length >= 1) {
      return;
    }

    return preservedConsoleWarn.apply(console, args);
  };
};

module.exports = {
  filterConsole: filterConsole
};