import { useEffect, useState } from 'react';
import React from 'react';
import { CardStyled, CardHeader, CardFooter } from './Card.styles';
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
}: CardProps) => {
    const [isSelected, setSelected] = useState<boolean | undefined>(selected);
    const [showCheckedIcon, toggleChecked] = useState<boolean | undefined>(
        false,
    );

    useEffect(() => {
        toggleChecked(selected);
    }, [selected]);

    return (
        <CardStyled
            id={id}
            data-testid={'card-test-id'}
            onClick={() => {
                setSelected(!isSelected);
                toggleChecked(!showCheckedIcon);
            }}
            selected={isSelected}
        >
            <CardHeader data-testid={'header-test-id'}>
                {showCheckedIcon && (
                    <Icon
                        data-testid={'check-test-id'}
                        fill={colors.green}
                        size={24}
                        svg={iconTypes.checkmark}
                    />
                )}
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
            </CardHeader>
            <div>{children}</div>
            <CardFooter>
                {title && <p data-testid={'title-test-id'}>{title}</p>}
                {description && (
                    <span data-testid={'desc-test-id'}>{description}</span>
                )}
            </CardFooter>
        </CardStyled>
    );
};
export default Card;
