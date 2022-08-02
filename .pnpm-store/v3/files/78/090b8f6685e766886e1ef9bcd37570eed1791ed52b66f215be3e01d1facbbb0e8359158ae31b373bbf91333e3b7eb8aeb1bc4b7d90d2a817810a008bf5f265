#!/usr/bin/env node
'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.logInfo = exports.logWarn = exports.logError = void 0;
const yargs_1 = __importDefault(require('yargs'));
const fs_1 = __importDefault(require('fs'));
const temp_1 = __importDefault(require('temp'));
const open_1 = __importDefault(require('open'));
const chalk_1 = __importDefault(require('chalk'));
const lodash_1 = require('lodash');
const api_1 = require('../lib/api');
const app_error_1 = require('../lib/app-error');
function parseArguments() {
  const argv = yargs_1.default
    .strict()
    .scriptName('source-map-explorer')
    .usage('Analyze and debug space usage through source maps.')
    .usage('Usage:')
    .usage(
      '$0 script.js [script.js.map] [--json [result.json] | --html [result.html] | --tsv [result.csv]] [-m | --only-mapped] [--exclude-source-map] [--no-border-checks] [--gzip] [--sort] [--replace=BEFORE_1 BEFORE_2 --with=AFTER_1 AFTER_2] [--no-root] [--coverage coverage.json] [--version] [--help | -h]'
    )
    .example('$0 script.js script.js.map', 'Explore bundle')
    .example('$0 script.js', 'Explore bundle with inline source map')
    .example('$0 dist/js/*.*', 'Explore all bundles inside dist/js folder')
    .example('$0 script.js --tsv', 'Explore and output result as TSV to stdout')
    .example('$0 script.js --json result.json', 'Explore and save result as JSON to the file')
    .demandCommand(1, 'At least one js file must be specified')
    .options({
      json: {
        type: 'string',
        description:
          'If filename specified save output as JSON to specified file otherwise output to stdout.',
        conflicts: ['tsv', 'html'],
      },
      tsv: {
        type: 'string',
        description:
          'If filename specified save output as TSV to specified file otherwise output to stdout.',
        conflicts: ['json', 'html'],
      },
      html: {
        type: 'string',
        description:
          'If filename specified save output as HTML to specified file otherwise output to stdout rather than opening a browser.',
        conflicts: ['json', 'tsv'],
      },
      'only-mapped': {
        alias: 'm',
        type: 'boolean',
        description:
          'Exclude "unmapped" bytes from the output. This will result in total counts less than the file size',
      },
      'exclude-source-map': {
        type: 'boolean',
        description: 'Exclude source map comment size from output',
      },
      'no-root': {
        type: 'boolean',
        description:
          'To simplify the visualization, source-map-explorer will remove any prefix shared by all sources. If you wish to disable this behavior, set --no-root.',
      },
      replace: {
        type: 'string',
        array: true,
        description:
          'Apply a simple find/replace on source file names. This can be used to fix some oddities with paths that appear in the source map generation process. Accepts regular expressions.',
        implies: 'with',
      },
      with: {
        type: 'string',
        array: true,
        description: 'See --replace.',
        implies: 'replace',
      },
      'no-border-checks': {
        type: 'boolean',
        description: 'Disable invalid mapping column/line checks.',
      },
      coverage: {
        type: 'string',
        normalize: true,
        description:
          'If the path to a valid a chrome code coverage JSON export is supplied, the tree map will be colorized according to which percentage of the modules code was executed',
      },
      gzip: {
        type: 'boolean',
        description: 'Calculate gzip size. It also sets onlyMapped flag',
        conflicts: ['only-mapped'],
      },
      sort: {
        type: 'boolean',
        description: 'Sort filenames',
      },
    })
    .group(['json', 'tsv', 'html'], 'Output:')
    .group(['replace', 'with'], 'Replace:')
    .help('h')
    .alias('h', 'help')
    .showHelpOnFail(false, 'Specify --help for available options')
    .wrap(null)
    .parserConfiguration({
      'boolean-negation': false,
    })
    .check((argv) => {
      if (argv.replace && argv.with && argv.replace.length !== argv.with.length) {
        throw new Error('--replace flags must be paired with --with flags');
      }
      return true;
    })
    .parse();
  const quoteRegex = /'/g;
  return {
    ...argv,
    _: argv._.filter((arg) => typeof arg === 'string').map((path) => path.replace(quoteRegex, '')),
  };
}
function logError(message, error) {
  if (!lodash_1.isString(message)) {
    message = app_error_1.getErrorMessage(message);
  }
  if (error) {
    console.error(chalk_1.default.red(message), error);
  } else {
    console.error(chalk_1.default.red(message));
  }
}
exports.logError = logError;
function logWarn(message) {
  console.warn(chalk_1.default.yellow(message));
}
exports.logWarn = logWarn;
function logInfo(message) {
  console.log(chalk_1.default.green(message));
}
exports.logInfo = logInfo;
function getExploreOptions(argv) {
  const {
    json,
    tsv,
    html,
    replace: replaceItems,
    with: withItems,
    onlyMapped,
    excludeSourceMap: excludeSourceMapComment,
    noRoot,
    noBorderChecks,
    coverage,
    gzip,
    sort,
  } = argv;
  let replaceMap;
  if (replaceItems && withItems) {
    replaceMap = replaceItems.reduce((result, item, index) => {
      result[item] = withItems[index];
      return result;
    }, {});
  }
  return {
    output: {
      format: lodash_1.isString(json) ? 'json' : lodash_1.isString(tsv) ? 'tsv' : 'html',
      filename: json || tsv || html,
    },
    replaceMap,
    onlyMapped,
    excludeSourceMapComment,
    noRoot,
    noBorderChecks,
    coverage,
    gzip,
    sort,
  };
}
async function writeHtmlToTempFile(html) {
  if (!html) {
    return;
  }
  try {
    const tempFile = temp_1.default.path({ prefix: 'sme-result-', suffix: '.html' });
    fs_1.default.writeFileSync(tempFile, html);
    const childProcess = await open_1.default(tempFile);
    if (childProcess.stderr) {
      childProcess.stderr.once('data', (error) => {
        if (error.toString().trim() !== '#< CLIXML') {
          logError({ code: 'CannotOpenTempFile', tempFile, error });
        }
      });
    }
  } catch (error) {
    throw new app_error_1.AppError({ code: 'CannotCreateTempFile' }, error);
  }
}
function outputErrors({ errors }) {
  if (errors.length === 0) {
    return;
  }
  const groupedErrors = lodash_1.groupBy(errors, 'bundleName');
  Object.entries(groupedErrors).forEach(([bundleName, errors]) => {
    console.group(bundleName);
    const hasManyErrors = errors.length > 1;
    errors.forEach((error, index) => {
      const message = `${hasManyErrors ? `${index + 1}. ` : ''}${error.message}`;
      if (error.isWarning) {
        logWarn(message);
      } else {
        logError(message);
      }
    });
    console.groupEnd();
  });
}
if (require.main === module) {
  const argv = parseArguments();
  const isOutputFormatSpecified = [argv.json, argv.tsv, argv.html].some(lodash_1.isString);
  const options = getExploreOptions(argv);
  api_1
    .explore(argv._, options)
    .then((result) => {
      if (isOutputFormatSpecified && options.output) {
        const filename = options.output.filename;
        if (filename) {
          logInfo(`Output saved to ${filename}`);
          outputErrors(result);
        } else {
          console.log(result.output);
        }
      } else {
        writeHtmlToTempFile(result.output).then(() => {
          outputErrors(result);
        });
      }
    })
    .catch((error) => {
      if (error.errors) {
        outputErrors(error);
      } else {
        logError('Failed to explore', error);
      }
      process.exitCode = 1;
    });
}
//# sourceMappingURL=cli.js.map
