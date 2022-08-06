"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsupportedTemplate = exports.supportedTemplates = exports.installableProjectTypes = exports.SupportedLanguage = exports.SUPPORTED_FRAMEWORKS = exports.ProjectType = exports.CoreBuilder = void 0;

var _semver = require("@storybook/semver");

function ltMajor(versionRange, major) {
  // Uses validRange to avoid a throw from minVersion if an invalid range gets passed
  return (0, _semver.validRange)(versionRange) && (0, _semver.minVersion)(versionRange).major < major;
}

function eqMajor(versionRange, major) {
  // Uses validRange to avoid a throw from minVersion if an invalid range gets passed
  return (0, _semver.validRange)(versionRange) && (0, _semver.minVersion)(versionRange).major === major;
} // Should match @storybook/<framework>


let ProjectType;
exports.ProjectType = ProjectType;

(function (ProjectType) {
  ProjectType["UNDETECTED"] = "UNDETECTED";
  ProjectType["UNSUPPORTED"] = "UNSUPPORTED";
  ProjectType["REACT_SCRIPTS"] = "REACT_SCRIPTS";
  ProjectType["METEOR"] = "METEOR";
  ProjectType["REACT"] = "REACT";
  ProjectType["REACT_NATIVE"] = "REACT_NATIVE";
  ProjectType["REACT_PROJECT"] = "REACT_PROJECT";
  ProjectType["WEBPACK_REACT"] = "WEBPACK_REACT";
  ProjectType["VUE"] = "VUE";
  ProjectType["VUE3"] = "VUE3";
  ProjectType["SFC_VUE"] = "SFC_VUE";
  ProjectType["ANGULAR"] = "ANGULAR";
  ProjectType["EMBER"] = "EMBER";
  ProjectType["ALREADY_HAS_STORYBOOK"] = "ALREADY_HAS_STORYBOOK";
  ProjectType["UPDATE_PACKAGE_ORGANIZATIONS"] = "UPDATE_PACKAGE_ORGANIZATIONS";
  ProjectType["WEB_COMPONENTS"] = "WEB_COMPONENTS";
  ProjectType["MITHRIL"] = "MITHRIL";
  ProjectType["MARIONETTE"] = "MARIONETTE";
  ProjectType["MARKO"] = "MARKO";
  ProjectType["HTML"] = "HTML";
  ProjectType["RIOT"] = "RIOT";
  ProjectType["PREACT"] = "PREACT";
  ProjectType["SVELTE"] = "SVELTE";
  ProjectType["RAX"] = "RAX";
  ProjectType["AURELIA"] = "AURELIA";
  ProjectType["SERVER"] = "SERVER";
})(ProjectType || (exports.ProjectType = ProjectType = {}));

const SUPPORTED_FRAMEWORKS = ['react', 'react-native', 'vue', 'vue3', 'angular', 'mithril', 'riot', 'ember', 'marionette', 'marko', 'meteor', 'preact', 'svelte', 'rax', 'aurelia'];
exports.SUPPORTED_FRAMEWORKS = SUPPORTED_FRAMEWORKS;
let CoreBuilder; // The `& {}` bit allows for auto-complete, see: https://github.com/microsoft/TypeScript/issues/29729

exports.CoreBuilder = CoreBuilder;

(function (CoreBuilder) {
  CoreBuilder["Webpack4"] = "webpack4";
  CoreBuilder["Webpack5"] = "webpack5";
  CoreBuilder["Vite"] = "vite";
})(CoreBuilder || (exports.CoreBuilder = CoreBuilder = {}));

let SupportedLanguage;
exports.SupportedLanguage = SupportedLanguage;

(function (SupportedLanguage) {
  SupportedLanguage["JAVASCRIPT"] = "javascript";
  SupportedLanguage["TYPESCRIPT"] = "typescript";
})(SupportedLanguage || (exports.SupportedLanguage = SupportedLanguage = {}));

/**
 * Configuration to match a storybook preset template.
 *
 * This has to be an array sorted in order of specificity/priority.
 * Reason: both REACT and WEBPACK_REACT have react as dependency,
 * therefore WEBPACK_REACT has to come first, as it's more specific.
 */
const supportedTemplates = [{
  preset: ProjectType.METEOR,
  files: ['.meteor'],
  matcherFunction: ({
    files
  }) => {
    return files.every(Boolean);
  }
}, {
  preset: ProjectType.SFC_VUE,
  dependencies: {
    'vue-loader': versionRange => ltMajor(versionRange, 16),
    vuetify: versionRange => ltMajor(versionRange, 3)
  },
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.some(Boolean);
  }
}, {
  preset: ProjectType.VUE,
  // This Vue template only works with Vue or Nuxt under v3
  dependencies: {
    vue: versionRange => ltMajor(versionRange, 3),
    nuxt: versionRange => ltMajor(versionRange, 3)
  },
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.some(Boolean);
  }
}, {
  preset: ProjectType.VUE3,
  dependencies: {
    // This Vue template works with Vue 3
    vue: versionRange => versionRange === 'next' || eqMajor(versionRange, 3)
  },
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.some(Boolean);
  }
}, {
  preset: ProjectType.EMBER,
  dependencies: ['ember-cli'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.REACT_PROJECT,
  peerDependencies: ['react'],
  matcherFunction: ({
    peerDependencies
  }) => {
    return peerDependencies.every(Boolean);
  }
}, {
  preset: ProjectType.REACT_NATIVE,
  dependencies: ['react-native', 'react-native-scripts'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.some(Boolean);
  }
}, {
  preset: ProjectType.REACT_SCRIPTS,
  // For projects using a custom/forked `react-scripts` package.
  files: ['/node_modules/.bin/react-scripts'],
  // For standard CRA projects
  dependencies: ['react-scripts'],
  matcherFunction: ({
    dependencies,
    files
  }) => {
    return dependencies.every(Boolean) || files.every(Boolean);
  }
}, {
  preset: ProjectType.WEBPACK_REACT,
  dependencies: ['react', 'webpack'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.REACT,
  dependencies: ['react'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.ANGULAR,
  dependencies: ['@angular/core'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.WEB_COMPONENTS,
  dependencies: ['lit-element', 'lit-html', 'lit'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.some(Boolean);
  }
}, {
  preset: ProjectType.MITHRIL,
  dependencies: ['mithril'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.MARIONETTE,
  dependencies: ['backbone.marionette'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.MARKO,
  dependencies: ['marko'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.RIOT,
  dependencies: ['riot'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.PREACT,
  dependencies: ['preact'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.SVELTE,
  dependencies: ['svelte'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.RAX,
  dependencies: ['rax'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}, {
  preset: ProjectType.AURELIA,
  dependencies: ['aurelia-bootstrapper'],
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.every(Boolean);
  }
}]; // A TemplateConfiguration that matches unsupported frameworks
// AnyFramework matchers can be added to this object to give
// users an "Unsupported framework" message

exports.supportedTemplates = supportedTemplates;
const unsupportedTemplate = {
  preset: ProjectType.UNSUPPORTED,
  dependencies: {
    // TODO(blaine): Remove when we support Nuxt 3
    nuxt: versionRange => eqMajor(versionRange, 3)
  },
  matcherFunction: ({
    dependencies
  }) => {
    return dependencies.some(Boolean);
  }
};
exports.unsupportedTemplate = unsupportedTemplate;
const notInstallableProjectTypes = [ProjectType.UNDETECTED, ProjectType.UNSUPPORTED, ProjectType.ALREADY_HAS_STORYBOOK, ProjectType.UPDATE_PACKAGE_ORGANIZATIONS];
const installableProjectTypes = Object.values(ProjectType).filter(type => !notInstallableProjectTypes.includes(type)).map(type => type.toLowerCase());
exports.installableProjectTypes = installableProjectTypes;