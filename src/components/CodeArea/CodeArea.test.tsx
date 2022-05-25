import { composeStories } from '@storybook/testing-react';
import { CodeArea } from '.';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import color from '../../styles/colors';
import * as stories from './CodeArea.stories';

const { MultipleLines, OneLine, WithHeader, MaxHeight } =
    composeStories(stories);

const testHeaderId = 'test-codearea-header';
const testLineNumbers = 'test-codearea-linenumbers';
const testTextAreaId = 'test-codearea';
const testWrapperId = 'test-codearea-wrapper';
const testMaximizeButtonId = 'test-button-maximize';
const textMinimizeButtonId = 'test-button-minimize';

test('Render - CodeArea Oneline', () => {
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

// skip for now as it is no longer change the size of the code area but its wrapper
// TODO bill update tests
xtest('Renders - maximize button', () => {
    render(<MaxHeight text={''} />);
    const maximizeButton = screen.getByTestId(testMaximizeButtonId);
    expect(maximizeButton).not.toBeNull();
    fireEvent.click(maximizeButton);
    const textarea = screen.getByTestId(testTextAreaId) as HTMLDivElement;
    const styles = textarea && getComputedStyle(textarea);
    expect(styles?.height).toBe('500px');

    // test minimize button
    const minimizeButton = screen.getByTestId(textMinimizeButtonId);
    expect(minimizeButton).not.toBeNull();
    fireEvent.click(minimizeButton);
    const updatedStyles = textarea && getComputedStyle(textarea);
    expect(updatedStyles?.height).toBe('400px');
});

test("Doesn't render maximize button", () => {
    render(<CodeArea text={''} />);
    const maximizeButton = screen.queryByTestId(testMaximizeButtonId);
    expect(maximizeButton).toBeNull();
});
