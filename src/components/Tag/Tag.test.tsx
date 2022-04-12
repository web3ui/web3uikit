import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Tag.stories';
import { render, screen } from '@testing-library/react';

const {
    Regular,
    InactiveStatus,
    ActiveStatus,
    Discount,
    Blue,
    Grey,
    Green,
    Pink,
    Purple,
    Red,
    Yellow,
} = composeStories(stories);

export const tagTestId = 'test-tag-id';
export const tagTestTextId = 'test-tag-text';

test('Tag - Regular', async () => {
    const regularText = 'Tag';
    const { queryByTestId } = render(<Regular />);

    // renders the component
    const element = screen.getByTestId(tagTestId);
    expect(element).not.toBeNull();

    // renders text correctly
    const labelText = screen.getByTestId(tagTestTextId);
    expect(labelText?.textContent).toBe(regularText);

    // should not render icon
    const iconSVG = screen.getAllByRole('svg');
    expect(iconSVG.length).toBe(0);
    // const iconSVG = screen.querySelector(
    //     `[data-testid="${tagTestId}"] > svg`,
    // );
    // expect(iconSVG).toBeNull();
});

