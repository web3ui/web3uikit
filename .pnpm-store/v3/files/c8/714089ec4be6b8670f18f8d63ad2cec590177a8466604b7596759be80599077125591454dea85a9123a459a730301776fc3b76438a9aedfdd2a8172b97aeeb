"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
exports.packageNames = void 0;
var packageNames = {
  '@kadira/react-storybook-decorator-centered': '@storybook/addon-centered',
  '@kadira/storybook-addons': '@storybook/addons',
  '@kadira/storybook-addon-actions': '@storybook/addon-actions',
  '@kadira/storybook-addon-comments': '@storybook/addon-comments',
  '@kadira/storybook-addon-graphql': '@storybook/addon-graphql',
  '@kadira/storybook-addon-info': '@storybook/addon-info',
  '@kadira/storybook-addon-knobs': '@storybook/addon-knobs',
  '@kadira/storybook-addon-links': '@storybook/addon-links',
  '@kadira/storybook-addon-notes': '@storybook/addon-notes',
  '@kadira/storybook-addon-options': '@storybook/addon-options',
  '@kadira/storybook-channels': '@storybook/channels',
  '@kadira/storybook-channel-postmsg': '@storybook/channel-postmessage',
  '@kadira/storybook-channel-websocket': '@storybook/channel-websocket',
  '@kadira/storybook-ui': '@storybook/ui',
  '@kadira/react-native-storybook': '@storybook/react-native',
  '@kadira/react-storybook': '@storybook/react',
  '@kadira/getstorybook': '@storybook/cli',
  '@kadira/storybook': '@storybook/react',
  storyshots: '@storybook/addon-storyshots',
  getstorybook: '@storybook/cli'
};
exports.packageNames = packageNames;

function transformer(file, api) {
  var j = api.jscodeshift;
  var packageNamesKeys = Object.keys(packageNames);
  /**
   * Checks whether the node value matches a Storybook package
   * @param {string} the import declaration node
   * @returns {string} whether the node value matches a Storybook package
   */

  var getMatch = function (oldpart) {
    return packageNamesKeys.find(function (newpart) {
      return oldpart.match(newpart);
    });
  };
  /**
   * Returns the name of the Storybook packages with the organisation name,
   * replacing the old `@kadira/` prefix.
   * @param {string} oldPackageName the name of the old package
   * @return {string} the new package name
   * @example
   * // returns '@storybook/storybook'
   * getNewPackageName('@kadira/storybook')
   */


  var getNewPackageName = function (oldPackageName) {
    var match = getMatch(oldPackageName);

    if (match) {
      var replacement = packageNames[match];
      return oldPackageName.replace(match, replacement);
    }

    return oldPackageName;
  };
  /**
   * updatePackageName - updates the source name of the Storybook packages
   * @param {ImportDeclaration} declaration the import declaration
   * @returns {ImportDeclaration.Node} the import declaration node
   */


  var updatePackageName = function (declaration) {
    // eslint-disable-next-line no-param-reassign
    declaration.node.source.value = getNewPackageName(declaration.node.source.value);
    return declaration.node;
  };

  return j(file.source).find(j.ImportDeclaration).replaceWith(updatePackageName).toSource({
    quote: 'single'
  });
}