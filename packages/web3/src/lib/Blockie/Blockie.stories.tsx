import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Blockie from './Blockie';
import { BlockieProps } from './types';

export default {
  title: '1.Web3-Parse/Blockie',
  component: Blockie
} as ComponentMeta<typeof Blockie>;

const Template: ComponentStory<typeof Blockie> = (args: BlockieProps) => <Blockie {...args} />;

export const CustomSeed = Template.bind({});
CustomSeed.args = {
  seed: '0x0000000000000000000000000000000000000000'
};
