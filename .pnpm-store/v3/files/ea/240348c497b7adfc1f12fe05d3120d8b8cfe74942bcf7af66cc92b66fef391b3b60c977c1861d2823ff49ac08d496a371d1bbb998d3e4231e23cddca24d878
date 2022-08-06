"use strict";

var _sliceInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Array$isArray2 = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _every = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/every"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/entries"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _ParseRole = _interopRequireDefault(require("./ParseRole"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

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
    var _context3, _context4;

    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? _forEachInstanceProperty(_context3 = ownKeys(Object(source), !0)).call(_context3, function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty(_context4 = ownKeys(Object(source))).call(_context4, function (key) {
      _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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
  var _context2;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty2(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1);

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

var PUBLIC_KEY = '*';
var VALID_PERMISSIONS
/*: Map<string, UsersMap>*/
= new _map.default();
VALID_PERMISSIONS.set('get', {});
VALID_PERMISSIONS.set('find', {});
VALID_PERMISSIONS.set('count', {});
VALID_PERMISSIONS.set('create', {});
VALID_PERMISSIONS.set('update', {});
VALID_PERMISSIONS.set('delete', {});
VALID_PERMISSIONS.set('addField', {});
var VALID_PERMISSIONS_EXTENDED
/*: Map<string, UsersMap>*/
= new _map.default();
VALID_PERMISSIONS_EXTENDED.set('protectedFields', {});
/**
 * Creates a new CLP.
 * If no argument is given, the CLP has no permissions for anyone.
 * If the argument is a Parse.User or Parse.Role, the CLP will have read and write
 *   permission for only that user or role.
 * If the argument is any other JSON object, that object will be interpretted
 *   as a serialized CLP created with toJSON().
 *
 * <p>A CLP, or Class Level Permissions can be added to any
 * <code>Parse.Schema</code> to restrict access to only a subset of users
 * of your application.</p>
 *
 * <p>
 * For get/count/find/create/update/delete/addField using the following functions:
 *
 * Entity is type Parse.User or Parse.Role or string
 * Role is type Parse.Role or Name of Parse.Role
 *
 * getGetRequiresAuthentication()
 * setGetRequiresAuthentication(allowed: boolean)
 * getGetPointerFields()
 * setGetPointerFields(pointerFields: string[])
 * getGetAccess(entity: Entity)
 * setGetAccess(entity: Entity, allowed: boolean)
 * getPublicGetAccess()
 * setPublicGetAccess(allowed: boolean)
 * getRoleGetAccess(role: Role)
 * setRoleGetAccess(role: Role, allowed: boolean)
 * getFindRequiresAuthentication()
 * setFindRequiresAuthentication(allowed: boolean)
 * getFindPointerFields()
 * setFindPointerFields(pointerFields: string[])
 * getFindAccess(entity: Entity)
 * setFindAccess(entity: Entity, allowed: boolean)
 * getPublicFindAccess()
 * setPublicFindAccess(allowed: boolean)
 * getRoleFindAccess(role: Role)
 * setRoleFindAccess(role: Role, allowed: boolean)
 * getCountRequiresAuthentication()
 * setCountRequiresAuthentication(allowed: boolean)
 * getCountPointerFields()
 * setCountPointerFields(pointerFields: string[])
 * getCountAccess(entity: Entity)
 * setCountAccess(entity: Entity, allowed: boolean)
 * getPublicCountAccess()
 * setPublicCountAccess(allowed: boolean)
 * getRoleCountAccess(role: Role)
 * setRoleCountAccess(role: Role, allowed: boolean)
 * getCreateRequiresAuthentication()
 * setCreateRequiresAuthentication(allowed: boolean)
 * getCreatePointerFields()
 * setCreatePointerFields(pointerFields: string[])
 * getCreateAccess(entity: Entity)
 * setCreateAccess(entity: Entity, allowed: boolean)
 * getPublicCreateAccess()
 * setPublicCreateAccess(allowed: Boolean)
 * getRoleCreateAccess(role: Role)
 * setRoleCreateAccess(role: Role, allowed: boolean)
 * getUpdateRequiresAuthentication()
 * setUpdateRequiresAuthentication(allowed: boolean)
 * getUpdatePointerFields()
 * setUpdatePointerFields(pointerFields: string[])
 * getUpdateAccess(entity: Entity)
 * setUpdateAccess(entity: Entity, allowed: boolean)
 * getPublicUpdateAccess()
 * setPublicUpdateAccess(allowed: boolean)
 * getRoleUpdateAccess(role: Role)
 * setRoleUpdateAccess(role: Role, allowed: boolean)
 * getDeleteRequiresAuthentication()
 * setDeleteRequiresAuthentication(allowed: boolean)
 * getDeletePointerFields()
 * setDeletePointerFields(pointerFields: string[])
 * getDeleteAccess(entity: Entity)
 * setDeleteAccess(entity: Entity, allowed: boolean)
 * getPublicDeleteAccess()
 * setPublicDeleteAccess(allowed: boolean)
 * getRoleDeleteAccess(role: Role)
 * setRoleDeleteAccess(role: Role, allowed: boolean)
 * getAddFieldRequiresAuthentication()
 * setAddFieldRequiresAuthentication(allowed: boolean)
 * getAddFieldPointerFields()
 * setAddFieldPointerFields(pointerFields: string[])
 * getAddFieldAccess(entity: Entity)
 * setAddFieldAccess(entity: Entity, allowed: boolean)
 * getPublicAddFieldAccess()
 * setPublicAddFieldAccess(allowed: boolean)
 * getRoleAddFieldAccess(role: Role)
 * setRoleAddFieldAccess(role: Role, allowed: boolean)
 * </p>
 *
 * @alias Parse.CLP
 */

var ParseCLP = /*#__PURE__*/function () {
  /**
   * @param {(Parse.User | Parse.Role | object)} userId The user to initialize the CLP for
   */
  function ParseCLP(userId
  /*: ParseUser | ParseRole | PermissionsMap*/
  ) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ParseCLP);
    (0, _defineProperty2.default)(this, "permissionsMap", void 0);
    this.permissionsMap = {}; // Initialize permissions Map with default permissions

    var _iterator = _createForOfIteratorHelper((0, _entries.default)(VALID_PERMISSIONS).call(VALID_PERMISSIONS)),
        _step;

    try {
      var _loop = function () {
        var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
            operation = _step$value[0],
            group = _step$value[1];

        _this.permissionsMap[operation] = _objectSpread({}, group);
        var action = operation.charAt(0).toUpperCase() + (0, _slice.default)(operation).call(operation, 1);

        _this["get".concat(action, "RequiresAuthentication")] = function () {
          return this._getAccess(operation, 'requiresAuthentication');
        };

        _this["set".concat(action, "RequiresAuthentication")] = function (allowed) {
          this._setAccess(operation, 'requiresAuthentication', allowed);
        };

        _this["get".concat(action, "PointerFields")] = function () {
          return this._getAccess(operation, 'pointerFields', false);
        };

        _this["set".concat(action, "PointerFields")] = function (pointerFields) {
          this._setArrayAccess(operation, 'pointerFields', pointerFields);
        };

        _this["get".concat(action, "Access")] = function (entity) {
          return this._getAccess(operation, entity);
        };

        _this["set".concat(action, "Access")] = function (entity, allowed) {
          this._setAccess(operation, entity, allowed);
        };

        _this["getPublic".concat(action, "Access")] = function () {
          return this["get".concat(action, "Access")](PUBLIC_KEY);
        };

        _this["setPublic".concat(action, "Access")] = function (allowed) {
          this["set".concat(action, "Access")](PUBLIC_KEY, allowed);
        };

        _this["getRole".concat(action, "Access")] = function (role) {
          return this["get".concat(action, "Access")](this._getRoleName(role));
        };

        _this["setRole".concat(action, "Access")] = function (role, allowed) {
          this["set".concat(action, "Access")](this._getRoleName(role), allowed);
        };
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      } // Initialize permissions Map with default extended permissions

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper((0, _entries.default)(VALID_PERMISSIONS_EXTENDED).call(VALID_PERMISSIONS_EXTENDED)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = (0, _slicedToArray2.default)(_step2.value, 2),
            operation = _step2$value[0],
            group = _step2$value[1];

        this.permissionsMap[operation] = _objectSpread({}, group);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (userId && (0, _typeof2.default)(userId) === 'object') {
      if (userId instanceof _ParseUser.default) {
        this.setReadAccess(userId, true);
        this.setWriteAccess(userId, true);
      } else if (userId instanceof _ParseRole.default) {
        this.setRoleReadAccess(userId, true);
        this.setRoleWriteAccess(userId, true);
      } else {
        for (var _permission in userId) {
          var _context;

          var users = userId[_permission];
          var isValidPermission = !!VALID_PERMISSIONS.get(_permission);
          var isValidPermissionExtended = !!VALID_PERMISSIONS_EXTENDED.get(_permission);
          var isValidGroupPermission = (0, _includes.default)(_context = ['readUserFields', 'writeUserFields']).call(_context, _permission);

          if (typeof _permission !== 'string' || !(isValidPermission || isValidPermissionExtended || isValidGroupPermission)) {
            throw new TypeError('Tried to create an CLP with an invalid permission type.');
          }

          if (isValidGroupPermission) {
            if ((0, _every.default)(users).call(users, function (pointer) {
              return typeof pointer === 'string';
            })) {
              this.permissionsMap[_permission] = users;
              continue;
            } else {
              throw new TypeError('Tried to create an CLP with an invalid permission value.');
            }
          }

          for (var user in users) {
            var allowed = users[user];

            if (typeof allowed !== 'boolean' && !isValidPermissionExtended && user !== 'pointerFields') {
              throw new TypeError('Tried to create an CLP with an invalid permission value.');
            }

            this.permissionsMap[_permission][user] = allowed;
          }
        }
      }
    } else if (typeof userId === 'function') {
      throw new TypeError('ParseCLP constructed with a function. Did you forget ()?');
    }
  }
  /**
   * Returns a JSON-encoded version of the CLP.
   *
   * @returns {object}
   */


  (0, _createClass2.default)(ParseCLP, [{
    key: "toJSON",
    value: function ()
    /*: PermissionsMap*/
    {
      return _objectSpread({}, this.permissionsMap);
    }
    /**
     * Returns whether this CLP is equal to another object
     *
     * @param other The other object to compare to
     * @returns {boolean}
     */

  }, {
    key: "equals",
    value: function (other
    /*: ParseCLP*/
    )
    /*: boolean*/
    {
      if (!(other instanceof ParseCLP)) {
        return false;
      }

      var permissions = (0, _keys.default)(this.permissionsMap);
      var otherPermissions = (0, _keys.default)(other.permissionsMap);

      if (permissions.length !== otherPermissions.length) {
        return false;
      }

      for (var _permission2 in this.permissionsMap) {
        if (!other.permissionsMap[_permission2]) {
          return false;
        }

        var users = (0, _keys.default)(this.permissionsMap[_permission2]);
        var otherUsers = (0, _keys.default)(other.permissionsMap[_permission2]);

        if (users.length !== otherUsers.length) {
          return false;
        }

        for (var user in this.permissionsMap[_permission2]) {
          if (!other.permissionsMap[_permission2][user]) {
            return false;
          }

          if (this.permissionsMap[_permission2][user] !== other.permissionsMap[_permission2][user]) {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: "_getRoleName",
    value: function (role
    /*: ParseRole | string*/
    )
    /*: string*/
    {
      var name = role;

      if (role instanceof _ParseRole.default) {
        // Normalize to the String name
        name = role.getName();
      }

      if (typeof name !== 'string') {
        throw new TypeError('role must be a Parse.Role or a String');
      }

      return "role:".concat(name);
    }
  }, {
    key: "_parseEntity",
    value: function (entity
    /*: Entity*/
    ) {
      var userId = entity;

      if (userId instanceof _ParseUser.default) {
        userId = userId.id;

        if (!userId) {
          throw new Error('Cannot get access for a Parse.User without an id.');
        }
      } else if (userId instanceof _ParseRole.default) {
        userId = this._getRoleName(userId);
      }

      if (typeof userId !== 'string') {
        throw new TypeError('userId must be a string.');
      }

      return userId;
    }
  }, {
    key: "_setAccess",
    value: function (permission
    /*: string*/
    , userId
    /*: Entity*/
    , allowed
    /*: boolean*/
    ) {
      userId = this._parseEntity(userId);

      if (typeof allowed !== 'boolean') {
        throw new TypeError('allowed must be either true or false.');
      }

      var permissions = this.permissionsMap[permission][userId];

      if (!permissions) {
        if (!allowed) {
          // The user already doesn't have this permission, so no action is needed
          return;
        }

        this.permissionsMap[permission][userId] = {};
      }

      if (allowed) {
        this.permissionsMap[permission][userId] = true;
      } else {
        delete this.permissionsMap[permission][userId];
      }
    }
  }, {
    key: "_getAccess",
    value: function (permission
    /*: string*/
    , userId
    /*: Entity*/
    )
    /*: boolean | string[]*/
    {
      var returnBoolean = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      userId = this._parseEntity(userId);
      var permissions = this.permissionsMap[permission][userId];

      if (returnBoolean) {
        if (!permissions) {
          return false;
        }

        return !!this.permissionsMap[permission][userId];
      }

      return permissions;
    }
  }, {
    key: "_setArrayAccess",
    value: function (permission
    /*: string*/
    , userId
    /*: Entity*/
    , fields
    /*: string*/
    ) {
      userId = this._parseEntity(userId);
      var permissions = this.permissionsMap[permission][userId];

      if (!permissions) {
        this.permissionsMap[permission][userId] = [];
      }

      if (!fields || (0, _isArray.default)(fields) && fields.length === 0) {
        delete this.permissionsMap[permission][userId];
      } else if ((0, _isArray.default)(fields) && (0, _every.default)(fields).call(fields, function (field) {
        return typeof field === 'string';
      })) {
        this.permissionsMap[permission][userId] = fields;
      } else {
        throw new TypeError('fields must be an array of strings or undefined.');
      }
    }
  }, {
    key: "_setGroupPointerPermission",
    value: function (operation
    /*: string*/
    , pointerFields
    /*: string[]*/
    ) {
      var fields = this.permissionsMap[operation];

      if (!fields) {
        this.permissionsMap[operation] = [];
      }

      if (!pointerFields || (0, _isArray.default)(pointerFields) && pointerFields.length === 0) {
        delete this.permissionsMap[operation];
      } else if ((0, _isArray.default)(pointerFields) && (0, _every.default)(pointerFields).call(pointerFields, function (field) {
        return typeof field === 'string';
      })) {
        this.permissionsMap[operation] = pointerFields;
      } else {
        throw new TypeError("".concat(operation, ".pointerFields must be an array of strings or undefined."));
      }
    }
  }, {
    key: "_getGroupPointerPermissions",
    value: function (operation
    /*: string*/
    )
    /*: string[]*/
    {
      return this.permissionsMap[operation];
    }
    /**
     * Sets user pointer fields to allow permission for get/count/find operations.
     *
     * @param {string[]} pointerFields User pointer fields
     */

  }, {
    key: "setReadUserFields",
    value: function (pointerFields
    /*: string[]*/
    ) {
      this._setGroupPointerPermission('readUserFields', pointerFields);
    }
    /**
     * @returns {string[]} User pointer fields
     */

  }, {
    key: "getReadUserFields",
    value: function ()
    /*: string[]*/
    {
      return this._getGroupPointerPermissions('readUserFields');
    }
    /**
     * Sets user pointer fields to allow permission for create/delete/update/addField operations
     *
     * @param {string[]} pointerFields User pointer fields
     */

  }, {
    key: "setWriteUserFields",
    value: function (pointerFields
    /*: string[]*/
    ) {
      this._setGroupPointerPermission('writeUserFields', pointerFields);
    }
    /**
     * @returns {string[]} User pointer fields
     */

  }, {
    key: "getWriteUserFields",
    value: function ()
    /*: string[]*/
    {
      return this._getGroupPointerPermissions('writeUserFields');
    }
    /**
     * Sets whether the given user is allowed to retrieve fields from this class.
     *
     * @param userId An instance of Parse.User or its objectId.
     * @param {string[]} fields fields to be protected
     */

  }, {
    key: "setProtectedFields",
    value: function (userId
    /*: Entity*/
    , fields
    /*: string[]*/
    ) {
      this._setArrayAccess('protectedFields', userId, fields);
    }
    /**
     * Returns array of fields are accessable to this user.
     *
     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
     * @returns {string[]}
     */

  }, {
    key: "getProtectedFields",
    value: function (userId
    /*: Entity*/
    )
    /*: string[]*/
    {
      return this._getAccess('protectedFields', userId, false);
    }
    /**
     * Sets whether the given user is allowed to read from this class.
     *
     * @param userId An instance of Parse.User or its objectId.
     * @param {boolean} allowed whether that user should have read access.
     */

  }, {
    key: "setReadAccess",
    value: function (userId
    /*: Entity*/
    , allowed
    /*: boolean*/
    ) {
      this._setAccess('find', userId, allowed);

      this._setAccess('get', userId, allowed);

      this._setAccess('count', userId, allowed);
    }
    /**
     * Get whether the given user id is *explicitly* allowed to read from this class.
     * Even if this returns false, the user may still be able to access it if
     * getPublicReadAccess returns true or a role that the user belongs to has
     * write access.
     *
     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
     * @returns {boolean}
     */

  }, {
    key: "getReadAccess",
    value: function (userId
    /*: Entity*/
    )
    /*: boolean*/
    {
      return this._getAccess('find', userId) && this._getAccess('get', userId) && this._getAccess('count', userId);
    }
    /**
     * Sets whether the given user id is allowed to write to this class.
     *
     * @param userId An instance of Parse.User or its objectId, or a Parse.Role..
     * @param {boolean} allowed Whether that user should have write access.
     */

  }, {
    key: "setWriteAccess",
    value: function (userId
    /*: Entity*/
    , allowed
    /*: boolean*/
    ) {
      this._setAccess('create', userId, allowed);

      this._setAccess('update', userId, allowed);

      this._setAccess('delete', userId, allowed);

      this._setAccess('addField', userId, allowed);
    }
    /**
     * Gets whether the given user id is *explicitly* allowed to write to this class.
     * Even if this returns false, the user may still be able to write it if
     * getPublicWriteAccess returns true or a role that the user belongs to has
     * write access.
     *
     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
     * @returns {boolean}
     */

  }, {
    key: "getWriteAccess",
    value: function (userId
    /*: Entity*/
    )
    /*: boolean*/
    {
      return this._getAccess('create', userId) && this._getAccess('update', userId) && this._getAccess('delete', userId) && this._getAccess('addField', userId);
    }
    /**
     * Sets whether the public is allowed to read from this class.
     *
     * @param {boolean} allowed
     */

  }, {
    key: "setPublicReadAccess",
    value: function (allowed
    /*: boolean*/
    ) {
      this.setReadAccess(PUBLIC_KEY, allowed);
    }
    /**
     * Gets whether the public is allowed to read from this class.
     *
     * @returns {boolean}
     */

  }, {
    key: "getPublicReadAccess",
    value: function ()
    /*: boolean*/
    {
      return this.getReadAccess(PUBLIC_KEY);
    }
    /**
     * Sets whether the public is allowed to write to this class.
     *
     * @param {boolean} allowed
     */

  }, {
    key: "setPublicWriteAccess",
    value: function (allowed
    /*: boolean*/
    ) {
      this.setWriteAccess(PUBLIC_KEY, allowed);
    }
    /**
     * Gets whether the public is allowed to write to this class.
     *
     * @returns {boolean}
     */

  }, {
    key: "getPublicWriteAccess",
    value: function ()
    /*: boolean*/
    {
      return this.getWriteAccess(PUBLIC_KEY);
    }
    /**
     * Sets whether the public is allowed to protect fields in this class.
     *
     * @param {string[]} fields
     */

  }, {
    key: "setPublicProtectedFields",
    value: function (fields
    /*: string[]*/
    ) {
      this.setProtectedFields(PUBLIC_KEY, fields);
    }
    /**
     * Gets whether the public is allowed to read fields from this class.
     *
     * @returns {string[]}
     */

  }, {
    key: "getPublicProtectedFields",
    value: function ()
    /*: string[]*/
    {
      return this.getProtectedFields(PUBLIC_KEY);
    }
    /**
     * Gets whether users belonging to the given role are allowed
     * to read from this class. Even if this returns false, the role may
     * still be able to write it if a parent role has read access.
     *
     * @param role The name of the role, or a Parse.Role object.
     * @returns {boolean} true if the role has read access. false otherwise.
     * @throws {TypeError} If role is neither a Parse.Role nor a String.
     */

  }, {
    key: "getRoleReadAccess",
    value: function (role
    /*: ParseRole | string*/
    )
    /*: boolean*/
    {
      return this.getReadAccess(this._getRoleName(role));
    }
    /**
     * Gets whether users belonging to the given role are allowed
     * to write to this user. Even if this returns false, the role may
     * still be able to write it if a parent role has write access.
     *
     * @param role The name of the role, or a Parse.Role object.
     * @returns {boolean} true if the role has write access. false otherwise.
     * @throws {TypeError} If role is neither a Parse.Role nor a String.
     */

  }, {
    key: "getRoleWriteAccess",
    value: function (role
    /*: ParseRole | string*/
    )
    /*: boolean*/
    {
      return this.getWriteAccess(this._getRoleName(role));
    }
    /**
     * Sets whether users belonging to the given role are allowed
     * to read from this class.
     *
     * @param role The name of the role, or a Parse.Role object.
     * @param {boolean} allowed Whether the given role can read this object.
     * @throws {TypeError} If role is neither a Parse.Role nor a String.
     */

  }, {
    key: "setRoleReadAccess",
    value: function (role
    /*: ParseRole | string*/
    , allowed
    /*: boolean*/
    ) {
      this.setReadAccess(this._getRoleName(role), allowed);
    }
    /**
     * Sets whether users belonging to the given role are allowed
     * to write to this class.
     *
     * @param role The name of the role, or a Parse.Role object.
     * @param {boolean} allowed Whether the given role can write this object.
     * @throws {TypeError} If role is neither a Parse.Role nor a String.
     */

  }, {
    key: "setRoleWriteAccess",
    value: function (role
    /*: ParseRole | string*/
    , allowed
    /*: boolean*/
    ) {
      this.setWriteAccess(this._getRoleName(role), allowed);
    }
    /**
     * Gets whether users belonging to the given role are allowed
     * to count to this user. Even if this returns false, the role may
     * still be able to count it if a parent role has count access.
     *
     * @param role The name of the role, or a Parse.Role object.
     * @returns {string[]}
     * @throws {TypeError} If role is neither a Parse.Role nor a String.
     */

  }, {
    key: "getRoleProtectedFields",
    value: function (role
    /*: ParseRole | string*/
    )
    /*: string[]*/
    {
      return this.getProtectedFields(this._getRoleName(role));
    }
    /**
     * Sets whether users belonging to the given role are allowed
     * to set access field in this class.
     *
     * @param role The name of the role, or a Parse.Role object.
     * @param {string[]} fields Fields to be protected by Role.
     * @throws {TypeError} If role is neither a Parse.Role nor a String.
     */

  }, {
    key: "setRoleProtectedFields",
    value: function (role
    /*: ParseRole | string*/
    , fields
    /*: string[]*/
    ) {
      this.setProtectedFields(this._getRoleName(role), fields);
    }
  }]);
  return ParseCLP;
}();

var _default = ParseCLP;
exports.default = _default;