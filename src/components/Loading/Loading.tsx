import React from 'react';
import color from '../../styles/colors';
import { StyledSpinnerDiv, StyledSpinnerParent } from './Loading.styles';
import { ILoadingProps } from './types';

const Loading: React.FC<ILoadingProps> = ({
    size = 20,
    spinnerColor = color.white,
    text = '',
    direction = 'bottom',
}) => {
    return (
        <StyledSpinnerParent
            direction={direction}
            spinnerColor={spinnerColor}
            size={size}
            role="spinner"
        >
            <StyledSpinnerDiv spinnerColor={spinnerColor} size={size} />
            {<span>{text}</span>}
        </StyledSpinnerParent>
    );
};

export default Loading;
