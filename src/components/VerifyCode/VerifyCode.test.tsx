import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './VerifyCode.stories';

const { Default } = composeStories(stories);

const testId = 'test-verify-code-id';

test('Renders - VerifyCode component', () => {
    const titleText = 'Enter Code';
    render(<Default />);

    const component = screen.getByTestId(testId);
    expect(component).not.toBeNull();
    expect(component.childElementCount).toBe(5);
    expect(screen.getByText(titleText)).not.toBeNull();
});
