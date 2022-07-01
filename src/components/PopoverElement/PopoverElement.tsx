import { PopoverElementProps } from './types';
import PopoverElementStyles from './PopoverElement.styles';
import { Icon, iconTypes } from '../Icon';
import React from 'react';

const { DivContainerStyled, DivStyled, DivImageStyled, TextStyled } =
    PopoverElementStyles;

const PopoverElement: React.FC<PopoverElementProps> = ({
    backgroundColor = 'transparent',
    height,
    icon = iconTypes.check,
    iconColor = 'white',
    iconSize = 20,
    id,
    onClick,
    text = 'Text',
    textColor = 'white',
    textSize = 14,
    width,
    ...props
}: PopoverElementProps) => {
    return (
        <DivContainerStyled
            backgroundColor={backgroundColor}
            data-testid="test-dropdown-element"
            icon={icon}
            iconColor={iconColor}
            id={id}
            {...props}
        >
            <DivStyled
                data-testid="test-dropdown-element-click"
                height={height}
                onClick={() => {
                    {
                        onClick ? onClick() : '';
                    }
                }}
                width={width}
            >
                {icon ? (
                    <DivImageStyled>
                        <Icon fill={iconColor} size={iconSize} svg={icon} />
                    </DivImageStyled>
                ) : (
                    ''
                )}
                <TextStyled
                    data-testid="test-dropdown-element-text"
                    textColor={textColor}
                    textSize={textSize}
                >
                    {text}
                </TextStyled>
            </DivStyled>
        </DivContainerStyled>
    );
};

export default PopoverElement;
