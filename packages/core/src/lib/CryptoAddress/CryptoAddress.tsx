import { Typography } from '../Typography';
import { ICryptoAddressProps } from './types';
import { CryptoAddressStyles } from './CryptoAddress.styles';
import { CopyButton } from '../CopyButton';
import { ExternalLink } from '@web3uikit/icons';

import { utils } from './index';
const { truncate } = utils.format;

const { DivStyled } = CryptoAddressStyles;

const CryptoAddress: React.FC<ICryptoAddressProps> = ({
    typographyVariant,
    typographyFontWeight,
    walletAddress = '0x716faAbE78090b075580bE27fF4DB69Ec7245d3e',
    walletColor = '#213853',
    walletUrl,
    ...props
}) => {
    const renderContent = () => (
        <>
            {walletUrl && (
                <a
                    href={walletUrl}
                    target="blank"
                    data-testid="test-cryptoAddressUrl"
                >
                    <ExternalLink />
                </a>
            )}
        </>
    );
    return (
        <DivStyled
            data-testid="test-cryptoAddress"
            walletColor={walletColor}
            {...props}
        >
            <Typography
                data-testid="test-cryptoAddressTypography"
                variant={typographyVariant}
                weight={typographyFontWeight}
            >
                {truncate(walletAddress, 10)}
                <CopyButton iconSize={24} text={walletAddress} />
                {renderContent()}
            </Typography>
        </DivStyled>
    );
};

export default CryptoAddress;
