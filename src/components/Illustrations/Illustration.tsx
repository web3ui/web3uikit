import React from 'react';
import { chain, IllustrationProps, logos } from './types';
import ethereum from './Chains/logos/ethereum';
import binance from './Chains/logos/binance';
import polygon from './Chains/logos/polygon';
import avalanche from './Chains/logos/avalanche';
import fantom from './Chains/logos/fantom';
import arbitrum from './Chains/logos/arbitrum';

const getLogo = (logo: chain | logos) => {
    switch (logo) {
        case 'ethereum':
            return ethereum();
        case 'binance':
            return binance();
        case 'polygon':
            return polygon();
        case 'avalanche':
            return avalanche();
        case 'fantom':
            return fantom();
        case 'arbitrum':
            return arbitrum();
        default:
            return ethereum();
    }
};

const Illustration: React.FC<IllustrationProps> = ({
    id = String(Date.now()),
    logo,
}: IllustrationProps) => {
    return <div id={id}>{getLogo(logo)}</div>;
};

export default Illustration;
