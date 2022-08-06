"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.getSize = getSize;
exports.removeAll = removeAll;
exports.runAll = runAll;

var _detectNode = _interopRequireDefault(require("detect-node"));

var _browser = _interopRequireDefault(require("./browser.js"));

var _node = _interopRequireDefault(require("./node.js"));

var USE_METHOD = _detectNode["default"] ? _node["default"] : _browser["default"];
var LISTENERS = new Set();
var startedListening = false;

function startListening() {
  if (startedListening) return;
  startedListening = true;
  USE_METHOD.add(runAll);
}

function add(fn) {
  startListening();
  if (typeof fn !== 'function') throw new Error('Listener is no function');
  LISTENERS.add(fn);
  var addReturn = {
    remove: function remove() {
      return LISTENERS["delete"](fn);
    },
    run: function run() {
      LISTENERS["delete"](fn);
      return fn();
    }
  };
  return addReturn;
}

function runAll() {
  var promises = [];
  LISTENERS.forEach(function (fn) {
    promises.push(fn());
    LISTENERS["delete"](fn);
  });
  return Promise.all(promises);
}

function removeAll() {
  LISTENERS.clear();
}

function getSize() {
  return LISTENERS.size;
}