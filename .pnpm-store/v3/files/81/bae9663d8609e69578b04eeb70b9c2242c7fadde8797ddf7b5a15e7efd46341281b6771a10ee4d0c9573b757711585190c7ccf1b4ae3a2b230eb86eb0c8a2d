var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decode;

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var _ParsePolygon = _interopRequireDefault(require("./ParsePolygon"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseOp = require("./ParseOp");

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

function decode(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    var dup = [];
    value.forEach(function (v, i) {
      dup[i] = decode(v);
    });
    return dup;
  }

  if (typeof value.__op === 'string') {
    return (0, _ParseOp.opFromJSON)(value);
  }

  if (value.__type === 'Pointer' && value.className) {
    return _ParseObject.default.fromJSON(value);
  }

  if (value.__type === 'Object' && value.className) {
    return _ParseObject.default.fromJSON(value);
  }

  if (value.__type === 'Relation') {
    var relation = new _ParseRelation.default(null, null);
    relation.targetClassName = value.className;
    return relation;
  }

  if (value.__type === 'Date') {
    return new Date(value.iso);
  }

  if (value.__type === 'File') {
    return _ParseFile.default.fromJSON(value);
  }

  if (value.__type === 'GeoPoint') {
    return new _ParseGeoPoint.default({
      latitude: value.latitude,
      longitude: value.longitude
    });
  }

  if (value.__type === 'Polygon') {
    return new _ParsePolygon.default(value.coordinates);
  }

  var copy = {};

  for (var k in value) {
    copy[k] = decode(value[k]);
  }

  return copy;
}