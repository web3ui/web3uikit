"use strict";

require("core-js/modules/es.symbol.description.js");

var _commander = _interopRequireDefault(require("commander"));

var _path = _interopRequireDefault(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

var _envinfo = _interopRequireDefault(require("envinfo"));

var _leven = _interopRequireDefault(require("leven"));

var _readPkgUp = require("read-pkg-up");

var _initiate = require("./initiate");

var _add = require("./add");

var _migrate = require("./migrate");

var _extract = require("./extract");

var _upgrade = require("./upgrade");

var _repro = require("./repro");

var _link = require("./link");

var _automigrate = require("./automigrate");

var _babelConfig = require("./babel-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pkg = (0, _readPkgUp.sync)({
  cwd: __dirname
}).packageJson;
const logger = console;

_commander.default.option('--disable-telemetry', 'disable sending telemetry data', // default value is false, but if the user sets STORYBOOK_DISABLE_TELEMETRY, it can be true
process.env.STORYBOOK_DISABLE_TELEMETRY && process.env.STORYBOOK_DISABLE_TELEMETRY !== 'false');

_commander.default.option('--enable-crash-reports', 'enable sending crash reports to telemetry data');

_commander.default.command('init').description('Initialize Storybook into your project.').option('-f --force', 'Force add Storybook').option('-s --skip-install', 'Skip installing deps').option('-N --use-npm', 'Use npm to install deps').option('-p --parser <babel | babylon | flow | ts | tsx>', 'jscodeshift parser').option('-t --type <type>', 'Add Storybook for a specific project type').option('-y --yes', 'Answer yes to all prompts').option('-b --builder <builder>', 'Builder library').option('-l --linkable', 'Prepare installation for link (contributor helper)').action(options => (0, _initiate.initiate)(options, pkg));

_commander.default.command('add <addon>').description('Add an addon to your Storybook').option('-N --use-npm', 'Use NPM to build the Storybook server').option('-s --skip-postinstall', 'Skip package specific postinstall config modifications').action((addonName, options) => (0, _add.add)(addonName, options));

_commander.default.command('babelrc').description('generate the default storybook babel config into your current working directory').action(() => (0, _babelConfig.generateStorybookBabelConfigInCWD)());

_commander.default.command('upgrade').description('Upgrade your Storybook packages to the latest').option('-N --use-npm', 'Use NPM to build the Storybook server').option('-y --yes', 'Skip prompting the user').option('-n --dry-run', 'Only check for upgrades, do not install').option('-p --prerelease', 'Upgrade to the pre-release packages').option('-s --skip-check', 'Skip postinstall version and automigration checks').action(options => (0, _upgrade.upgrade)(options));

_commander.default.command('info').description('Prints debugging information about the local environment').action(() => {
  logger.log(_chalk.default.bold('\nEnvironment Info:'));

  _envinfo.default.run({
    System: ['OS', 'CPU'],
    Binaries: ['Node', 'Yarn', 'npm'],
    Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
    npmPackages: '@storybook/*',
    npmGlobalPackages: '@storybook/*'
  }).then(logger.log);
});

_commander.default.command('migrate [migration]').description('Run a Storybook codemod migration on your source files').option('-l --list', 'List available migrations').option('-g --glob <glob>', 'Glob for files upon which to apply the migration', '**/*.js').option('-p --parser <babel | babylon | flow | ts | tsx>', 'jscodeshift parser').option('-n --dry-run', 'Dry run: verify the migration exists and show the files to which it will be applied').option('-r --rename <from-to>', 'Rename suffix of matching files after codemod has been applied, e.g. ".js:.ts"').action((migration, {
  configDir,
  glob,
  dryRun,
  list,
  rename,
  parser
}) => {
  (0, _migrate.migrate)(migration, {
    configDir,
    glob,
    dryRun,
    list,
    rename,
    parser,
    logger
  }).catch(err => {
    logger.error(err);
    process.exit(1);
  });
});

_commander.default.command('extract [location] [output]').description('extract stories.json from a built version').action((location = 'storybook-static', output = _path.default.join(location, 'stories.json')) => (0, _extract.extract)(location, output).catch(e => {
  logger.error(e);
  process.exit(1);
}));

_commander.default.command('repro [outputDirectory]').description('Create a reproduction from a set of possible templates').option('-f --framework <framework>', 'Filter on given framework').option('-t --template <template>', 'Use the given template').option('-l --list', 'List available templates').option('-g --generator <generator>', 'Use custom generator command').option('--pnp', "Use Yarn Plug'n'Play mode instead of node_modules one").option('--e2e', 'Used in e2e context').action((outputDirectory, {
  framework,
  template,
  list,
  e2e,
  generator,
  pnp
}) => (0, _repro.repro)({
  outputDirectory,
  framework,
  template,
  list,
  e2e,
  generator,
  pnp
}).catch(e => {
  logger.error(e);
  process.exit(1);
}));

_commander.default.command('link <repo-url-or-directory>').description('Pull down a repro from a URL (or a local directory), link it, and run storybook').option('--local', 'Link a local directory already in your file system').action((target, {
  local
}) => (0, _link.link)({
  target,
  local
}).catch(e => {
  logger.error(e);
  process.exit(1);
}));

_commander.default.command('automigrate [fixId]').description('Check storybook for known problems or migrations and apply fixes').option('-y --yes', 'Skip prompting the user').option('-n --dry-run', 'Only check for fixes, do not actually run them').action((fixId, options) => (0, _automigrate.automigrate)(Object.assign({
  fixId
}, options)).catch(e => {
  logger.error(e);
  process.exit(1);
}));

_commander.default.on('command:*', ([invalidCmd]) => {
  logger.error(' Invalid command: %s.\n See --help for a list of available commands.', invalidCmd); // eslint-disable-next-line

  const availableCommands = _commander.default.commands.map(cmd => cmd._name);

  const suggestion = availableCommands.find(cmd => (0, _leven.default)(cmd, invalidCmd) < 3);

  if (suggestion) {
    logger.log(`\n Did you mean ${suggestion}?`);
  }

  process.exit(1);
});

_commander.default.usage('<command> [options]').version(pkg.version).parse(process.argv);