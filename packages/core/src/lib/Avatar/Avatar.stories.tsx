import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Avatar from '../Avatar/Avatar';

export default {
    title: '6.Graphic/Avatar',
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
    image: 'https://nftcoders.com/avatar/avatar-cool.svg',
};

export const AvatarLetters = Template.bind({});
AvatarLetters.args = {
    theme: 'letters',
    text: 'DM',
};

export const RoundedAvatarImageDefault = Template.bind({});
RoundedAvatarImageDefault.args = {
    theme: 'image',
    isRounded: true,
};

export const RoundedAvatarImageCustom = Template.bind({});
RoundedAvatarImageCustom.args = {
    theme: 'image',
    image: 'https://academy.moralis.io/wp-content/uploads/2021/12/Illustration4_home.svg',
    isRounded: true,
};

export const RoundedAvatarLetters = Template.bind({});
RoundedAvatarLetters.args = {
    theme: 'letters',
    text: 'DM',
    isRounded: true,
};

export const CustomBackgroundAndBorderRadius = Template.bind({});
CustomBackgroundAndBorderRadius.args = {
    theme: 'letters',
    text: 'RA',
    borderRadius: 10,
    avatarBackground: '#ff0000',
};

export const CustomSizeAndFontSize = Template.bind({});
CustomSizeAndFontSize.args = {
    theme: 'letters',
    text: 'RA',
    isRounded: true,
    avatarBackground: '#ff0000',
    size: 80,
    fontSize: 25,
};

export const RandomBackgroundColor = Template.bind({});
RandomBackgroundColor.args = {
    theme: 'letters',
    text: 'CS',
    borderRadius: 10,
};
