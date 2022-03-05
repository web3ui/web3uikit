import React from 'react';
import styled from 'styled-components';
import { CopyButton } from '../CopyButton';
import { TypographyProps, variantType } from './types';
import { getTypographyStyle, SpanTypographyWrapper } from './Typography.styles';

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

const DynamicText = ({
    variant = 'body16',
    copyable,
    children,
    onCopy = () => {},
    ...otherProps
}: TypographyProps) => {
    const Tag = getTag(variant);

    return (
        // @ts-ignore
        <SpanTypographyWrapper>
            <Tag {...otherProps}>
                {children}
                {copyable && <CopyButton text={children} onCopy={onCopy} />}
            </Tag>
        </SpanTypographyWrapper>
    );
};

const Typography = styled(DynamicText)`
    ${(p) => getTypographyStyle(p)};
    position: relative;
    margin: 0;
`;

export default Typography;
