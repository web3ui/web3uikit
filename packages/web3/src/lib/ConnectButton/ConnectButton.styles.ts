import styled, { css } from 'styled-components';
import { color, fonts, resetCSS, resetButtonCSS } from '@web3uikit/styles';

const flexBox = css`
    ${resetCSS};
    align-items: center;
    display: flex;
`;

const WrapperStyled = styled.div`
    ${flexBox};
    height: 40px;
    margin: 0 16px;
    white-space: nowrap;
`;

const AccountInfoStyled = styled.div`
    ${flexBox};
    background-color: ${color.aero10};
    border-radius: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-between;
    padding: 3px;
    user-select: none;
    width: max-content;
`;

const ConnectButtonStyled = styled.button`
    ${resetButtonCSS};
    ${fonts.semiBold}
    background-color: ${color.aero10};
    border-radius: 16px;
    border: 2px solid transparent;
    height: 100%;
    padding: 4px 16px;
    transition: all 0.1s ease-out;

    &:hover {
        border-color: ${color.navy20};
    }
`;

const AddressStyled = styled.div`
    ${flexBox};
    background: ${color.white};
    border-radius: 12px;
    border: 1px solid transparent;
    cursor: pointer;
    height: 100%;
    line-height: 25px;
    padding: 2px 8px;
    transition: all 0.1s ease-out;

    &:hover {
        border-color: ${color.navy20};
    }
`;

const TextStyled = styled.span`
    ${fonts.semiBold}
    color: ${color.navy40};
`;

const BalanceBlockStyled = styled.div`
    @media (max-width: 450px) {
        display: none;
    }
`;

export const ConnectButtonStyles = {
    AccountInfoStyled,
    AddressStyled,
    BalanceBlockStyled,
    ConnectButtonStyled,
    TextStyled,
    WrapperStyled,
};

export default ConnectButtonStyles;
