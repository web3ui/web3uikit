import { ComponentStory, ComponentMeta } from '@storybook/react';
import CryptoAddress from './CryptoAddress';
import { color } from '@web3uikit/styles';

export default {
    title: '4.UI/Crypto Address',
    component: CryptoAddress,
    argTypes: {},
} as ComponentMeta<typeof CryptoAddress>;

const Template: ComponentStory<typeof CryptoAddress> = (args) => (
    <CryptoAddress {...args} />
);

export const Default = Template.bind({});
Default.args = {
    walletAddress: '0x716faAbE78090b075580bE27fF4DB69Ec7245d3e',
    walletColor: color.aero80,
};
