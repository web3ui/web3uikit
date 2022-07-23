'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function defineConfig(config) {
  return config;
}

exports.configDefaults = configDefaults;
exports.defineConfig = defineConfig;
