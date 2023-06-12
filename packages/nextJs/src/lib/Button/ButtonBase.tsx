'use client';
import { FC } from 'react';
import { IButtonProps } from './types';
import styles from './styles.module.scss';

const ButtonBase: FC<IButtonProps> = ({
    children,
    className,
    disabled = false,
    onClick,
    size = 'regular',
    style,
    type = 'button',
    ...props
}) => {
    const getSizeStyles = (size: string) => {
        switch (size) {
            case 'large':
                return styles.buttonLarge;
            case 'small':
                return styles.buttonSmall;
            case 'xl':
                return styles.buttonXL;
            default:
                return styles.buttonRegular;
        }
    };
    return (
        <button
            className={`
                web3uiKit-button
                ${styles.button} 
                ${getSizeStyles(size)} 
                ${className} 
            `}
            disabled={disabled}
            onClick={onClick}
            style={{ ...style }}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonBase;
