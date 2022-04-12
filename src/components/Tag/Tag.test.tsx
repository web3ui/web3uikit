import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as stories from './Tag.stories';

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

type TestStoryProps = {
    name: string;
    Component: any;
    expectedText: string;
};

function testStory({ name, Component, expectedText }: TestStoryProps) {
    return test(name, async () => {
        render(<Component />);

        // renders the component
        const element = screen.getByTestId(tagTestId);
        expect(element).not.toBeNull();

        // renders text correctly
        const labelText = screen.getByTestId(tagTestTextId);
        expect(labelText?.textContent).toBe(expectedText);
    });
}

const data = [
    {
        name: 'Tag - Regular',
        Component: Regular,
        expectedText: 'Tag',
    },
    {
        name: 'Tag - Inactive Status',
        Component: InactiveStatus,
        expectedText: 'Inactive Tag',
    },
    {
        name: 'Tag - Active Status',
        Component: ActiveStatus,
        expectedText: 'Active Tag',
    },
    {
        name: 'Tag - Discount',
        Component: Discount,
        expectedText: '-35%',
    },
    {
        name: 'Tag - Blue',
        Component: Blue,
        expectedText: 'Blue',
    },
    {
        name: 'Tag - Green',
        Component: Green,
        expectedText: 'Green',
    },
    {
        name: 'Tag - Grey',
        Component: Grey,
        expectedText: 'Grey',
    },
    {
        name: 'Tag - Red',
        Component: Red,
        expectedText: 'Red',
    },
    {
        name: 'Tag - Yellow',
        Component: Yellow,
        expectedText: 'Yellow',
    },
    {
        name: 'Tag - Purple',
        Component: Purple,
        expectedText: 'Purple',
    },
    {
        name: 'Tag - Pink',
        Component: Pink,
        expectedText: 'Pink',
    },
];

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    testStory({ ...element });
}
