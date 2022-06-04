import { Logo } from '../Logo';
import { CreditCardProps } from './types';
import {
    DivStyledCreditCard,
    DivStyledFlex,
    DivStyledFlexEnd,
    DivStyledFlexText,
    PStyledDigits,
    PStyledText,
} from './CreditCard.styles';
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';

const CreditCard: React.FC<CreditCardProps> = ({
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
            isExpired={isExpired}
            pressed={pressed}
            {...props}
        >
            <DivStyledFlexEnd>
                <Tooltip
                    position="bottom"
                    children={
                        <>
                            {isRemovable && (
                                <Button
                                    onClick={() => onRemove && onRemove()}
                                    isTransparent={true}
                                    theme={'secondary'}
                                    icon={'bin'}
                                    iconLayout={'icon-only'}
                                    size={'small'}
                                    iconColor={'red'}
                                />
                            )}
                        </>
                    }
                    content="Remove"
                />
            </DivStyledFlexEnd>
            <PStyledDigits>{`•••• ${lastDigits}`}</PStyledDigits>
            <DivStyledFlex>
                <DivStyledFlexText>
                    <PStyledText>{name}</PStyledText>
                    <PStyledText>{`${expiresAt.month} / ${expiresAt.year}`}</PStyledText>
                </DivStyledFlexText>
                <Logo size="small" theme={brand} />
            </DivStyledFlex>
        </DivStyledCreditCard>
    );
};

export default CreditCard;
