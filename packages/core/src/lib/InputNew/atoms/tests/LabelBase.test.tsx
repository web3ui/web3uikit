import * as stories from '../stories/LabelBase.stories';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { testLabelId } from '../values';

const { LabelBaseDefault, LabelBaseRequired } = composeStories(stories);

test('Renders Input Base', () => {
    render(<LabelBaseDefault />);
    const element: HTMLLabelElement = screen.getByTestId(testLabelId);
    expect(element).not.toBeNull();
    expect(element.htmlFor).toBe(LabelBaseDefault.args?.id);
    expect(element.textContent).toBe(LabelBaseDefault.args?.text);
});

test('Renders Input type with min and max', () => {
    render(<LabelBaseRequired />);
    const element: HTMLLabelElement = screen.getByTestId(testLabelId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(`${LabelBaseRequired.args?.text}*`);
});
