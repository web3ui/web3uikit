import React, { useState } from 'react';
import { Radios } from '../Radios';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import colors from '../../styles/colors';
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
    type,
}: CreditCardProps) => {
    const [pressed, setPressed] = useState<boolean>(false);

    return (
        <DivStyledCreditCard
            isExpired={isExpired}
            onClick={() => setPressed(!pressed)}
            pressed={pressed}
        >
            <DivStyledFlex>
                <Radios
                    checked={pressed}
                    id={id || 'radio-credit-card'}
                    items={['']}
                    onChange={() => setPressed(!pressed)}
                />
                <DivStyledRemove onClick={onRemove}></DivStyledRemove>
            </DivStyledFlex>
            <PStyledDigits>{`•••• ${lastDigits}`}</PStyledDigits>
            <DivStyledFlex>
                <DivStyledFlexText>
                    <PStyledText>{name}</PStyledText>
                    <PStyledText>{`${expiresAt.month} / ${expiresAt.year}`}</PStyledText>
                </DivStyledFlexText>
                <Icon
                    size={32}
                    svg={
                        type === 'mastercard'
                            ? iconTypes.mastercard
                            : iconTypes.visa
                    }
                    fill={colors.white}
                />
            </DivStyledFlex>
        </DivStyledCreditCard>
    );
};

export default CreditCard;
