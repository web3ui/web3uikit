import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ENSAvatar from './ENSAvatar';
import { moralisContext } from '../../web3utils/decorators';

export default {
    title: '1.Web3-Parse/ENSAvatar',
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

const Template: ComponentStory<typeof ENSAvatar> = (args) => (
    <ENSAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    size: 100,
};
