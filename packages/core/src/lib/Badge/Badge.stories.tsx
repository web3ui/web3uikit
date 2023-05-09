import { ComponentStory, ComponentMeta } from '@storybook/react';
import { color } from '@web3uikit/styles';
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
export const LightMode: ComponentStory<typeof Badge> = () => {
    return (
        <div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <Badge text="Badge3" textVariant="h3" theme="light" />
                <Badge
                    text="Badge3"
                    textVariant="h3"
                    state="success"
                    theme="light"
                />
                <Badge
                    text="Badge3"
                    textVariant="h3"
                    state="warning"
                    theme="light"
                />
                <Badge
                    text="Badge3"
                    textVariant="h3"
                    state="danger"
                    theme="light"
                />
            </div>
        </div>
    );
};

export const DarkMode: ComponentStory<typeof Badge> = () => {
    return (
        <div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <Badge text="Badge3" textVariant="h3" theme="dark" />
                <Badge
                    text="Badge3"
                    textVariant="h3"
                    state="success"
                    theme="dark"
                />
                <Badge
                    text="Badge3"
                    textVariant="h3"
                    state="warning"
                    theme="dark"
                />
                <Badge
                    text="Badge3"
                    textVariant="h3"
                    state="danger"
                    theme="dark"
                />
            </div>
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

export const Custom = Template.bind({});
Custom.args = {
    text: 'New',
    state: 'custom',
    bgColor: color.sky40,
    borderRadius: 20,
};
