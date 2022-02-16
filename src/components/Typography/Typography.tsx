import React from 'react';
import styled from 'styled-components';
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

const DynamicText = ({
    variant = 'body16',
    italic,
    monospace,
    ...otherProps
}: TypographyProps) => {
    const Tag = getTag(variant);
    // @ts-ignore
    return <Tag {...otherProps} />;
};

const Typography = styled(DynamicText)`
    ${(p) => getTypographyStyle(p)};
`;

export default Typography;
