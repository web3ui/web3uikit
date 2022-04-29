import React from 'react';
import styles from './PlanCard.styles';
import { IPlanCardProps } from './types';
import { Typography } from '../Typography';
import color from '../../styles/colors';
import { Icon } from '../Icon';

const { DivStyled, DivStyledFeatures, DivStyledCardFooter } = styles;

const PlanCard: React.FC<IPlanCardProps> = ({
    description,
    footer,
    subTitle,
    descriptionTitle,
    title,
    isActive,
}) => {
    return (
        <DivStyled
            className="PlanCard"
            data-testid="test-PlanCard"
            isActive={isActive}
        >
            <Typography variant="subtitle1" weight="600" color={color.blueDark}>
                {subTitle}
            </Typography>
            <Typography>{title}</Typography>
            <DivStyledFeatures>
                <Typography
                    variant="caption14"
                    weight="semibold"
                    color={color.blueDark}
                >
                    {descriptionTitle}
                </Typography>
                {description.map((feature, index) => (
                    <div key={index}>
                        <Icon svg="check" fill={color.green} />
                        <Typography
                            variant="caption14"
                            weight="semibold"
                            color={color.grey}
                        >
                            {feature}
                        </Typography>
                    </div>
                ))}
            </DivStyledFeatures>
            <DivStyledCardFooter>{footer}</DivStyledCardFooter>
        </DivStyled>
    );
};

export default PlanCard;
