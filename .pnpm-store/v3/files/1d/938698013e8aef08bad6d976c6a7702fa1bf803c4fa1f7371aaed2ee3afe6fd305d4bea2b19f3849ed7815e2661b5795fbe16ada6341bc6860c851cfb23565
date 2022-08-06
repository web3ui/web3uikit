"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectWebpack = void 0;

const detectWebpack = packageManager => {
  try {
    let out = '';

    if (packageManager.type === 'npm') {
      try {
        // npm <= v7
        out = packageManager.executeCommand('npm', ['ls', 'webpack']);
      } catch (e2) {
        // npm >= v8
        out = packageManager.executeCommand('npm', ['why', 'webpack']);
      }
    } else {
      out = packageManager.executeCommand('yarn', ['why', 'webpack']);
    } // if the user has BOTH webpack 4 and 5 installed already, we'll pick the safest options (4)


    if (out.includes('webpack@4') || out.includes('webpack@npm:4')) {
      return 4;
    } // the user has webpack 4 installed, but not 5


    if (out.includes('webpack@5') || out.includes('webpack@npm:5')) {
      return 5;
    }
  } catch (err) {//
  }

  return false;
};

exports.detectWebpack = detectWebpack;