"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NPMProxy = void 0;

var _semver = _interopRequireDefault(require("@storybook/semver"));

var _JsPackageManager = require("./JsPackageManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NPMProxy extends _JsPackageManager.JsPackageManager {
  constructor(...args) {
    super(...args);
    this.type = 'npm';
    this.installArgs = void 0;
  }

  initPackageJson() {
    return this.executeCommand('npm', ['init', '-y']);
  }

  getRunStorybookCommand() {
    return 'npm run storybook';
  }

  getRunCommand(command) {
    return `npm run ${command}`;
  }

  getInstallArgs() {
    if (!this.installArgs) {
      const version = this.executeCommand('npm', ['--version']);
      this.installArgs = _semver.default.gte(version, '7.0.0') ? ['install', '--legacy-peer-deps'] : ['install'];
    }

    return this.installArgs;
  }

  runInstall() {
    this.executeCommand('npm', this.getInstallArgs(), 'inherit');
  }

  runAddDeps(dependencies, installAsDevDependencies) {
    let args = [...dependencies];

    if (installAsDevDependencies) {
      args = ['-D', ...args];
    }

    this.executeCommand('npm', [...this.getInstallArgs(), ...args], 'inherit');
  }

  runGetVersions(packageName, fetchAllVersions) {
    const args = [fetchAllVersions ? 'versions' : 'version', '--json'];
    const commandResult = this.executeCommand('npm', ['info', packageName, ...args]);

    try {
      const parsedOutput = JSON.parse(commandResult);

      if (parsedOutput.error) {
        // FIXME: improve error handling
        throw new Error(parsedOutput.error.summary);
      } else {
        return parsedOutput;
      }
    } catch (e) {
      throw new Error(`Unable to find versions of ${packageName} using npm`);
    }
  }

}

exports.NPMProxy = NPMProxy;