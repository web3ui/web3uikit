import React from 'react';
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
import { iconTypes } from '../Icon';
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';

const CreditCard: React.FC<CreditCardProps> = ({
    expiresAt,
    isExpired,
    lastDigits,
    name,
    onRemove,
    brand,
    pressed,
}: CreditCardProps) => {
    return (
        <DivStyledCreditCard
            brand={brand}
            isExpired={isExpired}
            pressed={pressed}
        >
            <DivStyledFlexEnd>
                <Tooltip
                    position="bottom"
                    children={
                        <Button
                            onClick={() => onRemove && onRemove()}
                            isTransparent={true}
                            theme={'secondary'}
                            icon={iconTypes.bin}
                            iconLayout={'icon-only'}
                            size={'small'}
                            iconColor={'red'}
                        />
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
