import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { Server } from '@web3uikit/icons';
import { Input } from '.';
// import { validateRegExp } from '../../utils/const';

export default {
    title: '2.Forms/InputNew',
    component: Input,
    parameters: {
        actions: {
            handles: ['onChange', 'changed', 'onBlur'],
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
    label: 'Label text',
    name: 'Test text Input',
    type: 'number',
    validation: {
        required: true,
        characterMaxLength: 5,
    },
};
