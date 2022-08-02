'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var lazily = function lazily(loader) {
  return new Proxy({}, {
    get: function get(target, componentName) {
      if (typeof componentName === 'string') {
        return react.lazy(function () {
          return loader(componentName).then(function (x) {
            return {
              default: x[componentName]
            };
          });
        });
      }
    }
  });
};

exports.lazily = lazily;
