/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BasePostMessageStream)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(readable_stream__WEBPACK_IMPORTED_MODULE_1__);



function noop() {
  return undefined;
}

const SYN = "SYN";
const ACK = "ACK";
const BRK = "BRK";
class BasePostMessageStream extends readable_stream__WEBPACK_IMPORTED_MODULE_1__.Duplex {
  constructor(_ref) {
    let {
      name,
      target,
      targetWindow = window,
      targetOrigin = "*"
    } = _ref;
    super({
      objectMode: true
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_init", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_haveSyn", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_target", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_targetWindow", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_targetOrigin", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_onMessage", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_synIntervalId", void 0);

    if (!name || !target) {
      throw new Error("Invalid input.");
    }

    this._init = false;
    this._haveSyn = false;
    this._name = name;
    this._target = target; // target origin

    this._targetWindow = targetWindow;
    this._targetOrigin = targetOrigin;
    this._onMessage = this.onMessage.bind(this);
    this._synIntervalId = null;
    window.addEventListener("message", this._onMessage, false);

    this._handShake();
  }

  _break() {
    this.cork();

    this._write(BRK, null, noop);

    this._haveSyn = false;
    this._init = false;
  }

  _handShake() {
    this._write(SYN, null, noop);

    this.cork();
  }

  _onData(data) {
    if (!this._init) {
      // listen for handshake
      if (data === SYN) {
        this._haveSyn = true;

        this._write(ACK, null, noop);
      } else if (data === ACK) {
        this._init = true;

        if (!this._haveSyn) {
          this._write(ACK, null, noop);
        }

        this.uncork();
      }
    } else if (data === BRK) {
      this._break();
    } else {
      // forward message
      try {
        this.push(data);
      } catch (err) {
        this.emit("error", err);
      }
    }
  }

  _postMessage(data) {
    const originConstraint = this._targetOrigin;

    this._targetWindow.postMessage({
      target: this._target,
      data
    }, originConstraint);
  }

  onMessage(event) {
    const message = event.data; // validate message

    if (this._targetOrigin !== "*" && event.origin !== this._targetOrigin || event.source !== this._targetWindow || typeof message !== "object" || message.target !== this._name || !message.data) {
      return;
    }

    this._onData(message.data);
  }

  _read() {
    return undefined;
  }

  _write(data, _, cb) {
    this._postMessage(data);

    cb();
  }

  _destroy() {
    window.removeEventListener("message", this._onMessage, false);
  }

}

/***/ }),

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pk": () => (/* binding */ createAsyncMiddleware),
  "O7": () => (/* binding */ createErrorMiddleware),
  "Rq": () => (/* binding */ createIdRemapMiddleware),
  "yh": () => (/* binding */ createLoggerMiddleware),
  "v0": () => (/* binding */ createScaffoldMiddleware),
  "AP": () => (/* binding */ createStreamMiddleware),
  "nE": () => (/* binding */ getRpcPromiseCallback)
});

;// CONCATENATED MODULE: external "@toruslabs/openlogin-utils"
const openlogin_utils_namespaceObject = require("@toruslabs/openlogin-utils");
// EXTERNAL MODULE: external "readable-stream"
var external_readable_stream_ = __webpack_require__(44);
// EXTERNAL MODULE: ./src/safeEventEmitter.ts + 1 modules
var safeEventEmitter = __webpack_require__(388);
// EXTERNAL MODULE: ./src/serializableError.ts + 1 modules
var serializableError = __webpack_require__(794);
;// CONCATENATED MODULE: ./src/jrpc.ts




const getRpcPromiseCallback = function (resolve, reject) {
  let unwrapResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return (error, response) => {
    if (error || response.error) {
      reject(error || response.error);
    } else if (!unwrapResult || Array.isArray(response)) {
      resolve(response);
    } else {
      resolve(response.result);
    }
  };
};
function createErrorMiddleware(log) {
  return (req, res, next, end) => {
    try {
      // json-rpc-engine will terminate the request when it notices this error
      if (typeof req.method !== "string" || !req.method) {
        res.error = new serializableError/* default */.Z({
          code: -32603,
          message: "invalid method"
        });
        end();
        return;
      }

      next(done => {
        const {
          error
        } = res;

        if (!error) {
          return done();
        }

        log.error("OpenLogin - RPC Error: ".concat(error.message), error);
        return done();
      });
    } catch (error) {
      log.error("OpenLogin - RPC Error thrown: ".concat(error.message), error);
      res.error = new serializableError/* default */.Z({
        code: -32603,
        message: error.message
      });
      end();
    }
  };
}
function createStreamMiddleware() {
  const idMap = {};

  function readNoop() {
    return false;
  }

  const events = new safeEventEmitter/* default */.Z();

  function processResponse(res) {
    const context = idMap[res.id];

    if (!context) {
      throw new Error("StreamMiddleware - Unknown response id \"".concat(res.id, "\""));
    }

    delete idMap[res.id]; // copy whole res onto original res

    Object.assign(context.res, res); // run callback on empty stack,
    // prevent internal stream-handler from catching errors

    setTimeout(context.end);
  }

  function processNotification(res) {
    events.emit("notification", res);
  }

  function processMessage(res, _encoding, cb) {
    let err;

    try {
      const isNotification = !res.id;

      if (isNotification) {
        processNotification(res);
      } else {
        processResponse(res);
      }
    } catch (_err) {
      err = _err;
    } // continue processing stream


    cb(err);
  }

  const stream = new external_readable_stream_.Duplex({
    objectMode: true,
    read: readNoop,
    write: processMessage
  });

  const middleware = (req, res, next, end) => {
    // write req to stream
    stream.push(req); // register request on id map

    idMap[req.id] = {
      req,
      res,
      next,
      end
    };
  };

  return {
    events,
    middleware,
    stream
  };
}
function createScaffoldMiddleware(handlers) {
  return (req, res, next, end) => {
    const handler = handlers[req.method]; // if no handler, return

    if (handler === undefined) {
      return next();
    } // if handler is fn, call as middleware


    if (typeof handler === "function") {
      return handler(req, res, next, end);
    } // if handler is some other value, use as result


    res.result = handler;
    return end();
  };
}
function createIdRemapMiddleware() {
  return (req, res, next, _end) => {
    const originalId = req.id;
    const newId = (0,openlogin_utils_namespaceObject.randomId)();
    req.id = newId;
    res.id = newId;
    next(done => {
      req.id = originalId;
      res.id = originalId;
      done();
    });
  };
}
function createLoggerMiddleware(logger) {
  return (req, res, next, _) => {
    logger.debug("REQ", req, "RES", res);
    next();
  };
}
function createAsyncMiddleware(asyncMiddleware) {
  return async (req, res, next, end) => {
    // nextPromise is the key to the implementation
    // it is resolved by the return handler passed to the
    // "next" function
    let resolveNextPromise;
    const nextPromise = new Promise(resolve => {
      resolveNextPromise = resolve;
    });
    let returnHandlerCallback = null;
    let nextWasCalled = false; // This will be called by the consumer's async middleware.

    const asyncNext = async () => {
      nextWasCalled = true; // We pass a return handler to next(). When it is called by the engine,
      // the consumer's async middleware will resume executing.

      next(runReturnHandlersCallback => {
        // This callback comes from JRPCEngine._runReturnHandlers
        returnHandlerCallback = runReturnHandlersCallback;
        resolveNextPromise();
      });
      await nextPromise;
    };

    try {
      await asyncMiddleware(req, res, asyncNext);

      if (nextWasCalled) {
        await nextPromise; // we must wait until the return handler is called

        returnHandlerCallback(null);
      } else {
        end(null);
      }
    } catch (error) {
      if (returnHandlerCallback) {
        returnHandlerCallback(error);
      } else {
        end(error);
      }
    }
  };
}

/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "eI": () => (/* binding */ JRPCEngine),
  "QK": () => (/* binding */ createEngineStream),
  "UZ": () => (/* binding */ mergeMiddleware)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
;// CONCATENATED MODULE: external "eth-rpc-errors"
const external_eth_rpc_errors_namespaceObject = require("eth-rpc-errors");
// EXTERNAL MODULE: external "readable-stream"
var external_readable_stream_ = __webpack_require__(44);
// EXTERNAL MODULE: ./src/safeEventEmitter.ts + 1 modules
var safeEventEmitter = __webpack_require__(388);
// EXTERNAL MODULE: ./src/serializableError.ts + 1 modules
var serializableError = __webpack_require__(794);
;// CONCATENATED MODULE: ./src/jrpcEngine.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/**
 * A JSON-RPC request and response processor.
 * Give it a stack of middleware, pass it requests, and get back responses.
 */

class JRPCEngine extends safeEventEmitter/* default */.Z {
  constructor() {
    super();

    defineProperty_default()(this, "_middleware", void 0);

    this._middleware = [];
  }
  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */


  static async _runAllMiddleware(req, res, middlewareStack) {
    const returnHandlers = [];
    let error = null;
    let isComplete = false; // Go down stack of middleware, call and collect optional returnHandlers

    for (const middleware of middlewareStack) {
      [error, isComplete] = await JRPCEngine._runMiddleware(req, res, middleware, returnHandlers);

      if (isComplete) {
        break;
      }
    }

    return [error, isComplete, returnHandlers.reverse()];
  }
  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware exection,
   * and a boolean indicating whether the request should end.
   */


  static _runMiddleware(req, res, middleware, returnHandlers) {
    return new Promise(resolve => {
      const end = err => {
        const error = err || res.error;

        if (error) {
          res.error = (0,external_eth_rpc_errors_namespaceObject.serializeError)(error);
        } // True indicates that the request should end


        resolve([error, true]);
      };

      const next = returnHandler => {
        if (res.error) {
          end(res.error);
        } else {
          if (returnHandler) {
            if (typeof returnHandler !== "function") {
              end(new serializableError/* default */.Z({
                code: -32603,
                message: "JRPCEngine: 'next' return handlers must be functions"
              }));
            }

            returnHandlers.push(returnHandler);
          } // False indicates that the request should not end


          resolve([null, false]);
        }
      };

      try {
        middleware(req, res, next, end);
      } catch (error) {
        end(error);
      }
    });
  }
  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */


  static async _runReturnHandlers(handlers) {
    for (const handler of handlers) {
      await new Promise((resolve, reject) => {
        handler(err => err ? reject(err) : resolve());
      });
    }
  }
  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */


  static _checkForCompletion(req, res, isComplete) {
    if (!("result" in res) && !("error" in res)) {
      throw new serializableError/* default */.Z({
        code: -32603,
        message: "Response has no error or result for request"
      });
    }

    if (!isComplete) {
      throw new serializableError/* default */.Z({
        code: -32603,
        message: "Nothing ended request"
      });
    }
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */


  push(middleware) {
    this._middleware.push(middleware);
  }
  /**
   * Handle a JSON-RPC request, and return a response.
   *
   * @param request - The request to handle.
   * @param callback - An error-first callback that will receive the response.
   */


  handle(req, cb) {
    if (cb && typeof cb !== "function") {
      throw new Error('"callback" must be a function if provided.');
    }

    if (Array.isArray(req)) {
      if (cb) {
        return this._handleBatch(req, cb);
      }

      return this._handleBatch(req);
    }

    if (cb) {
      return this._handle(req, cb);
    }

    return this._promiseHandle(req);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */


  asMiddleware() {
    return async (req, res, next, end) => {
      try {
        const [middlewareError, isComplete, returnHandlers] = await JRPCEngine._runAllMiddleware(req, res, this._middleware);

        if (isComplete) {
          await JRPCEngine._runReturnHandlers(returnHandlers);
          return end(middlewareError);
        }

        return next(async handlerCallback => {
          try {
            await JRPCEngine._runReturnHandlers(returnHandlers);
          } catch (error) {
            return handlerCallback(error);
          }

          return handlerCallback();
        });
      } catch (error) {
        return end(error);
      }
    };
  }
  /**
   * Like _handle, but for batch requests.
   */


  async _handleBatch(reqs, cb) {
    // The order here is important
    try {
      // 2. Wait for all requests to finish, or throw on some kind of fatal
      // error
      const responses = await Promise.all( // 1. Begin executing each request in the order received
      reqs.map(this._promiseHandle.bind(this))); // 3. Return batch response

      if (cb) {
        return cb(null, responses);
      }

      return responses;
    } catch (error) {
      if (cb) {
        return cb(error);
      }

      throw error;
    }
  }
  /**
   * A promise-wrapped _handle.
   */


  _promiseHandle(req) {
    return new Promise(resolve => {
      this._handle(req, (_err, res) => {
        // There will always be a response, and it will always have any error
        // that is caught and propagated.
        resolve(res);
      });
    });
  }
  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */


  async _handle(callerReq, cb) {
    if (!callerReq || Array.isArray(callerReq) || typeof callerReq !== "object") {
      const error = new serializableError/* default */.Z({
        code: -32603,
        message: "request must be plain object"
      });
      return cb(error, {
        id: undefined,
        jsonrpc: "2.0",
        error
      });
    }

    if (typeof callerReq.method !== "string") {
      const error = new serializableError/* default */.Z({
        code: -32603,
        message: "method must be string"
      });
      return cb(error, {
        id: callerReq.id,
        jsonrpc: "2.0",
        error
      });
    }

    const req = _objectSpread({}, callerReq);

    const res = {
      id: req.id,
      jsonrpc: req.jsonrpc
    };
    let error = null;

    try {
      await this._processRequest(req, res);
    } catch (_error) {
      // A request handler error, a re-thrown middleware error, or something
      // unexpected.
      error = _error;
    }

    if (error) {
      // Ensure no result is present on an errored response
      delete res.result;

      if (!res.error) {
        res.error = (0,external_eth_rpc_errors_namespaceObject.serializeError)(error);
      }
    }

    return cb(error, res);
  }
  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */


  async _processRequest(req, res) {
    const [error, isComplete, returnHandlers] = await JRPCEngine._runAllMiddleware(req, res, this._middleware); // Throw if "end" was not called, or if the response has neither a result
    // nor an error.

    JRPCEngine._checkForCompletion(req, res, isComplete); // The return handlers should run even if an error was encountered during
    // middleware processing.


    await JRPCEngine._runReturnHandlers(returnHandlers); // Now we re-throw the middleware processing error, if any, to catch it
    // further up the call chain.

    if (error) {
      throw error;
    }
  }

}
function mergeMiddleware(middlewareStack) {
  const engine = new JRPCEngine();
  middlewareStack.forEach(middleware => engine.push(middleware));
  return engine.asMiddleware();
}
function createEngineStream(opts) {
  if (!opts || !opts.engine) {
    throw new Error("Missing engine parameter!");
  }

  const {
    engine
  } = opts; // eslint-disable-next-line prefer-const

  let stream;

  function read() {
    return undefined;
  }

  function write(req, _encoding, cb) {
    engine.handle(req, (_err, res) => {
      stream.push(res);
    });
    cb();
  }

  stream = new external_readable_stream_.Duplex({
    objectMode: true,
    read,
    write
  }); // forward notifications

  if (engine.on) {
    engine.on("notification", message => {
      stream.push(message);
    });
  }

  return stream;
}

/***/ }),

/***/ 376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yN": () => (/* binding */ IGNORE_SUBSTREAM),
  "O4": () => (/* binding */ ObjectMultiplex),
  "V2": () => (/* binding */ setupMultiplex)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
;// CONCATENATED MODULE: external "end-of-stream"
const external_end_of_stream_namespaceObject = require("end-of-stream");
var external_end_of_stream_default = /*#__PURE__*/__webpack_require__.n(external_end_of_stream_namespaceObject);
;// CONCATENATED MODULE: external "once"
const external_once_namespaceObject = require("once");
var external_once_default = /*#__PURE__*/__webpack_require__.n(external_once_namespaceObject);
;// CONCATENATED MODULE: external "pump"
const external_pump_namespaceObject = require("pump");
var external_pump_default = /*#__PURE__*/__webpack_require__.n(external_pump_namespaceObject);
// EXTERNAL MODULE: external "readable-stream"
var external_readable_stream_ = __webpack_require__(44);
// EXTERNAL MODULE: ./src/substream.ts
var src_substream = __webpack_require__(486);
;// CONCATENATED MODULE: ./src/mux.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






const IGNORE_SUBSTREAM = Symbol("IGNORE_SUBSTREAM");
class ObjectMultiplex extends external_readable_stream_.Duplex {
  constructor() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super(_objectSpread(_objectSpread({}, opts), {}, {
      objectMode: true
    }));

    defineProperty_default()(this, "_substreams", void 0);

    defineProperty_default()(this, "getStream", void 0);

    this._substreams = {};
  }

  createStream(name) {
    // validate name
    if (!name) {
      throw new Error("ObjectMultiplex - name must not be empty");
    }

    if (this._substreams[name]) {
      throw new Error("ObjectMultiplex - Substream for name \"".concat(name, "\" already exists"));
    } // create substream


    const substream = new src_substream/* default */.Z({
      parent: this,
      name
    });
    this._substreams[name] = substream; // listen for parent stream to end
    // eslint-disable-next-line @typescript-eslint/no-use-before-define

    anyStreamEnd(this, _error => substream.destroy(_error || undefined));
    return substream;
  } // ignore streams (dont display orphaned data warning)


  ignoreStream(name) {
    // validate name
    if (!name) {
      throw new Error("ObjectMultiplex - name must not be empty");
    }

    if (this._substreams[name]) {
      throw new Error("ObjectMultiplex - Substream for name \"".concat(name, "\" already exists"));
    } // set


    this._substreams[name] = IGNORE_SUBSTREAM;
  }

  _read() {
    return undefined;
  }

  _write(chunk, _encoding, callback) {
    const {
      name,
      data
    } = chunk;

    if (!name) {
      window.console.warn("ObjectMultiplex - malformed chunk without name \"".concat(chunk, "\""));
      return callback();
    } // get corresponding substream


    const substream = this._substreams[name];

    if (!substream) {
      window.console.warn("ObjectMultiplex - orphaned data for stream \"".concat(name, "\""));
      return callback();
    } // push data into substream


    if (substream !== IGNORE_SUBSTREAM) {
      substream.push(data);
    }

    return callback();
  }

} // util

function anyStreamEnd(stream, _cb) {
  const cb = external_once_default()(_cb);
  external_end_of_stream_default()(stream, {
    readable: false
  }, cb);
  external_end_of_stream_default()(stream, {
    writable: false
  }, cb);
}

function setupMultiplex(stream) {
  const mux = new ObjectMultiplex();

  mux.getStream = function streamHelper(name) {
    if (this._substreams[name]) {
      return this._substreams[name];
    }

    return this.createStream(name);
  };

  external_pump_default()(stream, mux, stream, err => {
    if (err) window.console.error(err);
  });
  return mux;
}

/***/ }),

/***/ 568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostMessageStream)
/* harmony export */ });
/* harmony import */ var _basePostMessageStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(393);

class PostMessageStream extends _basePostMessageStream__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  _postMessage(data) {
    let originConstraint = this._targetOrigin;

    if (typeof data === "object") {
      const dataObj = data;

      if (typeof dataObj.data === "object") {
        const dataObjData = dataObj.data;

        if (Array.isArray(dataObjData.params) && dataObjData.params.length > 0) {
          const dataObjDataParam = dataObjData.params[0];

          if (dataObjDataParam._origin) {
            originConstraint = dataObjDataParam._origin;
          } // add a constraint for the response


          dataObjDataParam._origin = window.location.origin;
        }
      }
    }

    this._targetWindow.postMessage({
      target: this._target,
      data
    }, originConstraint);
  }

}

/***/ }),

/***/ 388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SafeEventEmitter)
});

;// CONCATENATED MODULE: external "events"
const external_events_namespaceObject = require("events");
;// CONCATENATED MODULE: ./src/safeEventEmitter.ts


function safeApply(handler, context, args) {
  try {
    Reflect.apply(handler, context, args);
  } catch (err) {
    // Throw error after timeout so as not to interrupt the stack
    setTimeout(() => {
      throw err;
    });
  }
}

function arrayClone(arr) {
  const n = arr.length;
  const copy = new Array(n);

  for (let i = 0; i < n; i += 1) {
    copy[i] = arr[i];
  }

  return copy;
}

class SafeEventEmitter extends external_events_namespaceObject.EventEmitter {
  emit(type) {
    let doError = type === "error";
    const events = this._events;

    if (events !== undefined) {
      doError = doError && events.error === undefined;
    } else if (!doError) {
      return false;
    } // If there is no 'error' event listener then throw.


    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (doError) {
      let er;

      if (args.length > 0) {
        [er] = args;
      }

      if (er instanceof Error) {
        // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
      } // At least give some kind of context to the user


      const err = new Error("Unhandled error.".concat(er ? " (".concat(er.message, ")") : ""));
      err.context = er;
      throw err; // Unhandled 'error' event
    }

    const handler = events[type];

    if (handler === undefined) {
      return false;
    }

    if (typeof handler === "function") {
      safeApply(handler, this, args);
    } else {
      const len = handler.length;
      const listeners = arrayClone(handler);

      for (let i = 0; i < len; i += 1) {
        safeApply(listeners[i], this, args);
      }
    }

    return true;
  }

}

/***/ }),

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SerializableError)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
;// CONCATENATED MODULE: external "fast-safe-stringify"
const external_fast_safe_stringify_namespaceObject = require("fast-safe-stringify");
var external_fast_safe_stringify_default = /*#__PURE__*/__webpack_require__.n(external_fast_safe_stringify_namespaceObject);
;// CONCATENATED MODULE: ./src/serializableError.ts


class SerializableError extends Error {
  constructor(_ref) {
    let {
      code,
      message,
      data
    } = _ref;

    if (!Number.isInteger(code)) {
      throw new Error("code must be an integer");
    }

    if (!message || typeof message !== "string") {
      throw new Error("message must be string");
    }

    super(message);

    defineProperty_default()(this, "code", void 0);

    defineProperty_default()(this, "data", void 0);

    this.code = code;

    if (data !== undefined) {
      this.data = data;
    }
  }

  toString() {
    return external_fast_safe_stringify_default()({
      code: this.code,
      message: this.message,
      data: this.data,
      stack: this.stack
    });
  }

}

/***/ }),

/***/ 486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Substream)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(readable_stream__WEBPACK_IMPORTED_MODULE_1__);


class Substream extends readable_stream__WEBPACK_IMPORTED_MODULE_1__.Duplex {
  constructor(_ref) {
    let {
      parent,
      name
    } = _ref;
    super({
      objectMode: true
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_parent", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_name", void 0);

    this._parent = parent;
    this._name = name;
  }
  /**
   * Explicitly sets read operations to a no-op.
   */


  _read() {
    return undefined;
  }
  /**
   * Called when data should be written to this writable stream.
   *
   * @param chunk - Arbitrary object to write
   * @param encoding - Encoding to use when writing payload
   * @param callback - Called when writing is complete or an error occurs
   */


  _write(chunk, _encoding, callback) {
    this._parent.push({
      name: this._name,
      data: chunk
    });

    callback();
  }

}

/***/ }),

/***/ 337:
/***/ (() => {



/***/ }),

/***/ 195:
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ 44:
/***/ ((module) => {

"use strict";
module.exports = require("readable-stream");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePostMessageStream": () => (/* reexport safe */ _basePostMessageStream__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "IGNORE_SUBSTREAM": () => (/* reexport safe */ _mux__WEBPACK_IMPORTED_MODULE_3__.yN),
/* harmony export */   "JRPCEngine": () => (/* reexport safe */ _jrpcEngine__WEBPACK_IMPORTED_MODULE_2__.eI),
/* harmony export */   "ObjectMultiplex": () => (/* reexport safe */ _mux__WEBPACK_IMPORTED_MODULE_3__.O4),
/* harmony export */   "PostMessageStream": () => (/* reexport safe */ _postMessageStream__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "SafeEventEmitter": () => (/* reexport safe */ _safeEventEmitter__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "SerializableError": () => (/* reexport safe */ _serializableError__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "Substream": () => (/* reexport safe */ _substream__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "createAsyncMiddleware": () => (/* reexport safe */ _jrpc__WEBPACK_IMPORTED_MODULE_1__.Pk),
/* harmony export */   "createEngineStream": () => (/* reexport safe */ _jrpcEngine__WEBPACK_IMPORTED_MODULE_2__.QK),
/* harmony export */   "createErrorMiddleware": () => (/* reexport safe */ _jrpc__WEBPACK_IMPORTED_MODULE_1__.O7),
/* harmony export */   "createIdRemapMiddleware": () => (/* reexport safe */ _jrpc__WEBPACK_IMPORTED_MODULE_1__.Rq),
/* harmony export */   "createLoggerMiddleware": () => (/* reexport safe */ _jrpc__WEBPACK_IMPORTED_MODULE_1__.yh),
/* harmony export */   "createScaffoldMiddleware": () => (/* reexport safe */ _jrpc__WEBPACK_IMPORTED_MODULE_1__.v0),
/* harmony export */   "createStreamMiddleware": () => (/* reexport safe */ _jrpc__WEBPACK_IMPORTED_MODULE_1__.AP),
/* harmony export */   "getRpcPromiseCallback": () => (/* reexport safe */ _jrpc__WEBPACK_IMPORTED_MODULE_1__.nE),
/* harmony export */   "mergeMiddleware": () => (/* reexport safe */ _jrpcEngine__WEBPACK_IMPORTED_MODULE_2__.UZ),
/* harmony export */   "setupMultiplex": () => (/* reexport safe */ _mux__WEBPACK_IMPORTED_MODULE_3__.V2)
/* harmony export */ });
/* harmony import */ var _basePostMessageStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(393);
/* harmony import */ var _jrpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(238);
/* harmony import */ var _jrpcEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(929);
/* harmony import */ var _mux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(376);
/* harmony import */ var _postMessageStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(568);
/* harmony import */ var _safeEventEmitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(388);
/* harmony import */ var _serializableError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(794);
/* harmony import */ var _substream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(486);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(337);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _utils__WEBPACK_IMPORTED_MODULE_8__) if(["default","BasePostMessageStream","PostMessageStream","SafeEventEmitter","SerializableError","Substream","createAsyncMiddleware","createErrorMiddleware","createIdRemapMiddleware","createLoggerMiddleware","createScaffoldMiddleware","createStreamMiddleware","getRpcPromiseCallback","JRPCEngine","createEngineStream","mergeMiddleware","IGNORE_SUBSTREAM","ObjectMultiplex","setupMultiplex"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _utils__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=openloginJrpc.cjs.js.map