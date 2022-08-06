const { promises: fs } = require("fs");
const { dirname } = require("path");

const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

// - no stdout on postinstall
// - dependencies installs in alphabetical order so this package needs to be named after 'r'
// $ cat $(yarn cache dir)/npm-react-scripts-5.0.1-*/node_modules/react-scripts/config/webpack.config.js | grep '.override'

/**
 * write debug log
 * @param {string} input
 */
async function debug(input) {
  const date = new Date().toUTCString();
  const write = `[${date}]: ${input}`;
  await fs.writeFile(`${__dirname}/debug.txt`, write + "\n", {
    flag: "a+",
  });
}

/**
 * modify `webpack.config.js` of `react-scripts` to make it work with `webpack5`
 * @param {string} folder path to folder of `react-scripts`
 */
async function modify(folder) {
  // react-scripts/package.json
  try {
    const path = `${folder}/package.json`;

    await fs.access(path);
    const pkg = JSON.parse(await fs.readFile(path, "utf-8"));

    const version = parseInt(pkg.version);
    if (version < 5) {
      await debug("v4 found - no polyfill needed");
      return;
    }
    if (version > 5) {
      await debug("> v5 found - script only designed to polyfill v5");
      return;
    }
  } catch (ex) {
    await debug(ex);
    return;
  }

  // react-scripts/webpack.config.js
  const path = `${folder}/config/webpack.config.js`;
  try {
    await fs.access(path);
  } catch (ex) {
    await debug(JSON.stringify(ex));
    return;
  }
  const config = await fs.readFile(path, "utf-8");

  // already modified
  if (config.includes("const shouldUseSourceMap = false;")) {
    await debug(`already modified - ${path}`);
    return;
  }

  // GENERATE_SOURCEMAP=false
  let mod = config.replace(
    "const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';",
    "const shouldUseSourceMap = false;"
  );

  // callback to our `override` function
  mod = mod.replace(
    "module.exports = function (webpackEnv) {",
    "const config = function (webpackEnv) {"
  );
  const pkg = JSON.parse(
    await fs.readFile(__dirname + "/package.json", "utf-8")
  );
  mod += `
try {
  require.resolve('${pkg.name}');
  module.exports = require('${pkg.name}').override(config);
} catch(ex) {
  module.exports = config;
}`;

  // backup original
  await fs.writeFile(
    path.replace("webpack.config.js", "webpack.config.backup.js"),
    config
  );

  // save modified to node_modules and cache
  await fs.writeFile(path, mod);
  await debug(`success - ${path}`);
}

/**
 * intercept and override config
 * @param {Function} fn
 */
function override(fn) {
  const Polyfill = require("node-polyfill-webpack-plugin");
  const original = fn;

  fn = function (arguments) {
    /** @type {import('webpack').Configuration} */
    const config = original.apply(this, [arguments]);
    config.plugins = [...config.plugins, new Polyfill()];
    return config;
  };

  return fn;
}

// export
module.exports = { override };

/**
 * find `react-scripts` in the executors cache
 * @returns {string[]} paths to `react-scripts` in cache
 */
async function fromCachePath() {
  try {
    let { stdout: path } = await exec("yarn cache dir");
    path = path.trim();

    const folders = await fs.readdir(path);
    const entries = (folders || [""]).filter((item) =>
      item.includes("npm-react-scripts-5")
    );

    if (!entries.length) {
      await debug("no react-scripts found in cache");
      return [];
    }

    return entries.map((entry) => {
      return `${path}/${entry}/node_modules/react-scripts`;
    });
  } catch (ex) {
    await debug(ex);
  }
  return [];
}

/**
 * from `node_modules` path
 * @return {string} path to `react-scripts` in `node_modules`
 */
async function fromModulePath() {
  try {
    return dirname(require.resolve("react-scripts/package.json"));
  } catch (ex) {
    await debug("skip - not a CRA project");
  }
}

// entry point
if (!module.parent) {
  (async () => {
    const mod = await fromModulePath();
    if (!mod) return;
    await modify(mod);

    const caches = await fromCachePath();
    for (const cache of caches) {
      await modify(cache);
    }
  })();
}
