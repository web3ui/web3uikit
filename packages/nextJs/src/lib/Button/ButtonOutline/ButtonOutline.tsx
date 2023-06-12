'use client';
import { FC } from 'react';
import { IButtonProps } from '../types';
import ButtonBase from '../ButtonBase';
import styles from './styles.module.scss';

const ButtonOutline: FC<IButtonProps> = ({ ...props }: IButtonProps) => {
    return <ButtonBase className={styles.outline} {...props} />;
};

export default ButtonOutline;
