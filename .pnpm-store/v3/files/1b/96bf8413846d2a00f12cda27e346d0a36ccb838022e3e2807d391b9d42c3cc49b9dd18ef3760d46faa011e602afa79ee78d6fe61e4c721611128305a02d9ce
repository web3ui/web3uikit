"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

const _excluded = ["addons", "extensions", "commonJs"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function configureMain(_ref) {
  let {
    addons,
    extensions = ['js', 'jsx', 'ts', 'tsx'],
    commonJs = false
  } = _ref,
      custom = _objectWithoutPropertiesLoose(_ref, _excluded);

  const prefix = _fsExtra.default.existsSync('./src') ? '../src' : '../stories';
  const config = Object.assign({
    stories: [`${prefix}/**/*.stories.mdx`, `${prefix}/**/*.stories.@(${extensions.join('|')})`],
    addons
  }, custom); // replace escaped values and delimiters

  const stringified = `module.exports = ${JSON.stringify(config, null, 2).replace(/\\"/g, '"').replace(/['"]%%/g, '').replace(/%%['"]/, '').replace(/\\n/g, '\r\n')}`;

  _fsExtra.default.ensureDirSync('./.storybook');

  _fsExtra.default.writeFileSync(`./.storybook/main.${commonJs ? 'cjs' : 'js'}`, stringified, {
    encoding: 'utf8'
  });
}

const frameworkToPreviewParts = {
  angular: {
    prefix: (0, _tsDedent.default)`
      import { setCompodocJson } from "@storybook/addon-docs/angular";
      import docJson from "../documentation.json";
      setCompodocJson(docJson);
      
      `.trimStart(),
    extraParameters: 'docs: { inlineStories: true },'
  }
};

function configurePreview(framework, commonJs) {
  const {
    prefix = '',
    extraParameters = ''
  } = frameworkToPreviewParts[framework] || {};
  const previewPath = `./.storybook/preview.${commonJs ? 'cjs' : 'js'}`; // If the framework template included a preview then we have nothing to do

  if (_fsExtra.default.existsSync(previewPath)) {
    return;
  }

  const preview = (0, _tsDedent.default)`
    ${prefix}
    export const parameters = {
      actions: { argTypesRegex: "^on[A-Z].*" },
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/,
        },
      },
      ${extraParameters}
    }`.replace('  \n', '').trim();

  _fsExtra.default.writeFileSync(previewPath, preview, {
    encoding: 'utf8'
  });
}

function configure(framework, mainOptions) {
  _fsExtra.default.ensureDirSync('./.storybook');

  configureMain(mainOptions);
  configurePreview(framework, mainOptions.commonJs);
}