"use strict";

var _typeof3 = require("@babel/runtime-corejs3/helpers/typeof");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Array$isArray2 = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _freeze = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/freeze"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _create = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/create"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _canBeSerialized = _interopRequireDefault(require("./canBeSerialized"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _escape2 = _interopRequireDefault(require("./escape"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _parseDate = _interopRequireDefault(require("./parseDate"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _promiseUtils = require("./promiseUtils");

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

var _ParseOp = require("./ParseOp");

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

var SingleInstanceStateController = _interopRequireWildcard(require("./SingleInstanceStateController"));

var _unique = _interopRequireDefault(require("./unique"));

var UniqueInstanceStateController = _interopRequireWildcard(require("./UniqueInstanceStateController"));

var _unsavedChildren = _interopRequireDefault(require("./unsavedChildren"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof _WeakMap !== "function") return null;
  var cacheBabelInterop = new _WeakMap();
  var cacheNodeInterop = new _WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = _Object$defineProperty2 && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty2(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

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
  var _context21;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context21 = Object.prototype.toString.call(o)).call(_context21, 8, -1);

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

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys2(object);

  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);

    enumerableOnly && (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) {
      return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context19, _context20;

    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? _forEachInstanceProperty2(_context19 = ownKeys(Object(source), !0)).call(_context19, function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty2(_context20 = ownKeys(Object(source))).call(_context20, function (key) {
      _Object$defineProperty2(target, key, _Object$getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

var _require = require('uuid'),
    uuidv4 = _require.v4;
/*:: export type Pointer = {
  __type: string,
  className: string,
  objectId: string,
};*/

/*:: type SaveParams = {
  method: string,
  path: string,
  body: AttributeMap,
};*/

/*:: type SaveOptions = FullOptions & {
  cascadeSave?: boolean,
  context?: AttributeMap,
};*/
// Mapping of class names to constructors, so we can populate objects from the
// server with appropriate subclasses of ParseObject


var classMap = {}; // Global counter for generating unique Ids for non-single-instance objects

var objectCount = 0; // On web clients, objects are single-instance: any two objects with the same Id
// will have the same attributes. However, this may be dangerous default
// behavior in a server scenario

var singleInstance = !_CoreManager.default.get('IS_NODE');

if (singleInstance) {
  _CoreManager.default.setObjectStateController(SingleInstanceStateController);
} else {
  _CoreManager.default.setObjectStateController(UniqueInstanceStateController);
}

function getServerUrlPath() {
  var serverUrl = _CoreManager.default.get('SERVER_URL');

  if (serverUrl[serverUrl.length - 1] !== '/') {
    serverUrl += '/';
  }

  var url = serverUrl.replace(/https?:\/\//, '');
  return url.substr((0, _indexOf.default)(url).call(url, '/'));
}
/**
 * Creates a new model with defined attributes.
 *
 * <p>You won't normally call this method directly.  It is recommended that
 * you use a subclass of <code>Parse.Object</code> instead, created by calling
 * <code>extend</code>.</p>
 *
 * <p>However, if you don't want to use a subclass, or aren't sure which
 * subclass is appropriate, you can use this form:<pre>
 *     var object = new Parse.Object("ClassName");
 * </pre>
 * That is basically equivalent to:<pre>
 *     var MyClass = Parse.Object.extend("ClassName");
 *     var object = new MyClass();
 * </pre></p>
 *
 * @alias Parse.Object
 */


var ParseObject = /*#__PURE__*/function () {
  /**
   * @param {string} className The class name for the object
   * @param {object} attributes The initial set of data to store in the object.
   * @param {object} options The options for this object instance.
   */
  function ParseObject(className
  /*: ?string | { className: string, [attr: string]: mixed }*/
  , attributes
  /*:: ?: { [attr: string]: mixed }*/
  , options
  /*:: ?: { ignoreValidation: boolean }*/
  ) {
    (0, _classCallCheck2.default)(this, ParseObject);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "_localId", void 0);
    (0, _defineProperty2.default)(this, "_objCount", void 0);
    (0, _defineProperty2.default)(this, "className", void 0); // Enable legacy initializers

    if (typeof this.initialize === 'function') {
      this.initialize.apply(this, arguments);
    }

    var toSet = null;
    this._objCount = objectCount++;

    if (typeof className === 'string') {
      this.className = className;

      if (attributes && (0, _typeof2.default)(attributes) === 'object') {
        toSet = attributes;
      }
    } else if (className && (0, _typeof2.default)(className) === 'object') {
      this.className = className.className;
      toSet = {};

      for (var _attr in className) {
        if (_attr !== 'className') {
          toSet[_attr] = className[_attr];
        }
      }

      if (attributes && (0, _typeof2.default)(attributes) === 'object') {
        options = attributes;
      }
    }

    if (toSet && !this.set(toSet, options)) {
      throw new Error("Can't create an invalid Parse Object");
    }
  }
  /**
   * The ID of this object, unique within its class.
   *
   * @property {string} id
   */


  (0, _createClass2.default)(ParseObject, [{
    key: "attributes",
    get:
    /** Prototype getters / setters * */
    function ()
    /*: AttributeMap*/
    {
      var stateController = _CoreManager.default.getObjectStateController();

      return (0, _freeze.default)(stateController.estimateAttributes(this._getStateIdentifier()));
    }
    /**
     * The first time this object was saved on the server.
     *
     * @property {Date} createdAt
     * @returns {Date}
     */

  }, {
    key: "createdAt",
    get: function ()
    /*: ?Date*/
    {
      return this._getServerData().createdAt;
    }
    /**
     * The last time this object was updated on the server.
     *
     * @property {Date} updatedAt
     * @returns {Date}
     */

  }, {
    key: "updatedAt",
    get: function ()
    /*: ?Date*/
    {
      return this._getServerData().updatedAt;
    }
    /** Private methods * */

    /**
     * Returns a local or server Id used uniquely identify this object
     *
     * @returns {string}
     */

  }, {
    key: "_getId",
    value: function ()
    /*: string*/
    {
      if (typeof this.id === 'string') {
        return this.id;
      }

      if (typeof this._localId === 'string') {
        return this._localId;
      }

      var localId = "local".concat(uuidv4());
      this._localId = localId;
      return localId;
    }
    /**
     * Returns a unique identifier used to pull data from the State Controller.
     *
     * @returns {Parse.Object|object}
     */

  }, {
    key: "_getStateIdentifier",
    value: function ()
    /*: ParseObject | { id: string, className: string }*/
    {
      if (singleInstance) {
        var id = this.id;

        if (!id) {
          id = this._getId();
        }

        return {
          id: id,
          className: this.className
        };
      }

      return this;
    }
  }, {
    key: "_getServerData",
    value: function ()
    /*: AttributeMap*/
    {
      var stateController = _CoreManager.default.getObjectStateController();

      return stateController.getServerData(this._getStateIdentifier());
    }
  }, {
    key: "_clearServerData",
    value: function () {
      var serverData = this._getServerData();

      var unset = {};

      for (var _attr2 in serverData) {
        unset[_attr2] = undefined;
      }

      var stateController = _CoreManager.default.getObjectStateController();

      stateController.setServerData(this._getStateIdentifier(), unset);
    }
  }, {
    key: "_getPendingOps",
    value: function ()
    /*: Array<OpsMap>*/
    {
      var stateController = _CoreManager.default.getObjectStateController();

      return stateController.getPendingOps(this._getStateIdentifier());
    }
    /**
     * @param {Array<string>} [keysToClear] - if specified, only ops matching
     * these fields will be cleared
     */

  }, {
    key: "_clearPendingOps",
    value: function (keysToClear
    /*:: ?: Array<string>*/
    ) {
      var pending = this._getPendingOps();

      var latest = pending[pending.length - 1];
      var keys = keysToClear || (0, _keys.default)(latest);
      (0, _forEach.default)(keys).call(keys, function (key) {
        delete latest[key];
      });
    }
  }, {
    key: "_getDirtyObjectAttributes",
    value: function ()
    /*: AttributeMap*/
    {
      var attributes = this.attributes;

      var stateController = _CoreManager.default.getObjectStateController();

      var objectCache = stateController.getObjectCache(this._getStateIdentifier());
      var dirty = {};

      for (var _attr3 in attributes) {
        var val = attributes[_attr3];

        if (val && (0, _typeof2.default)(val) === 'object' && !(val instanceof ParseObject) && !(val instanceof _ParseFile.default) && !(val instanceof _ParseRelation.default)) {
          // Due to the way browsers construct maps, the key order will not change
          // unless the object is changed
          try {
            var json = (0, _encode.default)(val, false, true);
            var stringified = (0, _stringify.default)(json);

            if (objectCache[_attr3] !== stringified) {
              dirty[_attr3] = val;
            }
          } catch (e) {
            // Error occurred, possibly by a nested unsaved pointer in a mutable container
            // No matter how it happened, it indicates a change in the attribute
            dirty[_attr3] = val;
          }
        }
      }

      return dirty;
    }
  }, {
    key: "_toFullJSON",
    value: function (seen
    /*:: ?: Array<any>*/
    , offline
    /*:: ?: boolean*/
    )
    /*: AttributeMap*/
    {
      var json
      /*: { [key: string]: mixed }*/
      = this.toJSON(seen, offline);
      json.__type = 'Object';
      json.className = this.className;
      return json;
    }
  }, {
    key: "_getSaveJSON",
    value: function ()
    /*: AttributeMap*/
    {
      var pending = this._getPendingOps();

      var dirtyObjects = this._getDirtyObjectAttributes();

      var json = {};

      for (var attr in dirtyObjects) {
        var isDotNotation = false;

        for (var i = 0; i < pending.length; i += 1) {
          for (var field in pending[i]) {
            // Dot notation operations are handled later
            if ((0, _includes.default)(field).call(field, '.')) {
              var fieldName = field.split('.')[0];

              if (fieldName === attr) {
                isDotNotation = true;
                break;
              }
            }
          }
        }

        if (!isDotNotation) {
          json[attr] = new _ParseOp.SetOp(dirtyObjects[attr]).toJSON();
        }
      }

      for (attr in pending[0]) {
        json[attr] = pending[0][attr].toJSON();
      }

      return json;
    }
  }, {
    key: "_getSaveParams",
    value: function ()
    /*: SaveParams*/
    {
      var method = this.id ? 'PUT' : 'POST';

      var body = this._getSaveJSON();

      var path = "classes/".concat(this.className);

      if (this.id) {
        path += "/".concat(this.id);
      } else if (this.className === '_User') {
        path = 'users';
      }

      return {
        method: method,
        body: body,
        path: path
      };
    }
  }, {
    key: "_finishFetch",
    value: function (serverData
    /*: AttributeMap*/
    ) {
      if (!this.id && serverData.objectId) {
        this.id = serverData.objectId;
      }

      var stateController = _CoreManager.default.getObjectStateController();

      stateController.initializeState(this._getStateIdentifier());
      var decoded = {};

      for (var _attr4 in serverData) {
        if (_attr4 === 'ACL') {
          decoded[_attr4] = new _ParseACL.default(serverData[_attr4]);
        } else if (_attr4 !== 'objectId') {
          decoded[_attr4] = (0, _decode.default)(serverData[_attr4]);

          if (decoded[_attr4] instanceof _ParseRelation.default) {
            decoded[_attr4]._ensureParentAndKey(this, _attr4);
          }
        }
      }

      if (decoded.createdAt && typeof decoded.createdAt === 'string') {
        decoded.createdAt = (0, _parseDate.default)(decoded.createdAt);
      }

      if (decoded.updatedAt && typeof decoded.updatedAt === 'string') {
        decoded.updatedAt = (0, _parseDate.default)(decoded.updatedAt);
      }

      if (!decoded.updatedAt && decoded.createdAt) {
        decoded.updatedAt = decoded.createdAt;
      }

      stateController.commitServerChanges(this._getStateIdentifier(), decoded);
    }
  }, {
    key: "_setExisted",
    value: function (existed
    /*: boolean*/
    ) {
      var stateController = _CoreManager.default.getObjectStateController();

      var state = stateController.getState(this._getStateIdentifier());

      if (state) {
        state.existed = existed;
      }
    }
  }, {
    key: "_migrateId",
    value: function (serverId
    /*: string*/
    ) {
      if (this._localId && serverId) {
        if (singleInstance) {
          var stateController = _CoreManager.default.getObjectStateController();

          var oldState = stateController.removeState(this._getStateIdentifier());
          this.id = serverId;
          delete this._localId;

          if (oldState) {
            stateController.initializeState(this._getStateIdentifier(), oldState);
          }
        } else {
          this.id = serverId;
          delete this._localId;
        }
      }
    }
  }, {
    key: "_handleSaveResponse",
    value: function (response
    /*: AttributeMap*/
    , status
    /*: number*/
    ) {
      var changes = {};

      var stateController = _CoreManager.default.getObjectStateController();

      var pending = stateController.popPendingState(this._getStateIdentifier());

      for (var attr in pending) {
        if (pending[attr] instanceof _ParseOp.RelationOp) {
          changes[attr] = pending[attr].applyTo(undefined, this, attr);
        } else if (!(attr in response) && !(0, _includes.default)(attr).call(attr, '.')) {
          // Only SetOps and UnsetOps should not come back with results
          changes[attr] = pending[attr].applyTo(undefined);
        }
      }

      for (attr in response) {
        if ((attr === 'createdAt' || attr === 'updatedAt') && typeof response[attr] === 'string') {
          changes[attr] = (0, _parseDate.default)(response[attr]);
        } else if (attr === 'ACL') {
          changes[attr] = new _ParseACL.default(response[attr]);
        } else if (attr !== 'objectId') {
          var val = (0, _decode.default)(response[attr]);

          if (val && (0, _getPrototypeOf.default)(val) === Object.prototype) {
            changes[attr] = _objectSpread(_objectSpread({}, this.attributes[attr]), val);
          } else {
            changes[attr] = val;
          }

          if (changes[attr] instanceof _ParseOp.UnsetOp) {
            changes[attr] = undefined;
          }
        }
      }

      if (changes.createdAt && !changes.updatedAt) {
        changes.updatedAt = changes.createdAt;
      }

      this._migrateId(response.objectId);

      if (status !== 201) {
        this._setExisted(true);
      }

      stateController.commitServerChanges(this._getStateIdentifier(), changes);
    }
  }, {
    key: "_handleSaveError",
    value: function () {
      var stateController = _CoreManager.default.getObjectStateController();

      stateController.mergeFirstPendingState(this._getStateIdentifier());
    }
    /** Public methods * */

  }, {
    key: "initialize",
    value: function () {// NOOP
    }
    /**
     * Returns a JSON version of the object suitable for saving to Parse.
     *
     * @param seen
     * @param offline
     * @returns {object}
     */

  }, {
    key: "toJSON",
    value: function (seen
    /*: Array<any> | void*/
    , offline
    /*:: ?: boolean*/
    )
    /*: AttributeMap*/
    {
      var _context;

      var seenEntry = this.id ? (0, _concat.default)(_context = "".concat(this.className, ":")).call(_context, this.id) : this;
      seen = seen || [seenEntry];
      var json = {};
      var attrs = this.attributes;

      for (var _attr5 in attrs) {
        if ((_attr5 === 'createdAt' || _attr5 === 'updatedAt') && attrs[_attr5].toJSON) {
          json[_attr5] = attrs[_attr5].toJSON();
        } else {
          json[_attr5] = (0, _encode.default)(attrs[_attr5], false, false, seen, offline);
        }
      }

      var pending = this._getPendingOps();

      for (var _attr6 in pending[0]) {
        json[_attr6] = pending[0][_attr6].toJSON(offline);
      }

      if (this.id) {
        json.objectId = this.id;
      }

      return json;
    }
    /**
     * Determines whether this ParseObject is equal to another ParseObject
     *
     * @param {object} other - An other object ot compare
     * @returns {boolean}
     */

  }, {
    key: "equals",
    value: function (other
    /*: mixed*/
    )
    /*: boolean*/
    {
      if (this === other) {
        return true;
      }

      return other instanceof ParseObject && this.className === other.className && this.id === other.id && typeof this.id !== 'undefined';
    }
    /**
     * Returns true if this object has been modified since its last
     * save/refresh.  If an attribute is specified, it returns true only if that
     * particular attribute has been modified since the last save/refresh.
     *
     * @param {string} attr An attribute name (optional).
     * @returns {boolean}
     */

  }, {
    key: "dirty",
    value: function (attr
    /*:: ?: string*/
    )
    /*: boolean*/
    {
      if (!this.id) {
        return true;
      }

      var pendingOps = this._getPendingOps();

      var dirtyObjects = this._getDirtyObjectAttributes();

      if (attr) {
        if (dirtyObjects.hasOwnProperty(attr)) {
          return true;
        }

        for (var i = 0; i < pendingOps.length; i++) {
          if (pendingOps[i].hasOwnProperty(attr)) {
            return true;
          }
        }

        return false;
      }

      if ((0, _keys.default)(pendingOps[0]).length !== 0) {
        return true;
      }

      if ((0, _keys.default)(dirtyObjects).length !== 0) {
        return true;
      }

      return false;
    }
    /**
     * Returns an array of keys that have been modified since last save/refresh
     *
     * @returns {string[]}
     */

  }, {
    key: "dirtyKeys",
    value: function ()
    /*: Array<string>*/
    {
      var pendingOps = this._getPendingOps();

      var keys = {};

      for (var i = 0; i < pendingOps.length; i++) {
        for (var _attr7 in pendingOps[i]) {
          keys[_attr7] = true;
        }
      }

      var dirtyObjects = this._getDirtyObjectAttributes();

      for (var _attr8 in dirtyObjects) {
        keys[_attr8] = true;
      }

      return (0, _keys.default)(keys);
    }
    /**
     * Returns true if the object has been fetched.
     *
     * @returns {boolean}
     */

  }, {
    key: "isDataAvailable",
    value: function ()
    /*: boolean*/
    {
      var serverData = this._getServerData();

      return !!(0, _keys.default)(serverData).length;
    }
    /**
     * Gets a Pointer referencing this Object.
     *
     * @returns {Pointer}
     */

  }, {
    key: "toPointer",
    value: function ()
    /*: Pointer*/
    {
      if (!this.id) {
        throw new Error('Cannot create a pointer to an unsaved ParseObject');
      }

      return {
        __type: 'Pointer',
        className: this.className,
        objectId: this.id
      };
    }
    /**
     * Gets a Pointer referencing this Object.
     *
     * @returns {Pointer}
     */

  }, {
    key: "toOfflinePointer",
    value: function ()
    /*: Pointer*/
    {
      if (!this._localId) {
        throw new Error('Cannot create a offline pointer to a saved ParseObject');
      }

      return {
        __type: 'Object',
        className: this.className,
        _localId: this._localId
      };
    }
    /**
     * Gets the value of an attribute.
     *
     * @param {string} attr The string name of an attribute.
     * @returns {*}
     */

  }, {
    key: "get",
    value: function (attr
    /*: string*/
    )
    /*: mixed*/
    {
      return this.attributes[attr];
    }
    /**
     * Gets a relation on the given class for the attribute.
     *
     * @param {string} attr The attribute to get the relation for.
     * @returns {Parse.Relation}
     */

  }, {
    key: "relation",
    value: function (attr
    /*: string*/
    )
    /*: ParseRelation*/
    {
      var value = this.get(attr);

      if (value) {
        if (!(value instanceof _ParseRelation.default)) {
          throw new Error("Called relation() on non-relation field ".concat(attr));
        }

        value._ensureParentAndKey(this, attr);

        return value;
      }

      return new _ParseRelation.default(this, attr);
    }
    /**
     * Gets the HTML-escaped value of an attribute.
     *
     * @param {string} attr The string name of an attribute.
     * @returns {string}
     */

  }, {
    key: "escape",
    value: function (attr
    /*: string*/
    )
    /*: string*/
    {
      var val = this.attributes[attr];

      if (val == null) {
        return '';
      }

      if (typeof val !== 'string') {
        if (typeof val.toString !== 'function') {
          return '';
        }

        val = val.toString();
      }

      return (0, _escape2.default)(val);
    }
    /**
     * Returns <code>true</code> if the attribute contains a value that is not
     * null or undefined.
     *
     * @param {string} attr The string name of the attribute.
     * @returns {boolean}
     */

  }, {
    key: "has",
    value: function (attr
    /*: string*/
    )
    /*: boolean*/
    {
      var attributes = this.attributes;

      if (attributes.hasOwnProperty(attr)) {
        return attributes[attr] != null;
      }

      return false;
    }
    /**
     * Sets a hash of model attributes on the object.
     *
     * <p>You can call it with an object containing keys and values, with one
     * key and value, or dot notation.  For example:<pre>
     *   gameTurn.set({
     *     player: player1,
     *     diceRoll: 2
     *   }, {
     *     error: function(gameTurnAgain, error) {
     *       // The set failed validation.
     *     }
     *   });
     *
     *   game.set("currentPlayer", player2, {
     *     error: function(gameTurnAgain, error) {
     *       // The set failed validation.
     *     }
     *   });
     *
     *   game.set("finished", true);</pre></p>
     *
     *   game.set("player.score", 10);</pre></p>
     *
     * @param {(string|object)} key The key to set.
     * @param {(string|object)} value The value to give it.
     * @param {object} options A set of options for the set.
     *     The only supported option is <code>error</code>.
     * @returns {(ParseObject|boolean)} true if the set succeeded.
     */

  }, {
    key: "set",
    value: function (key
    /*: mixed*/
    , value
    /*: mixed*/
    , options
    /*:: ?: mixed*/
    )
    /*: ParseObject | boolean*/
    {
      var changes = {};
      var newOps = {};

      if (key && (0, _typeof2.default)(key) === 'object') {
        changes = key;
        options = value;
      } else if (typeof key === 'string') {
        changes[key] = value;
      } else {
        return this;
      }

      options = options || {};
      var readonly = [];

      if (typeof this.constructor.readOnlyAttributes === 'function') {
        readonly = (0, _concat.default)(readonly).call(readonly, this.constructor.readOnlyAttributes());
      }

      for (var k in changes) {
        if (k === 'createdAt' || k === 'updatedAt') {
          // This property is read-only, but for legacy reasons we silently
          // ignore it
          continue;
        }

        if ((0, _indexOf.default)(readonly).call(readonly, k) > -1) {
          throw new Error("Cannot modify readonly attribute: ".concat(k));
        }

        if (options.unset) {
          newOps[k] = new _ParseOp.UnsetOp();
        } else if (changes[k] instanceof _ParseOp.Op) {
          newOps[k] = changes[k];
        } else if (changes[k] && (0, _typeof2.default)(changes[k]) === 'object' && typeof changes[k].__op === 'string') {
          newOps[k] = (0, _ParseOp.opFromJSON)(changes[k]);
        } else if (k === 'objectId' || k === 'id') {
          if (typeof changes[k] === 'string') {
            this.id = changes[k];
          }
        } else if (k === 'ACL' && (0, _typeof2.default)(changes[k]) === 'object' && !(changes[k] instanceof _ParseACL.default)) {
          newOps[k] = new _ParseOp.SetOp(new _ParseACL.default(changes[k]));
        } else if (changes[k] instanceof _ParseRelation.default) {
          var relation = new _ParseRelation.default(this, k);
          relation.targetClassName = changes[k].targetClassName;
          newOps[k] = new _ParseOp.SetOp(relation);
        } else {
          newOps[k] = new _ParseOp.SetOp(changes[k]);
        }
      }

      var currentAttributes = this.attributes; // Only set nested fields if exists

      var serverData = this._getServerData();

      if (typeof key === 'string' && (0, _includes.default)(key).call(key, '.')) {
        var field = key.split('.')[0];

        if (!serverData[field]) {
          return this;
        }
      } // Calculate new values


      var newValues = {};

      for (var _attr9 in newOps) {
        if (newOps[_attr9] instanceof _ParseOp.RelationOp) {
          newValues[_attr9] = newOps[_attr9].applyTo(currentAttributes[_attr9], this, _attr9);
        } else if (!(newOps[_attr9] instanceof _ParseOp.UnsetOp)) {
          newValues[_attr9] = newOps[_attr9].applyTo(currentAttributes[_attr9]);
        }
      } // Validate changes


      if (!options.ignoreValidation) {
        var validation = this.validate(newValues);

        if (validation) {
          if (typeof options.error === 'function') {
            options.error(this, validation);
          }

          return false;
        }
      } // Consolidate Ops


      var pendingOps = this._getPendingOps();

      var last = pendingOps.length - 1;

      var stateController = _CoreManager.default.getObjectStateController();

      for (var _attr10 in newOps) {
        var nextOp = newOps[_attr10].mergeWith(pendingOps[last][_attr10]);

        stateController.setPendingOp(this._getStateIdentifier(), _attr10, nextOp);
      }

      return this;
    }
    /**
     * Remove an attribute from the model. This is a noop if the attribute doesn't
     * exist.
     *
     * @param {string} attr The string name of an attribute.
     * @param options
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "unset",
    value: function (attr
    /*: string*/
    , options
    /*:: ?: { [opt: string]: mixed }*/
    )
    /*: ParseObject | boolean*/
    {
      options = options || {};
      options.unset = true;
      return this.set(attr, null, options);
    }
    /**
     * Atomically increments the value of the given attribute the next time the
     * object is saved. If no amount is specified, 1 is used by default.
     *
     * @param attr {String} The key.
     * @param amount {Number} The amount to increment by (optional).
     * @returns {(ParseObject|boolean)}
     */

  }, {
    key: "increment",
    value: function (attr
    /*: string*/
    , amount
    /*:: ?: number*/
    )
    /*: ParseObject | boolean*/
    {
      if (typeof amount === 'undefined') {
        amount = 1;
      }

      if (typeof amount !== 'number') {
        throw new Error('Cannot increment by a non-numeric amount.');
      }

      return this.set(attr, new _ParseOp.IncrementOp(amount));
    }
    /**
     * Atomically decrements the value of the given attribute the next time the
     * object is saved. If no amount is specified, 1 is used by default.
     *
     * @param attr {String} The key.
     * @param amount {Number} The amount to decrement by (optional).
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "decrement",
    value: function (attr
    /*: string*/
    , amount
    /*:: ?: number*/
    )
    /*: ParseObject | boolean*/
    {
      if (typeof amount === 'undefined') {
        amount = 1;
      }

      if (typeof amount !== 'number') {
        throw new Error('Cannot decrement by a non-numeric amount.');
      }

      return this.set(attr, new _ParseOp.IncrementOp(amount * -1));
    }
    /**
     * Atomically add an object to the end of the array associated with a given
     * key.
     *
     * @param attr {String} The key.
     * @param item {} The item to add.
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "add",
    value: function (attr
    /*: string*/
    , item
    /*: mixed*/
    )
    /*: ParseObject | boolean*/
    {
      return this.set(attr, new _ParseOp.AddOp([item]));
    }
    /**
     * Atomically add the objects to the end of the array associated with a given
     * key.
     *
     * @param attr {String} The key.
     * @param items {Object[]} The items to add.
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "addAll",
    value: function (attr
    /*: string*/
    , items
    /*: Array<mixed>*/
    )
    /*: ParseObject | boolean*/
    {
      return this.set(attr, new _ParseOp.AddOp(items));
    }
    /**
     * Atomically add an object to the array associated with a given key, only
     * if it is not already present in the array. The position of the insert is
     * not guaranteed.
     *
     * @param attr {String} The key.
     * @param item {} The object to add.
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "addUnique",
    value: function (attr
    /*: string*/
    , item
    /*: mixed*/
    )
    /*: ParseObject | boolean*/
    {
      return this.set(attr, new _ParseOp.AddUniqueOp([item]));
    }
    /**
     * Atomically add the objects to the array associated with a given key, only
     * if it is not already present in the array. The position of the insert is
     * not guaranteed.
     *
     * @param attr {String} The key.
     * @param items {Object[]} The objects to add.
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "addAllUnique",
    value: function (attr
    /*: string*/
    , items
    /*: Array<mixed>*/
    )
    /*: ParseObject | boolean*/
    {
      return this.set(attr, new _ParseOp.AddUniqueOp(items));
    }
    /**
     * Atomically remove all instances of an object from the array associated
     * with a given key.
     *
     * @param attr {String} The key.
     * @param item {} The object to remove.
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "remove",
    value: function (attr
    /*: string*/
    , item
    /*: mixed*/
    )
    /*: ParseObject | boolean*/
    {
      return this.set(attr, new _ParseOp.RemoveOp([item]));
    }
    /**
     * Atomically remove all instances of the objects from the array associated
     * with a given key.
     *
     * @param attr {String} The key.
     * @param items {Object[]} The object to remove.
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "removeAll",
    value: function (attr
    /*: string*/
    , items
    /*: Array<mixed>*/
    )
    /*: ParseObject | boolean*/
    {
      return this.set(attr, new _ParseOp.RemoveOp(items));
    }
    /**
     * Returns an instance of a subclass of Parse.Op describing what kind of
     * modification has been performed on this field since the last time it was
     * saved. For example, after calling object.increment("x"), calling
     * object.op("x") would return an instance of Parse.Op.Increment.
     *
     * @param attr {String} The key.
     * @returns {Parse.Op} The operation, or undefined if none.
     */

  }, {
    key: "op",
    value: function (attr
    /*: string*/
    )
    /*: ?Op*/
    {
      var pending = this._getPendingOps();

      for (var i = pending.length; i--;) {
        if (pending[i][attr]) {
          return pending[i][attr];
        }
      }
    }
    /**
     * Creates a new model with identical attributes to this one.
     *
     * @returns {Parse.Object}
     */

  }, {
    key: "clone",
    value: function clone()
    /*: any*/
    {
      var clone = new this.constructor();

      if (!clone.className) {
        clone.className = this.className;
      }

      var attributes = this.attributes;

      if (typeof this.constructor.readOnlyAttributes === 'function') {
        var readonly = this.constructor.readOnlyAttributes() || []; // Attributes are frozen, so we have to rebuild an object,
        // rather than delete readonly keys

        var copy = {};

        for (var a in attributes) {
          if ((0, _indexOf.default)(readonly).call(readonly, a) < 0) {
            copy[a] = attributes[a];
          }
        }

        attributes = copy;
      }

      if (clone.set) {
        clone.set(attributes);
      }

      return clone;
    }
    /**
     * Creates a new instance of this object. Not to be confused with clone()
     *
     * @returns {Parse.Object}
     */

  }, {
    key: "newInstance",
    value: function ()
    /*: any*/
    {
      var clone = new this.constructor();

      if (!clone.className) {
        clone.className = this.className;
      }

      clone.id = this.id;

      if (singleInstance) {
        // Just return an object with the right id
        return clone;
      }

      var stateController = _CoreManager.default.getObjectStateController();

      if (stateController) {
        stateController.duplicateState(this._getStateIdentifier(), clone._getStateIdentifier());
      }

      return clone;
    }
    /**
     * Returns true if this object has never been saved to Parse.
     *
     * @returns {boolean}
     */

  }, {
    key: "isNew",
    value: function ()
    /*: boolean*/
    {
      return !this.id;
    }
    /**
     * Returns true if this object was created by the Parse server when the
     * object might have already been there (e.g. in the case of a Facebook
     * login)
     *
     * @returns {boolean}
     */

  }, {
    key: "existed",
    value: function ()
    /*: boolean*/
    {
      if (!this.id) {
        return false;
      }

      var stateController = _CoreManager.default.getObjectStateController();

      var state = stateController.getState(this._getStateIdentifier());

      if (state) {
        return state.existed;
      }

      return false;
    }
    /**
     * Returns true if this object exists on the Server
     *
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @returns {Promise<boolean>} A boolean promise that is fulfilled if object exists.
     */

  }, {
    key: "exists",
    value: function () {
      var _exists = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(options
      /*:: ?: RequestOptions*/
      ) {
        var query;
        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.id) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", false);

              case 2:
                _context2.prev = 2;
                query = new _ParseQuery.default(this.className);
                _context2.next = 6;
                return query.get(this.id, options);

              case 6:
                return _context2.abrupt("return", true);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);

                if (!(_context2.t0.code === _ParseError.default.OBJECT_NOT_FOUND)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", false);

              case 13:
                throw _context2.t0;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      return function () {
        return _exists.apply(this, arguments);
      };
    }()
    /**
     * Checks if the model is currently in a valid state.
     *
     * @returns {boolean}
     */

  }, {
    key: "isValid",
    value: function ()
    /*: boolean*/
    {
      return !this.validate(this.attributes);
    }
    /**
     * You should not call this function directly unless you subclass
     * <code>Parse.Object</code>, in which case you can override this method
     * to provide additional validation on <code>set</code> and
     * <code>save</code>.  Your implementation should return
     *
     * @param {object} attrs The current data to validate.
     * @returns {Parse.Error|boolean} False if the data is valid.  An error object otherwise.
     * @see Parse.Object#set
     */

  }, {
    key: "validate",
    value: function (attrs
    /*: AttributeMap*/
    )
    /*: ParseError | boolean*/
    {
      if (attrs.hasOwnProperty('ACL') && !(attrs.ACL instanceof _ParseACL.default)) {
        return new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'ACL must be a Parse ACL.');
      }

      for (var _key in attrs) {
        if (!/^[A-Za-z][0-9A-Za-z_.]*$/.test(_key)) {
          return new _ParseError.default(_ParseError.default.INVALID_KEY_NAME);
        }
      }

      return false;
    }
    /**
     * Returns the ACL for this object.
     *
     * @returns {Parse.ACL} An instance of Parse.ACL.
     * @see Parse.Object#get
     */

  }, {
    key: "getACL",
    value: function ()
    /*: ?ParseACL*/
    {
      var acl = this.get('ACL');

      if (acl instanceof _ParseACL.default) {
        return acl;
      }

      return null;
    }
    /**
     * Sets the ACL to be used for this object.
     *
     * @param {Parse.ACL} acl An instance of Parse.ACL.
     * @param {object} options
     * @returns {(ParseObject | boolean)} Whether the set passed validation.
     * @see Parse.Object#set
     */

  }, {
    key: "setACL",
    value: function (acl
    /*: ParseACL*/
    , options
    /*:: ?: mixed*/
    )
    /*: ParseObject | boolean*/
    {
      return this.set('ACL', acl, options);
    }
    /**
     * Clears any (or specific) changes to this object made since the last call to save()
     *
     * @param {string} [keys] - specify which fields to revert
     */

  }, {
    key: "revert",
    value: function ()
    /*: void*/
    {
      var keysToRevert;

      for (var _len = arguments.length, keys = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      if (keys.length) {
        keysToRevert = [];

        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _key3 = _step.value;

            if (typeof _key3 === 'string') {
              keysToRevert.push(_key3);
            } else {
              throw new Error('Parse.Object#revert expects either no, or a list of string, arguments.');
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this._clearPendingOps(keysToRevert);
    }
    /**
     * Clears all attributes on a model
     *
     * @returns {(ParseObject | boolean)}
     */

  }, {
    key: "clear",
    value: function ()
    /*: ParseObject | boolean*/
    {
      var attributes = this.attributes;
      var erasable = {};
      var readonly = ['createdAt', 'updatedAt'];

      if (typeof this.constructor.readOnlyAttributes === 'function') {
        readonly = (0, _concat.default)(readonly).call(readonly, this.constructor.readOnlyAttributes());
      }

      for (var _attr11 in attributes) {
        if ((0, _indexOf.default)(readonly).call(readonly, _attr11) < 0) {
          erasable[_attr11] = true;
        }
      }

      return this.set(erasable, {
        unset: true
      });
    }
    /**
     * Fetch the model from the server. If the server's representation of the
     * model differs from its current attributes, they will be overriden.
     *
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     *   <li>include: The name(s) of the key(s) to include. Can be a string, an array of strings,
     *       or an array of array of strings.
     *   <li>context: A dictionary that is accessible in Cloud Code `beforeFind` trigger.
     * </ul>
     * @returns {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */

  }, {
    key: "fetch",
    value: function (options
    /*: RequestOptions*/
    )
    /*: Promise*/
    {
      options = options || {};
      var fetchOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        fetchOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        fetchOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
        fetchOptions.context = options.context;
      }

      if (options.hasOwnProperty('include')) {
        fetchOptions.include = [];

        if ((0, _isArray.default)(options.include)) {
          var _context3;

          (0, _forEach.default)(_context3 = options.include).call(_context3, function (key) {
            if ((0, _isArray.default)(key)) {
              var _context4;

              fetchOptions.include = (0, _concat.default)(_context4 = fetchOptions.include).call(_context4, key);
            } else {
              fetchOptions.include.push(key);
            }
          });
        } else {
          fetchOptions.include.push(options.include);
        }
      }

      var controller = _CoreManager.default.getObjectController();

      return controller.fetch(this, true, fetchOptions);
    }
    /**
     * Fetch the model from the server. If the server's representation of the
     * model differs from its current attributes, they will be overriden.
     *
     * Includes nested Parse.Objects for the provided key. You can use dot
     * notation to specify which fields in the included object are also fetched.
     *
     * @param {string | Array<string | Array<string>>} keys The name(s) of the key(s) to include.
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @returns {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */

  }, {
    key: "fetchWithInclude",
    value: function (keys
    /*: String | Array<string | Array<string>>*/
    , options
    /*: RequestOptions*/
    )
    /*: Promise*/
    {
      options = options || {};
      options.include = keys;
      return this.fetch(options);
    }
    /**
     * Set a hash of model attributes, and save the model to the server.
     * updatedAt will be updated when the request returns.
     * You can either call it as:<pre>
     * object.save();</pre>
     * or<pre>
     * object.save(attrs);</pre>
     * or<pre>
     * object.save(null, options);</pre>
     * or<pre>
     * object.save(attrs, options);</pre>
     * or<pre>
     * object.save(key, value, options);</pre>
     *
     * For example, <pre>
     * gameTurn.save({
     * player: "Jake Cutter",
     * diceRoll: 2
     * }).then(function(gameTurnAgain) {
     * // The save was successful.
     * }, function(error) {
     * // The save failed.  Error is an instance of Parse.Error.
     * });</pre>
     *
     * @param {string | object | null} [arg1]
     * Valid options are:<ul>
     * <li>`Object` - Key/value pairs to update on the object.</li>
     * <li>`String` Key - Key of attribute to update (requires arg2 to also be string)</li>
     * <li>`null` - Passing null for arg1 allows you to save the object with options passed in arg2.</li>
     * </ul>
     * @param {string | object} [arg2]
     * <ul>
     * <li>`String` Value - If arg1 was passed as a key, arg2 is the value that should be set on that key.</li>
     * <li>`Object` Options - Valid options are:
     * <ul>
     * <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     * be used for this request.
     * <li>sessionToken: A valid session token, used for making a request on
     * behalf of a specific user.
     * <li>cascadeSave: If `false`, nested objects will not be saved (default is `true`).
     * <li>context: A dictionary that is accessible in Cloud Code `beforeSave` and `afterSave` triggers.
     * </ul>
     * </li>
     * </ul>
     * @param {object} [arg3]
     * Used to pass option parameters to method if arg1 and arg2 were both passed as strings.
     * Valid options are:
     * <ul>
     * <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     * be used for this request.
     * <li>sessionToken: A valid session token, used for making a request on
     * behalf of a specific user.
     * <li>cascadeSave: If `false`, nested objects will not be saved (default is `true`).
     * <li>context: A dictionary that is accessible in Cloud Code `beforeSave` and `afterSave` triggers.
     * </ul>
     * @returns {Promise} A promise that is fulfilled when the save
     * completes.
     */

  }, {
    key: "save",
    value: function (arg1
    /*: ?string | { [attr: string]: mixed }*/
    , arg2
    /*: SaveOptions | mixed*/
    , arg3
    /*:: ?: SaveOptions*/
    )
    /*: Promise*/
    {
      var _this = this;

      var attrs;
      var options;

      if ((0, _typeof2.default)(arg1) === 'object' || typeof arg1 === 'undefined') {
        attrs = arg1;

        if ((0, _typeof2.default)(arg2) === 'object') {
          options = arg2;
        }
      } else {
        attrs = {};
        attrs[arg1] = arg2;
        options = arg3;
      }

      if (attrs) {
        var validation = this.validate(attrs);

        if (validation) {
          return _promise.default.reject(validation);
        }

        this.set(attrs, options);
      }

      options = options || {};
      var saveOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        saveOptions.useMasterKey = !!options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken') && typeof options.sessionToken === 'string') {
        saveOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('installationId') && typeof options.installationId === 'string') {
        saveOptions.installationId = options.installationId;
      }

      if (options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
        saveOptions.context = options.context;
      }

      var controller = _CoreManager.default.getObjectController();

      var unsaved = options.cascadeSave !== false ? (0, _unsavedChildren.default)(this) : null;
      return controller.save(unsaved, saveOptions).then(function () {
        return controller.save(_this, saveOptions);
      });
    }
    /**
     * Destroy this model on the server if it was already persisted.
     *
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     *   <li>context: A dictionary that is accessible in Cloud Code `beforeDelete` and `afterDelete` triggers.
     * </ul>
     * @returns {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */

  }, {
    key: "destroy",
    value: function (options
    /*: RequestOptions*/
    )
    /*: Promise*/
    {
      options = options || {};
      var destroyOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        destroyOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        destroyOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
        destroyOptions.context = options.context;
      }

      if (!this.id) {
        return _promise.default.resolve();
      }

      return _CoreManager.default.getObjectController().destroy(this, destroyOptions);
    }
    /**
     * Asynchronously stores the object and every object it points to in the local datastore,
     * recursively, using a default pin name: _default.
     *
     * If those other objects have not been fetched from Parse, they will not be stored.
     * However, if they have changed data, all the changes will be retained.
     *
     * <pre>
     * await object.pin();
     * </pre>
     *
     * To retrieve object:
     * <code>query.fromLocalDatastore()</code> or <code>query.fromPin()</code>
     *
     * @returns {Promise} A promise that is fulfilled when the pin completes.
     */

  }, {
    key: "pin",
    value: function ()
    /*: Promise<void>*/
    {
      return ParseObject.pinAllWithName(_LocalDatastoreUtils.DEFAULT_PIN, [this]);
    }
    /**
     * Asynchronously removes the object and every object it points to in the local datastore,
     * recursively, using a default pin name: _default.
     *
     * <pre>
     * await object.unPin();
     * </pre>
     *
     * @returns {Promise} A promise that is fulfilled when the unPin completes.
     */

  }, {
    key: "unPin",
    value: function ()
    /*: Promise<void>*/
    {
      return ParseObject.unPinAllWithName(_LocalDatastoreUtils.DEFAULT_PIN, [this]);
    }
    /**
     * Asynchronously returns if the object is pinned
     *
     * <pre>
     * const isPinned = await object.isPinned();
     * </pre>
     *
     * @returns {Promise<boolean>} A boolean promise that is fulfilled if object is pinned.
     */

  }, {
    key: "isPinned",
    value: function () {
      var _isPinned = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var localDatastore, objectKey, pin;
        return _regenerator.default.wrap(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                localDatastore = _CoreManager.default.getLocalDatastore();

                if (localDatastore.isEnabled) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", _promise.default.reject('Parse.enableLocalDatastore() must be called first'));

              case 3:
                objectKey = localDatastore.getKeyForObject(this);
                _context5.next = 6;
                return localDatastore.fromPinWithName(objectKey);

              case 6:
                pin = _context5.sent;
                return _context5.abrupt("return", pin.length > 0);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee2, this);
      }));

      return function () {
        return _isPinned.apply(this, arguments);
      };
    }()
    /**
     * Asynchronously stores the objects and every object they point to in the local datastore, recursively.
     *
     * If those other objects have not been fetched from Parse, they will not be stored.
     * However, if they have changed data, all the changes will be retained.
     *
     * <pre>
     * await object.pinWithName(name);
     * </pre>
     *
     * To retrieve object:
     * <code>query.fromLocalDatastore()</code> or <code>query.fromPinWithName(name)</code>
     *
     * @param {string} name Name of Pin.
     * @returns {Promise} A promise that is fulfilled when the pin completes.
     */

  }, {
    key: "pinWithName",
    value: function (name
    /*: string*/
    )
    /*: Promise<void>*/
    {
      return ParseObject.pinAllWithName(name, [this]);
    }
    /**
     * Asynchronously removes the object and every object it points to in the local datastore, recursively.
     *
     * <pre>
     * await object.unPinWithName(name);
     * </pre>
     *
     * @param {string} name Name of Pin.
     * @returns {Promise} A promise that is fulfilled when the unPin completes.
     */

  }, {
    key: "unPinWithName",
    value: function (name
    /*: string*/
    )
    /*: Promise<void>*/
    {
      return ParseObject.unPinAllWithName(name, [this]);
    }
    /**
     * Asynchronously loads data from the local datastore into this object.
     *
     * <pre>
     * await object.fetchFromLocalDatastore();
     * </pre>
     *
     * You can create an unfetched pointer with <code>Parse.Object.createWithoutData()</code>
     * and then call <code>fetchFromLocalDatastore()</code> on it.
     *
     * @returns {Promise} A promise that is fulfilled when the fetch completes.
     */

  }, {
    key: "fetchFromLocalDatastore",
    value: function () {
      var _fetchFromLocalDatastore = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var localDatastore, objectKey, pinned, result;
        return _regenerator.default.wrap(function (_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                localDatastore = _CoreManager.default.getLocalDatastore();

                if (localDatastore.isEnabled) {
                  _context6.next = 3;
                  break;
                }

                throw new Error('Parse.enableLocalDatastore() must be called first');

              case 3:
                objectKey = localDatastore.getKeyForObject(this);
                _context6.next = 6;
                return localDatastore._serializeObject(objectKey);

              case 6:
                pinned = _context6.sent;

                if (pinned) {
                  _context6.next = 9;
                  break;
                }

                throw new Error('Cannot fetch an unsaved ParseObject');

              case 9:
                result = ParseObject.fromJSON(pinned);

                this._finishFetch(result.toJSON());

                return _context6.abrupt("return", this);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee3, this);
      }));

      return function () {
        return _fetchFromLocalDatastore.apply(this, arguments);
      };
    }()
    /** Static methods * */

  }], [{
    key: "_clearAllState",
    value: function () {
      var stateController = _CoreManager.default.getObjectStateController();

      stateController.clearAllState();
    }
    /**
     * Fetches the given list of Parse.Object.
     * If any error is encountered, stops and calls the error handler.
     *
     * <pre>
     *   Parse.Object.fetchAll([object1, object2, ...])
     *    .then((list) => {
     *      // All the objects were fetched.
     *    }, (error) => {
     *      // An error occurred while fetching one of the objects.
     *    });
     * </pre>
     *
     * @param {Array} list A list of <code>Parse.Object</code>.
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     *   <li>include: The name(s) of the key(s) to include. Can be a string, an array of strings,
     *       or an array of array of strings.
     * </ul>
     * @static
     * @returns {Parse.Object[]}
     */

  }, {
    key: "fetchAll",
    value: function (list
    /*: Array<ParseObject>*/
    ) {
      var options
      /*: RequestOptions*/
      = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var queryOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        queryOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        queryOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('include')) {
        queryOptions.include = ParseObject.handleIncludeOptions(options);
      }

      return _CoreManager.default.getObjectController().fetch(list, true, queryOptions);
    }
    /**
     * Fetches the given list of Parse.Object.
     *
     * Includes nested Parse.Objects for the provided key. You can use dot
     * notation to specify which fields in the included object are also fetched.
     *
     * If any error is encountered, stops and calls the error handler.
     *
     * <pre>
     *   Parse.Object.fetchAllWithInclude([object1, object2, ...], [pointer1, pointer2, ...])
     *    .then((list) => {
     *      // All the objects were fetched.
     *    }, (error) => {
     *      // An error occurred while fetching one of the objects.
     *    });
     * </pre>
     *
     * @param {Array} list A list of <code>Parse.Object</code>.
     * @param {string | Array<string | Array<string>>} keys The name(s) of the key(s) to include.
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @static
     * @returns {Parse.Object[]}
     */

  }, {
    key: "fetchAllWithInclude",
    value: function (list
    /*: Array<ParseObject>*/
    , keys
    /*: String | Array<string | Array<string>>*/
    , options
    /*: RequestOptions*/
    ) {
      options = options || {};
      options.include = keys;
      return ParseObject.fetchAll(list, options);
    }
    /**
     * Fetches the given list of Parse.Object if needed.
     * If any error is encountered, stops and calls the error handler.
     *
     * Includes nested Parse.Objects for the provided key. You can use dot
     * notation to specify which fields in the included object are also fetched.
     *
     * If any error is encountered, stops and calls the error handler.
     *
     * <pre>
     *   Parse.Object.fetchAllIfNeededWithInclude([object1, object2, ...], [pointer1, pointer2, ...])
     *    .then((list) => {
     *      // All the objects were fetched.
     *    }, (error) => {
     *      // An error occurred while fetching one of the objects.
     *    });
     * </pre>
     *
     * @param {Array} list A list of <code>Parse.Object</code>.
     * @param {string | Array<string | Array<string>>} keys The name(s) of the key(s) to include.
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @static
     * @returns {Parse.Object[]}
     */

  }, {
    key: "fetchAllIfNeededWithInclude",
    value: function (list
    /*: Array<ParseObject>*/
    , keys
    /*: String | Array<string | Array<string>>*/
    , options
    /*: RequestOptions*/
    ) {
      options = options || {};
      options.include = keys;
      return ParseObject.fetchAllIfNeeded(list, options);
    }
    /**
     * Fetches the given list of Parse.Object if needed.
     * If any error is encountered, stops and calls the error handler.
     *
     * <pre>
     *   Parse.Object.fetchAllIfNeeded([object1, ...])
     *    .then((list) => {
     *      // Objects were fetched and updated.
     *    }, (error) => {
     *      // An error occurred while fetching one of the objects.
     *    });
     * </pre>
     *
     * @param {Array} list A list of <code>Parse.Object</code>.
     * @param {object} options
     * @static
     * @returns {Parse.Object[]}
     */

  }, {
    key: "fetchAllIfNeeded",
    value: function (list
    /*: Array<ParseObject>*/
    , options) {
      options = options || {};
      var queryOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        queryOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        queryOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('include')) {
        queryOptions.include = ParseObject.handleIncludeOptions(options);
      }

      return _CoreManager.default.getObjectController().fetch(list, false, queryOptions);
    }
  }, {
    key: "handleIncludeOptions",
    value: function (options) {
      var include = [];

      if ((0, _isArray.default)(options.include)) {
        var _context7;

        (0, _forEach.default)(_context7 = options.include).call(_context7, function (key) {
          if ((0, _isArray.default)(key)) {
            include = (0, _concat.default)(include).call(include, key);
          } else {
            include.push(key);
          }
        });
      } else {
        include.push(options.include);
      }

      return include;
    }
    /**
     * Destroy the given list of models on the server if it was already persisted.
     *
     * <p>Unlike saveAll, if an error occurs while deleting an individual model,
     * this method will continue trying to delete the rest of the models if
     * possible, except in the case of a fatal error like a connection error.
     *
     * <p>In particular, the Parse.Error object returned in the case of error may
     * be one of two types:
     *
     * <ul>
     * <li>A Parse.Error.AGGREGATE_ERROR. This object's "errors" property is an
     * array of other Parse.Error objects. Each error object in this array
     * has an "object" property that references the object that could not be
     * deleted (for instance, because that object could not be found).</li>
     * <li>A non-aggregate Parse.Error. This indicates a serious error that
     * caused the delete operation to be aborted partway through (for
     * instance, a connection failure in the middle of the delete).</li>
     * </ul>
     *
     * <pre>
     * Parse.Object.destroyAll([object1, object2, ...])
     * .then((list) => {
     * // All the objects were deleted.
     * }, (error) => {
     * // An error occurred while deleting one or more of the objects.
     * // If this is an aggregate error, then we can inspect each error
     * // object individually to determine the reason why a particular
     * // object was not deleted.
     * if (error.code === Parse.Error.AGGREGATE_ERROR) {
     * for (var i = 0; i < error.errors.length; i++) {
     * console.log("Couldn't delete " + error.errors[i].object.id +
     * "due to " + error.errors[i].message);
     * }
     * } else {
     * console.log("Delete aborted because of " + error.message);
     * }
     * });
     * </pre>
     *
     * @param {Array} list A list of <code>Parse.Object</code>.
     * @param {object} options
     * @static
     * @returns {Promise} A promise that is fulfilled when the destroyAll
     * completes.
     */

  }, {
    key: "destroyAll",
    value: function (list
    /*: Array<ParseObject>*/
    ) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var destroyOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        destroyOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        destroyOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('batchSize') && typeof options.batchSize === 'number') {
        destroyOptions.batchSize = options.batchSize;
      }

      if (options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
        destroyOptions.context = options.context;
      }

      return _CoreManager.default.getObjectController().destroy(list, destroyOptions);
    }
    /**
     * Saves the given list of Parse.Object.
     * If any error is encountered, stops and calls the error handler.
     *
     * <pre>
     * Parse.Object.saveAll([object1, object2, ...])
     * .then((list) => {
     * // All the objects were saved.
     * }, (error) => {
     * // An error occurred while saving one of the objects.
     * });
     * </pre>
     *
     * @param {Array} list A list of <code>Parse.Object</code>.
     * @param {object} options
     * @static
     * @returns {Parse.Object[]}
     */

  }, {
    key: "saveAll",
    value: function (list
    /*: Array<ParseObject>*/
    ) {
      var options
      /*: RequestOptions*/
      = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var saveOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        saveOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        saveOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('batchSize') && typeof options.batchSize === 'number') {
        saveOptions.batchSize = options.batchSize;
      }

      if (options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
        saveOptions.context = options.context;
      }

      return _CoreManager.default.getObjectController().save(list, saveOptions);
    }
    /**
     * Creates a reference to a subclass of Parse.Object with the given id. This
     * does not exist on Parse.Object, only on subclasses.
     *
     * <p>A shortcut for: <pre>
     *  var Foo = Parse.Object.extend("Foo");
     *  var pointerToFoo = new Foo();
     *  pointerToFoo.id = "myObjectId";
     * </pre>
     *
     * @param {string} id The ID of the object to create a reference to.
     * @static
     * @returns {Parse.Object} A Parse.Object reference.
     */

  }, {
    key: "createWithoutData",
    value: function (id
    /*: string*/
    ) {
      var obj = new this();
      obj.id = id;
      return obj;
    }
    /**
     * Creates a new instance of a Parse Object from a JSON representation.
     *
     * @param {object} json The JSON map of the Object's data
     * @param {boolean} override In single instance mode, all old server data
     *   is overwritten if this is set to true
     * @static
     * @returns {Parse.Object} A Parse.Object reference
     */

  }, {
    key: "fromJSON",
    value: function (json
    /*: any*/
    , override
    /*:: ?: boolean*/
    ) {
      if (!json.className) {
        throw new Error('Cannot create an object without a className');
      }

      var constructor = classMap[json.className];
      var o = constructor ? new constructor() : new ParseObject(json.className);
      var otherAttributes = {};

      for (var _attr12 in json) {
        if (_attr12 !== 'className' && _attr12 !== '__type') {
          otherAttributes[_attr12] = json[_attr12];
        }
      }

      if (override) {
        // id needs to be set before clearServerData can work
        if (otherAttributes.objectId) {
          o.id = otherAttributes.objectId;
        }

        var preserved = null;

        if (typeof o._preserveFieldsOnFetch === 'function') {
          preserved = o._preserveFieldsOnFetch();
        }

        o._clearServerData();

        if (preserved) {
          o._finishFetch(preserved);
        }
      }

      o._finishFetch(otherAttributes);

      if (json.objectId) {
        o._setExisted(true);
      }

      return o;
    }
    /**
     * Registers a subclass of Parse.Object with a specific class name.
     * When objects of that class are retrieved from a query, they will be
     * instantiated with this subclass.
     * This is only necessary when using ES6 subclassing.
     *
     * @param {string} className The class name of the subclass
     * @param {Function} constructor The subclass
     */

  }, {
    key: "registerSubclass",
    value: function (className
    /*: string*/
    , constructor
    /*: any*/
    ) {
      if (typeof className !== 'string') {
        throw new TypeError('The first argument must be a valid class name.');
      }

      if (typeof constructor === 'undefined') {
        throw new TypeError('You must supply a subclass constructor.');
      }

      if (typeof constructor !== 'function') {
        throw new TypeError('You must register the subclass constructor. ' + 'Did you attempt to register an instance of the subclass?');
      }

      classMap[className] = constructor;

      if (!constructor.className) {
        constructor.className = className;
      }
    }
    /**
     * Creates a new subclass of Parse.Object for the given Parse class name.
     *
     * <p>Every extension of a Parse class will inherit from the most recent
     * previous extension of that class. When a Parse.Object is automatically
     * created by parsing JSON, it will use the most recent extension of that
     * class.</p>
     *
     * <p>You should call either:<pre>
     *     var MyClass = Parse.Object.extend("MyClass", {
     *         <i>Instance methods</i>,
     *         initialize: function(attrs, options) {
     *             this.someInstanceProperty = [],
     *             <i>Other instance properties</i>
     *         }
     *     }, {
     *         <i>Class properties</i>
     *     });</pre>
     * or, for Backbone compatibility:<pre>
     *     var MyClass = Parse.Object.extend({
     *         className: "MyClass",
     *         <i>Instance methods</i>,
     *         initialize: function(attrs, options) {
     *             this.someInstanceProperty = [],
     *             <i>Other instance properties</i>
     *         }
     *     }, {
     *         <i>Class properties</i>
     *     });</pre></p>
     *
     * @param {string} className The name of the Parse class backing this model.
     * @param {object} protoProps Instance properties to add to instances of the
     *     class returned from this method.
     * @param {object} classProps Class properties to add the class returned from
     *     this method.
     * @returns {Parse.Object} A new subclass of Parse.Object.
     */

  }, {
    key: "extend",
    value: function (className
    /*: any*/
    , protoProps
    /*: any*/
    , classProps
    /*: any*/
    ) {
      if (typeof className !== 'string') {
        if (className && typeof className.className === 'string') {
          return ParseObject.extend(className.className, className, protoProps);
        }

        throw new Error("Parse.Object.extend's first argument should be the className.");
      }

      var adjustedClassName = className;

      if (adjustedClassName === 'User' && _CoreManager.default.get('PERFORM_USER_REWRITE')) {
        adjustedClassName = '_User';
      }

      var parentProto = ParseObject.prototype;

      if (this.hasOwnProperty('__super__') && this.__super__) {
        parentProto = this.prototype;
      } else if (classMap[adjustedClassName]) {
        parentProto = classMap[adjustedClassName].prototype;
      }

      var ParseObjectSubclass = function (attributes, options) {
        this.className = adjustedClassName;
        this._objCount = objectCount++; // Enable legacy initializers

        if (typeof this.initialize === 'function') {
          this.initialize.apply(this, arguments);
        }

        if (attributes && (0, _typeof2.default)(attributes) === 'object') {
          if (!this.set(attributes || {}, options)) {
            throw new Error("Can't create an invalid Parse Object");
          }
        }
      };

      ParseObjectSubclass.className = adjustedClassName;
      ParseObjectSubclass.__super__ = parentProto;
      ParseObjectSubclass.prototype = (0, _create.default)(parentProto, {
        constructor: {
          value: ParseObjectSubclass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });

      if (protoProps) {
        for (var prop in protoProps) {
          if (prop !== 'className') {
            (0, _defineProperty3.default)(ParseObjectSubclass.prototype, prop, {
              value: protoProps[prop],
              enumerable: false,
              writable: true,
              configurable: true
            });
          }
        }
      }

      if (classProps) {
        for (var _prop in classProps) {
          if (_prop !== 'className') {
            (0, _defineProperty3.default)(ParseObjectSubclass, _prop, {
              value: classProps[_prop],
              enumerable: false,
              writable: true,
              configurable: true
            });
          }
        }
      }

      ParseObjectSubclass.extend = function (name, protoProps, classProps) {
        if (typeof name === 'string') {
          return ParseObject.extend.call(ParseObjectSubclass, name, protoProps, classProps);
        }

        return ParseObject.extend.call(ParseObjectSubclass, adjustedClassName, name, protoProps);
      };

      ParseObjectSubclass.createWithoutData = ParseObject.createWithoutData;
      classMap[adjustedClassName] = ParseObjectSubclass;
      return ParseObjectSubclass;
    }
    /**
     * Enable single instance objects, where any local objects with the same Id
     * share the same attributes, and stay synchronized with each other.
     * This is disabled by default in server environments, since it can lead to
     * security issues.
     *
     * @static
     */

  }, {
    key: "enableSingleInstance",
    value: function () {
      singleInstance = true;

      _CoreManager.default.setObjectStateController(SingleInstanceStateController);
    }
    /**
     * Disable single instance objects, where any local objects with the same Id
     * share the same attributes, and stay synchronized with each other.
     * When disabled, you can have two instances of the same object in memory
     * without them sharing attributes.
     *
     * @static
     */

  }, {
    key: "disableSingleInstance",
    value: function () {
      singleInstance = false;

      _CoreManager.default.setObjectStateController(UniqueInstanceStateController);
    }
    /**
     * Asynchronously stores the objects and every object they point to in the local datastore,
     * recursively, using a default pin name: _default.
     *
     * If those other objects have not been fetched from Parse, they will not be stored.
     * However, if they have changed data, all the changes will be retained.
     *
     * <pre>
     * await Parse.Object.pinAll([...]);
     * </pre>
     *
     * To retrieve object:
     * <code>query.fromLocalDatastore()</code> or <code>query.fromPin()</code>
     *
     * @param {Array} objects A list of <code>Parse.Object</code>.
     * @returns {Promise} A promise that is fulfilled when the pin completes.
     * @static
     */

  }, {
    key: "pinAll",
    value: function (objects
    /*: Array<ParseObject>*/
    )
    /*: Promise<void>*/
    {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return _promise.default.reject('Parse.enableLocalDatastore() must be called first');
      }

      return ParseObject.pinAllWithName(_LocalDatastoreUtils.DEFAULT_PIN, objects);
    }
    /**
     * Asynchronously stores the objects and every object they point to in the local datastore, recursively.
     *
     * If those other objects have not been fetched from Parse, they will not be stored.
     * However, if they have changed data, all the changes will be retained.
     *
     * <pre>
     * await Parse.Object.pinAllWithName(name, [obj1, obj2, ...]);
     * </pre>
     *
     * To retrieve object:
     * <code>query.fromLocalDatastore()</code> or <code>query.fromPinWithName(name)</code>
     *
     * @param {string} name Name of Pin.
     * @param {Array} objects A list of <code>Parse.Object</code>.
     * @returns {Promise} A promise that is fulfilled when the pin completes.
     * @static
     */

  }, {
    key: "pinAllWithName",
    value: function (name
    /*: string*/
    , objects
    /*: Array<ParseObject>*/
    )
    /*: Promise<void>*/
    {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return _promise.default.reject('Parse.enableLocalDatastore() must be called first');
      }

      return localDatastore._handlePinAllWithName(name, objects);
    }
    /**
     * Asynchronously removes the objects and every object they point to in the local datastore,
     * recursively, using a default pin name: _default.
     *
     * <pre>
     * await Parse.Object.unPinAll([...]);
     * </pre>
     *
     * @param {Array} objects A list of <code>Parse.Object</code>.
     * @returns {Promise} A promise that is fulfilled when the unPin completes.
     * @static
     */

  }, {
    key: "unPinAll",
    value: function (objects
    /*: Array<ParseObject>*/
    )
    /*: Promise<void>*/
    {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return _promise.default.reject('Parse.enableLocalDatastore() must be called first');
      }

      return ParseObject.unPinAllWithName(_LocalDatastoreUtils.DEFAULT_PIN, objects);
    }
    /**
     * Asynchronously removes the objects and every object they point to in the local datastore, recursively.
     *
     * <pre>
     * await Parse.Object.unPinAllWithName(name, [obj1, obj2, ...]);
     * </pre>
     *
     * @param {string} name Name of Pin.
     * @param {Array} objects A list of <code>Parse.Object</code>.
     * @returns {Promise} A promise that is fulfilled when the unPin completes.
     * @static
     */

  }, {
    key: "unPinAllWithName",
    value: function (name
    /*: string*/
    , objects
    /*: Array<ParseObject>*/
    )
    /*: Promise<void>*/
    {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return _promise.default.reject('Parse.enableLocalDatastore() must be called first');
      }

      return localDatastore._handleUnPinAllWithName(name, objects);
    }
    /**
     * Asynchronously removes all objects in the local datastore using a default pin name: _default.
     *
     * <pre>
     * await Parse.Object.unPinAllObjects();
     * </pre>
     *
     * @returns {Promise} A promise that is fulfilled when the unPin completes.
     * @static
     */

  }, {
    key: "unPinAllObjects",
    value: function ()
    /*: Promise<void>*/
    {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return _promise.default.reject('Parse.enableLocalDatastore() must be called first');
      }

      return localDatastore.unPinWithName(_LocalDatastoreUtils.DEFAULT_PIN);
    }
    /**
     * Asynchronously removes all objects with the specified pin name.
     * Deletes the pin name also.
     *
     * <pre>
     * await Parse.Object.unPinAllObjectsWithName(name);
     * </pre>
     *
     * @param {string} name Name of Pin.
     * @returns {Promise} A promise that is fulfilled when the unPin completes.
     * @static
     */

  }, {
    key: "unPinAllObjectsWithName",
    value: function (name
    /*: string*/
    )
    /*: Promise<void>*/
    {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return _promise.default.reject('Parse.enableLocalDatastore() must be called first');
      }

      return localDatastore.unPinWithName(_LocalDatastoreUtils.PIN_PREFIX + name);
    }
  }]);
  return ParseObject;
}();

var DefaultController = {
  fetch: function (target
  /*: ParseObject | Array<ParseObject>*/
  , forceFetch
  /*: boolean*/
  , options
  /*: RequestOptions*/
  )
  /*: Promise<Array<void> | ParseObject>*/
  {
    var localDatastore = _CoreManager.default.getLocalDatastore();

    if ((0, _isArray.default)(target)) {
      if (target.length < 1) {
        return _promise.default.resolve([]);
      }

      var objs = [];
      var ids = [];
      var className = null;
      var results = [];
      var error = null;
      (0, _forEach.default)(target).call(target, function (el) {
        if (error) {
          return;
        }

        if (!className) {
          // eslint-disable-next-line prefer-destructuring
          className = el.className;
        }

        if (className !== el.className) {
          error = new _ParseError.default(_ParseError.default.INVALID_CLASS_NAME, 'All objects should be of the same class');
        }

        if (!el.id) {
          error = new _ParseError.default(_ParseError.default.MISSING_OBJECT_ID, 'All objects must have an ID');
        }

        if (forceFetch || !el.isDataAvailable()) {
          ids.push(el.id);
          objs.push(el);
        }

        results.push(el);
      });

      if (error) {
        return _promise.default.reject(error);
      }

      var query = new _ParseQuery.default(className);
      query.containedIn('objectId', ids);

      if (options && options.include) {
        query.include(options.include);
      }

      query._limit = ids.length;
      return (0, _find.default)(query).call(query, options).then( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(objects) {
          var idMap, i, obj, _i, _obj, id, _iterator2, _step2, object;

          return _regenerator.default.wrap(function (_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  idMap = {};
                  (0, _forEach.default)(objects).call(objects, function (o) {
                    idMap[o.id] = o;
                  });
                  i = 0;

                case 3:
                  if (!(i < objs.length)) {
                    _context8.next = 11;
                    break;
                  }

                  obj = objs[i];

                  if (!(!obj || !obj.id || !idMap[obj.id])) {
                    _context8.next = 8;
                    break;
                  }

                  if (!forceFetch) {
                    _context8.next = 8;
                    break;
                  }

                  return _context8.abrupt("return", _promise.default.reject(new _ParseError.default(_ParseError.default.OBJECT_NOT_FOUND, 'All objects must exist on the server.')));

                case 8:
                  i++;
                  _context8.next = 3;
                  break;

                case 11:
                  if (!singleInstance) {
                    // If single instance objects are disabled, we need to replace the
                    for (_i = 0; _i < results.length; _i++) {
                      _obj = results[_i];

                      if (_obj && _obj.id && idMap[_obj.id]) {
                        id = _obj.id;

                        _obj._finishFetch(idMap[id].toJSON());

                        results[_i] = idMap[id];
                      }
                    }
                  }

                  _iterator2 = _createForOfIteratorHelper(results);
                  _context8.prev = 13;

                  _iterator2.s();

                case 15:
                  if ((_step2 = _iterator2.n()).done) {
                    _context8.next = 21;
                    break;
                  }

                  object = _step2.value;
                  _context8.next = 19;
                  return localDatastore._updateObjectIfPinned(object);

                case 19:
                  _context8.next = 15;
                  break;

                case 21:
                  _context8.next = 26;
                  break;

                case 23:
                  _context8.prev = 23;
                  _context8.t0 = _context8["catch"](13);

                  _iterator2.e(_context8.t0);

                case 26:
                  _context8.prev = 26;

                  _iterator2.f();

                  return _context8.finish(26);

                case 29:
                  return _context8.abrupt("return", _promise.default.resolve(results));

                case 30:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee4, null, [[13, 23, 26, 29]]);
        }));

        return function () {
          return _ref.apply(this, arguments);
        };
      }());
    }

    if (target instanceof ParseObject) {
      var _context9;

      if (!target.id) {
        return _promise.default.reject(new _ParseError.default(_ParseError.default.MISSING_OBJECT_ID, 'Object does not have an ID'));
      }

      var RESTController = _CoreManager.default.getRESTController();

      var params = {};

      if (options && options.include) {
        params.include = options.include.join();
      }

      return RESTController.request('GET', (0, _concat.default)(_context9 = "classes/".concat(target.className, "/")).call(_context9, target._getId()), params, options).then( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(response) {
          return _regenerator.default.wrap(function (_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  target._clearPendingOps();

                  target._clearServerData();

                  target._finishFetch(response);

                  _context10.next = 5;
                  return localDatastore._updateObjectIfPinned(target);

                case 5:
                  return _context10.abrupt("return", target);

                case 6:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee5);
        }));

        return function () {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    return _promise.default.resolve();
  },
  destroy: function (target
  /*: ParseObject | Array<ParseObject>*/
  , options
  /*: RequestOptions*/
  )
  /*: Promise<Array<void> | ParseObject>*/
  {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
      var batchSize, localDatastore, RESTController, batches, deleteCompleted, errors, _context14;

      return _regenerator.default.wrap(function (_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              batchSize = options && options.batchSize ? options.batchSize : _CoreManager.default.get('REQUEST_BATCH_SIZE');
              localDatastore = _CoreManager.default.getLocalDatastore();
              RESTController = _CoreManager.default.getRESTController();

              if (!(0, _isArray.default)(target)) {
                _context16.next = 13;
                break;
              }

              if (!(target.length < 1)) {
                _context16.next = 6;
                break;
              }

              return _context16.abrupt("return", _promise.default.resolve([]));

            case 6:
              batches = [[]];
              (0, _forEach.default)(target).call(target, function (obj) {
                if (!obj.id) {
                  return;
                }

                batches[batches.length - 1].push(obj);

                if (batches[batches.length - 1].length >= batchSize) {
                  batches.push([]);
                }
              });

              if (batches[batches.length - 1].length === 0) {
                // If the last batch is empty, remove it
                batches.pop();
              }

              deleteCompleted = _promise.default.resolve();
              errors = [];
              (0, _forEach.default)(batches).call(batches, function (batch) {
                deleteCompleted = deleteCompleted.then(function () {
                  return RESTController.request('POST', 'batch', {
                    requests: (0, _map.default)(batch).call(batch, function (obj) {
                      var _context11, _context12;

                      return {
                        method: 'DELETE',
                        path: (0, _concat.default)(_context11 = (0, _concat.default)(_context12 = "".concat(getServerUrlPath(), "classes/")).call(_context12, obj.className, "/")).call(_context11, obj._getId()),
                        body: {}
                      };
                    })
                  }, options).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                      if (results[i] && results[i].hasOwnProperty('error')) {
                        var err = new _ParseError.default(results[i].error.code, results[i].error.error);
                        err.object = batch[i];
                        errors.push(err);
                      }
                    }
                  });
                });
              });
              return _context16.abrupt("return", deleteCompleted.then( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
                var aggregate, _iterator3, _step3, object;

                return _regenerator.default.wrap(function (_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!errors.length) {
                          _context13.next = 4;
                          break;
                        }

                        aggregate = new _ParseError.default(_ParseError.default.AGGREGATE_ERROR);
                        aggregate.errors = errors;
                        return _context13.abrupt("return", _promise.default.reject(aggregate));

                      case 4:
                        _iterator3 = _createForOfIteratorHelper(target);
                        _context13.prev = 5;

                        _iterator3.s();

                      case 7:
                        if ((_step3 = _iterator3.n()).done) {
                          _context13.next = 13;
                          break;
                        }

                        object = _step3.value;
                        _context13.next = 11;
                        return localDatastore._destroyObjectIfPinned(object);

                      case 11:
                        _context13.next = 7;
                        break;

                      case 13:
                        _context13.next = 18;
                        break;

                      case 15:
                        _context13.prev = 15;
                        _context13.t0 = _context13["catch"](5);

                        _iterator3.e(_context13.t0);

                      case 18:
                        _context13.prev = 18;

                        _iterator3.f();

                        return _context13.finish(18);

                      case 21:
                        return _context13.abrupt("return", _promise.default.resolve(target));

                      case 22:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee6, null, [[5, 15, 18, 21]]);
              }))));

            case 13:
              if (!(target instanceof ParseObject)) {
                _context16.next = 15;
                break;
              }

              return _context16.abrupt("return", RESTController.request('DELETE', (0, _concat.default)(_context14 = "classes/".concat(target.className, "/")).call(_context14, target._getId()), {}, options).then( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
                return _regenerator.default.wrap(function (_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.next = 2;
                        return localDatastore._destroyObjectIfPinned(target);

                      case 2:
                        return _context15.abrupt("return", _promise.default.resolve(target));

                      case 3:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee7);
              }))));

            case 15:
              return _context16.abrupt("return", _promise.default.resolve(target));

            case 16:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee8);
    }))();
  },
  save: function (target
  /*: ParseObject | Array<ParseObject | ParseFile>*/
  , options
  /*: RequestOptions*/
  ) {
    var batchSize = options && options.batchSize ? options.batchSize : _CoreManager.default.get('REQUEST_BATCH_SIZE');

    var localDatastore = _CoreManager.default.getLocalDatastore();

    var mapIdForPin = {};

    var RESTController = _CoreManager.default.getRESTController();

    var stateController = _CoreManager.default.getObjectStateController();

    options = options || {};
    options.returnStatus = options.returnStatus || true;

    if ((0, _isArray.default)(target)) {
      if (target.length < 1) {
        return _promise.default.resolve([]);
      }

      var unsaved = (0, _concat.default)(target).call(target);

      for (var i = 0; i < target.length; i++) {
        if (target[i] instanceof ParseObject) {
          unsaved = (0, _concat.default)(unsaved).call(unsaved, (0, _unsavedChildren.default)(target[i], true));
        }
      }

      unsaved = (0, _unique.default)(unsaved);
      var filesSaved
      /*: Array<ParseFile>*/
      = [];
      var pending
      /*: Array<ParseObject>*/
      = [];
      (0, _forEach.default)(unsaved).call(unsaved, function (el) {
        if (el instanceof _ParseFile.default) {
          filesSaved.push(el.save(options));
        } else if (el instanceof ParseObject) {
          pending.push(el);
        }
      });
      return _promise.default.all(filesSaved).then(function () {
        var objectError = null;
        return (0, _promiseUtils.continueWhile)(function () {
          return pending.length > 0;
        }, function () {
          var batch = [];
          var nextPending = [];
          (0, _forEach.default)(pending).call(pending, function (el) {
            if (batch.length < batchSize && (0, _canBeSerialized.default)(el)) {
              batch.push(el);
            } else {
              nextPending.push(el);
            }
          });
          pending = nextPending;

          if (batch.length < 1) {
            return _promise.default.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
          } // Queue up tasks for each object in the batch.
          // When every task is ready, the API request will execute


          var batchReturned = new _promiseUtils.resolvingPromise();
          var batchReady = [];
          var batchTasks = [];
          (0, _forEach.default)(batch).call(batch, function (obj, index) {
            var ready = new _promiseUtils.resolvingPromise();
            batchReady.push(ready);
            stateController.pushPendingState(obj._getStateIdentifier());
            batchTasks.push(stateController.enqueueTask(obj._getStateIdentifier(), function () {
              ready.resolve();
              return batchReturned.then(function (responses) {
                if (responses[index].hasOwnProperty('success')) {
                  var objectId = responses[index].success.objectId;
                  var status = responses[index]._status;
                  delete responses[index]._status;
                  mapIdForPin[objectId] = obj._localId;

                  obj._handleSaveResponse(responses[index].success, status);
                } else {
                  if (!objectError && responses[index].hasOwnProperty('error')) {
                    var serverError = responses[index].error;
                    objectError = new _ParseError.default(serverError.code, serverError.error); // Cancel the rest of the save

                    pending = [];
                  }

                  obj._handleSaveError();
                }
              });
            }));
          });
          (0, _promiseUtils.when)(batchReady).then(function () {
            // Kick off the batch request
            return RESTController.request('POST', 'batch', {
              requests: (0, _map.default)(batch).call(batch, function (obj) {
                var params = obj._getSaveParams();

                params.path = getServerUrlPath() + params.path;
                return params;
              })
            }, options);
          }).then(batchReturned.resolve, function (error) {
            batchReturned.reject(new _ParseError.default(_ParseError.default.INCORRECT_TYPE, error.message));
          });
          return (0, _promiseUtils.when)(batchTasks);
        }).then( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
          var _iterator4, _step4, object;

          return _regenerator.default.wrap(function (_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  if (!objectError) {
                    _context17.next = 2;
                    break;
                  }

                  return _context17.abrupt("return", _promise.default.reject(objectError));

                case 2:
                  _iterator4 = _createForOfIteratorHelper(target);
                  _context17.prev = 3;

                  _iterator4.s();

                case 5:
                  if ((_step4 = _iterator4.n()).done) {
                    _context17.next = 13;
                    break;
                  }

                  object = _step4.value;
                  _context17.next = 9;
                  return localDatastore._updateLocalIdForObject(mapIdForPin[object.id], object);

                case 9:
                  _context17.next = 11;
                  return localDatastore._updateObjectIfPinned(object);

                case 11:
                  _context17.next = 5;
                  break;

                case 13:
                  _context17.next = 18;
                  break;

                case 15:
                  _context17.prev = 15;
                  _context17.t0 = _context17["catch"](3);

                  _iterator4.e(_context17.t0);

                case 18:
                  _context17.prev = 18;

                  _iterator4.f();

                  return _context17.finish(18);

                case 21:
                  return _context17.abrupt("return", _promise.default.resolve(target));

                case 22:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee9, null, [[3, 15, 18, 21]]);
        })));
      });
    }

    if (target instanceof ParseObject) {
      // generate _localId in case if cascadeSave=false
      target._getId();

      var localId = target._localId; // copying target lets Flow guarantee the pointer isn't modified elsewhere

      var targetCopy = target;

      var task = function () {
        var params = targetCopy._getSaveParams();

        return RESTController.request(params.method, params.path, params.body, options).then(function (response) {
          var status = response._status;
          delete response._status;

          targetCopy._handleSaveResponse(response, status);
        }, function (error) {
          targetCopy._handleSaveError();

          return _promise.default.reject(error);
        });
      };

      stateController.pushPendingState(target._getStateIdentifier());
      return stateController.enqueueTask(target._getStateIdentifier(), task).then( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        return _regenerator.default.wrap(function (_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return localDatastore._updateLocalIdForObject(localId, target);

              case 2:
                _context18.next = 4;
                return localDatastore._updateObjectIfPinned(target);

              case 4:
                return _context18.abrupt("return", target);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee10);
      })), function (error) {
        return _promise.default.reject(error);
      });
    }

    return _promise.default.resolve();
  }
};

_CoreManager.default.setObjectController(DefaultController);

var _default = ParseObject;
exports.default = _default;