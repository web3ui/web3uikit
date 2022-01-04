import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PillGroup from './PillGroup';

export default {
  title: 'Tab/Group',
  component: PillGroup,
} as ComponentMeta<typeof PillGroup>;

const Template: ComponentStory<typeof PillGroup> = (args) => (
  <PillGroup {...args} />
);

export const Regular = Template.bind({});
Regular.args = {};

export const GreyToGreenOnPress = Template.bind({});
GreyToGreenOnPress.args = {
  children: [
    <p key={'1'}>Here goes your content</p>,
    <p key={'2'}>Here goes your second content</p>,
  ],
  tabs: ['Tab 1', 'Tab 2'],
};
