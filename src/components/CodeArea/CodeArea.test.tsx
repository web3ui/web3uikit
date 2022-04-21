import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import color from '../../styles/colors';
import * as stories from './CodeArea.stories';

const { MultipleLines, OneLine, WithHeader } = composeStories(stories);

const testHeaderId = 'test-codearea-header';
const testLineNumbers = 'test-codearea-linenumbers';
const testTextAreaId = 'test-codearea';
const testWrapperId = 'test-codearea-wrapper';

test('Render - CodeArea Online', () => {
    const text = OneLine.args?.text;
    render(<OneLine />);
    const element = screen.getByTestId(testTextAreaId);
    expect(element).not.toBeNull();
    expect(element?.textContent).toBe(text);

    // test line numbers
    const lines = (text?.match(/\n/g) || '').length + 1;
    expect(screen.getByTestId(testLineNumbers).childElementCount).toBe(lines);

    // test border color
    const textareaWrapper = screen.getByTestId(testWrapperId) as HTMLDivElement;
    const styles = textareaWrapper && getComputedStyle(textareaWrapper);
    expect(styles?.borderColor.toUpperCase()).toBe(color.paleBlue2);
});

test('Renders - CodeArea Multiple Lines', () => {
    const text = MultipleLines.args?.text;
    render(<MultipleLines />);
    const element = screen.getByTestId(testTextAreaId);
    expect(element).not.toBeNull();
    expect(element?.textContent).toBe(text);

    // test Line numbers
    const lines = (text?.match(/\n/g) || '').length + 1;
    expect(screen.getByTestId(testLineNumbers).childElementCount).toBe(lines);

    // test border color
    const textareaWrapper = screen.getByTestId(testWrapperId) as HTMLDivElement;
    const styles = textareaWrapper && getComputedStyle(textareaWrapper);
    expect(styles?.borderColor.toUpperCase()).toBe(color.paleBlue2);
});

test('Renders - CodeArea with Header', () => {
    const text = WithHeader.args?.text;
    render(<WithHeader />);
    const element = screen.getByTestId(testTextAreaId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(text);

    // test Line numbers
    const lines = (text?.match(/\n/g) || '').length + 1;
    expect(screen.getByTestId(testLineNumbers).childElementCount).toBe(lines);

    // test header element
    expect(screen.getByTestId(testHeaderId)).not.toBeNull();

    // test border color
    const textareaWrapper = screen.getByTestId(testWrapperId) as HTMLDivElement;
    const styles = textareaWrapper && getComputedStyle(textareaWrapper);
    expect(styles?.borderColor.toUpperCase()).toBe(color.paleBlue2);
});
