import React, { useState } from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { Button } from '../Button';
import { Illustration } from '../Illustrations';
import { Information } from '../Info';
import { Loading } from '../Loading';
import { Modal } from '../Modal';
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
    const [showTraits, setShowModal] = useState(false);
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
        background-color: white;
        border-radius: 16px;
        display: grid;
        overflow: hidden;
        place-items: center;
        width: 256px;
        #information {
            padding: 8px 16px 16px;
        }
    `;

    const image = (animation?: string, image?: string): React.ReactElement => {
        let url: string = '';

        if (animation?.includes('.mp4') || image?.includes('.mp4')) {
            return (
                <video
                    height={'210px'}
                    width={'100%'}
                    controls
                    autoPlay
                    loop
                    muted
                >
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
            return <img src={url} height="210px" width={'256px'} />;
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
            return <img src={url} height="210px" width={'256px'} />;
        }
        return <Illustration logo="lazyNft" height="210px" width={'100%'} />;
    };

    const TraitModal = () => {
        return (
            <Modal
                isVisible
                hasFooter={false}
                headerHasBottomBorder={false}
                onCloseButtonPressed={() => setShowModal(false)}
            >
                <div>
                    {metadata?.attributes && (
                        <div>
                            {metadata.attributes.map((attribute, index) => {
                                const entries = Object.entries(attribute);
                                return (
                                    <>
                                        <Information
                                            topic={entries[0][1]}
                                            information={entries[1][1]}
                                            key={`attr-${index}`}
                                        />
                                    </>
                                );
                            })}
                        </div>
                    )}
                </div>
                <div>
                    {metadata?.traits && (
                        <div>
                            {metadata.traits.map((traits, index) => {
                                const entries = Object.entries(traits);
                                return (
                                    <div>
                                        <Information
                                            topic={entries[0][1]}
                                            information={entries[1][1]}
                                            key={`attr-${index}`}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </Modal>
        );
    };

    return (
        <DivStyled id="nft">
            {image(
                metadata?.animation_url,
                metadata?.image || metadata?.image_url,
            )}
            <div id="information">
                <span>{name}</span>
                {(metadata?.traits || metadata?.attributes) && (
                    <Button
                        icon="info"
                        isTransparent
                        iconColor={colors.grey}
                        iconLayout="icon-only"
                        onClick={() => setShowModal(true)}
                    />
                )}
                {showTraits && <TraitModal />}
            </div>
        </DivStyled>
    );
};

export default NFT;
