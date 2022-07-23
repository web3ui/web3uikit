"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _createSigningData = _interopRequireDefault(require("./createSigningData"));
/* global window */


var INIT_ERROR = 'Could not initialise ledger app, make sure Elrond app is open';

function getErdJs() {
  return MoralisErd.getErdJs();
}

var MoralisErd = /*#__PURE__*/function () {
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
      var _hwProxy = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _getErdJs, ProxyProvider, proxy;

        return _regenerator.default.wrap(function (_context) {
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
        }, _callee);
      }));

      return function () {
        return _hwProxy.apply(this, arguments);
      };
    }()
  }, {
    key: "hwProvider",
    value: function () {
      return MoralisErd._hw;
    }
  }, {
    key: "enable",
    value: function () {
      var _enable = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _getErdJs2, HWProvider, proxy, hw, success;

        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _getErdJs2 = getErdJs(), HWProvider = _getErdJs2.HWProvider;
                _context2.next = 3;
                return MoralisErd.hwProxy();

              case 3:
                proxy = _context2.sent;
                hw = new HWProvider(proxy);
                _context2.next = 7;
                return hw.init();

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
        }, _callee2);
      }));

      return function () {
        return _enable.apply(this, arguments);
      };
    }()
  }, {
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var hw, address, erdAddress, accounts, message, data, signature, authData, user;
        return _regenerator.default.wrap(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return MoralisErd.enable();

              case 2:
                hw = _context3.sent;
                _context3.next = 5;
                return hw.login();

              case 5:
                address = _context3.sent; // const account = await proxy.getAccount(address);

                erdAddress = address.toLowerCase();
                accounts = [erdAddress];
                message = MoralisErd.getSigningData();
                _context3.next = 11;
                return (0, _createSigningData.default)(message);

              case 11:
                data = _context3.sent;
                _context3.next = 14;
                return MoralisErd.sign(data);

              case 14:
                signature = _context3.sent;
                authData = {
                  id: erdAddress,
                  signature: signature,
                  data: data
                };
                _context3.next = 18;
                return _ParseUser.default.logInWith('moralisErd', {
                  authData: authData
                });

              case 18:
                user = _context3.sent;

                if (user) {
                  _context3.next = 21;
                  break;
                }

                throw new Error('Could not get user');

              case 21:
                _context3.next = 23;
                return user.setACL(new _ParseACL.default(user));

              case 23:
                user.addAllUnique('erdAccounts', accounts);
                user.set('erdAddress', erdAddress);
                _context3.next = 27;
                return user.save();

              case 27:
                return _context3.abrupt("return", user);

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function () {
        return _authenticate.apply(this, arguments);
      };
    }()
  }, {
    key: "link",
    value: function () {
      var _link = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(account, options) {
        var message, user, erdAddress, ErdAddress, query, erdAddressRecord, data, signature, authData;
        return _regenerator.default.wrap(function (_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisErd.getSigningData();
                _context4.next = 3;
                return _ParseUser.default.current();

              case 3:
                user = _context4.sent;
                erdAddress = account.toLowerCase();
                ErdAddress = _ParseObject.default.extend('_ErdAddress');
                query = new _ParseQuery.default(ErdAddress);
                _context4.next = 9;
                return query.get(erdAddress).catch(function () {
                  return null;
                });

              case 9:
                erdAddressRecord = _context4.sent;

                if (erdAddressRecord) {
                  _context4.next = 20;
                  break;
                }

                _context4.next = 13;
                return (0, _createSigningData.default)(message);

              case 13:
                data = _context4.sent;
                _context4.next = 16;
                return MoralisErd.sign(data);

              case 16:
                signature = _context4.sent;
                authData = {
                  id: erdAddress,
                  signature: signature,
                  data: data
                };
                _context4.next = 20;
                return user.linkWith('moralisErd', {
                  authData: authData
                });

              case 20:
                user.addAllUnique('erdAccounts', [erdAddress]);
                user.set('erdAddress', erdAddress);
                _context4.next = 24;
                return user.save();

              case 24:
                return _context4.abrupt("return", user);

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function () {
        return _link.apply(this, arguments);
      };
    }()
  }, {
    key: "unlink",
    value: function () {
      var _unlink = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(account) {
        var _user$get;

        var accountsLower, ErdAddress, query, erdAddressRecord, user, accounts, nextAccounts;
        return _regenerator.default.wrap(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                accountsLower = account.toLowerCase();
                ErdAddress = _ParseObject.default.extend('_ErdAddress');
                query = new _ParseQuery.default(ErdAddress);
                _context5.next = 5;
                return query.get(accountsLower);

              case 5:
                erdAddressRecord = _context5.sent;
                _context5.next = 8;
                return erdAddressRecord.destroy();

              case 8:
                _context5.next = 10;
                return _ParseUser.default.current();

              case 10:
                user = _context5.sent;
                accounts = (_user$get = user.get('erdAccounts')) !== null && _user$get !== void 0 ? _user$get : [];
                nextAccounts = (0, _filter.default)(accounts).call(accounts, function (v) {
                  return v !== accountsLower;
                });
                user.set('erdAccounts', nextAccounts);
                user.set('erdAddress', nextAccounts[0]);
                _context5.next = 17;
                return user._unlinkFrom('moralisErd');

              case 17:
                _context5.next = 19;
                return user.save();

              case 19:
                return _context5.abrupt("return", user);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function () {
        return _unlink.apply(this, arguments);
      };
    }()
  }, {
    key: "sign",
    value: function () {
      var _sign = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(data) {
        return _regenerator.default.wrap(function (_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", data);

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function () {
        return _sign.apply(this, arguments);
      };
    }()
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