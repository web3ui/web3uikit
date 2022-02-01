import React from 'react';
import color from '../../styles/colors';
import { SpinnerDiv, SpinnerParent } from './Loading.styles';
import { ILoadingProps } from './types';

const Loading: React.FC<ILoadingProps> = ({
    size = 20,
    spinnerColor = color.white,
    text = '',
    direction = 'bottom',
}) => {
    return (
        <SpinnerParent
            direction={direction}
            spinnerColor={spinnerColor}
            size={size}
        >
            <SpinnerDiv
                spinnerColor={spinnerColor}
                size={size}
                role="spinner"
            />
            {text != '' && <span>{text}</span>}
        </SpinnerParent>
    );
};

export default Loading;
