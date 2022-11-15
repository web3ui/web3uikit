import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './NftCard.stories';

const { Default } = composeStories(stories);

test('Renders - NftCard component', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).not.toBeNull();
});
