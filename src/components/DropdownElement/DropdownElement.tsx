import colors from '../../styles/colors';
import { DropdownElementProps } from './types';
import { DropdownElementStyles } from './DropdownElement.styles';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import React from 'react';

const { DivContainerStyled, DivStyled, DivImageStyled, DivTextStyled } =
    DropdownElementStyles;

const DropdownElement: React.FC<DropdownElementProps> = ({
    backgroundColor = colors.blueDark,
    height,
    icon = iconTypes.check,
    iconColor = 'white',
    iconSize = 20,
    id = String(Date.now()),
    onClick,
    text = 'Text',
    textColor = 'white',
    textSize = 14,
    width,
}: DropdownElementProps) => {
    return (
        <DivContainerStyled
            backgroundColor={backgroundColor}
            data-testid={'dropdown-element-test-id'}
            icon={icon}
            iconColor={iconColor}
            id={id}
        >
            <DivStyled
                data-testid={'dropdown-element-click-test-id'}
                height={height}
                width={width}
                onClick={() => {
                    {
                        onClick ? onClick() : '';
                    }
                }}
            >
                {icon ? (
                    <DivImageStyled>
                        <Icon fill={iconColor} size={iconSize} svg={icon} />
                    </DivImageStyled>
                ) : (
                    ''
                )}
                <DivTextStyled
                    data-testid={'dropdown-element-text-test-id'}
                    textColor={textColor}
                    textSize={textSize}
                >
                    {text}
                </DivTextStyled>
            </DivStyled>
        </DivContainerStyled>
    );
};

export default DropdownElement;
