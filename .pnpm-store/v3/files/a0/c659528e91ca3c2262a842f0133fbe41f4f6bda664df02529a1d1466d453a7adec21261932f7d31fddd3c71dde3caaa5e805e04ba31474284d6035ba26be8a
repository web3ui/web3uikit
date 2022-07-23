"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _escape2 = _interopRequireDefault(require("./escape"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _Storage = _interopRequireDefault(require("./Storage"));
/**
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
 * Parse.Config is a local representation of configuration data that
 * can be set from the Parse dashboard.
 *
 * @alias Parse.Config
 */


var ParseConfig = /*#__PURE__*/function () {
  function ParseConfig() {
    (0, _classCallCheck2.default)(this, ParseConfig);
    (0, _defineProperty2.default)(this, "attributes", void 0);
    (0, _defineProperty2.default)(this, "_escapedAttributes", void 0);
    this.attributes = {};
    this._escapedAttributes = {};
  }
  /**
   * Gets the value of an attribute.
   *
   * @param {string} attr The name of an attribute.
   * @returns {*}
   */


  (0, _createClass2.default)(ParseConfig, [{
    key: "get",
    value: function (attr
    /*: string*/
    )
    /*: any*/
    {
      return this.attributes[attr];
    }
    /**
     * Gets the HTML-escaped value of an attribute.
     *
     * @param {string} attr The name of an attribute.
     * @returns {string}
     */

  }, {
    key: "escape",
    value: function (attr
    /*: string*/
    )
    /*: string*/
    {
      var html = this._escapedAttributes[attr];

      if (html) {
        return html;
      }

      var val = this.attributes[attr];
      var escaped = '';

      if (val != null) {
        escaped = (0, _escape2.default)(val.toString());
      }

      this._escapedAttributes[attr] = escaped;
      return escaped;
    }
    /**
     * Retrieves the most recently-fetched configuration object, either from
     * memory or from local storage if necessary.
     *
     * @static
     * @returns {Parse.Config} The most recently-fetched Parse.Config if it
     *     exists, else an empty Parse.Config.
     */

  }], [{
    key: "current",
    value: function () {
      var controller = _CoreManager.default.getConfigController();

      return controller.current();
    }
    /**
     * Gets a new configuration object from the server.
     *
     * @static
     * @param {object} options
     * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     * </ul>
     * @returns {Promise} A promise that is resolved with a newly-created
     *     configuration object when the get completes.
     */

  }, {
    key: "get",
    value: function () {
      var options
      /*: RequestOptions*/
      = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var controller = _CoreManager.default.getConfigController();

      return controller.get(options);
    }
    /**
     * Save value keys to the server.
     *
     * @static
     * @param {object} attrs The config parameters and values.
     * @param {object} masterKeyOnlyFlags The flags that define whether config parameters listed
     * in `attrs` should be retrievable only by using the master key.
     * For example: `param1: true` makes `param1` only retrievable by using the master key.
     * If a parameter is not provided or set to `false`, it can be retrieved without
     * using the master key.
     * @returns {Promise} A promise that is resolved with a newly-created
     *     configuration object or with the current with the update.
     */

  }, {
    key: "save",
    value: function (attrs
    /*: { [key: string]: any }*/
    , masterKeyOnlyFlags
    /*: { [key: string]: any }*/
    ) {
      var controller = _CoreManager.default.getConfigController(); // To avoid a mismatch with the local and the cloud config we get a new version


      return controller.save(attrs, masterKeyOnlyFlags).then(function () {
        return controller.get({
          useMasterKey: true
        });
      }, function (error) {
        return _promise.default.reject(error);
      });
    }
    /**
     * Used for testing
     *
     * @private
     */

  }, {
    key: "_clearCache",
    value: function () {
      currentConfig = null;
    }
  }]);
  return ParseConfig;
}();

var currentConfig = null;
var CURRENT_CONFIG_KEY = 'currentConfig';

function decodePayload(data) {
  try {
    var json = JSON.parse(data);

    if (json && (0, _typeof2.default)(json) === 'object') {
      return (0, _decode.default)(json);
    }
  } catch (e) {
    return null;
  }
}

var DefaultController = {
  current: function () {
    if (currentConfig) {
      return currentConfig;
    }

    var config = new ParseConfig();

    var storagePath = _Storage.default.generatePath(CURRENT_CONFIG_KEY);

    if (!_Storage.default.async()) {
      var configData = _Storage.default.getItem(storagePath);

      if (configData) {
        var attributes = decodePayload(configData);

        if (attributes) {
          config.attributes = attributes;
          currentConfig = config;
        }
      }

      return config;
    } // Return a promise for async storage controllers


    return _Storage.default.getItemAsync(storagePath).then(function (configData) {
      if (configData) {
        var _attributes = decodePayload(configData);

        if (_attributes) {
          config.attributes = _attributes;
          currentConfig = config;
        }
      }

      return config;
    });
  },
  get: function () {
    var options
    /*: RequestOptions*/
    = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'config', {}, options).then(function (response) {
      if (!response || !response.params) {
        var error = new _ParseError.default(_ParseError.default.INVALID_JSON, 'Config JSON response invalid.');
        return _promise.default.reject(error);
      }

      var config = new ParseConfig();
      config.attributes = {};

      for (var attr in response.params) {
        config.attributes[attr] = (0, _decode.default)(response.params[attr]);
      }

      currentConfig = config;
      return _Storage.default.setItemAsync(_Storage.default.generatePath(CURRENT_CONFIG_KEY), (0, _stringify.default)(response.params)).then(function () {
        return config;
      });
    });
  },
  save: function (attrs
  /*: { [key: string]: any }*/
  , masterKeyOnlyFlags
  /*: { [key: string]: any }*/
  ) {
    var RESTController = _CoreManager.default.getRESTController();

    var encodedAttrs = {};

    for (var _key in attrs) {
      encodedAttrs[_key] = (0, _encode.default)(attrs[_key]);
    }

    return RESTController.request('PUT', 'config', {
      params: encodedAttrs,
      masterKeyOnly: masterKeyOnlyFlags
    }, {
      useMasterKey: true
    }).then(function (response) {
      if (response && response.result) {
        return _promise.default.resolve();
      }

      var error = new _ParseError.default(_ParseError.default.INTERNAL_SERVER_ERROR, 'Error occured updating Config.');
      return _promise.default.reject(error);
    });
  }
};

_CoreManager.default.setConfigController(DefaultController);

var _default = ParseConfig;
exports.default = _default;