var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

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

var LocalDatastore = {
  isEnabled: false,
  isSyncing: false,
  fromPinWithName: function (name) {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.fromPinWithName(name);
  },
  pinWithName: function (name, value) {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.pinWithName(name, value);
  },
  unPinWithName: function (name) {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.unPinWithName(name);
  },
  _getAllContents: function () {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.getAllContents();
  },
  _getRawStorage: function () {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.getRawStorage();
  },
  _clear: function () {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.clear();
  },
  _handlePinAllWithName: function (name, objects) {
    var _this = this;

    return function () {
      var pinName, toPinPromises, objectKeys, _iterator, _step, parent, children, parentKey, json, objectKey, fromPinPromise, _await$Promise$all, _await$Promise$all2, pinned, toPin;

      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pinName = _this.getPinName(name);
              toPinPromises = [];
              objectKeys = [];

              for (_iterator = _createForOfIteratorHelperLoose(objects); !(_step = _iterator()).done;) {
                parent = _step.value;
                children = _this._getChildren(parent);
                parentKey = _this.getKeyForObject(parent);
                json = parent._toFullJSON(undefined, true);

                if (parent._localId) {
                  json._localId = parent._localId;
                }

                children[parentKey] = json;

                for (objectKey in children) {
                  objectKeys.push(objectKey);
                  toPinPromises.push(_this.pinWithName(objectKey, [children[objectKey]]));
                }
              }

              fromPinPromise = _this.fromPinWithName(pinName);
              _context.next = 7;
              return _regenerator.default.awrap(Promise.all([fromPinPromise, toPinPromises]));

            case 7:
              _await$Promise$all = _context.sent;
              _await$Promise$all2 = (0, _slicedToArray2.default)(_await$Promise$all, 1);
              pinned = _await$Promise$all2[0];
              toPin = (0, _toConsumableArray2.default)(new Set([].concat((0, _toConsumableArray2.default)(pinned || []), objectKeys)));
              return _context.abrupt("return", _this.pinWithName(pinName, toPin));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  _handleUnPinAllWithName: function (name, objects) {
    var _this2 = this;

    return function () {
      var localDatastore, pinName, promises, objectKeys, _iterator2, _step2, _objectKeys, parent, children, parentKey, pinned, _iterator3, _step3, objectKey, hasReference, key, pinnedObjects;

      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _regenerator.default.awrap(_this2._getAllContents());

            case 2:
              localDatastore = _context2.sent;
              pinName = _this2.getPinName(name);
              promises = [];
              objectKeys = [];

              for (_iterator2 = _createForOfIteratorHelperLoose(objects); !(_step2 = _iterator2()).done;) {
                parent = _step2.value;
                children = _this2._getChildren(parent);
                parentKey = _this2.getKeyForObject(parent);

                (_objectKeys = objectKeys).push.apply(_objectKeys, [parentKey].concat((0, _toConsumableArray2.default)(Object.keys(children))));
              }

              objectKeys = (0, _toConsumableArray2.default)(new Set(objectKeys));
              pinned = localDatastore[pinName] || [];
              pinned = pinned.filter(function (item) {
                return !objectKeys.includes(item);
              });

              if (pinned.length === 0) {
                promises.push(_this2.unPinWithName(pinName));
                delete localDatastore[pinName];
              } else {
                promises.push(_this2.pinWithName(pinName, pinned));
                localDatastore[pinName] = pinned;
              }

              _iterator3 = _createForOfIteratorHelperLoose(objectKeys);

            case 12:
              if ((_step3 = _iterator3()).done) {
                _context2.next = 28;
                break;
              }

              objectKey = _step3.value;
              hasReference = false;
              _context2.t0 = _regenerator.default.keys(localDatastore);

            case 16:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 25;
                break;
              }

              key = _context2.t1.value;

              if (!(key === _LocalDatastoreUtils.DEFAULT_PIN || key.startsWith(_LocalDatastoreUtils.PIN_PREFIX))) {
                _context2.next = 23;
                break;
              }

              pinnedObjects = localDatastore[key] || [];

              if (!pinnedObjects.includes(objectKey)) {
                _context2.next = 23;
                break;
              }

              hasReference = true;
              return _context2.abrupt("break", 25);

            case 23:
              _context2.next = 16;
              break;

            case 25:
              if (!hasReference) {
                promises.push(_this2.unPinWithName(objectKey));
              }

            case 26:
              _context2.next = 12;
              break;

            case 28:
              return _context2.abrupt("return", Promise.all(promises));

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  _getChildren: function (object) {
    var encountered = {};

    var json = object._toFullJSON(undefined, true);

    for (var key in json) {
      if (json[key] && json[key].__type && json[key].__type === 'Object') {
        this._traverse(json[key], encountered);
      }
    }

    return encountered;
  },
  _traverse: function (object, encountered) {
    if (!object.objectId) {
      return;
    }

    var objectKey = this.getKeyForObject(object);

    if (encountered[objectKey]) {
      return;
    }

    encountered[objectKey] = object;

    for (var key in object) {
      var json = object[key];

      if (!object[key]) {
        json = object;
      }

      if (json.__type && json.__type === 'Object') {
        this._traverse(json, encountered);
      }
    }
  },
  _serializeObjectsFromPinName: function (name) {
    var _this3 = this;

    return function () {
      var _ref;

      var localDatastore, allObjects, key, pinName, pinned, promises, objects;
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _regenerator.default.awrap(_this3._getAllContents());

            case 2:
              localDatastore = _context3.sent;
              allObjects = [];

              for (key in localDatastore) {
                if (key.startsWith(_LocalDatastoreUtils.OBJECT_PREFIX)) {
                  allObjects.push(localDatastore[key][0]);
                }
              }

              if (name) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", allObjects);

            case 7:
              pinName = _this3.getPinName(name);
              pinned = localDatastore[pinName];

              if (Array.isArray(pinned)) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt("return", []);

            case 11:
              promises = pinned.map(function (objectKey) {
                return _this3.fromPinWithName(objectKey);
              });
              _context3.next = 14;
              return _regenerator.default.awrap(Promise.all(promises));

            case 14:
              objects = _context3.sent;
              objects = (_ref = []).concat.apply(_ref, (0, _toConsumableArray2.default)(objects));
              return _context3.abrupt("return", objects.filter(function (object) {
                return object != null;
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  _serializeObject: function (objectKey, localDatastore) {
    var _this4 = this;

    return function () {
      var LDS, root, queue, meta, uniqueId, nodeId, subTreeRoot, field, value, key, pointer;
      return _regenerator.default.async(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              LDS = localDatastore;

              if (LDS) {
                _context4.next = 5;
                break;
              }

              _context4.next = 4;
              return _regenerator.default.awrap(_this4._getAllContents());

            case 4:
              LDS = _context4.sent;

            case 5:
              if (!(!LDS[objectKey] || LDS[objectKey].length === 0)) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", null);

            case 7:
              root = LDS[objectKey][0];
              queue = [];
              meta = {};
              uniqueId = 0;
              meta[uniqueId] = root;
              queue.push(uniqueId);

              while (queue.length !== 0) {
                nodeId = queue.shift();
                subTreeRoot = meta[nodeId];

                for (field in subTreeRoot) {
                  value = subTreeRoot[field];

                  if (value.__type && value.__type === 'Object') {
                    key = _this4.getKeyForObject(value);

                    if (LDS[key] && LDS[key].length > 0) {
                      pointer = LDS[key][0];
                      uniqueId++;
                      meta[uniqueId] = pointer;
                      subTreeRoot[field] = pointer;
                      queue.push(uniqueId);
                    }
                  }
                }
              }

              return _context4.abrupt("return", root);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  _updateObjectIfPinned: function (object) {
    var _this5 = this;

    return function () {
      var objectKey, pinned;
      return _regenerator.default.async(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (_this5.isEnabled) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              objectKey = _this5.getKeyForObject(object);
              _context5.next = 5;
              return _regenerator.default.awrap(_this5.fromPinWithName(objectKey));

            case 5:
              pinned = _context5.sent;

              if (!(!pinned || pinned.length === 0)) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return");

            case 8:
              return _context5.abrupt("return", _this5.pinWithName(objectKey, [object._toFullJSON()]));

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  _destroyObjectIfPinned: function (object) {
    var _this6 = this;

    return function () {
      var localDatastore, objectKey, pin, promises, key, pinned;
      return _regenerator.default.async(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (_this6.isEnabled) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return");

            case 2:
              _context6.next = 4;
              return _regenerator.default.awrap(_this6._getAllContents());

            case 4:
              localDatastore = _context6.sent;
              objectKey = _this6.getKeyForObject(object);
              pin = localDatastore[objectKey];

              if (pin) {
                _context6.next = 9;
                break;
              }

              return _context6.abrupt("return");

            case 9:
              promises = [_this6.unPinWithName(objectKey)];
              delete localDatastore[objectKey];

              for (key in localDatastore) {
                if (key === _LocalDatastoreUtils.DEFAULT_PIN || key.startsWith(_LocalDatastoreUtils.PIN_PREFIX)) {
                  pinned = localDatastore[key] || [];

                  if (pinned.includes(objectKey)) {
                    pinned = pinned.filter(function (item) {
                      return item !== objectKey;
                    });

                    if (pinned.length === 0) {
                      promises.push(_this6.unPinWithName(key));
                      delete localDatastore[key];
                    } else {
                      promises.push(_this6.pinWithName(key, pinned));
                      localDatastore[key] = pinned;
                    }
                  }
                }
              }

              return _context6.abrupt("return", Promise.all(promises));

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  _updateLocalIdForObject: function (localId, object) {
    var _this7 = this;

    return function () {
      var localKey, objectKey, unsaved, promises, localDatastore, key, pinned;
      return _regenerator.default.async(function (_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (_this7.isEnabled) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return");

            case 2:
              localKey = "" + _LocalDatastoreUtils.OBJECT_PREFIX + object.className + "_" + localId;
              objectKey = _this7.getKeyForObject(object);
              _context7.next = 6;
              return _regenerator.default.awrap(_this7.fromPinWithName(localKey));

            case 6:
              unsaved = _context7.sent;

              if (!(!unsaved || unsaved.length === 0)) {
                _context7.next = 9;
                break;
              }

              return _context7.abrupt("return");

            case 9:
              promises = [_this7.unPinWithName(localKey), _this7.pinWithName(objectKey, unsaved)];
              _context7.next = 12;
              return _regenerator.default.awrap(_this7._getAllContents());

            case 12:
              localDatastore = _context7.sent;

              for (key in localDatastore) {
                if (key === _LocalDatastoreUtils.DEFAULT_PIN || key.startsWith(_LocalDatastoreUtils.PIN_PREFIX)) {
                  pinned = localDatastore[key] || [];

                  if (pinned.includes(localKey)) {
                    pinned = pinned.filter(function (item) {
                      return item !== localKey;
                    });
                    pinned.push(objectKey);
                    promises.push(_this7.pinWithName(key, pinned));
                    localDatastore[key] = pinned;
                  }
                }
              }

              return _context7.abrupt("return", Promise.all(promises));

            case 15:
            case "end":
              return _context7.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  updateFromServer: function () {
    var _this8 = this;

    return function () {
      var localDatastore, keys, key, pointersHash, _i, _keys, _key, _key$split, _key$split2, className, objectId, queryPromises, responses, objects, pinPromises;

      return _regenerator.default.async(function (_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!(!_this8.checkIfEnabled() || _this8.isSyncing)) {
                _context8.next = 2;
                break;
              }

              return _context8.abrupt("return");

            case 2:
              _context8.next = 4;
              return _regenerator.default.awrap(_this8._getAllContents());

            case 4:
              localDatastore = _context8.sent;
              keys = [];

              for (key in localDatastore) {
                if (key.startsWith(_LocalDatastoreUtils.OBJECT_PREFIX)) {
                  keys.push(key);
                }
              }

              if (!(keys.length === 0)) {
                _context8.next = 9;
                break;
              }

              return _context8.abrupt("return");

            case 9:
              _this8.isSyncing = true;
              pointersHash = {};
              _i = 0, _keys = keys;

            case 12:
              if (!(_i < _keys.length)) {
                _context8.next = 23;
                break;
              }

              _key = _keys[_i];
              _key$split = _key.split('_'), _key$split2 = (0, _slicedToArray2.default)(_key$split, 4), className = _key$split2[2], objectId = _key$split2[3];

              if (_key.split('_').length === 5 && _key.split('_')[3] === 'User') {
                className = '_User';
                objectId = _key.split('_')[4];
              }

              if (!objectId.startsWith('local')) {
                _context8.next = 18;
                break;
              }

              return _context8.abrupt("continue", 20);

            case 18:
              if (!(className in pointersHash)) {
                pointersHash[className] = new Set();
              }

              pointersHash[className].add(objectId);

            case 20:
              _i++;
              _context8.next = 12;
              break;

            case 23:
              queryPromises = Object.keys(pointersHash).map(function (className) {
                var objectIds = Array.from(pointersHash[className]);
                var query = new _ParseQuery.default(className);
                query.limit(objectIds.length);

                if (objectIds.length === 1) {
                  query.equalTo('objectId', objectIds[0]);
                } else {
                  query.containedIn('objectId', objectIds);
                }

                return query.find();
              });
              _context8.prev = 24;
              _context8.next = 27;
              return _regenerator.default.awrap(Promise.all(queryPromises));

            case 27:
              responses = _context8.sent;
              objects = [].concat.apply([], responses);
              pinPromises = objects.map(function (object) {
                var objectKey = _this8.getKeyForObject(object);

                return _this8.pinWithName(objectKey, object._toFullJSON());
              });
              _context8.next = 32;
              return _regenerator.default.awrap(Promise.all(pinPromises));

            case 32:
              _this8.isSyncing = false;
              _context8.next = 39;
              break;

            case 35:
              _context8.prev = 35;
              _context8.t0 = _context8["catch"](24);
              console.error('Error syncing LocalDatastore: ', _context8.t0);
              _this8.isSyncing = false;

            case 39:
            case "end":
              return _context8.stop();
          }
        }
      }, null, null, [[24, 35]], Promise);
    }();
  },
  getKeyForObject: function (object) {
    var objectId = object.objectId || object._getId();

    return "" + _LocalDatastoreUtils.OBJECT_PREFIX + object.className + "_" + objectId;
  },
  getPinName: function (pinName) {
    if (!pinName || pinName === _LocalDatastoreUtils.DEFAULT_PIN) {
      return _LocalDatastoreUtils.DEFAULT_PIN;
    }

    return _LocalDatastoreUtils.PIN_PREFIX + pinName;
  },
  checkIfEnabled: function () {
    if (!this.isEnabled) {
      console.error('Parse.enableLocalDatastore() must be called first');
    }

    return this.isEnabled;
  }
};
module.exports = LocalDatastore;

_CoreManager.default.setLocalDatastoreController(require('./LocalDatastoreController.react-native'));

_CoreManager.default.setLocalDatastore(LocalDatastore);