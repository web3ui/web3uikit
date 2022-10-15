import { Logo } from '../../Logo';
import { CreditCardProps } from '../types';
import {
    DivStyledCreditCard,
    DivStyledFlex,
    DivStyledFlexEnd,
    DivStyledFlexText,
    PStyledDigits,
    PStyledText,
} from './LargeCreditCard.styles';
import { Tooltip } from '../../Tooltip';
import { Button } from '../../Button';
import { Bin } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';

const LargeCreditCard: React.FC<CreditCardProps> = ({
    brand,
    expiresAt,
    isExpired,
    isRemovable = true,
    lastDigits,
    name,
    onRemove,
    pressed,
    ...props
}: CreditCardProps) => {
    return (
        <DivStyledCreditCard
            brand={brand}
            data-testid="test-credit-card"
            isExpired={isExpired}
            pressed={pressed}
            {...props}
        >
            <DivStyledFlexEnd>
                <Tooltip
                    children={
                        <>
                            {(isRemovable || isExpired) && (
                                <Button
                                    icon={
                                        <Bin fontSize={20} fill={color.red40} />
                                    }
                                    iconLayout={'icon-only'}
                                    isTransparent={true}
                                    onClick={() => onRemove && onRemove()}
                                    size={'small'}
                                    theme={'colored'}
                                />
                            )}
                        </>
                    }
                    content="Remove"
                    position="bottom"
                />
            </DivStyledFlexEnd>
            <PStyledDigits data-testid="test-credit-card-digits">{`•••• ${lastDigits}`}</PStyledDigits>
            <DivStyledFlex>
                <DivStyledFlexText>
                    <PStyledText
                        data-testid="test-credit-card-name"
                        isExpired={false}
                    >
                        {name}
                    </PStyledText>
                    <PStyledText
                        data-testid="test-credit-card-exp"
                        isExpired={isExpired}
                    >
                        {`${expiresAt.month} / ${expiresAt.year}`}{' '}
                        {isExpired && '*expired'}
                    </PStyledText>
                </DivStyledFlexText>
                <Logo
                    data-testid="test-credit-card-logo"
                    size="small"
                    theme={brand}
                />
            </DivStyledFlex>
        </DivStyledCreditCard>
    );
};

export default LargeCreditCard;
