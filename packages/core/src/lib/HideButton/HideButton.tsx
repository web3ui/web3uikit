import { FC } from 'react';
import styled from 'styled-components';
import { Tooltip } from '../Tooltip';
import { color, resetButtonCSS } from '@web3uikit/styles';
import { Eye, EyeClosed } from '@web3uikit/icons';
import { IHideButtonIconProps, IHideButtonProps } from './types';

const HideButtonStyled = styled.button`
    ${resetButtonCSS};
    cursor: pointer;
`;

const HideButtonIcon: FC<IHideButtonIconProps> = ({
    iconColor = color.navy40,
    iconSize = 24,
    isHidden = false,
}) => (
    isHidden ? (
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
    )
);

const HideButton: FC<IHideButtonProps> = ({
    iconColor = color.navy40,
    iconSize = 24,
    isHidden = false,
    hasTooltip = false,
    onToggle,
    ...props
}) => {
    return (
        <HideButtonStyled
            type="button"
            onClick={onToggle}
            data-testid="test-hide-button"
            {...props}
        >
            {hasTooltip ? (
                <Tooltip
                    arrowSize={4}
                    children={
                        <HideButtonIcon
                            iconColor={iconColor}
                            iconSize={iconSize}
                            isHidden={isHidden}
                        />
                    }
                    content={isHidden ? 'View' : 'Hide'}
                    customize={props.customize}
                    position="bottom"
                />
            ) : (
                <HideButtonIcon
                    iconColor={iconColor}
                    iconSize={iconSize}
                    isHidden={isHidden}
                />
            )}
        </HideButtonStyled>
    );
};

export default HideButton;
