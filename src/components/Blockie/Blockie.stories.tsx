import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Blockie from './Blockie';
import { BlockieProps } from './types';
import { moralisContext } from '../../decorators';

export default {
    title: 'Web3/Blockie',
    component: Blockie,
    decorators: [moralisContext],
} as ComponentMeta<typeof Blockie>;

const Template: ComponentStory<typeof Blockie> = (args: BlockieProps) => (
    <Blockie {...args} />
);

export const Connected = Template.bind({});

export const CustomSeed = Template.bind({});
CustomSeed.args = {
    seed: '0x0000000000000000000000000000000000000000',
};
