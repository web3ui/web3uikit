import React, { FC } from 'react';
import styled from 'styled-components';
import color from '../../styles/colors';
import { resetButtonCSS } from '../../styles/reset';
import { Icon } from '../Icon';
import { IHideButtonProps } from './types';

const HideButtonStyled = styled.button`
    ${resetButtonCSS};
    cursor: pointer;
`;

const HideButton: FC<IHideButtonProps> = ({
    iconColor = color.blue,
    iconSize = 24,
    isHidden = false,
    onToggle,
}) => {
    return (
        <HideButtonStyled onClick={onToggle} data-testid="test-hidebutton">
            {isHidden ? (
                <Icon svg="eyeClosed" size={iconSize} fill={`${iconColor}`} />
            ) : (
                <Icon svg="eye" size={iconSize} fill={`${iconColor}`} />
            )}
        </HideButtonStyled>
    );
};

export default HideButton;
