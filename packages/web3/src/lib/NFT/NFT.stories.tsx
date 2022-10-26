import { ComponentStory, ComponentMeta } from '@storybook/react';
import NFT from './NFT';
import { moralisContext } from '../../web3utils/decorators';
import { chainToHex } from '../../web3utils';
export default {
    title: '1.Web3-Parse/NFT',
    component: NFT,
    decorators: [
        moralisContext,
        (storyFn) => (
            <div style={{ backgroundColor: '#f2f6ff', padding: '64px' }}>
                {storyFn()}
            </div>
        ),
    ],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
    // Fix: Storybook does not display dropdown to select chain
    argTypes: {
        chain: {
            options: [...Object.keys(chainToHex)],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof NFT>;

const Template: ComponentStory<typeof NFT> = (args) => <NFT {...args} />;

export const CryptoPunk01 = Template.bind({});
CryptoPunk01.args = {
    chain: 'eth',
    address: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
    tokenId: '1',
    fetchMetadata: true,
};
