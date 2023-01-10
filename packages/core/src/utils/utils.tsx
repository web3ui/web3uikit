import React from 'react';
import { Illustration } from '../lib';
import lazyNft from '../lib/Illustrations/images/various/lazyNft';

const baseUrl = 'https://ipfs.io/ipfs/';

export const manipulateLink = (imgLink: string) => {
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

export const image = (
    animation?: string,
    image?: string,
    type?: string,
    onError?: () => void,
): React.ReactElement => {
    if (
        animation?.includes('.mp4') ||
        image?.includes('.mp4') ||
        type?.includes('video')
    ) {
        return (
            <video controls autoPlay loop muted>
                <source
                    src={manipulateLink(animation || image || '')}
                    type="video/mp4"
                    onError={() => onError?.()}
                />
            </video>
        );
    }
    if (image) {
        if (image.includes('pinata')) {
            return <img src={image} onError={() => onError?.()} />;
        }
        return <img src={manipulateLink(image)} onError={() => onError?.()} />;
    }
    if (animation) {
        if (animation.includes('pinata')) {
            return <img src={animation} onError={() => onError?.()} />;
        }
        return (
            <img src={manipulateLink(animation)} onError={() => onError?.()} />
        );
    }
    return <Illustration logo="lazyNft" />;
};

export const getEllipsisTxt = (str: string, n = 6) => {
    if (str) {
        return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return '';
};
