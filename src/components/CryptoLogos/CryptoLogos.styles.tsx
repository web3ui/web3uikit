import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import type { chainType, CryptoLogoProps, sizeType } from './types';
import bgConfig from './bgConfig';

const getBackground = (chain: chainType) => bgConfig[chain];

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
