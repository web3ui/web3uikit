var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseFileEncode = require("./ParseFileEncode");

var ParseError = require('./ParseError').default;

var dataUriRegexp = /^data:([a-zA-Z]+\/[-a-zA-Z0-9+.]+)(;charset=[a-zA-Z0-9\-/]*)?;base64,/;

var ParseFile = function () {
  function ParseFile(name, data, type, metadata, tags) {
    (0, _classCallCheck2.default)(this, ParseFile);
    var specifiedType = type || '';
    this._name = name;
    this._metadata = metadata || {};
    this._tags = tags || {};

    if (data !== undefined) {
      if (Array.isArray(data)) {
        this._data = ParseFile.encodeBase64(data);
        this._source = {
          format: 'base64',
          base64: this._data,
          type: specifiedType
        };
      } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
        this._source = {
          format: 'file',
          file: data,
          type: specifiedType
        };
      } else if (data && typeof data.uri === 'string' && data.uri !== undefined) {
        this._source = {
          format: 'uri',
          uri: data.uri,
          type: specifiedType
        };
      } else if (data && typeof data.base64 === 'string') {
        var base64 = data.base64;
        var commaIndex = base64.indexOf(',');

        if (commaIndex !== -1) {
          var matches = dataUriRegexp.exec(base64.slice(0, commaIndex + 1));
          this._data = base64.slice(commaIndex + 1);
          this._source = {
            format: 'base64',
            base64: this._data,
            type: matches[1]
          };
        } else {
          this._data = base64;
          this._source = {
            format: 'base64',
            base64: base64,
            type: specifiedType
          };
        }
      } else {
        throw new TypeError('Cannot create a Parse.File with that data.');
      }
    }
  }

  (0, _createClass2.default)(ParseFile, [{
    key: "getData",
    value: function () {
      var _this = this;

      var options, controller, result;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this._data) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", this._data);

            case 2:
              if (this._url) {
                _context.next = 4;
                break;
              }

              throw new Error('Cannot retrieve data for unsaved ParseFile.');

            case 4:
              options = {
                requestTask: function (task) {
                  return _this._requestTask = task;
                }
              };
              controller = _CoreManager.default.getFileController();
              _context.next = 8;
              return _regenerator.default.awrap(controller.download(this._url, options));

            case 8:
              result = _context.sent;
              this._data = result.base64;
              return _context.abrupt("return", this._data);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "name",
    value: function () {
      return this._name;
    }
  }, {
    key: "url",
    value: function (options) {
      options = options || {};

      if (!this._url) {
        return;
      }

      if (options.forceSecure) {
        return this._url.replace(/^http:\/\//i, 'https://');
      }

      return this._url;
    }
  }, {
    key: "ipfs",
    value: function () {
      return this._ipfs;
    }
  }, {
    key: "hash",
    value: function () {
      return this._hash;
    }
  }, {
    key: "metadata",
    value: function () {
      return this._metadata;
    }
  }, {
    key: "tags",
    value: function () {
      return this._tags;
    }
  }, {
    key: "save",
    value: function (options) {
      var _this2 = this;

      options = options || {};

      options.requestTask = function (task) {
        return _this2._requestTask = task;
      };

      options.metadata = this._metadata;
      options.tags = this._tags;

      var controller = _CoreManager.default.getFileController();

      if (!this._previousSave) {
        if (this._source.format === 'file') {
          this._previousSave = controller.saveFile(this._name, this._source, options).then(function (res) {
            _this2._name = res.name;
            _this2._url = res.url;
            _this2._hash = res.hash;
            _this2._ipfs = res.ipfs;
            _this2._data = null;
            _this2._requestTask = null;
            return _this2;
          });
        } else if (this._source.format === 'uri') {
          this._previousSave = controller.download(this._source.uri, options).then(function (result) {
            if (!(result && result.base64)) {
              return {};
            }

            var newSource = {
              format: 'base64',
              base64: result.base64,
              type: result.contentType
            };
            _this2._data = result.base64;
            _this2._requestTask = null;
            return controller.saveBase64(_this2._name, newSource, options);
          }).then(function (res) {
            _this2._name = res.name;
            _this2._url = res.url;
            _this2._hash = res.hash;
            _this2._ipfs = res.ipfs;
            _this2._requestTask = null;
            return _this2;
          });
        } else {
          this._previousSave = controller.saveBase64(this._name, this._source, options).then(function (res) {
            _this2._name = res.name;
            _this2._url = res.url;
            _this2._hash = res.hash;
            _this2._ipfs = res.ipfs;
            _this2._requestTask = null;
            return _this2;
          });
        }
      }

      if (this._previousSave) {
        return this._previousSave;
      }
    }
  }, {
    key: "saveIPFS",
    value: function (options) {
      return this.save((0, _extends2.default)({}, options, {
        ipfs: true
      }));
    }
  }, {
    key: "cancel",
    value: function () {
      if (this._requestTask && typeof this._requestTask.abort === 'function') {
        this._requestTask.abort();
      }

      this._requestTask = null;
    }
  }, {
    key: "destroy",
    value: function () {
      var _this3 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this._name) {
        throw new ParseError(ParseError.FILE_DELETE_UNNAMED_ERROR, 'Cannot delete an unnamed file.');
      }

      var destroyOptions = {
        useMasterKey: true
      };

      if (options.hasOwnProperty('useMasterKey')) {
        destroyOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getFileController();

      return controller.deleteFile(this._name, destroyOptions).then(function () {
        _this3._data = null;
        _this3._requestTask = null;
        return _this3;
      });
    }
  }, {
    key: "toJSON",
    value: function () {
      return {
        __type: 'File',
        name: this._name,
        url: this._url,
        ipfs: this._ipfs,
        hash: this._hash
      };
    }
  }, {
    key: "equals",
    value: function (other) {
      if (this === other) {
        return true;
      }

      return other instanceof ParseFile && this.name() === other.name() && this.url() === other.url() && typeof this.url() !== 'undefined';
    }
  }, {
    key: "setMetadata",
    value: function (metadata) {
      var _this4 = this;

      if (metadata && typeof metadata === 'object') {
        Object.keys(metadata).forEach(function (key) {
          _this4.addMetadata(key, metadata[key]);
        });
      }
    }
  }, {
    key: "addMetadata",
    value: function (key, value) {
      if (typeof key === 'string') {
        this._metadata[key] = value;
      }
    }
  }, {
    key: "setTags",
    value: function (tags) {
      var _this5 = this;

      if (tags && typeof tags === 'object') {
        Object.keys(tags).forEach(function (key) {
          _this5.addTag(key, tags[key]);
        });
      }
    }
  }, {
    key: "addTag",
    value: function (key, value) {
      if (typeof key === 'string') {
        this._tags[key] = value;
      }
    }
  }], [{
    key: "fromJSON",
    value: function (obj) {
      if (obj.__type !== 'File') {
        throw new TypeError('JSON object does not represent a ParseFile');
      }

      var file = new ParseFile(obj.name);
      file._url = obj.url;
      file._hash = obj.hash;
      file._ipfs = obj.ipfs;
      return file;
    }
  }, {
    key: "encodeBase64",
    value: function (bytes) {
      return (0, _ParseFileEncode.encodeBase64)(bytes);
    }
  }]);
  return ParseFile;
}();

_CoreManager.default.setFileController(require('./ParseFileController.default'));

var _default = ParseFile;
exports.default = _default;
exports.b64Digit = _ParseFileEncode.b64Digit;