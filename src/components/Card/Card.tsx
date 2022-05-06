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
            data-testid={'card-test-id'}
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
            <HeaderStyled data-testid={'header-test-id'}>
                {isSelected && (
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
                            move={tooltipMove}
                            moveBody={tooltipMoveBody}
                        />
                    </AbsoluteIconStyled>
                )}
            </HeaderStyled>
            <div>{children}</div>
            {(title || description) && (
                <FooterStyled>
                    {title && (
                        <Typography
                            variant="subtitle2"
                            data-testid={'title-test-id'}
                            color={color.blue}
                        >
                            {title}
                        </Typography>
                    )}
                    {description && (
                        <Typography
                            variant="caption14"
                            data-testid={'desc-test-id'}
                            color={color.blue}
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
