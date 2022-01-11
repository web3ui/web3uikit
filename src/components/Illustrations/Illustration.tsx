import React from 'react';
import { chain, IllustrationProps, logos, size } from './types';
import ethereum from './Chains/logos/ethereum';
import binance from './Chains/logos/binance';
import colors from '../../styles/colors';
import polygon from './Chains/logos/polygon';
import avalanche from './Chains/logos/avalanche';
import fantom from './Chains/logos/fantom';
import arbitrum from './Chains/logos/arbitrum';

const getLogo = (
    logo: chain | logos,
    fillOutline: string,
    fillInline: string,
    fillInlineLeft: string,
    fillInlineRight: string,
    size: size,
) => {
    switch (logo) {
        case 'ethereum':
            return ethereum(fillOutline, fillInlineLeft, fillInlineRight, size);
        case 'binance':
            return binance(fillOutline, fillInline, size);
        case 'polygon':
            return polygon(fillOutline, fillInline, size);
        case 'avalanche':
            return avalanche(fillOutline, fillInline, size);
        case 'fantom':
            return fantom(fillOutline, fillInline, size);
        case 'arbitrum':
            return arbitrum(
                fillOutline,
                fillInline,
                fillInlineRight,
                fillInlineLeft,
                size,
            );
        default:
            return ethereum(fillOutline, fillInlineLeft, fillInlineRight, size);
    }
};

const Illustration: React.FC<IllustrationProps> = ({
    id = String(Date.now()),
    logo,
    size = 'xs',
    fillOutline = `${colors.blueDark2}`,
    fillInline = `${colors.white}`,
    fillInlineLeft = `${colors.grey}`,
    fillInlineRight = `${colors.grey}`,
}: IllustrationProps) => {
    return (
        <div id={id}>
            {getLogo(
                logo,
                fillOutline,
                fillInline,
                fillInlineLeft,
                fillInlineRight,
                size,
            )}
        </div>
    );
};

export default Illustration;
