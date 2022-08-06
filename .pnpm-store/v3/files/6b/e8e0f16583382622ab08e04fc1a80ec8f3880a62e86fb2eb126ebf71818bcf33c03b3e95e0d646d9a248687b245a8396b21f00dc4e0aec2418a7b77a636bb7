var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

var _Storage = _interopRequireDefault(require("./Storage"));

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
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
  fromPinWithName: function (name) {
    return function () {
      var values, objects;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regenerator.default.awrap(_Storage.default.getItemAsync(name));

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
      }, null, null, null, Promise);
    }();
  },
  pinWithName: function (name, value) {
    var values = JSON.stringify(value);
    return _Storage.default.setItemAsync(name, values);
  },
  unPinWithName: function (name) {
    return _Storage.default.removeItemAsync(name);
  },
  getAllContents: function () {
    return function () {
      var keys;
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _regenerator.default.awrap(_Storage.default.getAllKeysAsync());

            case 2:
              keys = _context3.sent;
              return _context3.abrupt("return", keys.reduce(function (previousPromise, key) {
                var LDS, value;
                return _regenerator.default.async(function (_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _regenerator.default.awrap(previousPromise);

                      case 2:
                        LDS = _context2.sent;

                        if (!(0, _LocalDatastoreUtils.isLocalDatastoreKey)(key)) {
                          _context2.next = 8;
                          break;
                        }

                        _context2.next = 6;
                        return _regenerator.default.awrap(_Storage.default.getItemAsync(key));

                      case 6:
                        value = _context2.sent;

                        try {
                          LDS[key] = JSON.parse(value);
                        } catch (error) {
                          console.error('Error getAllContents: ', error);
                        }

                      case 8:
                        return _context2.abrupt("return", LDS);

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, null, null, null, Promise);
              }, Promise.resolve({})));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  getRawStorage: function () {
    return function () {
      var keys;
      return _regenerator.default.async(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _regenerator.default.awrap(_Storage.default.getAllKeysAsync());

            case 2:
              keys = _context5.sent;
              return _context5.abrupt("return", keys.reduce(function (previousPromise, key) {
                var LDS, value;
                return _regenerator.default.async(function (_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _regenerator.default.awrap(previousPromise);

                      case 2:
                        LDS = _context4.sent;
                        _context4.next = 5;
                        return _regenerator.default.awrap(_Storage.default.getItemAsync(key));

                      case 5:
                        value = _context4.sent;
                        LDS[key] = value;
                        return _context4.abrupt("return", LDS);

                      case 8:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, null, null, null, Promise);
              }, Promise.resolve({})));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  clear: function () {
    var _this = this;

    return function () {
      var keys, toRemove, _iterator, _step, key, promises;

      return _regenerator.default.async(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _regenerator.default.awrap(_Storage.default.getAllKeysAsync());

            case 2:
              keys = _context6.sent;
              toRemove = [];

              for (_iterator = _createForOfIteratorHelperLoose(keys); !(_step = _iterator()).done;) {
                key = _step.value;

                if ((0, _LocalDatastoreUtils.isLocalDatastoreKey)(key)) {
                  toRemove.push(key);
                }
              }

              promises = toRemove.map(_this.unPinWithName);
              return _context6.abrupt("return", Promise.all(promises));

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  }
};
module.exports = LocalDatastoreController;