import React from 'react';
import Illustration from '../Illustrations/Illustration';
import { CryptoLogoProps } from './types';
import styles from './CryptoLogos.styles';

const { DivStyledCryptoLogo } = styles;

const CryptoLogos: React.FC<CryptoLogoProps> = ({
    chain,
    size = '48px',
    bgColor,
    ...props
}: CryptoLogoProps) => {
    return (
        <DivStyledCryptoLogo
            chain={chain}
            data-testid={'test-crypto-logo'}
            size={size}
            bgColor={bgColor}
            {...props}
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
