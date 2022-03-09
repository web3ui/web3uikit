import { PopoverElementProps } from './types';
import { PopoverElementStyles } from './PopoverElement.styles';
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
}: PopoverElementProps) => {
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
                <TextStyled
                    data-testid={'dropdown-element-text-test-id'}
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
