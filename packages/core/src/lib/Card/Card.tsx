import { color } from '@web3uikit/styles';
import { CardProps } from './types';
import { Checkmark, HelpCircle } from '@web3uikit/icons';
import { Tooltip } from '../Tooltip';
import styles from './Card.styles';
import { Typography } from '../Typography';

const { AbsoluteIconStyled, DivStyled, FooterStyled, HeaderStyled } = styles;

const Card: React.FC<CardProps> = ({
    children,
    checkMarkPosition = 'left',
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
    tooltipPosition = 'bottom',
    style,
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
            style={style}
            {...props}
        >
            <HeaderStyled data-testid={'test-card-header'}>
                {isSelected && (
                    <AbsoluteIconStyled
                        position={
                            checkMarkPosition === 'left' ? 'topL' : 'topR'
                        }
                    >
                        <Checkmark
                            data-testid="test-card-icon-check"
                            title="checkmark icon"
                            titleId="card checkmark icon"
                            fill={color.mint40}
                            fontSize={20}
                        />
                    </AbsoluteIconStyled>
                )}
                {!isDisabled && tooltipText && (
                    <AbsoluteIconStyled
                        position={
                            checkMarkPosition === 'left' ? 'topR' : 'topL'
                        }
                    >
                        <Tooltip
                            children={[
                                <HelpCircle
                                    fill={color.navy40}
                                    fontSize={22}
                                    key="tip-card"
                                    titleId="card help circle icon"
                                />,
                            ]}
                            content={tooltipText}
                            move={tooltipMove}
                            moveBody={tooltipMoveBody}
                            position={tooltipPosition}
                        />
                    </AbsoluteIconStyled>
                )}
            </HeaderStyled>
            <div>{children}</div>
            {(title || description) && (
                <FooterStyled>
                    {title && (
                        <Typography
                            color={color.navy40}
                            data-testid="test-card-title"
                            variant="subtitle2"
                        >
                            {title}
                        </Typography>
                    )}
                    {description && (
                        <Typography
                            color={color.navy40}
                            data-testid="test-card-description"
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
