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
import { Icon, iconTypes } from '../Icon';
import colors from '../../styles/colors';
import { Tooltip } from '../Tooltip';

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
                        <Icon
                            fill={colors.red}
                            onClick={() => onRemove && onRemove()}
                            svg={iconTypes.bin}
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
