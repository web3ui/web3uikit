import * as stories from './ProgressBar.stories';
import { test, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';
import { color, rgbToHex } from '@web3uikit/styles';

import { composeStories } from '@storybook/testing-react';

const { Default, Custom } = composeStories(stories);

const testId = 'test-progressBar';

const testProgressValue = 'test-progressBar-progress';
const testProgressTotal = 'test-progressBar-progress';
const testLabelValue = 'test-progressBar-label';
const testLabelTotal = 'test-progressBar-label';

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
    expect(backgroundColorHex).toBe(color.blue40);
});

test('Renders ProgressBar custom', () => {
    render(<Custom />);
    const progressBar: HTMLProgressElement = screen.getByRole('progressbar');
    expect(progressBar).not.toBeNull();
    expect(progressBar.value).toBe(2200);
    expect(progressBar.max).toBe(10000);
    expect(progressBar.id).toBe('uniqueID');

    const progressTitle: HTMLHeadingElement =
        screen.getByTestId('progress-heading');
    expect(progressTitle).not.toBeNull();
    expect(progressTitle.textContent).toBe('Making Progress!');

    const progressBarBackground = screen.getByTestId('progress-bar-background');
    const styles = getComputedStyle(progressBarBackground);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.blue60);
});
