"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readPackageJson = readPackageJson;
exports.writePackageJson = writePackageJson;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readPackageJson() {
  const packageJsonPath = _path.default.resolve('package.json');

  if (!_fs.default.existsSync(packageJsonPath)) {
    throw new Error(`Could not read package.json file at ${packageJsonPath}`);
  }

  const jsonContent = _fs.default.readFileSync(packageJsonPath, 'utf8');

  return JSON.parse(jsonContent);
}

function writePackageJson(packageJson) {
  const content = `${JSON.stringify(packageJson, null, 2)}\n`;

  const packageJsonPath = _path.default.resolve('package.json');

  _fs.default.writeFileSync(packageJsonPath, content, 'utf8');
}