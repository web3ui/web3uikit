import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Notification from '../../components/Notification/Notification';
import { Button } from '../Button';
import { iconTypes, TIconType } from '../Icon/collection';
import NotificationProvider, { useNotification } from './NotificationProvider';
import { IPosition, notifyType } from './types';

export default {
    title: '5.Popup/Notification',
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
            <h3>Types:</h3>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    maxWidth: '700px',
                }}
            >
                <Button
                    text="Error"
                    onClick={() => handleNewNotification('error')}
                    theme="colored"
                    color="red"
                    isFullWidth={true}
                />
                <Button
                    text="Info"
                    onClick={() => handleNewNotification('info')}
                    isFullWidth={true}
                />
                <Button
                    text="Success"
                    onClick={() => handleNewNotification('success')}
                    isFullWidth={true}
                    theme="primary"
                />
                <Button
                    text="Warning"
                    onClick={() => handleNewNotification('warning')}
                    isFullWidth={true}
                    theme="colored"
                    color="yellow"
                />
                <Button
                    text="Custom Icon"
                    onClick={() =>
                        handleNewNotification('info', iconTypes.bell)
                    }
                    isFullWidth={true}
                />
            </div>
            <h3>Position:</h3>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    maxWidth: '700px',
                }}
            >
                <Button
                    text="bottomL"
                    onClick={() =>
                        handleNewNotification('success', undefined, 'bottomL')
                    }
                    isFullWidth={true}
                    theme="primary"
                />
                <Button
                    text="bottomR"
                    onClick={() =>
                        handleNewNotification('success', undefined, 'bottomR')
                    }
                    isFullWidth={true}
                    theme="primary"
                />
                <Button
                    text="topL"
                    onClick={() =>
                        handleNewNotification('success', undefined, 'topL')
                    }
                    isFullWidth={true}
                    theme="primary"
                />
            </div>
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
