"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = void 0;

require("core-js/modules/es.promise.js");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _crossSpawn = require("cross-spawn");

var _nodeLogger = require("@storybook/node-logger");

var _scripts = require("./repro-generators/scripts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const link = async ({
  target,
  local
}) => {
  const storybookDir = process.cwd();

  try {
    const packageJson = JSON.parse(_fsExtra.default.readFileSync('package.json', 'utf8'));
    if (packageJson.name !== '@storybook/root') throw new Error();
  } catch {
    throw new Error('Expected to run link from the root of the storybook monorepo');
  }

  let reproDir = target;

  let reproName = _path.default.basename(target);

  if (!local) {
    const reprosDir = _path.default.join(storybookDir, '../storybook-repros');

    _nodeLogger.logger.info(`Ensuring directory ${reprosDir}`);

    _fsExtra.default.ensureDirSync(reprosDir);

    _nodeLogger.logger.info(`Cloning ${target}`);

    await (0, _scripts.exec)(`git clone ${target}`, {
      cwd: reprosDir
    }); // Extract a repro name from url given as input (take the last part of the path and remove the extension)

    reproName = _path.default.basename(target, _path.default.extname(target));
    reproDir = _path.default.join(reprosDir, reproName);
  }

  const version = (0, _crossSpawn.sync)('yarn', ['--version'], {
    cwd: reproDir,
    stdio: 'pipe'
  }).stdout.toString();

  if (!/^[23]\./.test(version)) {
    _nodeLogger.logger.warn(`🚨 Expected yarn 2 or 3 in ${reproDir}!`);

    _nodeLogger.logger.warn('');

    _nodeLogger.logger.warn('Please set it up with `yarn set version berry`,');

    _nodeLogger.logger.warn(`then link '${reproDir}' with the '--local' flag.`);

    return;
  }

  _nodeLogger.logger.info(`Linking ${reproDir}`);

  await (0, _scripts.exec)(`yarn link --all ${storybookDir}`, {
    cwd: reproDir
  });

  _nodeLogger.logger.info(`Installing ${reproName}`);

  await (0, _scripts.exec)(`yarn install`, {
    cwd: reproDir
  }); // ⚠️ TODO: Fix peer deps in `@storybook/preset-create-react-app`

  _nodeLogger.logger.info(`Magic stuff related to @storybook/preset-create-react-app, we need to fix peerDependencies`);

  await (0, _scripts.exec)(`yarn add -D webpack-hot-middleware`, {
    cwd: reproDir
  });

  _nodeLogger.logger.info(`Running ${reproName} storybook`);

  await (0, _scripts.exec)(`yarn run storybook`, {
    cwd: reproDir
  });
};

exports.link = link;