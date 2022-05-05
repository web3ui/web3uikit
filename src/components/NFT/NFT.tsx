import React, { useState } from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import styles from './NFT.styles';
import colors from '../../styles/colors';
import { Button } from '../Button';
import NFTModal from './NFT.modal';
import { INFTProps, TNFTMetadata } from './types';
import NFTUtils from './NFT.utils';
import { Skeleton } from '../Skeleton';
import { Typography } from '../Typography';
import FetchedNFT from './NFT.fetched';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
const { DivStyled } = styles;
const { image } = NFTUtils;
const NFT: React.FC<INFTProps> = ({
    address,
    chain,
    name,
    tokenId,
    fetchMetadata,
    metadata,
    ...props
}) => {
    const { isInitialized, isInitializing } = useMoralis();
    const Web3API = useMoralisWeb3Api();
    const { data, error, isLoading, isFetching } = useMoralisWeb3ApiCall(
        Web3API.token.getTokenIdMetadata,
        {
            address,
            chain,
            token_id: String(tokenId),
        },
        {
            autoFetch:
                isInitialized &&
                fetchMetadata &&
                /^0x[a-fA-F0-9]{40}$/.test(address),
        },
    );
    const [showTraits, setShowModal] = useState(false);

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        return <div data-testid="no-valid-address">No valid address</div>;
    }

    if (!fetchMetadata) {
        return <FetchedNFT metadata={metadata} name={name} />;
    }

    if (!isInitialized && !isInitializing) {
        return <div data-testid="no-moralis-instance" />;
    }

    if (isLoading || isFetching) {
        return (
            <div data-testid="nft-metadata-loading" {...props}>
                <DivStyled id="nft">
                    <Skeleton theme="text" width="100%" height="200px" />
                    <div id="information">
                        <Skeleton theme="text" width="30%" height="18px" />
                        <Skeleton theme="image" width="60px" height="60px" />
                    </div>
                </DivStyled>
            </div>
        );
    }

    if (error) {
        return <div data-testid="nft-metadata-error">{error.message}</div>;
    }

    if (!data) {
        return <div data-testid="nft-metadata-error">No response</div>;
    }

    if (!data?.metadata) {
        return (
            <DivStyled id="nft">
                <Skeleton theme="text" width="100%" height="200px" />
                <div id="information">
                    <Tooltip
                        children={<Icon svg="info" fill={colors.yellowDark} />}
                        content={'There is no metadata'}
                        position={'top'}
                    />
                </div>
            </DivStyled>
        );
    }

    return (
        <div>
            <DivStyled id="nft">
                {image(
                    (JSON.parse(String(data.metadata)) as TNFTMetadata)
                        ?.animation_url,
                    (JSON.parse(String(data.metadata)) as TNFTMetadata)
                        ?.image ||
                        (JSON.parse(String(data.metadata)) as TNFTMetadata)
                            ?.image_url,
                )}
                <div id="nft-info">
                    <div>
                        <Typography variant="caption14" color={colors.blueDark}>
                            {(JSON.parse(String(data.metadata)) as TNFTMetadata)
                                ?.name || name}
                        </Typography>
                        <Typography variant="caption12">
                            {data.contract_type || 'ERC721'}
                        </Typography>
                    </div>
                </div>
                <div id="nft-footer">
                    <Button
                        icon="info"
                        isTransparent
                        iconColor={colors.grey}
                        iconLayout="icon-only"
                        onClick={() => setShowModal(true)}
                    />
                    {showTraits && (
                        <NFTModal
                            attributes={
                                (
                                    JSON.parse(
                                        String(data.metadata),
                                    ) as TNFTMetadata
                                )?.traits ||
                                (
                                    JSON.parse(
                                        String(data.metadata),
                                    ) as TNFTMetadata
                                )?.attributes
                            }
                            setShowModal={setShowModal}
                        />
                    )}
                </div>
            </DivStyled>
        </div>
    );
};

export default NFT;
