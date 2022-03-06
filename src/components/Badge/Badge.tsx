import React from 'react';
import { Typography } from '../Typography';
import { DivStyled } from './Badge.styles';
import { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({
    text,
    state = 'normal',
    textVariant = 'body16',
    ...otherProps
}) => {
    return (
        <DivStyled state={state} data-testid="test-badge-id" {...otherProps}>
            <Typography
                variant={textVariant}
                color="white"
                data-testid="test-badge-text"
                weight="bold"
            >
                {text}
            </Typography>
        </DivStyled>
    );
};

export default Badge;
