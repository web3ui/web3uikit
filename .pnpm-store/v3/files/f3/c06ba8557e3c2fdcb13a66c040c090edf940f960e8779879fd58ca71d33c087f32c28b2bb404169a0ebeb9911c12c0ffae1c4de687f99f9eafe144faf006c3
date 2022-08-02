"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitServerChanges = commitServerChanges;
exports.defaultState = defaultState;
exports.estimateAttribute = estimateAttribute;
exports.estimateAttributes = estimateAttributes;
exports.mergeFirstPendingState = mergeFirstPendingState;
exports.popPendingState = popPendingState;
exports.pushPendingState = pushPendingState;
exports.setPendingOp = setPendingOp;
exports.setServerData = setServerData;

var _encode = _interopRequireDefault(require("./encode"));

var _ParseFile = _interopRequireDefault(require("./ParseFile"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

var _TaskQueue = _interopRequireDefault(require("./TaskQueue"));

var _ParseOp = require("./ParseOp");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function defaultState()
/*: State*/
{
  return {
    serverData: {},
    pendingOps: [{}],
    objectCache: {},
    tasks: new _TaskQueue.default(),
    existed: false
  };
}

function setServerData(serverData
/*: AttributeMap*/
, attributes
/*: AttributeMap*/
) {
  for (const attr in attributes) {
    if (typeof attributes[attr] !== 'undefined') {
      serverData[attr] = attributes[attr];
    } else {
      delete serverData[attr];
    }
  }
}

function setPendingOp(pendingOps
/*: Array<OpsMap>*/
, attr
/*: string*/
, op
/*: ?Op*/
) {
  const last = pendingOps.length - 1;

  if (op) {
    pendingOps[last][attr] = op;
  } else {
    delete pendingOps[last][attr];
  }
}

function pushPendingState(pendingOps
/*: Array<OpsMap>*/
) {
  pendingOps.push({});
}

function popPendingState(pendingOps
/*: Array<OpsMap>*/
)
/*: OpsMap*/
{
  const first = pendingOps.shift();

  if (!pendingOps.length) {
    pendingOps[0] = {};
  }

  return first;
}

function mergeFirstPendingState(pendingOps
/*: Array<OpsMap>*/
) {
  const first = popPendingState(pendingOps);
  const next = pendingOps[0];

  for (const attr in first) {
    if (next[attr] && first[attr]) {
      const merged = next[attr].mergeWith(first[attr]);

      if (merged) {
        next[attr] = merged;
      }
    } else {
      next[attr] = first[attr];
    }
  }
}

function estimateAttribute(serverData
/*: AttributeMap*/
, pendingOps
/*: Array<OpsMap>*/
, className
/*: string*/
, id
/*: ?string*/
, attr
/*: string*/
)
/*: mixed*/
{
  let value = serverData[attr];

  for (let i = 0; i < pendingOps.length; i++) {
    if (pendingOps[i][attr]) {
      if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
        if (id) {
          value = pendingOps[i][attr].applyTo(value, {
            className: className,
            id: id
          }, attr);
        }
      } else {
        value = pendingOps[i][attr].applyTo(value);
      }
    }
  }

  return value;
}

function estimateAttributes(serverData
/*: AttributeMap*/
, pendingOps
/*: Array<OpsMap>*/
, className
/*: string*/
, id
/*: ?string*/
)
/*: AttributeMap*/
{
  const data = {};

  for (var attr in serverData) {
    data[attr] = serverData[attr];
  }

  for (let i = 0; i < pendingOps.length; i++) {
    for (attr in pendingOps[i]) {
      if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
        if (id) {
          data[attr] = pendingOps[i][attr].applyTo(data[attr], {
            className: className,
            id: id
          }, attr);
        }
      } else {
        if (attr.includes('.')) {
          // convert a.b.c into { a: { b: { c: value } } }
          const fields = attr.split('.');
          const first = fields[0];
          const last = fields[fields.length - 1];
          data[first] = _objectSpread({}, serverData[first]);

          let object = _objectSpread({}, data);

          for (let i = 0; i < fields.length - 1; i++) {
            object = object[fields[i]];
          }

          object[last] = pendingOps[i][attr].applyTo(object[last]);
        } else {
          data[attr] = pendingOps[i][attr].applyTo(data[attr]);
        }
      }
    }
  }

  return data;
}

function commitServerChanges(serverData
/*: AttributeMap*/
, objectCache
/*: ObjectCache*/
, changes
/*: AttributeMap*/
) {
  for (const attr in changes) {
    const val = changes[attr];
    serverData[attr] = val;

    if (val && typeof val === 'object' && !(val instanceof _ParseObject.default) && !(val instanceof _ParseFile.default) && !(val instanceof _ParseRelation.default)) {
      const json = (0, _encode.default)(val, false, true);
      objectCache[attr] = JSON.stringify(json);
    }
  }
}