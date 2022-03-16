import React, { useEffect, useState } from 'react';
import color from '../../styles/colors';
import {
    DivStyledWaveLoader,
    StyledSpinnerDiv,
    StyledSpinnerParent,
} from './Loading.styles';
import { ILoadingProps } from './types';
import { state1, state2, state3, state4 } from './WaveLoaderStates';

const Loading: React.FC<ILoadingProps> = ({
    size = 20,
    spinnerColor = color.white,
    text,
    direction = 'bottom',
    spinnerType = 'loader',
    fontSize,
}) => {
    return (
        <StyledSpinnerParent
            data-testid="test-loading"
            direction={direction}
            role="spinner"
            size={size}
            spinnerColor={spinnerColor}
            fontSize={fontSize}
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

const WaveLoader: React.FC<ILoadingProps> = ({ size, spinnerColor }) => {
    const states = [state1, state2, state3, state4];
    const [activeBalls, setActiveBalls] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBalls((prevState) => {
                if (prevState + 1 == states.length) {
                    return 0;
                }
                return prevState + 1;
            });
        }, 1000);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, []);
    return (
        <DivStyledWaveLoader size={size} spinnerColor={spinnerColor}>
            <span className={`${states[activeBalls].ball0 && 'active'}`} />
            <span className={`${states[activeBalls].ball1 && 'active'}`} />
            <span className={`${states[activeBalls].ball2 && 'active'}`} />
            <span className={`${states[activeBalls].ball3 && 'active'}`} />
        </DivStyledWaveLoader>
    );
};

export default Loading;
