import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Notification from '../../components/Notification/Notification';
import { iconTypes, TIconType } from '../Icon/collection';
import NotificationProvider, { useNotification } from './NotificationProvider';

export default {
    title: 'UI/Notification',
    component: Notification,
    decorators: [
        (Story) => (
            <NotificationProvider>
                <Story />
            </NotificationProvider>
        ),
    ],
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => {
    const dispatch = useNotification();

    const handleNewNotification = (type: string, icon?: TIconType) => {
        dispatch({
            type,
            message: 'Somebody messaged you',
            title: 'New Notification',
            icon,
        });
    };

    return (
        <>
            <button onClick={() => handleNewNotification('error')}>
                Error
            </button>
            <button onClick={() => handleNewNotification('info')}>Info</button>
            <button onClick={() => handleNewNotification('success')}>
                Success
            </button>
            <button onClick={() => handleNewNotification('warning')}>
                Warning
            </button>
            <button onClick={() => handleNewNotification('', iconTypes.bell)}>
                Custom Icon
            </button>
        </>
    );
};

export const Regular = Template.bind({});
Regular.args = {
    id: 'test-Notification',
    message: 'Somebody messaged you',
    title: 'New Notification',
};

export const Inactive = Template.bind({});
Inactive.args = {};

export const Standard = Template.bind({});
Standard.args = {
    message: 'Kresimir: Thank you for sharin..',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
    icon: iconTypes.cloud,
    message: 'TX: 0x2134...e82c5',
    title: 'New Event Sync',
};
