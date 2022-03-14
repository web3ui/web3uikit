import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import { DivStyled } from './NFTCollection.styles';
import { Illustration } from '../Illustrations';
import { Loading } from '../Loading';
import { NFTCardProp, NFTCollectionProps, NFTType, ResultType } from './types';
import { Row } from '../Row';
import { Skeleton } from '../Skeleton';
import { Typography } from '../Typography';
import { useMoralis } from 'react-moralis';

const NFTCollection: React.FC<NFTCollectionProps> = ({ address, chainId }) => {
    const { isInitialized, Moralis } = useMoralis();
    const [nfts, setNfts] = useState<ResultType>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNFTS = async () => {
        if (isInitialized) {
            setIsLoading(true);
            const { result } = await Moralis.Web3API.account.getNFTs({
                address,
                chain: chainId,
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
        <Row justifyItems="flex-start" alignItems="stretch">
            <>
                {!isLoading ? (
                    nfts.length > 0 ? (
                        nfts.map(
                            (item) =>
                                item.token_uri && (
                                    <Row.Col
                                        breakpointsConfig={{
                                            xs: 24,
                                            sm: 8,
                                            md: 6,
                                            lg: 6,
                                        }}
                                        data-testid="test-NFTCollection-id"
                                        span={24}
                                    >
                                        <NFTCard token_uri={item.token_uri} />
                                    </Row.Col>
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

const NFTCard: React.FC<NFTCardProp> = ({ token_uri }) => {
    const [nft, setNft] = useState<NFTType>({} as NFTType);
    const [isError, setIsError] = useState(false);

    const fetchData = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        return {
            name: data.name,
            image: `https://ipfs.io/ipfs/${data.image.slice(7)}`,
        };
    };

    useEffect(() => {
        if (token_uri) {
            const res = fetchData(token_uri);
            res.then((data) => setNft(data));
        }
    }, [token_uri]);

    return nft.name ? (
        <Card title={nft.name}>
            {!isError ? (
                <img
                    src={nft.image}
                    style={{
                        borderRadius: '20px',
                        height: '200px',
                        width: '100%',
                    }}
                    onError={() => setIsError(true)}
                />
            ) : (
                <Illustration logo="lazyNft" width="100%" height="200px" />
            )}
        </Card>
    ) : (
        <Card>
            <Skeleton theme="image" width="100%" height="200px" />
            <Skeleton theme="text" height="30px" />
        </Card>
    );
};

export default NFTCollection;
