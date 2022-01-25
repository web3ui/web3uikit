import React from 'react';
import color from '../../styles/colors';
import hexToRgb from '../../utils/HexToRgb';
import { StyledSpinnerDiv, StyledSpinnerParentDiv } from './Loading.styles';
import { ILoadingProps } from './types';

const Loading: React.FC<ILoadingProps> = ({
    size = 50,
    ringColor = color.blue,
    ballColor = color.blue,
    text = '',
    layout = 'column',
}) => {
    return (
        <StyledSpinnerParentDiv
            aria-label="loading spinner"
            color={ringColor}
            layout={layout}
            role="image"
        >
            <StyledSpinnerDiv
                ballColor={hexToRgb(ballColor)}
                data-testid={size}
                ringColor={hexToRgb(ringColor)}
                role={'spinner'}
                size={size}
            />
            {text != '' && <h4>{text}</h4>}
        </StyledSpinnerParentDiv>
    );
};

export default Loading;
