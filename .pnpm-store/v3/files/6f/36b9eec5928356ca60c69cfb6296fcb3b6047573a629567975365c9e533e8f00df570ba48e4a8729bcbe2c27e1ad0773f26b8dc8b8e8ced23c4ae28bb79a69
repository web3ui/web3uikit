"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Yarn1Proxy = void 0;

var _JsPackageManager = require("./JsPackageManager");

class Yarn1Proxy extends _JsPackageManager.JsPackageManager {
  constructor(...args) {
    super(...args);
    this.type = 'yarn1';
  }

  initPackageJson() {
    return this.executeCommand('yarn', ['init', '-y']);
  }

  getRunStorybookCommand() {
    return 'yarn storybook';
  }

  getRunCommand(command) {
    return `yarn ${command}`;
  }

  runInstall() {
    this.executeCommand('yarn', [], 'inherit');
  }

  runAddDeps(dependencies, installAsDevDependencies) {
    let args = ['--ignore-workspace-root-check', ...dependencies];

    if (installAsDevDependencies) {
      args = ['-D', ...args];
    }

    this.executeCommand('yarn', ['add', ...args], 'inherit');
  }

  runGetVersions(packageName, fetchAllVersions) {
    const args = [fetchAllVersions ? 'versions' : 'version', '--json'];
    const commandResult = this.executeCommand('yarn', ['info', packageName, ...args]);

    try {
      const parsedOutput = JSON.parse(commandResult);

      if (parsedOutput.type === 'inspect') {
        return parsedOutput.data;
      }

      throw new Error(`Unable to find versions of ${packageName} using yarn`);
    } catch (e) {
      throw new Error(`Unable to find versions of ${packageName} using yarn`);
    }
  }

}

exports.Yarn1Proxy = Yarn1Proxy;