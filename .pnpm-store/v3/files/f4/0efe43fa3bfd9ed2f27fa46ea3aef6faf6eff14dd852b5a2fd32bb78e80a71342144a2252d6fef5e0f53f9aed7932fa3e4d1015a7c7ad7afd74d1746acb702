var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unsavedChildren;

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

function unsavedChildren(obj, allowDeepUnsaved) {
  var encountered = {
    objects: {},
    files: []
  };

  var identifier = obj.className + ":" + obj._getId();

  encountered.objects[identifier] = obj.dirty() ? obj : true;
  var attributes = obj.attributes;

  for (var attr in attributes) {
    if (typeof attributes[attr] === 'object') {
      traverse(attributes[attr], encountered, false, !!allowDeepUnsaved);
    }
  }

  var unsaved = [];

  for (var id in encountered.objects) {
    if (id !== identifier && encountered.objects[id] !== true) {
      unsaved.push(encountered.objects[id]);
    }
  }

  return unsaved.concat(encountered.files);
}

function traverse(obj, encountered, shouldThrow, allowDeepUnsaved) {
  if (obj instanceof _ParseObject.default) {
    if (!obj.id && shouldThrow) {
      throw new Error('Cannot create a pointer to an unsaved Object.');
    }

    var _identifier = obj.className + ":" + obj._getId();

    if (!encountered.objects[_identifier]) {
      encountered.objects[_identifier] = obj.dirty() ? obj : true;
      var attributes = obj.attributes;

      for (var attr in attributes) {
        if (typeof attributes[attr] === 'object') {
          traverse(attributes[attr], encountered, !allowDeepUnsaved, allowDeepUnsaved);
        }
      }
    }

    return;
  }

  if (obj instanceof _ParseFile.default) {
    if (!obj.url() && encountered.files.indexOf(obj) < 0) {
      encountered.files.push(obj);
    }

    return;
  }

  if (obj instanceof _ParseRelation.default) {
    return;
  }

  if (Array.isArray(obj)) {
    obj.forEach(function (el) {
      if (typeof el === 'object') {
        traverse(el, encountered, shouldThrow, allowDeepUnsaved);
      }
    });
  }

  for (var k in obj) {
    if (typeof obj[k] === 'object') {
      traverse(obj[k], encountered, shouldThrow, allowDeepUnsaved);
    }
  }
}