import React from 'react';
import styled from 'styled-components';
import { Eye, EyeClosed } from '@web3uikit/icons';
import { color, resetButtonCSS, resetCSS } from '@web3uikit/styles';
import { IVisibilityToggleProps } from './types';

const VisibilityToggle: React.FC<IVisibilityToggleProps> = ({
    isInputHidden,
    onClick,
}) => (
    <DivStyled
        className="input_visibility"
        data-testid="test-input-icon-visibility"
        onClick={() => onClick()}
        tabIndex={-1}
    >
        {isInputHidden ? (
            <EyeClosed
                color={color.blueGray50}
                height="24px"
                title="eye closed icon"
                titleId="input eye closed icon"
                width="24px"
            />
        ) : (
            <Eye
                color={color.blueGray50}
                height="24px"
                title="eye icon"
                titleId="input eye icon"
                width="24px"
            />
        )}
    </DivStyled>
);

const DivStyled = styled.button`
    ${resetButtonCSS};
    ${resetCSS};
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-width: 24px;
    width: 24px;
    z-index: 2;

    &:hover > svg {
        fill: ${color.navy40};
    }
`;

export default VisibilityToggle;
