import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import colors, { colorPercentage, gradientColors } from '../../styles/colors';
import { creditCardBrands, CreditCardProps } from './types';

type TStyleProps = Pick<CreditCardProps, 'isExpired' | 'pressed' | 'brand'>;

const getBgGradient = (brand: creditCardBrands) => {
    switch (brand) {
        case 'amex':
            return gradientColors.lightBlue;
        case 'diners':
            return gradientColors.purpleToPink;
        case 'mastercard':
            return gradientColors.blue;
        case 'visa':
            return gradientColors.goldShiny;
    }
};

export const DivStyledCreditCard = styled.div<TStyleProps>`
    ${resetCSS};
    ${fonts.text};
    background: ${({ brand }) => getBgGradient(brand)};
    border: 2px solid ${colorPercentage(colors.white, 40)};
    border-radius: 16px;
    display: grid;
    gap: 20%;
    padding: 16px;
    height: 154px;
    width: 277px;

    ${({ isExpired, pressed }) =>
        isExpired ? expiredStyles : pressed ? pressedStyles : ''}
`;

export const DivStyledFlexEnd = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
`;

export const DivStyledFlex = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    svg {
        cursor: pointer;
    }
`;

export const DivStyledFlexText = styled.div`
    color: white;
    display: flex;
    margin-right: 8px;
`;

export const DivStyledRemove = styled.div`
    display: grid;
    place-items: center;

    :hover {
        cursor: pointer;
    }
`;

export const PStyledDigits = styled.p`
    ${fonts.semiBold};
    color: ${colors.white};
    font-size: 18px;
    line-height: 24px;
    margin: 0;
`;

export const PStyledText = styled.p`
    ${fonts.semiBold}
    color: ${colors.white};
    font-size: 12px;
    line-height: 16px;
    margin: 0 0 0 5px;
`;

const expiredStyles = css`
    border-color: ${colors.red};
`;

const pressedStyles = css`
    border-color: ${colors.green};
`;
