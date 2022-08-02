"use strict";

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseFileEncode = require("./ParseFileEncode");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

let XHR = null;

if (typeof XMLHttpRequest !== 'undefined') {
  XHR = XMLHttpRequest;
}

const DefaultController = {
  saveFile: async function (name
  /*: string*/
  , source
  /*: FileSource*/
  , options
  /*:: ?: FullOptions*/
  ) {
    if (source.format !== 'file') {
      throw new Error('saveFile can only be used with File-type sources.');
    }

    const base64Data = await new Promise((res, rej) => {
      // eslint-disable-next-line no-undef
      const reader = new FileReader();

      reader.onload = () => res(reader.result);

      reader.onerror = error => rej(error);

      reader.readAsDataURL(source.file);
    }); // we only want the data after the comma
    // For example: "data:application/pdf;base64,JVBERi0xLjQKJ..." we would only want "JVBERi0xLjQKJ..."

    const [first, second] = base64Data.split(','); // in the event there is no 'data:application/pdf;base64,' at the beginning of the base64 string
    // use the entire string instead

    const data = second ? second : first;
    const newSource = {
      format: 'base64',
      base64: data,
      type: source.type || (source.file ? source.file.type : null)
    };
    return await DefaultController.saveBase64(name, newSource, options);
  },
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

    const data
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

    return _CoreManager.default.getRESTController().request('POST', `files/${name}`, data, options);
  },
  download: function (uri, options) {
    if (XHR) {
      return this.downloadAjax(uri, options);
    }

    return new Promise((resolve, reject) => {
      const client = uri.indexOf('https') === 0 ? require('https') : require('http');
      const req = client.get(uri, resp => {
        resp.setEncoding('base64');
        let base64 = '';
        resp.on('data', data => base64 += data);
        resp.on('end', () => {
          resolve({
            base64,
            contentType: resp.headers['content-type']
          });
        });
      });
      req.on('abort', () => {
        resolve({});
      });
      req.on('error', reject);
      options.requestTask(req);
    });
  },
  downloadAjax: function (uri, options) {
    return new Promise((resolve, reject) => {
      const xhr = new XHR();
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

        const bytes = new Uint8Array(this.response);
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
    const headers = {
      'X-Parse-Application-ID': _CoreManager.default.get('APPLICATION_ID')
    };

    if (options.useMasterKey) {
      headers['X-Parse-Master-Key'] = _CoreManager.default.get('MASTER_KEY');
    }

    let url = _CoreManager.default.get('SERVER_URL');

    if (url[url.length - 1] !== '/') {
      url += '/';
    }

    url += `files/${name}`;
    return _CoreManager.default.getRESTController().ajax('DELETE', url, '', headers).catch(response => {
      // TODO: return JSON object in server
      if (!response || response === 'SyntaxError: Unexpected end of JSON input') {
        return Promise.resolve();
      }

      return _CoreManager.default.getRESTController().handleError(response);
    });
  },

  _setXHR(xhr
  /*: any*/
  ) {
    XHR = xhr;
  },

  _getXHR() {
    return XHR;
  }

};
module.exports = DefaultController;