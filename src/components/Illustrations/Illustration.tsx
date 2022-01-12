import React from 'react';
import { Chain, IllustrationProps, Logo, Size } from './types';
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

const getLogo = (logo: Chain | Logo, width?: Size, height?: Size) => {
    switch (logo) {
        case 'ethereum':
            return ethereum(width, height);
        case 'binance':
            return binance(width, height);
        case 'polygon':
            return polygon(width, height);
        case 'avalanche':
            return avalanche(width, height);
        case 'fantom':
            return fantom(width, height);
        case 'arbitrum':
            return arbitrum(width, height);
        case 'comingSoon':
            return comingSoon(width, height);
        case 'confirmed':
            return confirmed(width, height);
        case 'looking':
            return looking(width, height);
        case 'servers':
            return servers(width, height);
        case 'token':
            return token(width, height);
        case 'lazyNft':
            return lazyNft(width, height);
        case 'pack':
            return pack(width, height);
        case 'marketplace':
            return marketplace(width, height);
        case 'chest':
            return chest(width, height);
        case 'bundle':
            return bundle(width, height);
        default:
            return ethereum();
    }
};

const Illustration: React.FC<IllustrationProps> = ({
    id = String(Date.now()),
    logo,
    width,
    height,
}: IllustrationProps) => {
    return <div id={id}>{getLogo(logo, width, height)}</div>;
};

export default Illustration;
