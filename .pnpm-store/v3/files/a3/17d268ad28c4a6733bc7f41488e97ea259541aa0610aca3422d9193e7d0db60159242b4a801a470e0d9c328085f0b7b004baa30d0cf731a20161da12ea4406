var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _encode = _interopRequireDefault(require("./encode"));

var _promiseUtils = require("./promiseUtils");

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _OfflineQuery = _interopRequireDefault(require("./OfflineQuery"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

function quote(s) {
  return "\\Q" + s.replace('\\E', '\\E\\\\E\\Q') + "\\E";
}

function _getClassNameFromQueries(queries) {
  var className = null;
  queries.forEach(function (q) {
    if (!className) {
      className = q.className;
    }

    if (className !== q.className) {
      throw new Error('All queries must be for the same class.');
    }
  });
  return className;
}

function handleSelectResult(data, select) {
  var serverDataMask = {};
  select.forEach(function (field) {
    var hasSubObjectSelect = field.indexOf('.') !== -1;

    if (!hasSubObjectSelect && !data.hasOwnProperty(field)) {
      data[field] = undefined;
    } else if (hasSubObjectSelect) {
      var pathComponents = field.split('.');
      var _obj = data;
      var serverMask = serverDataMask;
      pathComponents.forEach(function (component, index, arr) {
        if (_obj && !_obj.hasOwnProperty(component)) {
          _obj[component] = undefined;
        }

        if (_obj && typeof _obj === 'object') {
          _obj = _obj[component];
        }

        if (index < arr.length - 1) {
          if (!serverMask[component]) {
            serverMask[component] = {};
          }

          serverMask = serverMask[component];
        }
      });
    }
  });

  if (Object.keys(serverDataMask).length > 0) {
    var serverData = _CoreManager.default.getObjectStateController().getServerData({
      id: data.objectId,
      className: data.className
    });

    copyMissingDataWithMask(serverData, data, serverDataMask, false);
  }
}

function copyMissingDataWithMask(src, dest, mask, copyThisLevel) {
  if (copyThisLevel) {
    for (var _key in src) {
      if (src.hasOwnProperty(_key) && !dest.hasOwnProperty(_key)) {
        dest[_key] = src[_key];
      }
    }
  }

  for (var _key2 in mask) {
    if (dest[_key2] !== undefined && dest[_key2] !== null && src !== undefined && src !== null) {
      copyMissingDataWithMask(src[_key2], dest[_key2], mask[_key2], true);
    }
  }
}

function handleOfflineSort(a, b, sorts) {
  var order = sorts[0];
  var operator = order.slice(0, 1);
  var isDescending = operator === '-';

  if (isDescending) {
    order = order.substring(1);
  }

  if (order === '_created_at') {
    order = 'createdAt';
  }

  if (order === '_updated_at') {
    order = 'updatedAt';
  }

  if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(order) || order === 'password') {
    throw new _ParseError.default(_ParseError.default.INVALID_KEY_NAME, "Invalid Key: " + order);
  }

  var field1 = a.get(order);
  var field2 = b.get(order);

  if (field1 < field2) {
    return isDescending ? 1 : -1;
  }

  if (field1 > field2) {
    return isDescending ? -1 : 1;
  }

  if (sorts.length > 1) {
    var remainingSorts = sorts.slice(1);
    return handleOfflineSort(a, b, remainingSorts);
  }

  return 0;
}

var ParseQuery = function () {
  function ParseQuery(objectClass) {
    (0, _classCallCheck2.default)(this, ParseQuery);

    if (typeof objectClass === 'string') {
      if (objectClass === 'User' && _CoreManager.default.get('PERFORM_USER_REWRITE')) {
        this.className = '_User';
      } else {
        this.className = objectClass;
      }
    } else if (objectClass instanceof _ParseObject.default) {
      this.className = objectClass.className;
    } else if (typeof objectClass === 'function') {
      if (typeof objectClass.className === 'string') {
        this.className = objectClass.className;
      } else {
        var _obj2 = new objectClass();

        this.className = _obj2.className;
      }
    } else {
      throw new TypeError('A ParseQuery must be constructed with a ParseObject or class name.');
    }

    this._where = {};
    this._include = [];
    this._exclude = [];
    this._count = false;
    this._limit = -1;
    this._skip = 0;
    this._readPreference = null;
    this._includeReadPreference = null;
    this._subqueryReadPreference = null;
    this._queriesLocalDatastore = false;
    this._localDatastorePinName = null;
    this._extraOptions = {};
    this._xhrRequest = {
      task: null,
      onchange: function () {}
    };
  }

  (0, _createClass2.default)(ParseQuery, [{
    key: "_orQuery",
    value: function (queries) {
      var queryJSON = queries.map(function (q) {
        return q.toJSON().where;
      });
      this._where.$or = queryJSON;
      return this;
    }
  }, {
    key: "_andQuery",
    value: function (queries) {
      var queryJSON = queries.map(function (q) {
        return q.toJSON().where;
      });
      this._where.$and = queryJSON;
      return this;
    }
  }, {
    key: "_norQuery",
    value: function (queries) {
      var queryJSON = queries.map(function (q) {
        return q.toJSON().where;
      });
      this._where.$nor = queryJSON;
      return this;
    }
  }, {
    key: "_addCondition",
    value: function (key, condition, value) {
      if (!this._where[key] || typeof this._where[key] === 'string') {
        this._where[key] = {};
      }

      this._where[key][condition] = (0, _encode.default)(value, false, true);
      return this;
    }
  }, {
    key: "_regexStartWith",
    value: function (string) {
      return "^" + quote(string);
    }
  }, {
    key: "_handleOfflineQuery",
    value: function (params) {
      var _this2 = this;

      var localDatastore, objects, results, keys, alwaysSelectedKeys, sorts, count, limit;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _OfflineQuery.default.validateQuery(this);

              localDatastore = _CoreManager.default.getLocalDatastore();
              _context.next = 4;
              return _regenerator.default.awrap(localDatastore._serializeObjectsFromPinName(this._localDatastorePinName));

            case 4:
              objects = _context.sent;
              results = objects.map(function (json, index, arr) {
                var object = _ParseObject.default.fromJSON(json, false);

                if (json._localId && !json.objectId) {
                  object._localId = json._localId;
                }

                if (!_OfflineQuery.default.matchesQuery(_this2.className, object, arr, _this2)) {
                  return null;
                }

                return object;
              }).filter(function (object) {
                return object !== null;
              });

              if (params.keys) {
                keys = params.keys.split(',');
                alwaysSelectedKeys = ['className', 'objectId', 'createdAt', 'updatedAt', 'ACL'];
                keys = keys.concat(alwaysSelectedKeys);
                results = results.map(function (object) {
                  var json = object._toFullJSON();

                  Object.keys(json).forEach(function (key) {
                    if (!keys.includes(key)) {
                      delete json[key];
                    }
                  });
                  return _ParseObject.default.fromJSON(json, false);
                });
              }

              if (params.order) {
                sorts = params.order.split(',');
                results.sort(function (a, b) {
                  return handleOfflineSort(a, b, sorts);
                });
              }

              if (params.count) {
                count = results.length;
              }

              if (params.skip) {
                if (params.skip >= results.length) {
                  results = [];
                } else {
                  results = results.splice(params.skip, results.length);
                }
              }

              limit = results.length;

              if (params.limit !== 0 && params.limit < results.length) {
                limit = params.limit;
              }

              results = results.splice(0, limit);

              if (!(typeof count === 'number')) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", {
                results: results,
                count: count
              });

            case 15:
              return _context.abrupt("return", results);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "toJSON",
    value: function () {
      var params = {
        where: this._where
      };

      if (this._include.length) {
        params.include = this._include.join(',');
      }

      if (this._exclude.length) {
        params.excludeKeys = this._exclude.join(',');
      }

      if (this._select) {
        params.keys = this._select.join(',');
      }

      if (this._count) {
        params.count = 1;
      }

      if (this._limit >= 0) {
        params.limit = this._limit;
      }

      if (this._skip > 0) {
        params.skip = this._skip;
      }

      if (this._order) {
        params.order = this._order.join(',');
      }

      if (this._readPreference) {
        params.readPreference = this._readPreference;
      }

      if (this._includeReadPreference) {
        params.includeReadPreference = this._includeReadPreference;
      }

      if (this._subqueryReadPreference) {
        params.subqueryReadPreference = this._subqueryReadPreference;
      }

      if (this._hint) {
        params.hint = this._hint;
      }

      if (this._explain) {
        params.explain = true;
      }

      for (var _key3 in this._extraOptions) {
        params[_key3] = this._extraOptions[_key3];
      }

      return params;
    }
  }, {
    key: "withJSON",
    value: function (json) {
      if (json.where) {
        this._where = json.where;
      }

      if (json.include) {
        this._include = json.include.split(',');
      }

      if (json.keys) {
        this._select = json.keys.split(',');
      }

      if (json.excludeKeys) {
        this._exclude = json.excludeKeys.split(',');
      }

      if (json.count) {
        this._count = json.count === 1;
      }

      if (json.limit) {
        this._limit = json.limit;
      }

      if (json.skip) {
        this._skip = json.skip;
      }

      if (json.order) {
        this._order = json.order.split(',');
      }

      if (json.readPreference) {
        this._readPreference = json.readPreference;
      }

      if (json.includeReadPreference) {
        this._includeReadPreference = json.includeReadPreference;
      }

      if (json.subqueryReadPreference) {
        this._subqueryReadPreference = json.subqueryReadPreference;
      }

      if (json.hint) {
        this._hint = json.hint;
      }

      if (json.explain) {
        this._explain = !!json.explain;
      }

      for (var _key4 in json) {
        if (json.hasOwnProperty(_key4)) {
          if (['where', 'include', 'keys', 'count', 'limit', 'skip', 'order', 'readPreference', 'includeReadPreference', 'subqueryReadPreference', 'hint', 'explain'].indexOf(_key4) === -1) {
            this._extraOptions[_key4] = json[_key4];
          }
        }
      }

      return this;
    }
  }, {
    key: "get",
    value: function (objectId, options) {
      this.equalTo('objectId', objectId);
      var firstOptions = {};

      if (options && options.hasOwnProperty('useMasterKey')) {
        firstOptions.useMasterKey = options.useMasterKey;
      }

      if (options && options.hasOwnProperty('sessionToken')) {
        firstOptions.sessionToken = options.sessionToken;
      }

      if (options && options.hasOwnProperty('context') && typeof options.context === 'object') {
        firstOptions.context = options.context;
      }

      return this.first(firstOptions).then(function (response) {
        if (response) {
          return response;
        }

        var errorObject = new _ParseError.default(_ParseError.default.OBJECT_NOT_FOUND, 'Object not found.');
        return Promise.reject(errorObject);
      });
    }
  }, {
    key: "find",
    value: function (options) {
      var _this3 = this;

      options = options || {};
      var findOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        findOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        findOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && typeof options.context === 'object') {
        findOptions.context = options.context;
      }

      this._setRequestTask(findOptions);

      var controller = _CoreManager.default.getQueryController();

      var select = this._select;

      if (this._queriesLocalDatastore) {
        return this._handleOfflineQuery(this.toJSON());
      }

      return controller.find(this.className, this.toJSON(), findOptions).then(function (response) {
        if (_this3._explain) {
          return response.results;
        }

        var results = response.results.map(function (data) {
          var override = response.className || _this3.className;

          if (!data.className) {
            data.className = override;
          }

          if (select) {
            handleSelectResult(data, select);
          }

          return _ParseObject.default.fromJSON(data, !select);
        });
        var count = response.count;

        if (typeof count === 'number') {
          return {
            results: results,
            count: count
          };
        }

        return results;
      });
    }
  }, {
    key: "findAll",
    value: function (options) {
      var result;
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              result = [];
              _context2.next = 3;
              return _regenerator.default.awrap(this.eachBatch(function (objects) {
                result = [].concat((0, _toConsumableArray2.default)(result), (0, _toConsumableArray2.default)(objects));
              }, options));

            case 3:
              return _context2.abrupt("return", result);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "count",
    value: function (options) {
      options = options || {};
      var findOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        findOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        findOptions.sessionToken = options.sessionToken;
      }

      this._setRequestTask(findOptions);

      var controller = _CoreManager.default.getQueryController();

      var params = this.toJSON();
      params.limit = 0;
      params.count = 1;
      return controller.find(this.className, params, findOptions).then(function (result) {
        return result.count;
      });
    }
  }, {
    key: "distinct",
    value: function (key, options) {
      options = options || {};
      var distinctOptions = {};
      distinctOptions.useMasterKey = true;

      if (options.hasOwnProperty('sessionToken')) {
        distinctOptions.sessionToken = options.sessionToken;
      }

      this._setRequestTask(distinctOptions);

      var controller = _CoreManager.default.getQueryController();

      var params = {
        distinct: key,
        where: this._where,
        hint: this._hint
      };
      return controller.aggregate(this.className, params, distinctOptions).then(function (results) {
        return results.results;
      });
    }
  }, {
    key: "aggregate",
    value: function (pipeline, options) {
      options = options || {};
      var aggregateOptions = {};
      aggregateOptions.useMasterKey = true;

      if (options.hasOwnProperty('sessionToken')) {
        aggregateOptions.sessionToken = options.sessionToken;
      }

      this._setRequestTask(aggregateOptions);

      var controller = _CoreManager.default.getQueryController();

      if (!Array.isArray(pipeline) && typeof pipeline !== 'object') {
        throw new Error('Invalid pipeline must be Array or Object');
      }

      if (Object.keys(this._where || {}).length) {
        if (!Array.isArray(pipeline)) {
          pipeline = [pipeline];
        }

        pipeline.unshift({
          match: this._where
        });
      }

      var params = {
        pipeline: pipeline,
        hint: this._hint,
        explain: this._explain,
        readPreference: this._readPreference
      };
      return controller.aggregate(this.className, params, aggregateOptions).then(function (results) {
        return results.results;
      });
    }
  }, {
    key: "first",
    value: function (options) {
      var _this4 = this;

      options = options || {};
      var findOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        findOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        findOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && typeof options.context === 'object') {
        findOptions.context = options.context;
      }

      this._setRequestTask(findOptions);

      var controller = _CoreManager.default.getQueryController();

      var params = this.toJSON();
      params.limit = 1;
      var select = this._select;

      if (this._queriesLocalDatastore) {
        return this._handleOfflineQuery(params).then(function (objects) {
          if (!objects[0]) {
            return undefined;
          }

          return objects[0];
        });
      }

      return controller.find(this.className, params, findOptions).then(function (response) {
        var objects = response.results;

        if (!objects[0]) {
          return undefined;
        }

        if (!objects[0].className) {
          objects[0].className = _this4.className;
        }

        if (select) {
          handleSelectResult(objects[0], select);
        }

        return _ParseObject.default.fromJSON(objects[0], !select);
      });
    }
  }, {
    key: "eachBatch",
    value: function (callback, options) {
      options = options || {};

      if (this._order || this._skip || this._limit >= 0) {
        return Promise.reject('Cannot iterate on a query with sort, skip, or limit.');
      }

      var query = new ParseQuery(this.className);
      query._limit = options.batchSize || 100;
      query._include = this._include.map(function (i) {
        return i;
      });

      if (this._select) {
        query._select = this._select.map(function (s) {
          return s;
        });
      }

      query._hint = this._hint;
      query._where = {};

      for (var _attr in this._where) {
        var val = this._where[_attr];

        if (Array.isArray(val)) {
          query._where[_attr] = val.map(function (v) {
            return v;
          });
        } else if (val && typeof val === 'object') {
          var conditionMap = {};
          query._where[_attr] = conditionMap;

          for (var cond in val) {
            conditionMap[cond] = val[cond];
          }
        } else {
          query._where[_attr] = val;
        }
      }

      query.ascending('objectId');
      var findOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        findOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        findOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && typeof options.context === 'object') {
        findOptions.context = options.context;
      }

      var finished = false;
      var previousResults = [];
      return (0, _promiseUtils.continueWhile)(function () {
        return !finished;
      }, function () {
        var _await$Promise$all, _await$Promise$all2, results;

        return _regenerator.default.async(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _regenerator.default.awrap(Promise.all([query.find(findOptions), Promise.resolve(previousResults.length > 0 && callback(previousResults))]));

              case 2:
                _await$Promise$all = _context3.sent;
                _await$Promise$all2 = (0, _slicedToArray2.default)(_await$Promise$all, 1);
                results = _await$Promise$all2[0];

                if (!(results.length >= query._limit)) {
                  _context3.next = 10;
                  break;
                }

                query.greaterThan('objectId', results[results.length - 1].id);
                previousResults = results;
                _context3.next = 17;
                break;

              case 10:
                if (!(results.length > 0)) {
                  _context3.next = 16;
                  break;
                }

                _context3.next = 13;
                return _regenerator.default.awrap(Promise.resolve(callback(results)));

              case 13:
                finished = true;
                _context3.next = 17;
                break;

              case 16:
                finished = true;

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, null, null, null, Promise);
      });
    }
  }, {
    key: "each",
    value: function (callback, options) {
      return this.eachBatch(function (results) {
        var callbacksDone = Promise.resolve();
        results.forEach(function (result) {
          callbacksDone = callbacksDone.then(function () {
            return callback(result);
          });
        });
        return callbacksDone;
      }, options);
    }
  }, {
    key: "hint",
    value: function (value) {
      if (typeof value === 'undefined') {
        delete this._hint;
      }

      this._hint = value;
      return this;
    }
  }, {
    key: "explain",
    value: function () {
      var _explain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (typeof _explain !== 'boolean') {
        throw new Error('You can only set explain to a boolean value');
      }

      this._explain = _explain;
      return this;
    }
  }, {
    key: "map",
    value: function (callback, options) {
      var _this5 = this;

      var array, index;
      return _regenerator.default.async(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              array = [];
              index = 0;
              _context4.next = 4;
              return _regenerator.default.awrap(this.each(function (object) {
                return Promise.resolve(callback(object, index, _this5)).then(function (result) {
                  array.push(result);
                  index += 1;
                });
              }, options));

            case 4:
              return _context4.abrupt("return", array);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "reduce",
    value: function (callback, initialValue, options) {
      var accumulator, index;
      return _regenerator.default.async(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              accumulator = initialValue;
              index = 0;
              _context5.next = 4;
              return _regenerator.default.awrap(this.each(function (object) {
                if (index === 0 && initialValue === undefined) {
                  accumulator = object;
                  index += 1;
                  return;
                }

                return Promise.resolve(callback(accumulator, object, index)).then(function (result) {
                  accumulator = result;
                  index += 1;
                });
              }, options));

            case 4:
              if (!(index === 0 && initialValue === undefined)) {
                _context5.next = 6;
                break;
              }

              throw new TypeError('Reducing empty query result set with no initial value');

            case 6:
              return _context5.abrupt("return", accumulator);

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "filter",
    value: function (callback, options) {
      var _this6 = this;

      var array, index;
      return _regenerator.default.async(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              array = [];
              index = 0;
              _context6.next = 4;
              return _regenerator.default.awrap(this.each(function (object) {
                return Promise.resolve(callback(object, index, _this6)).then(function (flag) {
                  if (flag) {
                    array.push(object);
                  }

                  index += 1;
                });
              }, options));

            case 4:
              return _context6.abrupt("return", array);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "equalTo",
    value: function (key, value) {
      var _this7 = this;

      if (key && typeof key === 'object') {
        Object.entries(key).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              k = _ref2[0],
              val = _ref2[1];

          return _this7.equalTo(k, val);
        });
        return this;
      }

      if (typeof value === 'undefined') {
        return this.doesNotExist(key);
      }

      this._where[key] = (0, _encode.default)(value, false, true);
      return this;
    }
  }, {
    key: "notEqualTo",
    value: function (key, value) {
      var _this8 = this;

      if (key && typeof key === 'object') {
        Object.entries(key).forEach(function (_ref3) {
          var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
              k = _ref4[0],
              val = _ref4[1];

          return _this8.notEqualTo(k, val);
        });
        return this;
      }

      return this._addCondition(key, '$ne', value);
    }
  }, {
    key: "lessThan",
    value: function (key, value) {
      return this._addCondition(key, '$lt', value);
    }
  }, {
    key: "greaterThan",
    value: function (key, value) {
      return this._addCondition(key, '$gt', value);
    }
  }, {
    key: "lessThanOrEqualTo",
    value: function (key, value) {
      return this._addCondition(key, '$lte', value);
    }
  }, {
    key: "greaterThanOrEqualTo",
    value: function (key, value) {
      return this._addCondition(key, '$gte', value);
    }
  }, {
    key: "containedIn",
    value: function (key, value) {
      return this._addCondition(key, '$in', value);
    }
  }, {
    key: "notContainedIn",
    value: function (key, value) {
      return this._addCondition(key, '$nin', value);
    }
  }, {
    key: "containedBy",
    value: function (key, values) {
      return this._addCondition(key, '$containedBy', values);
    }
  }, {
    key: "containsAll",
    value: function (key, values) {
      return this._addCondition(key, '$all', values);
    }
  }, {
    key: "containsAllStartingWith",
    value: function (key, values) {
      var _this = this;

      if (!Array.isArray(values)) {
        values = [values];
      }

      var regexObject = values.map(function (value) {
        return {
          $regex: _this._regexStartWith(value)
        };
      });
      return this.containsAll(key, regexObject);
    }
  }, {
    key: "exists",
    value: function (key) {
      return this._addCondition(key, '$exists', true);
    }
  }, {
    key: "doesNotExist",
    value: function (key) {
      return this._addCondition(key, '$exists', false);
    }
  }, {
    key: "matches",
    value: function (key, regex, modifiers) {
      this._addCondition(key, '$regex', regex);

      if (!modifiers) {
        modifiers = '';
      }

      if (regex.ignoreCase) {
        modifiers += 'i';
      }

      if (regex.multiline) {
        modifiers += 'm';
      }

      if (modifiers.length) {
        this._addCondition(key, '$options', modifiers);
      }

      return this;
    }
  }, {
    key: "matchesQuery",
    value: function (key, query) {
      var queryJSON = query.toJSON();
      queryJSON.className = query.className;
      return this._addCondition(key, '$inQuery', queryJSON);
    }
  }, {
    key: "doesNotMatchQuery",
    value: function (key, query) {
      var queryJSON = query.toJSON();
      queryJSON.className = query.className;
      return this._addCondition(key, '$notInQuery', queryJSON);
    }
  }, {
    key: "matchesKeyInQuery",
    value: function (key, queryKey, query) {
      var queryJSON = query.toJSON();
      queryJSON.className = query.className;
      return this._addCondition(key, '$select', {
        key: queryKey,
        query: queryJSON
      });
    }
  }, {
    key: "doesNotMatchKeyInQuery",
    value: function (key, queryKey, query) {
      var queryJSON = query.toJSON();
      queryJSON.className = query.className;
      return this._addCondition(key, '$dontSelect', {
        key: queryKey,
        query: queryJSON
      });
    }
  }, {
    key: "contains",
    value: function (key, substring) {
      if (typeof substring !== 'string') {
        throw new Error('The value being searched for must be a string.');
      }

      return this._addCondition(key, '$regex', quote(substring));
    }
  }, {
    key: "fullText",
    value: function (key, value, options) {
      options = options || {};

      if (!key) {
        throw new Error('A key is required.');
      }

      if (!value) {
        throw new Error('A search term is required');
      }

      if (typeof value !== 'string') {
        throw new Error('The value being searched for must be a string.');
      }

      var fullOptions = {};
      fullOptions.$term = value;

      for (var option in options) {
        switch (option) {
          case 'language':
            fullOptions.$language = options[option];
            break;

          case 'caseSensitive':
            fullOptions.$caseSensitive = options[option];
            break;

          case 'diacriticSensitive':
            fullOptions.$diacriticSensitive = options[option];
            break;

          default:
            throw new Error("Unknown option: " + option);
        }
      }

      return this._addCondition(key, '$text', {
        $search: fullOptions
      });
    }
  }, {
    key: "sortByTextScore",
    value: function () {
      this.ascending('$score');
      this.select(['$score']);
      return this;
    }
  }, {
    key: "startsWith",
    value: function (key, prefix) {
      if (typeof prefix !== 'string') {
        throw new Error('The value being searched for must be a string.');
      }

      return this._addCondition(key, '$regex', this._regexStartWith(prefix));
    }
  }, {
    key: "endsWith",
    value: function (key, suffix) {
      if (typeof suffix !== 'string') {
        throw new Error('The value being searched for must be a string.');
      }

      return this._addCondition(key, '$regex', quote(suffix) + "$");
    }
  }, {
    key: "near",
    value: function (key, point) {
      if (!(point instanceof _ParseGeoPoint.default)) {
        point = new _ParseGeoPoint.default(point);
      }

      return this._addCondition(key, '$nearSphere', point);
    }
  }, {
    key: "withinRadians",
    value: function (key, point, maxDistance, sorted) {
      if (sorted || sorted === undefined) {
        this.near(key, point);
        return this._addCondition(key, '$maxDistance', maxDistance);
      }

      return this._addCondition(key, '$geoWithin', {
        $centerSphere: [[point.longitude, point.latitude], maxDistance]
      });
    }
  }, {
    key: "withinMiles",
    value: function (key, point, maxDistance, sorted) {
      return this.withinRadians(key, point, maxDistance / 3958.8, sorted);
    }
  }, {
    key: "withinKilometers",
    value: function (key, point, maxDistance, sorted) {
      return this.withinRadians(key, point, maxDistance / 6371.0, sorted);
    }
  }, {
    key: "withinGeoBox",
    value: function (key, southwest, northeast) {
      if (!(southwest instanceof _ParseGeoPoint.default)) {
        southwest = new _ParseGeoPoint.default(southwest);
      }

      if (!(northeast instanceof _ParseGeoPoint.default)) {
        northeast = new _ParseGeoPoint.default(northeast);
      }

      this._addCondition(key, '$within', {
        $box: [southwest, northeast]
      });

      return this;
    }
  }, {
    key: "withinPolygon",
    value: function (key, points) {
      return this._addCondition(key, '$geoWithin', {
        $polygon: points
      });
    }
  }, {
    key: "polygonContains",
    value: function (key, point) {
      return this._addCondition(key, '$geoIntersects', {
        $point: point
      });
    }
  }, {
    key: "ascending",
    value: function () {
      this._order = [];

      for (var _len = arguments.length, keys = new Array(_len), _key5 = 0; _key5 < _len; _key5++) {
        keys[_key5] = arguments[_key5];
      }

      return this.addAscending.apply(this, keys);
    }
  }, {
    key: "addAscending",
    value: function () {
      var _this9 = this;

      if (!this._order) {
        this._order = [];
      }

      for (var _len2 = arguments.length, keys = new Array(_len2), _key6 = 0; _key6 < _len2; _key6++) {
        keys[_key6] = arguments[_key6];
      }

      keys.forEach(function (key) {
        if (Array.isArray(key)) {
          key = key.join();
        }

        _this9._order = _this9._order.concat(key.replace(/\s/g, '').split(','));
      });
      return this;
    }
  }, {
    key: "descending",
    value: function () {
      this._order = [];

      for (var _len3 = arguments.length, keys = new Array(_len3), _key7 = 0; _key7 < _len3; _key7++) {
        keys[_key7] = arguments[_key7];
      }

      return this.addDescending.apply(this, keys);
    }
  }, {
    key: "addDescending",
    value: function () {
      var _this10 = this;

      if (!this._order) {
        this._order = [];
      }

      for (var _len4 = arguments.length, keys = new Array(_len4), _key8 = 0; _key8 < _len4; _key8++) {
        keys[_key8] = arguments[_key8];
      }

      keys.forEach(function (key) {
        if (Array.isArray(key)) {
          key = key.join();
        }

        _this10._order = _this10._order.concat(key.replace(/\s/g, '').split(',').map(function (k) {
          return "-" + k;
        }));
      });
      return this;
    }
  }, {
    key: "skip",
    value: function (n) {
      if (typeof n !== 'number' || n < 0) {
        throw new Error('You can only skip by a positive number');
      }

      this._skip = n;
      return this;
    }
  }, {
    key: "limit",
    value: function (n) {
      if (typeof n !== 'number') {
        throw new Error('You can only set the limit to a numeric value');
      }

      this._limit = n;
      return this;
    }
  }, {
    key: "withCount",
    value: function () {
      var includeCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (typeof includeCount !== 'boolean') {
        throw new Error('You can only set withCount to a boolean value');
      }

      this._count = includeCount;
      return this;
    }
  }, {
    key: "include",
    value: function () {
      var _this11 = this;

      for (var _len5 = arguments.length, keys = new Array(_len5), _key9 = 0; _key9 < _len5; _key9++) {
        keys[_key9] = arguments[_key9];
      }

      keys.forEach(function (key) {
        if (Array.isArray(key)) {
          _this11._include = _this11._include.concat(key);
        } else {
          _this11._include.push(key);
        }
      });
      return this;
    }
  }, {
    key: "includeAll",
    value: function () {
      return this.include('*');
    }
  }, {
    key: "select",
    value: function () {
      var _this12 = this;

      if (!this._select) {
        this._select = [];
      }

      for (var _len6 = arguments.length, keys = new Array(_len6), _key10 = 0; _key10 < _len6; _key10++) {
        keys[_key10] = arguments[_key10];
      }

      keys.forEach(function (key) {
        if (Array.isArray(key)) {
          _this12._select = _this12._select.concat(key);
        } else {
          _this12._select.push(key);
        }
      });
      return this;
    }
  }, {
    key: "exclude",
    value: function () {
      var _this13 = this;

      for (var _len7 = arguments.length, keys = new Array(_len7), _key11 = 0; _key11 < _len7; _key11++) {
        keys[_key11] = arguments[_key11];
      }

      keys.forEach(function (key) {
        if (Array.isArray(key)) {
          _this13._exclude = _this13._exclude.concat(key);
        } else {
          _this13._exclude.push(key);
        }
      });
      return this;
    }
  }, {
    key: "readPreference",
    value: function (_readPreference, includeReadPreference, subqueryReadPreference) {
      this._readPreference = _readPreference;
      this._includeReadPreference = includeReadPreference;
      this._subqueryReadPreference = subqueryReadPreference;
      return this;
    }
  }, {
    key: "onChange",
    value: function (onUpdate, onError) {
      var sub = null;
      this.subscribe().then(function (subscription) {
        sub = subscription;
        subscription.on('create', function (object) {
          onUpdate(object);
        });
        subscription.on('update', function (object) {
          onUpdate(object);
        });
        subscription.on('error', function (err) {
          if (onError) {
            onError(err);
          } else {
            console.warn('Moralis: Subscription error', err);
          }
        });
      }).catch(function (err) {
        if (onError) {
          onError(err);
        } else {
          console.warn('Moralis: Subscription connection error', err);
        }
      });
      return function () {
        if (sub) {
          sub.unsubscribe();
        }
      };
    }
  }, {
    key: "subscribe",
    value: function (sessionToken) {
      var currentUser, liveQueryClient, subscription;
      return _regenerator.default.async(function (_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _regenerator.default.awrap(_CoreManager.default.getUserController().currentUserAsync());

            case 2:
              currentUser = _context7.sent;

              if (!sessionToken) {
                sessionToken = currentUser ? currentUser.getSessionToken() : undefined;
              }

              _context7.next = 6;
              return _regenerator.default.awrap(_CoreManager.default.getLiveQueryController().getDefaultLiveQueryClient());

            case 6:
              liveQueryClient = _context7.sent;

              if (liveQueryClient.shouldOpen()) {
                liveQueryClient.open();
              }

              subscription = liveQueryClient.subscribe(this, sessionToken);
              return _context7.abrupt("return", subscription.subscribePromise.then(function () {
                return subscription;
              }));

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "fromNetwork",
    value: function () {
      this._queriesLocalDatastore = false;
      this._localDatastorePinName = null;
      return this;
    }
  }, {
    key: "fromLocalDatastore",
    value: function () {
      return this.fromPinWithName(null);
    }
  }, {
    key: "fromPin",
    value: function () {
      return this.fromPinWithName(_LocalDatastoreUtils.DEFAULT_PIN);
    }
  }, {
    key: "fromPinWithName",
    value: function (name) {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (localDatastore.checkIfEnabled()) {
        this._queriesLocalDatastore = true;
        this._localDatastorePinName = name;
      }

      return this;
    }
  }, {
    key: "cancel",
    value: function () {
      var _this14 = this;

      if (this._xhrRequest.task && typeof this._xhrRequest.task.abort === 'function') {
        this._xhrRequest.task._aborted = true;

        this._xhrRequest.task.abort();

        this._xhrRequest.task = null;

        this._xhrRequest.onchange = function () {};

        return this;
      }

      return this._xhrRequest.onchange = function () {
        return _this14.cancel();
      };
    }
  }, {
    key: "_setRequestTask",
    value: function (options) {
      var _this15 = this;

      options.requestTask = function (task) {
        _this15._xhrRequest.task = task;

        _this15._xhrRequest.onchange();
      };
    }
  }], [{
    key: "fromJSON",
    value: function (className, json) {
      var query = new ParseQuery(className);
      return query.withJSON(json);
    }
  }, {
    key: "or",
    value: function () {
      for (var _len8 = arguments.length, queries = new Array(_len8), _key12 = 0; _key12 < _len8; _key12++) {
        queries[_key12] = arguments[_key12];
      }

      var className = _getClassNameFromQueries(queries);

      var query = new ParseQuery(className);

      query._orQuery(queries);

      return query;
    }
  }, {
    key: "and",
    value: function () {
      for (var _len9 = arguments.length, queries = new Array(_len9), _key13 = 0; _key13 < _len9; _key13++) {
        queries[_key13] = arguments[_key13];
      }

      var className = _getClassNameFromQueries(queries);

      var query = new ParseQuery(className);

      query._andQuery(queries);

      return query;
    }
  }, {
    key: "nor",
    value: function () {
      for (var _len10 = arguments.length, queries = new Array(_len10), _key14 = 0; _key14 < _len10; _key14++) {
        queries[_key14] = arguments[_key14];
      }

      var className = _getClassNameFromQueries(queries);

      var query = new ParseQuery(className);

      query._norQuery(queries);

      return query;
    }
  }]);
  return ParseQuery;
}();

var DefaultController = {
  find: function (className, params, options) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', "classes/" + className, params, options);
  },
  aggregate: function (className, params, options) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', "aggregate/" + className, params, options);
  }
};

_CoreManager.default.setQueryController(DefaultController);

var _default = ParseQuery;
exports.default = _default;