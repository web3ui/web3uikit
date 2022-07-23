'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.saveOutputToFile = exports.formatOutput = void 0;
const os_1 = __importDefault(require('os'));
const path_1 = __importDefault(require('path'));
const fs_1 = __importDefault(require('fs'));
const html_1 = require('./html');
const app_error_1 = require('./app-error');
function formatOutput(results, options) {
  if (!options.output) {
    return;
  }
  switch (options.output.format) {
    case 'json':
      return JSON.stringify({ results }, null, '  ');
    case 'tsv':
      return outputAsTsv(results);
    case 'html':
      return html_1.generateHtml(results, options);
  }
}
exports.formatOutput = formatOutput;
function outputAsTsv(results) {
  const lines = ['Source\tSize'];
  results.forEach((bundle, index) => {
    if (index > 0) {
      lines.push('');
    }
    Object.entries(bundle.files)
      .map(([source, data]) => [source, data.size])
      .sort(sortFilesBySize)
      .forEach(([source, size]) => {
        lines.push(`${source}\t${size}`);
      });
  });
  return lines.join(os_1.default.EOL);
}
function sortFilesBySize([, aSize], [, bSize]) {
  return bSize - aSize;
}
function saveOutputToFile(result, options) {
  if (!options.output) {
    return;
  }
  const output = result.output;
  const filename = options.output.filename;
  if (output && filename) {
    try {
      const dir = path_1.default.dirname(filename);
      fs_1.default.mkdirSync(dir, { recursive: true });
      fs_1.default.writeFileSync(filename, output);
    } catch (error) {
      throw new app_error_1.AppError({ code: 'CannotSaveFile' }, error);
    }
  }
}
exports.saveOutputToFile = saveOutputToFile;
//# sourceMappingURL=output.js.map
