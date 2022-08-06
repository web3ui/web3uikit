"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseObject2 = _interopRequireDefault(require("./ParseObject"));

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Represents a Role on the Parse server. Roles represent groupings of
 * Users for the purposes of granting permissions (e.g. specifying an ACL
 * for an Object). Roles are specified by their sets of child users and
 * child roles, all of which are granted any permissions that the parent
 * role has.
 *
 * <p>Roles must have a name (which cannot be changed after creation of the
 * role), and must specify an ACL.</p>
 *
 * @alias Parse.Role
 * @augments Parse.Object
 */


var ParseRole = /*#__PURE__*/function (_ParseObject) {
  (0, _inherits2.default)(ParseRole, _ParseObject);

  var _super = _createSuper(ParseRole);
  /**
   * @param {string} name The name of the Role to create.
   * @param {Parse.ACL} acl The ACL for this role. Roles must have an ACL.
   * A Parse.Role is a local representation of a role persisted to the Parse
   * cloud.
   */


  function ParseRole(name
  /*: string*/
  , acl
  /*: ParseACL*/
  ) {
    var _this;

    (0, _classCallCheck2.default)(this, ParseRole);
    _this = _super.call(this, '_Role');

    if (typeof name === 'string' && acl instanceof _ParseACL.default) {
      _this.setName(name);

      _this.setACL(acl);
    }

    return _this;
  }
  /**
   * Gets the name of the role.  You can alternatively call role.get("name")
   *
   * @returns {string} the name of the role.
   */


  (0, _createClass2.default)(ParseRole, [{
    key: "getName",
    value: function ()
    /*: ?string*/
    {
      var name = this.get('name');

      if (name == null || typeof name === 'string') {
        return name;
      }

      return '';
    }
    /**
     * Sets the name for a role. This value must be set before the role has
     * been saved to the server, and cannot be set once the role has been
     * saved.
     *
     * <p>
     *   A role's name can only contain alphanumeric characters, _, -, and
     *   spaces.
     * </p>
     *
     * <p>This is equivalent to calling role.set("name", name)</p>
     *
     * @param {string} name The name of the role.
     * @param {object} options Standard options object with success and error
     *     callbacks.
     * @returns {(ParseObject|boolean)} true if the set succeeded.
     */

  }, {
    key: "setName",
    value: function (name
    /*: string*/
    , options
    /*:: ?: mixed*/
    )
    /*: ParseObject | boolean*/
    {
      return this.set('name', name, options);
    }
    /**
     * Gets the Parse.Relation for the Parse.Users that are direct
     * children of this role. These users are granted any privileges that this
     * role has been granted (e.g. read or write access through ACLs). You can
     * add or remove users from the role through this relation.
     *
     * <p>This is equivalent to calling role.relation("users")</p>
     *
     * @returns {Parse.Relation} the relation for the users belonging to this
     *     role.
     */

  }, {
    key: "getUsers",
    value: function ()
    /*: ParseRelation*/
    {
      return this.relation('users');
    }
    /**
     * Gets the Parse.Relation for the Parse.Roles that are direct
     * children of this role. These roles' users are granted any privileges that
     * this role has been granted (e.g. read or write access through ACLs). You
     * can add or remove child roles from this role through this relation.
     *
     * <p>This is equivalent to calling role.relation("roles")</p>
     *
     * @returns {Parse.Relation} the relation for the roles belonging to this
     *     role.
     */

  }, {
    key: "getRoles",
    value: function ()
    /*: ParseRelation*/
    {
      return this.relation('roles');
    }
  }, {
    key: "validate",
    value: function (attrs
    /*: AttributeMap*/
    , options
    /*:: ?: mixed*/
    )
    /*: ParseError | boolean*/
    {
      var isInvalid = (0, _get2.default)((0, _getPrototypeOf2.default)(ParseRole.prototype), "validate", this).call(this, attrs, options);

      if (isInvalid) {
        return isInvalid;
      }

      if ('name' in attrs && attrs.name !== this.getName()) {
        var newName = attrs.name;

        if (this.id && this.id !== attrs.objectId) {
          // Check to see if the objectId being set matches this.id
          // This happens during a fetch -- the id is set before calling fetch
          // Let the name be set in this case
          return new _ParseError.default(_ParseError.default.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
        }

        if (typeof newName !== 'string') {
          return new _ParseError.default(_ParseError.default.OTHER_CAUSE, "A role's name must be a String.");
        }

        if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
          return new _ParseError.default(_ParseError.default.OTHER_CAUSE, "A role's name can be only contain alphanumeric characters, _, -, and spaces.");
        }
      }

      return false;
    }
  }]);
  return ParseRole;
}(_ParseObject2.default);

_ParseObject2.default.registerSubclass('_Role', ParseRole);

var _default = ParseRole;
exports.default = _default;