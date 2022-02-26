import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Loading from './Loading';

export default {
    title: '6.Graphic/Loading',
    component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
    <div
        style={{
            backgroundColor: '#ECECFE',
            padding: '20px',
            borderRadius: '8px',
        }}
    >
        <Loading {...args} />
    </div>
);

export const Loader = Template.bind({});
Loader.args = {};

export const LoaderWithText = Template.bind({});
LoaderWithText.args = {
    text: 'Loading....',
};

export const LoaderWithCustomColor = Template.bind({});
LoaderWithCustomColor.args = {
    text: 'Loading....',
    spinnerColor: '#2E7DAF',
};

export const LoaderWithCustomSize = Template.bind({});
LoaderWithCustomSize.args = {
    size: 40,
    spinnerColor: '#2E7DAF',
};
