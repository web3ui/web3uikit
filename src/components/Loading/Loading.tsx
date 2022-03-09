import React from 'react';
import color from '../../styles/colors';
import { StyledSpinnerDiv, StyledSpinnerParent } from './Loading.styles';
import { ILoadingProps } from './types';

const Loading: React.FC<ILoadingProps> = ({
    size = 20,
    spinnerColor = color.white,
    text,
    direction = 'bottom',
}) => {
    return (
        <StyledSpinnerParent
            data-testid="test-loading"
            direction={direction}
            role="spinner"
            size={size}
            spinnerColor={spinnerColor}
        >
            <StyledSpinnerDiv spinnerColor={spinnerColor} size={size} />
            {text && <span>{text}</span>}
        </StyledSpinnerParent>
    );
};

export default Loading;
