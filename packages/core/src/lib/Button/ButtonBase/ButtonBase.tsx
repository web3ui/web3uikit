import { Loading } from '../../Loading';
import styles from './ButtonBase.styles';
import { ButtonProps } from '../types';
import React from 'react';

const { BaseButtonStyled } = styles;

const ButtonBase: React.FC<ButtonProps> = ({
    disabled = false,
    icon,
    iconColor,
    iconLayout = 'leading',
    id,
    isLoading = false,
    isTransparent = false,
    loadingProps,
    loadingText = 'Loading...',
    onClick = (e) => e.preventDefault,
    radius,
    size = 'regular',
    theme = 'secondary',
    text = 'click',
    type = 'button',
    ...props
}: ButtonProps) => {
    return (
        <BaseButtonStyled
            data-testid="test-button"
            disabled={disabled || isLoading}
            icon={icon}
            iconColor={iconColor}
            iconLayout={iconLayout}
            isTransparent={isTransparent}
            id={id}
            onClick={(e) => onClick(e)}
            radius={radius}
            size={size}
            theme={theme}
            type={type}
            {...props}
        >
            <span>
                {isLoading ? (
                    <>
                        <Loading size={15} {...loadingProps} />
                        {loadingText}
                    </>
                ) : (
                    <>
                        {text && (
                            <React.Fragment key={`button-text-${id}`}>
                                {text}
                            </React.Fragment>
                        )}
                        {icon && (
                            <React.Fragment key={`button-icon-${id}`}>
                                {icon}
                            </React.Fragment>
                        )}
                    </>
                )}
            </span>
        </BaseButtonStyled>
    );
};

export default ButtonBase;
