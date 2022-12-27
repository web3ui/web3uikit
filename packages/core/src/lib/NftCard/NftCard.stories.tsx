import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NftCard from './NftCard';
import { color } from '@web3uikit/styles';

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
    backgroundColor: color.aero10,
};

export const Custom = Template.bind({});
Custom.args = {
    moralisApiResult: {
        token_address: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
        token_id:
            '113461209507512867518933452141320285231135646094834536306130710983923277496520',
        amount: '96',
        owner_of: '0xfad8c4d1b26f280ca7a3f3f05e0fba1954e69c93',
        token_hash: '6a5c632686374a276c17510e45fa546f',
        block_number_minted: '27090571',
        block_number: '36819147',
        transfer_index: [36819147, 74, 250, 0],
        contract_type: 'ERC1155',
        name: 'OpenSea Collections',
        symbol: 'OPENSTORE',
        token_uri:
            'https://api.opensea.io/api/v2/metadata/matic/0x2953399124F0cBB46d2CbACD8A89cF0599974963/0xfad8c4d1b26f280ca7a3f3f05e0fba1954e69c930000000000001c00000000c8',
        metadata:
            '{"image":"https://lh3.googleusercontent.com/rp89xp0BIhvqaRPeSt-ONlBXyKb016HFAOr_f3HjkdQjBgcXmwZJXPafTlfft9qR6yKB7Ga7ycFtu2Oa4Aqder4_rBoKyMqL8b-e6Q","name":"Moralis Core Keycard","description":"The Core Team Keycard is used to identify a Moralis Core Team member.\\n\\nThe token is held proudly by Moralis developers, content creators, and supporting team members a like!\\n\\nKeep the hedgehog, push the flywheel together, be the movement: Moralis!","external_link":null,"animation_url":"https://openseauserdata.com/files/61af0e98bb91bee60234fcad25a9b343.mp4","traits":[]}',
        last_token_uri_sync: '2022-12-05T16:00:31.675Z',
        last_metadata_sync: '2022-12-05T16:00:34.932Z',
        minter_address: "ERC1155 tokens don't have a single minter",
        normalized_metadata: {
            name: 'Moralis Core Keycard',
            description:
                'The Core Team Keycard is used to identify a Moralis Core Team member.\n\nThe token is held proudly by Moralis developers, content creators, and supporting team members a like!\n\nKeep the hedgehog, push the flywheel together, be the movement: Moralis!',
            animation_url: null,
            external_link: null,
            image:
                'https://lh3.googleusercontent.com/rp89xp0BIhvqaRPeSt-ONlBXyKb016HFAOr_f3HjkdQjBgcXmwZJXPafTlfft9qR6yKB7Ga7ycFtu2Oa4Aqder4_rBoKyMqL8b-e6Q',
            attributes: [],
        },
    },
    chain: 'Polygon',
    backgroundColor: color.aero10,
    detailsBorder: 'none',
};
