"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = void 0;

var _globby = _interopRequireDefault(require("globby"));

var _nodeLogger = require("@storybook/node-logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const warn = ({
  hasTSDependency
}) => {
  if (!hasTSDependency) {
    const hasTSFiles = !!_globby.default.sync(['**/*.@(ts|tsx)', '!**/node_modules', '!**/*.d.ts']).length;

    if (hasTSFiles) {
      _nodeLogger.logger.warn('We have detected TypeScript files in your project directory, however TypeScript is not listed as a project dependency.');

      _nodeLogger.logger.warn('Storybook will continue as though this is a JavaScript project.');

      _nodeLogger.logger.line();

      _nodeLogger.logger.info('For more information, see: https://storybook.js.org/docs/configurations/typescript-config/');
    }
  }
};

exports.warn = warn;