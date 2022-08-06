"use strict";

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

var _Storage = _interopRequireDefault(require("./Storage"));

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];

  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (_e2) {
      didErr = true;
      err = _e2;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  var _context7;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context7 = Object.prototype.toString.call(o)).call(_context7, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var LocalDatastoreController = {
  fromPinWithName: function (name
  /*: string*/
  )
  /*: Array<Object>*/
  {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var values, objects;
      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Storage.default.getItemAsync(name);

            case 2:
              values = _context.sent;

              if (values) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", []);

            case 5:
              objects = JSON.parse(values);
              return _context.abrupt("return", objects);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  pinWithName: function (name
  /*: string*/
  , value
  /*: any*/
  ) {
    var values = (0, _stringify.default)(value);
    return _Storage.default.setItemAsync(name, values);
  },
  unPinWithName: function (name
  /*: string*/
  ) {
    return _Storage.default.removeItemAsync(name);
  },
  getAllContents: function ()
  /*: Object*/
  {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var keys;
      return _regenerator.default.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _Storage.default.getAllKeysAsync();

            case 2:
              keys = _context3.sent;
              return _context3.abrupt("return", (0, _reduce.default)(keys).call(keys, /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(previousPromise, key) {
                  var LDS, value;
                  return _regenerator.default.wrap(function (_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return previousPromise;

                        case 2:
                          LDS = _context2.sent;

                          if (!(0, _LocalDatastoreUtils.isLocalDatastoreKey)(key)) {
                            _context2.next = 8;
                            break;
                          }

                          _context2.next = 6;
                          return _Storage.default.getItemAsync(key);

                        case 6:
                          value = _context2.sent;

                          try {
                            LDS[key] = JSON.parse(value);
                          } catch (error) {
                            // eslint-disable-next-line no-console
                            console.error('Error getAllContents: ', error);
                          }

                        case 8:
                          return _context2.abrupt("return", LDS);

                        case 9:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function () {
                  return _ref.apply(this, arguments);
                };
              }(), _promise.default.resolve({})));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  // Used for testing
  getRawStorage: function ()
  /*: Object*/
  {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var keys;
      return _regenerator.default.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _Storage.default.getAllKeysAsync();

            case 2:
              keys = _context5.sent;
              return _context5.abrupt("return", (0, _reduce.default)(keys).call(keys, /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(previousPromise, key) {
                  var LDS, value;
                  return _regenerator.default.wrap(function (_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return previousPromise;

                        case 2:
                          LDS = _context4.sent;
                          _context4.next = 5;
                          return _Storage.default.getItemAsync(key);

                        case 5:
                          value = _context4.sent;
                          LDS[key] = value;
                          return _context4.abrupt("return", LDS);

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function () {
                  return _ref2.apply(this, arguments);
                };
              }(), _promise.default.resolve({})));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  clear: function ()
  /*: Promise*/
  {
    var _this = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var keys, toRemove, _iterator, _step, key, promises;

      return _regenerator.default.wrap(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _Storage.default.getAllKeysAsync();

            case 2:
              keys = _context6.sent;
              toRemove = [];
              _iterator = _createForOfIteratorHelper(keys);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  key = _step.value;

                  if ((0, _LocalDatastoreUtils.isLocalDatastoreKey)(key)) {
                    toRemove.push(key);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              promises = (0, _map.default)(toRemove).call(toRemove, _this.unPinWithName);
              return _context6.abrupt("return", _promise.default.all(promises));

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
};
module.exports = LocalDatastoreController;