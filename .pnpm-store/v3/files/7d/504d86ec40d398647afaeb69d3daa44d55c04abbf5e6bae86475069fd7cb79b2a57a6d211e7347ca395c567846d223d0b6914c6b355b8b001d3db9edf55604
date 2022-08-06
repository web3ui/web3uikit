"use strict";

Object.defineProperty(exports, "__esModule", {
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

var ObjectStateMutations = _interopRequireWildcard(require("./ObjectStateMutations"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
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


let objectState
/*: {
  [className: string]: {
    [id: string]: State,
  },
}*/
= {};

function getState(obj
/*: ObjectIdentifier*/
)
/*: ?State*/
{
  const classData = objectState[obj.className];

  if (classData) {
    return classData[obj.id] || null;
  }

  return null;
}

function initializeState(obj
/*: ObjectIdentifier*/
, initial
/*:: ?: State*/
)
/*: State*/
{
  let state = getState(obj);

  if (state) {
    return state;
  }

  if (!objectState[obj.className]) {
    objectState[obj.className] = {};
  }

  if (!initial) {
    initial = ObjectStateMutations.defaultState();
  }

  state = objectState[obj.className][obj.id] = initial;
  return state;
}

function removeState(obj
/*: ObjectIdentifier*/
)
/*: ?State*/
{
  const state = getState(obj);

  if (state === null) {
    return null;
  }

  delete objectState[obj.className][obj.id];
  return state;
}

function getServerData(obj
/*: ObjectIdentifier*/
)
/*: AttributeMap*/
{
  const state = getState(obj);

  if (state) {
    return state.serverData;
  }

  return {};
}

function setServerData(obj
/*: ObjectIdentifier*/
, attributes
/*: AttributeMap*/
) {
  const {
    serverData
  } = initializeState(obj);
  ObjectStateMutations.setServerData(serverData, attributes);
}

function getPendingOps(obj
/*: ObjectIdentifier*/
)
/*: Array<OpsMap>*/
{
  const state = getState(obj);

  if (state) {
    return state.pendingOps;
  }

  return [{}];
}

function setPendingOp(obj
/*: ObjectIdentifier*/
, attr
/*: string*/
, op
/*: ?Op*/
) {
  const {
    pendingOps
  } = initializeState(obj);
  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
}

function pushPendingState(obj
/*: ObjectIdentifier*/
) {
  const {
    pendingOps
  } = initializeState(obj);
  ObjectStateMutations.pushPendingState(pendingOps);
}

function popPendingState(obj
/*: ObjectIdentifier*/
)
/*: OpsMap*/
{
  const {
    pendingOps
  } = initializeState(obj);
  return ObjectStateMutations.popPendingState(pendingOps);
}

function mergeFirstPendingState(obj
/*: ObjectIdentifier*/
) {
  const pendingOps = getPendingOps(obj);
  ObjectStateMutations.mergeFirstPendingState(pendingOps);
}

function getObjectCache(obj
/*: ObjectIdentifier*/
)
/*: ObjectCache*/
{
  const state = getState(obj);

  if (state) {
    return state.objectCache;
  }

  return {};
}

function estimateAttribute(obj
/*: ObjectIdentifier*/
, attr
/*: string*/
)
/*: mixed*/
{
  const serverData = getServerData(obj);
  const pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
}

function estimateAttributes(obj
/*: ObjectIdentifier*/
)
/*: AttributeMap*/
{
  const serverData = getServerData(obj);
  const pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
}

function commitServerChanges(obj
/*: ObjectIdentifier*/
, changes
/*: AttributeMap*/
) {
  const state = initializeState(obj);
  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
}

function enqueueTask(obj
/*: ObjectIdentifier*/
, task
/*: () => Promise*/
)
/*: Promise*/
{
  const state = initializeState(obj);
  return state.tasks.enqueue(task);
}

function clearAllState() {
  objectState = {};
}

function duplicateState(source
/*: { id: string }*/
, dest
/*: { id: string }*/
) {
  dest.id = source.id;
}