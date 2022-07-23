var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseFileEncode = require("./ParseFileEncode");

var XHR = null;

if (typeof XMLHttpRequest !== 'undefined') {
  XHR = XMLHttpRequest;
}

var DefaultController = {
  saveFile: function (name, source, options) {
    var base64Data, _base64Data$split, _base64Data$split2, first, second, data, newSource;

    return _regenerator.default.async(function (_context) {
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
            return _regenerator.default.awrap(new Promise(function (res, rej) {
              var reader = new FileReader();

              reader.onload = function () {
                return res(reader.result);
              };

              reader.onerror = function (error) {
                return rej(error);
              };

              reader.readAsDataURL(source.file);
            }));

          case 4:
            base64Data = _context.sent;
            _base64Data$split = base64Data.split(','), _base64Data$split2 = (0, _slicedToArray2.default)(_base64Data$split, 2), first = _base64Data$split2[0], second = _base64Data$split2[1];
            data = second ? second : first;
            newSource = {
              format: 'base64',
              base64: data,
              type: source.type || (source.file ? source.file.type : null)
            };
            _context.next = 10;
            return _regenerator.default.awrap(DefaultController.saveBase64(name, newSource, options));

          case 10:
            return _context.abrupt("return", _context.sent);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  },
  saveBase64: function (name, source, options) {
    if (source.format !== 'base64') {
      throw new Error('saveBase64 can only be used with Base64-type sources.');
    }

    var data = {
      base64: source.base64,
      fileData: {
        ipfs: options.ipfs,
        metadata: (0, _extends2.default)({}, options.metadata),
        tags: (0, _extends2.default)({}, options.tags)
      }
    };
    delete options.metadata;
    delete options.tags;

    if (source.type) {
      data._ContentType = source.type;
    }

    return _CoreManager.default.getRESTController().request('POST', "files/" + name, data, options);
  },
  download: function (uri, options) {
    if (XHR) {
      return this.downloadAjax(uri, options);
    }

    return Promise.reject('Cannot make a request: No definition of XMLHttpRequest was found.');
  },
  downloadAjax: function (uri, options) {
    return new Promise(function (resolve, reject) {
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
  deleteFile: function (name, options) {
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

    url += "files/" + name;
    return _CoreManager.default.getRESTController().ajax('DELETE', url, '', headers).catch(function (response) {
      if (!response || response === 'SyntaxError: Unexpected end of JSON input') {
        return Promise.resolve();
      }

      return _CoreManager.default.getRESTController().handleError(response);
    });
  },
  _setXHR: function (xhr) {
    XHR = xhr;
  },
  _getXHR: function () {
    return XHR;
  }
};
module.exports = DefaultController;