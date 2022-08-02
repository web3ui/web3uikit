"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkForProjects = checkForProjects;
exports.editStorybookTsConfig = editStorybookTsConfig;
exports.getAngularAppTsConfigJson = getAngularAppTsConfigJson;
exports.getAngularAppTsConfigPath = getAngularAppTsConfigPath;
exports.getBaseTsConfigName = getBaseTsConfigName;
exports.getDefaultProjectName = getDefaultProjectName;

require("core-js/modules/es.promise.js");

var path = _interopRequireWildcard(require("path"));

var fs = _interopRequireWildcard(require("fs"));

var _fsExtra = require("fs-extra");

var _helpers = require("../../helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getAngularAppTsConfigPath() {
  const angularJson = (0, _helpers.readFileAsJson)('angular.json', true);
  const defaultProject = getDefaultProjectName(angularJson);
  const tsConfigPath = angularJson.projects[defaultProject].architect.build.options.tsConfig;

  if (!tsConfigPath || !fs.existsSync(path.resolve(tsConfigPath))) {
    return false;
  }

  return tsConfigPath;
}

function getAngularAppTsConfigJson() {
  const tsConfigPath = getAngularAppTsConfigPath();

  if (!tsConfigPath) {
    return false;
  }

  return (0, _helpers.readFileAsJson)(tsConfigPath, true);
}

function setStorybookTsconfigExtendsPath(tsconfigJson) {
  const angularProjectTsConfigPath = getAngularAppTsConfigPath();
  const newTsconfigJson = Object.assign({}, tsconfigJson);
  newTsconfigJson.extends = `../${angularProjectTsConfigPath}`;
  return newTsconfigJson;
}

function editStorybookTsConfig(tsconfigPath) {
  let tsConfigJson;

  try {
    tsConfigJson = (0, _helpers.readFileAsJson)(tsconfigPath);
  } catch (e) {
    if (e.name === 'SyntaxError' && e.message.indexOf('Unexpected token /') > -1) {
      throw new Error(`Comments are disallowed in ${tsconfigPath}`);
    }

    throw e;
  }

  tsConfigJson = setStorybookTsconfigExtendsPath(tsConfigJson);
  (0, _helpers.writeFileAsJson)(tsconfigPath, tsConfigJson);
}

function getDefaultProjectName(angularJson) {
  const {
    defaultProject,
    projects
  } = angularJson;

  if (projects !== null && projects !== void 0 && projects.storybook) {
    return 'storybook';
  }

  if (defaultProject) {
    return defaultProject;
  }

  const firstProjectName = projects ? Object.keys(projects)[0] : undefined;

  if (firstProjectName) {
    return firstProjectName;
  }

  return undefined;
}

function checkForProjects() {
  const {
    projects
  } = (0, _helpers.readFileAsJson)('angular.json', true);

  if (!projects || Object.keys(projects).length === 0) {
    throw new Error('Could not find a project in your Angular workspace. \nAdd a project and re-run the installation');
  }
}

async function getBaseTsConfigName() {
  return (await (0, _fsExtra.pathExists)('./tsconfig.base.json')) ? 'tsconfig.base.json' : 'tsconfig.json';
}