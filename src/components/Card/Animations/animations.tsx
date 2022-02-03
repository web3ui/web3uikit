import React from 'react';
import { Illustration } from '../../Illustrations';

const getModuleAnimation = (
    module:
        | 'Token'
        | 'NFT Marketplace'
        | 'NFT Collection'
        | 'Bundle'
        | 'Lazy NFT'
        | 'Pack'
        | undefined,
) => {
    switch (module) {
        case 'Token':
            return (
                <Illustration logo={'token'} width={'100%'} height={'180px'} />
            );
        case 'NFT Marketplace':
            return (
                <Illustration
                    logo={'marketplace'}
                    width={'100%'}
                    height={'180px'}
                />
            );
        case 'NFT Collection':
            return (
                <Illustration logo={'chest'} width={'100%'} height={'180px'} />
            );
        case 'Bundle':
            return (
                <Illustration logo={'bundle'} width={'100%'} height={'180px'} />
            );
        case 'Lazy NFT':
            return (
                <Illustration
                    logo={'lazyNft'}
                    width={'100%'}
                    height={'180px'}
                />
            );
        case 'Pack':
            return (
                <Illustration logo={'pack'} width={'100%'} height={'180px'} />
            );
        default:
            return (
                <Illustration
                    logo={'servers'}
                    width={'100%'}
                    height={'180px'}
                />
            );
    }
};

export default getModuleAnimation;
