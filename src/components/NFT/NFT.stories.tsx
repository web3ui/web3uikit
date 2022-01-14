import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NFT from './NFT';

export default {
    title: 'UI/NFT',
    component: NFT,
} as ComponentMeta<typeof NFT>;

const Template: ComponentStory<typeof NFT> = (args) => (
        <NFT {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
    img_url: "https://lh3.googleusercontent.com/UoFV2HVC6fpBOC0ybX85Lus0DCunFPUENMjohCMoSSKEDbNCaYOtpCFKd4Bbbdf7P3aubU5ieEtAHYnesgadifOJUnQhxa6Nkhyz",
    token_id: "01",
    description: "",
    type: "ERC721",
    name: "Bored Ape",
    token_address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
};