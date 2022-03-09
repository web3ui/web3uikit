import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Skeleton from './Skeleton';
import { SkeletonProps } from './types';

export default {
    title: '6.Graphic/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const SkeletonDemo: ComponentStory<typeof Skeleton> = () => {
    return (
        <div
            style={{
                display: 'flex',
                padding: '10px',
                border: '1px solid',
                borderRadius: '20px',
                width: '250px',
                gap: '5px',
            }}
        >
            <Skeleton theme="image" />
            <div style={{ width: '100%', height: '100%' }}>
                <Skeleton theme="text" />
                <Skeleton theme="subtitle" width="30%" />
            </div>
        </div>
    );
};

const Template: ComponentStory<typeof Skeleton> = (args: SkeletonProps) => (
    <Skeleton {...args} />
);

export const SkeletonImage = Template.bind({});
SkeletonImage.args = {
    theme: 'image',
};
