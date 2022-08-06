"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parameters = exports.decorators = exports.argTypesEnhancers = void 0;

var _docsTools = require("@storybook/docs-tools");

var _extractArgTypes = require("./extractArgTypes");

var _jsxDecorator = require("./jsxDecorator");

var parameters = {
  docs: {
    inlineStories: true,
    // NOTE: that the result is a react element. Hooks support is provided by the outer code.
    prepareForInline: function prepareForInline(storyFn) {
      return storyFn();
    },
    extractArgTypes: _extractArgTypes.extractArgTypes,
    extractComponentDescription: _docsTools.extractComponentDescription
  }
};
exports.parameters = parameters;
var decorators = [_jsxDecorator.jsxDecorator];
exports.decorators = decorators;
var argTypesEnhancers = [_docsTools.enhanceArgTypes];
exports.argTypesEnhancers = argTypesEnhancers;