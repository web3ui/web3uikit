import { createSummaryValue, isTooLongForDefaultValueSummary } from '@storybook/docs-tools';
import { OBJECT_CAPTION } from '../captions';
import { generateObjectCode } from '../generateCode';
export function generateObject(_ref) {
  var inferredType = _ref.inferredType,
      ast = _ref.ast;
  var _ref2 = inferredType,
      depth = _ref2.depth;

  if (depth === 1) {
    var compactObject = generateObjectCode(ast, true);

    if (!isTooLongForDefaultValueSummary(compactObject)) {
      return createSummaryValue(compactObject);
    }
  }

  return createSummaryValue(OBJECT_CAPTION, generateObjectCode(ast));
}