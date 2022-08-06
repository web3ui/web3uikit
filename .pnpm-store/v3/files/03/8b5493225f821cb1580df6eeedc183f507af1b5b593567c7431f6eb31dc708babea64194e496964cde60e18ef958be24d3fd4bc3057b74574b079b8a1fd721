var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ParseRole = _interopRequireDefault(require("./ParseRole"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

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

var PUBLIC_KEY = '*';
var VALID_PERMISSIONS = new Map();
VALID_PERMISSIONS.set('get', {});
VALID_PERMISSIONS.set('find', {});
VALID_PERMISSIONS.set('count', {});
VALID_PERMISSIONS.set('create', {});
VALID_PERMISSIONS.set('update', {});
VALID_PERMISSIONS.set('delete', {});
VALID_PERMISSIONS.set('addField', {});
var VALID_PERMISSIONS_EXTENDED = new Map();
VALID_PERMISSIONS_EXTENDED.set('protectedFields', {});

var ParseCLP = function () {
  function ParseCLP(userId) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ParseCLP);
    this.permissionsMap = {};

    var _loop = function (operation, group) {
      _this.permissionsMap[operation] = (0, _extends2.default)({}, group);
      var action = operation.charAt(0).toUpperCase() + operation.slice(1);

      _this["get" + action + "RequiresAuthentication"] = function () {
        return this._getAccess(operation, 'requiresAuthentication');
      };

      _this["set" + action + "RequiresAuthentication"] = function (allowed) {
        this._setAccess(operation, 'requiresAuthentication', allowed);
      };

      _this["get" + action + "PointerFields"] = function () {
        return this._getAccess(operation, 'pointerFields', false);
      };

      _this["set" + action + "PointerFields"] = function (pointerFields) {
        this._setArrayAccess(operation, 'pointerFields', pointerFields);
      };

      _this["get" + action + "Access"] = function (entity) {
        return this._getAccess(operation, entity);
      };

      _this["set" + action + "Access"] = function (entity, allowed) {
        this._setAccess(operation, entity, allowed);
      };

      _this["getPublic" + action + "Access"] = function () {
        return this["get" + action + "Access"](PUBLIC_KEY);
      };

      _this["setPublic" + action + "Access"] = function (allowed) {
        this["set" + action + "Access"](PUBLIC_KEY, allowed);
      };

      _this["getRole" + action + "Access"] = function (role) {
        return this["get" + action + "Access"](this._getRoleName(role));
      };

      _this["setRole" + action + "Access"] = function (role, allowed) {
        this["set" + action + "Access"](this._getRoleName(role), allowed);
      };
    };

    for (var _iterator = _createForOfIteratorHelperLoose(VALID_PERMISSIONS.entries()), _step; !(_step = _iterator()).done;) {
      var _ref = _step.value;

      var _ref2 = (0, _slicedToArray2.default)(_ref, 2);

      var operation = _ref2[0];
      var group = _ref2[1];

      _loop(operation, group);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(VALID_PERMISSIONS_EXTENDED.entries()), _step2; !(_step2 = _iterator2()).done;) {
      var _ref3 = _step2.value;

      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2);

      var operation = _ref4[0];
      var group = _ref4[1];
      this.permissionsMap[operation] = (0, _extends2.default)({}, group);
    }

    if (userId && typeof userId === 'object') {
      if (userId instanceof _ParseUser.default) {
        this.setReadAccess(userId, true);
        this.setWriteAccess(userId, true);
      } else if (userId instanceof _ParseRole.default) {
        this.setRoleReadAccess(userId, true);
        this.setRoleWriteAccess(userId, true);
      } else {
        for (var _permission in userId) {
          var users = userId[_permission];
          var isValidPermission = !!VALID_PERMISSIONS.get(_permission);
          var isValidPermissionExtended = !!VALID_PERMISSIONS_EXTENDED.get(_permission);
          var isValidGroupPermission = ['readUserFields', 'writeUserFields'].includes(_permission);

          if (typeof _permission !== 'string' || !(isValidPermission || isValidPermissionExtended || isValidGroupPermission)) {
            throw new TypeError('Tried to create an CLP with an invalid permission type.');
          }

          if (isValidGroupPermission) {
            if (users.every(function (pointer) {
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

  (0, _createClass2.default)(ParseCLP, [{
    key: "toJSON",
    value: function () {
      return (0, _extends2.default)({}, this.permissionsMap);
    }
  }, {
    key: "equals",
    value: function (other) {
      if (!(other instanceof ParseCLP)) {
        return false;
      }

      var permissions = Object.keys(this.permissionsMap);
      var otherPermissions = Object.keys(other.permissionsMap);

      if (permissions.length !== otherPermissions.length) {
        return false;
      }

      for (var _permission2 in this.permissionsMap) {
        if (!other.permissionsMap[_permission2]) {
          return false;
        }

        var users = Object.keys(this.permissionsMap[_permission2]);
        var otherUsers = Object.keys(other.permissionsMap[_permission2]);

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
    value: function (role) {
      var name = role;

      if (role instanceof _ParseRole.default) {
        name = role.getName();
      }

      if (typeof name !== 'string') {
        throw new TypeError('role must be a Parse.Role or a String');
      }

      return "role:" + name;
    }
  }, {
    key: "_parseEntity",
    value: function (entity) {
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
    value: function (permission, userId, allowed) {
      userId = this._parseEntity(userId);

      if (typeof allowed !== 'boolean') {
        throw new TypeError('allowed must be either true or false.');
      }

      var permissions = this.permissionsMap[permission][userId];

      if (!permissions) {
        if (!allowed) {
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
    value: function (permission, userId) {
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
    value: function (permission, userId, fields) {
      userId = this._parseEntity(userId);
      var permissions = this.permissionsMap[permission][userId];

      if (!permissions) {
        this.permissionsMap[permission][userId] = [];
      }

      if (!fields || Array.isArray(fields) && fields.length === 0) {
        delete this.permissionsMap[permission][userId];
      } else if (Array.isArray(fields) && fields.every(function (field) {
        return typeof field === 'string';
      })) {
        this.permissionsMap[permission][userId] = fields;
      } else {
        throw new TypeError('fields must be an array of strings or undefined.');
      }
    }
  }, {
    key: "_setGroupPointerPermission",
    value: function (operation, pointerFields) {
      var fields = this.permissionsMap[operation];

      if (!fields) {
        this.permissionsMap[operation] = [];
      }

      if (!pointerFields || Array.isArray(pointerFields) && pointerFields.length === 0) {
        delete this.permissionsMap[operation];
      } else if (Array.isArray(pointerFields) && pointerFields.every(function (field) {
        return typeof field === 'string';
      })) {
        this.permissionsMap[operation] = pointerFields;
      } else {
        throw new TypeError(operation + ".pointerFields must be an array of strings or undefined.");
      }
    }
  }, {
    key: "_getGroupPointerPermissions",
    value: function (operation) {
      return this.permissionsMap[operation];
    }
  }, {
    key: "setReadUserFields",
    value: function (pointerFields) {
      this._setGroupPointerPermission('readUserFields', pointerFields);
    }
  }, {
    key: "getReadUserFields",
    value: function () {
      return this._getGroupPointerPermissions('readUserFields');
    }
  }, {
    key: "setWriteUserFields",
    value: function (pointerFields) {
      this._setGroupPointerPermission('writeUserFields', pointerFields);
    }
  }, {
    key: "getWriteUserFields",
    value: function () {
      return this._getGroupPointerPermissions('writeUserFields');
    }
  }, {
    key: "setProtectedFields",
    value: function (userId, fields) {
      this._setArrayAccess('protectedFields', userId, fields);
    }
  }, {
    key: "getProtectedFields",
    value: function (userId) {
      return this._getAccess('protectedFields', userId, false);
    }
  }, {
    key: "setReadAccess",
    value: function (userId, allowed) {
      this._setAccess('find', userId, allowed);

      this._setAccess('get', userId, allowed);

      this._setAccess('count', userId, allowed);
    }
  }, {
    key: "getReadAccess",
    value: function (userId) {
      return this._getAccess('find', userId) && this._getAccess('get', userId) && this._getAccess('count', userId);
    }
  }, {
    key: "setWriteAccess",
    value: function (userId, allowed) {
      this._setAccess('create', userId, allowed);

      this._setAccess('update', userId, allowed);

      this._setAccess('delete', userId, allowed);

      this._setAccess('addField', userId, allowed);
    }
  }, {
    key: "getWriteAccess",
    value: function (userId) {
      return this._getAccess('create', userId) && this._getAccess('update', userId) && this._getAccess('delete', userId) && this._getAccess('addField', userId);
    }
  }, {
    key: "setPublicReadAccess",
    value: function (allowed) {
      this.setReadAccess(PUBLIC_KEY, allowed);
    }
  }, {
    key: "getPublicReadAccess",
    value: function () {
      return this.getReadAccess(PUBLIC_KEY);
    }
  }, {
    key: "setPublicWriteAccess",
    value: function (allowed) {
      this.setWriteAccess(PUBLIC_KEY, allowed);
    }
  }, {
    key: "getPublicWriteAccess",
    value: function () {
      return this.getWriteAccess(PUBLIC_KEY);
    }
  }, {
    key: "setPublicProtectedFields",
    value: function (fields) {
      this.setProtectedFields(PUBLIC_KEY, fields);
    }
  }, {
    key: "getPublicProtectedFields",
    value: function () {
      return this.getProtectedFields(PUBLIC_KEY);
    }
  }, {
    key: "getRoleReadAccess",
    value: function (role) {
      return this.getReadAccess(this._getRoleName(role));
    }
  }, {
    key: "getRoleWriteAccess",
    value: function (role) {
      return this.getWriteAccess(this._getRoleName(role));
    }
  }, {
    key: "setRoleReadAccess",
    value: function (role, allowed) {
      this.setReadAccess(this._getRoleName(role), allowed);
    }
  }, {
    key: "setRoleWriteAccess",
    value: function (role, allowed) {
      this.setWriteAccess(this._getRoleName(role), allowed);
    }
  }, {
    key: "getRoleProtectedFields",
    value: function (role) {
      return this.getProtectedFields(this._getRoleName(role));
    }
  }, {
    key: "setRoleProtectedFields",
    value: function (role, fields) {
      this.setProtectedFields(this._getRoleName(role), fields);
    }
  }]);
  return ParseCLP;
}();

var _default = ParseCLP;
exports.default = _default;