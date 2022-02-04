import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WalletModal from '../../components/WalletModal/WalletModal';

export default {
    title: 'Web3/WalletModal',
    component: WalletModal,
} as ComponentMeta<typeof WalletModal>;

const Template: ComponentStory<typeof WalletModal> = (args) => (
    <WalletModal {...args} />
);

export const DefaultWalletModal = Template.bind({});
// DefaultWalletModal.args = {
//     label: 'Label text',
//     name: 'Test text WalletModal',
// };
