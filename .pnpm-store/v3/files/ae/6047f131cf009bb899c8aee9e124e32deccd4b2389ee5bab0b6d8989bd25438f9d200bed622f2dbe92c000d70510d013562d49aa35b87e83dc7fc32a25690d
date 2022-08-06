var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _createSigningData = _interopRequireDefault(require("./createSigningData"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var base64 = {
  decode: function (s) {
    return Uint8Array.from(atob(s), function (c) {
      return c.charCodeAt(0);
    });
  },
  encode: function (b) {
    return btoa(String.fromCharCode.apply(String, (0, _toConsumableArray2.default)(new Uint8Array(b))));
  }
};

var MoralisSol = function () {
  function MoralisSol() {
    (0, _classCallCheck2.default)(this, MoralisSol);
  }

  (0, _createClass2.default)(MoralisSol, null, [{
    key: "authenticate",
    value: function (options) {
      var _user$get;

      var phantom, solAddress, accounts, message, data, signature, authData, user;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regenerator.default.awrap(MoralisSol.enable());

            case 2:
              phantom = _context.sent;

              if (phantom) {
                _context.next = 5;
                break;
              }

              throw new Error('Phantom wallet not available');

            case 5:
              solAddress = phantom.publicKey.toString();

              if (solAddress) {
                _context.next = 8;
                break;
              }

              throw new Error('Address not found');

            case 8:
              accounts = [solAddress];
              message = (options == null ? void 0 : options.signingMessage) || MoralisSol.getSigningData();
              _context.next = 12;
              return _regenerator.default.awrap((0, _createSigningData.default)(message));

            case 12:
              data = _context.sent;
              _context.next = 15;
              return _regenerator.default.awrap(MoralisSol.sign(data));

            case 15:
              signature = _context.sent;
              authData = {
                id: solAddress,
                signature: signature,
                data: data
              };
              _context.next = 19;
              return _regenerator.default.awrap(_ParseUser.default.logInWith('moralisSol', {
                authData: authData
              }));

            case 19:
              user = _context.sent;
              _context.next = 22;
              return _regenerator.default.awrap(user.setACL(new _ParseACL.default(user)));

            case 22:
              if (user) {
                _context.next = 24;
                break;
              }

              throw new Error('Could not get user');

            case 24:
              user.set('solAccounts', uniq([].concat(accounts, (_user$get = user.get('solAccounts')) != null ? _user$get : [])));
              user.set('solAddress', solAddress);
              _context.next = 28;
              return _regenerator.default.awrap(user.save());

            case 28:
              return _context.abrupt("return", user);

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "link",
    value: function (account, options) {
      var _user$get2;

      var message, user, solAddress, SolAddress, query, solAddressRecord, data, signature, authData;
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              message = (options == null ? void 0 : options.signingMessage) || MoralisSol.getSigningData();
              _context2.next = 3;
              return _regenerator.default.awrap(_ParseUser.default.current());

            case 3:
              user = _context2.sent;
              solAddress = account;
              SolAddress = _ParseObject.default.extend('_SolAddress');
              query = new _ParseQuery.default(SolAddress);
              _context2.next = 9;
              return _regenerator.default.awrap(query.get(solAddress).catch(function () {
                return null;
              }));

            case 9:
              solAddressRecord = _context2.sent;

              if (solAddressRecord) {
                _context2.next = 20;
                break;
              }

              _context2.next = 13;
              return _regenerator.default.awrap((0, _createSigningData.default)(message));

            case 13:
              data = _context2.sent;
              _context2.next = 16;
              return _regenerator.default.awrap(MoralisSol.sign(solAddress, data));

            case 16:
              signature = _context2.sent;
              authData = {
                id: solAddress,
                signature: signature,
                data: data
              };
              _context2.next = 20;
              return _regenerator.default.awrap(user.linkWith('moralisSol', {
                authData: authData
              }));

            case 20:
              user.set('SolAccounts', uniq([solAddress].concat((_user$get2 = user.get('SolAccounts')) != null ? _user$get2 : [])));
              user.set('solAddress', solAddress);
              _context2.next = 24;
              return _regenerator.default.awrap(user.save());

            case 24:
              return _context2.abrupt("return", user);

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "unlink",
    value: function (account) {
      var _user$get3;

      var accountsLower, SolAddress, query, solAddressRecord, user, accounts, nextAccounts;
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              accountsLower = account;
              SolAddress = _ParseObject.default.extend('_SolAddress');
              query = new _ParseQuery.default(SolAddress);
              _context3.next = 5;
              return _regenerator.default.awrap(query.get(accountsLower));

            case 5:
              solAddressRecord = _context3.sent;
              _context3.next = 8;
              return _regenerator.default.awrap(solAddressRecord.destroy());

            case 8:
              _context3.next = 10;
              return _regenerator.default.awrap(_ParseUser.default.current());

            case 10:
              user = _context3.sent;
              accounts = (_user$get3 = user.get('solAccounts')) != null ? _user$get3 : [];
              nextAccounts = accounts.filter(function (v) {
                return v !== accountsLower;
              });
              user.set('solAccounts', nextAccounts);
              user.set('solAddress', nextAccounts[0]);
              _context3.next = 17;
              return _regenerator.default.awrap(user._unlinkFrom('moralisSol'));

            case 17:
              _context3.next = 19;
              return _regenerator.default.awrap(user.save());

            case 19:
              return _context3.abrupt("return", user);

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "sign",
    value: function (message) {
      var phantom, encodedMessage, signedMessage;
      return _regenerator.default.async(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _regenerator.default.awrap(MoralisSol.enable());

            case 2:
              phantom = _context4.sent;
              encodedMessage = new TextEncoder().encode(message);
              _context4.next = 6;
              return _regenerator.default.awrap(phantom.signMessage(encodedMessage, 'utf8'));

            case 6:
              signedMessage = _context4.sent;
              return _context4.abrupt("return", base64.encode(signedMessage.signature));

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getSigningData",
    value: function () {
      return 'Moralis Authentication';
    }
  }]);
  return MoralisSol;
}();

MoralisSol.enable = function () {
  var provider;
  return _regenerator.default.async(function (_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (!(window && 'solana' in window)) {
            _context5.next = 17;
            break;
          }

          provider = window.solana;

          if (!provider.isPhantom) {
            _context5.next = 17;
            break;
          }

          _context5.prev = 3;
          _context5.next = 6;
          return _regenerator.default.awrap(provider.connect({
            onlyIfTrusted: true
          }));

        case 6:
          _context5.next = 16;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](3);

          if (!(_context5.t0.message === 'User rejected the request.')) {
            _context5.next = 15;
            break;
          }

          _context5.next = 13;
          return _regenerator.default.awrap(provider.connect());

        case 13:
          _context5.next = 16;
          break;

        case 15:
          throw _context5.t0;

        case 16:
          return _context5.abrupt("return", provider);

        case 17:
          throw new Error('Phantom wallet not available');

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[3, 8]], Promise);
};

function toHexString(buffer) {
  return buffer.reduce(function (str, byte) {
    return str + byte.toString(16).padStart(2, '0');
  }, '');
}

function uniq(arr) {
  return arr.filter(function (v, i) {
    return arr.indexOf(v) === i;
  });
}

var _default = MoralisSol;
exports.default = _default;