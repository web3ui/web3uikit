import React, { useState } from 'react';
import { Radios } from '../Radios';
import { Logo } from '../Logo';
import { CreditCardProps } from './types';
import {
    DivStyledCreditCard,
    DivStyledFlex,
    DivStyledFlexText,
    DivStyledRemove,
    PStyledDigits,
    PStyledText,
} from './CreditCard.styles';

const CreditCard: React.FC<CreditCardProps> = ({
    expiresAt,
    id,
    isExpired,
    lastDigits,
    name,
    onRemove,
    brand,
}: CreditCardProps) => {
    const [pressed, setPressed] = useState<boolean>(false);

    return (
        <DivStyledCreditCard
            isExpired={isExpired}
            onClick={() => setPressed(!pressed)}
            brand={brand}
            pressed={pressed}
        >
            <DivStyledFlex>
                <Radios
                    checked={pressed}
                    id={id || 'radio-credit-card'}
                    items={['']}
                    onChange={() => setPressed(!pressed)}
                />
                <DivStyledRemove onClick={onRemove} />
            </DivStyledFlex>
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
