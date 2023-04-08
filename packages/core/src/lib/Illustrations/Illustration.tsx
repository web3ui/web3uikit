import { Chain, IllustrationProps, Logo, Size } from './types';
import ethereum from './images/chains/ethereum';
import bundle from './images/various/bundle';
import chest from './images/various/chest';
import comingSoon from './images/various/comingSoon';
import confirmed from './images/various/confirmed';
import cryptoLogo from './images/various/cryptoweb';
import discord from './images/various/discord';
import documentation from './images/various/documentation';
import lazyNft from './images/various/lazyNft';
import looking from './images/various/looking';
import marketplace from './images/various/marketplace';
import pack from './images/various/pack';
import servers from './images/various/servers';
import token from './images/various/token';
import styled from 'styled-components';
import { resetCSS } from '@web3uikit/styles';
import wizard from './images/various/wizard';
import AllChains from './images/chains';
import { Suspense } from 'react';
import { Skeleton } from '../Skeleton';
import plugins from './images/various/plugins';
import data from './images/various/data';
import beanBoyFront from './images/various/beanBoyFront';
import beanBoyUpLeft from './images/various/beanBoyUpLeft';
import beanBoyStepOne from './images/various/beanBoyStepOne';
import beanBoyStepTwo from './images/various/beanBoyStepTwo';
import beanBoyStepThree from './images/various/beanBoyStepThree';
import beanBoyStepFour from './images/various/beanBoyStepFour';
import beanBoyStepFive from './images/various/beanBoyStepFive';
import binaryTriangle from './images/various/binaryTriangle';
import cat from './images/various/cat';
import checklist from './images/various/checklist';
import wallet from './images/various/wallet';

const getLogo = (logo: Chain | Logo, width?: Size, height?: Size) => {
    switch (logo) {
        case 'cryptoweb':
            return cryptoLogo(width, height);
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
        case 'plugins':
            return plugins(width, height);
        case 'data':
            return data(width, height);
        case 'beanBoyFront':
            return beanBoyFront(width, height);
        case 'beanBoyUpLeft':
            return beanBoyUpLeft(width, height);
        case 'beanBoyStepOne':
            return beanBoyStepOne(width, height);
        case 'beanBoyStepTwo':
            return beanBoyStepTwo(width, height);
        case 'beanBoyStepThree':
            return beanBoyStepThree(width, height);
        case 'beanBoyStepFour':
            return beanBoyStepFour(width, height);
        case 'beanBoyStepFive':
            return beanBoyStepFive(width, height);
        case 'wallet':
            return wallet(width, height);
        case 'cat':
            return cat(width, height);
        case 'checklist':
            return checklist(width, height);
        case 'binaryTriangle':
            return binaryTriangle(width, height);
        default:
            const chainLogos = Object.values(AllChains);
            const ChainLogo = chainLogos.find(
                (chainLogo) => chainLogo.name === logo,
            );
            const props = { width, height };
            if (ChainLogo) return <ChainLogo.component {...props} />;
            else {
                ethereum({ width, height });
            }
    }
};

const StyledIllustration = styled.div<
    Pick<IllustrationProps, 'width' | 'height' | 'fill'>
>`
    ${resetCSS}
    align-items: center;
    display: flex;
    height: ${(props) => props.height};
    justify-content: center;
    width: ${(props) => props.width};
    color: ${(props) => props.fill};
`;

const Illustration: React.FC<IllustrationProps> = ({
    height,
    id,
    logo,
    width,
    fill = 'white',
    ...props
}: IllustrationProps) => {
    return (
        <StyledIllustration
            data-testid="test-illustration"
            height={height}
            id={id}
            width={width}
            fill={fill}
            {...props}
        >
            <Suspense
                fallback={
                    <Skeleton
                        height={height as string}
                        width={width as string}
                        theme="image"
                        borderRadius="100%"
                    />
                }
            >
                {getLogo(logo, width, height)}
            </Suspense>
        </StyledIllustration>
    );
};

export default Illustration;
