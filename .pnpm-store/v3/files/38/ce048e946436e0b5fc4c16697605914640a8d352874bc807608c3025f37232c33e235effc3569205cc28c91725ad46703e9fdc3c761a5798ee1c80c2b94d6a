"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseCLP = _interopRequireDefault(require("./ParseCLP"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
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

const FIELD_TYPES = ['String', 'Number', 'Boolean', 'Date', 'File', 'GeoPoint', 'Polygon', 'Array', 'Object', 'Pointer', 'Relation'];
/*:: type FieldOptions = {
  required: boolean,
  defaultValue: mixed,
};*/

/**
 * A Parse.Schema object is for handling schema data from Parse.
 * <p>All the schemas methods require MasterKey.
 *
 * When adding fields, you may set required and default values. (Requires Parse Server 3.7.0+)
 *
 * <pre>
 * const options = { required: true, defaultValue: 'hello world' };
 * const schema = new Parse.Schema('MyClass');
 * schema.addString('field', options);
 * schema.addIndex('index_name', { 'field': 1 });
 * schema.save();
 * </pre>
 * </p>
 *
 * @alias Parse.Schema
 */

class ParseSchema {
  /**
   * @param {string} className Parse Class string.
   */
  constructor(className
  /*: string*/
  ) {
    _defineProperty(this, "className", void 0);

    _defineProperty(this, "_fields", void 0);

    _defineProperty(this, "_indexes", void 0);

    _defineProperty(this, "_clp", void 0);

    if (typeof className === 'string') {
      if (className === 'User' && _CoreManager.default.get('PERFORM_USER_REWRITE')) {
        this.className = '_User';
      } else {
        this.className = className;
      }
    }

    this._fields = {};
    this._indexes = {};
  }
  /**
   * Static method to get all schemas
   *
   * @returns {Promise} A promise that is resolved with the result when
   * the query completes.
   */


  static all() {
    const controller = _CoreManager.default.getSchemaController();

    return controller.get('').then(response => {
      if (response.results.length === 0) {
        throw new Error('Schema not found.');
      }

      return response.results;
    });
  }
  /**
   * Get the Schema from Parse
   *
   * @returns {Promise} A promise that is resolved with the result when
   * the query completes.
   */


  get() {
    this.assertClassName();

    const controller = _CoreManager.default.getSchemaController();

    return controller.get(this.className).then(response => {
      if (!response) {
        throw new Error('Schema not found.');
      }

      return response;
    });
  }
  /**
   * Create a new Schema on Parse
   *
   * @returns {Promise} A promise that is resolved with the result when
   * the query completes.
   */


  save() {
    this.assertClassName();

    const controller = _CoreManager.default.getSchemaController();

    const params = {
      className: this.className,
      fields: this._fields,
      indexes: this._indexes,
      classLevelPermissions: this._clp
    };
    return controller.create(this.className, params);
  }
  /**
   * Update a Schema on Parse
   *
   * @returns {Promise} A promise that is resolved with the result when
   * the query completes.
   */


  update() {
    this.assertClassName();

    const controller = _CoreManager.default.getSchemaController();

    const params = {
      className: this.className,
      fields: this._fields,
      indexes: this._indexes,
      classLevelPermissions: this._clp
    };
    this._fields = {};
    this._indexes = {};
    return controller.update(this.className, params);
  }
  /**
   * Removing a Schema from Parse
   * Can only be used on Schema without objects
   *
   * @returns {Promise} A promise that is resolved with the result when
   * the query completes.
   */


  delete() {
    this.assertClassName();

    const controller = _CoreManager.default.getSchemaController();

    return controller.delete(this.className);
  }
  /**
   * Removes all objects from a Schema (class) in Parse.
   * EXERCISE CAUTION, running this will delete all objects for this schema and cannot be reversed
   *
   * @returns {Promise} A promise that is resolved with the result when
   * the query completes.
   */


  purge() {
    this.assertClassName();

    const controller = _CoreManager.default.getSchemaController();

    return controller.purge(this.className);
  }
  /**
   * Assert if ClassName has been filled
   *
   * @private
   */


  assertClassName() {
    if (!this.className) {
      throw new Error('You must set a Class Name before making any request.');
    }
  }
  /**
   * Sets Class Level Permissions when creating / updating a Schema.
   * EXERCISE CAUTION, running this may override CLP for this schema and cannot be reversed
   *
   * @param {object | Parse.CLP} clp Class Level Permissions
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  setCLP(clp
  /*: PermissionsMap | ParseCLP*/
  ) {
    if (clp instanceof _ParseCLP.default) {
      this._clp = clp.toJSON();
    } else {
      this._clp = clp;
    }

    return this;
  }
  /**
   * Adding a Field to Create / Update a Schema
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {string} type Can be a (String|Number|Boolean|Date|Parse.File|Parse.GeoPoint|Array|Object|Pointer|Parse.Relation)
   * @param {object} options
   * Valid options are:<ul>
   *   <li>required: If field is not set, save operation fails (Requires Parse Server 3.7.0+)
   *   <li>defaultValue: If field is not set, a default value is selected (Requires Parse Server 3.7.0+)
   * </ul>
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addField(name
  /*: string*/
  , type
  /*: string*/
  , options
  /*: FieldOptions*/
  = {}) {
    type = type || 'String';

    if (!name) {
      throw new Error('field name may not be null.');
    }

    if (FIELD_TYPES.indexOf(type) === -1) {
      throw new Error(`${type} is not a valid type.`);
    }

    const fieldOptions = {
      type
    };

    if (typeof options.required === 'boolean') {
      fieldOptions.required = options.required;
    }

    if (options.defaultValue !== undefined) {
      fieldOptions.defaultValue = options.defaultValue;
    }

    this._fields[name] = fieldOptions;
    return this;
  }
  /**
   * Adding an Index to Create / Update a Schema
   *
   * @param {string} name Name of the index
   * @param {object} index { field: value }
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   *
   * <pre>
   * schema.addIndex('index_name', { 'field': 1 });
   * </pre>
   */


  addIndex(name
  /*: string*/
  , index
  /*: any*/
  ) {
    if (!name) {
      throw new Error('index name may not be null.');
    }

    if (!index) {
      throw new Error('index may not be null.');
    }

    this._indexes[name] = index;
    return this;
  }
  /**
   * Adding String Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addString(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    return this.addField(name, 'String', options);
  }
  /**
   * Adding Number Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addNumber(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    return this.addField(name, 'Number', options);
  }
  /**
   * Adding Boolean Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addBoolean(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    return this.addField(name, 'Boolean', options);
  }
  /**
   * Adding Date Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addDate(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    if (options && options.defaultValue) {
      options.defaultValue = {
        __type: 'Date',
        iso: new Date(options.defaultValue)
      };
    }

    return this.addField(name, 'Date', options);
  }
  /**
   * Adding File Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addFile(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    return this.addField(name, 'File', options);
  }
  /**
   * Adding GeoPoint Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addGeoPoint(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    return this.addField(name, 'GeoPoint', options);
  }
  /**
   * Adding Polygon Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addPolygon(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    return this.addField(name, 'Polygon', options);
  }
  /**
   * Adding Array Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addArray(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    return this.addField(name, 'Array', options);
  }
  /**
   * Adding Object Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addObject(name
  /*: string*/
  , options
  /*: FieldOptions*/
  ) {
    return this.addField(name, 'Object', options);
  }
  /**
   * Adding Pointer Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {string} targetClass Name of the target Pointer Class
   * @param {object} options See {@link https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Schema.html#addField addField}
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addPointer(name
  /*: string*/
  , targetClass
  /*: string*/
  , options
  /*: FieldOptions*/
  = {}) {
    if (!name) {
      throw new Error('field name may not be null.');
    }

    if (!targetClass) {
      throw new Error('You need to set the targetClass of the Pointer.');
    }

    const fieldOptions = {
      type: 'Pointer',
      targetClass
    };

    if (typeof options.required === 'boolean') {
      fieldOptions.required = options.required;
    }

    if (options.defaultValue !== undefined) {
      fieldOptions.defaultValue = options.defaultValue;

      if (options.defaultValue instanceof _ParseObject.default) {
        fieldOptions.defaultValue = options.defaultValue.toPointer();
      }
    }

    this._fields[name] = fieldOptions;
    return this;
  }
  /**
   * Adding Relation Field
   *
   * @param {string} name Name of the field that will be created on Parse
   * @param {string} targetClass Name of the target Pointer Class
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  addRelation(name
  /*: string*/
  , targetClass
  /*: string*/
  ) {
    if (!name) {
      throw new Error('field name may not be null.');
    }

    if (!targetClass) {
      throw new Error('You need to set the targetClass of the Relation.');
    }

    this._fields[name] = {
      type: 'Relation',
      targetClass
    };
    return this;
  }
  /**
   * Deleting a Field to Update on a Schema
   *
   * @param {string} name Name of the field
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  deleteField(name
  /*: string*/
  ) {
    this._fields[name] = {
      __op: 'Delete'
    };
    return this;
  }
  /**
   * Deleting an Index to Update on a Schema
   *
   * @param {string} name Name of the field
   * @returns {Parse.Schema} Returns the schema, so you can chain this call.
   */


  deleteIndex(name
  /*: string*/
  ) {
    this._indexes[name] = {
      __op: 'Delete'
    };
    return this;
  }

}

const DefaultController = {
  send(className
  /*: string*/
  , method
  /*: string*/
  , params
  /*: any*/
  = {})
  /*: Promise*/
  {
    const RESTController = _CoreManager.default.getRESTController();

    return RESTController.request(method, `schemas/${className}`, params, {
      useMasterKey: true
    });
  },

  get(className
  /*: string*/
  )
  /*: Promise*/
  {
    return this.send(className, 'GET');
  },

  create(className
  /*: string*/
  , params
  /*: any*/
  )
  /*: Promise*/
  {
    return this.send(className, 'POST', params);
  },

  update(className
  /*: string*/
  , params
  /*: any*/
  )
  /*: Promise*/
  {
    return this.send(className, 'PUT', params);
  },

  delete(className
  /*: string*/
  )
  /*: Promise*/
  {
    return this.send(className, 'DELETE');
  },

  purge(className
  /*: string*/
  )
  /*: Promise*/
  {
    const RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('DELETE', `purge/${className}`, {}, {
      useMasterKey: true
    });
  }

};

_CoreManager.default.setSchemaController(DefaultController);

var _default = ParseSchema;
exports.default = _default;