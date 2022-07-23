'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var load = require('@loadable/component');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var load__default = /*#__PURE__*/_interopDefaultLegacy(load);

// @ts-ignore does not provide TypeScript definitions

var loadable = function loadable(loader, opts) {
  return new Proxy({}, {
    get: function get(target, componentName) {
      if (typeof componentName === 'string') {
        return load__default['default'](function () {
          return loader().then(function (x) {
            return x[componentName];
          });
        }, opts);
      }
    }
  });
};

exports.loadable = loadable;
