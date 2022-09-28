import React from 'react';
import LargeCreditCard from './LargeCreditCard';
import SmallCreditCard from './SmallCreditCard';
import { CreditCardProps } from './types';

const CreditCard: React.FC<CreditCardProps> = ({
    size = 'large',
    ...rest
}: CreditCardProps) => {
    return size === 'large' ? (
        <LargeCreditCard {...rest} />
    ) : (
        <SmallCreditCard {...rest} />
    );
};

export default CreditCard;
