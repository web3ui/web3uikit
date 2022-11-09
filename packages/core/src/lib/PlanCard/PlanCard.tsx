import styles from './PlanCard.styles';
import { IPlanCardProps } from './types';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import { Check } from '@web3uikit/icons';
import YourPlanButton from './Components/YourPlanButton';

const { DivStyled, DivStyledFeatures, DivStyledCardFooter, HrStyled } = styles;

const PlanCard: React.FC<IPlanCardProps> = ({
    description,
    footer,
    subTitle,
    descriptionTitle,
    title,
    isActive,
    isCurrentPlan,
    horizontalLine = false,
    borderColor = color.navy40,
    backgroundColor = color.white,
    icon,
    ...props
}) => {
    return (
        <DivStyled
            className="PlanCard"
            data-testid="test-plan-card"
            isActive={isActive}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            {...props}
        >
            <Typography variant="subtitle1" weight="600" color={color.blue70}>
                {subTitle}
            </Typography>
            {horizontalLine ? (
                <HrStyled borderColor={borderColor} />
            ) : (
                <Typography>{title}</Typography>
            )}
            <Typography
                variant="caption14"
                weight="semibold"
                color={color.blue70}
                style={{ marginBottom: '16px' }}
            >
                {descriptionTitle}
            </Typography>
            <DivStyledFeatures>
                {description.map((feature, index) => (
                    <div key={index}>
                        {icon ? (
                            <>{icon}</>
                        ) : (
                            <Check
                                title="check icon"
                                titleId="plan-card check icon"
                                fill={color.mint40}
                            />
                        )}
                        <Typography
                            variant="caption14"
                            color={color.blueGray50}
                        >
                            {feature}
                        </Typography>
                    </div>
                ))}
            </DivStyledFeatures>
            <DivStyledCardFooter>
                {horizontalLine && <Typography>{title}</Typography>}
                {isCurrentPlan ? <YourPlanButton /> : footer}
            </DivStyledCardFooter>
        </DivStyled>
    );
};

export default PlanCard;
