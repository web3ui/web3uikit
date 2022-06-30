import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ENSAvatar from './ENSAvatar';
import { ENSAvatarprops } from './types';
import { moralisContext } from '../../decorators';

export default {
    title: '1.Web3/ENSAvatar',
    component: ENSAvatar,
    decorators: [moralisContext],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof ENSAvatar>;

const Template: ComponentStory<typeof ENSAvatar> = (
    args: ENSAvatarprops,
) => <ENSAvatar {...args} />;

export const Default = Template.bind({});