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
        case 'caption10':
        case 'caption12':
        case 'caption14':
        default:
            return 'span';
    }
};

const DynamicText: FC<TypographyProps> = ({
    children,
    copyable,
    fontSize,
    iconSize,
    italic,
    monospace,
    onCopy,
    variant = 'body16',
    ...props
}) => {
    const Tag = getTag(variant);

    return (
        // @ts-ignore
        <Tag data-testid="test-typography" {...props}>
            {children}
            {copyable && (
                <CopyButton
                    iconSize={iconSize}
                    onCopy={onCopy}
                    text={`${children}`}
                />
            )}
        </Tag>
    );
};

const Typography = styled(DynamicText)`
    ${(p) => getTypographyStyle(p)};
    margin: 0;
    position: relative;
`;

export default Typography;
