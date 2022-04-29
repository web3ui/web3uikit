import React, { FC } from 'react';
import styled from 'styled-components';
import { CopyButton } from '../CopyButton';
import { TypographyProps, variantType } from './types';
import { getTypographyStyle } from './Typography.styles';

const getTag = (variant: variantType) => {
    switch (variant) {
        case 'h1':
            return 'h1';
        case 'h2':
            return 'h2';
        case 'h3':
            return 'h3';
        case 'h4':
            return 'h4';
        case 'subtitle1':
        case 'subtitle2':
            return 'h2';
        case 'body18':
        case 'body16':
        case 'caption12':
        case 'caption14':
        default:
            return 'span';
    }
};

const DynamicText: FC<TypographyProps> = ({
    variant = 'body16',
    italic,
    monospace,
    copyable,
    children,
    iconSize,
    onCopy = () => {},
    ...otherProps
}) => {
    const Tag = getTag(variant);

    return (
        // @ts-ignore
        <Tag {...otherProps}>
            {children}
            {copyable && (
                <CopyButton
                    iconSize={iconSize}
                    text={`${children}`}
                    onCopy={onCopy}
                />
            )}
        </Tag>
    );
};

const Typography = styled(DynamicText)`
    ${(p) => getTypographyStyle(p)};
    position: relative;
    margin: 0;
`;

export default Typography;
