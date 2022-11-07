import * as stories from '../stories/LabelBase.stories';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { labelBaseTestValues } from '../values';

const { id, testId, text } = labelBaseTestValues;
const { LabelBaseDefault, LabelBaseRequired } = composeStories(stories);

test('Renders Input Base', () => {
    render(<LabelBaseDefault />);
    const element: HTMLLabelElement = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.htmlFor).toBe(id);
    expect(element.textContent).toBe(text);
});

test('Renders Input type with min and max', () => {
    render(<LabelBaseRequired />);
    const element: HTMLLabelElement = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(`${text}*`);
});
