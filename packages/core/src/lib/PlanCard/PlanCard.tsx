import styles from './PlanCard.styles';
import { IPlanCardProps } from './types';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import { CheckCircle } from '@web3uikit/icons';

const { DivStyled, DivStyledFeatures, DivStyledCardFooter, DivStyledTopLabel, HrStyled } = styles;

const PlanCard: React.FC<IPlanCardProps> = ({
    backgroundColor,
    borderColor,
    ctaButton,
    footer,
    height,
    horizontalLine = false,
    icon,
    isActive,
    isCurrentPlan,
    maxWidth,
    description,
    features,
    price,
    scrollbarBackground,
    scrollbarHoverBackground,
    scrollbarTrackBackground,
    scrollbarWidth,
    subTitle,
    title,
    topLabel,
    width,
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
            <DivStyledTopLabel>
                {topLabel}
            </DivStyledTopLabel>
            <Typography variant='h2' weight='550' style={{marginBottom: '16px'}}>{title}</Typography>
            {isCurrentPlan && (
                <Typography color={color.blueGray50} weight="600" variant="body16">
                    Your Current Plan
                </Typography>
            )}
            <Typography>{subTitle}</Typography>
            {price}
            {horizontalLine && (
                <HrStyled borderColor={color.navy20} />
            )}
            {ctaButton}
            <Typography weight='550' style={{marginTop: '16px'}}>
                {description}
            </Typography>
            <DivStyledFeatures
                scrollbarBackground={scrollbarBackground}
                scrollbarWidth={scrollbarWidth}
                scrollbarTrackBackground={scrollbarTrackBackground}
                scrollbarHoverBackground={scrollbarHoverBackground}
            >
                {features.map((feature, index) => (
                    <div key={index}>
                        {icon ? (
                            <>{icon}</>
                        ) : (
                            <CheckCircle
                                title="CheckCircle icon"
                                titleId="plan-card CheckCircle icon"
                                fill={isActive ? color.blue30 : color.mint40}
                                width="15px"
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

        </DivStyled>
    );
};

export default PlanCard;
