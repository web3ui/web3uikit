import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NftCard from './NftCard';

export default {
    title: '4.UI/NftCard',
    component: NftCard,
} as ComponentMeta<typeof NftCard>;

const Template: ComponentStory<typeof NftCard> = (args) => (
    <NftCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    moralisApiResult: {
        token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        token_id: '4789',
        amount: '1',
        owner_of: '0x6682f185d982bd341a0e1dfccbc2562e3cb1eea7',
        token_hash: '61554743720b60143f35e7adcc2a6fc7',
        block_number_minted: '12346998',
        block_number: '15957801',
        transfer_index: [15957801, 92, 206, 0],
        contract_type: 'ERC721',
        name: 'BoredApeYachtClub',
        symbol: 'BAYC',
        token_uri:
            'https://ipfs.moralis.io:2053/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/4789',
        metadata:
            '{"image":"ipfs://QmZcRZu2cMJG9KUSta6WTrRek647WSG5mJZLhimwbC2y56","attributes":[{"trait_type":"Background","value":"Aquamarine"},{"trait_type":"Fur","value":"Pink"},{"trait_type":"Eyes","value":"3d"},{"trait_type":"Mouth","value":"Bored"},{"trait_type":"Clothes","value":"Service"}]}',
        last_token_uri_sync: '2022-10-04T14:49:59.308Z',
        last_metadata_sync: '2022-10-04T14:50:00.573Z',
        minter_address: '0x8be13ff71224ad525f0474553aa7f8621b856bd4',
    },
    chain: 'Ethereum',
};
