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
    image: 'https://academy.moralis.io/wp-content/uploads/2021/12/Illustration4_home.svg',
};

export const AvatarLetters = Template.bind({});
AvatarLetters.args = {
    theme: 'letters',
    text: 'DM',
};

export const RoundedAvatarImageDefault = Template.bind({});
RoundedAvatarImageDefault.args = {
    theme: 'image',
    rounded: true,
};

export const RoundedAvatarImageCustom = Template.bind({});
RoundedAvatarImageCustom.args = {
    theme: 'image',
    image: 'https://academy.moralis.io/wp-content/uploads/2021/12/Illustration4_home.svg',
    rounded: true,
};

export const RoundedAvatarLetters = Template.bind({});
RoundedAvatarLetters.args = {
    theme: 'letters',
    text: 'DM',
    rounded: true,
};
