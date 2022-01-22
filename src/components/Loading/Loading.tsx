import React from 'react';
import color from '../../styles/colors';
import hexToRgb from '../../utils/HexToRgb';
import { StyledSpinnerDiv } from './Loading.styles';
import { ILoadingProps } from './types';

const Loading: React.FC<ILoadingProps> = ({
    size = 50,
    ringColor = color.blue,
    ballColor = color.blue,
}) => {
    return (
        <StyledSpinnerDiv
            role={'spinner'}
            data-testid={size}
            size={size}
            ringColor={hexToRgb(ringColor)}
            ballColor={hexToRgb(ballColor)}
        />
    );
};

export default Loading;
