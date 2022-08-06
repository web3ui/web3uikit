"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _escape = _interopRequireDefault(require("./escape"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _Storage = _interopRequireDefault(require("./Storage"));

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
/**
 * Parse.Config is a local representation of configuration data that
 * can be set from the Parse dashboard.
 *
 * @alias Parse.Config
 */


class ParseConfig {
  constructor() {
    _defineProperty(this, "attributes", void 0);

    _defineProperty(this, "_escapedAttributes", void 0);

    this.attributes = {};
    this._escapedAttributes = {};
  }
  /**
   * Gets the value of an attribute.
   *
   * @param {string} attr The name of an attribute.
   * @returns {*}
   */


  get(attr
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


  escape(attr
  /*: string*/
  )
  /*: string*/
  {
    const html = this._escapedAttributes[attr];

    if (html) {
      return html;
    }

    const val = this.attributes[attr];
    let escaped = '';

    if (val != null) {
      escaped = (0, _escape.default)(val.toString());
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


  static current() {
    const controller = _CoreManager.default.getConfigController();

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


  static get(options
  /*: RequestOptions*/
  = {}) {
    const controller = _CoreManager.default.getConfigController();

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


  static save(attrs
  /*: { [key: string]: any }*/
  , masterKeyOnlyFlags
  /*: { [key: string]: any }*/
  ) {
    const controller = _CoreManager.default.getConfigController(); // To avoid a mismatch with the local and the cloud config we get a new version


    return controller.save(attrs, masterKeyOnlyFlags).then(() => {
      return controller.get({
        useMasterKey: true
      });
    }, error => {
      return Promise.reject(error);
    });
  }
  /**
   * Used for testing
   *
   * @private
   */


  static _clearCache() {
    currentConfig = null;
  }

}

let currentConfig = null;
const CURRENT_CONFIG_KEY = 'currentConfig';

function decodePayload(data) {
  try {
    const json = JSON.parse(data);

    if (json && typeof json === 'object') {
      return (0, _decode.default)(json);
    }
  } catch (e) {
    return null;
  }
}

const DefaultController = {
  current() {
    if (currentConfig) {
      return currentConfig;
    }

    const config = new ParseConfig();

    const storagePath = _Storage.default.generatePath(CURRENT_CONFIG_KEY);

    if (!_Storage.default.async()) {
      const configData = _Storage.default.getItem(storagePath);

      if (configData) {
        const attributes = decodePayload(configData);

        if (attributes) {
          config.attributes = attributes;
          currentConfig = config;
        }
      }

      return config;
    } // Return a promise for async storage controllers


    return _Storage.default.getItemAsync(storagePath).then(configData => {
      if (configData) {
        const attributes = decodePayload(configData);

        if (attributes) {
          config.attributes = attributes;
          currentConfig = config;
        }
      }

      return config;
    });
  },

  get(options
  /*: RequestOptions*/
  = {}) {
    const RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'config', {}, options).then(response => {
      if (!response || !response.params) {
        const error = new _ParseError.default(_ParseError.default.INVALID_JSON, 'Config JSON response invalid.');
        return Promise.reject(error);
      }

      const config = new ParseConfig();
      config.attributes = {};

      for (const attr in response.params) {
        config.attributes[attr] = (0, _decode.default)(response.params[attr]);
      }

      currentConfig = config;
      return _Storage.default.setItemAsync(_Storage.default.generatePath(CURRENT_CONFIG_KEY), JSON.stringify(response.params)).then(() => {
        return config;
      });
    });
  },

  save(attrs
  /*: { [key: string]: any }*/
  , masterKeyOnlyFlags
  /*: { [key: string]: any }*/
  ) {
    const RESTController = _CoreManager.default.getRESTController();

    const encodedAttrs = {};

    for (const key in attrs) {
      encodedAttrs[key] = (0, _encode.default)(attrs[key]);
    }

    return RESTController.request('PUT', 'config', {
      params: encodedAttrs,
      masterKeyOnly: masterKeyOnlyFlags
    }, {
      useMasterKey: true
    }).then(response => {
      if (response && response.result) {
        return Promise.resolve();
      }

      const error = new _ParseError.default(_ParseError.default.INTERNAL_SERVER_ERROR, 'Error occured updating Config.');
      return Promise.reject(error);
    });
  }

};

_CoreManager.default.setConfigController(DefaultController);

var _default = ParseConfig;
exports.default = _default;