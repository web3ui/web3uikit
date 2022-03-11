import React from 'react';
import Illustration from '../Illustrations/Illustration';
import { CryptoLogoProps } from './types';
import { DivStyledCryptoLogo } from './CryptoLogos.styles';

const CryptoLogos: React.FC<CryptoLogoProps> = ({
    chain,
    size = '48px',
    bgColor,
}: CryptoLogoProps) => {
    return (
        <DivStyledCryptoLogo
            chain={chain}
            data-testid={'test-crypto-logo'}
            size={size}
            bgColor={bgColor}
        >
            {
                <Illustration
                    logo={chain}
                    width="90%"
                    height="90%"
                ></Illustration>
            }
        </DivStyledCryptoLogo>
    );
};

export default CryptoLogos;
