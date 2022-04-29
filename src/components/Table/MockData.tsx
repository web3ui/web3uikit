import * as React from 'react';
import color from '../../styles/colors';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { Tag } from '../Tag';
import { Typography } from '../Typography';

export const columnsConfig = '80px 3fr 2fr 2fr 80px';
export const header = [
    '',
    <span>Name</span>,
    <span>Type</span>,
    <span>Module</span>,
    '',
];
export const data = [
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Moralis Magi',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'My Cool Nft',
        <Tag text="Lazy Nft" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Magi Cool Topen',
        <Tag text="Pack" color="yellow" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'My Marketplace',
        <Tag text="Nft Marketplace" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Owl Magi',
        <Tag text="Bundle" color="purple" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Owl Nft',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Ape Yacht',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Charzard',
        <Tag text="Bundle" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Magi',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Moralis Magi',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'My Cool Nft',
        <Tag text="Lazy Nft" color="red" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
    [
        <Avatar theme="image" isRounded={true} size={36} />,
        'Magi Cool Topen',
        <Tag text="Pack" color="yellow" />,
        '0x18...130e',
        <Icon fill="black" size={32} svg={iconTypes.moreVert} />,
    ],
];
export const pageSize: number = 5;
export const maxPages = 3;

export const syncColumnsConfig = '3fr 2fr 2fr 0.7fr';
export const syncHeader = [
    <span>Description</span>,
    <span>Last Synced</span>,
    <span>Queue</span>,
    '',
];

export const syncData = [
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
    [
        <>
            <Avatar theme="image" isRounded={true} size={36} />
            <div style={{ marginLeft: '16px' }}>
                <Typography variant="body16" color={color.blueDark}>
                    Moralis Magi
                </Typography>
            </div>
        </>,
        <Typography variant="body16" color={color.grey}>
            01/03/2022 7:44 AM
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392131
        </Typography>,
        <>
            <Button
                isTransparent
                disabled
                text="Edit"
                color="blue"
                size="small"
            />
            <Button
                isTransparent
                disabled
                iconLayout="icon-only"
                iconColor="red"
                icon="x"
            />
        </>,
    ],
];
