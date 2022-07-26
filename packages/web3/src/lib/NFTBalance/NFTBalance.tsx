import { getEllipsisTxt } from '../../web3utils';
import React, { useState } from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import { NFT } from '../NFT';
import styles from './NFTBalance.styles';
import { Button, Typography, Skeleton } from '@web3uikit/core';
import { INFTBalance } from './types';
import { ChevronDown } from '@web3uikit/icons';
const { DivStyled, DivFlexStyled } = styles;

const NFTBalance: React.FC<INFTBalance> = ({ address, chain, ...props }) => {
    const { isInitialized, isInitializing } = useMoralis();
    const [limit, setLimit] = useState(5);
    const Web3Api = useMoralisWeb3Api();

    const { data, error, isLoading, isFetching } = useMoralisWeb3ApiCall(
        Web3Api.account.getNFTs,
        {
            address,
            chain,
        },
        { autoFetch: /^0x[a-fA-F0-9]{40}$/.test(address) },
    );

    if (!isInitialized && !isInitializing) {
        return <div data-testid="test-no-moralis-instance" />;
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        return (
            <div data-testid="test-no-valid-address">Not a valid address</div>
        );
    }

    if (error) {
        return (
            <div data-testid="test-nft-balance-error">
                <Typography>Couldn't get Nft Balance for {address}</Typography>
                <Typography>{error.message}</Typography>
            </div>
        );
    }
    if (isLoading || isFetching) {
        return (
            <DivStyled gap={8} data-testid="test-nft-balance-loading">
                <Skeleton width="80%" height="60px" theme="text" />
                <Skeleton width="40%" height="30px" theme="subtitle" />
            </DivStyled>
        );
    }

    if (!data) {
        return <div data-testid="test-nft-balance-no-data">No response</div>;
    }

    if (!data.result) {
        return <div data-testid="test-nft-balance-no-result">No result</div>;
    }

    return (
        <DivStyled data-testid="test-nft-balance" gap={64} {...props}>
            <DivStyled gap={8}>
                <Typography variant="h1">{getEllipsisTxt(address)}</Typography>
                <Typography>
                    {data.result.length > 0
                        ? `Found ${data.result.length} NFT${
                              data.result.length === 1 ? null : 's'
                          }`
                        : 'No NFTs'}
                </Typography>
            </DivStyled>
            <DivStyled gap={64}>
                <DivFlexStyled>
                    {data.result
                        .slice(0, limit)
                        .map(
                            (
                                {
                                    contract_type,
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
                                        fetchMetadata={false}
                                        metadata={JSON.parse(
                                            metadata as string,
                                        )}
                                        contractType={contract_type}
                                    />
                                );
                            },
                        )}
                </DivFlexStyled>
                {data.result.length > limit && (
                    <Button
                        text="Show more"
                        icon={<ChevronDown fontSize={20} />}
                        iconLayout="trailing"
                        theme="translucent"
                        onClick={() => setLimit(limit + 5)}
                        size="large"
                        isFullWidth={true}
                    />
                )}
            </DivStyled>
        </DivStyled>
    );
};

export default NFTBalance;
