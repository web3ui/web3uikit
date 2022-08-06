'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getBundleName = exports.getBundles = exports.explore = void 0;
const glob_1 = __importDefault(require('glob'));
const lodash_1 = require('lodash');
const explore_1 = require('./explore');
const app_error_1 = require('./app-error');
const output_1 = require('./output');
const coverage_1 = require('./coverage');
function adjustOptions(options) {
  if (options.gzip) {
    options.onlyMapped = true;
  }
  return options;
}
async function explore(bundlesAndFileTokens, options = {}) {
  bundlesAndFileTokens = Array.isArray(bundlesAndFileTokens)
    ? bundlesAndFileTokens
    : [bundlesAndFileTokens];
  if (bundlesAndFileTokens.length === 0) {
    throw new app_error_1.AppError({ code: 'NoBundles' });
  }
  adjustOptions(options);
  const [fileTokens, bundles] = lodash_1.partition(bundlesAndFileTokens, lodash_1.isString);
  bundles.push(...getBundles(fileTokens));
  coverage_1.addCoverageRanges(bundles, options.coverage);
  const results = await Promise.all(
    bundles.map((bundle) =>
      explore_1.exploreBundle(bundle, options).catch((error) => onExploreError(bundle, error))
    )
  );
  const exploreResult = getExploreResult(results, options);
  if (exploreResult.bundles.length === 0) {
    return Promise.reject(exploreResult);
  }
  output_1.saveOutputToFile(exploreResult, options);
  return exploreResult;
}
exports.explore = explore;
function getBundles(fileTokens) {
  const filenames = lodash_1.flatMap(fileTokens, (filePath) =>
    glob_1.default.hasMagic(filePath) ? expandGlob(filePath) : filePath
  );
  const [mapFilenames, codeFilenames] = lodash_1.partition(filenames, (filename) =>
    filename.endsWith('.map')
  );
  return codeFilenames.map((code) => ({
    code,
    map: mapFilenames.find((filename) => filename === `${code}.map`),
  }));
}
exports.getBundles = getBundles;
function expandGlob(pattern) {
  if (pattern.endsWith('.js')) {
    pattern = `${pattern}?(.map)`;
  }
  return glob_1.default.sync(pattern);
}
function getBundleName(bundle) {
  return Buffer.isBuffer(bundle.code) ? 'Buffer' : bundle.code;
}
exports.getBundleName = getBundleName;
function onExploreError(bundle, error) {
  return {
    bundleName: getBundleName(bundle),
    code: error.code || 'Unknown',
    message: error.message,
    error,
  };
}
function sortFilenames(bundles) {
  return bundles.map((bundle) => ({
    ...bundle,
    files: lodash_1.fromPairs(lodash_1.sortBy(lodash_1.toPairs(bundle.files), 0)),
  }));
}
function getExploreResult(results, options) {
  const [bundles, errors] = lodash_1.partition(results, (result) => 'files' in result);
  let sortedBundles = lodash_1.sortBy(bundles, (bundle) => bundle.bundleName);
  if (options.sort) {
    sortedBundles = sortFilenames(sortedBundles);
  }
  errors.push(...getPostExploreErrors(bundles));
  return {
    bundles: sortedBundles,
    errors,
    ...(bundles.length > 0 && { output: output_1.formatOutput(sortedBundles, options) }),
  };
}
function getPostExploreErrors(exploreBundleResults) {
  const errors = [];
  const isSingleBundle = exploreBundleResults.length === 1;
  for (const result of exploreBundleResults) {
    const { bundleName, files, totalBytes } = result;
    if (isSingleBundle) {
      const filenames = Object.keys(files).filter(
        (filename) => !explore_1.SPECIAL_FILENAMES.includes(filename)
      );
      if (filenames.length === 1) {
        errors.push({
          bundleName,
          isWarning: true,
          code: 'OneSourceSourceMap',
          message: app_error_1.getErrorMessage({
            code: 'OneSourceSourceMap',
            filename: filenames[0],
          }),
        });
      }
    }
    if (files[explore_1.UNMAPPED_KEY] !== undefined) {
      const { size: unmappedBytes } = files[explore_1.UNMAPPED_KEY];
      if (unmappedBytes) {
        errors.push({
          bundleName,
          isWarning: true,
          code: 'UnmappedBytes',
          message: app_error_1.getErrorMessage({
            code: 'UnmappedBytes',
            unmappedBytes,
            totalBytes,
          }),
        });
      }
    }
  }
  return errors;
}
//# sourceMappingURL=api.js.map
