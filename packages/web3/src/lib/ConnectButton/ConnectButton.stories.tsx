import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConnectButton from './ConnectButton';
import { moralisContext } from '../../web3utils/decorators';

const centerLayout = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
};

export default {
    title: '1.Web3-Parse/ConnectButton',
    component: ConnectButton,
    decorators: [
        moralisContext,
        (storyFn) => <div style={centerLayout}>{storyFn()}</div>,
    ],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof ConnectButton>;

const Template: ComponentStory<typeof ConnectButton> = (args) => (
    <ConnectButton {...args} />
);

export const Default = Template.bind({});
export const NoMoralisAuth = Template.bind({});
NoMoralisAuth.args = {
    moralisAuth: false,
};
