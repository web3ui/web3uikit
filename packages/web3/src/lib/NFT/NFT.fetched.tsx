import React, { useState } from 'react';
import { Button, Typography } from '@web3uikit/core';
import NFTStyles from './NFT.styles';
import NFTUtils from './NFT.utils';
import { TNFTMetadata } from './types';
import { color } from '@web3uikit/styles';
import NFTModal from './NFT.modal';
import { Info } from '@web3uikit/icons';

const { DivStyled } = NFTStyles;
const { image } = NFTUtils;

const FetchedNFT: React.FC<{
    contractType?: string;
    metadata?: TNFTMetadata;
    name?: string;
}> = ({ contractType, metadata, name }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <DivStyled id="nft">
            {image(
                metadata?.animation_url,
                metadata?.image || metadata?.image_url,
            )}
            <div id="nft-info">
                <div>
                    <Typography variant="body16">
                        {metadata?.name || name}
                    </Typography>
                    <Typography variant="caption12">{contractType}</Typography>
                </div>
            </div>
            <div id="nft-footer">
                <Button
                    icon={<Info fontSize={20} />}
                    isTransparent
                    iconColor={color.blueGray50}
                    iconLayout="icon-only"
                    onClick={() => setShowModal(true)}
                />
                {showModal && (
                    <NFTModal
                        attributes={metadata?.traits || metadata?.attributes}
                        setShowModal={setShowModal}
                    />
                )}
            </div>
        </DivStyled>
    );
};

export default FetchedNFT;
