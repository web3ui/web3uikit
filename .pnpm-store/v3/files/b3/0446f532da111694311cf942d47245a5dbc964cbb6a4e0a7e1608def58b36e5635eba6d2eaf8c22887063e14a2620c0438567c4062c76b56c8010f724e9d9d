"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToDevDependenciesIfNotPresent = addToDevDependenciesIfNotPresent;
exports.codeLog = codeLog;
exports.commandLog = void 0;
exports.copyComponents = copyComponents;
exports.copyTemplate = copyTemplate;
exports.getBabelDependencies = getBabelDependencies;
exports.getBowerJson = getBowerJson;
exports.getChars = getChars;
exports.paddedLog = paddedLog;
exports.readFileAsJson = readFileAsJson;
exports.writeFileAsJson = void 0;

require("core-js/modules/es.promise.js");

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _semver = require("@storybook/semver");

var _stripJsonComments = _interopRequireDefault(require("strip-json-comments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */
const logger = console;

function getBowerJson() {
  const bowerJsonPath = _path.default.resolve('bower.json');

  if (!_fs.default.existsSync(bowerJsonPath)) {
    return false;
  }

  const jsonContent = _fs.default.readFileSync(bowerJsonPath, 'utf8');

  return JSON.parse(jsonContent);
}

function readFileAsJson(jsonPath, allowComments) {
  const filePath = _path.default.resolve(jsonPath);

  if (!_fs.default.existsSync(filePath)) {
    return false;
  }

  const fileContent = _fs.default.readFileSync(filePath, 'utf8');

  const jsonContent = allowComments ? (0, _stripJsonComments.default)(fileContent) : fileContent;

  try {
    return JSON.parse(jsonContent);
  } catch (e) {
    logger.error(_chalk.default.red(`Invalid json in file: ${filePath}`));
    throw e;
  }
}

const writeFileAsJson = (jsonPath, content) => {
  const filePath = _path.default.resolve(jsonPath);

  if (!_fs.default.existsSync(filePath)) {
    return false;
  }

  _fs.default.writeFileSync(filePath, `${JSON.stringify(content, null, 2)}\n`);

  return true;
};

exports.writeFileAsJson = writeFileAsJson;

const commandLog = message => {
  process.stdout.write(_chalk.default.cyan(' • ') + message); // Need `void` to be able to use this function in a then of a Promise<void>

  return (errorMessage, errorInfo) => {
    if (errorMessage) {
      process.stdout.write(`. ${_chalk.default.red('✖')}\n`);
      logger.error(`\n     ${_chalk.default.red(errorMessage)}`);

      if (!errorInfo) {
        return;
      }

      const newErrorInfo = errorInfo.split('\n').map(line => `     ${_chalk.default.dim(line)}`).join('\n');
      logger.error(`${newErrorInfo}\n`);
      return;
    }

    process.stdout.write(`. ${_chalk.default.green('✓')}\n`);
  };
};

exports.commandLog = commandLog;

function paddedLog(message) {
  const newMessage = message.split('\n').map(line => `    ${line}`).join('\n');
  logger.log(newMessage);
}

function getChars(char, amount) {
  let line = '';

  for (let lc = 0; lc < amount; lc += 1) {
    line += char;
  }

  return line;
}

function codeLog(codeLines, leftPadAmount) {
  let maxLength = 0;
  const newLines = codeLines.map(line => {
    maxLength = line.length > maxLength ? line.length : maxLength;
    return line;
  });
  const finalResult = newLines.map(line => {
    const rightPadAmount = maxLength - line.length;
    let newLine = line + getChars(' ', rightPadAmount);
    newLine = getChars(' ', leftPadAmount || 2) + _chalk.default.inverse(` ${newLine} `);
    return newLine;
  }).join('\n');
  logger.log(finalResult);
}
/**
 * Detect if any babel dependencies need to be added to the project
 * @param {Object} packageJson The current package.json so we can inspect its contents
 * @returns {Array} Contains the packages and versions that need to be installed
 * @example
 * const babelDependencies = await getBabelDependencies(packageManager, npmOptions, packageJson);
 * // you can then spread the result when using installDependencies
 * installDependencies(npmOptions, [
 *   `@storybook/react@${storybookVersion}`,
 *   ...babelDependencies,
 * ]);
 */


async function getBabelDependencies(packageManager, packageJson) {
  const dependenciesToAdd = [];
  let babelLoaderVersion = '^8.0.0-0';
  const babelCoreVersion = packageJson.dependencies['babel-core'] || packageJson.devDependencies['babel-core'];

  if (!babelCoreVersion) {
    if (!packageJson.dependencies['@babel/core'] && !packageJson.devDependencies['@babel/core']) {
      const babelCoreInstallVersion = await packageManager.getVersion('@babel/core');
      dependenciesToAdd.push(`@babel/core@${babelCoreInstallVersion}`);
    }
  } else {
    const latestCompatibleBabelVersion = await packageManager.latestVersion('babel-core', babelCoreVersion); // Babel 6

    if ((0, _semver.satisfies)(latestCompatibleBabelVersion, '^6.0.0')) {
      babelLoaderVersion = '^7.0.0';
    }
  }

  if (!packageJson.dependencies['babel-loader'] && !packageJson.devDependencies['babel-loader']) {
    const babelLoaderInstallVersion = await packageManager.getVersion('babel-loader', babelLoaderVersion);
    dependenciesToAdd.push(`babel-loader@${babelLoaderInstallVersion}`);
  }

  return dependenciesToAdd;
}

function addToDevDependenciesIfNotPresent(packageJson, name, packageVersion) {
  if (!packageJson.dependencies[name] && !packageJson.devDependencies[name]) {
    packageJson.devDependencies[name] = packageVersion;
  }
}

function copyTemplate(templateRoot) {
  const templateDir = _path.default.resolve(templateRoot, `template-csf/`);

  if (!_fs.default.existsSync(templateDir)) {
    throw new Error(`Couldn't find template dir`);
  }

  _fsExtra.default.copySync(templateDir, '.', {
    overwrite: true
  });
}

function copyComponents(framework, language) {
  const languageFolderMapping = {
    javascript: 'js',
    typescript: 'ts'
  };

  const componentsPath = () => {
    const frameworkPath = `frameworks/${framework}`;

    const languageSpecific = _path.default.resolve(__dirname, `${frameworkPath}/${languageFolderMapping[language]}`);

    if (_fsExtra.default.existsSync(languageSpecific)) {
      return languageSpecific;
    }

    const jsFallback = _path.default.resolve(__dirname, `${frameworkPath}/${languageFolderMapping.javascript}`);

    if (_fsExtra.default.existsSync(jsFallback)) {
      return jsFallback;
    }

    const frameworkRootPath = _path.default.resolve(__dirname, frameworkPath);

    if (_fsExtra.default.existsSync(frameworkRootPath)) {
      return frameworkRootPath;
    }

    throw new Error(`Unsupported framework: ${framework}`);
  };

  const targetPath = () => {
    if (_fsExtra.default.existsSync('./src')) {
      return './src/stories';
    }

    return './stories';
  };

  const destinationPath = targetPath();

  _fsExtra.default.copySync(componentsPath(), destinationPath, {
    overwrite: true
  });

  _fsExtra.default.copySync(_path.default.resolve(__dirname, 'frameworks/common'), destinationPath, {
    overwrite: true
  });
}