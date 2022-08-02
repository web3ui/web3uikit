"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webpack_react = exports.web_components_typescript = exports.web_components_lit2 = exports.web_components = exports.vue3 = exports.vue = exports.vite_react = exports.svelte = exports.sfcVue = exports.react_typescript = exports.react_legacy_root_api = exports.react_in_yarn_workspace = exports.react = exports.preact = exports.html = exports.cra_typescript = exports.cra = exports.angular_modern_inline_rendering = exports.angular130 = exports.angular13 = exports.angular12 = exports.angular11 = exports.angular10 = exports.angular = void 0;

const fromDeps = (...args) => ['mkdir {{appName}}', 'cd {{appName}}', // Create `yarn.lock` to force Yarn to consider adding deps in this directory
// and not look for a yarn workspace in parent directory
'touch yarn.lock', 'yarn init --yes', args.length && `yarn add ${args.join(' ')}`].filter(Boolean).join(' && '); // #region  React


const cra = {
  framework: 'react',
  name: 'cra',
  version: 'latest',
  generator: [// Force npm otherwise we have a mess between Yarn 1, Yarn 2 and NPM
  'npm_config_user_agent=npm npx -p create-react-app@{{version}} create-react-app {{appName}}', 'cd {{appName}}', 'echo "FAST_REFRESH=true" > .env', 'echo "SKIP_PREFLIGHT_CHECK=true" > .env'].join(' && ')
};
exports.cra = cra;
const cra_typescript = {
  framework: 'react',
  name: 'cra_typescript',
  version: 'latest',
  generator: [// Force npm otherwise we have a mess between Yarn 1, Yarn 2 and NPM
  'npm_config_user_agent=npm npx -p create-react-app@{{version}} create-react-app {{appName}} --template typescript'].join(' && ')
};
exports.cra_typescript = cra_typescript;
const react = {
  framework: 'react',
  name: 'react',
  version: 'latest',
  generator: fromDeps('react', 'react-dom'),
  additionalDeps: ['prop-types']
};
exports.react = react;
const react_legacy_root_api = {
  framework: 'react',
  name: 'react_legacy_root_api',
  version: 'latest',
  generator: fromDeps('react', 'react-dom'),
  additionalDeps: ['prop-types'],
  mainOverrides: {
    reactOptions: {
      legacyRootApi: true
    }
  }
};
exports.react_legacy_root_api = react_legacy_root_api;
const react_typescript = {
  framework: 'react',
  name: 'react_typescript',
  version: 'latest',
  generator: fromDeps('react', 'react-dom'),
  typescript: true
};
exports.react_typescript = react_typescript;
const webpack_react = {
  framework: 'react',
  name: 'webpack_react',
  version: 'latest',
  generator: fromDeps('react', 'react-dom', 'webpack@webpack-4')
};
exports.webpack_react = webpack_react;
const vite_react = {
  framework: 'react',
  name: 'vite_react',
  version: 'latest',
  generator: 'npx -p create-vite@{{version}} create-vite {{appName}} --template react-ts'
};
exports.vite_react = vite_react;
const react_in_yarn_workspace = {
  framework: 'react',
  name: 'react_in_yarn_workspace',
  version: 'latest',
  generator: ['mkdir {{appName}}', 'cd {{appName}}', 'echo "{ \\"name\\": \\"workspace-root\\", \\"private\\": true, \\"workspaces\\": [] }" > package.json', 'touch yarn.lock', `yarn add react react-dom`].join(' && ')
}; // #endregion
// #region Angular

exports.react_in_yarn_workspace = react_in_yarn_workspace;
const baseAngular = {
  framework: 'angular',
  name: 'angular',
  version: 'latest',
  generator: `npx -p @angular/cli@{{version}} ng new {{appName}} --routing=true --minimal=true --style=scss --skipInstall=true --strict`
};
const angular10 = Object.assign({}, baseAngular, {
  name: 'angular10',
  version: 'v10-lts'
});
exports.angular10 = angular10;
const angular11 = Object.assign({}, baseAngular, {
  name: 'angular11',
  version: 'v11-lts'
});
exports.angular11 = angular11;
const angular12 = Object.assign({}, baseAngular, {
  name: 'angular12',
  version: 'v12-lts'
});
exports.angular12 = angular12;
const angular130 = Object.assign({}, baseAngular, {
  name: 'angular130',
  version: '13.0.x'
});
exports.angular130 = angular130;
const angular13 = Object.assign({}, baseAngular, {
  name: 'angular13',
  version: '13.1.x'
});
exports.angular13 = angular13;
const angular_modern_inline_rendering = Object.assign({}, baseAngular, {
  name: 'angular_modern_inline_rendering',
  additionalDeps: ['jest@27', '@storybook/test-runner'],
  mainOverrides: {
    features: {
      storyStoreV7: true,
      modernInlineRender: true
    }
  }
});
exports.angular_modern_inline_rendering = angular_modern_inline_rendering;
const angular = baseAngular; // #endregion
// #region  web components

exports.angular = angular;
const web_components = {
  framework: 'web-components',
  name: 'web_components',
  version: '2',
  generator: fromDeps('lit-element')
};
exports.web_components = web_components;
const web_components_typescript = Object.assign({}, web_components, {
  name: 'web_components_typescript',
  typescript: true
});
exports.web_components_typescript = web_components_typescript;
const web_components_lit2 = Object.assign({}, web_components, {
  version: 'next',
  name: 'web_components_lit2',
  generator: fromDeps('lit'),
  typescript: true
}); // #endregion
// #region  vue

exports.web_components_lit2 = web_components_lit2;
const vue = {
  framework: 'vue',
  name: 'vue',
  // Be careful here, the latest versions of vue cli are bootstrapping a vue 3  project
  version: '4',
  generator: [// Force npm otherwise we have a mess between Yarn 1 and Yarn 2
  `npx -p @vue/cli@{{version}} vue create {{appName}} --default --packageManager=npm --no-git --force`].join(' && ')
};
exports.vue = vue;
const vue3 = {
  framework: 'vue3',
  name: 'vue3',
  version: 'next',
  // Vue CLI v4 utilizes webpack 4, and the 5-alpha uses webpack 5 so we force ^4 here
  generator: [// Force npm otherwise we have a mess between Yarn 1 and Yarn 2
  `npx -p @vue/cli@^4 vue create {{appName}} --preset=__default_vue_3__ --packageManager=npm --no-git --force`].join(' && ')
}; // #endregion

exports.vue3 = vue3;
const html = {
  framework: 'html',
  name: 'html',
  version: 'latest',
  generator: fromDeps(),
  autoDetect: false
};
exports.html = html;
const preact = {
  framework: 'preact',
  name: 'preact',
  version: 'latest',
  generator: 'npx preact-cli@{{version}} create preactjs-templates/default {{appName}} --install=false --git=false'
};
exports.preact = preact;
const sfcVue = {
  framework: 'vue',
  name: 'sfcVue',
  version: 'latest',
  //
  generator: fromDeps('vue@2.6', 'vue-loader@15.9', 'vue-template-compiler@2.6', 'webpack@webpack-4')
};
exports.sfcVue = sfcVue;
const svelte = {
  framework: 'svelte',
  name: 'svelte',
  version: 'latest',
  generator: 'npx degit sveltejs/template {{appName}}'
};
exports.svelte = svelte;