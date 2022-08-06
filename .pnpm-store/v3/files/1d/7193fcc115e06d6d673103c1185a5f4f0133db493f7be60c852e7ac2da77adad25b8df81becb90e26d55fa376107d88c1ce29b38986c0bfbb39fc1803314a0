var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
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

var _require = require('uuid'),
    uuidv4 = _require.v4;

var classMap = {};
var objectCount = 0;
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
  return url.substr(url.indexOf('/'));
}

var ParseObject = function () {
  function ParseObject(className, attributes, options) {
    (0, _classCallCheck2.default)(this, ParseObject);

    if (typeof this.initialize === 'function') {
      this.initialize.apply(this, arguments);
    }

    var toSet = null;
    this._objCount = objectCount++;

    if (typeof className === 'string') {
      this.className = className;

      if (attributes && typeof attributes === 'object') {
        toSet = attributes;
      }
    } else if (className && typeof className === 'object') {
      this.className = className.className;
      toSet = {};

      for (var _attr in className) {
        if (_attr !== 'className') {
          toSet[_attr] = className[_attr];
        }
      }

      if (attributes && typeof attributes === 'object') {
        options = attributes;
      }
    }

    if (toSet && !this.set(toSet, options)) {
      throw new Error("Can't create an invalid Parse Object");
    }
  }

  (0, _createClass2.default)(ParseObject, [{
    key: "attributes",
    get: function () {
      var stateController = _CoreManager.default.getObjectStateController();

      return Object.freeze(stateController.estimateAttributes(this._getStateIdentifier()));
    }
  }, {
    key: "createdAt",
    get: function () {
      return this._getServerData().createdAt;
    }
  }, {
    key: "updatedAt",
    get: function () {
      return this._getServerData().updatedAt;
    }
  }, {
    key: "_getId",
    value: function () {
      if (typeof this.id === 'string') {
        return this.id;
      }

      if (typeof this._localId === 'string') {
        return this._localId;
      }

      var localId = "local" + uuidv4();
      this._localId = localId;
      return localId;
    }
  }, {
    key: "_getStateIdentifier",
    value: function () {
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
    value: function () {
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
    value: function () {
      var stateController = _CoreManager.default.getObjectStateController();

      return stateController.getPendingOps(this._getStateIdentifier());
    }
  }, {
    key: "_clearPendingOps",
    value: function (keysToClear) {
      var pending = this._getPendingOps();

      var latest = pending[pending.length - 1];
      var keys = keysToClear || Object.keys(latest);
      keys.forEach(function (key) {
        delete latest[key];
      });
    }
  }, {
    key: "_getDirtyObjectAttributes",
    value: function () {
      var attributes = this.attributes;

      var stateController = _CoreManager.default.getObjectStateController();

      var objectCache = stateController.getObjectCache(this._getStateIdentifier());
      var dirty = {};

      for (var _attr3 in attributes) {
        var val = attributes[_attr3];

        if (val && typeof val === 'object' && !(val instanceof ParseObject) && !(val instanceof _ParseFile.default) && !(val instanceof _ParseRelation.default)) {
          try {
            var json = (0, _encode.default)(val, false, true);
            var stringified = JSON.stringify(json);

            if (objectCache[_attr3] !== stringified) {
              dirty[_attr3] = val;
            }
          } catch (e) {
            dirty[_attr3] = val;
          }
        }
      }

      return dirty;
    }
  }, {
    key: "_toFullJSON",
    value: function (seen, offline) {
      var json = this.toJSON(seen, offline);
      json.__type = 'Object';
      json.className = this.className;
      return json;
    }
  }, {
    key: "_getSaveJSON",
    value: function () {
      var pending = this._getPendingOps();

      var dirtyObjects = this._getDirtyObjectAttributes();

      var json = {};

      for (var attr in dirtyObjects) {
        var isDotNotation = false;

        for (var i = 0; i < pending.length; i += 1) {
          for (var field in pending[i]) {
            if (field.includes('.')) {
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
    value: function () {
      var method = this.id ? 'PUT' : 'POST';

      var body = this._getSaveJSON();

      var path = "classes/" + this.className;

      if (this.id) {
        path += "/" + this.id;
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
    value: function (serverData) {
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
    value: function (existed) {
      var stateController = _CoreManager.default.getObjectStateController();

      var state = stateController.getState(this._getStateIdentifier());

      if (state) {
        state.existed = existed;
      }
    }
  }, {
    key: "_migrateId",
    value: function (serverId) {
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
    value: function (response, status) {
      var changes = {};

      var stateController = _CoreManager.default.getObjectStateController();

      var pending = stateController.popPendingState(this._getStateIdentifier());

      for (var attr in pending) {
        if (pending[attr] instanceof _ParseOp.RelationOp) {
          changes[attr] = pending[attr].applyTo(undefined, this, attr);
        } else if (!(attr in response) && !attr.includes('.')) {
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

          if (val && Object.getPrototypeOf(val) === Object.prototype) {
            changes[attr] = (0, _extends2.default)({}, this.attributes[attr], val);
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
  }, {
    key: "initialize",
    value: function () {}
  }, {
    key: "toJSON",
    value: function (seen, offline) {
      var seenEntry = this.id ? this.className + ":" + this.id : this;
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
  }, {
    key: "equals",
    value: function (other) {
      if (this === other) {
        return true;
      }

      return other instanceof ParseObject && this.className === other.className && this.id === other.id && typeof this.id !== 'undefined';
    }
  }, {
    key: "dirty",
    value: function (attr) {
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

      if (Object.keys(pendingOps[0]).length !== 0) {
        return true;
      }

      if (Object.keys(dirtyObjects).length !== 0) {
        return true;
      }

      return false;
    }
  }, {
    key: "dirtyKeys",
    value: function () {
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

      return Object.keys(keys);
    }
  }, {
    key: "isDataAvailable",
    value: function () {
      var serverData = this._getServerData();

      return !!Object.keys(serverData).length;
    }
  }, {
    key: "toPointer",
    value: function () {
      if (!this.id) {
        throw new Error('Cannot create a pointer to an unsaved ParseObject');
      }

      return {
        __type: 'Pointer',
        className: this.className,
        objectId: this.id
      };
    }
  }, {
    key: "toOfflinePointer",
    value: function () {
      if (!this._localId) {
        throw new Error('Cannot create a offline pointer to a saved ParseObject');
      }

      return {
        __type: 'Object',
        className: this.className,
        _localId: this._localId
      };
    }
  }, {
    key: "get",
    value: function (attr) {
      return this.attributes[attr];
    }
  }, {
    key: "relation",
    value: function (attr) {
      var value = this.get(attr);

      if (value) {
        if (!(value instanceof _ParseRelation.default)) {
          throw new Error("Called relation() on non-relation field " + attr);
        }

        value._ensureParentAndKey(this, attr);

        return value;
      }

      return new _ParseRelation.default(this, attr);
    }
  }, {
    key: "escape",
    value: function (attr) {
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
  }, {
    key: "has",
    value: function (attr) {
      var attributes = this.attributes;

      if (attributes.hasOwnProperty(attr)) {
        return attributes[attr] != null;
      }

      return false;
    }
  }, {
    key: "set",
    value: function (key, value, options) {
      var changes = {};
      var newOps = {};

      if (key && typeof key === 'object') {
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
        readonly = readonly.concat(this.constructor.readOnlyAttributes());
      }

      for (var k in changes) {
        if (k === 'createdAt' || k === 'updatedAt') {
          continue;
        }

        if (readonly.indexOf(k) > -1) {
          throw new Error("Cannot modify readonly attribute: " + k);
        }

        if (options.unset) {
          newOps[k] = new _ParseOp.UnsetOp();
        } else if (changes[k] instanceof _ParseOp.Op) {
          newOps[k] = changes[k];
        } else if (changes[k] && typeof changes[k] === 'object' && typeof changes[k].__op === 'string') {
          newOps[k] = (0, _ParseOp.opFromJSON)(changes[k]);
        } else if (k === 'objectId' || k === 'id') {
          if (typeof changes[k] === 'string') {
            this.id = changes[k];
          }
        } else if (k === 'ACL' && typeof changes[k] === 'object' && !(changes[k] instanceof _ParseACL.default)) {
          newOps[k] = new _ParseOp.SetOp(new _ParseACL.default(changes[k]));
        } else if (changes[k] instanceof _ParseRelation.default) {
          var relation = new _ParseRelation.default(this, k);
          relation.targetClassName = changes[k].targetClassName;
          newOps[k] = new _ParseOp.SetOp(relation);
        } else {
          newOps[k] = new _ParseOp.SetOp(changes[k]);
        }
      }

      var currentAttributes = this.attributes;

      var serverData = this._getServerData();

      if (typeof key === 'string' && key.includes('.')) {
        var field = key.split('.')[0];

        if (!serverData[field]) {
          return this;
        }
      }

      var newValues = {};

      for (var _attr9 in newOps) {
        if (newOps[_attr9] instanceof _ParseOp.RelationOp) {
          newValues[_attr9] = newOps[_attr9].applyTo(currentAttributes[_attr9], this, _attr9);
        } else if (!(newOps[_attr9] instanceof _ParseOp.UnsetOp)) {
          newValues[_attr9] = newOps[_attr9].applyTo(currentAttributes[_attr9]);
        }
      }

      if (!options.ignoreValidation) {
        var validation = this.validate(newValues);

        if (validation) {
          if (typeof options.error === 'function') {
            options.error(this, validation);
          }

          return false;
        }
      }

      var pendingOps = this._getPendingOps();

      var last = pendingOps.length - 1;

      var stateController = _CoreManager.default.getObjectStateController();

      for (var _attr10 in newOps) {
        var nextOp = newOps[_attr10].mergeWith(pendingOps[last][_attr10]);

        stateController.setPendingOp(this._getStateIdentifier(), _attr10, nextOp);
      }

      return this;
    }
  }, {
    key: "unset",
    value: function (attr, options) {
      options = options || {};
      options.unset = true;
      return this.set(attr, null, options);
    }
  }, {
    key: "increment",
    value: function (attr, amount) {
      if (typeof amount === 'undefined') {
        amount = 1;
      }

      if (typeof amount !== 'number') {
        throw new Error('Cannot increment by a non-numeric amount.');
      }

      return this.set(attr, new _ParseOp.IncrementOp(amount));
    }
  }, {
    key: "decrement",
    value: function (attr, amount) {
      if (typeof amount === 'undefined') {
        amount = 1;
      }

      if (typeof amount !== 'number') {
        throw new Error('Cannot decrement by a non-numeric amount.');
      }

      return this.set(attr, new _ParseOp.IncrementOp(amount * -1));
    }
  }, {
    key: "add",
    value: function (attr, item) {
      return this.set(attr, new _ParseOp.AddOp([item]));
    }
  }, {
    key: "addAll",
    value: function (attr, items) {
      return this.set(attr, new _ParseOp.AddOp(items));
    }
  }, {
    key: "addUnique",
    value: function (attr, item) {
      return this.set(attr, new _ParseOp.AddUniqueOp([item]));
    }
  }, {
    key: "addAllUnique",
    value: function (attr, items) {
      return this.set(attr, new _ParseOp.AddUniqueOp(items));
    }
  }, {
    key: "remove",
    value: function (attr, item) {
      return this.set(attr, new _ParseOp.RemoveOp([item]));
    }
  }, {
    key: "removeAll",
    value: function (attr, items) {
      return this.set(attr, new _ParseOp.RemoveOp(items));
    }
  }, {
    key: "op",
    value: function (attr) {
      var pending = this._getPendingOps();

      for (var i = pending.length; i--;) {
        if (pending[i][attr]) {
          return pending[i][attr];
        }
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      var clone = new this.constructor();

      if (!clone.className) {
        clone.className = this.className;
      }

      var attributes = this.attributes;

      if (typeof this.constructor.readOnlyAttributes === 'function') {
        var readonly = this.constructor.readOnlyAttributes() || [];
        var copy = {};

        for (var a in attributes) {
          if (readonly.indexOf(a) < 0) {
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
  }, {
    key: "newInstance",
    value: function () {
      var clone = new this.constructor();

      if (!clone.className) {
        clone.className = this.className;
      }

      clone.id = this.id;

      if (singleInstance) {
        return clone;
      }

      var stateController = _CoreManager.default.getObjectStateController();

      if (stateController) {
        stateController.duplicateState(this._getStateIdentifier(), clone._getStateIdentifier());
      }

      return clone;
    }
  }, {
    key: "isNew",
    value: function () {
      return !this.id;
    }
  }, {
    key: "existed",
    value: function () {
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
  }, {
    key: "exists",
    value: function (options) {
      var query;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", false);

            case 2:
              _context.prev = 2;
              query = new _ParseQuery.default(this.className);
              _context.next = 6;
              return _regenerator.default.awrap(query.get(this.id, options));

            case 6:
              return _context.abrupt("return", true);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);

              if (!(_context.t0.code === _ParseError.default.OBJECT_NOT_FOUND)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", false);

            case 13:
              throw _context.t0;

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[2, 9]], Promise);
    }
  }, {
    key: "isValid",
    value: function () {
      return !this.validate(this.attributes);
    }
  }, {
    key: "validate",
    value: function (attrs) {
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
  }, {
    key: "getACL",
    value: function () {
      var acl = this.get('ACL');

      if (acl instanceof _ParseACL.default) {
        return acl;
      }

      return null;
    }
  }, {
    key: "setACL",
    value: function (acl, options) {
      return this.set('ACL', acl, options);
    }
  }, {
    key: "revert",
    value: function () {
      var keysToRevert;

      for (var _len = arguments.length, keys = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      if (keys.length) {
        keysToRevert = [];

        for (var _iterator = _createForOfIteratorHelperLoose(keys), _step; !(_step = _iterator()).done;) {
          var _key3 = _step.value;

          if (typeof _key3 === 'string') {
            keysToRevert.push(_key3);
          } else {
            throw new Error('Parse.Object#revert expects either no, or a list of string, arguments.');
          }
        }
      }

      this._clearPendingOps(keysToRevert);
    }
  }, {
    key: "clear",
    value: function () {
      var attributes = this.attributes;
      var erasable = {};
      var readonly = ['createdAt', 'updatedAt'];

      if (typeof this.constructor.readOnlyAttributes === 'function') {
        readonly = readonly.concat(this.constructor.readOnlyAttributes());
      }

      for (var _attr11 in attributes) {
        if (readonly.indexOf(_attr11) < 0) {
          erasable[_attr11] = true;
        }
      }

      return this.set(erasable, {
        unset: true
      });
    }
  }, {
    key: "fetch",
    value: function (options) {
      options = options || {};
      var fetchOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        fetchOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        fetchOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && typeof options.context === 'object') {
        fetchOptions.context = options.context;
      }

      if (options.hasOwnProperty('include')) {
        fetchOptions.include = [];

        if (Array.isArray(options.include)) {
          options.include.forEach(function (key) {
            if (Array.isArray(key)) {
              fetchOptions.include = fetchOptions.include.concat(key);
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
  }, {
    key: "fetchWithInclude",
    value: function (keys, options) {
      options = options || {};
      options.include = keys;
      return this.fetch(options);
    }
  }, {
    key: "save",
    value: function (arg1, arg2, arg3) {
      var _this = this;

      var attrs;
      var options;

      if (typeof arg1 === 'object' || typeof arg1 === 'undefined') {
        attrs = arg1;

        if (typeof arg2 === 'object') {
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
          return Promise.reject(validation);
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

      if (options.hasOwnProperty('context') && typeof options.context === 'object') {
        saveOptions.context = options.context;
      }

      var controller = _CoreManager.default.getObjectController();

      var unsaved = options.cascadeSave !== false ? (0, _unsavedChildren.default)(this) : null;
      return controller.save(unsaved, saveOptions).then(function () {
        return controller.save(_this, saveOptions);
      });
    }
  }, {
    key: "destroy",
    value: function (options) {
      options = options || {};
      var destroyOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        destroyOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        destroyOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && typeof options.context === 'object') {
        destroyOptions.context = options.context;
      }

      if (!this.id) {
        return Promise.resolve();
      }

      return _CoreManager.default.getObjectController().destroy(this, destroyOptions);
    }
  }, {
    key: "pin",
    value: function () {
      return ParseObject.pinAllWithName(_LocalDatastoreUtils.DEFAULT_PIN, [this]);
    }
  }, {
    key: "unPin",
    value: function () {
      return ParseObject.unPinAllWithName(_LocalDatastoreUtils.DEFAULT_PIN, [this]);
    }
  }, {
    key: "isPinned",
    value: function () {
      var localDatastore, objectKey, pin;
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              localDatastore = _CoreManager.default.getLocalDatastore();

              if (localDatastore.isEnabled) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", Promise.reject('Parse.enableLocalDatastore() must be called first'));

            case 3:
              objectKey = localDatastore.getKeyForObject(this);
              _context2.next = 6;
              return _regenerator.default.awrap(localDatastore.fromPinWithName(objectKey));

            case 6:
              pin = _context2.sent;
              return _context2.abrupt("return", pin.length > 0);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "pinWithName",
    value: function (name) {
      return ParseObject.pinAllWithName(name, [this]);
    }
  }, {
    key: "unPinWithName",
    value: function (name) {
      return ParseObject.unPinAllWithName(name, [this]);
    }
  }, {
    key: "fetchFromLocalDatastore",
    value: function () {
      var localDatastore, objectKey, pinned, result;
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              localDatastore = _CoreManager.default.getLocalDatastore();

              if (localDatastore.isEnabled) {
                _context3.next = 3;
                break;
              }

              throw new Error('Parse.enableLocalDatastore() must be called first');

            case 3:
              objectKey = localDatastore.getKeyForObject(this);
              _context3.next = 6;
              return _regenerator.default.awrap(localDatastore._serializeObject(objectKey));

            case 6:
              pinned = _context3.sent;

              if (pinned) {
                _context3.next = 9;
                break;
              }

              throw new Error('Cannot fetch an unsaved ParseObject');

            case 9:
              result = ParseObject.fromJSON(pinned);

              this._finishFetch(result.toJSON());

              return _context3.abrupt("return", this);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }], [{
    key: "_clearAllState",
    value: function () {
      var stateController = _CoreManager.default.getObjectStateController();

      stateController.clearAllState();
    }
  }, {
    key: "fetchAll",
    value: function (list) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
  }, {
    key: "fetchAllWithInclude",
    value: function (list, keys, options) {
      options = options || {};
      options.include = keys;
      return ParseObject.fetchAll(list, options);
    }
  }, {
    key: "fetchAllIfNeededWithInclude",
    value: function (list, keys, options) {
      options = options || {};
      options.include = keys;
      return ParseObject.fetchAllIfNeeded(list, options);
    }
  }, {
    key: "fetchAllIfNeeded",
    value: function (list, options) {
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

      if (Array.isArray(options.include)) {
        options.include.forEach(function (key) {
          if (Array.isArray(key)) {
            include = include.concat(key);
          } else {
            include.push(key);
          }
        });
      } else {
        include.push(options.include);
      }

      return include;
    }
  }, {
    key: "destroyAll",
    value: function (list) {
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

      if (options.hasOwnProperty('context') && typeof options.context === 'object') {
        destroyOptions.context = options.context;
      }

      return _CoreManager.default.getObjectController().destroy(list, destroyOptions);
    }
  }, {
    key: "saveAll",
    value: function (list) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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

      if (options.hasOwnProperty('context') && typeof options.context === 'object') {
        saveOptions.context = options.context;
      }

      return _CoreManager.default.getObjectController().save(list, saveOptions);
    }
  }, {
    key: "createWithoutData",
    value: function (id) {
      var obj = new this();
      obj.id = id;
      return obj;
    }
  }, {
    key: "fromJSON",
    value: function (json, override) {
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
  }, {
    key: "registerSubclass",
    value: function (className, constructor) {
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
  }, {
    key: "extend",
    value: function (className, protoProps, classProps) {
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
        this._objCount = objectCount++;

        if (typeof this.initialize === 'function') {
          this.initialize.apply(this, arguments);
        }

        if (attributes && typeof attributes === 'object') {
          if (!this.set(attributes || {}, options)) {
            throw new Error("Can't create an invalid Parse Object");
          }
        }
      };

      ParseObjectSubclass.className = adjustedClassName;
      ParseObjectSubclass.__super__ = parentProto;
      ParseObjectSubclass.prototype = Object.create(parentProto, {
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
            Object.defineProperty(ParseObjectSubclass.prototype, prop, {
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
            Object.defineProperty(ParseObjectSubclass, _prop, {
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
  }, {
    key: "enableSingleInstance",
    value: function () {
      singleInstance = true;

      _CoreManager.default.setObjectStateController(SingleInstanceStateController);
    }
  }, {
    key: "disableSingleInstance",
    value: function () {
      singleInstance = false;

      _CoreManager.default.setObjectStateController(UniqueInstanceStateController);
    }
  }, {
    key: "pinAll",
    value: function (objects) {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return Promise.reject('Parse.enableLocalDatastore() must be called first');
      }

      return ParseObject.pinAllWithName(_LocalDatastoreUtils.DEFAULT_PIN, objects);
    }
  }, {
    key: "pinAllWithName",
    value: function (name, objects) {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return Promise.reject('Parse.enableLocalDatastore() must be called first');
      }

      return localDatastore._handlePinAllWithName(name, objects);
    }
  }, {
    key: "unPinAll",
    value: function (objects) {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return Promise.reject('Parse.enableLocalDatastore() must be called first');
      }

      return ParseObject.unPinAllWithName(_LocalDatastoreUtils.DEFAULT_PIN, objects);
    }
  }, {
    key: "unPinAllWithName",
    value: function (name, objects) {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return Promise.reject('Parse.enableLocalDatastore() must be called first');
      }

      return localDatastore._handleUnPinAllWithName(name, objects);
    }
  }, {
    key: "unPinAllObjects",
    value: function () {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return Promise.reject('Parse.enableLocalDatastore() must be called first');
      }

      return localDatastore.unPinWithName(_LocalDatastoreUtils.DEFAULT_PIN);
    }
  }, {
    key: "unPinAllObjectsWithName",
    value: function (name) {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (!localDatastore.isEnabled) {
        return Promise.reject('Parse.enableLocalDatastore() must be called first');
      }

      return localDatastore.unPinWithName(_LocalDatastoreUtils.PIN_PREFIX + name);
    }
  }]);
  return ParseObject;
}();

var DefaultController = {
  fetch: function (target, forceFetch, options) {
    var localDatastore = _CoreManager.default.getLocalDatastore();

    if (Array.isArray(target)) {
      if (target.length < 1) {
        return Promise.resolve([]);
      }

      var objs = [];
      var ids = [];
      var className = null;
      var results = [];
      var error = null;
      target.forEach(function (el) {
        if (error) {
          return;
        }

        if (!className) {
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
        return Promise.reject(error);
      }

      var query = new _ParseQuery.default(className);
      query.containedIn('objectId', ids);

      if (options && options.include) {
        query.include(options.include);
      }

      query._limit = ids.length;
      return query.find(options).then(function (objects) {
        var idMap, i, obj, _i, _obj, id, _iterator2, _step2, object;

        return _regenerator.default.async(function (_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                idMap = {};
                objects.forEach(function (o) {
                  idMap[o.id] = o;
                });
                i = 0;

              case 3:
                if (!(i < objs.length)) {
                  _context4.next = 11;
                  break;
                }

                obj = objs[i];

                if (!(!obj || !obj.id || !idMap[obj.id])) {
                  _context4.next = 8;
                  break;
                }

                if (!forceFetch) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", Promise.reject(new _ParseError.default(_ParseError.default.OBJECT_NOT_FOUND, 'All objects must exist on the server.')));

              case 8:
                i++;
                _context4.next = 3;
                break;

              case 11:
                if (!singleInstance) {
                  for (_i = 0; _i < results.length; _i++) {
                    _obj = results[_i];

                    if (_obj && _obj.id && idMap[_obj.id]) {
                      id = _obj.id;

                      _obj._finishFetch(idMap[id].toJSON());

                      results[_i] = idMap[id];
                    }
                  }
                }

                _iterator2 = _createForOfIteratorHelperLoose(results);

              case 13:
                if ((_step2 = _iterator2()).done) {
                  _context4.next = 19;
                  break;
                }

                object = _step2.value;
                _context4.next = 17;
                return _regenerator.default.awrap(localDatastore._updateObjectIfPinned(object));

              case 17:
                _context4.next = 13;
                break;

              case 19:
                return _context4.abrupt("return", Promise.resolve(results));

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, null, null, null, Promise);
      });
    }

    if (target instanceof ParseObject) {
      if (!target.id) {
        return Promise.reject(new _ParseError.default(_ParseError.default.MISSING_OBJECT_ID, 'Object does not have an ID'));
      }

      var RESTController = _CoreManager.default.getRESTController();

      var params = {};

      if (options && options.include) {
        params.include = options.include.join();
      }

      return RESTController.request('GET', "classes/" + target.className + "/" + target._getId(), params, options).then(function (response) {
        return _regenerator.default.async(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                target._clearPendingOps();

                target._clearServerData();

                target._finishFetch(response);

                _context5.next = 5;
                return _regenerator.default.awrap(localDatastore._updateObjectIfPinned(target));

              case 5:
                return _context5.abrupt("return", target);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, null, null, null, Promise);
      });
    }

    return Promise.resolve();
  },
  destroy: function (target, options) {
    return function () {
      var batchSize, localDatastore, RESTController, batches, deleteCompleted, errors;
      return _regenerator.default.async(function (_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              batchSize = options && options.batchSize ? options.batchSize : _CoreManager.default.get('REQUEST_BATCH_SIZE');
              localDatastore = _CoreManager.default.getLocalDatastore();
              RESTController = _CoreManager.default.getRESTController();

              if (!Array.isArray(target)) {
                _context8.next = 13;
                break;
              }

              if (!(target.length < 1)) {
                _context8.next = 6;
                break;
              }

              return _context8.abrupt("return", Promise.resolve([]));

            case 6:
              batches = [[]];
              target.forEach(function (obj) {
                if (!obj.id) {
                  return;
                }

                batches[batches.length - 1].push(obj);

                if (batches[batches.length - 1].length >= batchSize) {
                  batches.push([]);
                }
              });

              if (batches[batches.length - 1].length === 0) {
                batches.pop();
              }

              deleteCompleted = Promise.resolve();
              errors = [];
              batches.forEach(function (batch) {
                deleteCompleted = deleteCompleted.then(function () {
                  return RESTController.request('POST', 'batch', {
                    requests: batch.map(function (obj) {
                      return {
                        method: 'DELETE',
                        path: getServerUrlPath() + "classes/" + obj.className + "/" + obj._getId(),
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
              return _context8.abrupt("return", deleteCompleted.then(function () {
                var aggregate, _iterator3, _step3, object;

                return _regenerator.default.async(function (_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!errors.length) {
                          _context6.next = 4;
                          break;
                        }

                        aggregate = new _ParseError.default(_ParseError.default.AGGREGATE_ERROR);
                        aggregate.errors = errors;
                        return _context6.abrupt("return", Promise.reject(aggregate));

                      case 4:
                        _iterator3 = _createForOfIteratorHelperLoose(target);

                      case 5:
                        if ((_step3 = _iterator3()).done) {
                          _context6.next = 11;
                          break;
                        }

                        object = _step3.value;
                        _context6.next = 9;
                        return _regenerator.default.awrap(localDatastore._destroyObjectIfPinned(object));

                      case 9:
                        _context6.next = 5;
                        break;

                      case 11:
                        return _context6.abrupt("return", Promise.resolve(target));

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, null, null, null, Promise);
              }));

            case 13:
              if (!(target instanceof ParseObject)) {
                _context8.next = 15;
                break;
              }

              return _context8.abrupt("return", RESTController.request('DELETE', "classes/" + target.className + "/" + target._getId(), {}, options).then(function () {
                return _regenerator.default.async(function (_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return _regenerator.default.awrap(localDatastore._destroyObjectIfPinned(target));

                      case 2:
                        return _context7.abrupt("return", Promise.resolve(target));

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, null, null, null, Promise);
              }));

            case 15:
              return _context8.abrupt("return", Promise.resolve(target));

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  save: function (target, options) {
    var batchSize = options && options.batchSize ? options.batchSize : _CoreManager.default.get('REQUEST_BATCH_SIZE');

    var localDatastore = _CoreManager.default.getLocalDatastore();

    var mapIdForPin = {};

    var RESTController = _CoreManager.default.getRESTController();

    var stateController = _CoreManager.default.getObjectStateController();

    options = options || {};
    options.returnStatus = options.returnStatus || true;

    if (Array.isArray(target)) {
      if (target.length < 1) {
        return Promise.resolve([]);
      }

      var unsaved = target.concat();

      for (var i = 0; i < target.length; i++) {
        if (target[i] instanceof ParseObject) {
          unsaved = unsaved.concat((0, _unsavedChildren.default)(target[i], true));
        }
      }

      unsaved = (0, _unique.default)(unsaved);
      var filesSaved = [];
      var pending = [];
      unsaved.forEach(function (el) {
        if (el instanceof _ParseFile.default) {
          filesSaved.push(el.save(options));
        } else if (el instanceof ParseObject) {
          pending.push(el);
        }
      });
      return Promise.all(filesSaved).then(function () {
        var objectError = null;
        return (0, _promiseUtils.continueWhile)(function () {
          return pending.length > 0;
        }, function () {
          var batch = [];
          var nextPending = [];
          pending.forEach(function (el) {
            if (batch.length < batchSize && (0, _canBeSerialized.default)(el)) {
              batch.push(el);
            } else {
              nextPending.push(el);
            }
          });
          pending = nextPending;

          if (batch.length < 1) {
            return Promise.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
          }

          var batchReturned = new _promiseUtils.resolvingPromise();
          var batchReady = [];
          var batchTasks = [];
          batch.forEach(function (obj, index) {
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
                    objectError = new _ParseError.default(serverError.code, serverError.error);
                    pending = [];
                  }

                  obj._handleSaveError();
                }
              });
            }));
          });
          (0, _promiseUtils.when)(batchReady).then(function () {
            return RESTController.request('POST', 'batch', {
              requests: batch.map(function (obj) {
                var params = obj._getSaveParams();

                params.path = getServerUrlPath() + params.path;
                return params;
              })
            }, options);
          }).then(batchReturned.resolve, function (error) {
            batchReturned.reject(new _ParseError.default(_ParseError.default.INCORRECT_TYPE, error.message));
          });
          return (0, _promiseUtils.when)(batchTasks);
        }).then(function () {
          var _iterator4, _step4, object;

          return _regenerator.default.async(function (_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  if (!objectError) {
                    _context9.next = 2;
                    break;
                  }

                  return _context9.abrupt("return", Promise.reject(objectError));

                case 2:
                  _iterator4 = _createForOfIteratorHelperLoose(target);

                case 3:
                  if ((_step4 = _iterator4()).done) {
                    _context9.next = 11;
                    break;
                  }

                  object = _step4.value;
                  _context9.next = 7;
                  return _regenerator.default.awrap(localDatastore._updateLocalIdForObject(mapIdForPin[object.id], object));

                case 7:
                  _context9.next = 9;
                  return _regenerator.default.awrap(localDatastore._updateObjectIfPinned(object));

                case 9:
                  _context9.next = 3;
                  break;

                case 11:
                  return _context9.abrupt("return", Promise.resolve(target));

                case 12:
                case "end":
                  return _context9.stop();
              }
            }
          }, null, null, null, Promise);
        });
      });
    }

    if (target instanceof ParseObject) {
      target._getId();

      var localId = target._localId;
      var targetCopy = target;

      var task = function () {
        var params = targetCopy._getSaveParams();

        return RESTController.request(params.method, params.path, params.body, options).then(function (response) {
          var status = response._status;
          delete response._status;

          targetCopy._handleSaveResponse(response, status);
        }, function (error) {
          targetCopy._handleSaveError();

          return Promise.reject(error);
        });
      };

      stateController.pushPendingState(target._getStateIdentifier());
      return stateController.enqueueTask(target._getStateIdentifier(), task).then(function () {
        return _regenerator.default.async(function (_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _regenerator.default.awrap(localDatastore._updateLocalIdForObject(localId, target));

              case 2:
                _context10.next = 4;
                return _regenerator.default.awrap(localDatastore._updateObjectIfPinned(target));

              case 4:
                return _context10.abrupt("return", target);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, null, null, null, Promise);
      }, function (error) {
        return Promise.reject(error);
      });
    }

    return Promise.resolve();
  }
};

_CoreManager.default.setObjectController(DefaultController);

var _default = ParseObject;
exports.default = _default;