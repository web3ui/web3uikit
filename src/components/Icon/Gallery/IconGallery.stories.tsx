import React from 'react';
import { ComponentStory } from '@storybook/react';
import { NotificationProvider } from '../../Notification';
import IconsGallery from './IconGallery';

export default {
    title: '8.Icons/Gallery',
    component: IconsGallery,
} as unknown;

const Template: ComponentStory<typeof IconsGallery> = (_args) => {
    return (
        <NotificationProvider>
            <IconsGallery />
        </NotificationProvider>
    );
};

export const Gallery = Template.bind({});
