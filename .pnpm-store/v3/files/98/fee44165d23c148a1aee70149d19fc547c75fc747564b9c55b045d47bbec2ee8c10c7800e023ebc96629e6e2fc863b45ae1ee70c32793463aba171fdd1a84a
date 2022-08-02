"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectNextJS = void 0;
const regex = /[\s"\n]next.*?(\d+).*/;

const detectNextJS = packageManager => {
  try {
    let out = '';

    if (packageManager.type === 'npm') {
      try {
        // npm <= v7
        out = packageManager.executeCommand('npm', ['ls', 'next']);
      } catch (e2) {
        // npm >= v8
        out = packageManager.executeCommand('npm', ['why', 'next']);
      }
    } else {
      out = packageManager.executeCommand('yarn', ['why', 'next']);
    }

    const [, version] = out.match(regex);
    return version && parseInt(version, 10) ? parseInt(version, 10) : false;
  } catch (err) {//
  }

  return false;
};

exports.detectNextJS = detectNextJS;