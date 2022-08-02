import * as React from 'react';
import { color } from '@web3uikit/styles';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Cross, MoreVert } from '@web3uikit/icons';
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
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'My Cool Nft',
        <Tag text="Lazy Nft" color="red" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'Magi Cool Topen',
        <Tag text="Pack" color="yellow" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'My Marketplace',
        <Tag text="Nft Marketplace" color="red" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'Owl Magi',
        <Tag text="Bundle" color="purple" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'Owl Nft',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'Ape Yacht',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'Charzard',
        <Tag text="Bundle" color="red" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'Magi',
        <Tag text="Token" color="green" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'Moralis Magi',
        <Tag text="Nft Collection" color="blue" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'My Cool Nft',
        <Tag text="Lazy Nft" color="red" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
    ],
    [
        <Avatar theme="image" isRounded={true} fontSize={36} />,
        'Magi Cool Topen',
        <Tag text="Pack" color="yellow" />,
        '0x18...130e',
        <MoreVert fill="black" fontSize={32} />,
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
            {new Date(2017, 12, 11, 6, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392112
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2022, 4, 1, 16, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392114
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2020, 1, 21, 12, 27).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392118
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2019, 5, 6, 13, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392119
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2018, 12, 11, 15, 4).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392120
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2020, 4, 8, 16, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392122
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2020, 5, 21, 16, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392124
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2022, 4, 3, 16, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392125
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2022, 2, 18, 16, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392126
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2018, 1, 30, 18, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392127
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2022, 4, 21, 16, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392128
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2021, 7, 11, 16, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392129
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2019, 10, 10, 16, 24).toLocaleString()}
        </Typography>,
        <Typography variant="body16" color={color.grey}>
            120392130
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
                icon={<Cross fontSize={24} />}
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
            {new Date(2022, 9, 8, 16, 24).toLocaleString()}
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
                icon={<Cross fontSize={24} />}
            />
        </>,
    ],
];
