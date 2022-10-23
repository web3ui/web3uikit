import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConnectButton from './ConnectButton';
import { WagmiContext } from '../decorators/wagmiDecorator';

export default {
    title: '0.web3api/ConnectButton',
    component: ConnectButton,
    decorators: [WagmiContext, (storyFn) => storyFn()],
} as ComponentMeta<typeof ConnectButton>;

const Template: ComponentStory<typeof ConnectButton> = (args) => (
    <ConnectButton {...args} />
);

export const Connect = Template.bind({});
Connect.args = {};
