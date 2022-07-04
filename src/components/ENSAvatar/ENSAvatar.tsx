import React, { useState, useEffect } from 'react';
import { ENSAvatarprops } from './types';
import { useMoralis } from 'react-moralis';
import Blockies from 'react-blockies';
import { ENSAvatarStyles } from './ENSAvatar.styles';

const { NonAvatarDiv, AvatarImg } = ENSAvatarStyles;

const ENSAvatar: React.FC<ENSAvatarprops> = (props) => {
    const { account, chainId, web3 } = useMoralis();
    

    const [AvatarURI, setAvatarURI] = useState<string | null>(null);

    useEffect(() => {
        if (account && chainId) {
            web3?.getAvatar(account).then((r) => {
                setAvatarURI(String(r));
            });
        }
    }, [account, chainId]);

    return (
        <>
            {AvatarURI ? (
                <div>
                    <AvatarImg src={AvatarURI} />
                </div>
            ) : (
                <NonAvatarDiv>
                    <Blockies seed={props.seed} />
                </NonAvatarDiv>
            )}
        </>
    );
};

export default ENSAvatar;
