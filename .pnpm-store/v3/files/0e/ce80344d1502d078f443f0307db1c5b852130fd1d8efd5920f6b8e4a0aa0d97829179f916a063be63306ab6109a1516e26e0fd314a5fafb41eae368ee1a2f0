"use strict";

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseFileEncode = require("./ParseFileEncode");

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys2(object);

  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);

    enumerableOnly && (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) {
      return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context4, _context5;

    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? _forEachInstanceProperty2(_context4 = ownKeys(Object(source), !0)).call(_context4, function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty2(_context5 = ownKeys(Object(source))).call(_context5, function (key) {
      _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

var ParseError = require('./ParseError').default;
/*:: type Base64 = { base64: string };*/

/*:: type Uri = { uri: string };*/

/*:: type FileData = Array<number> | Base64 | Blob | Uri;*/

/*:: export type FileSource =
  | {
      format: 'file',
      file: Blob,
      type: string,
    }
  | {
      format: 'base64',
      base64: string,
      type: string,
    }
  | {
      format: 'uri',
      uri: string,
      type: string,
    };*/


var dataUriRegexp = /^data:([a-zA-Z]+\/[-a-zA-Z0-9+.]+)(;charset=[a-zA-Z0-9\-/]*)?;base64,/;
/**
 * A Parse.File is a local representation of a file that is saved to the Parse
 * cloud.
 *
 * @alias Parse.File
 */

var ParseFile = /*#__PURE__*/function () {
  /**
   * @param name {String} The file's name. This will be prefixed by a unique
   *     value once the file has finished saving. The file name must begin with
   *     an alphanumeric character, and consist of alphanumeric characters,
   *     periods, spaces, underscores, or dashes.
   * @param data {Array} The data for the file, as either:
   *     1. an Array of byte value Numbers, or
   *     2. an Object like { base64: "..." } with a base64-encoded String.
   *     3. an Object like { uri: "..." } with a uri String.
   *     4. a File object selected with a file upload control. (3) only works
   *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
   *        For example:
   * <pre>
   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
   * if (fileUploadControl.files.length > 0) {
   *   var file = fileUploadControl.files[0];
   *   var name = "photo.jpg";
   *   var parseFile = new Parse.File(name, file);
   *   parseFile.save().then(function() {
   *     // The file has been saved to Parse.
   *   }, function(error) {
   *     // The file either could not be read, or could not be saved to Parse.
   *   });
   * }</pre>
   * @param type {String} Optional Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   * @param metadata {Object} Optional key value pairs to be stored with file object
   * @param tags {Object} Optional key value pairs to be stored with file object
   */
  function ParseFile(name
  /*: string*/
  , data
  /*:: ?: FileData*/
  , type
  /*:: ?: string*/
  , metadata
  /*:: ?: Object*/
  , tags
  /*:: ?: Object*/
  ) {
    (0, _classCallCheck2.default)(this, ParseFile);
    (0, _defineProperty2.default)(this, "_name", void 0);
    (0, _defineProperty2.default)(this, "_url", void 0);
    (0, _defineProperty2.default)(this, "_hash", void 0);
    (0, _defineProperty2.default)(this, "_ipfs", void 0);
    (0, _defineProperty2.default)(this, "_source", void 0);
    (0, _defineProperty2.default)(this, "_previousSave", void 0);
    (0, _defineProperty2.default)(this, "_data", void 0);
    (0, _defineProperty2.default)(this, "_requestTask", void 0);
    (0, _defineProperty2.default)(this, "_metadata", void 0);
    (0, _defineProperty2.default)(this, "_tags", void 0);
    var specifiedType = type || '';
    this._name = name;
    this._metadata = metadata || {};
    this._tags = tags || {};

    if (data !== undefined) {
      if ((0, _isArray.default)(data)) {
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
        var commaIndex = (0, _indexOf.default)(base64).call(base64, ',');

        if (commaIndex !== -1) {
          var matches = dataUriRegexp.exec((0, _slice.default)(base64).call(base64, 0, commaIndex + 1)); // if data URI with type and charset, there will be 4 matches.

          this._data = (0, _slice.default)(base64).call(base64, commaIndex + 1);
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
  /**
   * Return the data for the file, downloading it if not already present.
   * Data is present if initialized with Byte Array, Base64 or Saved with Uri.
   * Data is cleared if saved with File object selected with a file upload control
   *
   * @returns {Promise} Promise that is resolve with base64 data
   */


  (0, _createClass2.default)(ParseFile, [{
    key: "getData",
    value: function () {
      var _getData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this = this;

        var options, controller, result;
        return _regenerator.default.wrap(function (_context) {
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
                return controller.download(this._url, options);

              case 8:
                result = _context.sent;
                this._data = result.base64;
                return _context.abrupt("return", this._data);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function () {
        return _getData.apply(this, arguments);
      };
    }()
    /**
     * Gets the name of the file. Before save is called, this is the filename
     * given by the user. After save is called, that name gets prefixed with a
     * unique identifier.
     *
     * @returns {string}
     */

  }, {
    key: "name",
    value: function ()
    /*: string*/
    {
      return this._name;
    }
    /**
     * Gets the url of the file. It is only available after you save the file or
     * after you get the file from a Parse.Object.
     *
     * @param {object} options An object to specify url options
     * @returns {string}
     */

  }, {
    key: "url",
    value: function (options
    /*:: ?: { forceSecure?: boolean }*/
    )
    /*: ?string*/
    {
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
    /**
     * Gets the metadata of the file.
     *
     * @returns {object}
     */

  }, {
    key: "metadata",
    value: function ()
    /*: Object*/
    {
      return this._metadata;
    }
    /**
     * Gets the tags of the file.
     *
     * @returns {object}
     */

  }, {
    key: "tags",
    value: function ()
    /*: Object*/
    {
      return this._tags;
    }
    /**
     * Saves the file to the Parse cloud.
     *
     * @param {object} options
     *  * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     *   <li>sessionToken: A valid session token, used for making a request on
     *     behalf of a specific user.
     *   <li>progress: In Browser only, callback for upload progress. For example:
     * <pre>
     * let parseFile = new Parse.File(name, file);
     * parseFile.save({
     *   progress: (progressValue, loaded, total, { type }) => {
     *     if (type === "upload" && progressValue !== null) {
     *       // Update the UI using progressValue
     *     }
     *   }
     * });
     * </pre>
     * </ul>
     * @returns {Promise} Promise that is resolved when the save finishes.
     */

  }, {
    key: "save",
    value: function (options
    /*:: ?: FullOptions*/
    ) {
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
    value: function (options
    /*:: ?: FullOptions*/
    ) {
      return this.save(_objectSpread(_objectSpread({}, options), {}, {
        ipfs: true
      }));
    }
    /**
     * Aborts the request if it has already been sent.
     */

  }, {
    key: "cancel",
    value: function () {
      if (this._requestTask && typeof this._requestTask.abort === 'function') {
        this._requestTask.abort();
      }

      this._requestTask = null;
    }
    /**
     * Deletes the file from the Parse cloud.
     * In Cloud Code and Node only with Master Key.
     *
     * @param {object} options
     *  * Valid options are:<ul>
     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
     *     be used for this request.
     * <pre>
     * @returns {Promise} Promise that is resolved when the delete finishes.
     */

  }, {
    key: "destroy",
    value: function () {
      var _this3 = this;

      var options
      /*:: ?: FullOptions*/
      = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
    value: function ()
    /*: { name: ?string, url: ?string }*/
    {
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
    value: function (other
    /*: mixed*/
    )
    /*: boolean*/
    {
      if (this === other) {
        return true;
      } // Unsaved Files are never equal, since they will be saved to different URLs


      return other instanceof ParseFile && this.name() === other.name() && this.url() === other.url() && typeof this.url() !== 'undefined';
    }
    /**
     * Sets metadata to be saved with file object. Overwrites existing metadata
     *
     * @param {object} metadata Key value pairs to be stored with file object
     */

  }, {
    key: "setMetadata",
    value: function (metadata
    /*: any*/
    ) {
      var _this4 = this;

      if (metadata && (0, _typeof2.default)(metadata) === 'object') {
        var _context2;

        (0, _forEach.default)(_context2 = (0, _keys.default)(metadata)).call(_context2, function (key) {
          _this4.addMetadata(key, metadata[key]);
        });
      }
    }
    /**
     * Sets metadata to be saved with file object. Adds to existing metadata.
     *
     * @param {string} key key to store the metadata
     * @param {*} value metadata
     */

  }, {
    key: "addMetadata",
    value: function (key
    /*: string*/
    , value
    /*: any*/
    ) {
      if (typeof key === 'string') {
        this._metadata[key] = value;
      }
    }
    /**
     * Sets tags to be saved with file object. Overwrites existing tags
     *
     * @param {object} tags Key value pairs to be stored with file object
     */

  }, {
    key: "setTags",
    value: function (tags
    /*: any*/
    ) {
      var _this5 = this;

      if (tags && (0, _typeof2.default)(tags) === 'object') {
        var _context3;

        (0, _forEach.default)(_context3 = (0, _keys.default)(tags)).call(_context3, function (key) {
          _this5.addTag(key, tags[key]);
        });
      }
    }
    /**
     * Sets tags to be saved with file object. Adds to existing tags.
     *
     * @param {string} key key to store tags
     * @param {*} value tag
     */

  }, {
    key: "addTag",
    value: function (key
    /*: string*/
    , value
    /*: string*/
    ) {
      if (typeof key === 'string') {
        this._tags[key] = value;
      }
    }
  }], [{
    key: "fromJSON",
    value: function (obj)
    /*: ParseFile*/
    {
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
    value: function (bytes
    /*: Array<number>*/
    )
    /*: string*/
    {
      return (0, _ParseFileEncode.encodeBase64)(bytes);
    }
  }]);
  return ParseFile;
}();

_CoreManager.default.setFileController(require('./ParseFileController.default'));

var _default = ParseFile;
exports.default = _default;
exports.b64Digit = _ParseFileEncode.b64Digit;