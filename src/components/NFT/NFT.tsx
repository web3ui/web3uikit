import React, { useState } from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import styles from './NFT.styles';
import colors from '../../styles/colors';
import { Button } from '../Button';
import { Loading } from '../Loading';
import NFTModal from './NFT.modal';
import { INFTProps } from './types';
import NFTUtils from './NFT.utils';
const { DivStyled } = styles;
const { image } = NFTUtils;
const NFT: React.FC<INFTProps> = ({
    address,
    chain,
    name,
    tokenId,
    fetchMetadata,
    metadata,
}) => {
    const { isInitialized } = useMoralis();
    const Web3API = useMoralisWeb3Api();
    const { data, error, isLoading } = useMoralisWeb3ApiCall(
        Web3API.token.getTokenIdMetadata,
        {
            address,
            chain,
            token_id: String(tokenId),
        },
        {
            autoFetch: isInitialized && fetchMetadata,
        },
    );
    const [showTraits, setShowModal] = useState(false);

    if (!isInitialized) {
        return (
            <div data-testid="no-moralis-instance">
                Moralis is not initialized
            </div>
        );
    }

    if (isLoading) {
        <div data-testid="nft-metadata-loading">
            <Loading />
        </div>;
    }

    if (error) {
        <div data-testid="nft-metadata-error">
            Could not fetch metadata
            {error.message}
        </div>;
    }

    if (fetchMetadata && !data) {
        <div data-testid="nft-metadata-error">No response</div>;
    }

    if (fetchMetadata && data) {
        return <div>{JSON.stringify(data, null, 5)}</div>;
    }

    return (
        <DivStyled id="nft">
            {image(
                metadata?.animation_url,
                metadata?.image || metadata?.image_url,
            )}
            <div id="information">
                <span>{metadata?.name || name}</span>
                <Button
                    icon="info"
                    isTransparent
                    iconColor={colors.grey}
                    iconLayout="icon-only"
                    onClick={() => setShowModal(true)}
                />
                {showTraits && (
                    <NFTModal
                        attributes={metadata?.traits || metadata?.attributes}
                        setShowModal={setShowModal}
                    />
                )}
            </div>
        </DivStyled>
    );
};

export default NFT;
