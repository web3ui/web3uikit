"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Yarn2Proxy = void 0;

var _JsPackageManager = require("./JsPackageManager");

class Yarn2Proxy extends _JsPackageManager.JsPackageManager {
  constructor(...args) {
    super(...args);
    this.type = 'yarn2';
  }

  initPackageJson() {
    return this.executeCommand('yarn', ['init']);
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
    let args = [...dependencies];

    if (installAsDevDependencies) {
      args = ['-D', ...args];
    }

    this.executeCommand('yarn', ['add', ...args], 'inherit');
  }

  runGetVersions(packageName, fetchAllVersions) {
    const field = fetchAllVersions ? 'versions' : 'version';
    const args = ['--fields', field, '--json'];
    const commandResult = this.executeCommand('yarn', ['npm', 'info', packageName, ...args]);

    try {
      const parsedOutput = JSON.parse(commandResult);
      return parsedOutput[field];
    } catch (e) {
      throw new Error(`Unable to find versions of ${packageName} using yarn 2`);
    }
  }

}

exports.Yarn2Proxy = Yarn2Proxy;