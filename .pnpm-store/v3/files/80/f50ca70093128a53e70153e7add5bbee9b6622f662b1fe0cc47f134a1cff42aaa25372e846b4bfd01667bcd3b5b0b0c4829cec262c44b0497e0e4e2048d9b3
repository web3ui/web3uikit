var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ParseRole = _interopRequireDefault(require("./ParseRole"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var PUBLIC_KEY = '*';

var ParseACL = function () {
  function ParseACL(arg1) {
    (0, _classCallCheck2.default)(this, ParseACL);
    this.permissionsById = {};

    if (arg1 && typeof arg1 === 'object') {
      if (arg1 instanceof _ParseUser.default) {
        this.setReadAccess(arg1, true);
        this.setWriteAccess(arg1, true);
      } else {
        for (var _userId in arg1) {
          var accessList = arg1[_userId];
          this.permissionsById[_userId] = {};

          for (var _permission in accessList) {
            var allowed = accessList[_permission];

            if (_permission !== 'read' && _permission !== 'write') {
              throw new TypeError('Tried to create an ACL with an invalid permission type.');
            }

            if (typeof allowed !== 'boolean') {
              throw new TypeError('Tried to create an ACL with an invalid permission value.');
            }

            this.permissionsById[_userId][_permission] = allowed;
          }
        }
      }
    } else if (typeof arg1 === 'function') {
      throw new TypeError('ParseACL constructed with a function. Did you forget ()?');
    }
  }

  (0, _createClass2.default)(ParseACL, [{
    key: "toJSON",
    value: function () {
      var permissions = {};

      for (var p in this.permissionsById) {
        permissions[p] = this.permissionsById[p];
      }

      return permissions;
    }
  }, {
    key: "equals",
    value: function (other) {
      if (!(other instanceof ParseACL)) {
        return false;
      }

      var users = Object.keys(this.permissionsById);
      var otherUsers = Object.keys(other.permissionsById);

      if (users.length !== otherUsers.length) {
        return false;
      }

      for (var u in this.permissionsById) {
        if (!other.permissionsById[u]) {
          return false;
        }

        if (this.permissionsById[u].read !== other.permissionsById[u].read) {
          return false;
        }

        if (this.permissionsById[u].write !== other.permissionsById[u].write) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "_setAccess",
    value: function (accessType, userId, allowed) {
      if (userId instanceof _ParseUser.default) {
        userId = userId.id;
      } else if (userId instanceof _ParseRole.default) {
        var name = userId.getName();

        if (!name) {
          throw new TypeError('Role must have a name');
        }

        userId = "role:" + name;
      }

      if (typeof userId !== 'string') {
        throw new TypeError('userId must be a string.');
      }

      if (typeof allowed !== 'boolean') {
        throw new TypeError('allowed must be either true or false.');
      }

      var permissions = this.permissionsById[userId];

      if (!permissions) {
        if (!allowed) {
          return;
        }

        permissions = {};
        this.permissionsById[userId] = permissions;
      }

      if (allowed) {
        this.permissionsById[userId][accessType] = true;
      } else {
        delete permissions[accessType];

        if (Object.keys(permissions).length === 0) {
          delete this.permissionsById[userId];
        }
      }
    }
  }, {
    key: "_getAccess",
    value: function (accessType, userId) {
      if (userId instanceof _ParseUser.default) {
        userId = userId.id;

        if (!userId) {
          throw new Error('Cannot get access for a ParseUser without an ID');
        }
      } else if (userId instanceof _ParseRole.default) {
        var name = userId.getName();

        if (!name) {
          throw new TypeError('Role must have a name');
        }

        userId = "role:" + name;
      }

      var permissions = this.permissionsById[userId];

      if (!permissions) {
        return false;
      }

      return !!permissions[accessType];
    }
  }, {
    key: "setReadAccess",
    value: function (userId, allowed) {
      this._setAccess('read', userId, allowed);
    }
  }, {
    key: "getReadAccess",
    value: function (userId) {
      return this._getAccess('read', userId);
    }
  }, {
    key: "setWriteAccess",
    value: function (userId, allowed) {
      this._setAccess('write', userId, allowed);
    }
  }, {
    key: "getWriteAccess",
    value: function (userId) {
      return this._getAccess('write', userId);
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
    key: "getRoleReadAccess",
    value: function (role) {
      if (role instanceof _ParseRole.default) {
        role = role.getName();
      }

      if (typeof role !== 'string') {
        throw new TypeError('role must be a ParseRole or a String');
      }

      return this.getReadAccess("role:" + role);
    }
  }, {
    key: "getRoleWriteAccess",
    value: function (role) {
      if (role instanceof _ParseRole.default) {
        role = role.getName();
      }

      if (typeof role !== 'string') {
        throw new TypeError('role must be a ParseRole or a String');
      }

      return this.getWriteAccess("role:" + role);
    }
  }, {
    key: "setRoleReadAccess",
    value: function (role, allowed) {
      if (role instanceof _ParseRole.default) {
        role = role.getName();
      }

      if (typeof role !== 'string') {
        throw new TypeError('role must be a ParseRole or a String');
      }

      this.setReadAccess("role:" + role, allowed);
    }
  }, {
    key: "setRoleWriteAccess",
    value: function (role, allowed) {
      if (role instanceof _ParseRole.default) {
        role = role.getName();
      }

      if (typeof role !== 'string') {
        throw new TypeError('role must be a ParseRole or a String');
      }

      this.setWriteAccess("role:" + role, allowed);
    }
  }]);
  return ParseACL;
}();

var _default = ParseACL;
exports.default = _default;