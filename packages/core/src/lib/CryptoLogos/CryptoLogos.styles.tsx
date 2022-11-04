import styled, { css } from 'styled-components';
import { resetCSS } from '@web3uikit/styles';
import { chainType, CryptoLogoProps, sizeType } from './types';
import { chainLogoData } from '../../interfaces/logo';

const getBackground = (chain: chainType) => chainLogoData[chain].color;

const getSize = (size?: sizeType) => css`
    height: ${size};
    width: ${size};
`;

const DivStyledCryptoLogo = styled.div<CryptoLogoProps>`
    ${resetCSS};
    ${(props) => getSize(props.size)}
    align-items: center;
    border-radius: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    background: ${(props) => props?.bgColor || getBackground(props.chain)};
`;

export default { DivStyledCryptoLogo };
