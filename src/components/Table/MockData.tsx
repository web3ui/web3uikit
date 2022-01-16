import * as React from 'react';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { Tag } from '../Tag';

export const columnsConfig = `80px 3fr 2fr 2fr 80px`;
export const header = [
    '',
    <span>Name</span>,
    <span>Type</span>,
    <span>Module</span>,
    '',
];
export const data = [
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
];
export const pageSize: number = 5;
export const maxPages = 3;
