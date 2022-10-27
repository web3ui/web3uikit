import { ComponentStory, ComponentMeta } from '@storybook/react';
import Upload from './Upload';

export default {
    title: '4.UI/Upload',
    component: Upload,
    argTypes: {
        onChange: { action: 'file uploaded' },
    },
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
    theme: 'textOnly',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    theme: 'withIcon',
};

export const CustomText = Template.bind({});
CustomText.args = {
    theme: 'withIcon',
    descriptionText: 'Only .jpeg files are accepted',
    acceptedFiles: 'image/jpeg',
    style: {}
};