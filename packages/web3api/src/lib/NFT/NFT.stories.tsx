import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MoralisProvider } from '../context/MoralisProvider';
import { moralisContext } from '../decorators/decorators';
import NFT from './NFT';

export default {
    title: '0.Web3v2/NFT',
    component: NFT,
    decorators: [moralisContext],
    parameters: {},
} as ComponentMeta<typeof NFT>;

const Template: ComponentStory<typeof NFT> = (args) => <NFT {...args} />;

export const CryptoPunk01 = Template.bind({});
CryptoPunk01.args = {
    chain: 'eth',
    address: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
    tokenId: '1',
    fetchMetadata: true,
};
