import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as stories from './Notification.stories';

const { Regular, Standard, CustomIcon } = composeStories(stories);

const messageId = 'test-notification-message';
const testId = 'test-notification-id';
const closeId = 'test-notification-x';
const titleMessage = 'New Message';
const iconId = 'test-notification-icon-wrapper';
const titleId = 'test-notification-title';

type TestStoryProps = {
    name: string;
    Component: any;
};

function testStory({ name, Component }: TestStoryProps) {
    return test(name, () => {
        const title = Component?.args?.title || titleMessage;
        const message = Component?.args?.message;

        render(<Component />);

        // renders the component
        const element = screen.getByTestId(testId);
        expect(element).not.toBeNull();

        // renders title correctly
        const titleElement = screen.getByTestId(titleId);
        expect(titleElement?.textContent).toBe(title);

        // renders message correctly
        const messageElement = screen.getByTestId(messageId);
        expect(messageElement?.textContent).toBe(message);

        // should render left icon
        const iconWrapper = screen.getByTestId(iconId);
        expect(iconWrapper).not.toBeNull();

        // should render close icon
        const closeIconWrapper = screen.getByTestId(closeId);
        expect(closeIconWrapper).not.toBeNull();
    });
}

const data = [
    {
        name: 'Notification - Standard - Active - Regular Text - Regular Icon',
        Component: Standard,
    },
    {
        name: 'Notification - Regular - Active - Custom Text - Regular Icon',
        Component: Regular,
    },
    {
        name: 'Notification - Active - Custom Text - Custom Icon',
        Component: CustomIcon,
    },
];

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    testStory({ ...element });
}
