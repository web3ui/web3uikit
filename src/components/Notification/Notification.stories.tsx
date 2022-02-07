import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Notification from '../../components/Notification/Notification';
import { iconTypes, TIconType } from '../Icon/collection';
import NotificationProvider, { useNotification } from './NotificationProvider';
import { IPosition, notifyType } from './types';

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

const Template: ComponentStory<typeof Notification> = (args) => (
    <Notification {...args} />
);

const HookTemplate: ComponentStory<typeof Notification> = () => {
    const dispatch = useNotification();

    const handleNewNotification = (
        type: notifyType,
        icon?: TIconType,
        position?: IPosition,
    ) => {
        dispatch({
            type,
            message: 'Somebody messaged you',
            title: 'New Notification',
            icon,
            position: position || 'topR',
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
            <button
                onClick={() => handleNewNotification('info', iconTypes.bell)}
            >
                Custom Icon
            </button>
            <button
                onClick={() =>
                    handleNewNotification('success', undefined, 'bottomL')
                }
            >
                bottomL
            </button>
            <button
                onClick={() =>
                    handleNewNotification('success', undefined, 'bottomR')
                }
            >
                bottomR
            </button>
            <button
                onClick={() =>
                    handleNewNotification('success', undefined, 'topL')
                }
            >
                topL
            </button>
        </>
    );
};

export const hookDemo = HookTemplate.bind({});

export const Regular = Template.bind({});
Regular.args = {
    id: 'test-Notification',
    message: 'Somebody messaged you',
    title: 'New Notification',
};

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
