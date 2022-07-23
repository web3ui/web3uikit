var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unique;

var _arrayContainsObject = _interopRequireDefault(require("./arrayContainsObject"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

function unique(arr) {
  var uniques = [];
  arr.forEach(function (value) {
    if (value instanceof _ParseObject.default) {
      if (!(0, _arrayContainsObject.default)(uniques, value)) {
        uniques.push(value);
      }
    } else {
      if (uniques.indexOf(value) < 0) {
        uniques.push(value);
      }
    }
  });
  return uniques;
}