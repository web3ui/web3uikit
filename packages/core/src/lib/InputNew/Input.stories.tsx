import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '.';

export default {
    title: '2.Forms/InputNew',
    component: Input,
    actions: {
        handles: ['onChange', 'onBlur'],
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputNew = Template.bind({});
InputNew.args = {
    label: 'New Improved Input',
    placeholder: 'try me',
};
InputNew.storyName = 'Input';

export const InputValue = Template.bind({});
InputValue.args = {
    label: 'New Improved Input',
    value: 'try me',
};
InputValue.storyName = 'Input + Value';
