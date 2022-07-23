var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canBeSerialized;

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

function canBeSerialized(obj) {
  if (!(obj instanceof _ParseObject.default)) {
    return true;
  }

  var attributes = obj.attributes;

  for (var attr in attributes) {
    var val = attributes[attr];

    if (!canBeSerializedHelper(val)) {
      return false;
    }
  }

  return true;
}

function canBeSerializedHelper(value) {
  if (typeof value !== 'object') {
    return true;
  }

  if (value instanceof _ParseRelation.default) {
    return true;
  }

  if (value instanceof _ParseObject.default) {
    return !!value.id;
  }

  if (value instanceof _ParseFile.default) {
    if (value.url()) {
      return true;
    }

    return false;
  }

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      if (!canBeSerializedHelper(value[i])) {
        return false;
      }
    }

    return true;
  }

  for (var k in value) {
    if (!canBeSerializedHelper(value[k])) {
      return false;
    }
  }

  return true;
}