import { ICryptoAddressProps } from './types';
import styled, { css } from 'styled-components';
import { color } from '@web3uikit/styles';

type TStyleProps = Pick<ICryptoAddressProps, 'walletColor'>;

const openSans = css`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', Tahoma, Verdana, sans-serif;
`;

const DivStyled = styled.div<TStyleProps>`
    align-items: center;
    color: ${({ walletColor }) => (walletColor ? walletColor : color.aero80)};
    display: flex;
    width: 100%;
    > * {
        align-items: center;
        color: ${({ walletColor }) =>
            walletColor ? walletColor : color.aero80};
        display: flex;
        width: 100%;
    }
    button {
        display: flex;
        margin-left: 5px;
        &:hover svg[aria-labelledby='copybutton check icon'] path {
            fill: rgb(0, 209, 174);
        }
        svg[aria-labelledby='copybutton copy icon'] path {
            fill: ${({ walletColor }) =>
                walletColor ? walletColor : color.aero80};
        }
    }
    a {
        margin-left: 5px;
    }
    a,
    a:hover,
    a:focus,
    a:active {
        color: ${({ walletColor }) =>
            walletColor ? walletColor : color.aero80};
        display: flex;
        text-decoration: none;
    }
    a svg {
        font-size: 24px;
        path {
            fill: ${({ walletColor }) =>
                walletColor ? walletColor : color.aero80};
        }
    }
`;

export const CryptoAddressStyles = {
    DivStyled,
};
