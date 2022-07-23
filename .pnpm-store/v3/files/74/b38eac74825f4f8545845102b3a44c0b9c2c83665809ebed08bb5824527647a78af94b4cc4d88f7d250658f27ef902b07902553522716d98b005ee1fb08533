"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _path = _interopRequireDefault(require("path"));

var _semver = _interopRequireDefault(require("@storybook/semver"));

var _angularHelpers = require("./angular-helpers");

var _helpers = require("../../helpers");

var _baseGenerator = require("../baseGenerator");

var _project_types = require("../../project_types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function editAngularAppTsConfig() {
  const tsConfigJson = (0, _angularHelpers.getAngularAppTsConfigJson)();
  const glob = '**/*.stories.*';

  if (!tsConfigJson) {
    return;
  }

  const {
    exclude = []
  } = tsConfigJson;

  if (exclude.includes(glob)) {
    return;
  }

  tsConfigJson.exclude = [...exclude, glob];
  (0, _helpers.writeFileAsJson)((0, _angularHelpers.getAngularAppTsConfigPath)(), tsConfigJson);
}

const generator = async (packageManager, npmOptions, options) => {
  var _semver$coerce;

  (0, _angularHelpers.checkForProjects)();
  const angularVersion = (_semver$coerce = _semver.default.coerce(packageManager.retrievePackageJson().dependencies['@angular/core'])) === null || _semver$coerce === void 0 ? void 0 : _semver$coerce.version;

  const isWebpack5 = _semver.default.gte(angularVersion, '12.0.0');

  const updatedOptions = isWebpack5 ? Object.assign({}, options, {
    builder: _project_types.CoreBuilder.Webpack5
  }) : options;
  await (0, _baseGenerator.baseGenerator)(packageManager, npmOptions, updatedOptions, 'angular', {
    extraPackages: ['@compodoc/compodoc'],
    addScripts: false
  });
  (0, _helpers.copyTemplate)(__dirname);
  editAngularAppTsConfig();
  (0, _angularHelpers.editStorybookTsConfig)(_path.default.resolve('./.storybook/tsconfig.json')); // edit scripts to generate docs

  const tsConfigFile = await (0, _angularHelpers.getBaseTsConfigName)();
  packageManager.addScripts({
    'docs:json': `compodoc -p ./${tsConfigFile} -e json -d .`
  });
  packageManager.addStorybookCommandInScripts({
    port: 6006,
    preCommand: 'docs:json'
  });
};

var _default = generator;
exports.default = _default;