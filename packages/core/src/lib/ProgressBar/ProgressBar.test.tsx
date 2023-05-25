import * as stories from './ProgressBar.stories';
import { test, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';
import { color, rgbToHex } from '@web3uikit/styles';

import { composeStories } from '@storybook/testing-react';

const { Default, Custom } = composeStories(stories);

test('Renders ProgressBar default', () => {
    render(<Default />);
    const progressBar: HTMLProgressElement = screen.getByRole('progressbar');
    expect(progressBar).not.toBeNull();
    expect(progressBar.value).toBe(2200);
    expect(progressBar.max).toBe(10000);
    expect(progressBar.id).toBe('web3uiKit-progress');

    const progressBarBackground = screen.getByTestId('progress-bar-background');
    const styles = getComputedStyle(progressBarBackground);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe('#1A3656');
});

test('Renders ProgressBar custom', () => {
    render(<Custom />);
    const progressBar: HTMLProgressElement = screen.getByRole('progressbar');
    expect(progressBar).not.toBeNull();
    expect(progressBar.value).toBe(2200);
    expect(progressBar.max).toBe(10000);
    expect(progressBar.id).toBe('uniqueID');

    const progressBarBackground = screen.getByTestId('progress-bar-background');
    const styles = getComputedStyle(progressBarBackground);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.blue60);

    const testTitle = screen.getByTestId('test-typography');
    expect(testTitle).not.toBeNull();
    expect(testTitle.textContent).toBe('Headline');

    const testProgressBarValue = screen.getByTestId('test-progressBar-value');
    expect(testProgressBarValue).not.toBeNull();
    expect(testProgressBarValue.textContent).toBe('2200');

    const testProgressBarTotal = screen.getByTestId('test-progressBar-total');
    expect(testProgressBarTotal).not.toBeNull();
    expect(testProgressBarTotal.textContent).toBe('10000');

    const testProgressBarName = screen.getByTestId('test-progressBar-name');
    expect(testProgressBarName).not.toBeNull();
    expect(testProgressBarName.textContent).toBe('beans');
});
