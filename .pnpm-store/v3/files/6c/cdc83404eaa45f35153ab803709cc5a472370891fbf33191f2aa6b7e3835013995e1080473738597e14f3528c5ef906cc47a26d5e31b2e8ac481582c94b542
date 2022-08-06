"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _map2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _filter2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _keys2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _sort = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/sort"));

var _splice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/splice"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _encode = _interopRequireDefault(require("./encode"));

var _promiseUtils = require("./promiseUtils");

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _OfflineQuery = _interopRequireDefault(require("./OfflineQuery"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");
/*
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

/**
 * Converts a string into a regex that matches it.
 * Surrounding with \Q .. \E does this, we just need to escape any \E's in
 * the text separately.
 *
 * @param s
 * @private
 * @returns {string}
 */


function quote(s
/*: string*/
)
/*: string*/
{
  return "\\Q".concat(s.replace('\\E', '\\E\\\\E\\Q'), "\\E");
}
/**
 * Extracts the class name from queries. If not all queries have the same
 * class name an error will be thrown.
 *
 * @param queries
 * @private
 * @returns {string}
 */


function _getClassNameFromQueries(queries
/*: Array<ParseQuery>*/
)
/*: ?string*/
{
  var className = null;
  (0, _forEach.default)(queries).call(queries, function (q) {
    if (!className) {
      // eslint-disable-next-line prefer-destructuring
      className = q.className;
    }

    if (className !== q.className) {
      throw new Error('All queries must be for the same class.');
    }
  });
  return className;
}
/*
 * Handles pre-populating the result data of a query with select fields,
 * making sure that the data object contains keys for all objects that have
 * been requested with a select, so that our cached state updates correctly.
 */


function handleSelectResult(data
/*: any*/
, select
/*: Array<string>*/
) {
  var serverDataMask = {};
  (0, _forEach.default)(select).call(select, function (field) {
    var hasSubObjectSelect = (0, _indexOf.default)(field).call(field, '.') !== -1;

    if (!hasSubObjectSelect && !data.hasOwnProperty(field)) {
      // this field was selected, but is missing from the retrieved data
      data[field] = undefined;
    } else if (hasSubObjectSelect) {
      // this field references a sub-object,
      // so we need to walk down the path components
      var pathComponents = field.split('.');
      var _obj = data;
      var serverMask = serverDataMask;
      (0, _forEach.default)(pathComponents).call(pathComponents, function (component, index, arr) {
        // add keys if the expected data is missing
        if (_obj && !_obj.hasOwnProperty(component)) {
          _obj[component] = undefined;
        }

        if (_obj && (0, _typeof2.default)(_obj) === 'object') {
          _obj = _obj[component];
        } // add this path component to the server mask so we can fill it in later if needed


        if (index < arr.length - 1) {
          if (!serverMask[component]) {
            serverMask[component] = {};
          }

          serverMask = serverMask[component];
        }
      });
    }
  });

  if ((0, _keys.default)(serverDataMask).length > 0) {
    // When selecting from sub-objects, we don't want to blow away the missing
    // information that we may have retrieved before. We've already added any
    // missing selected keys to sub-objects, but we still need to add in the
    // data for any previously retrieved sub-objects that were not selected.
    var serverData = _CoreManager.default.getObjectStateController().getServerData({
      id: data.objectId,
      className: data.className
    });

    copyMissingDataWithMask(serverData, data, serverDataMask, false);
  }
}

function copyMissingDataWithMask(src, dest, mask, copyThisLevel) {
  // copy missing elements at this level
  if (copyThisLevel) {
    for (var _key in src) {
      if (src.hasOwnProperty(_key) && !dest.hasOwnProperty(_key)) {
        dest[_key] = src[_key];
      }
    }
  }

  for (var _key2 in mask) {
    if (dest[_key2] !== undefined && dest[_key2] !== null && src !== undefined && src !== null) {
      // traverse into objects as needed
      copyMissingDataWithMask(src[_key2], dest[_key2], mask[_key2], true);
    }
  }
}

function handleOfflineSort(a, b, sorts) {
  var order = sorts[0];
  var operator = (0, _slice.default)(order).call(order, 0, 1);
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
    throw new _ParseError.default(_ParseError.default.INVALID_KEY_NAME, "Invalid Key: ".concat(order));
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
    var remainingSorts = (0, _slice.default)(sorts).call(sorts, 1);
    return handleOfflineSort(a, b, remainingSorts);
  }

  return 0;
}
/**
 * Creates a new parse Parse.Query for the given Parse.Object subclass.
 *
 * <p>Parse.Query defines a query that is used to fetch Parse.Objects. The
 * most common use case is finding all objects that match a query through the
 * <code>find</code> method. for example, this sample code fetches all objects
 * of class <code>myclass</code>. it calls a different function depending on
 * whether the fetch succeeded or not.
 *
 * <pre>
 * var query = new Parse.Query(myclass);
 * query.find().then((results) => {
 *   // results is an array of parse.object.
 * }).catch((error) =>  {
 *  // error is an instance of parse.error.
 * });</pre></p>
 *
 * <p>a Parse.Query can also be used to retrieve a single object whose id is
 * known, through the get method. for example, this sample code fetches an
 * object of class <code>myclass</code> and id <code>myid</code>. it calls a
 * different function depending on whether the fetch succeeded or not.
 *
 * <pre>
 * var query = new Parse.Query(myclass);
 * query.get(myid).then((object) => {
 *     // object is an instance of parse.object.
 * }).catch((error) =>  {
 *  // error is an instance of parse.error.
 * });</pre></p>
 *
 * <p>a Parse.Query can also be used to count the number of objects that match
 * the query without retrieving all of those objects. for example, this
 * sample code counts the number of objects of the class <code>myclass</code>
 * <pre>
 * var query = new Parse.Query(myclass);
 * query.count().then((number) => {
 *     // there are number instances of myclass.
 * }).catch((error) => {
 *     // error is an instance of Parse.Error.
 * });</pre></p>
 *
 * @alias Parse.Query
 */


var ParseQuery = /*#__PURE__*/function () {
  /**
   * @property {string} className
   */

  /**
   * @param {(string | Parse.Object)} objectClass An instance of a subclass of Parse.Object, or a Parse className string.
   */
  function ParseQuery(objectClass
  /*: string | ParseObject*/
  ) {
    (0, _classCallCheck2.default)(this, ParseQuery);
    (0, _defineProperty2.default)(this, "className", void 0);
    (0, _defineProperty2.default)(this, "_where", void 0);
    (0, _defineProperty2.default)(this, "_include", void 0);
    (0, _defineProperty2.default)(this, "_exclude", void 0);
    (0, _defineProperty2.default)(this, "_select", void 0);
    (0, _defineProperty2.default)(this, "_limit", void 0);
    (0, _defineProperty2.default)(this, "_skip", void 0);
    (0, _defineProperty2.default)(this, "_count", void 0);
    (0, _defineProperty2.default)(this, "_order", void 0);
    (0, _defineProperty2.default)(this, "_readPreference", void 0);
    (0, _defineProperty2.default)(this, "_includeReadPreference", void 0);
    (0, _defineProperty2.default)(this, "_subqueryReadPreference", void 0);
    (0, _defineProperty2.default)(this, "_queriesLocalDatastore", void 0);
    (0, _defineProperty2.default)(this, "_localDatastorePinName", void 0);
    (0, _defineProperty2.default)(this, "_extraOptions", void 0);
    (0, _defineProperty2.default)(this, "_hint", void 0);
    (0, _defineProperty2.default)(this, "_explain", void 0);
    (0, _defineProperty2.default)(this, "_xhrRequest", void 0);

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
    this._count = false; // negative limit is not sent in the server request

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
  /**
   * Adds constraint that at least one of the passed in queries matches.
   *
   * @param {Array} queries
   * @returns {Parse.Query} Returns the query, so you can chain this call.
   */


  (0, _createClass2.default)(ParseQuery, [{
    key: "_orQuery",
    value: function (queries
    /*: Array<ParseQuery>*/
    )
    /*: ParseQuery*/
    {
      var queryJSON = (0, _map2.default)(queries).call(queries, function (q) {
        return q.toJSON().where;
      });
      this._where.$or = queryJSON;
      return this;
    }
    /**
     * Adds constraint that all of the passed in queries match.
     *
     * @param {Array} queries
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "_andQuery",
    value: function (queries
    /*: Array<ParseQuery>*/
    )
    /*: ParseQuery*/
    {
      var queryJSON = (0, _map2.default)(queries).call(queries, function (q) {
        return q.toJSON().where;
      });
      this._where.$and = queryJSON;
      return this;
    }
    /**
     * Adds constraint that none of the passed in queries match.
     *
     * @param {Array} queries
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "_norQuery",
    value: function (queries
    /*: Array<ParseQuery>*/
    )
    /*: ParseQuery*/
    {
      var queryJSON = (0, _map2.default)(queries).call(queries, function (q) {
        return q.toJSON().where;
      });
      this._where.$nor = queryJSON;
      return this;
    }
    /**
     * Helper for condition queries
     *
     * @param key
     * @param condition
     * @param value
     * @returns {Parse.Query}
     */

  }, {
    key: "_addCondition",
    value: function (key
    /*: string*/
    , condition
    /*: string*/
    , value
    /*: mixed*/
    )
    /*: ParseQuery*/
    {
      if (!this._where[key] || typeof this._where[key] === 'string') {
        this._where[key] = {};
      }

      this._where[key][condition] = (0, _encode.default)(value, false, true);
      return this;
    }
    /**
     * Converts string for regular expression at the beginning
     *
     * @param string
     * @returns {string}
     */

  }, {
    key: "_regexStartWith",
    value: function (string
    /*: string*/
    )
    /*: string*/
    {
      return "^".concat(quote(string));
    }
  }, {
    key: "_handleOfflineQuery",
    value: function () {
      var _handleOfflineQuery2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(params
      /*: any*/
      ) {
        var _context,
            _this2 = this;

        var localDatastore, objects, results, keys, alwaysSelectedKeys, sorts, count, limit;
        return _regenerator.default.wrap(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _OfflineQuery.default.validateQuery(this);

                localDatastore = _CoreManager.default.getLocalDatastore();
                _context3.next = 4;
                return localDatastore._serializeObjectsFromPinName(this._localDatastorePinName);

              case 4:
                objects = _context3.sent;
                results = (0, _filter2.default)(_context = (0, _map2.default)(objects).call(objects, function (json, index, arr) {
                  var object = _ParseObject.default.fromJSON(json, false);

                  if (json._localId && !json.objectId) {
                    object._localId = json._localId;
                  }

                  if (!_OfflineQuery.default.matchesQuery(_this2.className, object, arr, _this2)) {
                    return null;
                  }

                  return object;
                })).call(_context, function (object) {
                  return object !== null;
                });

                if ((0, _keys2.default)(params)) {
                  keys = (0, _keys2.default)(params).split(',');
                  alwaysSelectedKeys = ['className', 'objectId', 'createdAt', 'updatedAt', 'ACL'];
                  keys = (0, _concat.default)(keys).call(keys, alwaysSelectedKeys);
                  results = (0, _map2.default)(results).call(results, function (object) {
                    var _context2;

                    var json = object._toFullJSON();

                    (0, _forEach.default)(_context2 = (0, _keys.default)(json)).call(_context2, function (key) {
                      if (!(0, _includes.default)(keys).call(keys, key)) {
                        delete json[key];
                      }
                    });
                    return _ParseObject.default.fromJSON(json, false);
                  });
                }

                if (params.order) {
                  sorts = params.order.split(',');
                  (0, _sort.default)(results).call(results, function (a, b) {
                    return handleOfflineSort(a, b, sorts);
                  });
                } // count total before applying limit/skip


                if (params.count) {
                  // total count from response
                  count = results.length;
                }

                if (params.skip) {
                  if (params.skip >= results.length) {
                    results = [];
                  } else {
                    results = (0, _splice.default)(results).call(results, params.skip, results.length);
                  }
                }

                limit = results.length;

                if (params.limit !== 0 && params.limit < results.length) {
                  // eslint-disable-next-line prefer-destructuring
                  limit = params.limit;
                }

                results = (0, _splice.default)(results).call(results, 0, limit);

                if (!(typeof count === 'number')) {
                  _context3.next = 15;
                  break;
                }

                return _context3.abrupt("return", {
                  results: results,
                  count: count
                });

              case 15:
                return _context3.abrupt("return", results);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee, this);
      }));

      return function () {
        return _handleOfflineQuery2.apply(this, arguments);
      };
    }()
    /**
     * Returns a JSON representation of this query.
     *
     * @returns {object} The JSON representation of the query.
     */

  }, {
    key: "toJSON",
    value: function ()
    /*: QueryJSON*/
    {
      var params
      /*: QueryJSON*/
      = {
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
    /**
     * Return a query with conditions from json, can be useful to send query from server side to client
     * Not static, all query conditions was set before calling this method will be deleted.
     * For example on the server side we have
     * var query = new Parse.Query("className");
     * query.equalTo(key: value);
     * query.limit(100);
     * ... (others queries)
     * Create JSON representation of Query Object
     * var jsonFromServer = query.fromJSON();
     *
     * On client side getting query:
     * var query = new Parse.Query("className");
     * query.fromJSON(jsonFromServer);
     *
     * and continue to query...
     * query.skip(100).find().then(...);
     *
     * @param {QueryJSON} json from Parse.Query.toJSON() method
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "withJSON",
    value: function (json
    /*: QueryJSON*/
    )
    /*: ParseQuery*/
    {
      if (json.where) {
        this._where = json.where;
      }

      if (json.include) {
        this._include = json.include.split(',');
      }

      if ((0, _keys2.default)(json)) {
        this._select = (0, _keys2.default)(json).split(',');
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
          var _context4;

          if ((0, _indexOf.default)(_context4 = ['where', 'include', 'keys', 'count', 'limit', 'skip', 'order', 'readPreference', 'includeReadPreference', 'subqueryReadPreference', 'hint', 'explain']).call(_context4, _key4) === -1) {
            this._extraOptions[_key4] = json[_key4];
          }
        }
      }

      return this;
    }
    /**
     * Static method to restore Parse.Query by json representation
     * Internally calling Parse.Query.withJSON
     *
     * @param {string} className
     * @param {QueryJSON} json from Parse.Query.toJSON() method
     * @returns {Parse.Query} new created query
     */

  }, {
    key: "get",
    value:
    /**
     * Constructs a Parse.Object whose id is already known by fetching data from
     * the server. Unlike the <code>first</code> method, it never returns undefined.
     *
     * @param {string} objectId The id of the object to be fetched.
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     *   <li>context: A dictionary that is accessible in Cloud Code `beforeFind` trigger.
     * </ul>
     *
     * @returns {Promise} A promise that is resolved with the result when
     * the query completes.
     */
    function (objectId
    /*: string*/
    , options
    /*:: ?: FullOptions*/
    )
    /*: Promise<ParseObject>*/
    {
      this.equalTo('objectId', objectId);
      var firstOptions = {};

      if (options && options.hasOwnProperty('useMasterKey')) {
        firstOptions.useMasterKey = options.useMasterKey;
      }

      if (options && options.hasOwnProperty('sessionToken')) {
        firstOptions.sessionToken = options.sessionToken;
      }

      if (options && options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
        firstOptions.context = options.context;
      }

      return this.first(firstOptions).then(function (response) {
        if (response) {
          return response;
        }

        var errorObject = new _ParseError.default(_ParseError.default.OBJECT_NOT_FOUND, 'Object not found.');
        return _promise.default.reject(errorObject);
      });
    }
    /**
     * Retrieves a list of ParseObjects that satisfy this query.
     *
     * @param {object} options Valid options
     * are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     *   <li>context: A dictionary that is accessible in Cloud Code `beforeFind` trigger.
     * </ul>
     *
     * @returns {Promise} A promise that is resolved with the results when
     * the query completes.
     */

  }, {
    key: "find",
    value: function (options
    /*:: ?: FullOptions*/
    )
    /*: Promise<Array<ParseObject>>*/
    {
      var _this3 = this;

      options = options || {};
      var findOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        findOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        findOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
        findOptions.context = options.context;
      }

      this._setRequestTask(findOptions);

      var controller = _CoreManager.default.getQueryController();

      var select = this._select;

      if (this._queriesLocalDatastore) {
        return this._handleOfflineQuery(this.toJSON());
      }

      return (0, _find.default)(controller).call(controller, this.className, this.toJSON(), findOptions).then(function (response) {
        var _context5; // Return generic object when explain is used


        if (_this3._explain) {
          return response.results;
        }

        var results = (0, _map2.default)(_context5 = response.results).call(_context5, function (data) {
          // In cases of relations, the server may send back a className
          // on the top level of the payload
          var override = response.className || _this3.className;

          if (!data.className) {
            data.className = override;
          } // Make sure the data object contains keys for all objects that
          // have been requested with a select, so that our cached state
          // updates correctly.


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
    /**
     * Retrieves a complete list of ParseObjects that satisfy this query.
     * Using `eachBatch` under the hood to fetch all the valid objects.
     *
     * @param {object} options Valid options are:<ul>
     *   <li>batchSize: How many objects to yield in each batch (default: 100)
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @returns {Promise} A promise that is resolved with the results when
     * the query completes.
     */

  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(options
      /*:: ?: BatchOptions*/
      ) {
        var result;
        return _regenerator.default.wrap(function (_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result
                /*: ParseObject[]*/
                = [];
                _context7.next = 3;
                return this.eachBatch(function (objects
                /*: ParseObject[]*/
                ) {
                  var _context6;

                  result = (0, _concat.default)(_context6 = []).call(_context6, (0, _toConsumableArray2.default)(result), (0, _toConsumableArray2.default)(objects));
                }, options);

              case 3:
                return _context7.abrupt("return", result);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee2, this);
      }));

      return function () {
        return _findAll.apply(this, arguments);
      };
    }()
    /**
     * Counts the number of objects that match this query.
     *
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     *
     * @returns {Promise} A promise that is resolved with the count when
     * the query completes.
     */

  }, {
    key: "count",
    value: function (options
    /*:: ?: FullOptions*/
    )
    /*: Promise<number>*/
    {
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
      return (0, _find.default)(controller).call(controller, this.className, params, findOptions).then(function (result) {
        return result.count;
      });
    }
    /**
     * Executes a distinct query and returns unique values
     *
     * @param {string} key A field to find distinct values
     * @param {object} options
     * Valid options are:<ul>
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     *
     * @returns {Promise} A promise that is resolved with the query completes.
     */

  }, {
    key: "distinct",
    value: function (key
    /*: string*/
    , options
    /*:: ?: FullOptions*/
    )
    /*: Promise<Array<mixed>>*/
    {
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
    /**
     * Executes an aggregate query and returns aggregate results
     *
     * @param {(Array|object)} pipeline Array or Object of stages to process query
     * @param {object} options Valid options are:<ul>
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     *
     * @returns {Promise} A promise that is resolved with the query completes.
     */

  }, {
    key: "aggregate",
    value: function (pipeline
    /*: mixed*/
    , options
    /*:: ?: FullOptions*/
    )
    /*: Promise<Array<mixed>>*/
    {
      options = options || {};
      var aggregateOptions = {};
      aggregateOptions.useMasterKey = true;

      if (options.hasOwnProperty('sessionToken')) {
        aggregateOptions.sessionToken = options.sessionToken;
      }

      this._setRequestTask(aggregateOptions);

      var controller = _CoreManager.default.getQueryController();

      if (!(0, _isArray.default)(pipeline) && (0, _typeof2.default)(pipeline) !== 'object') {
        throw new Error('Invalid pipeline must be Array or Object');
      }

      if ((0, _keys.default)(this._where || {}).length) {
        if (!(0, _isArray.default)(pipeline)) {
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
    /**
     * Retrieves at most one Parse.Object that satisfies this query.
     *
     * Returns the object if there is one, otherwise undefined.
     *
     * @param {object} options Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     *   <li>context: A dictionary that is accessible in Cloud Code `beforeFind` trigger.
     * </ul>
     *
     * @returns {Promise} A promise that is resolved with the object when
     * the query completes.
     */

  }, {
    key: "first",
    value: function (options
    /*:: ?: FullOptions*/
    )
    /*: Promise<ParseObject | void>*/
    {
      var _this4 = this;

      options = options || {};
      var findOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        findOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('sessionToken')) {
        findOptions.sessionToken = options.sessionToken;
      }

      if (options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
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

      return (0, _find.default)(controller).call(controller, this.className, params, findOptions).then(function (response) {
        var objects = response.results;

        if (!objects[0]) {
          return undefined;
        }

        if (!objects[0].className) {
          objects[0].className = _this4.className;
        } // Make sure the data object contains keys for all objects that
        // have been requested with a select, so that our cached state
        // updates correctly.


        if (select) {
          handleSelectResult(objects[0], select);
        }

        return _ParseObject.default.fromJSON(objects[0], !select);
      });
    }
    /**
     * Iterates over objects matching a query, calling a callback for each batch.
     * If the callback returns a promise, the iteration will not continue until
     * that promise has been fulfilled. If the callback returns a rejected
     * promise, then iteration will stop with that error. The items are processed
     * in an unspecified order. The query may not have any sort order, and may
     * not use limit or skip.
     *
     * @param {Function} callback Callback that will be called with each result
     *     of the query.
     * @param {object} options Valid options are:<ul>
     *   <li>batchSize: How many objects to yield in each batch (default: 100)
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     *   <li>context: A dictionary that is accessible in Cloud Code `beforeFind` trigger.
     * </ul>
     * @returns {Promise} A promise that will be fulfilled once the
     *     iteration has completed.
     */

  }, {
    key: "eachBatch",
    value: function (callback
    /*: (objs: Array<ParseObject>) => Promise<*>*/
    , options
    /*:: ?: BatchOptions*/
    )
    /*: Promise<void>*/
    {
      var _context8;

      options = options || {};

      if (this._order || this._skip || this._limit >= 0) {
        return _promise.default.reject('Cannot iterate on a query with sort, skip, or limit.');
      }

      var query = new ParseQuery(this.className);
      query._limit = options.batchSize || 100;
      query._include = (0, _map2.default)(_context8 = this._include).call(_context8, function (i) {
        return i;
      });

      if (this._select) {
        var _context9;

        query._select = (0, _map2.default)(_context9 = this._select).call(_context9, function (s) {
          return s;
        });
      }

      query._hint = this._hint;
      query._where = {};

      for (var _attr in this._where) {
        var val = this._where[_attr];

        if ((0, _isArray.default)(val)) {
          query._where[_attr] = (0, _map2.default)(val).call(val, function (v) {
            return v;
          });
        } else if (val && (0, _typeof2.default)(val) === 'object') {
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

      if (options.hasOwnProperty('context') && (0, _typeof2.default)(options.context) === 'object') {
        findOptions.context = options.context;
      }

      var finished = false;
      var previousResults = [];
      return (0, _promiseUtils.continueWhile)(function () {
        return !finished;
      }, /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _yield$Promise$all, _yield$Promise$all2, results;

        return _regenerator.default.wrap(function (_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _promise.default.all([(0, _find.default)(query).call(query, findOptions), _promise.default.resolve(previousResults.length > 0 && callback(previousResults))]);

              case 2:
                _yield$Promise$all = _context10.sent;
                _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 1);
                results = _yield$Promise$all2[0];

                if (!(results.length >= query._limit)) {
                  _context10.next = 10;
                  break;
                }

                query.greaterThan('objectId', results[results.length - 1].id);
                previousResults = results;
                _context10.next = 17;
                break;

              case 10:
                if (!(results.length > 0)) {
                  _context10.next = 16;
                  break;
                }

                _context10.next = 13;
                return _promise.default.resolve(callback(results));

              case 13:
                finished = true;
                _context10.next = 17;
                break;

              case 16:
                finished = true;

              case 17:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee3);
      })));
    }
    /**
     * Iterates over each result of a query, calling a callback for each one. If
     * the callback returns a promise, the iteration will not continue until
     * that promise has been fulfilled. If the callback returns a rejected
     * promise, then iteration will stop with that error. The items are
     * processed in an unspecified order. The query may not have any sort order,
     * and may not use limit or skip.
     *
     * @param {Function} callback Callback that will be called with each result
     *     of the query.
     * @param {object} options Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @returns {Promise} A promise that will be fulfilled once the
     *     iteration has completed.
     */

  }, {
    key: "each",
    value: function (callback
    /*: (obj: ParseObject) => any*/
    , options
    /*:: ?: BatchOptions*/
    )
    /*: Promise<void>*/
    {
      return this.eachBatch(function (results) {
        var callbacksDone = _promise.default.resolve();

        (0, _forEach.default)(results).call(results, function (result) {
          callbacksDone = callbacksDone.then(function () {
            return callback(result);
          });
        });
        return callbacksDone;
      }, options);
    }
    /**
     * Adds a hint to force index selection. (https://docs.mongodb.com/manual/reference/operator/meta/hint/)
     *
     * @param {(string|object)} value String or Object of index that should be used when executing query
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "hint",
    value: function (value
    /*: mixed*/
    )
    /*: ParseQuery*/
    {
      if (typeof value === 'undefined') {
        delete this._hint;
      }

      this._hint = value;
      return this;
    }
    /**
     * Investigates the query execution plan. Useful for optimizing queries. (https://docs.mongodb.com/manual/reference/operator/meta/explain/)
     *
     * @param {boolean} explain Used to toggle the information on the query plan.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "explain",
    value: function ()
    /*: ParseQuery*/
    {
      var _explain
      /*: boolean*/
      = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (typeof _explain !== 'boolean') {
        throw new Error('You can only set explain to a boolean value');
      }

      this._explain = _explain;
      return this;
    }
    /**
     * Iterates over each result of a query, calling a callback for each one. If
     * the callback returns a promise, the iteration will not continue until
     * that promise has been fulfilled. If the callback returns a rejected
     * promise, then iteration will stop with that error. The items are
     * processed in an unspecified order. The query may not have any sort order,
     * and may not use limit or skip.
     *
     * @param {Function} callback Callback <ul>
     *   <li>currentObject: The current Parse.Object being processed in the array.</li>
     *   <li>index: The index of the current Parse.Object being processed in the array.</li>
     *   <li>query: The query map was called upon.</li>
     * </ul>
     *
     * @param {object} options Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @returns {Promise} A promise that will be fulfilled once the
     *     iteration has completed.
     */

  }, {
    key: "map",
    value: function () {
      var _map = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(callback
      /*: (currentObject: ParseObject, index: number, query: ParseQuery) => any*/
      , options
      /*:: ?: BatchOptions*/
      ) {
        var _this5 = this;

        var array, index;
        return _regenerator.default.wrap(function (_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                array = [];
                index = 0;
                _context11.next = 4;
                return this.each(function (object) {
                  return _promise.default.resolve(callback(object, index, _this5)).then(function (result) {
                    array.push(result);
                    index += 1;
                  });
                }, options);

              case 4:
                return _context11.abrupt("return", array);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee4, this);
      }));

      return function () {
        return _map.apply(this, arguments);
      };
    }()
    /**
     * Iterates over each result of a query, calling a callback for each one. If
     * the callback returns a promise, the iteration will not continue until
     * that promise has been fulfilled. If the callback returns a rejected
     * promise, then iteration will stop with that error. The items are
     * processed in an unspecified order. The query may not have any sort order,
     * and may not use limit or skip.
     *
     * @param {Function} callback Callback <ul>
     *   <li>accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback.</li>
     *   <li>currentObject: The current Parse.Object being processed in the array.</li>
     *   <li>index: The index of the current Parse.Object being processed in the array.</li>
     * </ul>
     * @param {*} initialValue A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first object in the query will be used and skipped.
     * @param {object} options Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @returns {Promise} A promise that will be fulfilled once the
     *     iteration has completed.
     */

  }, {
    key: "reduce",
    value: function () {
      var _reduce = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(callback
      /*: (accumulator: any, currentObject: ParseObject, index: number) => any*/
      , initialValue
      /*: any*/
      , options
      /*:: ?: BatchOptions*/
      ) {
        var accumulator, index;
        return _regenerator.default.wrap(function (_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                accumulator = initialValue;
                index = 0;
                _context12.next = 4;
                return this.each(function (object) {
                  // If no initial value was given, we take the first object from the query
                  // as the initial value and don't call the callback with it.
                  if (index === 0 && initialValue === undefined) {
                    accumulator = object;
                    index += 1;
                    return;
                  }

                  return _promise.default.resolve(callback(accumulator, object, index)).then(function (result) {
                    accumulator = result;
                    index += 1;
                  });
                }, options);

              case 4:
                if (!(index === 0 && initialValue === undefined)) {
                  _context12.next = 6;
                  break;
                }

                throw new TypeError('Reducing empty query result set with no initial value');

              case 6:
                return _context12.abrupt("return", accumulator);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee5, this);
      }));

      return function () {
        return _reduce.apply(this, arguments);
      };
    }()
    /**
     * Iterates over each result of a query, calling a callback for each one. If
     * the callback returns a promise, the iteration will not continue until
     * that promise has been fulfilled. If the callback returns a rejected
     * promise, then iteration will stop with that error. The items are
     * processed in an unspecified order. The query may not have any sort order,
     * and may not use limit or skip.
     *
     * @param {Function} callback Callback <ul>
     *   <li>currentObject: The current Parse.Object being processed in the array.</li>
     *   <li>index: The index of the current Parse.Object being processed in the array.</li>
     *   <li>query: The query filter was called upon.</li>
     * </ul>
     *
     * @param {object} options Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *       behalf of a specific user.
     * </ul>
     * @returns {Promise} A promise that will be fulfilled once the
     *     iteration has completed.
     */

  }, {
    key: "filter",
    value: function () {
      var _filter = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(callback
      /*: (currentObject: ParseObject, index: number, query: ParseQuery) => boolean*/
      , options
      /*:: ?: BatchOptions*/
      ) {
        var _this6 = this;

        var array, index;
        return _regenerator.default.wrap(function (_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                array = [];
                index = 0;
                _context13.next = 4;
                return this.each(function (object) {
                  return _promise.default.resolve(callback(object, index, _this6)).then(function (flag) {
                    if (flag) {
                      array.push(object);
                    }

                    index += 1;
                  });
                }, options);

              case 4:
                return _context13.abrupt("return", array);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee6, this);
      }));

      return function () {
        return _filter.apply(this, arguments);
      };
    }()
    /** Query Conditions * */

    /**
     * Adds a constraint to the query that requires a particular key's value to
     * be equal to the provided value.
     *
     * @param {string} key The key to check.
     * @param value The value that the Parse.Object must contain.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "equalTo",
    value: function (key
    /*: string | { [key: string]: any }*/
    , value
    /*: ?mixed*/
    )
    /*: ParseQuery*/
    {
      var _this7 = this;

      if (key && (0, _typeof2.default)(key) === 'object') {
        var _context14;

        (0, _forEach.default)(_context14 = (0, _entries.default)(key)).call(_context14, function (_ref2) {
          var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
              k = _ref3[0],
              val = _ref3[1];

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
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * be not equal to the provided value.
     *
     * @param {string} key The key to check.
     * @param value The value that must not be equalled.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "notEqualTo",
    value: function (key
    /*: string | { [key: string]: any }*/
    , value
    /*: ?mixed*/
    )
    /*: ParseQuery*/
    {
      var _this8 = this;

      if (key && (0, _typeof2.default)(key) === 'object') {
        var _context15;

        (0, _forEach.default)(_context15 = (0, _entries.default)(key)).call(_context15, function (_ref4) {
          var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
              k = _ref5[0],
              val = _ref5[1];

          return _this8.notEqualTo(k, val);
        });
        return this;
      }

      return this._addCondition(key, '$ne', value);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * be less than the provided value.
     *
     * @param {string} key The key to check.
     * @param value The value that provides an upper bound.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "lessThan",
    value: function (key
    /*: string*/
    , value
    /*: mixed*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$lt', value);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * be greater than the provided value.
     *
     * @param {string} key The key to check.
     * @param value The value that provides an lower bound.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "greaterThan",
    value: function (key
    /*: string*/
    , value
    /*: mixed*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$gt', value);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * be less than or equal to the provided value.
     *
     * @param {string} key The key to check.
     * @param value The value that provides an upper bound.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "lessThanOrEqualTo",
    value: function (key
    /*: string*/
    , value
    /*: mixed*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$lte', value);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * be greater than or equal to the provided value.
     *
     * @param {string} key The key to check.
     * @param {*} value The value that provides an lower bound.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "greaterThanOrEqualTo",
    value: function (key
    /*: string*/
    , value
    /*: mixed*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$gte', value);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * be contained in the provided list of values.
     *
     * @param {string} key The key to check.
     * @param {*} value The values that will match.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "containedIn",
    value: function (key
    /*: string*/
    , value
    /*: mixed*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$in', value);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * not be contained in the provided list of values.
     *
     * @param {string} key The key to check.
     * @param {*} value The values that will not match.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "notContainedIn",
    value: function (key
    /*: string*/
    , value
    /*: mixed*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$nin', value);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * be contained by the provided list of values. Get objects where all array elements match.
     *
     * @param {string} key The key to check.
     * @param {Array} values The values that will match.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "containedBy",
    value: function (key
    /*: string*/
    , values
    /*: Array<mixed>*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$containedBy', values);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * contain each one of the provided list of values.
     *
     * @param {string} key The key to check.  This key's value must be an array.
     * @param {Array} values The values that will match.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "containsAll",
    value: function (key
    /*: string*/
    , values
    /*: Array<mixed>*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$all', values);
    }
    /**
     * Adds a constraint to the query that requires a particular key's value to
     * contain each one of the provided list of values starting with given strings.
     *
     * @param {string} key The key to check.  This key's value must be an array.
     * @param {Array<string>} values The string values that will match as starting string.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "containsAllStartingWith",
    value: function (key
    /*: string*/
    , values
    /*: Array<string>*/
    )
    /*: ParseQuery*/
    {
      var _this = this;

      if (!(0, _isArray.default)(values)) {
        values = [values];
      }

      var regexObject = (0, _map2.default)(values).call(values, function (value) {
        return {
          $regex: _this._regexStartWith(value)
        };
      });
      return this.containsAll(key, regexObject);
    }
    /**
     * Adds a constraint for finding objects that contain the given key.
     *
     * @param {string} key The key that should exist.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "exists",
    value: function (key
    /*: string*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$exists', true);
    }
    /**
     * Adds a constraint for finding objects that do not contain a given key.
     *
     * @param {string} key The key that should not exist
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "doesNotExist",
    value: function (key
    /*: string*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$exists', false);
    }
    /**
     * Adds a regular expression constraint for finding string values that match
     * the provided regular expression.
     * This may be slow for large datasets.
     *
     * @param {string} key The key that the string to match is stored in.
     * @param {RegExp} regex The regular expression pattern to match.
     * @param {string} modifiers The regular expression mode.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "matches",
    value: function (key
    /*: string*/
    , regex
    /*: RegExp*/
    , modifiers
    /*: string*/
    )
    /*: ParseQuery*/
    {
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
    /**
     * Adds a constraint that requires that a key's value matches a Parse.Query
     * constraint.
     *
     * @param {string} key The key that the contains the object to match the
     *                     query.
     * @param {Parse.Query} query The query that should match.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "matchesQuery",
    value: function (key
    /*: string*/
    , query
    /*: ParseQuery*/
    )
    /*: ParseQuery*/
    {
      var queryJSON = query.toJSON();
      queryJSON.className = query.className;
      return this._addCondition(key, '$inQuery', queryJSON);
    }
    /**
     * Adds a constraint that requires that a key's value not matches a
     * Parse.Query constraint.
     *
     * @param {string} key The key that the contains the object to match the
     *                     query.
     * @param {Parse.Query} query The query that should not match.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "doesNotMatchQuery",
    value: function (key
    /*: string*/
    , query
    /*: ParseQuery*/
    )
    /*: ParseQuery*/
    {
      var queryJSON = query.toJSON();
      queryJSON.className = query.className;
      return this._addCondition(key, '$notInQuery', queryJSON);
    }
    /**
     * Adds a constraint that requires that a key's value matches a value in
     * an object returned by a different Parse.Query.
     *
     * @param {string} key The key that contains the value that is being
     *                     matched.
     * @param {string} queryKey The key in the objects returned by the query to
     *                          match against.
     * @param {Parse.Query} query The query to run.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "matchesKeyInQuery",
    value: function (key
    /*: string*/
    , queryKey
    /*: string*/
    , query
    /*: ParseQuery*/
    )
    /*: ParseQuery*/
    {
      var queryJSON = query.toJSON();
      queryJSON.className = query.className;
      return this._addCondition(key, '$select', {
        key: queryKey,
        query: queryJSON
      });
    }
    /**
     * Adds a constraint that requires that a key's value not match a value in
     * an object returned by a different Parse.Query.
     *
     * @param {string} key The key that contains the value that is being
     *                     excluded.
     * @param {string} queryKey The key in the objects returned by the query to
     *                          match against.
     * @param {Parse.Query} query The query to run.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "doesNotMatchKeyInQuery",
    value: function (key
    /*: string*/
    , queryKey
    /*: string*/
    , query
    /*: ParseQuery*/
    )
    /*: ParseQuery*/
    {
      var queryJSON = query.toJSON();
      queryJSON.className = query.className;
      return this._addCondition(key, '$dontSelect', {
        key: queryKey,
        query: queryJSON
      });
    }
    /**
     * Adds a constraint for finding string values that contain a provided
     * string.  This may be slow for large datasets.
     *
     * @param {string} key The key that the string to match is stored in.
     * @param {string} substring The substring that the value must contain.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "contains",
    value: function (key
    /*: string*/
    , substring
    /*: string*/
    )
    /*: ParseQuery*/
    {
      if (typeof substring !== 'string') {
        throw new Error('The value being searched for must be a string.');
      }

      return this._addCondition(key, '$regex', quote(substring));
    }
    /**
     * Adds a constraint for finding string values that contain a provided
     * string. This may be slow for large datasets. Requires Parse-Server > 2.5.0
     *
     * In order to sort you must use select and ascending ($score is required)
     *  <pre>
     *   query.fullText('field', 'term');
     *   query.ascending('$score');
     *   query.select('$score');
     *  </pre>
     *
     * To retrieve the weight / rank
     *  <pre>
     *   object->get('score');
     *  </pre>
     *
     * You can define optionals by providing an object as a third parameter
     *  <pre>
     *   query.fullText('field', 'term', { language: 'es', diacriticSensitive: true });
     *  </pre>
     *
     * @param {string} key The key that the string to match is stored in.
     * @param {string} value The string to search
     * @param {object} options (Optional)
     * @param {string} options.language The language that determines the list of stop words for the search and the rules for the stemmer and tokenizer.
     * @param {boolean} options.caseSensitive A boolean flag to enable or disable case sensitive search.
     * @param {boolean} options.diacriticSensitive A boolean flag to enable or disable diacritic sensitive search.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "fullText",
    value: function (key
    /*: string*/
    , value
    /*: string*/
    , options
    /*: ?Object*/
    )
    /*: ParseQuery*/
    {
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
            throw new Error("Unknown option: ".concat(option));
        }
      }

      return this._addCondition(key, '$text', {
        $search: fullOptions
      });
    }
    /**
     * Method to sort the full text search by text score
     *
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "sortByTextScore",
    value: function () {
      this.ascending('$score');
      this.select(['$score']);
      return this;
    }
    /**
     * Adds a constraint for finding string values that start with a provided
     * string.  This query will use the backend index, so it will be fast even
     * for large datasets.
     *
     * @param {string} key The key that the string to match is stored in.
     * @param {string} prefix The substring that the value must start with.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "startsWith",
    value: function (key
    /*: string*/
    , prefix
    /*: string*/
    )
    /*: ParseQuery*/
    {
      if (typeof prefix !== 'string') {
        throw new Error('The value being searched for must be a string.');
      }

      return this._addCondition(key, '$regex', this._regexStartWith(prefix));
    }
    /**
     * Adds a constraint for finding string values that end with a provided
     * string.  This will be slow for large datasets.
     *
     * @param {string} key The key that the string to match is stored in.
     * @param {string} suffix The substring that the value must end with.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "endsWith",
    value: function (key
    /*: string*/
    , suffix
    /*: string*/
    )
    /*: ParseQuery*/
    {
      if (typeof suffix !== 'string') {
        throw new Error('The value being searched for must be a string.');
      }

      return this._addCondition(key, '$regex', "".concat(quote(suffix), "$"));
    }
    /**
     * Adds a proximity based constraint for finding objects with key point
     * values near the point given.
     *
     * @param {string} key The key that the Parse.GeoPoint is stored in.
     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "near",
    value: function (key
    /*: string*/
    , point
    /*: ParseGeoPoint*/
    )
    /*: ParseQuery*/
    {
      if (!(point instanceof _ParseGeoPoint.default)) {
        // Try to cast it as a GeoPoint
        point = new _ParseGeoPoint.default(point);
      }

      return this._addCondition(key, '$nearSphere', point);
    }
    /**
     * Adds a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     *
     * @param {string} key The key that the Parse.GeoPoint is stored in.
     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
     * @param {number} maxDistance Maximum distance (in radians) of results to return.
     * @param {boolean} sorted A Bool value that is true if results should be
     * sorted by distance ascending, false is no sorting is required,
     * defaults to true.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "withinRadians",
    value: function (key
    /*: string*/
    , point
    /*: ParseGeoPoint*/
    , maxDistance
    /*: number*/
    , sorted
    /*: boolean*/
    )
    /*: ParseQuery*/
    {
      if (sorted || sorted === undefined) {
        this.near(key, point);
        return this._addCondition(key, '$maxDistance', maxDistance);
      }

      return this._addCondition(key, '$geoWithin', {
        $centerSphere: [[point.longitude, point.latitude], maxDistance]
      });
    }
    /**
     * Adds a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * Radius of earth used is 3958.8 miles.
     *
     * @param {string} key The key that the Parse.GeoPoint is stored in.
     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
     * @param {number} maxDistance Maximum distance (in miles) of results to return.
     * @param {boolean} sorted A Bool value that is true if results should be
     * sorted by distance ascending, false is no sorting is required,
     * defaults to true.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "withinMiles",
    value: function (key
    /*: string*/
    , point
    /*: ParseGeoPoint*/
    , maxDistance
    /*: number*/
    , sorted
    /*: boolean*/
    )
    /*: ParseQuery*/
    {
      return this.withinRadians(key, point, maxDistance / 3958.8, sorted);
    }
    /**
     * Adds a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * Radius of earth used is 6371.0 kilometers.
     *
     * @param {string} key The key that the Parse.GeoPoint is stored in.
     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
     * @param {number} maxDistance Maximum distance (in kilometers) of results to return.
     * @param {boolean} sorted A Bool value that is true if results should be
     * sorted by distance ascending, false is no sorting is required,
     * defaults to true.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "withinKilometers",
    value: function (key
    /*: string*/
    , point
    /*: ParseGeoPoint*/
    , maxDistance
    /*: number*/
    , sorted
    /*: boolean*/
    )
    /*: ParseQuery*/
    {
      return this.withinRadians(key, point, maxDistance / 6371.0, sorted);
    }
    /**
     * Adds a constraint to the query that requires a particular key's
     * coordinates be contained within a given rectangular geographic bounding
     * box.
     *
     * @param {string} key The key to be constrained.
     * @param {Parse.GeoPoint} southwest
     *     The lower-left inclusive corner of the box.
     * @param {Parse.GeoPoint} northeast
     *     The upper-right inclusive corner of the box.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "withinGeoBox",
    value: function (key
    /*: string*/
    , southwest
    /*: ParseGeoPoint*/
    , northeast
    /*: ParseGeoPoint*/
    )
    /*: ParseQuery*/
    {
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
    /**
     * Adds a constraint to the query that requires a particular key's
     * coordinates be contained within and on the bounds of a given polygon.
     * Supports closed and open (last point is connected to first) paths
     *
     * Polygon must have at least 3 points
     *
     * @param {string} key The key to be constrained.
     * @param {Array} points Array of Coordinates / GeoPoints
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "withinPolygon",
    value: function (key
    /*: string*/
    , points
    /*: Array<Array<number>>*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$geoWithin', {
        $polygon: points
      });
    }
    /**
     * Add a constraint to the query that requires a particular key's
     * coordinates that contains a ParseGeoPoint
     *
     * @param {string} key The key to be constrained.
     * @param {Parse.GeoPoint} point
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "polygonContains",
    value: function (key
    /*: string*/
    , point
    /*: ParseGeoPoint*/
    )
    /*: ParseQuery*/
    {
      return this._addCondition(key, '$geoIntersects', {
        $point: point
      });
    }
    /** Query Orderings * */

    /**
     * Sorts the results in ascending order by the given key.
     *
     * @param {(string|string[])} keys The key to order by, which is a
     * string of comma separated values, or an Array of keys, or multiple keys.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "ascending",
    value: function ()
    /*: ParseQuery*/
    {
      this._order = [];

      for (var _len = arguments.length, keys = new Array(_len), _key5 = 0; _key5 < _len; _key5++) {
        keys[_key5] = arguments[_key5];
      }

      return this.addAscending.apply(this, keys);
    }
    /**
     * Sorts the results in ascending order by the given key,
     * but can also add secondary sort descriptors without overwriting _order.
     *
     * @param {(string|string[])} keys The key to order by, which is a
     * string of comma separated values, or an Array of keys, or multiple keys.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "addAscending",
    value: function ()
    /*: ParseQuery*/
    {
      var _this9 = this;

      if (!this._order) {
        this._order = [];
      }

      for (var _len2 = arguments.length, keys = new Array(_len2), _key6 = 0; _key6 < _len2; _key6++) {
        keys[_key6] = arguments[_key6];
      }

      (0, _forEach.default)(keys).call(keys, function (key) {
        var _context16;

        if ((0, _isArray.default)(key)) {
          key = key.join();
        }

        _this9._order = (0, _concat.default)(_context16 = _this9._order).call(_context16, key.replace(/\s/g, '').split(','));
      });
      return this;
    }
    /**
     * Sorts the results in descending order by the given key.
     *
     * @param {(string|string[])} keys The key to order by, which is a
     * string of comma separated values, or an Array of keys, or multiple keys.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "descending",
    value: function ()
    /*: ParseQuery*/
    {
      this._order = [];

      for (var _len3 = arguments.length, keys = new Array(_len3), _key7 = 0; _key7 < _len3; _key7++) {
        keys[_key7] = arguments[_key7];
      }

      return this.addDescending.apply(this, keys);
    }
    /**
     * Sorts the results in descending order by the given key,
     * but can also add secondary sort descriptors without overwriting _order.
     *
     * @param {(string|string[])} keys The key to order by, which is a
     * string of comma separated values, or an Array of keys, or multiple keys.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "addDescending",
    value: function ()
    /*: ParseQuery*/
    {
      var _this10 = this;

      if (!this._order) {
        this._order = [];
      }

      for (var _len4 = arguments.length, keys = new Array(_len4), _key8 = 0; _key8 < _len4; _key8++) {
        keys[_key8] = arguments[_key8];
      }

      (0, _forEach.default)(keys).call(keys, function (key) {
        var _context17, _context18;

        if ((0, _isArray.default)(key)) {
          key = key.join();
        }

        _this10._order = (0, _concat.default)(_context17 = _this10._order).call(_context17, (0, _map2.default)(_context18 = key.replace(/\s/g, '').split(',')).call(_context18, function (k) {
          return "-".concat(k);
        }));
      });
      return this;
    }
    /** Query Options * */

    /**
     * Sets the number of results to skip before returning any results.
     * This is useful for pagination.
     * Default is to skip zero results.
     *
     * @param {number} n the number of results to skip.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "skip",
    value: function (n
    /*: number*/
    )
    /*: ParseQuery*/
    {
      if (typeof n !== 'number' || n < 0) {
        throw new Error('You can only skip by a positive number');
      }

      this._skip = n;
      return this;
    }
    /**
     * Sets the limit of the number of results to return. The default limit is 100.
     *
     * @param {number} n the number of results to limit to.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "limit",
    value: function (n
    /*: number*/
    )
    /*: ParseQuery*/
    {
      if (typeof n !== 'number') {
        throw new Error('You can only set the limit to a numeric value');
      }

      this._limit = n;
      return this;
    }
    /**
     * Sets the flag to include with response the total number of objects satisfying this query,
     * despite limits/skip. Might be useful for pagination.
     * Note that result of this query will be wrapped as an object with
     * `results`: holding {ParseObject} array and `count`: integer holding total number
     *
     * @param {boolean} includeCount false - disable, true - enable.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "withCount",
    value: function ()
    /*: ParseQuery*/
    {
      var includeCount
      /*: boolean*/
      = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (typeof includeCount !== 'boolean') {
        throw new Error('You can only set withCount to a boolean value');
      }

      this._count = includeCount;
      return this;
    }
    /**
     * Includes nested Parse.Objects for the provided key.  You can use dot
     * notation to specify which fields in the included object are also fetched.
     *
     * You can include all nested Parse.Objects by passing in '*'.
     * Requires Parse Server 3.0.0+
     * <pre>query.include('*');</pre>
     *
     * @param {...string|Array<string>} keys The name(s) of the key(s) to include.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "include",
    value: function ()
    /*: ParseQuery*/
    {
      var _this11 = this;

      for (var _len5 = arguments.length, keys = new Array(_len5), _key9 = 0; _key9 < _len5; _key9++) {
        keys[_key9] = arguments[_key9];
      }

      (0, _forEach.default)(keys).call(keys, function (key) {
        if ((0, _isArray.default)(key)) {
          var _context19;

          _this11._include = (0, _concat.default)(_context19 = _this11._include).call(_context19, key);
        } else {
          _this11._include.push(key);
        }
      });
      return this;
    }
    /**
     * Includes all nested Parse.Objects.
     *
     * Requires Parse Server 3.0.0+
     *
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "includeAll",
    value: function ()
    /*: ParseQuery*/
    {
      return this.include('*');
    }
    /**
     * Restricts the fields of the returned Parse.Objects to include only the
     * provided keys.  If this is called multiple times, then all of the keys
     * specified in each of the calls will be included.
     *
     * @param {...string|Array<string>} keys The name(s) of the key(s) to include.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "select",
    value: function ()
    /*: ParseQuery*/
    {
      var _this12 = this;

      if (!this._select) {
        this._select = [];
      }

      for (var _len6 = arguments.length, keys = new Array(_len6), _key10 = 0; _key10 < _len6; _key10++) {
        keys[_key10] = arguments[_key10];
      }

      (0, _forEach.default)(keys).call(keys, function (key) {
        if ((0, _isArray.default)(key)) {
          var _context20;

          _this12._select = (0, _concat.default)(_context20 = _this12._select).call(_context20, key);
        } else {
          _this12._select.push(key);
        }
      });
      return this;
    }
    /**
     * Restricts the fields of the returned Parse.Objects to all keys except the
     * provided keys. Exclude takes precedence over select and include.
     *
     * Requires Parse Server 3.6.0+
     *
     * @param {...string|Array<string>} keys The name(s) of the key(s) to exclude.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "exclude",
    value: function ()
    /*: ParseQuery*/
    {
      var _this13 = this;

      for (var _len7 = arguments.length, keys = new Array(_len7), _key11 = 0; _key11 < _len7; _key11++) {
        keys[_key11] = arguments[_key11];
      }

      (0, _forEach.default)(keys).call(keys, function (key) {
        if ((0, _isArray.default)(key)) {
          var _context21;

          _this13._exclude = (0, _concat.default)(_context21 = _this13._exclude).call(_context21, key);
        } else {
          _this13._exclude.push(key);
        }
      });
      return this;
    }
    /**
     * Changes the read preference that the backend will use when performing the query to the database.
     *
     * @param {string} readPreference The read preference for the main query.
     * @param {string} includeReadPreference The read preference for the queries to include pointers.
     * @param {string} subqueryReadPreference The read preference for the sub queries.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "readPreference",
    value: function (_readPreference
    /*: string*/
    , includeReadPreference
    /*:: ?: string*/
    , subqueryReadPreference
    /*:: ?: string*/
    )
    /*: ParseQuery*/
    {
      this._readPreference = _readPreference;
      this._includeReadPreference = includeReadPreference;
      this._subqueryReadPreference = subqueryReadPreference;
      return this;
    }
  }, {
    key: "onChange",
    value: function (onUpdate
    /*: any*/
    , onError
    /*:: ?: any*/

    /*:: ?: string*/
    )
    /*: Promise<LiveQuerySubscription>*/
    {
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
            // eslint-disable-next-line no-console
            console.warn('Moralis: Subscription error', err);
          }
        });
      }).catch(function (err) {
        if (onError) {
          onError(err);
        } else {
          // eslint-disable-next-line no-console
          console.warn('Moralis: Subscription connection error', err);
        }
      });
      return function () {
        if (sub) {
          sub.unsubscribe();
        }
      };
    }
    /**
     * Subscribe this query to get liveQuery updates
     *
     * @param {string} sessionToken (optional) Defaults to the currentUser
     * @returns {Promise<LiveQuerySubscription>} Returns the liveQuerySubscription, it's an event emitter
     * which can be used to get liveQuery updates.
     */

  }, {
    key: "subscribe",
    value: function () {
      var _subscribe = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(sessionToken
      /*:: ?: string*/
      ) {
        var currentUser, liveQueryClient, subscription;
        return _regenerator.default.wrap(function (_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return _CoreManager.default.getUserController().currentUserAsync();

              case 2:
                currentUser = _context22.sent;

                if (!sessionToken) {
                  sessionToken = currentUser ? currentUser.getSessionToken() : undefined;
                }

                _context22.next = 6;
                return _CoreManager.default.getLiveQueryController().getDefaultLiveQueryClient();

              case 6:
                liveQueryClient = _context22.sent;

                if (liveQueryClient.shouldOpen()) {
                  liveQueryClient.open();
                }

                subscription = liveQueryClient.subscribe(this, sessionToken);
                return _context22.abrupt("return", subscription.subscribePromise.then(function () {
                  return subscription;
                }));

              case 10:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee7, this);
      }));

      return function () {
        return _subscribe.apply(this, arguments);
      };
    }()
    /**
     * Constructs a Parse.Query that is the OR of the passed in queries.  For
     * example:
     * <pre>var compoundQuery = Parse.Query.or(query1, query2, query3);</pre>
     *
     * will create a compoundQuery that is an or of the query1, query2, and
     * query3.
     *
     * @param {...Parse.Query} queries The list of queries to OR.
     * @static
     * @returns {Parse.Query} The query that is the OR of the passed in queries.
     */

  }, {
    key: "fromNetwork",
    value:
    /**
     * Change the source of this query to the server.
     *
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */
    function ()
    /*: ParseQuery*/
    {
      this._queriesLocalDatastore = false;
      this._localDatastorePinName = null;
      return this;
    }
    /**
     * Changes the source of this query to all pinned objects.
     *
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "fromLocalDatastore",
    value: function ()
    /*: ParseQuery*/
    {
      return this.fromPinWithName(null);
    }
    /**
     * Changes the source of this query to the default group of pinned objects.
     *
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "fromPin",
    value: function ()
    /*: ParseQuery*/
    {
      return this.fromPinWithName(_LocalDatastoreUtils.DEFAULT_PIN);
    }
    /**
     * Changes the source of this query to a specific group of pinned objects.
     *
     * @param {string} name The name of query source.
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "fromPinWithName",
    value: function (name
    /*:: ?: string*/
    )
    /*: ParseQuery*/
    {
      var localDatastore = _CoreManager.default.getLocalDatastore();

      if (localDatastore.checkIfEnabled()) {
        this._queriesLocalDatastore = true;
        this._localDatastorePinName = name;
      }

      return this;
    }
    /**
     * Cancels the current network request (if any is running).
     *
     * @returns {Parse.Query} Returns the query, so you can chain this call.
     */

  }, {
    key: "cancel",
    value: function ()
    /*: ParseQuery*/
    {
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
    value: function (className
    /*: string*/
    , json
    /*: QueryJSON*/
    )
    /*: ParseQuery*/
    {
      var query = new ParseQuery(className);
      return query.withJSON(json);
    }
  }, {
    key: "or",
    value: function ()
    /*: ParseQuery*/
    {
      for (var _len8 = arguments.length, queries = new Array(_len8), _key12 = 0; _key12 < _len8; _key12++) {
        queries[_key12] = arguments[_key12];
      }

      var className = _getClassNameFromQueries(queries);

      var query = new ParseQuery(className);

      query._orQuery(queries);

      return query;
    }
    /**
     * Constructs a Parse.Query that is the AND of the passed in queries.  For
     * example:
     * <pre>var compoundQuery = Parse.Query.and(query1, query2, query3);</pre>
     *
     * will create a compoundQuery that is an and of the query1, query2, and
     * query3.
     *
     * @param {...Parse.Query} queries The list of queries to AND.
     * @static
     * @returns {Parse.Query} The query that is the AND of the passed in queries.
     */

  }, {
    key: "and",
    value: function ()
    /*: ParseQuery*/
    {
      for (var _len9 = arguments.length, queries = new Array(_len9), _key13 = 0; _key13 < _len9; _key13++) {
        queries[_key13] = arguments[_key13];
      }

      var className = _getClassNameFromQueries(queries);

      var query = new ParseQuery(className);

      query._andQuery(queries);

      return query;
    }
    /**
     * Constructs a Parse.Query that is the NOR of the passed in queries.  For
     * example:
     * <pre>const compoundQuery = Parse.Query.nor(query1, query2, query3);</pre>
     *
     * will create a compoundQuery that is a nor of the query1, query2, and
     * query3.
     *
     * @param {...Parse.Query} queries The list of queries to NOR.
     * @static
     * @returns {Parse.Query} The query that is the NOR of the passed in queries.
     */

  }, {
    key: "nor",
    value: function ()
    /*: ParseQuery*/
    {
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
  find: function (className
  /*: string*/
  , params
  /*: QueryJSON*/
  , options
  /*: RequestOptions*/
  )
  /*: Promise<Array<ParseObject>>*/
  {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', "classes/".concat(className), params, options);
  },
  aggregate: function (className
  /*: string*/
  , params
  /*: any*/
  , options
  /*: RequestOptions*/
  )
  /*: Promise<Array<mixed>>*/
  {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', "aggregate/".concat(className), params, options);
  }
};

_CoreManager.default.setQueryController(DefaultController);

var _default = ParseQuery;
exports.default = _default;