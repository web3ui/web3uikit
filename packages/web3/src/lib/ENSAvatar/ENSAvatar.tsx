import React, { useState, useEffect } from 'react';
import { ENSAvatarProps } from './types';
import { useMoralis } from 'react-moralis';
import Blockies from 'react-blockies';
import styles from './ENSAvatar.styles';

const { AvatarImg, DivStyled } = styles;

const ENSAvatar: React.FC<ENSAvatarProps> = ({ address, size = 50 }) => {
    const { chainId, web3 } = useMoralis();
    const [avatarURI, setAvatarURI] = useState<string | null>(null);

    useEffect(() => {
        if (address && chainId && web3) {
            web3?.getAvatar(address)
                .then((res) => {
                    setAvatarURI(res ? String(res) : null);
                })
                .catch(() => setAvatarURI(null));
        }
    }, [address, chainId]);

    return avatarURI ? (
        <DivStyled data-testid="test-ens-avatar">
            <AvatarImg data-test-id src={avatarURI} size={size} />
        </DivStyled>
    ) : (
        <DivStyled data-testid="test-no-ens-avatar">
            <Blockies seed={address} size={size} scale={1} />
        </DivStyled>
    );
};

export default ENSAvatar;
