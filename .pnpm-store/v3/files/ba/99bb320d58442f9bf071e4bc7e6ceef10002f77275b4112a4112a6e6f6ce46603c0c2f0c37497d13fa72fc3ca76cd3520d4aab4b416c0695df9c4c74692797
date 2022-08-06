import require$$0 from 'tty';
import { isPackageExists } from 'local-pkg';
import path from 'path';

var picocolors = {exports: {}};

let tty = require$$0;

let isColorSupported =
	!("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
	("FORCE_COLOR" in process.env ||
		process.argv.includes("--color") ||
		process.platform === "win32" ||
		(tty.isatty(1) && process.env.TERM !== "dumb") ||
		"CI" in process.env);

let formatter =
	(open, close, replace = open) =>
	input => {
		let string = "" + input;
		let index = string.indexOf(close, open.length);
		return ~index
			? open + replaceClose(string, close, replace, index) + close
			: open + string + close
	};

let replaceClose = (string, close, replace, index) => {
	let start = string.substring(0, index) + replace;
	let end = string.substring(index + close.length);
	let nextIndex = end.indexOf(close);
	return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end
};

let createColors = (enabled = isColorSupported) => ({
	isColorSupported: enabled,
	reset: enabled ? s => `\x1b[0m${s}\x1b[0m` : String,
	bold: enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
	dim: enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
	italic: enabled ? formatter("\x1b[3m", "\x1b[23m") : String,
	underline: enabled ? formatter("\x1b[4m", "\x1b[24m") : String,
	inverse: enabled ? formatter("\x1b[7m", "\x1b[27m") : String,
	hidden: enabled ? formatter("\x1b[8m", "\x1b[28m") : String,
	strikethrough: enabled ? formatter("\x1b[9m", "\x1b[29m") : String,
	black: enabled ? formatter("\x1b[30m", "\x1b[39m") : String,
	red: enabled ? formatter("\x1b[31m", "\x1b[39m") : String,
	green: enabled ? formatter("\x1b[32m", "\x1b[39m") : String,
	yellow: enabled ? formatter("\x1b[33m", "\x1b[39m") : String,
	blue: enabled ? formatter("\x1b[34m", "\x1b[39m") : String,
	magenta: enabled ? formatter("\x1b[35m", "\x1b[39m") : String,
	cyan: enabled ? formatter("\x1b[36m", "\x1b[39m") : String,
	white: enabled ? formatter("\x1b[37m", "\x1b[39m") : String,
	gray: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
	bgBlack: enabled ? formatter("\x1b[40m", "\x1b[49m") : String,
	bgRed: enabled ? formatter("\x1b[41m", "\x1b[49m") : String,
	bgGreen: enabled ? formatter("\x1b[42m", "\x1b[49m") : String,
	bgYellow: enabled ? formatter("\x1b[43m", "\x1b[49m") : String,
	bgBlue: enabled ? formatter("\x1b[44m", "\x1b[49m") : String,
	bgMagenta: enabled ? formatter("\x1b[45m", "\x1b[49m") : String,
	bgCyan: enabled ? formatter("\x1b[46m", "\x1b[49m") : String,
	bgWhite: enabled ? formatter("\x1b[47m", "\x1b[49m") : String,
});

picocolors.exports = createColors();
picocolors.exports.createColors = createColors;

function normalizeWindowsPath(input = "") {
  if (!input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}

const _UNC_REGEX = /^[/][/]/;
const _UNC_DRIVE_REGEX = /^[/][/]([.]{1,2}[/])?([a-zA-Z]):[/]/;
const _IS_ABSOLUTE_RE = /^\/|^\\|^[a-zA-Z]:[/\\]/;
const sep = "/";
const delimiter = ":";
const normalize = function(path2) {
  if (path2.length === 0) {
    return ".";
  }
  path2 = normalizeWindowsPath(path2);
  const isUNCPath = path2.match(_UNC_REGEX);
  const hasUNCDrive = isUNCPath && path2.match(_UNC_DRIVE_REGEX);
  const isPathAbsolute = isAbsolute(path2);
  const trailingSeparator = path2[path2.length - 1] === "/";
  path2 = normalizeString(path2, !isPathAbsolute);
  if (path2.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path2 += "/";
  }
  if (isUNCPath) {
    if (hasUNCDrive) {
      return `//./${path2}`;
    }
    return `//${path2}`;
  }
  return isPathAbsolute && !isAbsolute(path2) ? `/${path2}` : path2;
};
const join = function(...args) {
  if (args.length === 0) {
    return ".";
  }
  let joined;
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i];
    if (arg.length > 0) {
      if (joined === void 0) {
        joined = arg;
      } else {
        joined += `/${arg}`;
      }
    }
  }
  if (joined === void 0) {
    return ".";
  }
  return normalize(joined);
};
const resolve = function(...args) {
  args = args.map((arg) => normalizeWindowsPath(arg));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path2 = i >= 0 ? args[i] : process.cwd();
    if (path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path2);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path2, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let i = 0; i <= path2.length; ++i) {
    if (i < path2.length) {
      char = path2[i];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === i - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path2.slice(lastSlash + 1, i)}`;
        } else {
          res = path2.slice(lastSlash + 1, i);
        }
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const toNamespacedPath = function(p) {
  return normalizeWindowsPath(p);
};
const extname = function(p) {
  return path.posix.extname(normalizeWindowsPath(p));
};
const relative = function(from, to) {
  return path.posix.relative(normalizeWindowsPath(from), normalizeWindowsPath(to));
};
const dirname = function(p) {
  return path.posix.dirname(normalizeWindowsPath(p));
};
const format = function(p) {
  return normalizeWindowsPath(path.posix.format(p));
};
const basename = function(p, ext) {
  return path.posix.basename(normalizeWindowsPath(p), ext);
};
const parse = function(p) {
  return path.posix.parse(normalizeWindowsPath(p));
};

const _path = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sep: sep,
  delimiter: delimiter,
  normalize: normalize,
  join: join,
  resolve: resolve,
  normalizeString: normalizeString,
  isAbsolute: isAbsolute,
  toNamespacedPath: toNamespacedPath,
  extname: extname,
  relative: relative,
  dirname: dirname,
  format: format,
  basename: basename,
  parse: parse
});

({
  ..._path
});

function getWorkerState() {
  return globalThis.__vitest_worker__;
}

function isFinalObj(obj) {
  return obj === Object.prototype || obj === Function.prototype || obj === RegExp.prototype;
}
function collectOwnProperties(obj, collector) {
  const props = Object.getOwnPropertyNames(obj);
  const symbs = Object.getOwnPropertySymbols(obj);
  props.forEach((prop) => collector.add(prop));
  symbs.forEach((symb) => collector.add(symb));
}
function getAllProperties(obj) {
  const allProps = /* @__PURE__ */ new Set();
  let curr = obj;
  do {
    if (isFinalObj(curr))
      break;
    collectOwnProperties(curr, allProps);
  } while (curr = Object.getPrototypeOf(curr));
  return Array.from(allProps);
}
function notNullish(v) {
  return v != null;
}
function slash(str) {
  return str.replace(/\\/g, "/");
}
function mergeSlashes(str) {
  return str.replace(/\/\//g, "/");
}
const noop = () => {
};
function getType(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function getOwnProperties(obj) {
  const ownProps = /* @__PURE__ */ new Set();
  if (isFinalObj(obj))
    return [];
  collectOwnProperties(obj, ownProps);
  return Array.from(ownProps);
}
function deepClone(val) {
  const seen = /* @__PURE__ */ new WeakMap();
  return clone(val, seen);
}
function clone(val, seen) {
  let k, out;
  if (seen.has(val))
    return seen.get(val);
  if (Array.isArray(val)) {
    out = Array(k = val.length);
    seen.set(val, out);
    while (k--)
      out[k] = clone(val[k], seen);
    return out;
  }
  if (Object.prototype.toString.call(val) === "[object Object]") {
    out = Object.create(Object.getPrototypeOf(val));
    seen.set(val, out);
    const props = getOwnProperties(val);
    for (const k2 of props)
      out[k2] = clone(val[k2], seen);
    return out;
  }
  return val;
}
function toArray(array) {
  if (array === null || array === void 0)
    array = [];
  if (Array.isArray(array))
    return array;
  return [array];
}
const toString = (v) => Object.prototype.toString.call(v);
const isPlainObject = (val) => toString(val) === "[object Object]" && (!val.constructor || val.constructor.name === "Object");
function isObject(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, ...sources) {
  if (!sources.length)
    return target;
  const source = sources.shift();
  if (source === void 0)
    return target;
  if (isMergableObject(target) && isMergableObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isMergableObject(source[key])) {
        if (!target[key])
          target[key] = {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  }
  return deepMerge(target, ...sources);
}
function isMergableObject(item) {
  return isPlainObject(item) && !Array.isArray(item);
}
function assertTypes(value, name, types) {
  const receivedType = typeof value;
  const pass = types.includes(receivedType);
  if (!pass)
    throw new TypeError(`${name} value must be ${types.join(" or ")}, received "${receivedType}"`);
}
function stdout() {
  return console._stdout || process.stdout;
}

function getTests(suite) {
  return toArray(suite).flatMap((s) => s.type === "test" ? [s] : s.tasks.flatMap((c) => c.type === "test" ? [c] : getTests(c)));
}
function getSuites(suite) {
  return toArray(suite).flatMap((s) => s.type === "suite" ? [s, ...getSuites(s.tasks)] : []);
}
function hasTests(suite) {
  return toArray(suite).some((s) => s.tasks.some((c) => c.type === "test" || hasTests(c)));
}
function hasFailed(suite) {
  return toArray(suite).some((s) => {
    var _a;
    return ((_a = s.result) == null ? void 0 : _a.state) === "fail" || s.type === "suite" && hasFailed(s.tasks);
  });
}
function hasFailedSnapshot(suite) {
  return getTests(suite).some((s) => {
    var _a, _b;
    const message = (_b = (_a = s.result) == null ? void 0 : _a.error) == null ? void 0 : _b.message;
    return message == null ? void 0 : message.match(/Snapshot .* mismatched/);
  });
}
function getNames(task) {
  const names = [task.name];
  let current = task;
  while ((current == null ? void 0 : current.suite) || (current == null ? void 0 : current.file)) {
    current = current.suite || current.file;
    if (current == null ? void 0 : current.name)
      names.unshift(current.name);
  }
  return names;
}

const {
  setTimeout: safeSetTimeout,
  setInterval: safeSetInterval,
  clearInterval: safeClearInterval,
  clearTimeout: safeClearTimeout
} = globalThis;
function withSafeTimers(fn) {
  const currentSetTimeout = globalThis.setTimeout;
  const currentSetInterval = globalThis.setInterval;
  const currentClearInterval = globalThis.clearInterval;
  const currentClearTimeout = globalThis.clearTimeout;
  try {
    globalThis.setTimeout = safeSetTimeout;
    globalThis.setInterval = safeSetInterval;
    globalThis.clearInterval = safeClearInterval;
    globalThis.clearTimeout = safeClearTimeout;
    const result = fn();
    return result;
  } finally {
    globalThis.setTimeout = currentSetTimeout;
    globalThis.setInterval = currentSetInterval;
    globalThis.clearInterval = currentClearInterval;
    globalThis.clearTimeout = currentClearTimeout;
  }
}

const isNode = typeof process !== "undefined" && typeof process.platform !== "undefined";
const isWindows = isNode && process.platform === "win32";
function partitionSuiteChildren(suite) {
  let tasksGroup = [];
  const tasksGroups = [];
  for (const c2 of suite.tasks) {
    if (tasksGroup.length === 0 || c2.concurrent === tasksGroup[0].concurrent) {
      tasksGroup.push(c2);
    } else {
      tasksGroups.push(tasksGroup);
      tasksGroup = [c2];
    }
  }
  if (tasksGroup.length > 0)
    tasksGroups.push(tasksGroup);
  return tasksGroups;
}
function resetModules() {
  const modules = getWorkerState().moduleCache;
  const vitestPaths = [
    /\/vitest\/dist\//,
    /vitest-virtual-\w+\/dist/,
    /@vitest\/dist/
  ];
  modules.forEach((_, path) => {
    if (vitestPaths.some((re) => re.test(path)))
      return;
    modules.delete(path);
  });
}
function getFullName(task) {
  return getNames(task).join(picocolors.exports.dim(" > "));
}
async function ensurePackageInstalled(dependency, promptInstall = !process.env.CI && process.stdout.isTTY) {
  if (isPackageExists(dependency))
    return true;
  process.stderr.write(picocolors.exports.red(`${picocolors.exports.inverse(picocolors.exports.red(" MISSING DEP "))} Can not find dependency '${dependency}'

`));
  if (!promptInstall)
    return false;
  const prompts = await import('./vendor-index.98e769c1.mjs').then(function (n) { return n.i; });
  const { install } = await prompts.prompt({
    type: "confirm",
    name: "install",
    message: picocolors.exports.reset(`Do you want to install ${picocolors.exports.green(dependency)}?`)
  });
  if (install) {
    await (await import('./chunk-install-pkg.3fa50769.mjs')).installPackage(dependency, { dev: true });
    process.stderr.write(picocolors.exports.yellow(`
Package ${dependency} installed, re-run the command to start.
`));
    process.exit(1);
    return true;
  }
  return false;
}
function getCallLastIndex(code) {
  let charIndex = -1;
  let inString = null;
  let startedBracers = 0;
  let endedBracers = 0;
  let beforeChar = null;
  while (charIndex <= code.length) {
    beforeChar = code[charIndex];
    charIndex++;
    const char = code[charIndex];
    const isCharString = char === '"' || char === "'" || char === "`";
    if (isCharString && beforeChar !== "\\") {
      if (inString === char)
        inString = null;
      else if (!inString)
        inString = char;
    }
    if (!inString) {
      if (char === "(")
        startedBracers++;
      if (char === ")")
        endedBracers++;
    }
    if (startedBracers && endedBracers && startedBracers === endedBracers)
      return charIndex;
  }
  return null;
}
class AggregateErrorPonyfill extends Error {
  constructor(errors, message = "") {
    super(message);
    this.errors = [...errors];
  }
}

export { AggregateErrorPonyfill as A, safeClearInterval as B, toArray as C, normalize as D, deepMerge as E, toNamespacedPath as F, ensurePackageInstalled as G, stdout as H, extname as I, isWindows as J, mergeSlashes as K, getType as L, getAllProperties as M, deepClone as N, partitionSuiteChildren as O, hasTests as P, getWorkerState as a, getNames as b, assertTypes as c, dirname as d, getFullName as e, safeSetTimeout as f, getCallLastIndex as g, safeClearTimeout as h, isObject as i, join as j, notNullish as k, basename as l, resolve as m, noop as n, isAbsolute as o, picocolors as p, relative as q, resetModules as r, slash as s, isNode as t, getTests as u, hasFailed as v, withSafeTimers as w, hasFailedSnapshot as x, getSuites as y, safeSetInterval as z };
