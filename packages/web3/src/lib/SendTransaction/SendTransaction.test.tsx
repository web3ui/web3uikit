import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './SendTransaction.stories';

const { ExamplePurchaseCandy } = composeStories(stories);
test('Renders - SendTransaction component', () => {
    const { baseElement } = render(<ExamplePurchaseCandy />);

    expect(baseElement).toBeTruthy();
});
