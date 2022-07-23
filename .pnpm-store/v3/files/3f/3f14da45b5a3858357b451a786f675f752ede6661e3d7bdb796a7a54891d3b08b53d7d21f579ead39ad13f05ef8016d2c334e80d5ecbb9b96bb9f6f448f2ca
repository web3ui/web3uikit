import { extractComponentDescription, enhanceArgTypes } from '@storybook/docs-tools';
import { extractArgTypes } from './extractArgTypes';
import { jsxDecorator } from './jsxDecorator';
export const parameters = {
  docs: {
    inlineStories: true,
    // NOTE: that the result is a react element. Hooks support is provided by the outer code.
    prepareForInline: storyFn => storyFn(),
    extractArgTypes,
    extractComponentDescription
  }
};
export const decorators = [jsxDecorator];
export const argTypesEnhancers = [enhanceArgTypes];