import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import {
    DivStyledCardContainer,
    DivStyledCardContent,
    DivStyledCardFooter,
    SpanStyled,
} from './NFTCollection.styles';
import { Illustration } from '../Illustrations';
import { NFTCardProp, NFTType } from './types';
import { Row } from '../Row';
import { Skeleton } from '../Skeleton';
import { Typography } from '../Typography';
import { getChainHex, getEllipsisTxt, getExplorer } from '../../web3utils';
import color from '../../styles/colors';
import { Icon, iconTypes } from '../Icon';
import { PopoverDropdown } from '../PopoverDropdown';
import { PopoverElement } from '../PopoverElement';

const shortenName = (name: string, len: number) =>
    name.length > len ? name.slice(0, len + 1) + '...' : name;

// to fix ipfs links - add here if any more cases found
const fixUrl = (imgLink: string) => {
    let ipfsLink = null;
    if (imgLink && imgLink.slice(0, 4) === 'ipfs') {
        let case1 = 'ipfs://ipfs/';
        let case2 = 'ipfs://';
        if (imgLink.slice(0, case1.length) === case1)
            ipfsLink = `https://ipfs.io/ipfs/${imgLink.slice(case1.length)}`;
        else if (imgLink.slice(0, case2.length) === case2)
            ipfsLink = `https://ipfs.io/ipfs/${imgLink.slice(case2.length)}`;
    }
    return ipfsLink;
};

// If image cannot be accessed using token_uri and use metadata
const fromMetadata = (metadata: string | undefined) => {
    let tempData = metadata && JSON.parse(metadata);
    return {
        name: tempData?.name,
        image: tempData?.image,
    };
};

const NFTCard: React.FC<NFTCardProp> = ({
    chain,
    metadata,
    tokenAddress,
    tokenId,
    tokenUri,
}) => {
    const [nft, setNft] = useState<NFTType>({} as NFTType);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (url: string) => {
        try {
            const res = await fetch(url);
            //If Link cannot be accessed(eg. opensea) try to display NFT from metadata
            if (res.status != 200) {
                const { name, image } = fromMetadata(metadata);
                return {
                    name: shortenName(name, 50),
                    image: fixUrl(image),
                };
            } else {
                const data = await res.json();
                let ipfsLink = fixUrl(data.image);
                return {
                    name: data?.name ? shortenName(data.name, 50) : data?.name,
                    image: ipfsLink ? ipfsLink : data.image,
                };
            }
        } catch (error) {
            return { name: null, image: null };
        }
    };

    useEffect(() => {
        if (tokenUri) {
            setIsLoading(true);
            const res = fetchData(tokenUri);
            res.then((data) => {
                setNft(data);
                setIsLoading(false);
            });
        }
    }, [tokenUri]);

    const renderReady = () => (
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
            <DivStyledCardContainer>
                {/* On Image display error show lazyNft Illustration as default */}
                {!isError && nft.image ? (
                    nft.image.slice(-3) === 'mp4' ? (
                        <video
                            height="200px"
                            width="100%"
                            src={nft.image}
                            onError={() => setIsError(true)}
                        ></video>
                    ) : (
                        <SpanStyled
                            aria-label={`NFT image of ${nft.name}`}
                            onError={() => setIsError(true)}
                            role="image"
                            style={{ backgroundImage: `url(${nft.image})` }}
                        />
                    )
                ) : (
                    <Illustration logo="lazyNft" width="100%" height="200px" />
                )}
                <DivStyledCardContent>
                    <a
                        href={`${getExplorer(
                            getChainHex(chain),
                        )}/address/${tokenAddress}`}
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        <Typography variant="caption14">
                            <span>{getEllipsisTxt(tokenAddress, 4)}</span>
                        </Typography>
                    </a>
                    <Typography variant="caption14">ETH</Typography>
                </DivStyledCardContent>
                <DivStyledCardContent>
                    <Typography variant="body16" weight="bold">
                        {nft.name && nft.name !== '' ? (
                            nft.name
                        ) : (
                            <span id="name">
                                {'#' + shortenName(tokenId, 10)}
                            </span>
                        )}
                    </Typography>
                    <Typography variant="body16">NA</Typography>
                </DivStyledCardContent>
                <DivStyledCardFooter>
                    <div style={{ marginLeft: 'auto' }}>
                        <PopoverDropdown
                            position="bottom"
                            parent={
                                <Icon
                                    key="4"
                                    svg={iconTypes.info}
                                    fill={color.grey}
                                    size={20}
                                />
                            }
                            children={[
                                <PopoverElement
                                    key="0"
                                    height={30}
                                    width={150}
                                    text={'Buy on OpenSea'}
                                    icon={iconTypes.link}
                                    textSize={10}
                                    backgroundColor={'transparent'}
                                    textColor={color.white}
                                    onClick={() =>
                                        window.open(
                                            `http://opensea.io/assets/${tokenAddress}/${tokenId}`,
                                            '_blank',
                                        )
                                    }
                                />,
                                <PopoverElement
                                    key="1"
                                    height={30}
                                    width={150}
                                    text={'Watch on Block Explorer'}
                                    icon={iconTypes.link}
                                    textSize={10}
                                    backgroundColor={'transparent'}
                                    textColor={color.white}
                                    onClick={() =>
                                        window.open(
                                            `${getExplorer(
                                                getChainHex(chain),
                                            )}/address/${tokenAddress}`,
                                            '_blank',
                                        )
                                    }
                                />,
                            ]}
                        />
                    </div>
                </DivStyledCardFooter>
            </DivStyledCardContainer>
        </Row.Col>
    );

    const renderLoading = () => (
        <Row.Col
            breakpointsConfig={{
                xs: 24,
                sm: 8,
                md: 6,
                lg: 6,
            }}
            span={24}
        >
            <Card>
                <Skeleton theme="image" width="100%" height="200px" />
                <Skeleton theme="text" height="50px" />
            </Card>
        </Row.Col>
    );

    return !isLoading ? renderReady() : renderLoading();
};

export default NFTCard;
