import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import {
    DivStyledCardContainer,
    DivStyledCardContent,
    DivStyledCardFooter,
    ImageStyled,
} from './NFTCollection.styles';
import { Illustration } from '../Illustrations';
import { NFTCardProp, NFTType } from './types';
import { Row } from '../Row';
import { Skeleton } from '../Skeleton';
import { Typography } from '../Typography';
import { getEllipsisTxt } from '../../web3utils';
import color from '../../styles/colors';
import { Tooltip } from '../Tooltip';
import { Icon, iconTypes } from '../Icon';

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
    metadata,
    tokenAddress,
    tokenUri,
}) => {
    const [nft, setNft] = useState<NFTType>({} as NFTType);
    const [isError, setIsError] = useState(false);

    const fetchData = async (url: string) => {
        try {
            const res = await fetch(url);
            //If Link cannot be accessed(eg. opensea) try to display NFT from metadata
            if (res.status != 200) {
                const { name, image } = fromMetadata(metadata);
                //if no image in metadata set error to true to not display this NFT
                if (!name || !image) setIsError(true);
                return { name, image };
            } else {
                const data = await res.json();
                let ipfsLink = fixUrl(data.image);
                return {
                    name: data.name,
                    image: ipfsLink ? ipfsLink : data.image,
                };
            }
        } catch (error) {
            //If there is any error in fetching image try from metadata
            const { name, image } = fromMetadata(metadata);
            if (!name || !image) setIsError(true);
            return { name, image };
        }
    };

    useEffect(() => {
        if (tokenUri) {
            const res = fetchData(tokenUri);
            res.then((data) => setNft(data)).catch(() => setIsError(true));
        }
    }, [tokenUri]);

    return nft.name ? (
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
                {!isError ? (
                    nft.image.slice(-3) === 'mp4' ? (
                        <video
                            height="200px"
                            width="100%"
                            src={nft.image}
                            onError={() => setIsError(true)}
                        ></video>
                    ) : (
                        <ImageStyled
                            src={nft.image}
                            onError={() => setIsError(true)}
                        />
                    )
                ) : (
                    <Illustration logo="lazyNft" width="100%" height="200px" />
                )}
                <DivStyledCardContent>
                    <Typography variant="caption14">
                        {getEllipsisTxt(tokenAddress, 4)}
                    </Typography>
                    <Typography variant="caption14">ETH</Typography>
                </DivStyledCardContent>
                <DivStyledCardContent>
                    <Typography variant="body16">{nft.name}</Typography>
                    <Typography variant="body16">NA</Typography>
                </DivStyledCardContent>
                <DivStyledCardFooter>
                    <div style={{ marginLeft: 'auto' }}>
                        <Tooltip
                            position="bottom"
                            content={'this is content'}
                            children={
                                <Icon
                                    key="4"
                                    svg={iconTypes.info}
                                    fill={color.grey}
                                    size={20}
                                />
                            }
                        />
                    </div>
                </DivStyledCardFooter>
            </DivStyledCardContainer>
        </Row.Col>
    ) : !isError ? (
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
                <Skeleton theme="image" width="80%" height="200px" />
                <Skeleton theme="text" height="50px" />
            </Card>
        </Row.Col>
    ) : null;
};

export default NFTCard;
