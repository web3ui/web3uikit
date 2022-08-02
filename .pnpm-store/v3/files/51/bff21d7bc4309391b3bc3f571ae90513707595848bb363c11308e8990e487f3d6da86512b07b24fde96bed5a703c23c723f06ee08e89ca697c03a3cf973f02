"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.automigrate = void 0;

require("core-js/modules/es.promise.js");

var _prompts = _interopRequireDefault(require("prompts"));

var _chalk = _interopRequireDefault(require("chalk"));

var _boxen = _interopRequireDefault(require("boxen"));

var _jsPackageManager = require("../js-package-manager");

var _fixes = require("./fixes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-await-in-loop */
const logger = console;

const automigrate = async ({
  fixId,
  dryRun,
  yes
} = {}) => {
  const packageManager = _jsPackageManager.JsPackageManagerFactory.getPackageManager();

  const filtered = fixId ? _fixes.fixes.filter(f => f.id === fixId) : _fixes.fixes;
  logger.info('🔎 checking possible migrations..');

  for (let i = 0; i < filtered.length; i += 1) {
    const f = _fixes.fixes[i];
    const result = await f.check({
      packageManager
    });

    if (result) {
      logger.info(`🔎 found a '${_chalk.default.cyan(f.id)}' migration:`);
      logger.info();
      const message = f.prompt(result);
      logger.info((0, _boxen.default)(message, {
        borderStyle: 'round',
        padding: 1,
        borderColor: '#F1618C'
      }));
      let runAnswer;

      if (dryRun) {
        runAnswer = {
          fix: false
        };
      } else if (yes) {
        runAnswer = {
          fix: true
        };
      } else {
        runAnswer = await (0, _prompts.default)({
          type: 'confirm',
          name: 'fix',
          message: `Do you want to run the '${_chalk.default.cyan(f.id)}' migration on your project?`
        });
      }

      if (runAnswer.fix) {
        try {
          await f.run({
            result,
            packageManager,
            dryRun
          });
          logger.info(`✅ ran ${_chalk.default.cyan(f.id)} migration`);
        } catch (error) {
          logger.info(`❌ error when running ${_chalk.default.cyan(f.id)} migration:`);
          logger.info(error.message);
          logger.info();
        }
      } else {
        logger.info(`Skipping the ${_chalk.default.cyan(f.id)} migration.`);
        logger.info();
        logger.info(`If you change your mind, run '${_chalk.default.cyan('npx storybook@next automigrate')}'`);
      }
    }
  }

  logger.info();
  logger.info('✅ migration check successfully ran');
  logger.info();
};

exports.automigrate = automigrate;