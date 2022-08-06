var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var _ParsePolygon = _interopRequireDefault(require("./ParsePolygon"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseOp = require("./ParseOp");

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

function encode(value, disallowObjects, forcePointers, seen, offline) {
  if (value instanceof _ParseObject.default) {
    if (disallowObjects) {
      throw new Error('Parse Objects not allowed here');
    }

    var seenEntry = value.id ? value.className + ":" + value.id : value;

    if (forcePointers || !seen || seen.indexOf(seenEntry) > -1 || value.dirty() || Object.keys(value._getServerData()).length < 1) {
      if (offline && value._getId().startsWith('local')) {
        return value.toOfflinePointer();
      }

      return value.toPointer();
    }

    seen = seen.concat(seenEntry);
    return value._toFullJSON(seen, offline);
  }

  if (value instanceof _ParseOp.Op || value instanceof _ParseACL.default || value instanceof _ParseGeoPoint.default || value instanceof _ParsePolygon.default || value instanceof _ParseRelation.default) {
    return value.toJSON();
  }

  if (value instanceof _ParseFile.default) {
    if (!value.url()) {
      throw new Error('Tried to encode an unsaved file.');
    }

    return value.toJSON();
  }

  if (Object.prototype.toString.call(value) === '[object Date]') {
    if (isNaN(value)) {
      throw new Error('Tried to encode an invalid date.');
    }

    return {
      __type: 'Date',
      iso: value.toJSON()
    };
  }

  if (Object.prototype.toString.call(value) === '[object RegExp]' && typeof value.source === 'string') {
    return value.source;
  }

  if (Array.isArray(value)) {
    return value.map(function (v) {
      return encode(v, disallowObjects, forcePointers, seen, offline);
    });
  }

  if (value && typeof value === 'object') {
    var output = {};

    for (var k in value) {
      output[k] = encode(value[k], disallowObjects, forcePointers, seen, offline);
    }

    return output;
  }

  return value;
}

function _default(value, disallowObjects, forcePointers, seen, offline) {
  return encode(value, !!disallowObjects, !!forcePointers, seen || [], offline);
}