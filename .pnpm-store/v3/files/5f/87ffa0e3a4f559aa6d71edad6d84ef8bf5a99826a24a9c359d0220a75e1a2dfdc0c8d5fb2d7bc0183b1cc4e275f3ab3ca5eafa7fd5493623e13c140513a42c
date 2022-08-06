import { m as resolve, a as getWorkerState } from './chunk-utils-global.79a8b1cc.mjs';
import { c as createBirpc, M as ModuleCacheMap } from './chunk-vite-node-utils.c0a0e1b3.mjs';
import { d as distDir } from './chunk-constants.7b9cfc82.mjs';
import { e as executeInViteNode } from './chunk-runtime-mocker.2f3cbfe5.mjs';
import { r as rpc } from './chunk-runtime-rpc.5e78af38.mjs';
import 'tty';
import 'local-pkg';
import 'path';
import 'module';
import 'url';
import 'vm';
import 'fs';
import 'assert';
import 'util';
import 'debug';
import 'vite';

let _viteNode;
const moduleCache = new ModuleCacheMap();
const mockMap = /* @__PURE__ */ new Map();
async function startViteNode(ctx) {
  if (_viteNode)
    return _viteNode;
  const processExit = process.exit;
  process.on("beforeExit", (code) => {
    rpc().onWorkerExit(code);
  });
  process.exit = (code = process.exitCode || 0) => {
    rpc().onWorkerExit(code);
    return processExit(code);
  };
  process.on("unhandledRejection", (err) => {
    rpc().onUnhandledRejection(err);
  });
  const { config } = ctx;
  const { run: run2 } = (await executeInViteNode({
    files: [
      resolve(distDir, "entry.mjs")
    ],
    fetchModule(id) {
      return rpc().fetch(id);
    },
    resolveId(id, importer) {
      return rpc().resolveId(id, importer);
    },
    moduleCache,
    mockMap,
    interopDefault: config.deps.interopDefault ?? true,
    root: config.root,
    base: config.base
  }))[0];
  _viteNode = { run: run2 };
  return _viteNode;
}
function init(ctx) {
  if (typeof __vitest_worker__ !== "undefined" && ctx.config.threads && ctx.config.isolate)
    throw new Error(`worker for ${ctx.files.join(",")} already initialized by ${getWorkerState().ctx.files.join(",")}. This is probably an internal bug of Vitest.`);
  const { config, port, workerId, poolId } = ctx;
  process.env.VITEST_WORKER_ID = String(workerId);
  process.env.VITEST_POOL_ID = String(poolId);
  globalThis.__vitest_worker__ = {
    ctx,
    moduleCache,
    config,
    mockMap,
    rpc: createBirpc({}, {
      eventNames: ["onUserConsoleLog", "onFinished", "onCollected", "onWorkerExit"],
      post(v) {
        port.postMessage(v);
      },
      on(fn) {
        port.addListener("message", fn);
      }
    })
  };
  if (ctx.invalidates) {
    ctx.invalidates.forEach((i) => {
      moduleCache.delete(i);
      moduleCache.delete(`${i}__mock`);
    });
  }
  ctx.files.forEach((i) => moduleCache.delete(i));
}
async function run(ctx) {
  init(ctx);
  const { run: run2 } = await startViteNode(ctx);
  return run2(ctx.files, ctx.config);
}

export { run };
