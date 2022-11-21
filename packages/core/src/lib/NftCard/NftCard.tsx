import React from 'react';
import { INftCardProps } from './types';
import styles from './NftCard.styles';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import { image } from '../../utils/utils';
import NftDetails from './NftDetail.helper';

const { DivStyled, DivStyledContainer, FieldsetStyled } = styles;

const NFTCard: React.FC<INftCardProps &
    React.HTMLAttributes<HTMLDivElement>> = ({
    chain,
    customDetails,
    moralisApiResult: data,
    width = '400px',
    ...props
}) => {
    if (!data || !data.metadata) return <DivStyled>No metadata</DivStyled>;

    const getImage = () => {
        if (!data.metadata) return null;
        try {
            return image(
                JSON.parse(String(data.metadata))?.animation_url,
                JSON.parse(String(data.metadata))?.image ||
                    JSON.parse(String(data.metadata))?.image_url,
            );
        } catch (error) {
            return null;
        }
    };

    return (
        <DivStyled className="NftCard" data-testid="test-NftCard" {...props}>
            <DivStyledContainer width={width}>
                <Typography
                    variant="h3"
                    weight="600"
                    color={color.blueGray50}
                    style={{ marginBottom: '52px' }}
                >
                    {data?.name}
                </Typography>
                <div className="nft-image">{getImage()}</div>
                <div className="nft-card-text">
                    <Typography variant="h4" weight="500">
                        {data?.token_id}
                    </Typography>
                </div>
                {data.contract_type && (
                    <Typography variant="body16" weight="400">
                        {data.contract_type}
                    </Typography>
                )}
                <FieldsetStyled>
                    <legend>Details</legend>
                    {customDetails ? (
                        customDetails
                    ) : (
                        <NftDetails data={data} chain={chain} />
                    )}
                </FieldsetStyled>
            </DivStyledContainer>
        </DivStyled>
    );
};

export default NFTCard;
