"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repro = void 0;

require("core-js/modules/es.object.from-entries.js");

require("core-js/modules/es.promise.js");

var _prompts = _interopRequireDefault(require("prompts"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

var _boxen = _interopRequireDefault(require("boxen"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _scripts = require("./repro-generators/scripts");

var configs = _interopRequireWildcard(require("./repro-generators/configs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = console;
const TEMPLATES = configs; // Create a curate list of template because some of them only make sense in E2E
// context, fon instance react_in_yarn_workspace

const CURATED_TEMPLATES = Object.fromEntries(Object.entries(configs).filter(entry => entry[0] !== 'react_in_yarn_workspace'));
const FRAMEWORKS = Object.values(CURATED_TEMPLATES).reduce((acc, cur) => {
  acc[cur.framework] = [...(acc[cur.framework] || []), cur];
  return acc;
}, {});

const repro = async ({
  outputDirectory,
  list,
  template,
  framework,
  generator,
  e2e,
  pnp
}) => {
  logger.info((0, _boxen.default)((0, _tsDedent.default)`
        🤗 Welcome to ${_chalk.default.yellow('sb repro')}! 🤗 

        Create a ${_chalk.default.green('new project')} to minimally reproduce Storybook issues.
        
        1. select an environment that most closely matches your project setup.
        2. select a location for the reproduction, outside of your project.
        
        After the reproduction is ready, we'll guide you through the next steps.
        `.trim(), {
    borderStyle: 'round',
    padding: 1,
    borderColor: '#F1618C'
  }));

  if (list) {
    logger.info('🌈 Available templates');
    Object.entries(FRAMEWORKS).forEach(([fmwrk, templates]) => {
      logger.info(fmwrk);
      templates.forEach(t => logger.info(`- ${t.name}`));

      if (fmwrk === 'other') {
        logger.info('- blank');
      }
    });
    return;
  }

  let selectedTemplate = template;
  let selectedFramework = framework;

  if (!selectedTemplate && !generator) {
    if (!selectedFramework) {
      const {
        framework: frameworkOpt
      } = await (0, _prompts.default)({
        type: 'select',
        message: '🌈 Select the repro framework',
        name: 'framework',
        choices: Object.keys(FRAMEWORKS).map(f => ({
          title: f,
          value: f
        }))
      });
      selectedFramework = frameworkOpt;
    }

    if (!selectedFramework) {
      throw new Error('🚨 Repro: please select a framework!');
    }

    selectedTemplate = (await (0, _prompts.default)({
      type: 'select',
      message: '📝 Select the repro base template',
      name: 'template',
      choices: FRAMEWORKS[selectedFramework].map(f => ({
        title: f.name,
        value: f.name
      }))
    })).template;
  }

  const selectedConfig = !generator ? TEMPLATES[selectedTemplate] : {
    name: 'custom',
    version: 'custom',
    generator
  };

  if (!selectedConfig) {
    throw new Error('🚨 Repro: please specify a valid template type');
  }

  let selectedDirectory = outputDirectory;

  if (!selectedDirectory) {
    const {
      directory
    } = await (0, _prompts.default)({
      type: 'text',
      message: 'Enter the output directory',
      name: 'directory',
      initial: selectedConfig.name,
      validate: directoryName => _fs.default.existsSync(directoryName) ? `${directoryName} already exists. Please choose another name.` : true
    });
    selectedDirectory = directory;
  }

  try {
    const cwd = _path.default.isAbsolute(selectedDirectory) ? selectedDirectory : _path.default.join(process.cwd(), selectedDirectory);
    logger.info(`🏃 Running ${selectedTemplate} into ${cwd}`);
    await (0, _scripts.createAndInit)(cwd, selectedConfig, {
      e2e: !!e2e,
      pnp: !!pnp
    });

    if (!e2e) {
      await initGitRepo(cwd);
    }

    logger.info((0, _boxen.default)((0, _tsDedent.default)`
        🎉 Your Storybook reproduction project is ready to use! 🎉

        ${_chalk.default.yellow(`cd ${selectedDirectory}`)}
        ${_chalk.default.yellow(`yarn storybook`)}

        Once you've recreated the problem you're experiencing, please:
        
        1. Document any additional steps in ${_chalk.default.cyan('README.md')}
        2. Publish the repository to github
        3. Link to the repro repository in your issue

        Having a clean repro helps us solve your issue faster! 🙏
      `.trim(), {
      borderStyle: 'round',
      padding: 1,
      borderColor: '#F1618C'
    }));
  } catch (error) {
    logger.error('🚨 Failed to create repro');
    throw new Error(error);
  }
};

exports.repro = repro;

const initGitRepo = async cwd => {
  await (0, _scripts.exec)('git init', {
    cwd
  });
  await (0, _scripts.exec)('echo "node_modules" >> .gitignore', {
    cwd
  });
  await (0, _scripts.exec)('git add --all', {
    cwd
  });
  await (0, _scripts.exec)('git commit -am "added storybook"', {
    cwd
  });
  await (0, _scripts.exec)('git tag repro-base', {
    cwd
  });
};