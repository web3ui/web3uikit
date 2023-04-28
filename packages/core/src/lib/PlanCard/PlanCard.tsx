import styles from './PlanCard.styles';
import { IPlanCardProps } from './types';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import { CheckCircleAlt } from '@web3uikit/icons';

const { DivStyled, DivStyledFeatures, DivStyledTopLabel, HrStyled, DivStyledCardFooter } = styles;

const PlanCard: React.FC<IPlanCardProps> = ({
    backgroundColor,
    borderColor,
    ctaButton,
    footer,
    height,
    horizontalLine = false,
    icon,
    isCurrentPlan,
    maxWidth,
    description,
    features,
    featuresIconColor,
    price,
    scrollbarBackground,
    scrollbarHoverBackground,
    scrollbarTrackBackground,
    scrollbarWidth,
    subTitle,
    title,
    themeColor,
    topLabel,
    width,
    ...props
}) => {
    return (
        <DivStyled
            className="PlanCard"
            data-testid="test-plan-card"
            isCurrentPlan={isCurrentPlan}
            borderColor={isCurrentPlan ? themeColor : color.navy20}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            maxWidth={maxWidth}
            {...props}
        >
            <DivStyledTopLabel>
                {topLabel}
            </DivStyledTopLabel>
            <Typography variant='h2' weight='550' style={{marginBottom: '16px', marginTop: '16px'}}>{title}</Typography>
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
                            <CheckCircleAlt
                                title="CheckCircle icon"
                                titleId="plan-card CheckCircle icon"
                                fill={featuresIconColor ? featuresIconColor : color.gray40}
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
            <DivStyledCardFooter>
                {footer}
            </DivStyledCardFooter>
        </DivStyled>
    );
};

export default PlanCard;
