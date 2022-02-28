import React, { FC, useEffect, useState } from 'react';
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
import { Tooltip } from '../Tooltip';

const CreditCard: FC<CreditCardProps> = ({
    expiresAt,
    id,
    isExpired,
    lastDigits,
    name,
    onPressed = () => {},
    onRemove = () => {},
    pressed = false,
    brand,
}: CreditCardProps) => {
    const [seleteced, setSelected] = useState<boolean>(pressed);
    useEffect(() => {
        setSelected(pressed);
    }, [pressed]);
    return (
        <DivStyledCreditCard
            isExpired={isExpired}
            brand={brand}
            pressed={seleteced}
        >
            <DivStyledFlex>
                <Radios
                    checked={seleteced}
                    id={id || 'radio-credit-card'}
                    items={['']}
                    onChange={() => {
                        if (!seleteced && !isExpired) {
                            onPressed();
                            setSelected(true);
                        }
                    }}
                />
                <Tooltip
                    position="bottom"
                    children={
                        <Icon
                            svg={iconTypes.bin}
                            fill={colors.red}
                            onClick={onRemove}
                        />
                    }
                    content="Remove"
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
