import { findDistEsm } from '@storybook/core-common';
export var previewAnnotations = function (entries = []) {
  return [...entries, findDistEsm(__dirname, 'client/preview/config')];
};
export var addons = [require.resolve('./framework-preset-react'), require.resolve('./framework-preset-react-dom-hack'), require.resolve('./framework-preset-cra'), require.resolve('./framework-preset-react-docs')];