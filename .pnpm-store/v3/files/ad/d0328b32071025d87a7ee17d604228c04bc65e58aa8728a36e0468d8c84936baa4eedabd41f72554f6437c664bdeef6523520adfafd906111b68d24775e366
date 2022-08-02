"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findEslintFile = exports.SUPPORTED_ESLINT_EXTENSIONS = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SUPPORTED_ESLINT_EXTENSIONS = ['js', 'cjs'];
exports.SUPPORTED_ESLINT_EXTENSIONS = SUPPORTED_ESLINT_EXTENSIONS;
const UNSUPPORTED_ESLINT_EXTENSIONS = ['yaml', 'yml', 'json'];

const findEslintFile = () => {
  const filePrefix = '.eslintrc';
  const unsupportedExtension = UNSUPPORTED_ESLINT_EXTENSIONS.find(ext => _fsExtra.default.existsSync(`${filePrefix}.${ext}`));

  if (unsupportedExtension) {
    throw new Error(unsupportedExtension);
  }

  const extension = SUPPORTED_ESLINT_EXTENSIONS.find(ext => _fsExtra.default.existsSync(`${filePrefix}.${ext}`));
  return extension ? `${filePrefix}.${extension}` : null;
};

exports.findEslintFile = findEslintFile;