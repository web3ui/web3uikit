var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.createFunction = createFunction;
exports.createTrigger = createTrigger;
exports.getFunction = getFunction;
exports.getFunctions = getFunctions;
exports.getTrigger = getTrigger;
exports.getTriggers = getTriggers;
exports.remove = remove;
exports.removeFunction = removeFunction;
exports.removeTrigger = removeTrigger;
exports.update = update;
exports.updateFunction = updateFunction;
exports.updateTrigger = updateTrigger;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _decode = _interopRequireDefault(require("./decode"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

function getFunctions() {
  return _CoreManager.default.getHooksController().get('functions');
}

function getTriggers() {
  return _CoreManager.default.getHooksController().get('triggers');
}

function getFunction(name) {
  return _CoreManager.default.getHooksController().get('functions', name);
}

function getTrigger(className, triggerName) {
  return _CoreManager.default.getHooksController().get('triggers', className, triggerName);
}

function createFunction(functionName, url) {
  return create({
    functionName: functionName,
    url: url
  });
}

function createTrigger(className, triggerName, url) {
  return create({
    className: className,
    triggerName: triggerName,
    url: url
  });
}

function create(hook) {
  return _CoreManager.default.getHooksController().create(hook);
}

function updateFunction(functionName, url) {
  return update({
    functionName: functionName,
    url: url
  });
}

function updateTrigger(className, triggerName, url) {
  return update({
    className: className,
    triggerName: triggerName,
    url: url
  });
}

function update(hook) {
  return _CoreManager.default.getHooksController().update(hook);
}

function removeFunction(functionName) {
  return remove({
    functionName: functionName
  });
}

function removeTrigger(className, triggerName) {
  return remove({
    className: className,
    triggerName: triggerName
  });
}

function remove(hook) {
  return _CoreManager.default.getHooksController().remove(hook);
}

var DefaultController = {
  get: function (type, functionName, triggerName) {
    var url = "/hooks/" + type;

    if (functionName) {
      url += "/" + functionName;

      if (triggerName) {
        url += "/" + triggerName;
      }
    }

    return this.sendRequest('GET', url);
  },
  create: function (hook) {
    var url;

    if (hook.functionName && hook.url) {
      url = '/hooks/functions';
    } else if (hook.className && hook.triggerName && hook.url) {
      url = '/hooks/triggers';
    } else {
      return Promise.reject({
        error: 'invalid hook declaration',
        code: 143
      });
    }

    return this.sendRequest('POST', url, hook);
  },
  remove: function (hook) {
    var url;

    if (hook.functionName) {
      url = "/hooks/functions/" + hook.functionName;
      delete hook.functionName;
    } else if (hook.className && hook.triggerName) {
      url = "/hooks/triggers/" + hook.className + "/" + hook.triggerName;
      delete hook.className;
      delete hook.triggerName;
    } else {
      return Promise.reject({
        error: 'invalid hook declaration',
        code: 143
      });
    }

    return this.sendRequest('PUT', url, {
      __op: 'Delete'
    });
  },
  update: function (hook) {
    var url;

    if (hook.functionName && hook.url) {
      url = "/hooks/functions/" + hook.functionName;
      delete hook.functionName;
    } else if (hook.className && hook.triggerName && hook.url) {
      url = "/hooks/triggers/" + hook.className + "/" + hook.triggerName;
      delete hook.className;
      delete hook.triggerName;
    } else {
      return Promise.reject({
        error: 'invalid hook declaration',
        code: 143
      });
    }

    return this.sendRequest('PUT', url, hook);
  },
  sendRequest: function (method, url, body) {
    return _CoreManager.default.getRESTController().request(method, url, body, {
      useMasterKey: true
    }).then(function (res) {
      var decoded = (0, _decode.default)(res);

      if (decoded) {
        return Promise.resolve(decoded);
      }

      return Promise.reject(new _ParseError.default(_ParseError.default.INVALID_JSON, 'The server returned an invalid response.'));
    });
  }
};

_CoreManager.default.setHooksController(DefaultController);