"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unsavedChildren;

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
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
  const encountered = {
    objects: {},
    files: []
  };
  const identifier = `${obj.className}:${obj._getId()}`;
  encountered.objects[identifier] = obj.dirty() ? obj : true;
  const {
    attributes
  } = obj;

  for (const attr in attributes) {
    if (typeof attributes[attr] === 'object') {
      traverse(attributes[attr], encountered, false, !!allowDeepUnsaved);
    }
  }

  const unsaved = [];

  for (const id in encountered.objects) {
    if (id !== identifier && encountered.objects[id] !== true) {
      unsaved.push(encountered.objects[id]);
    }
  }

  return unsaved.concat(encountered.files);
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
    if (!obj.id && shouldThrow) {
      throw new Error('Cannot create a pointer to an unsaved Object.');
    }

    const identifier = `${obj.className}:${obj._getId()}`;

    if (!encountered.objects[identifier]) {
      encountered.objects[identifier] = obj.dirty() ? obj : true;
      const {
        attributes
      } = obj;

      for (const attr in attributes) {
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
    obj.forEach(el => {
      if (typeof el === 'object') {
        traverse(el, encountered, shouldThrow, allowDeepUnsaved);
      }
    });
  }

  for (const k in obj) {
    if (typeof obj[k] === 'object') {
      traverse(obj[k], encountered, shouldThrow, allowDeepUnsaved);
    }
  }
}