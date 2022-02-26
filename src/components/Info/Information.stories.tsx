import { ComponentStory, ComponentMeta } from '@storybook/react';
import Information from './Information';
import React from 'react';

export default {
    title: '4.UI/Information',
    component: Information,
} as ComponentMeta<typeof Information>;

const Template: ComponentStory<typeof Information> = (args) => {
    return <Information {...args} />;
};

export const Regular = Template.bind({});
Regular.args = {
    information: '1000 Mage',
    topic: 'Your Balance',
};
