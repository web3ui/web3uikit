"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exec = exports.createAndInit = void 0;

require("core-js/modules/es.promise.js");

var _path = _interopRequireDefault(require("path"));

var _fsExtra = require("fs-extra");

var _shelljs = _interopRequireDefault(require("shelljs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _configs = require("./configs");

var _versions = _interopRequireDefault(require("../versions"));

const _excluded = ["name", "version"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const logger = console;
const useLocalSbCli = true;

const exec = async (command, options = {}, {
  startMessage,
  errorMessage
} = {}) => {
  if (startMessage) {
    logger.info(startMessage);
  }

  logger.debug(command);
  return new Promise((resolve, reject) => {
    const defaultOptions = {
      silent: true
    };

    const child = _shelljs.default.exec(command, Object.assign({}, defaultOptions, options, {
      async: true
    }));

    child.stderr.pipe(process.stderr);
    child.stdout.pipe(process.stdout);
    child.on('exit', code => {
      if (code === 0) {
        resolve(undefined);
      } else {
        logger.error(_chalk.default.red(`An error occurred while executing: \`${command}\``));
        logger.log(errorMessage);
        reject(new Error(`command exited with code: ${code}: `));
      }
    });
  });
};

exports.exec = exec;

const addPackageResolutions = async ({
  cwd
}) => {
  logger.info(`🔢 Adding package resolutions:`);

  const packageJsonPath = _path.default.join(cwd, 'package.json');

  const packageJson = await (0, _fsExtra.readJSON)(packageJsonPath);
  packageJson.resolutions = _versions.default;
  await (0, _fsExtra.writeJSON)(packageJsonPath, packageJson, {
    spaces: 2
  });
};

const installYarn2 = async ({
  cwd,
  pnp,
  name
}) => {
  const command = [`yarn set version berry`, `yarn config set enableGlobalCache true`, `yarn config set nodeLinker ${pnp ? 'pnp' : 'node-modules'}`]; // FIXME: Some dependencies used by CRA aren't listed in its package.json
  // Next line is a hack to remove as soon as CRA will have added these missing deps
  // for details see https://github.com/facebook/create-react-app/pull/11751

  if ([_configs.cra.name, _configs.cra_typescript.name].includes(name)) {
    command.push(`yarn config set packageExtensions --json '{ "babel-preset-react-app@10.0.x": { "dependencies": { "@babel/plugin-proposal-private-property-in-object": "^7.16.0" } } }'`);
  }

  await exec(command.join(' && '), {
    cwd
  }, {
    startMessage: `🧶 Installing Yarn 2`,
    errorMessage: `🚨 Installing Yarn 2 failed`
  });
};

const configureYarn2ForE2E = async ({
  cwd
}) => {
  const command = [// ⚠️ Need to set registry because Yarn 2 is not using the conf of Yarn 1 (URL is hardcoded in CircleCI config.yml)
  `yarn config set npmScopes --json '{ "storybook": { "npmRegistryServer": "http://localhost:6000/" } }'`, // Some required magic to be able to fetch deps from local registry
  `yarn config set unsafeHttpWhitelist --json '["localhost"]'`, // Disable fallback mode to make sure everything is required correctly
  `yarn config set pnpFallbackMode none`, // We need to be able to update lockfile when bootstrapping the examples
  `yarn config set enableImmutableInstalls false`, // Discard all YN0013 - FETCH_NOT_CACHED messages
  `yarn config set logFilters --json '[ { "code": "YN0013", "level": "discard" } ]'`].join(' && ');
  await exec(command, {
    cwd
  }, {
    startMessage: `🎛 Configuring Yarn 2`,
    errorMessage: `🚨 Configuring Yarn 2 failed`
  });
};

const generate = async ({
  cwd,
  name,
  appName,
  version,
  generator
}) => {
  const command = generator.replace(/{{appName}}/g, appName).replace(/{{version}}/g, version);
  await exec(command, {
    cwd
  }, {
    startMessage: `🏗 Bootstrapping ${name} project (this might take a few minutes)`,
    errorMessage: `🚨 Bootstrapping ${name} failed`
  });
};

const initStorybook = async ({
  cwd,
  autoDetect = true,
  name,
  e2e
}) => {
  const type = autoDetect ? '' : `--type ${name}`;
  const linkable = e2e ? '' : '--linkable';
  const sbCLICommand = useLocalSbCli ? `node ${_path.default.join(__dirname, '../../esm/generate')}` : `yarn dlx -p @storybook/cli sb`;
  const command = `${sbCLICommand} init --yes ${type} ${linkable}`;
  await exec(command, {
    cwd
  }, {
    startMessage: `🎨 Initializing Storybook with @storybook/cli`,
    errorMessage: `🚨 Storybook initialization failed`
  });
};

const addRequiredDeps = async ({
  cwd,
  additionalDeps
}) => {
  // Remove any lockfile generated without Yarn 2
  _shelljs.default.rm('-f', _path.default.join(cwd, 'package-lock.json'), _path.default.join(cwd, 'yarn.lock'));

  const command = additionalDeps && additionalDeps.length > 0 ? `yarn add -D ${additionalDeps.join(' ')}` : `yarn install`;
  await exec(command, {
    cwd
  }, {
    startMessage: `🌍 Adding needed deps & installing all deps`,
    errorMessage: `🚨 Dependencies installation failed`
  });
};

const addTypescript = async ({
  cwd
}) => {
  logger.info(`👮 Adding typescript and tsconfig.json`);

  try {
    await exec(`yarn add -D typescript@latest`, {
      cwd
    });
    const tsConfig = {
      compilerOptions: {
        baseUrl: '.',
        esModuleInterop: true,
        jsx: 'preserve',
        skipLibCheck: true,
        strict: true
      },
      include: ['src/*']
    };

    const tsConfigJsonPath = _path.default.resolve(cwd, 'tsconfig.json');

    await (0, _fsExtra.writeJSON)(tsConfigJsonPath, tsConfig, {
      encoding: 'utf8',
      spaces: 2
    });
  } catch (e) {
    logger.error(`🚨 Creating tsconfig.json failed`);
    throw e;
  }
};

const doTask = async (task, options, condition = true) => {
  if (condition) {
    await task(options);
    logger.log();
  }
};

const createAndInit = async (cwd, _ref, {
  e2e,
  pnp
}) => {
  let {
    name,
    version
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const options = Object.assign({
    name,
    version,
    appName: _path.default.basename(cwd),
    creationPath: _path.default.join(cwd, '..'),
    cwd,
    e2e,
    pnp
  }, rest);
  logger.log();
  logger.info(`🏃 Starting for ${name} ${version}`);
  logger.log();
  await doTask(generate, Object.assign({}, options, {
    cwd: options.creationPath
  }));

  if (e2e) {
    await doTask(addPackageResolutions, options);
  }

  await doTask(installYarn2, options);
  await doTask(configureYarn2ForE2E, options, e2e);
  await doTask(addTypescript, options, !!options.typescript);
  await doTask(addRequiredDeps, options);
  await doTask(initStorybook, options);
};

exports.createAndInit = createAndInit;