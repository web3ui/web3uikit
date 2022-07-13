import React, { useState } from 'react';
import { Button } from '../Button';
import { Typography } from '../Typography';
import NFTStyles from './NFT.styles';
import NFTUtils from './NFT.utils';
import { TNFTMetadata } from './types';
import colors from '../../styles/colors';
import NFTModal from './NFT.modal';

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
                    icon="info"
                    isTransparent
                    iconColor={colors.grey}
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
