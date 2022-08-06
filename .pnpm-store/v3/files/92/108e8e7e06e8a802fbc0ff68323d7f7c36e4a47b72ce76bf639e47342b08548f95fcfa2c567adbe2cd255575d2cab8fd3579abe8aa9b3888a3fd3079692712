var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _createSigningData = _interopRequireDefault(require("./createSigningData"));

var INIT_ERROR = 'Could not initialise ledger app, make sure Elrond app is open';

function getErdJs() {
  return MoralisErd.getErdJs();
}

var MoralisErd = function () {
  function MoralisErd() {
    (0, _classCallCheck2.default)(this, MoralisErd);
  }

  (0, _createClass2.default)(MoralisErd, null, [{
    key: "getErdJs",
    value: function () {
      if (typeof window !== 'undefined' && window.erdjs) return window.erdjs;
      throw new Error('Please add erdjs scripts');
    }
  }, {
    key: "gatewayAddress",
    value: function () {
      return 'https://gateway.elrond.com';
    }
  }, {
    key: "hwProxy",
    value: function () {
      var _getErdJs, ProxyProvider, proxy;

      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!MoralisErd._proxy) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", MoralisErd._proxy);

            case 2:
              _getErdJs = getErdJs(), ProxyProvider = _getErdJs.ProxyProvider;
              proxy = new ProxyProvider(MoralisErd.gatewayAddress());
              MoralisErd._proxy = proxy;
              return _context.abrupt("return", MoralisErd._proxy);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "hwProvider",
    value: function () {
      return MoralisErd._hw;
    }
  }, {
    key: "enable",
    value: function () {
      var _getErdJs2, HWProvider, proxy, hw, success;

      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getErdJs2 = getErdJs(), HWProvider = _getErdJs2.HWProvider;
              _context2.next = 3;
              return _regenerator.default.awrap(MoralisErd.hwProxy());

            case 3:
              proxy = _context2.sent;
              hw = new HWProvider(proxy);
              _context2.next = 7;
              return _regenerator.default.awrap(hw.init());

            case 7:
              success = _context2.sent;

              if (success) {
                _context2.next = 10;
                break;
              }

              throw new Error(INIT_ERROR);

            case 10:
              MoralisErd._hw = hw;
              return _context2.abrupt("return", hw);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "authenticate",
    value: function () {
      var hw, address, erdAddress, accounts, message, data, signature, authData, user;
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _regenerator.default.awrap(MoralisErd.enable());

            case 2:
              hw = _context3.sent;
              _context3.next = 5;
              return _regenerator.default.awrap(hw.login());

            case 5:
              address = _context3.sent;
              erdAddress = address.toLowerCase();
              accounts = [erdAddress];
              message = MoralisErd.getSigningData();
              _context3.next = 11;
              return _regenerator.default.awrap((0, _createSigningData.default)(message));

            case 11:
              data = _context3.sent;
              _context3.next = 14;
              return _regenerator.default.awrap(MoralisErd.sign(data));

            case 14:
              signature = _context3.sent;
              authData = {
                id: erdAddress,
                signature: signature,
                data: data
              };
              _context3.next = 18;
              return _regenerator.default.awrap(_ParseUser.default.logInWith('moralisErd', {
                authData: authData
              }));

            case 18:
              user = _context3.sent;

              if (user) {
                _context3.next = 21;
                break;
              }

              throw new Error('Could not get user');

            case 21:
              _context3.next = 23;
              return _regenerator.default.awrap(user.setACL(new _ParseACL.default(user)));

            case 23:
              user.addAllUnique('erdAccounts', accounts);
              user.set('erdAddress', erdAddress);
              _context3.next = 27;
              return _regenerator.default.awrap(user.save());

            case 27:
              return _context3.abrupt("return", user);

            case 28:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "link",
    value: function (account, options) {
      var message, user, erdAddress, ErdAddress, query, erdAddressRecord, data, signature, authData;
      return _regenerator.default.async(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              message = (options == null ? void 0 : options.signingMessage) || MoralisErd.getSigningData();
              _context4.next = 3;
              return _regenerator.default.awrap(_ParseUser.default.current());

            case 3:
              user = _context4.sent;
              erdAddress = account.toLowerCase();
              ErdAddress = _ParseObject.default.extend('_ErdAddress');
              query = new _ParseQuery.default(ErdAddress);
              _context4.next = 9;
              return _regenerator.default.awrap(query.get(erdAddress).catch(function () {
                return null;
              }));

            case 9:
              erdAddressRecord = _context4.sent;

              if (erdAddressRecord) {
                _context4.next = 20;
                break;
              }

              _context4.next = 13;
              return _regenerator.default.awrap((0, _createSigningData.default)(message));

            case 13:
              data = _context4.sent;
              _context4.next = 16;
              return _regenerator.default.awrap(MoralisErd.sign(data));

            case 16:
              signature = _context4.sent;
              authData = {
                id: erdAddress,
                signature: signature,
                data: data
              };
              _context4.next = 20;
              return _regenerator.default.awrap(user.linkWith('moralisErd', {
                authData: authData
              }));

            case 20:
              user.addAllUnique('erdAccounts', [erdAddress]);
              user.set('erdAddress', erdAddress);
              _context4.next = 24;
              return _regenerator.default.awrap(user.save());

            case 24:
              return _context4.abrupt("return", user);

            case 25:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "unlink",
    value: function (account) {
      var _user$get;

      var accountsLower, ErdAddress, query, erdAddressRecord, user, accounts, nextAccounts;
      return _regenerator.default.async(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              accountsLower = account.toLowerCase();
              ErdAddress = _ParseObject.default.extend('_ErdAddress');
              query = new _ParseQuery.default(ErdAddress);
              _context5.next = 5;
              return _regenerator.default.awrap(query.get(accountsLower));

            case 5:
              erdAddressRecord = _context5.sent;
              _context5.next = 8;
              return _regenerator.default.awrap(erdAddressRecord.destroy());

            case 8:
              _context5.next = 10;
              return _regenerator.default.awrap(_ParseUser.default.current());

            case 10:
              user = _context5.sent;
              accounts = (_user$get = user.get('erdAccounts')) != null ? _user$get : [];
              nextAccounts = accounts.filter(function (v) {
                return v !== accountsLower;
              });
              user.set('erdAccounts', nextAccounts);
              user.set('erdAddress', nextAccounts[0]);
              _context5.next = 17;
              return _regenerator.default.awrap(user._unlinkFrom('moralisErd'));

            case 17:
              _context5.next = 19;
              return _regenerator.default.awrap(user.save());

            case 19:
              return _context5.abrupt("return", user);

            case 20:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "sign",
    value: function (data) {
      return _regenerator.default.async(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", data);

            case 1:
            case "end":
              return _context6.stop();
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
  return MoralisErd;
}();

var _default = MoralisErd;
exports.default = _default;