import React, { useState } from "react";
import { Button, Typography } from "@web3uikit/core";
import NFTStyles from "./NFT.styles";
import NFTUtils from "./NFT.utils";
import { TNFTMetadata } from "./types";
import { color } from "@web3uikit/styles";
import NFTModal from "./NFT.modal";

const { DivStyled } = NFTStyles;
const { image } = NFTUtils;

const FetchedNFT: React.FC<{
  metadata?: TNFTMetadata;
  name?: string;
}> = ({ metadata, name }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <DivStyled id="nft">
      {image(metadata?.animation_url, metadata?.image || metadata?.image_url)}
      <div id="nft-info">
        <div>
          <Typography variant="body16">{metadata?.name || name}</Typography>
          <Typography variant="caption12">ERC721</Typography>
        </div>
      </div>
      <div id="nft-footer">
        <Button
          icon="info"
          isTransparent
          iconColor={color.grey}
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
