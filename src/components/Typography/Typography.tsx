import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../../styles/colors';
import { Icon, iconTypes } from '../Icon';
import { TypographyProps, variantType } from './types';
import { CopyIconStyled, getTypographyStyle } from './Typography.styles';

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
    copyable,
    children,
    ...otherProps
}: TypographyProps) => {
    const Tag = getTag(variant);
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (): void => {
        if (typeof navigator == 'undefined') return;
        navigator.clipboard.writeText(`${children}`);
        setIsCopied(true);
    };

    const renderCopyIcon = () =>
        copyable && (
            <CopyIconStyled
                className="input_copy"
                onClick={() => copyToClipboard()}
            >
                {isCopied ? (
                    <Icon svg={iconTypes.check} fill={color.green} />
                ) : (
                    <Icon svg={iconTypes.copy} />
                )}
            </CopyIconStyled>
        );

    return (
        // @ts-ignore
        <Tag {...otherProps}>
            {children}
            {renderCopyIcon()}
        </Tag>
    );
};

const Typography = styled(DynamicText)`
    ${(p) => getTypographyStyle(p)};
    position: relative;
`;

export default Typography;
