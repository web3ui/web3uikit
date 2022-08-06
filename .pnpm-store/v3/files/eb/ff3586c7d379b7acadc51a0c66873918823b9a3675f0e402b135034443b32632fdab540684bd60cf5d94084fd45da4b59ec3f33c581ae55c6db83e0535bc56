"use strict";

var _typeof = require("@babel/runtime-corejs3/helpers/typeof");

var _WeakMap2 = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.clearAllState = clearAllState;
exports.commitServerChanges = commitServerChanges;
exports.duplicateState = duplicateState;
exports.enqueueTask = enqueueTask;
exports.estimateAttribute = estimateAttribute;
exports.estimateAttributes = estimateAttributes;
exports.getObjectCache = getObjectCache;
exports.getPendingOps = getPendingOps;
exports.getServerData = getServerData;
exports.getState = getState;
exports.initializeState = initializeState;
exports.mergeFirstPendingState = mergeFirstPendingState;
exports.popPendingState = popPendingState;
exports.pushPendingState = pushPendingState;
exports.removeState = removeState;
exports.setPendingOp = setPendingOp;
exports.setServerData = setServerData;

var _weakMap = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-map"));

var ObjectStateMutations = _interopRequireWildcard(require("./ObjectStateMutations"));

var _TaskQueue = _interopRequireDefault(require("./TaskQueue"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof _WeakMap2 !== "function") return null;
  var cacheBabelInterop = new _WeakMap2();
  var cacheNodeInterop = new _WeakMap2();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
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


var objectState = new _weakMap.default();

function getState(obj
/*: ParseObject*/
)
/*: ?State*/
{
  var classData = objectState.get(obj);
  return classData || null;
}

function initializeState(obj
/*: ParseObject*/
, initial
/*:: ?: State*/
)
/*: State*/
{
  var state = getState(obj);

  if (state) {
    return state;
  }

  if (!initial) {
    initial = {
      serverData: {},
      pendingOps: [{}],
      objectCache: {},
      tasks: new _TaskQueue.default(),
      existed: false
    };
  }

  state = initial;
  objectState.set(obj, state);
  return state;
}

function removeState(obj
/*: ParseObject*/
)
/*: ?State*/
{
  var state = getState(obj);

  if (state === null) {
    return null;
  }

  objectState.delete(obj);
  return state;
}

function getServerData(obj
/*: ParseObject*/
)
/*: AttributeMap*/
{
  var state = getState(obj);

  if (state) {
    return state.serverData;
  }

  return {};
}

function setServerData(obj
/*: ParseObject*/
, attributes
/*: AttributeMap*/
) {
  var _initializeState = initializeState(obj),
      serverData = _initializeState.serverData;

  ObjectStateMutations.setServerData(serverData, attributes);
}

function getPendingOps(obj
/*: ParseObject*/
)
/*: Array<OpsMap>*/
{
  var state = getState(obj);

  if (state) {
    return state.pendingOps;
  }

  return [{}];
}

function setPendingOp(obj
/*: ParseObject*/
, attr
/*: string*/
, op
/*: ?Op*/
) {
  var _initializeState2 = initializeState(obj),
      pendingOps = _initializeState2.pendingOps;

  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
}

function pushPendingState(obj
/*: ParseObject*/
) {
  var _initializeState3 = initializeState(obj),
      pendingOps = _initializeState3.pendingOps;

  ObjectStateMutations.pushPendingState(pendingOps);
}

function popPendingState(obj
/*: ParseObject*/
)
/*: OpsMap*/
{
  var _initializeState4 = initializeState(obj),
      pendingOps = _initializeState4.pendingOps;

  return ObjectStateMutations.popPendingState(pendingOps);
}

function mergeFirstPendingState(obj
/*: ParseObject*/
) {
  var pendingOps = getPendingOps(obj);
  ObjectStateMutations.mergeFirstPendingState(pendingOps);
}

function getObjectCache(obj
/*: ParseObject*/
)
/*: ObjectCache*/
{
  var state = getState(obj);

  if (state) {
    return state.objectCache;
  }

  return {};
}

function estimateAttribute(obj
/*: ParseObject*/
, attr
/*: string*/
)
/*: mixed*/
{
  var serverData = getServerData(obj);
  var pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
}

function estimateAttributes(obj
/*: ParseObject*/
)
/*: AttributeMap*/
{
  var serverData = getServerData(obj);
  var pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
}

function commitServerChanges(obj
/*: ParseObject*/
, changes
/*: AttributeMap*/
) {
  var state = initializeState(obj);
  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
}

function enqueueTask(obj
/*: ParseObject*/
, task
/*: () => Promise*/
)
/*: Promise*/
{
  var state = initializeState(obj);
  return state.tasks.enqueue(task);
}

function duplicateState(source
/*: ParseObject*/
, dest
/*: ParseObject*/
)
/*: void*/
{
  var oldState = initializeState(source);
  var newState = initializeState(dest);

  for (var key in oldState.serverData) {
    newState.serverData[key] = oldState.serverData[key];
  }

  for (var index = 0; index < oldState.pendingOps.length; index++) {
    for (var _key in oldState.pendingOps[index]) {
      newState.pendingOps[index][_key] = oldState.pendingOps[index][_key];
    }
  }

  for (var _key2 in oldState.objectCache) {
    newState.objectCache[_key2] = oldState.objectCache[_key2];
  }

  newState.existed = oldState.existed;
}

function clearAllState() {
  objectState = new _weakMap.default();
}