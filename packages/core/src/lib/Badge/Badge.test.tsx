import * as stories from './Badge.stories';
import { test, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';
import { color, rgbToHex } from '@web3uikit/styles';

import { composeStories } from '@storybook/testing-react';

const { Danger, Normal, Success, Warning } = composeStories(stories);

const testId = 'test-badge';
const testText = 'test-badge-text';

test('Renders Danger', () => {
    const badgeText = Normal.args?.text;

    render(<Danger />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.red);

    const text = screen.getByTestId(testText);
    expect(text).not.toBeNull();
    expect(text.textContent).toBe(badgeText);
});

test('Renders Normal', () => {
    const badgeText = Normal.args?.text;

    render(<Normal />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.blue);

    const text = screen.getByTestId(testText);
    expect(text).not.toBeNull();
    expect(text.textContent).toBe(badgeText);
});

test('Renders Success', () => {
    const badgeText = Normal.args?.text;

    render(<Success />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.green);

    const text = screen.getByTestId(testText);
    expect(text).not.toBeNull();
    expect(text.textContent).toBe(badgeText);
});

test('Renders Warning', () => {
    const badgeText = Normal.args?.text;

    render(<Warning />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.yellow);

    const text = screen.getByTestId(testText);
    expect(text).not.toBeNull();
    expect(text.textContent).toBe(badgeText);
});
