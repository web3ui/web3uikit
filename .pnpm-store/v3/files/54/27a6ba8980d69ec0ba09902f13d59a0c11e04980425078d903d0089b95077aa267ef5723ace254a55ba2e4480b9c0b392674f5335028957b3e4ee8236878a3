var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/utils.ts
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
function isType(type, value) {
  return typeof value === type;
}

// src/spy.ts
var spies = /* @__PURE__ */ new Set();
function spy(cb) {
  assert(isType("function", cb) || isType("undefined", cb), "cannot spy on a non-function value");
  let fn = function(...args) {
    fn.called = true;
    fn.callCount++;
    fn.calls.push(args);
    if (fn.next) {
      let [type2, result2] = fn.next;
      fn.results.push(fn.next);
      fn.next = null;
      if (type2 === "ok") {
        return result2;
      }
      throw result2;
    }
    let result;
    let type = "ok";
    if (fn.impl) {
      try {
        result = fn.impl.apply(this, args);
        type = "ok";
      } catch (err) {
        result = err;
        type = "error";
        fn.results.push([type, err]);
        throw err;
      }
    }
    let resultTuple = [type, result];
    if (result && isType("object", result) && isType("function", result.then)) {
      const newPromise = result.then((r) => resultTuple[1] = r).catch((e) => {
        resultTuple[0] = "error";
        resultTuple[1] = e;
        throw e;
      });
      Object.assign(newPromise, result);
      result = newPromise;
    }
    fn.results.push(resultTuple);
    return result;
  };
  Object.defineProperty(fn, "_isMockFunction", { get: () => true });
  Object.defineProperty(fn, "length", { value: cb ? cb.length : 0 });
  Object.defineProperty(fn, "returns", {
    get() {
      return this.results.map(([, r]) => r);
    }
  });
  Object.defineProperty(fn, "name", { value: cb ? cb.name || "spy" : "spy" });
  const reset = () => {
    fn.called = false;
    fn.callCount = 0;
    fn.results = [];
    fn.calls = [];
  };
  reset();
  fn.impl = cb;
  fn.reset = reset;
  fn.nextError = (error) => {
    fn.next = ["error", error];
    return fn;
  };
  fn.nextResult = (result) => {
    fn.next = ["ok", result];
    return fn;
  };
  return fn;
}

// src/spyOn.ts
var getDescriptor = (obj, method) => Object.getOwnPropertyDescriptor(obj, method);
function spyOn(obj, methodName, mock) {
  assert(!isType("undefined", obj), "spyOn could not find an object to spy upon");
  assert(isType("object", obj) || isType("function", obj), "cannot spyOn on a primitive value");
  let getMeta = () => {
    if (typeof methodName !== "object") {
      return [methodName, "value"];
    }
    if ("getter" in methodName && "setter" in methodName) {
      throw new Error("cannot spy on both getter and setter");
    }
    if ("getter" in methodName) {
      return [methodName.getter, "get"];
    }
    if ("setter" in methodName) {
      return [methodName.setter, "set"];
    }
    throw new Error("specify getter or setter to spy on");
  };
  let [accessName, accessType] = getMeta();
  let objDescriptor = getDescriptor(obj, accessName);
  let proto = Object.getPrototypeOf(obj);
  let protoDescriptor = proto && getDescriptor(proto, accessName);
  let descriptor = objDescriptor || protoDescriptor;
  assert(descriptor || accessName in obj, `${String(accessName)} does not exist`);
  let ssr = false;
  if (accessType === "value" && descriptor && !descriptor.value && descriptor.get) {
    accessType = "get";
    ssr = true;
    mock = descriptor.get();
  }
  let origin;
  if (descriptor) {
    origin = descriptor[accessType];
  } else if (accessType !== "value") {
    origin = () => obj[accessName];
  } else {
    origin = obj[accessName];
  }
  if (!mock)
    mock = origin;
  let fn = spy(mock);
  let define = (cb) => {
    let _a = descriptor || {
      configurable: true,
      writable: true
    }, { value } = _a, desc = __objRest(_a, ["value"]);
    if (accessType !== "value") {
      delete desc.writable;
    }
    ;
    desc[accessType] = cb;
    Object.defineProperty(obj, accessName, desc);
  };
  let restore = () => define(origin);
  fn.restore = restore;
  fn.getOriginal = () => ssr ? origin() : origin;
  fn.willCall = (newCb) => {
    fn.impl = newCb;
    return fn;
  };
  define(ssr ? () => fn : fn);
  spies.add(fn);
  return fn;
}

// src/restoreAll.ts
function restoreAll() {
  for (let fn of spies) {
    fn.restore();
  }
  spies.clear();
}
export {
  restoreAll,
  spies,
  spy,
  spyOn
};
