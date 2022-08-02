"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ParseRole = _interopRequireDefault(require("./ParseRole"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const PUBLIC_KEY = '*';
const VALID_PERMISSIONS
/*: Map<string, UsersMap>*/
= new Map();
VALID_PERMISSIONS.set('get', {});
VALID_PERMISSIONS.set('find', {});
VALID_PERMISSIONS.set('count', {});
VALID_PERMISSIONS.set('create', {});
VALID_PERMISSIONS.set('update', {});
VALID_PERMISSIONS.set('delete', {});
VALID_PERMISSIONS.set('addField', {});
const VALID_PERMISSIONS_EXTENDED
/*: Map<string, UsersMap>*/
= new Map();
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

class ParseCLP {
  /**
   * @param {(Parse.User | Parse.Role | object)} userId The user to initialize the CLP for
   */
  constructor(userId
  /*: ParseUser | ParseRole | PermissionsMap*/
  ) {
    _defineProperty(this, "permissionsMap", void 0);

    this.permissionsMap = {}; // Initialize permissions Map with default permissions

    for (const [operation, group] of VALID_PERMISSIONS.entries()) {
      this.permissionsMap[operation] = _objectSpread({}, group);
      const action = operation.charAt(0).toUpperCase() + operation.slice(1);

      this[`get${action}RequiresAuthentication`] = function () {
        return this._getAccess(operation, 'requiresAuthentication');
      };

      this[`set${action}RequiresAuthentication`] = function (allowed) {
        this._setAccess(operation, 'requiresAuthentication', allowed);
      };

      this[`get${action}PointerFields`] = function () {
        return this._getAccess(operation, 'pointerFields', false);
      };

      this[`set${action}PointerFields`] = function (pointerFields) {
        this._setArrayAccess(operation, 'pointerFields', pointerFields);
      };

      this[`get${action}Access`] = function (entity) {
        return this._getAccess(operation, entity);
      };

      this[`set${action}Access`] = function (entity, allowed) {
        this._setAccess(operation, entity, allowed);
      };

      this[`getPublic${action}Access`] = function () {
        return this[`get${action}Access`](PUBLIC_KEY);
      };

      this[`setPublic${action}Access`] = function (allowed) {
        this[`set${action}Access`](PUBLIC_KEY, allowed);
      };

      this[`getRole${action}Access`] = function (role) {
        return this[`get${action}Access`](this._getRoleName(role));
      };

      this[`setRole${action}Access`] = function (role, allowed) {
        this[`set${action}Access`](this._getRoleName(role), allowed);
      };
    } // Initialize permissions Map with default extended permissions


    for (const [operation, group] of VALID_PERMISSIONS_EXTENDED.entries()) {
      this.permissionsMap[operation] = _objectSpread({}, group);
    }

    if (userId && typeof userId === 'object') {
      if (userId instanceof _ParseUser.default) {
        this.setReadAccess(userId, true);
        this.setWriteAccess(userId, true);
      } else if (userId instanceof _ParseRole.default) {
        this.setRoleReadAccess(userId, true);
        this.setRoleWriteAccess(userId, true);
      } else {
        for (const permission in userId) {
          const users = userId[permission];
          const isValidPermission = !!VALID_PERMISSIONS.get(permission);
          const isValidPermissionExtended = !!VALID_PERMISSIONS_EXTENDED.get(permission);
          const isValidGroupPermission = ['readUserFields', 'writeUserFields'].includes(permission);

          if (typeof permission !== 'string' || !(isValidPermission || isValidPermissionExtended || isValidGroupPermission)) {
            throw new TypeError('Tried to create an CLP with an invalid permission type.');
          }

          if (isValidGroupPermission) {
            if (users.every(pointer => typeof pointer === 'string')) {
              this.permissionsMap[permission] = users;
              continue;
            } else {
              throw new TypeError('Tried to create an CLP with an invalid permission value.');
            }
          }

          for (const user in users) {
            const allowed = users[user];

            if (typeof allowed !== 'boolean' && !isValidPermissionExtended && user !== 'pointerFields') {
              throw new TypeError('Tried to create an CLP with an invalid permission value.');
            }

            this.permissionsMap[permission][user] = allowed;
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


  toJSON()
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


  equals(other
  /*: ParseCLP*/
  )
  /*: boolean*/
  {
    if (!(other instanceof ParseCLP)) {
      return false;
    }

    const permissions = Object.keys(this.permissionsMap);
    const otherPermissions = Object.keys(other.permissionsMap);

    if (permissions.length !== otherPermissions.length) {
      return false;
    }

    for (const permission in this.permissionsMap) {
      if (!other.permissionsMap[permission]) {
        return false;
      }

      const users = Object.keys(this.permissionsMap[permission]);
      const otherUsers = Object.keys(other.permissionsMap[permission]);

      if (users.length !== otherUsers.length) {
        return false;
      }

      for (const user in this.permissionsMap[permission]) {
        if (!other.permissionsMap[permission][user]) {
          return false;
        }

        if (this.permissionsMap[permission][user] !== other.permissionsMap[permission][user]) {
          return false;
        }
      }
    }

    return true;
  }

  _getRoleName(role
  /*: ParseRole | string*/
  )
  /*: string*/
  {
    let name = role;

    if (role instanceof _ParseRole.default) {
      // Normalize to the String name
      name = role.getName();
    }

    if (typeof name !== 'string') {
      throw new TypeError('role must be a Parse.Role or a String');
    }

    return `role:${name}`;
  }

  _parseEntity(entity
  /*: Entity*/
  ) {
    let userId = entity;

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

  _setAccess(permission
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

    const permissions = this.permissionsMap[permission][userId];

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

  _getAccess(permission
  /*: string*/
  , userId
  /*: Entity*/
  , returnBoolean = true)
  /*: boolean | string[]*/
  {
    userId = this._parseEntity(userId);
    const permissions = this.permissionsMap[permission][userId];

    if (returnBoolean) {
      if (!permissions) {
        return false;
      }

      return !!this.permissionsMap[permission][userId];
    }

    return permissions;
  }

  _setArrayAccess(permission
  /*: string*/
  , userId
  /*: Entity*/
  , fields
  /*: string*/
  ) {
    userId = this._parseEntity(userId);
    const permissions = this.permissionsMap[permission][userId];

    if (!permissions) {
      this.permissionsMap[permission][userId] = [];
    }

    if (!fields || Array.isArray(fields) && fields.length === 0) {
      delete this.permissionsMap[permission][userId];
    } else if (Array.isArray(fields) && fields.every(field => typeof field === 'string')) {
      this.permissionsMap[permission][userId] = fields;
    } else {
      throw new TypeError('fields must be an array of strings or undefined.');
    }
  }

  _setGroupPointerPermission(operation
  /*: string*/
  , pointerFields
  /*: string[]*/
  ) {
    const fields = this.permissionsMap[operation];

    if (!fields) {
      this.permissionsMap[operation] = [];
    }

    if (!pointerFields || Array.isArray(pointerFields) && pointerFields.length === 0) {
      delete this.permissionsMap[operation];
    } else if (Array.isArray(pointerFields) && pointerFields.every(field => typeof field === 'string')) {
      this.permissionsMap[operation] = pointerFields;
    } else {
      throw new TypeError(`${operation}.pointerFields must be an array of strings or undefined.`);
    }
  }

  _getGroupPointerPermissions(operation
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


  setReadUserFields(pointerFields
  /*: string[]*/
  ) {
    this._setGroupPointerPermission('readUserFields', pointerFields);
  }
  /**
   * @returns {string[]} User pointer fields
   */


  getReadUserFields()
  /*: string[]*/
  {
    return this._getGroupPointerPermissions('readUserFields');
  }
  /**
   * Sets user pointer fields to allow permission for create/delete/update/addField operations
   *
   * @param {string[]} pointerFields User pointer fields
   */


  setWriteUserFields(pointerFields
  /*: string[]*/
  ) {
    this._setGroupPointerPermission('writeUserFields', pointerFields);
  }
  /**
   * @returns {string[]} User pointer fields
   */


  getWriteUserFields()
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


  setProtectedFields(userId
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


  getProtectedFields(userId
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


  setReadAccess(userId
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


  getReadAccess(userId
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


  setWriteAccess(userId
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


  getWriteAccess(userId
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


  setPublicReadAccess(allowed
  /*: boolean*/
  ) {
    this.setReadAccess(PUBLIC_KEY, allowed);
  }
  /**
   * Gets whether the public is allowed to read from this class.
   *
   * @returns {boolean}
   */


  getPublicReadAccess()
  /*: boolean*/
  {
    return this.getReadAccess(PUBLIC_KEY);
  }
  /**
   * Sets whether the public is allowed to write to this class.
   *
   * @param {boolean} allowed
   */


  setPublicWriteAccess(allowed
  /*: boolean*/
  ) {
    this.setWriteAccess(PUBLIC_KEY, allowed);
  }
  /**
   * Gets whether the public is allowed to write to this class.
   *
   * @returns {boolean}
   */


  getPublicWriteAccess()
  /*: boolean*/
  {
    return this.getWriteAccess(PUBLIC_KEY);
  }
  /**
   * Sets whether the public is allowed to protect fields in this class.
   *
   * @param {string[]} fields
   */


  setPublicProtectedFields(fields
  /*: string[]*/
  ) {
    this.setProtectedFields(PUBLIC_KEY, fields);
  }
  /**
   * Gets whether the public is allowed to read fields from this class.
   *
   * @returns {string[]}
   */


  getPublicProtectedFields()
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


  getRoleReadAccess(role
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


  getRoleWriteAccess(role
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


  setRoleReadAccess(role
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


  setRoleWriteAccess(role
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


  getRoleProtectedFields(role
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


  setRoleProtectedFields(role
  /*: ParseRole | string*/
  , fields
  /*: string[]*/
  ) {
    this.setProtectedFields(this._getRoleName(role), fields);
  }

}

var _default = ParseCLP;
exports.default = _default;