import { FC } from 'react';
import { IButtonProps } from './types';
import styles from './styles.module.scss';

const ButtonBase: FC<IButtonProps> = ({
    children,
    disabled = false,
    onClick,
    size = 'regular',
    style,
    type = 'button',
}) => {
    return (
        <button
            className={styles.button}
            disabled={disabled}
            onClick={onClick}
            style={{ ...style }}
            type={type}
        >
            {children}
        </button>
    );
};

export default ButtonBase;
