import React from 'react';
import { CardProps } from './types';
import { iconTypes } from '../Icon/collection';
import colors from '../../styles/colors';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import styles from './Card.styles';
import { Typography } from '../Typography';
import color from '../../styles/colors';

const { AbsoluteIconStyled, DivStyled, FooterStyled, HeaderStyled } = styles;

const Card: React.FC<CardProps> = ({
    children,
    cursorType = 'pointer',
    description,
    id,
    isDisabled = false,
    isSelected,
    onClick,
    setIsSelected,
    title,
    tooltipMove,
    tooltipMoveBody,
    tooltipText,
    ...props
}: CardProps) => {
    return (
        <DivStyled
            aria-label={isSelected ? 'card not selected' : 'card selected'}
            data-testid="test-card"
            id={id}
            onClick={() => {
                if (isDisabled) return;
                onClick && onClick();
                if (!setIsSelected) return;
                setIsSelected(!isSelected);
            }}
            role="button"
            isSelected={isSelected}
            isDisabled={isDisabled}
            cursorType={cursorType}
            {...props}
        >
            <HeaderStyled data-testid="test-card__header">
                {isSelected && (
                    <AbsoluteIconStyled position="topL">
                        <Icon
                            data-testid="test-card__icon-check"
                            fill={colors.green}
                            size={24}
                            svg={iconTypes.checkmark}
                        />
                    </AbsoluteIconStyled>
                )}
                {!isDisabled && tooltipText && (
                    <AbsoluteIconStyled position="topR">
                        <Tooltip
                            children={[
                                <Icon
                                    fill={colors.blue}
                                    key="tip-card"
                                    size={22}
                                    svg={iconTypes.helpCircle}
                                />,
                            ]}
                            content={tooltipText}
                            move={tooltipMove}
                            moveBody={tooltipMoveBody}
                            position={'bottom'}
                        />
                    </AbsoluteIconStyled>
                )}
            </HeaderStyled>
            <div>{children}</div>
            {(title || description) && (
                <FooterStyled>
                    {title && (
                        <Typography
                            color={color.blue}
                            data-testid="test-card__title"
                            variant="subtitle2"
                        >
                            {title}
                        </Typography>
                    )}
                    {description && (
                        <Typography
                            color={color.blue}
                            data-testid="test-card__description"
                            variant="caption14"
                        >
                            {description}
                        </Typography>
                    )}
                </FooterStyled>
            )}
        </DivStyled>
    );
};
export default Card;
