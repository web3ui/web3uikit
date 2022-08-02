import { createSummaryValue, isTooLongForDefaultValueSummary } from '@storybook/docs-tools';
import { ARRAY_CAPTION } from '../captions';
import { generateArrayCode } from '../generateCode';
export function generateArray(_ref) {
  var inferredType = _ref.inferredType,
      ast = _ref.ast;
  var _ref2 = inferredType,
      depth = _ref2.depth;

  if (depth <= 2) {
    var compactArray = generateArrayCode(ast, true);

    if (!isTooLongForDefaultValueSummary(compactArray)) {
      return createSummaryValue(compactArray);
    }
  }

  return createSummaryValue(ARRAY_CAPTION, generateArrayCode(ast));
}