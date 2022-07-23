"use strict";

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Array$from2 = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Array$isArray2 = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _keys2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _startsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/starts-with"));

var _keys3 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];

  if (!it) {
    if (_Array$isArray2(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  var _context16;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context16 = Object.prototype.toString.call(o)).call(_context16, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from2(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/**
 * Provides a local datastore which can be used to store and retrieve <code>Parse.Object</code>. <br />
 * To enable this functionality, call <code>Parse.enableLocalDatastore()</code>.
 *
 * Pin object to add to local datastore
 *
 * <pre>await object.pin();</pre>
 * <pre>await object.pinWithName('pinName');</pre>
 *
 * Query pinned objects
 *
 * <pre>query.fromLocalDatastore();</pre>
 * <pre>query.fromPin();</pre>
 * <pre>query.fromPinWithName();</pre>
 *
 * <pre>const localObjects = await query.find();</pre>
 *
 * @class Parse.LocalDatastore
 * @static
 */


var LocalDatastore = {
  isEnabled: false,
  isSyncing: false,
  fromPinWithName: function (name
  /*: string*/
  )
  /*: Promise<Array<Object>>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.fromPinWithName(name);
  },
  pinWithName: function (name
  /*: string*/
  , value
  /*: any*/
  )
  /*: Promise<void>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.pinWithName(name, value);
  },
  unPinWithName: function (name
  /*: string*/
  )
  /*: Promise<void>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.unPinWithName(name);
  },
  _getAllContents: function ()
  /*: Promise<Object>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.getAllContents();
  },
  // Use for testing
  _getRawStorage: function ()
  /*: Promise<Object>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.getRawStorage();
  },
  _clear: function ()
  /*: Promise<void>*/
  {
    var controller = _CoreManager.default.getLocalDatastoreController();

    return controller.clear();
  },
  // Pin the object and children recursively
  // Saves the object and children key to Pin Name
  _handlePinAllWithName: function (name
  /*: string*/
  , objects
  /*: Array<ParseObject>*/
  )
  /*: Promise<void>*/
  {
    var _this = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _context;

      var pinName, toPinPromises, objectKeys, _iterator, _step, parent, children, parentKey, json, objectKey, fromPinPromise, _yield$Promise$all, _yield$Promise$all2, pinned, toPin;

      return _regenerator.default.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pinName = _this.getPinName(name);
              toPinPromises = [];
              objectKeys = [];
              _iterator = _createForOfIteratorHelper(objects);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
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
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              fromPinPromise = _this.fromPinWithName(pinName);
              _context2.next = 8;
              return _promise.default.all([fromPinPromise, toPinPromises]);

            case 8:
              _yield$Promise$all = _context2.sent;
              _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 1);
              pinned = _yield$Promise$all2[0];
              toPin = (0, _toConsumableArray2.default)(new _set.default((0, _concat.default)(_context = []).call(_context, (0, _toConsumableArray2.default)(pinned || []), objectKeys)));
              return _context2.abrupt("return", _this.pinWithName(pinName, toPin));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }))();
  },
  // Removes object and children keys from pin name
  // Keeps the object and children pinned
  _handleUnPinAllWithName: function (name
  /*: string*/
  , objects
  /*: Array<ParseObject>*/
  ) {
    var _this2 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var localDatastore, pinName, promises, objectKeys, _iterator2, _step2, _objectKeys, _context3, parent, children, parentKey, pinned, _iterator3, _step3, objectKey, hasReference, key, pinnedObjects;

      return _regenerator.default.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this2._getAllContents();

            case 2:
              localDatastore = _context4.sent;
              pinName = _this2.getPinName(name);
              promises = [];
              objectKeys = [];
              _iterator2 = _createForOfIteratorHelper(objects);

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  parent = _step2.value;
                  children = _this2._getChildren(parent);
                  parentKey = _this2.getKeyForObject(parent);

                  (_objectKeys = objectKeys).push.apply(_objectKeys, (0, _concat.default)(_context3 = [parentKey]).call(_context3, (0, _toConsumableArray2.default)((0, _keys2.default)(children))));
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              objectKeys = (0, _toConsumableArray2.default)(new _set.default(objectKeys));
              pinned = localDatastore[pinName] || [];
              pinned = (0, _filter.default)(pinned).call(pinned, function (item) {
                return !(0, _includes.default)(objectKeys).call(objectKeys, item);
              });

              if (pinned.length === 0) {
                promises.push(_this2.unPinWithName(pinName));
                delete localDatastore[pinName];
              } else {
                promises.push(_this2.pinWithName(pinName, pinned));
                localDatastore[pinName] = pinned;
              }

              _iterator3 = _createForOfIteratorHelper(objectKeys);
              _context4.prev = 13;

              _iterator3.s();

            case 15:
              if ((_step3 = _iterator3.n()).done) {
                _context4.next = 31;
                break;
              }

              objectKey = _step3.value;
              hasReference = false;
              _context4.t0 = (0, _keys3.default)(_regenerator.default).call(_regenerator.default, localDatastore);

            case 19:
              if ((_context4.t1 = _context4.t0()).done) {
                _context4.next = 28;
                break;
              }

              key = _context4.t1.value;

              if (!(key === _LocalDatastoreUtils.DEFAULT_PIN || (0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.PIN_PREFIX))) {
                _context4.next = 26;
                break;
              }

              pinnedObjects = localDatastore[key] || [];

              if (!(0, _includes.default)(pinnedObjects).call(pinnedObjects, objectKey)) {
                _context4.next = 26;
                break;
              }

              hasReference = true;
              return _context4.abrupt("break", 28);

            case 26:
              _context4.next = 19;
              break;

            case 28:
              if (!hasReference) {
                promises.push(_this2.unPinWithName(objectKey));
              }

            case 29:
              _context4.next = 15;
              break;

            case 31:
              _context4.next = 36;
              break;

            case 33:
              _context4.prev = 33;
              _context4.t2 = _context4["catch"](13);

              _iterator3.e(_context4.t2);

            case 36:
              _context4.prev = 36;

              _iterator3.f();

              return _context4.finish(36);

            case 39:
              return _context4.abrupt("return", _promise.default.all(promises));

            case 40:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee2, null, [[13, 33, 36, 39]]);
    }))();
  },
  // Retrieve all pointer fields from object recursively
  _getChildren: function (object
  /*: ParseObject*/
  ) {
    var encountered = {};

    var json = object._toFullJSON(undefined, true);

    for (var key in json) {
      if (json[key] && json[key].__type && json[key].__type === 'Object') {
        this._traverse(json[key], encountered);
      }
    }

    return encountered;
  },
  _traverse: function (object
  /*: any*/
  , encountered
  /*: any*/
  ) {
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
  // Transform keys in pin name to objects
  _serializeObjectsFromPinName: function (name
  /*: string*/
  ) {
    var _this3 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _ref;

      var localDatastore, allObjects, key, pinName, pinned, promises, objects;
      return _regenerator.default.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this3._getAllContents();

            case 2:
              localDatastore = _context5.sent;
              allObjects = [];

              for (key in localDatastore) {
                if ((0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.OBJECT_PREFIX)) {
                  allObjects.push(localDatastore[key][0]);
                }
              }

              if (name) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", allObjects);

            case 7:
              pinName = _this3.getPinName(name);
              pinned = localDatastore[pinName];

              if ((0, _isArray.default)(pinned)) {
                _context5.next = 11;
                break;
              }

              return _context5.abrupt("return", []);

            case 11:
              promises = (0, _map.default)(pinned).call(pinned, function (objectKey) {
                return _this3.fromPinWithName(objectKey);
              });
              _context5.next = 14;
              return _promise.default.all(promises);

            case 14:
              objects = _context5.sent;
              objects = (0, _concat.default)(_ref = []).apply(_ref, (0, _toConsumableArray2.default)(objects));
              return _context5.abrupt("return", (0, _filter.default)(objects).call(objects, function (object) {
                return object != null;
              }));

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee3);
    }))();
  },
  // Replaces object pointers with pinned pointers
  // The object pointers may contain old data
  // Uses Breadth First Search Algorithm
  _serializeObject: function (objectKey
  /*: string*/
  , localDatastore
  /*: any*/
  ) {
    var _this4 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var LDS, root, queue, meta, uniqueId, nodeId, subTreeRoot, field, value, key, pointer;
      return _regenerator.default.wrap(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              LDS = localDatastore;

              if (LDS) {
                _context6.next = 5;
                break;
              }

              _context6.next = 4;
              return _this4._getAllContents();

            case 4:
              LDS = _context6.sent;

            case 5:
              if (!(!LDS[objectKey] || LDS[objectKey].length === 0)) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt("return", null);

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

              return _context6.abrupt("return", root);

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4);
    }))();
  },
  // Called when an object is save / fetched
  // Update object pin value
  _updateObjectIfPinned: function (object
  /*: ParseObject*/
  )
  /*: Promise<void>*/
  {
    var _this5 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var objectKey, pinned;
      return _regenerator.default.wrap(function (_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (_this5.isEnabled) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return");

            case 2:
              objectKey = _this5.getKeyForObject(object);
              _context7.next = 5;
              return _this5.fromPinWithName(objectKey);

            case 5:
              pinned = _context7.sent;

              if (!(!pinned || pinned.length === 0)) {
                _context7.next = 8;
                break;
              }

              return _context7.abrupt("return");

            case 8:
              return _context7.abrupt("return", _this5.pinWithName(objectKey, [object._toFullJSON()]));

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee5);
    }))();
  },
  // Called when object is destroyed
  // Unpin object and remove all references from pin names
  // TODO: Destroy children?
  _destroyObjectIfPinned: function (object
  /*: ParseObject*/
  ) {
    var _this6 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var localDatastore, objectKey, pin, promises, key, pinned;
      return _regenerator.default.wrap(function (_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (_this6.isEnabled) {
                _context8.next = 2;
                break;
              }

              return _context8.abrupt("return");

            case 2:
              _context8.next = 4;
              return _this6._getAllContents();

            case 4:
              localDatastore = _context8.sent;
              objectKey = _this6.getKeyForObject(object);
              pin = localDatastore[objectKey];

              if (pin) {
                _context8.next = 9;
                break;
              }

              return _context8.abrupt("return");

            case 9:
              promises = [_this6.unPinWithName(objectKey)];
              delete localDatastore[objectKey];

              for (key in localDatastore) {
                if (key === _LocalDatastoreUtils.DEFAULT_PIN || (0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.PIN_PREFIX)) {
                  pinned = localDatastore[key] || [];

                  if ((0, _includes.default)(pinned).call(pinned, objectKey)) {
                    pinned = (0, _filter.default)(pinned).call(pinned, function (item) {
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

              return _context8.abrupt("return", _promise.default.all(promises));

            case 13:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee6);
    }))();
  },
  // Update pin and references of the unsaved object
  _updateLocalIdForObject: function (localId
  /*: string*/
  , object
  /*: ParseObject*/
  ) {
    var _this7 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var _context9, _context10;

      var localKey, objectKey, unsaved, promises, localDatastore, key, pinned;
      return _regenerator.default.wrap(function (_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (_this7.isEnabled) {
                _context11.next = 2;
                break;
              }

              return _context11.abrupt("return");

            case 2:
              localKey = (0, _concat.default)(_context9 = (0, _concat.default)(_context10 = "".concat(_LocalDatastoreUtils.OBJECT_PREFIX)).call(_context10, object.className, "_")).call(_context9, localId);
              objectKey = _this7.getKeyForObject(object);
              _context11.next = 6;
              return _this7.fromPinWithName(localKey);

            case 6:
              unsaved = _context11.sent;

              if (!(!unsaved || unsaved.length === 0)) {
                _context11.next = 9;
                break;
              }

              return _context11.abrupt("return");

            case 9:
              promises = [_this7.unPinWithName(localKey), _this7.pinWithName(objectKey, unsaved)];
              _context11.next = 12;
              return _this7._getAllContents();

            case 12:
              localDatastore = _context11.sent;

              for (key in localDatastore) {
                if (key === _LocalDatastoreUtils.DEFAULT_PIN || (0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.PIN_PREFIX)) {
                  pinned = localDatastore[key] || [];

                  if ((0, _includes.default)(pinned).call(pinned, localKey)) {
                    pinned = (0, _filter.default)(pinned).call(pinned, function (item) {
                      return item !== localKey;
                    });
                    pinned.push(objectKey);
                    promises.push(_this7.pinWithName(key, pinned));
                    localDatastore[key] = pinned;
                  }
                }
              }

              return _context11.abrupt("return", _promise.default.all(promises));

            case 15:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee7);
    }))();
  },

  /**
   * Updates Local Datastore from Server
   *
   * <pre>
   * await Parse.LocalDatastore.updateFromServer();
   * </pre>
   *
   * @function updateFromServer
   * @name Parse.LocalDatastore.updateFromServer
   * @static
   */
  updateFromServer: function () {
    var _this8 = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
      var _context12;

      var localDatastore, keys, key, pointersHash, _i, _keys, _key, _key$split, _key$split2, className, objectId, queryPromises, responses, objects, pinPromises;

      return _regenerator.default.wrap(function (_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              if (!(!_this8.checkIfEnabled() || _this8.isSyncing)) {
                _context13.next = 2;
                break;
              }

              return _context13.abrupt("return");

            case 2:
              _context13.next = 4;
              return _this8._getAllContents();

            case 4:
              localDatastore = _context13.sent;
              keys = [];

              for (key in localDatastore) {
                if ((0, _startsWith.default)(key).call(key, _LocalDatastoreUtils.OBJECT_PREFIX)) {
                  keys.push(key);
                }
              }

              if (!(keys.length === 0)) {
                _context13.next = 9;
                break;
              }

              return _context13.abrupt("return");

            case 9:
              _this8.isSyncing = true;
              pointersHash = {};
              _i = 0, _keys = keys;

            case 12:
              if (!(_i < _keys.length)) {
                _context13.next = 23;
                break;
              }

              _key = _keys[_i]; // Ignore the OBJECT_PREFIX

              _key$split = _key.split('_'), _key$split2 = (0, _slicedToArray2.default)(_key$split, 4), className = _key$split2[2], objectId = _key$split2[3]; // User key is split into [ 'Parse', 'LDS', '', 'User', 'objectId' ]

              if (_key.split('_').length === 5 && _key.split('_')[3] === 'User') {
                className = '_User';
                objectId = _key.split('_')[4];
              }

              if (!(0, _startsWith.default)(objectId).call(objectId, 'local')) {
                _context13.next = 18;
                break;
              }

              return _context13.abrupt("continue", 20);

            case 18:
              if (!(className in pointersHash)) {
                pointersHash[className] = new _set.default();
              }

              pointersHash[className].add(objectId);

            case 20:
              _i++;
              _context13.next = 12;
              break;

            case 23:
              queryPromises = (0, _map.default)(_context12 = (0, _keys2.default)(pointersHash)).call(_context12, function (className) {
                var objectIds = (0, _from.default)(pointersHash[className]);
                var query = new _ParseQuery.default(className);
                query.limit(objectIds.length);

                if (objectIds.length === 1) {
                  query.equalTo('objectId', objectIds[0]);
                } else {
                  query.containedIn('objectId', objectIds);
                }

                return (0, _find.default)(query).call(query);
              });
              _context13.prev = 24;
              _context13.next = 27;
              return _promise.default.all(queryPromises);

            case 27:
              responses = _context13.sent;
              objects = (0, _concat.default)([]).apply([], responses);
              pinPromises = (0, _map.default)(objects).call(objects, function (object) {
                var objectKey = _this8.getKeyForObject(object);

                return _this8.pinWithName(objectKey, object._toFullJSON());
              });
              _context13.next = 32;
              return _promise.default.all(pinPromises);

            case 32:
              _this8.isSyncing = false;
              _context13.next = 39;
              break;

            case 35:
              _context13.prev = 35;
              _context13.t0 = _context13["catch"](24); // eslint-disable-next-line no-console

              console.error('Error syncing LocalDatastore: ', _context13.t0);
              _this8.isSyncing = false;

            case 39:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee8, null, [[24, 35]]);
    }))();
  },
  getKeyForObject: function (object
  /*: any*/
  ) {
    var _context14, _context15;

    var objectId = object.objectId || object._getId();

    return (0, _concat.default)(_context14 = (0, _concat.default)(_context15 = "".concat(_LocalDatastoreUtils.OBJECT_PREFIX)).call(_context15, object.className, "_")).call(_context14, objectId);
  },
  getPinName: function (pinName
  /*: ?string*/
  ) {
    if (!pinName || pinName === _LocalDatastoreUtils.DEFAULT_PIN) {
      return _LocalDatastoreUtils.DEFAULT_PIN;
    }

    return _LocalDatastoreUtils.PIN_PREFIX + pinName;
  },
  checkIfEnabled: function () {
    if (!this.isEnabled) {
      // eslint-disable-next-line no-console
      console.error('Parse.enableLocalDatastore() must be called first');
    }

    return this.isEnabled;
  }
};
module.exports = LocalDatastore;

_CoreManager.default.setLocalDatastoreController(require('./LocalDatastoreController'));

_CoreManager.default.setLocalDatastore(LocalDatastore);