"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = unsavedChildren;

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

/**
 * Return an array of unsaved children, which are either Parse Objects or Files.
 * If it encounters any dirty Objects without Ids, it will throw an exception.
 *
 * @param {Parse.Object} obj
 * @param {boolean} allowDeepUnsaved
 * @returns {Array}
 */


function unsavedChildren(obj
/*: ParseObject*/
, allowDeepUnsaved
/*:: ?: boolean*/
)
/*: Array<ParseFile | ParseObject>*/
{
  var _context;

  var encountered = {
    objects: {},
    files: []
  };
  var identifier = (0, _concat.default)(_context = "".concat(obj.className, ":")).call(_context, obj._getId());
  encountered.objects[identifier] = obj.dirty() ? obj : true;
  var attributes = obj.attributes;

  for (var attr in attributes) {
    if ((0, _typeof2.default)(attributes[attr]) === 'object') {
      traverse(attributes[attr], encountered, false, !!allowDeepUnsaved);
    }
  }

  var unsaved = [];

  for (var id in encountered.objects) {
    if (id !== identifier && encountered.objects[id] !== true) {
      unsaved.push(encountered.objects[id]);
    }
  }

  return (0, _concat.default)(unsaved).call(unsaved, encountered.files);
}

function traverse(obj
/*: ParseObject*/
, encountered
/*: EncounterMap*/
, shouldThrow
/*: boolean*/
, allowDeepUnsaved
/*: boolean*/
) {
  if (obj instanceof _ParseObject.default) {
    var _context2;

    if (!obj.id && shouldThrow) {
      throw new Error('Cannot create a pointer to an unsaved Object.');
    }

    var _identifier = (0, _concat.default)(_context2 = "".concat(obj.className, ":")).call(_context2, obj._getId());

    if (!encountered.objects[_identifier]) {
      encountered.objects[_identifier] = obj.dirty() ? obj : true;
      var attributes = obj.attributes;

      for (var attr in attributes) {
        if ((0, _typeof2.default)(attributes[attr]) === 'object') {
          traverse(attributes[attr], encountered, !allowDeepUnsaved, allowDeepUnsaved);
        }
      }
    }

    return;
  }

  if (obj instanceof _ParseFile.default) {
    var _context3;

    if (!obj.url() && (0, _indexOf.default)(_context3 = encountered.files).call(_context3, obj) < 0) {
      encountered.files.push(obj);
    }

    return;
  }

  if (obj instanceof _ParseRelation.default) {
    return;
  }

  if ((0, _isArray.default)(obj)) {
    (0, _forEach.default)(obj).call(obj, function (el) {
      if ((0, _typeof2.default)(el) === 'object') {
        traverse(el, encountered, shouldThrow, allowDeepUnsaved);
      }
    });
  }

  for (var k in obj) {
    if ((0, _typeof2.default)(obj[k]) === 'object') {
      traverse(obj[k], encountered, shouldThrow, allowDeepUnsaved);
    }
  }
}