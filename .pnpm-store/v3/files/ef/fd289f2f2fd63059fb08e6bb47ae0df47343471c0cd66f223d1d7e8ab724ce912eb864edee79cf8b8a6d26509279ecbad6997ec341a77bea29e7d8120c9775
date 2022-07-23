'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clientApi = require('@storybook/client-api');
var addons = require('@storybook/addons');
var addons__default = _interopDefault(addons);
var csf = require('@storybook/csf');
var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var globalRender = function globalRender(args, _ref) {
  var parameters = _ref.parameters;

  if (!parameters.component) {
    throw new Error("\n      Could not render story due to missing 'component' property in Meta.\n      Please refer to https://github.com/storybookjs/testing-react#csf3\n    ");
  }

  var Component = parameters.component;
  return React.createElement(Component, _extends({}, args));
};
var invalidStoryTypes = /*#__PURE__*/new Set(['string', 'number', 'boolean', 'symbol']);
var isInvalidStory = function isInvalidStory(story) {
  return !story || Array.isArray(story) || invalidStoryTypes.has(typeof story);
};
function objectEntries(t) {
  return Object.entries(t);
}
var getStoryName = function getStoryName(story) {
  if (story.storyName) {
    return story.storyName;
  }

  if (typeof story !== 'function' && story.name) {
    return story.name;
  }

  return undefined;
};

var _excluded = ["default", "__esModule"];

addons__default.setChannel(addons.mockChannel());
var globalStorybookConfig = {};
var decorateStory = /*#__PURE__*/addons.applyHooks(clientApi.defaultDecorateStory);

var isValidStoryExport = function isValidStoryExport(storyName, nonStoryExportsConfig) {
  if (nonStoryExportsConfig === void 0) {
    nonStoryExportsConfig = {};
  }

  return csf.isExportStory(storyName, nonStoryExportsConfig) && storyName !== '__namedExportsOrder';
};
/** Function that sets the globalConfig of your storybook. The global config is the preview module of your .storybook folder.
 *
 * It should be run a single time, so that your global config (e.g. decorators) is applied to your stories when using `composeStories` or `composeStory`.
 *
 * Example:
 *```jsx
 * // setup.js (for jest)
 * import { setGlobalConfig } from '@storybook/testing-react';
 * import * as globalStorybookConfig from './.storybook/preview';
 *
 * setGlobalConfig(globalStorybookConfig);
 *```
 *
 * @param config - e.g. (import * as globalConfig from '../.storybook/preview')
 */


function setGlobalConfig(config) {
  globalStorybookConfig = config;
}
/**
 * Function that will receive a story along with meta (e.g. a default export from a .stories file)
 * and optionally a globalConfig e.g. (import * from '../.storybook/preview)
 * and will return a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing a story in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStory } from '@storybook/testing-react';
 * import Meta, { Primary as PrimaryStory } from './Button.stories';
 *
 * const Primary = composeStory(PrimaryStory, Meta);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param story
 * @param meta - e.g. (import Meta from './Button.stories')
 * @param [globalConfig] - e.g. (import * as globalConfig from '../.storybook/preview') this can be applied automatically if you use `setGlobalConfig` in your setup files.
 */

function composeStory(story, meta, globalConfig) {
  var _ref, _story$render;

  if (globalConfig === void 0) {
    globalConfig = globalStorybookConfig;
  }

  if (isInvalidStory(story)) {
    throw new Error("Cannot compose story due to invalid format. @storybook/testing-react expected a function/object but received " + typeof story + " instead.");
  }

  if (story.story !== undefined) {
    throw new Error("StoryFn.story object-style annotation is not supported. @storybook/testing-react expects hoisted CSF stories.\n       https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations");
  }

  var renderFn = typeof story === 'function' ? story : (_ref = (_story$render = story.render) != null ? _story$render : meta.render) != null ? _ref : globalRender;

  var finalStoryFn = function finalStoryFn(context) {
    var _context$parameters$p = context.parameters.passArgsFirst,
        passArgsFirst = _context$parameters$p === void 0 ? true : _context$parameters$p;

    if (!passArgsFirst) {
      throw new Error('composeStory does not support legacy style stories (with passArgsFirst = false).');
    }

    return renderFn(context.args, context);
  };

  var combinedDecorators = [].concat(story.decorators || [], (meta == null ? void 0 : meta.decorators) || [], globalConfig.decorators || []);
  var decorated = decorateStory(finalStoryFn, combinedDecorators);
  var defaultGlobals = Object.entries(globalConfig.globalTypes || {}).reduce(function (acc, _ref2) {
    var arg = _ref2[0],
        defaultValue = _ref2[1].defaultValue;

    if (defaultValue) {
      acc[arg] = defaultValue;
    }

    return acc;
  }, {});
  var combinedParameters = clientApi.combineParameters(globalConfig.parameters || {}, (meta == null ? void 0 : meta.parameters) || {}, story.parameters || {}, {
    component: meta == null ? void 0 : meta.component
  });

  var combinedArgs = _extends({}, meta == null ? void 0 : meta.args, story.args);

  var context = {
    componentId: '',
    kind: '',
    title: '',
    id: '',
    name: '',
    story: '',
    argTypes: globalConfig.argTypes || {},
    globals: defaultGlobals,
    parameters: combinedParameters,
    initialArgs: combinedArgs,
    args: combinedArgs,
    viewMode: 'story',
    originalStoryFn: renderFn,
    hooks: new addons.HooksContext()
  };

  var composedStory = function composedStory(extraArgs) {
    return decorated(_extends({}, context, {
      args: _extends({}, combinedArgs, extraArgs)
    }));
  };

  var boundPlay = function boundPlay(_ref3) {
    var extraContext = _extends({}, _ref3);

    return story.play == null ? void 0 : story.play(_extends({}, context, extraContext));
  };

  composedStory.storyName = story.storyName || story.name;
  composedStory.args = combinedArgs;
  composedStory.play = boundPlay;
  composedStory.decorators = combinedDecorators;
  composedStory.parameters = combinedParameters;
  return composedStory;
}
/**
 * Function that will receive a stories import (e.g. `import * as stories from './Button.stories'`)
 * and optionally a globalConfig (e.g. `import * from '../.storybook/preview`)
 * and will return an object containing all the stories passed, but now as a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing stories in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStories } from '@storybook/testing-react';
 * import * as stories from './Button.stories';
 *
 * const { Primary, Secondary } = composeStories(stories);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param storiesImport - e.g. (import * as stories from './Button.stories')
 * @param [globalConfig] - e.g. (import * as globalConfig from '../.storybook/preview') this can be applied automatically if you use `setGlobalConfig` in your setup files.
 */

function composeStories(storiesImport, globalConfig) {
  var meta = storiesImport["default"],
      stories = _objectWithoutPropertiesLoose(storiesImport, _excluded); // This function should take this as input: 
  // {
  //   default: Meta,
  //   Primary: Story<ButtonProps>, <-- Props extends Args
  //   Secondary: Story<OtherProps>,
  // }
  // And strips out default, then return composed stories as output: 
  // {
  //   Primary: ComposedStory<Partial<ButtonProps>>,
  //   Secondary: ComposedStory<Partial<OtherProps>>,
  // }
  // Compose an object containing all processed stories passed as parameters


  var composedStories = objectEntries(stories).reduce(function (storiesMap, _ref4) {
    var _Object$assign;

    var key = _ref4[0],
        _story = _ref4[1];
    var storyName = String(key); // filter out non-story exports

    if (!isValidStoryExport(storyName, meta)) {
      return storiesMap;
    }

    var story = _story;
    story.storyName = getStoryName(story) || storyName;
    var result = Object.assign(storiesMap, (_Object$assign = {}, _Object$assign[key] = composeStory(story, meta, globalConfig), _Object$assign));
    return result;
  }, {}); // @TODO: the inferred type of composedStories is correct but Partial.
  // investigate whether we can return an unpartial type of that without this hack

  return composedStories;
}

exports.composeStories = composeStories;
exports.composeStory = composeStory;
exports.setGlobalConfig = setGlobalConfig;
//# sourceMappingURL=testing-react.cjs.development.js.map
