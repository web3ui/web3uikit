import React from 'react';
import { BadgeProps } from './types';
import styles from './Badge.styles';
import { Typography } from '../Typography';

const { DivStyled } = styles;

const Badge: React.FC<BadgeProps> = ({
    state = 'normal',
    text,
    textVariant = 'body16',
    ...props
}) => {
    return (
        <DivStyled data-testid="test-badge-id" state={state} {...props}>
            <Typography
                color="white"
                data-testid="test-badge-text"
                variant={textVariant}
                weight="bold"
            >
                {text}
            </Typography>
        </DivStyled>
    );
};

export default Badge;
