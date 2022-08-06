"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.migrate = migrate;

require("core-js/modules/es.promise.js");

var _codemod = require("@storybook/codemod");

async function migrate(migration, {
  configDir,
  glob,
  dryRun,
  list,
  rename,
  logger,
  parser
}) {
  if (list) {
    (0, _codemod.listCodemods)().forEach(key => logger.log(key));
  } else if (migration) {
    await (0, _codemod.runCodemod)(migration, {
      configDir,
      glob,
      dryRun,
      logger,
      rename,
      parser
    });
  } else {
    throw new Error('Migrate: please specify a migration name or --list');
  }
}