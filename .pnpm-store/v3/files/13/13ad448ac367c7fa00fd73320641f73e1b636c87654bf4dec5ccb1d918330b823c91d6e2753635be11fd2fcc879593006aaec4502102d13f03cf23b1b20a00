import { n as normalizeRequestId, i as isNodeBuiltin, b as toFilePath, V as ViteNodeRunner } from './chunk-vite-node-utils.c0a0e1b3.mjs';
import { normalizePath } from 'vite';
import { a as getWorkerState, J as isWindows, K as mergeSlashes, d as dirname, m as resolve, l as basename, L as getType, M as getAllProperties, s as slash } from './chunk-utils-global.79a8b1cc.mjs';
import { existsSync, readdirSync } from 'fs';
import { d as distDir } from './chunk-constants.7b9cfc82.mjs';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _VitestMocker = class {
  constructor(options, moduleCache, request) {
    this.options = options;
    this.moduleCache = moduleCache;
    this.callbacks = {};
    this.root = this.options.root;
    this.request = request;
  }
  get mockMap() {
    return this.options.mockMap;
  }
  on(event, cb) {
    var _a;
    (_a = this.callbacks)[event] ?? (_a[event] = []);
    this.callbacks[event].push(cb);
  }
  emit(event, ...args) {
    (this.callbacks[event] ?? []).forEach((fn) => fn(...args));
  }
  getSuiteFilepath() {
    return getWorkerState().filepath || "global";
  }
  getMocks() {
    const suite = this.getSuiteFilepath();
    const suiteMocks = this.mockMap.get(suite);
    const globalMocks = this.mockMap.get("global");
    return __spreadValues(__spreadValues({}, globalMocks), suiteMocks);
  }
  async resolvePath(id, importer) {
    const path = await this.options.resolveId(id, importer);
    const external = path == null || path.id.includes("/node_modules/") ? id : null;
    return {
      path: normalizeRequestId((path == null ? void 0 : path.id) || id),
      external
    };
  }
  async resolveMocks() {
    await Promise.all(_VitestMocker.pendingIds.map(async (mock) => {
      const { path, external } = await this.resolvePath(mock.id, mock.importer);
      if (mock.type === "unmock")
        this.unmockPath(path);
      if (mock.type === "mock")
        this.mockPath(path, external, mock.factory);
    }));
    _VitestMocker.pendingIds = [];
  }
  async callFunctionMock(dep, mock) {
    var _a;
    const cacheName = `${dep}__mock`;
    const cached = (_a = this.moduleCache.get(cacheName)) == null ? void 0 : _a.exports;
    if (cached)
      return cached;
    const exports = await mock();
    this.emit("mocked", cacheName, { exports });
    return exports;
  }
  getDependencyMock(dep) {
    return this.getMocks()[this.resolveDependency(dep)];
  }
  resolveDependency(dep) {
    return normalizeRequestId(dep.replace(this.root, "")).replace(/^\/@fs\//, isWindows ? "" : "/");
  }
  normalizePath(path) {
    return normalizeRequestId(path.replace(this.root, "")).replace(/^\/@fs\//, isWindows ? "" : "/");
  }
  getFsPath(path, external) {
    if (external)
      return mergeSlashes(`/@fs/${path}`);
    return normalizeRequestId(path.replace(this.root, ""));
  }
  resolveMockPath(mockPath, external) {
    const path = normalizeRequestId(external || mockPath);
    if (external || isNodeBuiltin(mockPath) || !existsSync(mockPath)) {
      const mockDirname = dirname(path);
      const mockFolder = resolve(this.root, "__mocks__", mockDirname);
      if (!existsSync(mockFolder))
        return null;
      const files = readdirSync(mockFolder);
      const baseFilename = basename(path);
      for (const file of files) {
        const [basename2] = file.split(".");
        if (basename2 === baseFilename)
          return resolve(mockFolder, file).replace(this.root, "");
      }
      return null;
    }
    const dir = dirname(path);
    const baseId = basename(path);
    const fullPath = resolve(dir, "__mocks__", baseId);
    return existsSync(fullPath) ? fullPath.replace(this.root, "") : null;
  }
  mockValue(value) {
    if (!_VitestMocker.spyModule) {
      throw new Error("Error: Spy module is not defined. This is likely an internal bug in Vitest. Please report it to https://github.com/vitest-dev/vitest/issues");
    }
    const type = getType(value);
    if (Array.isArray(value))
      return [];
    else if (type !== "Object" && type !== "Module")
      return value;
    const newObj = {};
    const properties = getAllProperties(value);
    for (const k of properties) {
      newObj[k] = this.mockValue(value[k]);
      const type2 = getType(value[k]);
      if (type2.includes("Function") && !value[k]._isMockFunction) {
        _VitestMocker.spyModule.spyOn(newObj, k).mockImplementation(() => void 0);
        Object.defineProperty(newObj[k], "length", { value: 0 });
      }
    }
    Object.setPrototypeOf(newObj, Object.getPrototypeOf(value));
    return newObj;
  }
  unmockPath(path) {
    const suitefile = this.getSuiteFilepath();
    const fsPath = this.normalizePath(path);
    const mock = this.mockMap.get(suitefile);
    if (mock == null ? void 0 : mock[fsPath])
      delete mock[fsPath];
  }
  mockPath(path, external, factory) {
    const suitefile = this.getSuiteFilepath();
    const fsPath = this.normalizePath(path);
    if (!this.mockMap.has(suitefile))
      this.mockMap.set(suitefile, {});
    this.mockMap.get(suitefile)[fsPath] = factory || this.resolveMockPath(path, external);
  }
  async importActual(id, importer) {
    const { path, external } = await this.resolvePath(id, importer);
    const fsPath = this.getFsPath(path, external);
    const result = await this.request(fsPath);
    return result;
  }
  async importMock(id, importer) {
    const { path, external } = await this.resolvePath(id, importer);
    let mock = this.getDependencyMock(path);
    if (mock === void 0)
      mock = this.resolveMockPath(path, external);
    if (mock === null) {
      await this.ensureSpy();
      const fsPath = this.getFsPath(path, external);
      const mod = await this.request(fsPath);
      return this.mockValue(mod);
    }
    if (typeof mock === "function")
      return this.callFunctionMock(path, mock);
    return this.requestWithMock(mock);
  }
  async ensureSpy() {
    if (_VitestMocker.spyModule)
      return;
    _VitestMocker.spyModule = await this.request(`/@fs/${slash(resolve(distDir, "spy.mjs"))}`);
  }
  async requestWithMock(dep) {
    var _a;
    await this.ensureSpy();
    await this.resolveMocks();
    const mock = this.getDependencyMock(dep);
    const callstack = this.request.callstack;
    if (mock === null) {
      const cacheName = `${dep}__mock`;
      const cache = this.moduleCache.get(cacheName);
      if (cache == null ? void 0 : cache.exports)
        return cache.exports;
      const cacheKey = toFilePath(dep, this.root);
      const mod = ((_a = this.moduleCache.get(cacheKey)) == null ? void 0 : _a.exports) || await this.request(dep);
      const exports = this.mockValue(mod);
      this.emit("mocked", cacheName, { exports });
      return exports;
    }
    if (typeof mock === "function" && !callstack.includes(`mock:${dep}`)) {
      callstack.push(`mock:${dep}`);
      const result = await this.callFunctionMock(dep, mock);
      const indexMock = callstack.indexOf(`mock:${dep}`);
      callstack.splice(indexMock, 1);
      return result;
    }
    if (typeof mock === "string" && !callstack.includes(mock))
      dep = mock;
    return this.request(dep);
  }
  queueMock(id, importer, factory) {
    _VitestMocker.pendingIds.push({ type: "mock", id, importer, factory });
  }
  queueUnmock(id, importer) {
    _VitestMocker.pendingIds.push({ type: "unmock", id, importer });
  }
  withRequest(request) {
    return new _VitestMocker(this.options, this.moduleCache, request);
  }
};
let VitestMocker = _VitestMocker;
VitestMocker.pendingIds = [];

async function executeInViteNode(options) {
  const runner = new VitestRunner(options);
  await runner.executeId("/@vite/env");
  const result = [];
  for (const file of options.files)
    result.push(await runner.executeFile(file));
  return result;
}
class VitestRunner extends ViteNodeRunner {
  constructor(options) {
    super(options);
    this.options = options;
    this.entries = /* @__PURE__ */ new Set();
    this.mocker = new VitestMocker(options, this.moduleCache);
  }
  prepareContext(context) {
    const request = context.__vite_ssr_import__;
    const resolveId = context.__vitest_resolve_id__;
    const mocker = this.mocker.withRequest(request);
    mocker.on("mocked", (dep, module) => {
      this.moduleCache.set(dep, module);
    });
    const workerState = getWorkerState();
    if (workerState.filepath && normalizePath(workerState.filepath) === normalizePath(context.__filename)) {
      Object.defineProperty(context.__vite_ssr_import_meta__, "vitest", { get: () => globalThis.__vitest_index__ });
    }
    return Object.assign(context, {
      __vite_ssr_import__: async (dep) => mocker.requestWithMock(await resolveId(dep)),
      __vite_ssr_dynamic_import__: async (dep) => mocker.requestWithMock(await resolveId(dep)),
      __vitest_mocker__: mocker
    });
  }
}

export { VitestRunner as V, executeInViteNode as e };
