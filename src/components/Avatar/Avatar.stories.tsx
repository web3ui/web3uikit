import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Avatar from '../Avatar/Avatar';

export default {
    title: 'UI/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarImageDefault = Template.bind({});
AvatarImageDefault.args = {
    theme: 'image',
};

export const AvatarImageCustom = Template.bind({});
AvatarImageCustom.args = {
    theme: 'image',
    image: 'https://scalebranding.com/wp-content/uploads/2021/06/penguin.jpg',
};

export const AvatarLetters = Template.bind({});
AvatarLetters.args = {
    theme: 'letters',
    text: 'DM',
};
