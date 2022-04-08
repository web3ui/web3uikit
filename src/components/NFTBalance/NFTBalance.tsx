import { Chain } from '../../web3utils';
import React from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import { Loading } from '../Loading';
import NFT from '../NFT/NFT';

export interface INFTBalance {
    chain: Chain;
    address: string;
}

export const NFTBalance: React.FC<INFTBalance> = ({ address, chain }) => {
    const { isInitialized } = useMoralis();
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

    return (
        <div>
            {data.result.map(({ token_id: tokenId, name, metadata }, index) => {
                return (
                    <NFT
                        key={`${name}-${index}`}
                        tokenId={tokenId}
                        chain={chain}
                        name={name}
                        address={address}
                        metadata={JSON.parse(metadata as string)}
                    />
                );
            })}
        </div>
    );
};
