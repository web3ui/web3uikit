import React from 'react';
import { ButtonStyled } from './Button.styles';
import Icon from '../../components/Icon/Icon';
import { ButtonProps } from '.';

const Button: React.FC<ButtonProps> = ({
    color,
    disabled = false,
    icon,
    iconLayout = 'leading',
    id,
    isFullWidth = false,
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
            disabled={disabled}
            iconLayout={iconLayout}
            id={id}
            isFullWidth={isFullWidth}
            onClick={onClick}
            size={size}
            theme={theme}
            type={type}
        >
            {icon && <Icon svg={icon} fill="inherit" size={20} />}
            <span>{text}</span>
        </ButtonStyled>
    );
};

export default Button;
