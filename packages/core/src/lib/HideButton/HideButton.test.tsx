import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './HideButton.stories';
import { iconTestId } from '../Icon/Icon.test';
import { iconTypes } from '../Icon';
import { render, screen } from '@testing-library/react';

const { Default, HiddenState } = composeStories(stories);

export const testCompId = 'test-hidebutton';

test('Renders - HideButton Default', () => {
    render(<Default />);
    expect(screen.getByTestId(testCompId)).not.toBeNull();
    expect(screen.getByTestId(iconTestId)?.textContent).toBe(
        `${iconTypes.eye} icon`,
    );
});

test('Renders - HideButton hidden state', () => {
    render(<HiddenState />);
    expect(screen.getByTestId(testCompId)).not.toBeNull();
    expect(screen.getByTestId(iconTestId)?.textContent).toBe('eye closed icon');
});
