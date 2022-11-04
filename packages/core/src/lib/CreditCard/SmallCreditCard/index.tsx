import React from 'react';
import styles from './SmallCreditCard.styles';
import { Bin } from '@web3uikit/icons';
import { Button } from '../../Button';
import { CreditCardProps } from '../types';
import { Logo } from '../../Logo';
import { Typography } from '../../Typography';
import { color } from '@web3uikit/styles';

const { DivStyledContent, DivStyledWrapper, DivStyledIcon, SpanStyledValue } =
    styles;

const SmallCreditCard: React.FC<CreditCardProps> = ({
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
        <DivStyledWrapper
            data-testid="test-credit-card"
            isExpired={isExpired}
            pressed={pressed}
            {...props}
        >
            <DivStyledIcon brand={brand}>
                <Logo
                    data-testid="test-credit-card-logo"
                    size="small"
                    theme={brand}
                />
            </DivStyledIcon>
            <DivStyledContent>
                <Typography
                    data-testid="test-credit-card-digits"
                    variant="body16"
                    weight="500"
                >
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}:{' '}
                    <SpanStyledValue>{lastDigits}</SpanStyledValue>
                </Typography>
                <Typography
                    data-testid="test-credit-card-exp"
                    variant="body16"
                    weight="500"
                >
                    Exp. date:{' '}
                    <SpanStyledValue>{` ${expiresAt.month}/${expiresAt.year}`}</SpanStyledValue>
                </Typography>
            </DivStyledContent>
            {(isRemovable || isExpired) && (
                <Button
                    icon={
                        <Bin
                            fontSize={22}
                            fill={isExpired ? color.red60 : color.red40}
                        />
                    }
                    iconLayout="icon-only"
                    isTransparent={true}
                    onClick={() => onRemove && onRemove()}
                    size="small"
                    theme="colored"
                />
            )}
        </DivStyledWrapper>
    );
};
export default SmallCreditCard;
