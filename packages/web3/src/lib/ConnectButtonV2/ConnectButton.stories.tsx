import { ComponentStory, ComponentMeta } from '@storybook/react';
import WagmiSession from '../../web3utils/WagmiSession';
import ConnectButton from './ConnectButton';

export default {
    title: '1.web3/ConnectButton2',
    component: ConnectButton,
} as ComponentMeta<typeof ConnectButton>;

const Template: ComponentStory<typeof ConnectButton> = (args) => (
    <WagmiSession>
        <ConnectButton {...args} />
    </WagmiSession>
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Connect Button V2';
