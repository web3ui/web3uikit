function fixProto(target, prototype) {
  var setPrototypeOf = Object.setPrototypeOf;
  setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
}
function fixStack(target, fn) {
  if (fn === void 0) {
    fn = target.constructor;
  }

  var captureStackTrace = Error.captureStackTrace;
  captureStackTrace && captureStackTrace(target, fn);
}

var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var CustomError = function (_super) {
  __extends(CustomError, _super);

  function CustomError(message) {
    var _newTarget = this.constructor;

    var _this = _super.call(this, message) || this;

    Object.defineProperty(_this, 'name', {
      value: _newTarget.name,
      enumerable: false,
      configurable: true
    });
    fixProto(_this, _newTarget.prototype);
    fixStack(_this);
    return _this;
  }

  return CustomError;
}(Error);

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  var arguments$1 = arguments;

  for (var s = 0, i = 0, il = arguments.length; i < il; i++) { s += arguments$1[i].length; }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) { for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) { r[k] = a[j]; } }

  return r;
};
function customErrorFactory(fn, parent) {
  if (parent === void 0) {
    parent = Error;
  }

  function CustomError() {
    var arguments$1 = arguments;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments$1[_i];
    }

    if (!(this instanceof CustomError)) { return new (CustomError.bind.apply(CustomError, __spreadArrays([void 0], args)))(); }
    parent.apply(this, args);
    Object.defineProperty(this, 'name', {
      value: fn.name || parent.name,
      enumerable: false,
      configurable: true
    });
    fn.apply(this, args);
    fixStack(this, CustomError);
  }

  return Object.defineProperties(CustomError, {
    prototype: {
      value: Object.create(parent.prototype, {
        constructor: {
          value: CustomError,
          writable: true,
          configurable: true
        }
      })
    }
  });
}

export { CustomError, customErrorFactory };
//# sourceMappingURL=custom-error.mjs.map
