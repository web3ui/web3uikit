import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import CopyButton from '../CopyButton/CopyButton';
import { NotificationProvider, useNotification } from '../Notification';
import { Typography } from '../Typography';

export default {
    title: '4.UI/CopyButton',
    component: CopyButton,
    decorators: [
        (Story) => (
            <NotificationProvider>
                <Story />
            </NotificationProvider>
        ),
    ],
} as ComponentMeta<typeof CopyButton>;

const Template: ComponentStory<typeof CopyButton> = () => {
    const notify = useNotification();
    return (
        <div>
            <Typography variant="body18">With Love from Developers</Typography>
            <CopyButton
                text="With Love from Developers"
                revertIn={6500}
                onCopy={() =>
                    notify({
                        type: 'success',
                        message: 'Copied to clipboard',
                        title: 'New Notification',
                        position: 'topR',
                    })
                }
            />
        </div>
    );
};

export const CopyButtonDefault = Template.bind({});
