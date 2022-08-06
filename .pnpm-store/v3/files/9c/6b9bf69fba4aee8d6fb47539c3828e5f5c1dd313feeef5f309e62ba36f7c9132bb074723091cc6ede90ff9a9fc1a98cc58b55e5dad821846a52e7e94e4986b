import { extractComponentDescription, enhanceArgTypes } from '@storybook/docs-tools';
import { extractArgTypes } from './extractArgTypes';
import { jsxDecorator } from './jsxDecorator';
export var parameters = {
  docs: {
    inlineStories: true,
    // NOTE: that the result is a react element. Hooks support is provided by the outer code.
    prepareForInline: function prepareForInline(storyFn) {
      return storyFn();
    },
    extractArgTypes: extractArgTypes,
    extractComponentDescription: extractComponentDescription
  }
};
export var decorators = [jsxDecorator];
export var argTypesEnhancers = [enhanceArgTypes];