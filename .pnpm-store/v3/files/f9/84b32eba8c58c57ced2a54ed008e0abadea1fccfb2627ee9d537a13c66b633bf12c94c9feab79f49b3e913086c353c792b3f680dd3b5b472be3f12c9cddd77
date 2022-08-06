"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

const ParseError = require('./ParseError').default;
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


const dataUriRegexp = /^data:([a-zA-Z]+\/[-a-zA-Z0-9+.]+)(;charset=[a-zA-Z0-9\-/]*)?;base64,/;
/**
 * A Parse.File is a local representation of a file that is saved to the Parse
 * cloud.
 *
 * @alias Parse.File
 */

class ParseFile {
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
  constructor(name
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
    _defineProperty(this, "_name", void 0);

    _defineProperty(this, "_url", void 0);

    _defineProperty(this, "_hash", void 0);

    _defineProperty(this, "_ipfs", void 0);

    _defineProperty(this, "_source", void 0);

    _defineProperty(this, "_previousSave", void 0);

    _defineProperty(this, "_data", void 0);

    _defineProperty(this, "_requestTask", void 0);

    _defineProperty(this, "_metadata", void 0);

    _defineProperty(this, "_tags", void 0);

    const specifiedType = type || '';
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
        const {
          base64
        } = data;
        const commaIndex = base64.indexOf(',');

        if (commaIndex !== -1) {
          const matches = dataUriRegexp.exec(base64.slice(0, commaIndex + 1)); // if data URI with type and charset, there will be 4 matches.

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
  /**
   * Return the data for the file, downloading it if not already present.
   * Data is present if initialized with Byte Array, Base64 or Saved with Uri.
   * Data is cleared if saved with File object selected with a file upload control
   *
   * @returns {Promise} Promise that is resolve with base64 data
   */


  async getData()
  /*: Promise<String>*/
  {
    if (this._data) {
      return this._data;
    }

    if (!this._url) {
      throw new Error('Cannot retrieve data for unsaved ParseFile.');
    }

    const controller = _CoreManager.default.getFileController();

    const result = await controller.download(this._url, {
      requestTask: task => this._requestTask = task
    });
    this._data = result.base64;
    return this._data;
  }
  /**
   * Gets the name of the file. Before save is called, this is the filename
   * given by the user. After save is called, that name gets prefixed with a
   * unique identifier.
   *
   * @returns {string}
   */


  name()
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


  url(options
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

  ipfs() {
    return this._ipfs;
  }

  hash() {
    return this._hash;
  }
  /**
   * Gets the metadata of the file.
   *
   * @returns {object}
   */


  metadata()
  /*: Object*/
  {
    return this._metadata;
  }
  /**
   * Gets the tags of the file.
   *
   * @returns {object}
   */


  tags()
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


  save(options
  /*:: ?: FullOptions*/
  ) {
    options = options || {};

    options.requestTask = task => this._requestTask = task;

    options.metadata = this._metadata;
    options.tags = this._tags;

    const controller = _CoreManager.default.getFileController();

    if (!this._previousSave) {
      if (this._source.format === 'file') {
        this._previousSave = controller.saveFile(this._name, this._source, options).then(res => {
          this._name = res.name;
          this._url = res.url;
          this._hash = res.hash;
          this._ipfs = res.ipfs;
          this._data = null;
          this._requestTask = null;
          return this;
        });
      } else if (this._source.format === 'uri') {
        this._previousSave = controller.download(this._source.uri, options).then(result => {
          if (!(result && result.base64)) {
            return {};
          }

          const newSource = {
            format: 'base64',
            base64: result.base64,
            type: result.contentType
          };
          this._data = result.base64;
          this._requestTask = null;
          return controller.saveBase64(this._name, newSource, options);
        }).then(res => {
          this._name = res.name;
          this._url = res.url;
          this._hash = res.hash;
          this._ipfs = res.ipfs;
          this._requestTask = null;
          return this;
        });
      } else {
        this._previousSave = controller.saveBase64(this._name, this._source, options).then(res => {
          this._name = res.name;
          this._url = res.url;
          this._hash = res.hash;
          this._ipfs = res.ipfs;
          this._requestTask = null;
          return this;
        });
      }
    }

    if (this._previousSave) {
      return this._previousSave;
    }
  }

  saveIPFS(options
  /*:: ?: FullOptions*/
  ) {
    return this.save(_objectSpread(_objectSpread({}, options), {}, {
      ipfs: true
    }));
  }
  /**
   * Aborts the request if it has already been sent.
   */


  cancel() {
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


  destroy(options
  /*:: ?: FullOptions*/
  = {}) {
    if (!this._name) {
      throw new ParseError(ParseError.FILE_DELETE_UNNAMED_ERROR, 'Cannot delete an unnamed file.');
    }

    const destroyOptions = {
      useMasterKey: true
    };

    if (options.hasOwnProperty('useMasterKey')) {
      destroyOptions.useMasterKey = options.useMasterKey;
    }

    const controller = _CoreManager.default.getFileController();

    return controller.deleteFile(this._name, destroyOptions).then(() => {
      this._data = null;
      this._requestTask = null;
      return this;
    });
  }

  toJSON()
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

  equals(other
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


  setMetadata(metadata
  /*: any*/
  ) {
    if (metadata && typeof metadata === 'object') {
      Object.keys(metadata).forEach(key => {
        this.addMetadata(key, metadata[key]);
      });
    }
  }
  /**
   * Sets metadata to be saved with file object. Adds to existing metadata.
   *
   * @param {string} key key to store the metadata
   * @param {*} value metadata
   */


  addMetadata(key
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


  setTags(tags
  /*: any*/
  ) {
    if (tags && typeof tags === 'object') {
      Object.keys(tags).forEach(key => {
        this.addTag(key, tags[key]);
      });
    }
  }
  /**
   * Sets tags to be saved with file object. Adds to existing tags.
   *
   * @param {string} key key to store tags
   * @param {*} value tag
   */


  addTag(key
  /*: string*/
  , value
  /*: string*/
  ) {
    if (typeof key === 'string') {
      this._tags[key] = value;
    }
  }

  static fromJSON(obj)
  /*: ParseFile*/
  {
    if (obj.__type !== 'File') {
      throw new TypeError('JSON object does not represent a ParseFile');
    }

    const file = new ParseFile(obj.name);
    file._url = obj.url;
    file._hash = obj.hash;
    file._ipfs = obj.ipfs;
    return file;
  }

  static encodeBase64(bytes
  /*: Array<number>*/
  )
  /*: string*/
  {
    return (0, _ParseFileEncode.encodeBase64)(bytes);
  }

}

_CoreManager.default.setFileController(require('./ParseFileController.default'));

var _default = ParseFile;
exports.default = _default;
exports.b64Digit = _ParseFileEncode.b64Digit;