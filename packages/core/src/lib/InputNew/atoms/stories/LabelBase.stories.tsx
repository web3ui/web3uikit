import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelBase from '../LabelBase';
import { testLabelId } from '../values';

export default {
    title: '2.Forms/InputNew/atoms/LabelBase',
    component: LabelBase,
} as ComponentMeta<typeof LabelBase>;

const Template: ComponentStory<typeof LabelBase> = (args) => (
    <LabelBase {...args} testid={testLabelId} />
);

export const LabelBaseDefault = Template.bind({});
LabelBaseDefault.args = {
    id: 'label-base',
    text: 'Labels are good for accessibility',
};
LabelBaseDefault.storyName = 'Label Base';

export const LabelBaseRequired = Template.bind({});
LabelBaseRequired.args = {
    id: 'label-base',
    required: true,
    text: 'Required Label',
};
LabelBaseRequired.storyName = 'Label Required';
