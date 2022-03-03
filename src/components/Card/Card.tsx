import { useEffect, useState } from 'react';
import React from 'react';
import { CardProps } from './types';
import { iconTypes } from '../Icon/collection';
import colors from '../../styles/colors';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import CardStyles from './Card.styles';

const { AbsoluteIconStyled, DivStyled, FooterStyled } = CardStyles;

const Card: React.FC<CardProps> = ({
    id,
    children,
    cursorType = 'pointer',
    description,
    selected,
    title,
    tooltipText,
    isDisabled = false,
}: CardProps) => {
    const [isSelected, setSelected] = useState<boolean | undefined>(selected);
    const [showCheckedIcon, toggleChecked] =
        useState<boolean | undefined>(false);

    useEffect(() => {
        toggleChecked(selected);
    }, [selected]);

    return (
        <DivStyled
            aria-label={isSelected ? 'card not selected' : 'card selected'}
            data-testid={'card-test-id'}
            id={id}
            onClick={() => {
                if (isDisabled) {
                    return;
                }
                setSelected(!isSelected);
                toggleChecked(!showCheckedIcon);
            }}
            role="button"
            selected={isSelected && showCheckedIcon}
            isDisabled={isDisabled}
            cursorType={cursorType}
        >
            {/* <HeaderStyled data-testid={'header-test-id'}> */}
            {showCheckedIcon && (
                <AbsoluteIconStyled position="topL">
                    <Icon
                        data-testid={'check-test-id'}
                        fill={colors.green}
                        size={24}
                        svg={iconTypes.checkmark}
                    />
                </AbsoluteIconStyled>
            )}
            {!isDisabled && tooltipText && (
                <AbsoluteIconStyled position="topR">
                    <Tooltip
                        position={'bottom'}
                        children={[
                            <Icon
                                key="ttip-card"
                                data-testid={'help-test-id'}
                                fill={colors.blue}
                                size={22}
                                svg={iconTypes.helpCircle}
                            />,
                        ]}
                        content={tooltipText}
                    />
                </AbsoluteIconStyled>
            )}
            {/* </HeaderStyled> */}
            <div>{children}</div>
            {(title || description) && (
                <FooterStyled>
                    {title && <p data-testid={'title-test-id'}>{title}</p>}
                    {description && (
                        <span data-testid={'desc-test-id'}>{description}</span>
                    )}
                </FooterStyled>
            )}
        </DivStyled>
    );
};
export default Card;
