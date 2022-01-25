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
        <StyledSpinnerParentDiv color={ringColor} layout={layout}>
            <StyledSpinnerDiv
                role={'spinner'}
                data-testid={size}
                size={size}
                ringColor={hexToRgb(ringColor)}
                ballColor={hexToRgb(ballColor)}
            />
            {text != '' && <h4>{text}</h4>}
        </StyledSpinnerParentDiv>
    );
};

export default Loading;
