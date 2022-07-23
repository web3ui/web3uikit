"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _baseGenerator = require("../baseGenerator");

var _jsPackageManager = require("../../js-package-manager");

const generator = async (packageManager, npmOptions, options) => {
  const [latestRaxVersion] = await packageManager.getVersions('rax');
  const packageJson = packageManager.retrievePackageJson();
  const raxVersion = packageJson.dependencies.rax || latestRaxVersion; // in case Rax project is not detected, `rax` package is not available either

  packageJson.dependencies.rax = packageJson.dependencies.rax || raxVersion; // these packages are required for Welcome story

  packageJson.dependencies['rax-image'] = packageJson.dependencies['rax-image'] || raxVersion;
  packageJson.dependencies['rax-link'] = packageJson.dependencies['rax-link'] || raxVersion;
  packageJson.dependencies['rax-text'] = packageJson.dependencies['rax-text'] || raxVersion;
  packageJson.dependencies['rax-view'] = packageJson.dependencies['rax-view'] || raxVersion;
  (0, _jsPackageManager.writePackageJson)(packageJson);
  await (0, _baseGenerator.baseGenerator)(packageManager, npmOptions, options, 'rax', {
    extraPackages: ['rax']
  });
};

var _default = generator;
exports.default = _default;