"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStorybookBabelConfigInCWD = exports.generateStorybookBabelConfig = void 0;

require("core-js/modules/es.promise.js");

var _fsExtra = require("fs-extra");

var _nodeLogger = require("@storybook/node-logger");

var _coreCommon = require("@storybook/core-common");

var _path = _interopRequireDefault(require("path"));

var _prompts = _interopRequireDefault(require("prompts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateStorybookBabelConfigInCWD = async () => {
  const target = process.cwd();
  return generateStorybookBabelConfig({
    target
  });
};

exports.generateStorybookBabelConfigInCWD = generateStorybookBabelConfigInCWD;

const generateStorybookBabelConfig = async ({
  target
}) => {
  _nodeLogger.logger.info(`Generating the storybook default babel config at ${target}`);

  const config = (0, _coreCommon.getStorybookBabelConfig)({
    local: true
  });
  const contents = JSON.stringify(config, null, 2);
  const fileName = '.babelrc.json';

  const location = _path.default.join(target, fileName);

  const exists = await (0, _fsExtra.access)(location).then(() => true, () => false);

  if (exists) {
    const {
      overwrite
    } = await (0, _prompts.default)({
      type: 'confirm',
      initial: true,
      name: 'overwrite',
      message: `${fileName} already exists. Would you like overwrite it?`
    });

    if (overwrite === false) {
      _nodeLogger.logger.warn(`Cancelled, babel config file was NOT written to file-system.`);

      return;
    }
  }

  _nodeLogger.logger.info(`Writing file to ${location}`);

  await (0, _fsExtra.writeFile)(location, contents);
};

exports.generateStorybookBabelConfig = generateStorybookBabelConfig;