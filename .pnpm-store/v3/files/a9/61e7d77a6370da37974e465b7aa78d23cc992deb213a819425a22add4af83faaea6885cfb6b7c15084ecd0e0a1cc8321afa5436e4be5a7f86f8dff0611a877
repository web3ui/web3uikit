"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateArray = generateArray;

var _docsTools = require("@storybook/docs-tools");

var _captions = require("../captions");

var _generateCode = require("../generateCode");

function generateArray(_ref) {
  var inferredType = _ref.inferredType,
      ast = _ref.ast;
  var _ref2 = inferredType,
      depth = _ref2.depth;

  if (depth <= 2) {
    var compactArray = (0, _generateCode.generateArrayCode)(ast, true);

    if (!(0, _docsTools.isTooLongForDefaultValueSummary)(compactArray)) {
      return (0, _docsTools.createSummaryValue)(compactArray);
    }
  }

  return (0, _docsTools.createSummaryValue)(_captions.ARRAY_CAPTION, (0, _generateCode.generateArrayCode)(ast));
}