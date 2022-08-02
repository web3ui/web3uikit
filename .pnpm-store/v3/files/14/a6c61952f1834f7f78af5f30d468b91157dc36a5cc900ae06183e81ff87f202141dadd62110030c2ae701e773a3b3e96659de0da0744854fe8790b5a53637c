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

var objectState = {};

function getState(obj) {
  var classData = objectState[obj.className];

  if (classData) {
    return classData[obj.id] || null;
  }

  return null;
}

function initializeState(obj, initial) {
  var state = getState(obj);

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

function removeState(obj) {
  var state = getState(obj);

  if (state === null) {
    return null;
  }

  delete objectState[obj.className][obj.id];
  return state;
}

function getServerData(obj) {
  var state = getState(obj);

  if (state) {
    return state.serverData;
  }

  return {};
}

function setServerData(obj, attributes) {
  var _initializeState = initializeState(obj),
      serverData = _initializeState.serverData;

  ObjectStateMutations.setServerData(serverData, attributes);
}

function getPendingOps(obj) {
  var state = getState(obj);

  if (state) {
    return state.pendingOps;
  }

  return [{}];
}

function setPendingOp(obj, attr, op) {
  var _initializeState2 = initializeState(obj),
      pendingOps = _initializeState2.pendingOps;

  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
}

function pushPendingState(obj) {
  var _initializeState3 = initializeState(obj),
      pendingOps = _initializeState3.pendingOps;

  ObjectStateMutations.pushPendingState(pendingOps);
}

function popPendingState(obj) {
  var _initializeState4 = initializeState(obj),
      pendingOps = _initializeState4.pendingOps;

  return ObjectStateMutations.popPendingState(pendingOps);
}

function mergeFirstPendingState(obj) {
  var pendingOps = getPendingOps(obj);
  ObjectStateMutations.mergeFirstPendingState(pendingOps);
}

function getObjectCache(obj) {
  var state = getState(obj);

  if (state) {
    return state.objectCache;
  }

  return {};
}

function estimateAttribute(obj, attr) {
  var serverData = getServerData(obj);
  var pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
}

function estimateAttributes(obj) {
  var serverData = getServerData(obj);
  var pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
}

function commitServerChanges(obj, changes) {
  var state = initializeState(obj);
  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
}

function enqueueTask(obj, task) {
  var state = initializeState(obj);
  return state.tasks.enqueue(task);
}

function clearAllState() {
  objectState = {};
}

function duplicateState(source, dest) {
  dest.id = source.id;
}