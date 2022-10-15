import { color, resetCSS } from '@web3uikit/styles';
import styled from 'styled-components';

import { creditCardBrands, CreditCardProps } from '../types';

export const getCardColor = (brand: creditCardBrands) => {
    switch (brand) {
        case 'amex':
            return color.blue70;
        case 'diners':
            return '#85B3DB';
        case 'mastercard':
            return '#DCEFFD';
        case 'visa':
            return '#005AC2';
    }
};

type TStyleProps = Pick<CreditCardProps, 'isExpired' | 'pressed'>;

const DivStyledWrapper = styled.div<TStyleProps>`
    ${resetCSS};
    align-items: center;
    border-radius: 15px;
    border: 2px solid rgba(153, 211, 255, 0.5);
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    padding: 8px 16px;
    border-color: ${({ isExpired, pressed }) =>
        isExpired ? color.red40 : pressed ? color.mint40 : ''};
    background-color: ${({ isExpired, pressed }) =>
        isExpired ? color.red10 : pressed ? color.mint05 : 'transparent'};
`;

const DivStyledIcon = styled.div<{
    brand: creditCardBrands;
}>`
    ${resetCSS};
    align-items: center;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-grow: 1;
    height: 32px;
    justify-content: center;
    object-fit: cover;
    width: 58px;
    background: ${(props) => getCardColor(props.brand)};
`;

const SpanStyledValue = styled.span`
    ${resetCSS};
    color: ${color.blue70};
`;

const DivStyledContent = styled.div`
    ${resetCSS};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
`;

export default {
    DivStyledContent,
    DivStyledIcon,
    DivStyledWrapper,
    SpanStyledValue,
};
