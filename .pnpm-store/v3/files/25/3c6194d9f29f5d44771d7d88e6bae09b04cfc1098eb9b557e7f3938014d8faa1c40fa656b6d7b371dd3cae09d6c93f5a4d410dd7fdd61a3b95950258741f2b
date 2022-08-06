"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseFileEncode = require("./ParseFileEncode");

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);

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
    var _context2, _context3;

    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? _forEachInstanceProperty(_context2 = ownKeys(Object(source), !0)).call(_context2, function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) {
      _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

var XHR = null;

if (typeof XMLHttpRequest !== 'undefined') {
  XHR = XMLHttpRequest;
}

XHR = require('./Xhr.weapp');
var DefaultController = {
  saveFile: function () {
    var _saveFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(name
    /*: string*/
    , source
    /*: FileSource*/
    , options
    /*:: ?: FullOptions*/
    ) {
      var base64Data, _base64Data$split, _base64Data$split2, first, second, data, newSource;

      return _regenerator.default.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(source.format !== 'file')) {
                _context.next = 2;
                break;
              }

              throw new Error('saveFile can only be used with File-type sources.');

            case 2:
              _context.next = 4;
              return new _promise.default(function (res, rej) {
                // eslint-disable-next-line no-undef
                var reader = new FileReader();

                reader.onload = function () {
                  return res(reader.result);
                };

                reader.onerror = function (error) {
                  return rej(error);
                };

                reader.readAsDataURL(source.file);
              });

            case 4:
              base64Data = _context.sent; // we only want the data after the comma
              // For example: "data:application/pdf;base64,JVBERi0xLjQKJ..." we would only want "JVBERi0xLjQKJ..."

              _base64Data$split = base64Data.split(','), _base64Data$split2 = (0, _slicedToArray2.default)(_base64Data$split, 2), first = _base64Data$split2[0], second = _base64Data$split2[1]; // in the event there is no 'data:application/pdf;base64,' at the beginning of the base64 string
              // use the entire string instead

              data = second ? second : first;
              newSource = {
                format: 'base64',
                base64: data,
                type: source.type || (source.file ? source.file.type : null)
              };
              _context.next = 10;
              return DefaultController.saveBase64(name, newSource, options);

            case 10:
              return _context.abrupt("return", _context.sent);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function () {
      return _saveFile.apply(this, arguments);
    };
  }(),
  saveBase64: function (name
  /*: string*/
  , source
  /*: FileSource*/
  , options
  /*:: ?: FullOptions*/
  ) {
    if (source.format !== 'base64') {
      throw new Error('saveBase64 can only be used with Base64-type sources.');
    }

    var data
    /*: { base64: any, _ContentType?: any, fileData: Object }*/
    = {
      base64: source.base64,
      fileData: {
        ipfs: options.ipfs,
        metadata: _objectSpread({}, options.metadata),
        tags: _objectSpread({}, options.tags)
      }
    };
    delete options.metadata;
    delete options.tags;

    if (source.type) {
      data._ContentType = source.type;
    }

    var path = "files/".concat(name);
    return _CoreManager.default.getRESTController().request('POST', path, data, options);
  },
  download: function (uri, options) {
    if (XHR) {
      return this.downloadAjax(uri, options);
    }

    return _promise.default.reject('Cannot make a request: No definition of XMLHttpRequest was found.');
  },
  downloadAjax: function (uri, options) {
    return new _promise.default(function (resolve, reject) {
      var xhr = new XHR();
      xhr.open('GET', uri, true);
      xhr.responseType = 'arraybuffer';

      xhr.onerror = function (e) {
        reject(e);
      };

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== xhr.DONE) {
          return;
        }

        if (!this.response) {
          return resolve({});
        }

        var bytes = new Uint8Array(this.response);
        resolve({
          base64: (0, _ParseFileEncode.encodeBase64)(bytes),
          contentType: xhr.getResponseHeader('content-type')
        });
      };

      options.requestTask(xhr);
      xhr.send();
    });
  },
  deleteFile: function (name
  /*: string*/
  , options
  /*:: ?: FullOptions*/
  ) {
    var headers = {
      'X-Parse-Application-ID': _CoreManager.default.get('APPLICATION_ID')
    };

    if (options.useMasterKey) {
      headers['X-Parse-Master-Key'] = _CoreManager.default.get('MASTER_KEY');
    }

    var url = _CoreManager.default.get('SERVER_URL');

    if (url[url.length - 1] !== '/') {
      url += '/';
    }

    url += "files/".concat(name);
    return _CoreManager.default.getRESTController().ajax('DELETE', url, '', headers).catch(function (response) {
      // TODO: return JSON object in server
      if (!response || response === 'SyntaxError: Unexpected end of JSON input') {
        return _promise.default.resolve();
      }

      return _CoreManager.default.getRESTController().handleError(response);
    });
  },
  _setXHR: function (xhr
  /*: any*/
  ) {
    XHR = xhr;
  },
  _getXHR: function () {
    return XHR;
  }
};
module.exports = DefaultController;