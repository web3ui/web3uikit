'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getErrorMessage = exports.SOURCE_MAP_INFO_URL = exports.AppError = void 0;
const helpers_1 = require('./helpers');
class AppError extends Error {
  constructor(errorContext, error) {
    super();
    Object.setPrototypeOf(this, AppError.prototype);
    const message = getErrorMessage(errorContext);
    this.message = error ? `${message}: ${error.message}` : message;
    this.code = errorContext.code;
    Error.captureStackTrace(this, AppError);
  }
}
exports.AppError = AppError;
exports.SOURCE_MAP_INFO_URL =
  'https://github.com/danvk/source-map-explorer/blob/master/README.md#generating-source-maps';
function getErrorMessage(context) {
  switch (context.code) {
    case 'NoBundles':
      return 'No file(s) provided';
    case 'NoSourceMap':
      return `Unable to find a source map.
See ${exports.SOURCE_MAP_INFO_URL}`;
    case 'OneSourceSourceMap': {
      return `Your source map only contains one source (${context.filename}).
This can happen if you use browserify+uglifyjs, for example, and don't set the --in-source-map flag to uglify.
See ${exports.SOURCE_MAP_INFO_URL}`;
    }
    case 'UnmappedBytes': {
      const { unmappedBytes, totalBytes } = context;
      const bytesString = helpers_1.formatPercent(unmappedBytes, totalBytes, 2);
      return `Unable to map ${unmappedBytes}/${totalBytes} bytes (${bytesString}%)`;
    }
    case 'InvalidMappingLine': {
      const { generatedLine, maxLine } = context;
      return `Your source map refers to generated line ${generatedLine}, but the source only contains ${maxLine} line(s).
Check that you are using the correct source map.`;
    }
    case 'InvalidMappingColumn': {
      const { generatedLine, generatedColumn, maxColumn } = context;
      return `Your source map refers to generated column ${
        generatedColumn + 1
      } on line ${generatedLine}, but the source only contains ${maxColumn} column(s) on that line.
Check that you are using the correct source map.`;
    }
    case 'CannotSaveFile':
      return 'Unable to save HTML to file';
    case 'CannotCreateTempFile':
      return 'Unable to create a temporary HTML file';
    case 'CannotOpenTempFile': {
      const { error, tempFile } = context;
      return `Unable to open web browser. ${error.toString().trim()}
Either run with --html, --json, --tsv, --file, or view HTML for the visualization at:
${tempFile}`;
    }
    case 'CannotOpenCoverageFile': {
      return 'Unable to open/parse coverage file';
    }
    case 'NoCoverageMatches': {
      return 'No matched bundles found for coverages';
    }
    default:
      return 'Unknown error';
  }
}
exports.getErrorMessage = getErrorMessage;
//# sourceMappingURL=app-error.js.map
