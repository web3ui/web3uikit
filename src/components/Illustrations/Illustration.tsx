import React from 'react';
import { Chain, IllustrationProps, Logo } from './types';
import ethereum from './images/chains/ethereum';
import binance from './images/chains/binance';
import polygon from './images/chains/polygon';
import avalanche from './images/chains/avalanche';
import fantom from './images/chains/fantom';
import arbitrum from './images/chains/arbitrum';
import comingSoon from './images/various/comingSoon';
import confirmed from './images/various/confirmed';
import looking from './images/various/looking';
import servers from './images/various/servers';
import token from './images/various/token';
import lazyNft from './images/various/lazyNft';
import pack from './images/various/pack';
import marketplace from './images/various/marketplace';
import chest from './images/various/chest';
import bundle from './images/various/bundle';

const getLogo = (logo: Chain | Logo) => {
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
        case 'comingSoon':
            return comingSoon();
        case 'confirmed':
            return confirmed();
        case 'looking':
            return looking();
        case 'servers':
            return servers();
        case 'token':
            return token();
        case 'lazyNft':
            return lazyNft();
        case 'pack':
            return pack();
        case 'marketplace':
            return marketplace();
        case 'chest':
            return chest();
        case 'bundle':
            return bundle();
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
