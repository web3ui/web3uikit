import { FC } from 'react';
import styled from 'styled-components';
import { color, resetButtonCSS } from '@web3uikit/styles';
import { Eye, EyeClosed } from '@web3uikit/icons';
import { IHideButtonProps } from './types';

const HideButtonStyled = styled.button`
    ${resetButtonCSS};
    cursor: pointer;
`;

const HideButton: FC<IHideButtonProps> = ({
    iconColor = color.blue,
    iconSize = 24,
    isHidden = false,
    onToggle,
    ...props
}) => {
    return (
        <HideButtonStyled
            onClick={onToggle}
            data-testid="test-hide-button"
            {...props}
        >
            {isHidden ? (
                <EyeClosed
                    title="eye closed icon"
                    titleId="hidebutton eye closed icon"
                    fontSize={iconSize}
                    fill={`${iconColor}`}
                />
            ) : (
                <Eye
                    title="eye icon"
                    titleId="hidebutton eye icon"
                    fontSize={iconSize}
                    fill={`${iconColor}`}
                />
            )}
        </HideButtonStyled>
    );
};

export default HideButton;
