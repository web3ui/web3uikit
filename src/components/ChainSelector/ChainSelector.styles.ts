import styled from 'styled-components';
import { chainIdType } from './types';

export const getChainLogoName = (chain: chainIdType) => {
    switch (chain) {
        case '0x89':
        case '0x13881':
            return 'polygon';
        case '0x38':
        case '0x61':
            return 'binance';
        case '0x66eeb':
        case '0xa4b1':
            return 'arbitrum';

        case '0xa86a':
        case '0xa869':
            return 'avalanche';
        case '0xfa':
            return 'fantom';
        case '0x1':
        case '0x2a':
        case '0x3':
        case '0x4':
        case '0x5':
        case '0x539':
        default:
            return 'ethereum';
    }
};

const GridStyled = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
    width: 100%;
`;

const GridElementStyled = styled.div`
    height: 144px;
    & > div {
        height: 100%;
    }
`;

const CardContentStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    margin-top: 13px;
`;

const ChainSelectStyles = { GridStyled, GridElementStyled, CardContentStyled };

export default ChainSelectStyles;
