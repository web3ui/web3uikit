"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsPackageManagerFactory = void 0;

var _crossSpawn = require("cross-spawn");

var _findUp = require("find-up");

var _NPMProxy = require("./NPMProxy");

var _Yarn2Proxy = require("./Yarn2Proxy");

var _Yarn1Proxy = require("./Yarn1Proxy");

class JsPackageManagerFactory {
  static getPackageManager(forceNpmUsage = false) {
    if (forceNpmUsage) {
      return new _NPMProxy.NPMProxy();
    }

    const yarnVersion = getYarnVersion();
    const hasYarnLockFile = (0, _findUp.sync)('yarn.lock');
    const hasNPMCommand = hasNPM();

    if (yarnVersion && (hasYarnLockFile || !hasNPMCommand)) {
      return yarnVersion === 1 ? new _Yarn1Proxy.Yarn1Proxy() : new _Yarn2Proxy.Yarn2Proxy();
    }

    if (hasNPMCommand) {
      return new _NPMProxy.NPMProxy();
    }

    throw new Error('Unable to find a usable package manager within NPM, Yarn and Yarn 2');
  }

}

exports.JsPackageManagerFactory = JsPackageManagerFactory;

function hasNPM() {
  const npmVersionCommand = (0, _crossSpawn.sync)('npm', ['--version']);
  return npmVersionCommand.status === 0;
}

function getYarnVersion() {
  const yarnVersionCommand = (0, _crossSpawn.sync)('yarn', ['--version']);

  if (yarnVersionCommand.status !== 0) {
    return undefined;
  }

  const yarnVersion = yarnVersionCommand.output.toString().replace(/,/g, '').replace(/"/g, '');
  return /^1\.+/.test(yarnVersion) ? 1 : 2;
}