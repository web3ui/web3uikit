import React from 'react';
import styled, { css } from 'styled-components';
import { color, resetButtonCSS, resetCSS } from '@web3uikit/styles';
import { IPrefixIconProps } from './types';

type TInputProps = Pick<IPrefixIconProps, 'isPasswordWithEndIcon' | 'position'>;

const PrefixIcon: React.FC<IPrefixIconProps> = ({
    icon,
    isPasswordWithEndIcon,
    position,
}) => (
    <DivStyledIcon
        isPasswordWithEndIcon={isPasswordWithEndIcon}
        position={position || 'front'}
    >
        {icon}
    </DivStyledIcon>
);

const getRightPadding = (isPasswordWithEndIcon: boolean) => {
    return isPasswordWithEndIcon ? '64px' : '16px';
};

const rightIconDivider = css`
    &:after {
        background-color: ${color.navy20};
        content: '';
        display: block;
        height: 60%;
        pointer-events: none;
        position: absolute;
        right: -14px;
        top: 20%;
        width: 1px;
    }
`;

const DivStyledIcon = styled.div<TInputProps>`
    ${resetButtonCSS};
    ${resetCSS};
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: ${(p) => (p.position === 'front' ? '16px' : 'unset')};
    max-width: 24px;
    position: absolute;
    right: ${(p) =>
        p.position === 'end'
            ? getRightPadding(p.isPasswordWithEndIcon)
            : 'unset'};
    top: 0;
    width: 100%;
    z-index: 2;

    & :first-child {
        fill: ${color.blueGray50};
        transition: fill 0.2s ease-out;
        width: 100%;
        height: 100%;
    }

    ${(p) => p.isPasswordWithEndIcon && rightIconDivider}
`;

export default PrefixIcon;
