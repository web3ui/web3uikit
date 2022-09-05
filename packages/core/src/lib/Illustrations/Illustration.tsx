import { Chain, IllustrationProps, Logo, Size } from './types';
import arbitrum from './images/chains/arbitrum';
import avalanche from './images/chains/avalanche';
import binance from './images/chains/binance';
import bundle from './images/various/bundle';
import chest from './images/various/chest';
import comingSoon from './images/various/comingSoon';
import confirmed from './images/various/confirmed';
import coinbaseLogo from './images/chains/coinbase';
import cronos from './images/chains/cronos';
import cryptoLogo from './images/chains/cryptoweb';
import discord from './images/various/discord';
import documentation from './images/various/documentation';
import ethereum from './images/chains/ethereum';
import fantom from './images/chains/fantom';
import lazyNft from './images/various/lazyNft';
import looking from './images/various/looking';
import marketplace from './images/various/marketplace';
import pack from './images/various/pack';
import polygon from './images/chains/polygon';
import servers from './images/various/servers';
import token from './images/various/token';
import styled from 'styled-components';
import { resetCSS } from '@web3uikit/styles';
import wizard from './images/various/wizard';

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
        case 'cryptoweb':
            return cryptoLogo(width, height);
        case 'coinbase':
            return coinbaseLogo(width, height);
        case 'cronos':
            return cronos(width, height);
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
        case 'documentation':
            return documentation(width, height);
        case 'discord':
            return discord(width, height);
        case 'wizard':
            return wizard(width, height);
        default:
            return ethereum();
    }
};

const StyledIllustration = styled.div<
    Pick<IllustrationProps, 'width' | 'height'>
>`
    ${resetCSS}
    align-items: center;
    display: flex;
    height: ${(props) => props.height};
    justify-content: center;
    width: ${(props) => props.width};
`;

const Illustration: React.FC<IllustrationProps> = ({
    height,
    id = String(Date.now()),
    logo,
    width,
    ...props
}: IllustrationProps) => {
    return (
        <StyledIllustration
            data-testid="test-illustration"
            height={height}
            id={id}
            width={width}
            {...props}
        >
            {getLogo(logo, width, height)}
        </StyledIllustration>
    );
};

export default Illustration;
