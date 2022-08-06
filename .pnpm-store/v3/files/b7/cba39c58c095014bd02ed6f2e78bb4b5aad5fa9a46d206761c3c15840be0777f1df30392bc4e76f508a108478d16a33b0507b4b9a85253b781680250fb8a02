var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseCLP = _interopRequireDefault(require("./ParseCLP"));

var FIELD_TYPES = ['String', 'Number', 'Boolean', 'Date', 'File', 'GeoPoint', 'Polygon', 'Array', 'Object', 'Pointer', 'Relation'];

var ParseSchema = function () {
  function ParseSchema(className) {
    (0, _classCallCheck2.default)(this, ParseSchema);

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

  (0, _createClass2.default)(ParseSchema, [{
    key: "get",
    value: function () {
      this.assertClassName();

      var controller = _CoreManager.default.getSchemaController();

      return controller.get(this.className).then(function (response) {
        if (!response) {
          throw new Error('Schema not found.');
        }

        return response;
      });
    }
  }, {
    key: "save",
    value: function () {
      this.assertClassName();

      var controller = _CoreManager.default.getSchemaController();

      var params = {
        className: this.className,
        fields: this._fields,
        indexes: this._indexes,
        classLevelPermissions: this._clp
      };
      return controller.create(this.className, params);
    }
  }, {
    key: "update",
    value: function () {
      this.assertClassName();

      var controller = _CoreManager.default.getSchemaController();

      var params = {
        className: this.className,
        fields: this._fields,
        indexes: this._indexes,
        classLevelPermissions: this._clp
      };
      this._fields = {};
      this._indexes = {};
      return controller.update(this.className, params);
    }
  }, {
    key: "delete",
    value: function () {
      this.assertClassName();

      var controller = _CoreManager.default.getSchemaController();

      return controller.delete(this.className);
    }
  }, {
    key: "purge",
    value: function () {
      this.assertClassName();

      var controller = _CoreManager.default.getSchemaController();

      return controller.purge(this.className);
    }
  }, {
    key: "assertClassName",
    value: function () {
      if (!this.className) {
        throw new Error('You must set a Class Name before making any request.');
      }
    }
  }, {
    key: "setCLP",
    value: function (clp) {
      if (clp instanceof _ParseCLP.default) {
        this._clp = clp.toJSON();
      } else {
        this._clp = clp;
      }

      return this;
    }
  }, {
    key: "addField",
    value: function (name, type) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      type = type || 'String';

      if (!name) {
        throw new Error('field name may not be null.');
      }

      if (FIELD_TYPES.indexOf(type) === -1) {
        throw new Error(type + " is not a valid type.");
      }

      var fieldOptions = {
        type: type
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
  }, {
    key: "addIndex",
    value: function (name, index) {
      if (!name) {
        throw new Error('index name may not be null.');
      }

      if (!index) {
        throw new Error('index may not be null.');
      }

      this._indexes[name] = index;
      return this;
    }
  }, {
    key: "addString",
    value: function (name, options) {
      return this.addField(name, 'String', options);
    }
  }, {
    key: "addNumber",
    value: function (name, options) {
      return this.addField(name, 'Number', options);
    }
  }, {
    key: "addBoolean",
    value: function (name, options) {
      return this.addField(name, 'Boolean', options);
    }
  }, {
    key: "addDate",
    value: function (name, options) {
      if (options && options.defaultValue) {
        options.defaultValue = {
          __type: 'Date',
          iso: new Date(options.defaultValue)
        };
      }

      return this.addField(name, 'Date', options);
    }
  }, {
    key: "addFile",
    value: function (name, options) {
      return this.addField(name, 'File', options);
    }
  }, {
    key: "addGeoPoint",
    value: function (name, options) {
      return this.addField(name, 'GeoPoint', options);
    }
  }, {
    key: "addPolygon",
    value: function (name, options) {
      return this.addField(name, 'Polygon', options);
    }
  }, {
    key: "addArray",
    value: function (name, options) {
      return this.addField(name, 'Array', options);
    }
  }, {
    key: "addObject",
    value: function (name, options) {
      return this.addField(name, 'Object', options);
    }
  }, {
    key: "addPointer",
    value: function (name, targetClass) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!name) {
        throw new Error('field name may not be null.');
      }

      if (!targetClass) {
        throw new Error('You need to set the targetClass of the Pointer.');
      }

      var fieldOptions = {
        type: 'Pointer',
        targetClass: targetClass
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
  }, {
    key: "addRelation",
    value: function (name, targetClass) {
      if (!name) {
        throw new Error('field name may not be null.');
      }

      if (!targetClass) {
        throw new Error('You need to set the targetClass of the Relation.');
      }

      this._fields[name] = {
        type: 'Relation',
        targetClass: targetClass
      };
      return this;
    }
  }, {
    key: "deleteField",
    value: function (name) {
      this._fields[name] = {
        __op: 'Delete'
      };
      return this;
    }
  }, {
    key: "deleteIndex",
    value: function (name) {
      this._indexes[name] = {
        __op: 'Delete'
      };
      return this;
    }
  }], [{
    key: "all",
    value: function () {
      var controller = _CoreManager.default.getSchemaController();

      return controller.get('').then(function (response) {
        if (response.results.length === 0) {
          throw new Error('Schema not found.');
        }

        return response.results;
      });
    }
  }]);
  return ParseSchema;
}();

var DefaultController = {
  send: function (className, method) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request(method, "schemas/" + className, params, {
      useMasterKey: true
    });
  },
  get: function (className) {
    return this.send(className, 'GET');
  },
  create: function (className, params) {
    return this.send(className, 'POST', params);
  },
  update: function (className, params) {
    return this.send(className, 'PUT', params);
  },
  delete: function (className) {
    return this.send(className, 'DELETE');
  },
  purge: function (className) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('DELETE', "purge/" + className, {}, {
      useMasterKey: true
    });
  }
};

_CoreManager.default.setSchemaController(DefaultController);

var _default = ParseSchema;
exports.default = _default;