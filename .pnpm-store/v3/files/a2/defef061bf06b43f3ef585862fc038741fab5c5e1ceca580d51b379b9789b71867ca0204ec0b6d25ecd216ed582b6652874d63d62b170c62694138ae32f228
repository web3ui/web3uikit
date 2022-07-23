"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initiate = initiate;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.sort.js");

var _updateNotifier = require("update-notifier");

var _chalk = _interopRequireDefault(require("chalk"));

var _prompts = _interopRequireDefault(require("prompts"));

var _telemetry = require("@storybook/telemetry");

var _project_types = require("./project_types");

var _detect = require("./detect");

var _helpers = require("./helpers");

var _ANGULAR = _interopRequireDefault(require("./generators/ANGULAR"));

var _AURELIA = _interopRequireDefault(require("./generators/AURELIA"));

var _EMBER = _interopRequireDefault(require("./generators/EMBER"));

var _METEOR = _interopRequireDefault(require("./generators/METEOR"));

var _REACT = _interopRequireDefault(require("./generators/REACT"));

var _REACT_NATIVE = _interopRequireDefault(require("./generators/REACT_NATIVE"));

var _REACT_SCRIPTS = _interopRequireDefault(require("./generators/REACT_SCRIPTS"));

var _SFC_VUE = _interopRequireDefault(require("./generators/SFC_VUE"));

var _UPDATE_PACKAGE_ORGANIZATIONS = _interopRequireDefault(require("./generators/UPDATE_PACKAGE_ORGANIZATIONS"));

var _VUE = _interopRequireDefault(require("./generators/VUE"));

var _VUE2 = _interopRequireDefault(require("./generators/VUE3"));

var _WEBPACK_REACT = _interopRequireDefault(require("./generators/WEBPACK_REACT"));

var _MITHRIL = _interopRequireDefault(require("./generators/MITHRIL"));

var _MARIONETTE = _interopRequireDefault(require("./generators/MARIONETTE"));

var _MARKO = _interopRequireDefault(require("./generators/MARKO"));

var _HTML = _interopRequireDefault(require("./generators/HTML"));

var _WEBCOMPONENTS = _interopRequireDefault(require("./generators/WEB-COMPONENTS"));

var _RIOT = _interopRequireDefault(require("./generators/RIOT"));

var _PREACT = _interopRequireDefault(require("./generators/PREACT"));

var _SVELTE = _interopRequireDefault(require("./generators/SVELTE"));

var _RAX = _interopRequireDefault(require("./generators/RAX"));

var _SERVER = _interopRequireDefault(require("./generators/SERVER"));

var _jsPackageManager = require("./js-package-manager");

var _automigrate = require("./automigrate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = console;

const installStorybook = (projectType, packageManager, options) => {
  const npmOptions = {
    installAsDevDependencies: true,
    skipInstall: options.skipInstall
  };
  const language = (0, _detect.detectLanguage)();
  const generatorOptions = {
    language,
    builder: options.builder || (0, _detect.detectBuilder)(packageManager),
    linkable: !!options.linkable,
    commonJs: options.commonJs
  };

  const runGenerator = () => {
    switch (projectType) {
      case _project_types.ProjectType.ALREADY_HAS_STORYBOOK:
        logger.log();
        (0, _helpers.paddedLog)('There seems to be a Storybook already available in this project.');
        (0, _helpers.paddedLog)('Apply following command to force:\n');
        (0, _helpers.codeLog)(['sb init [options] -f']); // Add a new line for the clear visibility.

        logger.log();
        return Promise.resolve();

      case _project_types.ProjectType.UPDATE_PACKAGE_ORGANIZATIONS:
        return (0, _UPDATE_PACKAGE_ORGANIZATIONS.default)(packageManager, options.parser, npmOptions).then(() => null) // commandLog doesn't like to see output
        .then((0, _helpers.commandLog)('Upgrading your project to the new Storybook packages.\n'));

      case _project_types.ProjectType.REACT_SCRIPTS:
        return (0, _REACT_SCRIPTS.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Create React App" based project'));

      case _project_types.ProjectType.REACT:
        return (0, _REACT.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "React" app\n'));

      case _project_types.ProjectType.REACT_NATIVE:
        {
          return (options.yes ? Promise.resolve({
            server: true
          }) : (0, _prompts.default)([{
            type: 'confirm',
            name: 'server',
            message: 'Do you want to install dependencies necessary to run Storybook server? You can manually do it later by install @storybook/react-native-server',
            initial: false
          }])).then(({
            server
          }) => (0, _REACT_NATIVE.default)(packageManager, npmOptions, server)).then((0, _helpers.commandLog)('Adding Storybook support to your "React Native" app\n'));
        }

      case _project_types.ProjectType.METEOR:
        return (0, _METEOR.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Meteor" app\n'));

      case _project_types.ProjectType.WEBPACK_REACT:
        return (0, _WEBPACK_REACT.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Webpack React" app\n'));

      case _project_types.ProjectType.REACT_PROJECT:
        return (0, _REACT.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "React" library\n'));

      case _project_types.ProjectType.SFC_VUE:
        return (0, _SFC_VUE.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Single File Components Vue" app\n'));

      case _project_types.ProjectType.VUE:
        return (0, _VUE.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Vue" app\n'));

      case _project_types.ProjectType.VUE3:
        return (0, _VUE2.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Vue 3" app\n'));

      case _project_types.ProjectType.ANGULAR:
        return (0, _ANGULAR.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Angular" app\n'));

      case _project_types.ProjectType.EMBER:
        return (0, _EMBER.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Ember" app\n'));

      case _project_types.ProjectType.MITHRIL:
        return (0, _MITHRIL.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Mithril" app\n'));

      case _project_types.ProjectType.MARIONETTE:
        return (0, _MARIONETTE.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Marionette.js" app\n'));

      case _project_types.ProjectType.MARKO:
        return (0, _MARKO.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Marko" app\n'));

      case _project_types.ProjectType.HTML:
        return (0, _HTML.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "HTML" app\n'));

      case _project_types.ProjectType.WEB_COMPONENTS:
        return (0, _WEBCOMPONENTS.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "web components" app\n'));

      case _project_types.ProjectType.RIOT:
        return (0, _RIOT.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "riot.js" app\n'));

      case _project_types.ProjectType.PREACT:
        return (0, _PREACT.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Preact" app\n'));

      case _project_types.ProjectType.SVELTE:
        return (0, _SVELTE.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Svelte" app\n'));

      case _project_types.ProjectType.RAX:
        return (0, _RAX.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Rax" app\n'));

      case _project_types.ProjectType.AURELIA:
        return (0, _AURELIA.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Aurelia" app\n'));

      case _project_types.ProjectType.SERVER:
        return (0, _SERVER.default)(packageManager, npmOptions, generatorOptions).then((0, _helpers.commandLog)('Adding Storybook support to your "Server" app\n'));

      case _project_types.ProjectType.UNSUPPORTED:
        (0, _helpers.paddedLog)(`We detected a project type that we don't support yet.`);
        (0, _helpers.paddedLog)(`If you'd like your framework to be supported, please let use know about it at https://github.com/storybookjs/storybook/issues`); // Add a new line for the clear visibility.

        logger.log();
        return Promise.resolve();

      default:
        (0, _helpers.paddedLog)(`We couldn't detect your project type. (code: ${projectType})`);
        (0, _helpers.paddedLog)('You can specify a project type explicitly via `sb init --type <type>`, see our docs on how to configure Storybook for your framework: https://storybook.js.org/docs/react/get-started/install'); // Add a new line for the clear visibility.

        logger.log();
        return projectTypeInquirer(options, packageManager);
    }
  };

  return runGenerator().catch(ex => {
    logger.error(`\n     ${_chalk.default.red(ex.stack)}`);
    process.exit(1);
  });
};

const projectTypeInquirer = async (options, packageManager) => {
  const manualAnswer = options.yes ? true : await (0, _prompts.default)([{
    type: 'confirm',
    name: 'manual',
    message: 'Do you want to manually choose a Storybook project type to install?'
  }]);

  if (manualAnswer !== true && manualAnswer.manual) {
    const frameworkAnswer = await (0, _prompts.default)([{
      type: 'select',
      name: 'manualFramework',
      message: 'Please choose a project type from the following list:',
      choices: _project_types.installableProjectTypes.map(type => ({
        title: type,
        value: type.toUpperCase()
      }))
    }]);
    return installStorybook(frameworkAnswer.manualFramework, packageManager, options);
  }

  return Promise.resolve();
};

async function initiate(options, pkg) {
  const packageManager = _jsPackageManager.JsPackageManagerFactory.getPackageManager(options.useNpm);

  const welcomeMessage = 'storybook init - the simplest way to add a Storybook to your project.';
  logger.log(_chalk.default.inverse(`\n ${welcomeMessage} \n`));

  if (!options.disableTelemetry) {
    (0, _telemetry.telemetry)('init');
  } // Update notify code.


  new _updateNotifier.UpdateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60 // every hour (we could increase this later on.)

  }).notify();
  let projectType;
  const projectTypeProvided = options.type;
  const infoText = projectTypeProvided ? `Installing Storybook for user specified project type: ${projectTypeProvided}` : 'Detecting project type';
  const done = (0, _helpers.commandLog)(infoText);
  const packageJson = packageManager.retrievePackageJson();
  const isEsm = packageJson && packageJson.type === 'module';

  try {
    if (projectTypeProvided) {
      if (_project_types.installableProjectTypes.includes(projectTypeProvided)) {
        const storybookInstalled = (0, _detect.isStorybookInstalled)(packageJson, options.force);
        projectType = storybookInstalled ? _project_types.ProjectType.ALREADY_HAS_STORYBOOK : projectTypeProvided.toUpperCase();
      } else {
        done(`The provided project type was not recognized by Storybook: ${projectTypeProvided}`);
        logger.log(`\nThe project types currently supported by Storybook are:\n`);

        _project_types.installableProjectTypes.sort().forEach(framework => (0, _helpers.paddedLog)(`- ${framework}`));

        logger.log();
        process.exit(1);
      }
    } else {
      projectType = (0, _detect.detect)(options);
    }
  } catch (ex) {
    done(ex.message);
    process.exit(1);
  }

  done();
  await installStorybook(projectType, packageManager, Object.assign({}, options, isEsm ? {
    commonJs: true
  } : undefined));

  if (!options.skipInstall) {
    packageManager.installDependencies();
  }

  await (0, _automigrate.automigrate)({
    yes: process.env.CI === 'true'
  });
  logger.log('\nTo run your Storybook, type:\n');
  (0, _helpers.codeLog)([packageManager.getRunStorybookCommand()]);
  logger.log('\nFor more information visit:', _chalk.default.cyan('https://storybook.js.org'));

  if (projectType === _project_types.ProjectType.REACT_NATIVE) {
    const REACT_NATIVE_REPO = 'https://github.com/storybookjs/react-native';
    logger.log();
    logger.log(_chalk.default.red('NOTE: installation is not 100% automated.'));
    logger.log(`To quickly run Storybook, replace contents of your app entry with:\n`);
    (0, _helpers.codeLog)(["export {default} from './storybook';"]);
    logger.log('\n For more in information, see the github readme:\n');
    logger.log(_chalk.default.cyan(REACT_NATIVE_REPO));
    logger.log();
  } // Add a new line for the clear visibility.


  logger.log();
}