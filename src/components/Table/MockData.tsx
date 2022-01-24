import * as React from 'react';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { Tag } from '../Tag';
import { iconTypes } from '../Icon/collection';

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
        <Avatar theme="image" isRounded={true} />,
        'Moralis Magi',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'My Cool Nft',
        <Tag text="Lazy Nft" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'Magi Cool Topen',
        <Tag text="Pack" color="yellow" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'My Marketplace',
        <Tag text="Nft Marketplace" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'Owl Magi',
        <Tag text="Bundle" color="purple" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'Owl Nft',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'Ape Yacht',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'Charzard',
        <Tag text="Bundle" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'Magi',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'Moralis Magi',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'My Cool Nft',
        <Tag text="Lazy Nft" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} />,
        'Magi Cool Topen',
        <Tag text="Pack" color="yellow" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
];
export const pageSize: number = 5;
export const maxPages = 3;
