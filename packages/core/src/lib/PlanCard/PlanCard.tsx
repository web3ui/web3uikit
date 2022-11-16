import styles from './PlanCard.styles';
import { IPlanCardProps } from './types';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import { Check } from '@web3uikit/icons';
import YourPlanButton from './Components/YourPlanButton';

const { DivStyled, DivStyledFeatures, DivStyledCardFooter, HrStyled } = styles;

const PlanCard: React.FC<IPlanCardProps> = ({
    backgroundColor,
    borderColor,
    description,
    descriptionTitle,
    footer,
    height,
    width,
    maxWidth,
    horizontalLine = false,
    icon,
    isActive,
    isCurrentPlan,
    subTitle,
    title,
    scrollbarWidth,
    scrollbarBackground,
    scrollbarTrackBackground,
    scrollbarHoverBackground,
    ...props
}) => {
    return (
        <DivStyled
            className="PlanCard"
            data-testid="test-plan-card"
            isActive={isActive}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            maxWidth={maxWidth}
            {...props}
        >
            <Typography>{subTitle}</Typography>
            {horizontalLine ? (
                <HrStyled borderColor={borderColor} />
            ) : (
                <Typography>{title}</Typography>
            )}
            <Typography style={{ marginBottom: '16px' }}>
                {descriptionTitle}
            </Typography>
            <DivStyledFeatures
                scrollbarBackground={scrollbarBackground}
                scrollbarWidth={scrollbarWidth}
                scrollbarTrackBackground={scrollbarTrackBackground}
                scrollbarHoverBackground={scrollbarHoverBackground}
            >
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
