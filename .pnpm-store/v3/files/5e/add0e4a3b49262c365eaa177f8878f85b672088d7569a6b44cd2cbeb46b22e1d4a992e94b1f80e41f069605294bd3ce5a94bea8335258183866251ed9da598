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

var _TaskQueue = _interopRequireDefault(require("./TaskQueue"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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


let objectState = new WeakMap();

function getState(obj
/*: ParseObject*/
)
/*: ?State*/
{
  const classData = objectState.get(obj);
  return classData || null;
}

function initializeState(obj
/*: ParseObject*/
, initial
/*:: ?: State*/
)
/*: State*/
{
  let state = getState(obj);

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
  const state = getState(obj);

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
  const state = getState(obj);

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
  const {
    serverData
  } = initializeState(obj);
  ObjectStateMutations.setServerData(serverData, attributes);
}

function getPendingOps(obj
/*: ParseObject*/
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
/*: ParseObject*/
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
/*: ParseObject*/
) {
  const {
    pendingOps
  } = initializeState(obj);
  ObjectStateMutations.pushPendingState(pendingOps);
}

function popPendingState(obj
/*: ParseObject*/
)
/*: OpsMap*/
{
  const {
    pendingOps
  } = initializeState(obj);
  return ObjectStateMutations.popPendingState(pendingOps);
}

function mergeFirstPendingState(obj
/*: ParseObject*/
) {
  const pendingOps = getPendingOps(obj);
  ObjectStateMutations.mergeFirstPendingState(pendingOps);
}

function getObjectCache(obj
/*: ParseObject*/
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
/*: ParseObject*/
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
/*: ParseObject*/
)
/*: AttributeMap*/
{
  const serverData = getServerData(obj);
  const pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
}

function commitServerChanges(obj
/*: ParseObject*/
, changes
/*: AttributeMap*/
) {
  const state = initializeState(obj);
  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
}

function enqueueTask(obj
/*: ParseObject*/
, task
/*: () => Promise*/
)
/*: Promise*/
{
  const state = initializeState(obj);
  return state.tasks.enqueue(task);
}

function duplicateState(source
/*: ParseObject*/
, dest
/*: ParseObject*/
)
/*: void*/
{
  const oldState = initializeState(source);
  const newState = initializeState(dest);

  for (const key in oldState.serverData) {
    newState.serverData[key] = oldState.serverData[key];
  }

  for (let index = 0; index < oldState.pendingOps.length; index++) {
    for (const key in oldState.pendingOps[index]) {
      newState.pendingOps[index][key] = oldState.pendingOps[index][key];
    }
  }

  for (const key in oldState.objectCache) {
    newState.objectCache[key] = oldState.objectCache[key];
  }

  newState.existed = oldState.existed;
}

function clearAllState() {
  objectState = new WeakMap();
}