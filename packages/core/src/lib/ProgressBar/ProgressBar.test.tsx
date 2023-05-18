import * as stories from './ProgressBar.stories';
import { test, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';
import { color, rgbToHex } from '@web3uikit/styles';

import { composeStories } from '@storybook/testing-react';

const { Default } = composeStories(stories);

const testId = 'test-progressBar';

const testProgressValue = 'test-progressBar-progress';
const testProgressTotal = 'test-progressBar-progress';
const testLabelValue = 'test-progressBar-label';
const testLabelTotal = 'test-progressBar-label';

test('Renders ProgressBar', () => {
    //const progressValue = Default.args?.value;
    //const progressTotal = Default.args?.total;

    render(<Default />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();

    const ProgressBarValue = screen.getByTestId(testProgressValue);
    expect(ProgressBarValue).not.toBeNull();
    //expect(ProgressBarValue.textContent).toBe(progressValue);

    const ProgressBarTotal = screen.getByTestId(testProgressTotal);
    expect(ProgressBarTotal).not.toBeNull();
    //expect(ProgressBarTotal.textContent).toBe(progressTotal);

    const LabelBarValue = screen.getByTestId(testLabelValue);
    expect(LabelBarValue).not.toBeNull();
    //expect(LabelBarValue.textContent).toBe(progressValue);

    const LabelBarTotal = screen.getByTestId(testLabelTotal);
    expect(LabelBarTotal).not.toBeNull();
    //expect(LabelBarTotal.textContent).toBe(progressTotal);
});
