// importing boilerplate stuff for Storybook
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// importing your new component
import Upload from './Upload';

// title: group / name in Storybook
// component: your new component
// argTypes: onClick is a 'Storybook Event' to simulate clicks
export default {
    title: '7.Demo/Upload',
    component: Upload,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Upload>;

// another boilerplate to set up your Storybook template with your new component
const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

// ////////////////////////////////////////////////////////////////////////////
// NOTE please only include the min props needed for each render
// this means the next dev using 'get code' in Storybook will not get confused
// ////////////////////////////////////////////////////////////////////////////

// Story 1 Default
export const Default = Template.bind({});
Default.args = {
    theme: 'textOnly',
};

// // Story 2 InitializeRed
// export const InitializeRed = Template.bind({});
// InitializeRed.args = {
//     textOn: 'green light',
//     textOff: 'red light!',
//     state: 'redLight',
// };

// // Story 3 UnderLinedText
// export const UnderLinedText = Template.bind({});
// UnderLinedText.args = {
//     textOn: 'green light',
//     textOff: 'red light!',
//     hasUnderline: true,
// };
