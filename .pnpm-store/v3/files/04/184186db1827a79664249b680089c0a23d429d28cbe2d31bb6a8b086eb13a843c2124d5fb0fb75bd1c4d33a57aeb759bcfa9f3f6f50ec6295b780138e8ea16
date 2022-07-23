"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _padStart = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/pad-start"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _createSigningData = _interopRequireDefault(require("./createSigningData"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));
/* global window */

/* global solanaWeb3 */


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

var MoralisSol = /*#__PURE__*/function () {
  function MoralisSol() {
    (0, _classCallCheck2.default)(this, MoralisSol);
  }

  (0, _createClass2.default)(MoralisSol, null, [{
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {
        var _context, _user$get;

        var phantom, solAddress, accounts, message, data, signature, authData, user;
        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return MoralisSol.enable();

              case 2:
                phantom = _context2.sent;

                if (phantom) {
                  _context2.next = 5;
                  break;
                }

                throw new Error('Phantom wallet not available');

              case 5:
                solAddress = phantom.publicKey.toString();

                if (solAddress) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('Address not found');

              case 8:
                accounts = [solAddress];
                message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisSol.getSigningData();
                _context2.next = 12;
                return (0, _createSigningData.default)(message);

              case 12:
                data = _context2.sent;
                _context2.next = 15;
                return MoralisSol.sign(data);

              case 15:
                signature = _context2.sent;
                authData = {
                  id: solAddress,
                  signature: signature,
                  data: data
                };
                _context2.next = 19;
                return _ParseUser.default.logInWith('moralisSol', {
                  authData: authData
                });

              case 19:
                user = _context2.sent;
                _context2.next = 22;
                return user.setACL(new _ParseACL.default(user));

              case 22:
                if (user) {
                  _context2.next = 24;
                  break;
                }

                throw new Error('Could not get user');

              case 24:
                user.set('solAccounts', uniq((0, _concat.default)(_context = []).call(_context, accounts, (_user$get = user.get('solAccounts')) !== null && _user$get !== void 0 ? _user$get : [])));
                user.set('solAddress', solAddress);
                _context2.next = 28;
                return user.save();

              case 28:
                return _context2.abrupt("return", user);

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      return function () {
        return _authenticate.apply(this, arguments);
      };
    }()
  }, {
    key: "link",
    value: function () {
      var _link = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(account, options) {
        var _context3, _user$get2;

        var message, user, solAddress, SolAddress, query, solAddressRecord, data, signature, authData;
        return _regenerator.default.wrap(function (_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisSol.getSigningData();
                _context4.next = 3;
                return _ParseUser.default.current();

              case 3:
                user = _context4.sent;
                solAddress = account;
                SolAddress = _ParseObject.default.extend('_SolAddress');
                query = new _ParseQuery.default(SolAddress);
                _context4.next = 9;
                return query.get(solAddress).catch(function () {
                  return null;
                });

              case 9:
                solAddressRecord = _context4.sent;

                if (solAddressRecord) {
                  _context4.next = 20;
                  break;
                }

                _context4.next = 13;
                return (0, _createSigningData.default)(message);

              case 13:
                data = _context4.sent;
                _context4.next = 16;
                return MoralisSol.sign(solAddress, data);

              case 16:
                signature = _context4.sent;
                authData = {
                  id: solAddress,
                  signature: signature,
                  data: data
                };
                _context4.next = 20;
                return user.linkWith('moralisSol', {
                  authData: authData
                });

              case 20:
                user.set('SolAccounts', uniq((0, _concat.default)(_context3 = [solAddress]).call(_context3, (_user$get2 = user.get('SolAccounts')) !== null && _user$get2 !== void 0 ? _user$get2 : [])));
                user.set('solAddress', solAddress);
                _context4.next = 24;
                return user.save();

              case 24:
                return _context4.abrupt("return", user);

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _link.apply(this, arguments);
      };
    }()
  }, {
    key: "unlink",
    value: function () {
      var _unlink = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(account) {
        var _user$get3;

        var accountsLower, SolAddress, query, solAddressRecord, user, accounts, nextAccounts;
        return _regenerator.default.wrap(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                accountsLower = account;
                SolAddress = _ParseObject.default.extend('_SolAddress');
                query = new _ParseQuery.default(SolAddress);
                _context5.next = 5;
                return query.get(accountsLower);

              case 5:
                solAddressRecord = _context5.sent;
                _context5.next = 8;
                return solAddressRecord.destroy();

              case 8:
                _context5.next = 10;
                return _ParseUser.default.current();

              case 10:
                user = _context5.sent;
                accounts = (_user$get3 = user.get('solAccounts')) !== null && _user$get3 !== void 0 ? _user$get3 : [];
                nextAccounts = (0, _filter.default)(accounts).call(accounts, function (v) {
                  return v !== accountsLower;
                });
                user.set('solAccounts', nextAccounts);
                user.set('solAddress', nextAccounts[0]);
                _context5.next = 17;
                return user._unlinkFrom('moralisSol');

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
        }, _callee3);
      }));

      return function () {
        return _unlink.apply(this, arguments);
      };
    }()
  }, {
    key: "sign",
    value: function () {
      var _sign = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(message) {
        var phantom, encodedMessage, signedMessage;
        return _regenerator.default.wrap(function (_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return MoralisSol.enable();

              case 2:
                phantom = _context6.sent;
                encodedMessage = new TextEncoder().encode(message);
                _context6.next = 6;
                return phantom.signMessage(encodedMessage, 'utf8');

              case 6:
                signedMessage = _context6.sent;
                return _context6.abrupt("return", base64.encode(signedMessage.signature));

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee4);
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
  return MoralisSol;
}();

(0, _defineProperty2.default)(MoralisSol, "enable", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
  var provider;
  return _regenerator.default.wrap(function (_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (!(window && 'solana' in window)) {
            _context8.next = 17;
            break;
          }

          provider = window.solana;

          if (!provider.isPhantom) {
            _context8.next = 17;
            break;
          }

          _context8.prev = 3;
          _context8.next = 6;
          return provider.connect({
            onlyIfTrusted: true
          });

        case 6:
          _context8.next = 16;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](3);

          if (!(_context8.t0.message === 'User rejected the request.')) {
            _context8.next = 15;
            break;
          }

          _context8.next = 13;
          return provider.connect();

        case 13:
          _context8.next = 16;
          break;

        case 15:
          throw _context8.t0;

        case 16:
          return _context8.abrupt("return", provider);

        case 17:
          throw new Error('Phantom wallet not available');

        case 18:
        case "end":
          return _context8.stop();
      }
    }
  }, _callee5, null, [[3, 8]]);
})));

function toHexString(buffer
/*: Buffer*/
) {
  return (0, _reduce.default)(buffer).call(buffer, function (str, byte) {
    var _context7;

    return str + (0, _padStart.default)(_context7 = byte.toString(16)).call(_context7, 2, '0');
  }, '');
}

function uniq(arr) {
  return (0, _filter.default)(arr).call(arr, function (v, i) {
    return (0, _indexOf.default)(arr).call(arr, v) === i;
  });
}

var _default = MoralisSol;
exports.default = _default;