import React from 'react';
import { color} from '@web3uikit/styles';
import {
    DivStyledWaveLoader,
    StyledSpinnerDiv,
    StyledSpinnerParent,
} from './Loading.styles';
import { ILoadingProps } from './types';

const Loading: React.FC<ILoadingProps> = ({
    size = 20,
    spinnerColor = color.white,
    text,
    direction = 'bottom',
    spinnerType = 'loader',
    fontSize,
    ...props
}) => {
    return (
        <StyledSpinnerParent
            data-testid="test-loading"
            direction={direction}
            role="spinner"
            size={size}
            spinnerColor={spinnerColor}
            fontSize={fontSize}
            {...props}
        >
            {spinnerType == 'loader' ? (
                <StyledSpinnerDiv spinnerColor={spinnerColor} size={size} />
            ) : (
                <WaveLoader size={size} spinnerColor={spinnerColor} />
            )}
            {text && <span>{text}</span>}
        </StyledSpinnerParent>
    );
};

const WaveLoader: React.FC<ILoadingProps> = ({
    size,
    spinnerColor,
    ...props
}) => (
    <DivStyledWaveLoader
        aria-busy="true"
        aria-label="loading, please wait"
        role="alert"
        size={size}
        spinnerColor={spinnerColor}
        {...props}
    >
        <span aria-hidden="true" id="anim-delay1"></span>
        <span aria-hidden="true" id="anim-delay2"></span>
        <span aria-hidden="true" id="anim-delay3"></span>
        <span aria-hidden="true" id="anim-delay4"></span>
        <span aria-hidden="true" id="anim-delay5"></span>
    </DivStyledWaveLoader>
);

export default Loading;
