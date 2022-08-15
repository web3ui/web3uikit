import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../Select.stories';

const { DefaultBeta } = composeStories(stories);
test('Renders - Selectv2 component', () => {
    const { baseElement } = render(<DefaultBeta />);

    expect(baseElement).toBeTruthy();
});
