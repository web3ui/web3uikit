var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

var RNStorage = require('./StorageController.react-native');

var LocalDatastoreController = {
  fromPinWithName: function (name) {
    return function () {
      var values, objects;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regenerator.default.awrap(RNStorage.getItemAsync(name));

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
    return function () {
      var values;
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              values = JSON.stringify(value);
              _context2.next = 4;
              return _regenerator.default.awrap(RNStorage.setItemAsync(name, values));

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0.message);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 6]], Promise);
    }();
  },
  unPinWithName: function (name) {
    return RNStorage.removeItemAsync(name);
  },
  getAllContents: function () {
    return function () {
      var keys, batch, i, key, LDS, results;
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _regenerator.default.awrap(RNStorage.getAllKeysAsync());

            case 2:
              keys = _context3.sent;
              batch = [];

              for (i = 0; i < keys.length; i += 1) {
                key = keys[i];

                if ((0, _LocalDatastoreUtils.isLocalDatastoreKey)(key)) {
                  batch.push(key);
                }
              }

              LDS = {};
              results = [];
              _context3.prev = 7;
              _context3.next = 10;
              return _regenerator.default.awrap(RNStorage.multiGet(batch));

            case 10:
              results = _context3.sent;
              _context3.next = 17;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](7);
              console.error('Error getAllContents: ', _context3.t0);
              return _context3.abrupt("return", {});

            case 17:
              results.forEach(function (pair) {
                var _pair = (0, _slicedToArray2.default)(pair, 2),
                    key = _pair[0],
                    value = _pair[1];

                try {
                  LDS[key] = JSON.parse(value);
                } catch (error) {
                  LDS[key] = null;
                }
              });
              return _context3.abrupt("return", LDS);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[7, 13]], Promise);
    }();
  },
  getRawStorage: function () {
    return function () {
      var keys, storage, results;
      return _regenerator.default.async(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _regenerator.default.awrap(RNStorage.getAllKeysAsync());

            case 2:
              keys = _context4.sent;
              storage = {};
              _context4.next = 6;
              return _regenerator.default.awrap(RNStorage.multiGet(keys));

            case 6:
              results = _context4.sent;
              results.forEach(function (pair) {
                var _pair2 = (0, _slicedToArray2.default)(pair, 2),
                    key = _pair2[0],
                    value = _pair2[1];

                storage[key] = value;
              });
              return _context4.abrupt("return", storage);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  clear: function () {
    return function () {
      var keys, batch, i, key;
      return _regenerator.default.async(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _regenerator.default.awrap(RNStorage.getAllKeysAsync());

            case 2:
              keys = _context5.sent;
              batch = [];

              for (i = 0; i < keys.length; i += 1) {
                key = keys[i];

                if ((0, _LocalDatastoreUtils.isLocalDatastoreKey)(key)) {
                  batch.push(key);
                }
              }

              return _context5.abrupt("return", RNStorage.multiRemove(batch).catch(function (error) {
                return console.error('Error clearing local datastore: ', error);
              }));

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  }
};
module.exports = LocalDatastoreController;