'use client';
import { FC } from 'react';
import { IButtonProps } from '../types';
import ButtonBase from '../ButtonBase';
import styles from './styles.module.scss';

const ButtonPrimary: FC<IButtonProps> = ({ ...props }: IButtonProps) => {
    return <ButtonBase className={styles.primary} {...props} />;
};

export default ButtonPrimary;
