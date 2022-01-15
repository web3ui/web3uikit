import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
import { Avatar } from '../Avatar';
import { Tag } from '../Tag';
import { Icon } from '../Icon';

export default {
    title: 'Ui/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const columnsConfig = `80px 3fr 2fr 2fr 80px`;
const header = [
    '',
    <span>Name</span>,
    <span>Type</span>,
    <span>Module</span>,
    '',
];
const data = [
    [
        <Avatar theme="image" />,
        'Moralis Magi',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'My Cool Nft',
        <Tag text="Lazy Nft" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Magi Cool Topen',
        <Tag text="Pack" color="yellow" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'My Marketplace',
        <Tag text="Nft Marketplace" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Owl Magi',
        <Tag text="Bundle" color="purple" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Owl Nft',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Ape Yacht',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Charzard',
        <Tag text="Bundle" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Magi',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Moralis Magi',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'My Cool Nft',
        <Tag text="Lazy Nft" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Magi Cool Topen',
        <Tag text="Pack" color="yellow" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'My Marketplace',
        <Tag text="Nft Marketplace" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Owl Magi',
        <Tag text="Bundle" color="purple" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Owl Nft',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Ape Yacht',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Charzard',
        <Tag text="Bundle" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
    [
        <Avatar theme="image" />,
        'Magi',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg="more vert" />,
    ],
];
const pageSize: number = 8;
const maxPages = 5;

export const DefaultTable = Template.bind({});

DefaultTable.args = {
    columnsConfig,
    header,
    data: data,
    pageSize,
    maxPages,
};

export const NoPagination = Template.bind({});
NoPagination.args = {
    columnsConfig,
    header,
    data,
    pageSize,
    maxPages,
    noPagination: true,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
    columnsConfig: `80px 450px 450px 450px 80px`,
    header,
    data,
    pageSize,
    maxPages,
};

export const NoData = Template.bind({});
NoData.args = {
    columnsConfig,
    header,
    data: [],
    pageSize,
    maxPages,
};
