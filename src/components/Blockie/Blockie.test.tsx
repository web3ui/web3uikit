import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Blockie.stories';

const { CustomSeed } = composeStories(stories);

const testId = 'test-blockie';

test('Renders Standard', () => {
    render(<CustomSeed />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
});
