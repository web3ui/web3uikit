import { Chain, getEllipsisTxt } from '../../web3utils';
import React, { useState } from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import { Loading } from '../Loading';
import NFT from '../NFT/NFT';
import styled from 'styled-components';
import { Button } from '../Button';
import { Typography } from '../Typography';

export interface INFTBalance {
    chain: Chain;
    address: string;
}

export const NFTBalance: React.FC<INFTBalance> = ({ address, chain }) => {
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
                Could'nt get Nft Balance for {address}
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

    const DivStyled = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    `;

    return (
        <div style={{ display: 'grid', gap: '64px' }}>
            <Typography variant="h1">
                {data.result.length > 0
                    ? `${getEllipsisTxt(address)} has ${
                          data.result.length
                      } NFT${data.result.length === 1 ? null : 's'}`
                    : `${getEllipsisTxt(address)} has no NFT's`}
            </Typography>
            <div style={{ display: 'grid', gap: '50px' }}>
                <DivStyled>
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
                </DivStyled>
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
            </div>
        </div>
    );
};
