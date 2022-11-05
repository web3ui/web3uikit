import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelBase from './LabelBase';
import { labelBaseTestValues } from './values';

const { id, required, testId, text } = labelBaseTestValues;

export default {
    title: '2.Forms/InputNew/atoms/LabelBase',
    component: LabelBase,
} as ComponentMeta<typeof LabelBase>;

const Template: ComponentStory<typeof LabelBase> = (args) => (
    <LabelBase {...args} />
);

export const LabelBaseDefault = Template.bind({});
LabelBaseDefault.args = {
    id: id,
    testId: testId,
    text: text,
};
LabelBaseDefault.storyName = 'Label Base';

export const LabelBaseRequired = Template.bind({});
LabelBaseRequired.args = {
    id: id,
    required: required,
    testId: testId,
    text: text,
};
LabelBaseRequired.storyName = 'Label Base Required';
