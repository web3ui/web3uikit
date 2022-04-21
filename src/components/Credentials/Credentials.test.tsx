import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Credentials.stories';
import { iconTestId } from '../Icon/Icon.test';
import { render, screen } from '@testing-library/react';

const { WithTitleAndIcon, WithTitle, OneLine } = composeStories(stories);

export const testCompId = 'test-credentials';

const testTitleIcon = 'cred-test-header-icon';
const testTitleId = 'cred-test-header-text';
const testTextId = 'cred-test-text';

test('Renders - Credentials with Title and Icon', () => {
    render(<WithTitleAndIcon />);
    const testTitleText = WithTitleAndIcon?.args?.title;
    const testText = WithTitleAndIcon?.args?.text;
    expect(screen.getByTestId(testCompId)).not.toBeNull();
    expect(screen.getAllByTestId(iconTestId).length).toBeGreaterThanOrEqual(1);
    const titleElement = screen.getByTestId(testTitleId);
    expect(titleElement).not.toBeNull();
    expect(titleElement.textContent).toBe(testTitleText);
    const textElement = screen.getByTestId(testTextId);
    expect(textElement).not.toBeNull();
    expect(textElement.textContent).toBe(testText);
});

test('Renders - Credentials with Title', () => {
    render(<WithTitle />);
    const testTitleText = WithTitle?.args?.title;
    const testText = WithTitle?.args?.text;
    expect(screen.getByTestId(testCompId)).not.toBeNull();
    expect(screen.getAllByTestId(iconTestId).length).toBeGreaterThanOrEqual(1);
    const titleElement = screen.getByTestId(testTitleId);
    expect(titleElement).not.toBeNull();
    expect(titleElement.textContent).toBe(testTitleText);
    const textElement = screen.getByTestId(testTextId);
    expect(textElement).not.toBeNull();
    expect(textElement.textContent).toBe(testText);
});

test('Renders - Credentials One line', () => {
    render(<OneLine />);
    const testText = OneLine.args?.text;
    expect(screen.getByTestId(testCompId)).not.toBeNull();
    expect(screen.queryByTestId(testTitleIcon)).toBeNull();
    expect(screen.queryByTestId(testTitleId)).toBeNull();
    const textElement = screen.getByTestId(testTextId);
    expect(textElement).not.toBeNull();
    expect(textElement.textContent).toBe(testText);
});
