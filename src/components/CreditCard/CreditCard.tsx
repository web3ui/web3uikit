import React from 'react';
import { Radios } from '../Radios';
import { Logo } from '../Logo';
import { CreditCardProps } from './types';
import {
    DivStyledCreditCard,
    DivStyledFlex,
    DivStyledFlexText,
    PStyledDigits,
    PStyledText,
} from './CreditCard.styles';
import { Icon, iconTypes } from '../Icon';
import colors from '../../styles/colors';

const CreditCard: React.FC<CreditCardProps> = ({
    expiresAt,
    id,
    isExpired,
    lastDigits,
    name,
    onPressed,
    onRemove,
    pressed,
    brand,
}: CreditCardProps) => {
    return (
        <DivStyledCreditCard
            isExpired={isExpired}
            onClick={onPressed}
            brand={brand}
            pressed={pressed}
        >
            <DivStyledFlex>
                <Radios
                    checked={pressed}
                    id={id || 'radio-credit-card'}
                    items={['']}
                    onChange={() => {}}
                />
                <Icon
                    svg={iconTypes.bin}
                    fill={colors.red}
                    onClick={onRemove}
                />
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
