import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './Badge';

export default {
    title: '4.UI/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;

export const All: ComponentStory<typeof Badge> = () => {
    return (
        <div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <Badge text="Badge1" textVariant="h1" />
                <Badge text="Badge1" textVariant="h1" state="success" />
                <Badge text="Badge1" textVariant="h1" state="warning" />
                <Badge text="Badge1" textVariant="h1" state="danger" />
            </div>
            <br />
            <Badge text="Badge2" textVariant="h2" />
            <br />
            <Badge text="Badge3" textVariant="h3" />
            <br />
            <Badge text="Badge4" textVariant="h4" />
            <br />
            <Badge text="Badge_sub1" textVariant="subtitle1" />
            <br />
            <Badge text="Badge_sub2" textVariant="subtitle2" />
            <br />
            <Badge text="Badge_body18" textVariant="body18" />
            <br />
            <Badge text="Badge_body16" textVariant="body16" />
            <br />
            <Badge text="Badge_cap14" textVariant="caption14" />
            <br />
            <Badge text="Badge_cap12" textVariant="caption12" />
            <br />
        </div>
    );
};
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: 'New',
};

export const Danger = Template.bind({});
Danger.args = {
    text: 'New',
    state: 'danger',
};

export const Success = Template.bind({});
Success.args = {
    text: 'New',
    state: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
    text: 'New',
    state: 'warning',
};
