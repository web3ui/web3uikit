import React from 'react';
import { INftCardProps } from './types';
import styles from './NftCard.styles';
import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import { image } from '../../utils/utils';
import NftDetails from './NftDetail.helper';
import TruncateString from '../Credentials/components/TruncateString';
import { Illustration } from '../Illustrations';

const { DivStyled, DivStyledContainer, FieldsetStyled } = styles;

const NFTCard: React.FC<INftCardProps &
    React.HTMLAttributes<HTMLDivElement>> = ({
    chain,
    customDetails,
    customize,
    detailsBorder = `2px solid ${color.navy30}`,
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
                    JSON.parse(String(data.metadata))?.image_url ||
                    JSON.parse(String(data.metadata))?.file,
                JSON.parse(String(data.metadata))?.type,
            );
        } catch (error) {
            return <Illustration logo="lazyNft" />;
        }
    };

    return (
        <DivStyled
            className="NftCard"
            customize={customize}
            data-testid="test-NftCard"
            {...props}
        >
            <DivStyledContainer customize={customize} width={width}>
                <div className="nft-image">{getImage()}</div>
                <div className="nft-card-text">
                    <Typography variant="h4" weight="500" fontSize="20px">
                        <TruncateString
                            text={`${data.name} #${data?.token_id}`}
                            fontSize="20px"
                            textColor={color.blue70}
                        />
                    </Typography>
                </div>
                {data.contract_type && (
                    <Typography variant="body16" weight="400">
                        {data.contract_type}
                    </Typography>
                )}
                <FieldsetStyled detailsBorder={detailsBorder}>
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
