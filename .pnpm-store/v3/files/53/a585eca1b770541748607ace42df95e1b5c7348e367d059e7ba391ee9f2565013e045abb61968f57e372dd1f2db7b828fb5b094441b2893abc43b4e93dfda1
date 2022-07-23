var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayContainsObject;

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

function arrayContainsObject(array, object) {
  if (array.indexOf(object) > -1) {
    return true;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] instanceof _ParseObject.default && array[i].className === object.className && array[i]._getId() === object._getId()) {
      return true;
    }
  }

  return false;
}