"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _path = _interopRequireDefault(require("path"));

var _crossSpawn = require("cross-spawn");

var _codemod = require("@storybook/codemod");

var _helpers = require("../../helpers");

var _jsPackageManager = require("../../js-package-manager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */
async function updatePackage(packageManager, devDependencies, oldName, newName) {
  if (devDependencies[oldName]) {
    delete devDependencies[oldName];
    devDependencies[newName] = await packageManager.getVersion(newName);
  }
}

async function updatePackageJson(packageManager, npmOptions) {
  const packageJson = packageManager.retrievePackageJson();
  const {
    devDependencies
  } = packageJson;
  const [actionsVersion, linksVersion] = await packageManager.getVersions('@storybook/addon-actions', '@storybook/addon-links');
  devDependencies['@storybook/addon-actions'] = actionsVersion;
  devDependencies['@storybook/addon-links'] = linksVersion;
  await Promise.all(Object.keys(_codemod.packageNames).map(oldName => {
    const newName = _codemod.packageNames[oldName];
    return updatePackage(packageManager, devDependencies, oldName, newName);
  }));

  if (!devDependencies['@storybook/react'] && !devDependencies['@storybook/react-native']) {
    throw new Error('Expected to find `@kadira/[react-native]-storybook` in devDependencies');
  }

  (0, _jsPackageManager.writePackageJson)(packageJson);
  const babelDependencies = await (0, _helpers.getBabelDependencies)(packageManager, packageJson);

  if (babelDependencies.length > 0) {
    packageManager.addDependencies(Object.assign({}, npmOptions, {
      packageJson
    }), babelDependencies);
  }
}

function updateSourceCode(parser) {
  const jscodeshiftPath = _path.default.dirname(require.resolve('jscodeshift'));

  const jscodeshiftCommand = _path.default.join(jscodeshiftPath, 'bin', 'jscodeshift.sh');

  ['update-organisation-name.js', 'move-builtin-addons.js'].forEach(codemod => {
    const codemodPath = _path.default.join(_path.default.dirname(require.resolve('@storybook/codemod')), 'transforms', codemod);

    const args = ['-t', codemodPath, '--silent', '--ignore-pattern', '"node_modules|dist"', '.'];
    if (parser) args.push('--parser', parser);
    (0, _crossSpawn.sync)(jscodeshiftCommand, args, {
      stdio: 'inherit'
    });
  });
}

var _default = async (packageManager, parser, npmOptions) => {
  await updatePackageJson(packageManager, npmOptions);
  updateSourceCode(parser);
};

exports.default = _default;