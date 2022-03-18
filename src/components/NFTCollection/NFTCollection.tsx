import NFTCard from './NFTCard';
import React, { useEffect, useState } from 'react';
import { DivStyled } from './NFTCollection.styles';
import { Loading } from '../Loading';
import { NFTCollectionProps, ResultType } from './types';
import { Row } from '../Row';
import { Typography } from '../Typography';
import { useMoralis } from 'react-moralis';

const NFTCollection: React.FC<NFTCollectionProps> = ({
    address,
    chainId,
    limit = 20,
    offset = 0,
}) => {
    const { isInitialized, Moralis } = useMoralis();
    const [nfts, setNfts] = useState<ResultType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNFTS = async () => {
        if (isInitialized) {
            setIsLoading(true);
            const { result } = await Moralis.Web3API.account.getNFTs({
                address,
                chain: chainId,
                offset,
                limit,
            });
            if (result) {
                setNfts(result);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchNFTS();
    }, [isInitialized, address, chainId]);

    return (
        <Row justifyItems="flex-start" alignItems="stretch" rowGap={40}>
            <>
                {!isLoading ? (
                    nfts.length > 0 ? (
                        nfts.map(
                            (item) =>
                                item.token_uri && (
                                    <NFTCard
                                        metadata={item.metadata}
                                        tokenAddress={item.token_address}
                                        tokenUri={item.token_uri}
                                    />
                                ),
                        )
                    ) : (
                        <DivStyled>
                            <Typography>Given address has no NFT's</Typography>
                        </DivStyled>
                    )
                ) : (
                    isLoading && (
                        <DivStyled>
                            <Loading size={40} spinnerColor="#2E7DAF" />
                        </DivStyled>
                    )
                )}
            </>
        </Row>
    );
};

export default NFTCollection;
