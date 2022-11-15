import React from 'react';
import { INftCardProps } from './types';
import styles from './NftCard.styles';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import { image, getEllipsisTxt } from '../../utils/utils';

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
                        <table>
                            <tr>
                                <th>Contract Address</th>
                                <td className="address">
                                    {getEllipsisTxt(data?.token_address, 4)}
                                </td>
                            </tr>
                            {data?.owner_of && (
                                <tr>
                                    <th>Owner Address</th>
                                    <td className="address">
                                        {getEllipsisTxt(data.owner_of, 4)}
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <th>Token Id</th>
                                <td className="card-text">{data?.token_id}</td>
                            </tr>
                            <tr>
                                <th>Symbol</th>
                                <td>{data.symbol}</td>
                            </tr>
                            <tr>
                                <th>Chain</th>
                                <td>{chain}</td>
                            </tr>
                            {data?.last_metadata_sync && (
                                <tr>
                                    <th>Last Synced</th>
                                    <td>
                                        {new Date(data?.last_metadata_sync)
                                            .toLocaleDateString()
                                            .toString()}
                                    </td>
                                </tr>
                            )}
                        </table>
                    )}
                </FieldsetStyled>
            </DivStyledContainer>
        </DivStyled>
    );
};

export default NFTCard;
