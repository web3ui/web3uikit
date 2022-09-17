import React, { useState } from 'react';
import styles from './NFT.styles';
import { color } from '@web3uikit/styles';
import { Button, Skeleton, Typography, Tooltip } from '@web3uikit/core';
import { Info } from '@web3uikit/icons';
import NFTModal from './NFT.modal';
import { INFTProps, TNFTMetadata } from './types';
import NFTUtils from './NFT.utils';
import FetchedNFT from './NFT.fetched';
import { useGetNftById } from '../hooks/useGetNft';
const { DivStyled } = styles;
const { image } = NFTUtils;
const NFT: React.FC<INFTProps> = ({
    address,
    chain,
    contractType = 'ERC721',
    name,
    tokenId,
    fetchMetadata,
    metadata,
    ...props
}) => {
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        return (
            <div data-testid="test-nft-no-valid-address">No valid address</div>
        );
    }
    const { data, loading, error } = useGetNftById({ address, tokenId, chain });
    const [showTraits, setShowModal] = useState(false);
    console.log(data);
    if (!fetchMetadata) {
        return (
            <FetchedNFT
                contractType={contractType}
                metadata={metadata}
                name={name}
            />
        );
    }
    if (loading) {
        return (
            <div data-testid="test-nft-metadata-loading" {...props}>
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
        return <div data-testid="test-nft-metadata-error">{error}</div>;
    }

    if (!data) {
        return <div data-testid="test-nft-metadata-error">No response</div>;
    }

    if (!data?.metadata) {
        return (
            <DivStyled id="nft">
                <Skeleton theme="text" width="100%" height="200px" />
                <div id="information">
                    <Tooltip
                        children={<Info fill={color.yellowDark} />}
                        content={'There is no metadata'}
                        position={'top'}
                    />
                </div>
            </DivStyled>
        );
    }

    return (
        <div data-testid="test-nft">
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
                        <Typography variant="caption14" color={color.blueDark}>
                            {(JSON.parse(String(data.metadata)) as TNFTMetadata)
                                ?.name || name}
                        </Typography>
                        <Typography variant="caption12">
                            {data.contract_type || contractType}
                        </Typography>
                    </div>
                </div>
                <div id="nft-footer">
                    <Button
                        icon={<Info fill={color.grey} fontSize={20} />}
                        isTransparent
                        iconColor={color.grey}
                        iconLayout="icon-only"
                        onClick={() => setShowModal(true)}
                    />
                    {showTraits && (
                        <NFTModal
                            attributes={
                                (JSON.parse(
                                    String(data.metadata),
                                ) as TNFTMetadata)?.traits ||
                                (JSON.parse(
                                    String(data.metadata),
                                ) as TNFTMetadata)?.attributes
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
