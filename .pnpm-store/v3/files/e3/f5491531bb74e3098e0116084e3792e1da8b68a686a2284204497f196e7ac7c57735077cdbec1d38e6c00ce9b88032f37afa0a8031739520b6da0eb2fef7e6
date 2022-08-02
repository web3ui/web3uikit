"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateObject = generateObject;

var _docsTools = require("@storybook/docs-tools");

var _captions = require("../captions");

var _generateCode = require("../generateCode");

function generateObject(_ref) {
  var inferredType = _ref.inferredType,
      ast = _ref.ast;
  var _ref2 = inferredType,
      depth = _ref2.depth;

  if (depth === 1) {
    var compactObject = (0, _generateCode.generateObjectCode)(ast, true);

    if (!(0, _docsTools.isTooLongForDefaultValueSummary)(compactObject)) {
      return (0, _docsTools.createSummaryValue)(compactObject);
    }
  }

  return (0, _docsTools.createSummaryValue)(_captions.OBJECT_CAPTION, (0, _generateCode.generateObjectCode)(ast));
}