import { existsSync, promises } from 'fs';
import { createRequire } from 'module';
import { pathToFileURL } from 'url';
import { C as toArray, m as resolve } from './chunk-utils-global.79a8b1cc.mjs';

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

function pLimit(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}

	const queue = new Queue();
	let activeCount = 0;

	const next = () => {
		activeCount--;

		if (queue.size > 0) {
			queue.dequeue()();
		}
	};

	const run = async (fn, resolve, args) => {
		activeCount++;

		const result = (async () => fn(...args))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (fn, resolve, args) => {
		queue.enqueue(run.bind(undefined, fn, resolve, args));

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// when the run function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency && queue.size > 0) {
				queue.dequeue()();
			}
		})();
	};

	const generator = (fn, ...args) => new Promise(resolve => {
		enqueue(fn, resolve, args);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value: () => {
				queue.clear();
			},
		},
	});

	return generator;
}

const defaultInclude = ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"];
const defaultExclude = ["**/node_modules/**", "**/dist/**", "**/cypress/**", "**/.{idea,git,cache,output,temp}/**"];
const defaultCoverageExcludes = [
  "coverage/**",
  "packages/*/test{,s}/**",
  "**/*.d.ts",
  "cypress/**",
  "test{,s}/**",
  "test{,-*}.{js,cjs,mjs,ts,tsx,jsx}",
  "**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}",
  "**/__tests__/**",
  "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc}.config.{js,cjs,mjs,ts}",
  "**/.{eslint,mocha,prettier}rc.{js,cjs,yml}"
];
const coverageConfigDefaults = {
  enabled: false,
  clean: true,
  cleanOnRerun: false,
  reportsDirectory: "./coverage",
  excludeNodeModules: true,
  exclude: defaultCoverageExcludes,
  reporter: ["text", "html"],
  allowExternal: false,
  extension: [".js", ".cjs", ".mjs", ".ts", ".tsx", ".jsx", ".vue", ".svelte"]
};
const fakeTimersDefaults = {
  loopLimit: 1e4,
  shouldClearNativeTimers: true,
  toFake: [
    "setTimeout",
    "clearTimeout",
    "setInterval",
    "clearInterval",
    "setImmediate",
    "clearImmediate",
    "Date"
  ]
};
const config = {
  allowOnly: !process.env.CI,
  watch: !process.env.CI,
  globals: false,
  environment: "node",
  threads: true,
  clearMocks: false,
  restoreMocks: false,
  mockReset: false,
  include: defaultInclude,
  exclude: defaultExclude,
  testTimeout: 5e3,
  hookTimeout: 1e4,
  isolate: true,
  watchExclude: ["**/node_modules/**", "**/dist/**"],
  forceRerunTriggers: [],
  update: false,
  reporters: [],
  silent: false,
  api: false,
  ui: false,
  uiBase: "/__vitest__/",
  open: true,
  css: {
    include: [/\.module\./]
  },
  coverage: coverageConfigDefaults,
  fakeTimers: fakeTimersDefaults,
  maxConcurrency: 5
};
const configDefaults = Object.freeze(config);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function resolveC8Options(options, root) {
  const resolved = __spreadValues(__spreadValues({}, configDefaults.coverage), options);
  resolved.reporter = toArray(resolved.reporter);
  resolved.reportsDirectory = resolve(root, resolved.reportsDirectory);
  resolved.tempDirectory = process.env.NODE_V8_COVERAGE || resolve(resolved.reportsDirectory, "tmp");
  return resolved;
}
async function cleanCoverage(options, clean = true) {
  if (clean && existsSync(options.reportsDirectory))
    await promises.rm(options.reportsDirectory, { recursive: true, force: true });
  if (!existsSync(options.tempDirectory))
    await promises.mkdir(options.tempDirectory, { recursive: true });
}
const require2 = createRequire(import.meta.url);
function takeCoverage() {
  const v8 = require2("v8");
  if (v8.takeCoverage == null)
    console.warn("[Vitest] takeCoverage is not available in this NodeJs version.\nCoverage could be incomplete. Update to NodeJs 14.18.");
  else
    v8.takeCoverage();
}
async function reportCoverage(ctx) {
  takeCoverage();
  const createReport = require2("c8/lib/report");
  const report = createReport(ctx.config.coverage);
  const sourceMapMeta = {};
  await Promise.all(Array.from(ctx.vitenode.fetchCache.entries()).filter((i) => !i[0].includes("/node_modules/")).map(async ([file, { result }]) => {
    const map = result.map;
    if (!map)
      return;
    const url = pathToFileURL(file).href;
    let code;
    try {
      code = (await promises.readFile(file)).toString();
    } catch {
    }
    const sources = [url];
    sourceMapMeta[url] = {
      source: result.code,
      map: __spreadProps(__spreadValues({
        sourcesContent: code ? [code] : void 0
      }, map), {
        sources
      })
    };
  }));
  const offset = 224;
  report._getSourceMap = (coverage) => {
    const path = pathToFileURL(coverage.url).href;
    const data = sourceMapMeta[path];
    if (!data)
      return {};
    return {
      sourceMap: {
        sourcemap: data.map
      },
      source: Array(offset).fill(".").join("") + data.source
    };
  };
  await report.run();
  if (ctx.config.coverage.enabled) {
    if (ctx.config.coverage["100"]) {
      ctx.config.coverage.lines = 100;
      ctx.config.coverage.functions = 100;
      ctx.config.coverage.branches = 100;
      ctx.config.coverage.statements = 100;
    }
    const { checkCoverages } = require2("c8/lib/commands/check-coverage");
    await checkCoverages(ctx.config.coverage, report);
  }
}

export { cleanCoverage as a, reportCoverage as b, configDefaults as c, pLimit as p, resolveC8Options as r, takeCoverage as t };
