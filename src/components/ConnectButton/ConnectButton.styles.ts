import styled, { css } from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS, { resetButtonCSS } from '../../styles/reset';

const flexBox = css`
    ${resetCSS};
    align-items: center;
    display: flex;
`;

const WrapperStyled = styled.div`
    ${flexBox}
    margin: 0px 16px;
    height: 40px;
    white-space: nowrap;
`;

const AccountInfoStyled = styled.div`
    ${flexBox}
    /* width: 100%; */
    flex-wrap: wrap;
    width: max-content;
    justify-content: space-between;
    flex-direction: row;
    padding: 3px;
    border-radius: 16px;
    background-color: ${color.blueLight};
    user-select: none;
    height: 100%;
`;

const ConnectButtonStyled = styled.button`
    ${resetButtonCSS};
    ${fonts.semiBold}
    background-color: ${color.blueLight};
    height: 100%;
    border-radius: 16px;
    padding: 4px 16px;
    border: 2px solid transparent;
    transition: all 0.1s ease-out;

    &:hover {
        border-color: ${color.paleBlue2};
    }
`;

const AddressStyled = styled.div`
    ${flexBox}
    padding: 2px 8px;
    background: ${color.white};
    border-radius: 12px;
    border: 1px solid transparent;
    transition: all 0.1s ease-out;
    line-height: 25px;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-color: ${color.paleBlue2};
    }
`;

const TextStyled = styled.span`
    ${fonts.semiBold}
    color: ${color.blue};
`;

const BalanceBlockStyled = styled.div`
    @media (max-width: 450px) {
        display: none;
    }
`;

export const ConnectButtonStyles = {
    WrapperStyled,
    TextStyled,
    ConnectButtonStyled,
    AddressStyled,
    AccountInfoStyled,
    BalanceBlockStyled,
    // DisconnectedStyled,
};

export default ConnectButtonStyles;
