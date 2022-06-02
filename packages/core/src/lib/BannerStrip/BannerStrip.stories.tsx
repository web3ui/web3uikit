import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BannerStrip from './BannerStrip';

const hasPositionAbsoluteFix = {
    transform: 'scale(1)',
    height: '60px',
};

export default {
    title: '5.Popup/BannerStrip',
    component: BannerStrip,
    decorators: [
        (storyFn) => <div style={hasPositionAbsoluteFix}>{storyFn()}</div>,
    ],
} as ComponentMeta<typeof BannerStrip>;

const testFunction = () => alert('banner button clicked');

const Template: ComponentStory<typeof BannerStrip> = (args) => (
    <BannerStrip {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
    text: 'Hey this is a notification you should check out',
    type: 'standard',
};

export const StandardWithButton = Template.bind({});
StandardWithButton.args = {
    text: 'Hey this is a notification you should check out',
    type: 'standard',
    buttonDisplayed: true,
    buttonConfig: {
        text: 'Click me',
        onClick: testFunction,
    },
};

export const Warning = Template.bind({});
Warning.args = {
    text: 'This is not a drill... its a warning banner',
    type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
    text: '404 not the droids you are looking for',
    type: 'error',
};

export const Success = Template.bind({});
Success.args = {
    text: 'Looking good',
    type: 'success',
};
