var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _escape2 = _interopRequireDefault(require("./escape"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _Storage = _interopRequireDefault(require("./Storage"));

var ParseConfig = function () {
  function ParseConfig() {
    (0, _classCallCheck2.default)(this, ParseConfig);
    this.attributes = {};
    this._escapedAttributes = {};
  }

  (0, _createClass2.default)(ParseConfig, [{
    key: "get",
    value: function (attr) {
      return this.attributes[attr];
    }
  }, {
    key: "escape",
    value: function (attr) {
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
  }], [{
    key: "current",
    value: function () {
      var controller = _CoreManager.default.getConfigController();

      return controller.current();
    }
  }, {
    key: "get",
    value: function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var controller = _CoreManager.default.getConfigController();

      return controller.get(options);
    }
  }, {
    key: "save",
    value: function (attrs, masterKeyOnlyFlags) {
      var controller = _CoreManager.default.getConfigController();

      return controller.save(attrs, masterKeyOnlyFlags).then(function () {
        return controller.get({
          useMasterKey: true
        });
      }, function (error) {
        return Promise.reject(error);
      });
    }
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

    if (json && typeof json === 'object') {
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
    }

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
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'config', {}, options).then(function (response) {
      if (!response || !response.params) {
        var error = new _ParseError.default(_ParseError.default.INVALID_JSON, 'Config JSON response invalid.');
        return Promise.reject(error);
      }

      var config = new ParseConfig();
      config.attributes = {};

      for (var attr in response.params) {
        config.attributes[attr] = (0, _decode.default)(response.params[attr]);
      }

      currentConfig = config;
      return _Storage.default.setItemAsync(_Storage.default.generatePath(CURRENT_CONFIG_KEY), JSON.stringify(response.params)).then(function () {
        return config;
      });
    });
  },
  save: function (attrs, masterKeyOnlyFlags) {
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
        return Promise.resolve();
      }

      var error = new _ParseError.default(_ParseError.default.INTERNAL_SERVER_ERROR, 'Error occured updating Config.');
      return Promise.reject(error);
    });
  }
};

_CoreManager.default.setConfigController(DefaultController);

var _default = ParseConfig;
exports.default = _default;