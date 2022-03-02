import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import type { chainType, CryptoLogoProps, sizeType } from './types';
import bgConfig from './bgConfig';

const getBackground = (chain: chainType) => bgConfig[chain];

const getSize = (size?: sizeType) => css`
    width: ${size};
    height: ${size};
`;

export const DivStyledCryptoLogo = styled.div<CryptoLogoProps>`
    ${resetCSS};
    align-items: center;
    background: ${(props) => props?.bgColor || getBackground(props.chain)};
    border-radius: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    ${(props) => getSize(props.size)}
`;
