import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';
import React from 'react';
import color from '../../styles/colors';
import { NotificationProvider, useNotification } from '../Notification';

export default {
    title: '4.UI/Typography',
    component: Typography,
    decorators: [
        (Story) => (
            <NotificationProvider>
                <Story />
            </NotificationProvider>
        ),
    ],
} as ComponentMeta<typeof Typography>;

const Demo: ComponentStory<typeof Typography> = () => {
    return (
        <div>
            <Typography variant="h1">Headline 1</Typography>
            <Typography variant="h2">Headline 2</Typography>
            <Typography variant="h3">Headline 3</Typography>
            <Typography variant="h4">Headline 4</Typography>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>
            <Typography variant="body18" weight="semibold">
                Body 18
            </Typography>
            <br />
            <Typography variant="body18">Body 18</Typography>
            <br />
            <Typography variant="body18" color={color.red}>
                Body 18 Red
            </Typography>
            <br />
            <Typography variant="body16" weight="semibold">
                Body 16
            </Typography>
            <br />
            <Typography variant="body16">Body 16</Typography>
            <br />
            <Typography variant="body16" monospace>
                Body 16 monospace
            </Typography>
            <br />
            <Typography variant="body16" italic>
                Body 16
            </Typography>
            <br />
            <Typography variant="caption14" weight="semibold">
                Caption 14
            </Typography>
            <br />
            <Typography variant="caption14" weight="regular">
                Caption 14
            </Typography>
            <br />
            <Typography variant="caption14" weight="regular" monospace italic>
                Caption 14 monospace
            </Typography>
            <br />
            <Typography variant="caption12" weight="semibold">
                Caption 12
            </Typography>
            <br />
            <Typography variant="caption12" weight="regular" monospace>
                Caption 12 monospace
            </Typography>
            <br />
        </div>
    );
};

const Template: ComponentStory<typeof Typography> = (args) => {
    const notify = useNotification();

    return (
        <Typography
            {...args}
            onCopy={() => {
                notify({
                    type: 'success',
                    message: 'Copied to clipboard',
                    title: 'New Notification',
                    position: 'topR',
                });
            }}
        />
    );
};

export const Regular = Demo.bind({});

export const Text = Template.bind({});
Text.args = {
    children: 'Demo Text',
};

export const Copyable = Template.bind({});
Copyable.args = {
    children: 'Copyable Text 222',
    copyable: true,
    variant: 'body18',
};
