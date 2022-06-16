import { ComponentStory } from '@storybook/react';
import { NotificationProvider } from '../lib';
import IconsGallery from './IconGallery';

export default {
    title: '8.Icons/Gallery',
    component: IconsGallery,
} as unknown;

const Template: ComponentStory<typeof IconsGallery> = (args) => {
    return (
        <NotificationProvider>
            <IconsGallery />
        </NotificationProvider>
    );
};

export const Gallery = Template.bind({});
