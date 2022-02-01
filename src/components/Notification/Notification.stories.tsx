import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { iconTypes } from '../Icon/collection';
import Notification, { notify } from './Notification';

export default {
    title: 'UI/Notification',
    component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
    <Notification {...args} />
);
const Template2: ComponentStory<typeof Notification> = (args) => {
    return (
        <>
            <button onClick={notify}>Notify</button>
        </>
    );
};

export const HookDemo = Template2.bind({});
Template2.args = {
    id: 'test-Notification',
    message: 'Somebody messaged you',
    isVisible: true,
    title: 'New Notification',
};

export const Regular = Template.bind({});
Regular.args = {
    id: 'test-Notification',
    message: 'Somebody messaged you',
    isVisible: true,
    title: 'New Notification',
};

export const Inactive = Template.bind({});
Inactive.args = {};

export const Standard = Template.bind({});
Standard.args = {
    message: 'Kresimir: Thank you for sharin..',
    isVisible: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
    icon: iconTypes.cloud,
    message: 'TX: 0x2134...e82c5',
    title: 'New Event Sync',
    isVisible: true,
};

export const PositionRelative = Template.bind({});
PositionRelative.args = {
    id: 'test-Notification',
    message: 'Somebody messaged you',
    isVisible: true,
    title: 'New Notification',
};

export const PositionRelativeCustomBreakPoints = Template.bind({});
PositionRelativeCustomBreakPoints.args = {
    id: 'test-Notification',
    message: 'Somebody messaged you',
    isVisible: true,
    title: 'New Notification',
};

export const RelativePositioningTopLeft = Template.bind({});
RelativePositioningTopLeft.args = {
    id: 'test-Notification',
    message: 'Somebody messaged you',
    isVisible: true,
    title: 'New Notification',
};

export const RelativePositioningBottomRight = Template.bind({});
RelativePositioningBottomRight.args = {
    id: 'test-Notification',
    message: 'Somebody messaged you',
    isVisible: true,
    title: 'New Notification',
};
