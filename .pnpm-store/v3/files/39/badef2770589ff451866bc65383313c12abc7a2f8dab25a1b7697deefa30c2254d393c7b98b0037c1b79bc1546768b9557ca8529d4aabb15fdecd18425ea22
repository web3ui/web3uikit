import { createSummaryValue, isTooLongForDefaultValueSummary } from '@storybook/docs-tools';
import { ARRAY_CAPTION } from '../captions';
import { generateArrayCode } from '../generateCode';
export function generateArray({
  inferredType,
  ast
}) {
  const {
    depth
  } = inferredType;

  if (depth <= 2) {
    const compactArray = generateArrayCode(ast, true);

    if (!isTooLongForDefaultValueSummary(compactArray)) {
      return createSummaryValue(compactArray);
    }
  }

  return createSummaryValue(ARRAY_CAPTION, generateArrayCode(ast));
}