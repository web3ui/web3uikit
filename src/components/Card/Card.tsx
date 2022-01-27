import { useEffect, useState } from 'react';
import React from 'react';
import { DivStyled, HeaderStyled, FooterStyled } from './Card.styles';
import { CardProps } from './types';
import { iconTypes } from '../Icon/collection';
import colors from '../../styles/colors';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

const Card: React.FC<CardProps> = ({
    id,
    children,
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
        >
            <HeaderStyled data-testid={'header-test-id'}>
                {showCheckedIcon && (
                    <Icon
                        data-testid={'check-test-id'}
                        fill={colors.green}
                        size={24}
                        svg={iconTypes.checkmark}
                    />
                )}
                {!isDisabled && (
                    <Tooltip
                        data-testid={'tooltip-test-id'}
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
                        text={tooltipText}
                    />
                )}
            </HeaderStyled>
            <div>{children}</div>
            <FooterStyled>
                {title && <p data-testid={'title-test-id'}>{title}</p>}
                {description && (
                    <span data-testid={'desc-test-id'}>{description}</span>
                )}
            </FooterStyled>
        </DivStyled>
    );
};
export default Card;
