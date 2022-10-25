import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WalletModal } from '../WalletModal';
import { moralisContext } from '../../web3utils/decorators';
import { useArgs } from '@storybook/addons';

const hasPositionAbsoluteFix = {
    transform: 'scale(1)',
    height: '95vh',
};

export default {
    title: '1.Web3-Parse/WalletModal',
    component: WalletModal,
    decorators: [
        moralisContext,
        (storyFn) => <div style={hasPositionAbsoluteFix}>{storyFn()}</div>,
    ],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof WalletModal>;

const Template: ComponentStory<typeof WalletModal> = (args) => {
    const [{}, updateArgs] = useArgs();
    return (
        <WalletModal
            {...args}
            setIsOpened={() => updateArgs({ isOpened: false })}
        />
    );
};

export const DefaultWalletModal = Template.bind({});
DefaultWalletModal.args = {
    isOpened: true,
};
