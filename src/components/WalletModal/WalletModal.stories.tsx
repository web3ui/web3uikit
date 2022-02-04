import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WalletModal from '../../components/WalletModal/WalletModal';
import { moralisContext } from '../../decorators';

export default {
    title: 'Web3/WalletModal',
    component: WalletModal,
    decorators: [moralisContext],
} as ComponentMeta<typeof WalletModal>;

const Template: ComponentStory<typeof WalletModal> = (args) => (
    <WalletModal {...args} />
);

export const DefaultWalletModal = Template.bind({});
DefaultWalletModal.args = {
    isOpened: true,
};
