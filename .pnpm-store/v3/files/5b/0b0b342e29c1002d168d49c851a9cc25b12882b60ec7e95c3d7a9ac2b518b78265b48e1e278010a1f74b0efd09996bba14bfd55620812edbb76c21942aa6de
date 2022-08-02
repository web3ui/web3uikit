(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IsNodeProcess = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Determines if the current process is a Node.js process.
   */
  function isNodeProcess() {
      if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
          return true;
      }
      return !!(typeof process !== 'undefined' &&
          process.versions &&
          process.versions.node);
  }

  exports.isNodeProcess = isNodeProcess;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
