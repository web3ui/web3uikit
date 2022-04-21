import React from 'react';
import { Illustration } from '../Illustrations';

const baseUrl = 'https://ipfs.io/ipfs/';

const manipulateLink = (imgLink: string) => {
    if (imgLink.startsWith('ipfs://')) {
        const case1 = 'ipfs://ipfs/';
        const case2 = 'ipfs://';
        if (imgLink.slice(0, case1.length) === case1) {
            return `${baseUrl}${imgLink.slice(case1.length)}`;
        } else if (imgLink.slice(0, case2.length) === case2) {
            return `${baseUrl}${imgLink.slice(case2.length)}`;
        }
    }
    return imgLink;
};

const image = (animation?: string, image?: string): React.ReactElement => {
    if (animation?.includes('.mp4') || image?.includes('.mp4')) {
        return (
            <video height={'210px'} width={'100%'} controls autoPlay loop muted>
                <source src={animation || image} type="video/mp4" />
            </video>
        );
    }
    if (image) {
        if (image.includes('pinata')) {
            return <img src={image} height="210px" width={'256px'} />;
        }
        return (
            <img src={manipulateLink(image)} height="210px" width={'256px'} />
        );
    }
    if (animation) {
        if (animation.includes('pinata')) {
            return <img src={animation} height="210px" width={'256px'} />;
        }
        return (
            <img
                src={manipulateLink(animation)}
                height="210px"
                width={'256px'}
            />
        );
    }
    return <Illustration logo="lazyNft" height="210px" width={'100%'} />;
};

export default {
    image,
};
