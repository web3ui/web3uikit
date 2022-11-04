import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelBase from './LabelBase';

export default {
    title: '2.Forms/Input/atoms/LabelBase',
    component: LabelBase,
} as ComponentMeta<typeof LabelBase>;

const Template: ComponentStory<typeof LabelBase> = (args) => (
    <LabelBase {...args} />
);

export const LabelBaseStory = Template.bind({});
LabelBaseStory.args = {
    text: 'Labels are good for accessibility',
};
