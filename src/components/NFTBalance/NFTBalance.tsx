import { getEllipsisTxt } from '../../web3utils';
import React, { useState } from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import { Loading } from '../Loading';
import { NFT } from '../NFT';
import styles from './NFTBalance.styles';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { INFTBalance } from './types';
const { DivStyled, DivFlexStyled } = styles;

const NFTBalance: React.FC<INFTBalance> = ({ address, chain }) => {
    const { isInitialized } = useMoralis();
    const [limit, setLimit] = useState(5);
    const Web3Api = useMoralisWeb3Api();

    const { data, error, isLoading } = useMoralisWeb3ApiCall(
        Web3Api.account.getNFTs,
        {
            address,
            chain,
        },
        { autoFetch: true },
    );

    if (!isInitialized) {
        return (
            <div data-testid="no-moralis-instance">
                Moralis is not initialized
            </div>
        );
    }

    if (error) {
        return (
            <div data-testid="nft-balance-error">
                Couldn't get Nft Balance for {address}
                {error.message}
            </div>
        );
    }
    if (isLoading) {
        return (
            <div data-testid="nft-balance-loading">
                <Loading />
            </div>
        );
    }

    if (!data) {
        return <div data-testid="nft-balance-no-data">No response</div>;
    }

    if (!data.result) {
        return <div data-testid="nft-balance-no-result">No result</div>;
    }

    return (
        <DivStyled gap={64}>
            <Typography variant="h1">
                {data.result.length > 0
                    ? `${getEllipsisTxt(address)} has ${
                          data.result.length
                      } NFT${data.result.length === 1 ? null : 's'}`
                    : `${getEllipsisTxt(address)} has no NFT's`}
            </Typography>
            <DivStyled gap={64}>
                <DivFlexStyled>
                    {data.result
                        .slice(0, limit)
                        .map(
                            (
                                {
                                    token_id: tokenId,
                                    name,
                                    metadata,
                                    token_address: tokenAddress,
                                },
                                index,
                            ) => {
                                return (
                                    <NFT
                                        key={`${name}-${index}`}
                                        tokenId={tokenId}
                                        chain={chain}
                                        name={name}
                                        address={tokenAddress}
                                        metadata={JSON.parse(
                                            metadata as string,
                                        )}
                                    />
                                );
                            },
                        )}
                </DivFlexStyled>
                {data.result.length > limit && (
                    <Button
                        text="Show more"
                        icon="chevronDown"
                        iconLayout="trailing"
                        theme="translucent"
                        onClick={() => setLimit(limit + 5)}
                        size="large"
                    />
                )}
            </DivStyled>
        </DivStyled>
    );
};

export default NFTBalance;
