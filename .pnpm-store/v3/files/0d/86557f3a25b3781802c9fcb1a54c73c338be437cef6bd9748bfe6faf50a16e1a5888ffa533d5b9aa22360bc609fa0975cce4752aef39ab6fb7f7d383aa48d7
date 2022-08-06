"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.storybookAddonScope = exports.getPackageName = exports.getPackageArg = exports.getInstalledStorybookVersion = exports.addStorybookAddonToFile = void 0;

require("core-js/modules/es.promise.js");

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _crossSpawn = require("cross-spawn");

var _helpers = require("./helpers");

var _jsPackageManager = require("./js-package-manager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = console;
const storybookAddonScope = '@storybook/addon-';
exports.storybookAddonScope = storybookAddonScope;

const isAddon = async (packageManager, name) => {
  try {
    await packageManager.latestVersion(name);
    return true;
  } catch (e) {
    return false;
  }
};

const isStorybookAddon = async (packageManager, name) => isAddon(packageManager, `${storybookAddonScope}${name}`);

const getPackageName = (addonName, isOfficialAddon) => isOfficialAddon ? storybookAddonScope + addonName : addonName;

exports.getPackageName = getPackageName;

const getInstalledStorybookVersion = packageJson => packageJson.devDependencies[// This only considers the first occurrence.
Object.keys(packageJson.devDependencies).find(devDep => /@storybook/.test(devDep))] || false;

exports.getInstalledStorybookVersion = getInstalledStorybookVersion;

const getPackageArg = (addonName, isOfficialAddon, packageJson) => {
  if (isOfficialAddon) {
    const addonNameNoTag = addonName.split('@')[0];
    const installedStorybookVersion = getInstalledStorybookVersion(packageJson);
    return installedStorybookVersion ? `${addonNameNoTag}@${getInstalledStorybookVersion(packageJson)}` : addonName;
  }

  return addonName;
};

exports.getPackageArg = getPackageArg;

const installAddon = (packageManager, addonName, isOfficialAddon) => {
  const prepareDone = (0, _helpers.commandLog)(`Preparing to install the ${addonName} Storybook addon`);
  prepareDone();
  logger.log();
  const packageArg = getPackageArg(addonName, isOfficialAddon, packageManager.retrievePackageJson());
  logger.log();
  const installDone = (0, _helpers.commandLog)(`Installing the ${addonName} Storybook addon`);

  try {
    packageManager.addDependencies({}, [packageArg]);
  } catch (e) {
    installDone(`Something went wrong installing the addon: "${getPackageName(addonName, isOfficialAddon)}"`);
    logger.log();
    process.exit(1);
  }

  installDone();
};

const addStorybookAddonToFile = (addonName, addonsFile, isOfficialAddon) => {
  const addonNameNoTag = addonName.split('@')[0];
  const alreadyRegistered = addonsFile.find(line => line.includes(`${addonNameNoTag}/manager`));

  if (alreadyRegistered) {
    return addonsFile;
  }

  const latestImportIndex = addonsFile.reduce((prev, curr, currIndex) => curr.startsWith('import') && curr.includes('register') ? currIndex : prev, -1);
  return [...addonsFile.slice(0, latestImportIndex + 1), `import '${getPackageName(addonNameNoTag, isOfficialAddon)}/manager';`, ...addonsFile.slice(latestImportIndex + 1)];
};

exports.addStorybookAddonToFile = addStorybookAddonToFile;
const LEGACY_CONFIGS = ['addons', 'config', 'presets'];

const postinstallAddon = async (addonName, isOfficialAddon) => {
  let skipMsg = null;

  if (!isOfficialAddon) {
    skipMsg = 'unofficial addon';
  } else if (!_fs.default.existsSync('.storybook')) {
    skipMsg = 'no .storybook config';
  } else {
    skipMsg = 'no codmods found';
    LEGACY_CONFIGS.forEach(config => {
      try {
        const codemod = require.resolve(`${getPackageName(addonName, isOfficialAddon)}/postinstall/${config}.js`);

        (0, _helpers.commandLog)(`Running postinstall script for ${addonName}`)();

        let configFile = _path.default.join('.storybook', `${config}.ts`);

        if (!_fs.default.existsSync(configFile)) {
          configFile = _path.default.join('.storybook', `${config}.js`);

          if (!_fs.default.existsSync(configFile)) {
            _fs.default.writeFileSync(configFile, '', 'utf8');
          }
        }

        (0, _crossSpawn.sync)('npx', ['jscodeshift', '-t', codemod, configFile], {
          stdio: 'inherit'
        });
        skipMsg = null;
      } catch (err) {// resolve failed, skip
      }
    });
  }

  if (skipMsg) {
    (0, _helpers.commandLog)(`Skipping postinstall for ${addonName}, ${skipMsg}`)();
  }
};

async function add(addonName, options) {
  const packageManager = _jsPackageManager.JsPackageManagerFactory.getPackageManager(options.useNpm);

  const addonCheckDone = (0, _helpers.commandLog)(`Verifying that ${addonName} is an addon`);
  const isOfficialAddon = await isStorybookAddon(packageManager, addonName);

  if (!isOfficialAddon) {
    if (!(await isAddon(packageManager, addonName))) {
      addonCheckDone(`The provided package was not a Storybook addon: ${addonName}.`);
      return;
    }
  }

  addonCheckDone();
  installAddon(packageManager, addonName, isOfficialAddon);

  if (!options.skipPostinstall) {
    await postinstallAddon(addonName, isOfficialAddon);
  }
}