import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelBase from '../LabelBase';
import { labelBaseTestValues } from '../values';

const { id, required, testid, text } = labelBaseTestValues;

export default {
    title: '2.Forms/atoms/LabelBase',
    component: LabelBase,
} as ComponentMeta<typeof LabelBase>;

const Template: ComponentStory<typeof LabelBase> = (args) => (
    <LabelBase {...args} />
);

export const LabelBaseDefault = Template.bind({});
LabelBaseDefault.args = {
    backgroundColor: 'transparent',
    id: id,
    testid: testid,
    text: text,
};
LabelBaseDefault.storyName = 'Label Base';

export const LabelBaseRequired = Template.bind({});
LabelBaseRequired.args = {
    id: id,
    required: required,
    testid: testid,
    text: text,
};
LabelBaseRequired.storyName = 'Label Base Required';
