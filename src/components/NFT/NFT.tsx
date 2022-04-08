import React from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import styled from 'styled-components';
import { Illustration } from '../Illustrations';
import { Loading } from '../Loading';
import { INFTProps } from './types';

const baseUrl = 'https://ipfs.io/ipfs/';

const NFT: React.FC<INFTProps> = ({
    address,
    chain,
    name,
    tokenId,
    fetchMetadata,
    metadata,
}) => {
    const { isInitialized } = useMoralis();
    const Web3API = useMoralisWeb3Api();
    const { data, error, isLoading } = useMoralisWeb3ApiCall(
        Web3API.token.getTokenIdMetadata,
        {
            address,
            chain,
            token_id: String(tokenId),
        },
        {
            autoFetch: isInitialized && fetchMetadata,
        },
    );

    if (!isInitialized) {
        return (
            <div data-testid="no-moralis-instance">
                Moralis is not initialized
            </div>
        );
    }

    if (isLoading) {
        <div data-testid="nft-metadata-loading">
            <Loading />
        </div>;
    }

    if (error) {
        <div data-testid="nft-metadata-error">
            Could not fetch metadata
            {error.message}
        </div>;
    }

    if (fetchMetadata && !data) {
        <div data-testid="nft-metadata-error">No response</div>;
    }

    if (fetchMetadata && data) {
        return <div>{JSON.stringify(data, null, 5)}</div>;
    }

    const DivStyled = styled.div`
        display: grid;
        place-items: center;
        padding: 16px;
        width: 256px;
        #information {
            padding: 8px 16px 16px;
        }
    `;

    const image = (animation?: string, image?: string): React.ReactElement => {
        let url: string = '';

        fetch(
            'https://ipfs.io/ipfs/QmYkFZw1EYP4zF5Ri57dezAtws3KeQfm8Jcxy2nyJ66Jz3',
        )
            .then(console.log)
            .catch(console.log);

        if (animation?.includes('.mp4') || image?.includes('.mp4')) {
            return (
                <video height={'210px'} controls autoPlay loop>
                    <source src={animation || image} type="video/mp4" />
                </video>
            );
        }
        if (animation) {
            url = animation;
            if (animation.startsWith('ipfs://')) {
                url = `${baseUrl}${animation.split('//')[1].split('/')[0]}`;
            }
            if (animation.includes('/ipfs/')) {
                url = `${baseUrl}${animation.split('/ipfs/')[1]}`;
            }
            console.log('animation', url);
            return <img src={url} height="210px" />;
        }
        if (image) {
            url = image;
            if (image.startsWith('ipfs://')) {
                url = `${baseUrl}${image.split('//')[1].split('/')[0]}`;
            }
            if (image.includes('/ipfs/')) {
                url = `${baseUrl}${image.split('/ipfs/')[1]}`;
            }
            console.log(url);
            return <img src={url} height="210px" />;
        }
        return <Illustration logo="lazyNft" height="210px" width={'100%'} />;
    };

    return (
        <DivStyled>
            <div>
                {image(
                    metadata?.animation_url,
                    metadata?.image || metadata?.image_url,
                )}
            </div>
            <div id="information">
                <span>{metadata?.description}</span>
                <span>{name}</span>
                <div>
                    {metadata?.attributes && (
                        <ul>
                            {metadata.attributes.map((attribute, index) => {
                                const entries = Object.entries(attribute);
                                return (
                                    <li key={`attr-${index}`}>
                                        {`${entries[0][1]}: ${entries[1][1]}`}
                                    </li>
                                );
                            })}
                            ;
                        </ul>
                    )}
                </div>
            </div>
        </DivStyled>
    );
};
/**
 * <span>{metadata?.description}</span>
            <span>{name}</span>
            <div>
                {metadata?.attributes && (
                    <ul>
                        {metadata.attributes.map((attribute, index) => {
                            const entries = Object.entries(attribute);
                            return (
                                <li key={`attr-${index}`}>
                                    {`${entries[0][1]}: ${entries[1][1]}`}
                                </li>
                            );
                        })}
                        ;
                    </ul>
                )}
            </div>
 */

export default NFT;
