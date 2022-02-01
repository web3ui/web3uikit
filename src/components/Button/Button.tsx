import React from 'react';
import Icon from '../../components/Icon/Icon';
import { Loading } from '../Loading';
import { ButtonStyled } from './Button.styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
    color,
    disabled = false,
    icon,
    iconLayout = 'leading',
    id,
    isFullWidth = false,
    isLoading = false,
    loadingText = 'Loading...',
    onClick = (e) => e.preventDefault(),
    size = 'regular',
    text = 'click',
    theme,
    type = 'button',
}: ButtonProps) => {
    return (
        <ButtonStyled
            color={color}
            data-testid="test-button"
            disabled={disabled || isLoading}
            iconLayout={iconLayout}
            id={id}
            isFullWidth={isFullWidth}
            isLoading={isLoading}
            onClick={onClick}
            size={size}
            theme={theme}
            type={type}
        >
            {isLoading && <Loading size={15} />}
            {icon && <Icon svg={icon} fill="inherit" size={20} />}
            <span>{isLoading ? loadingText : text}</span>
        </ButtonStyled>
    );
};

export default Button;
