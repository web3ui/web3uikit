import React, { useState, useEffect } from 'react'
import { ENSAvatarprops } from './types'
import { useMoralis } from 'react-moralis';
import Blockies from 'react-blockies';
import { ENSAvatarStyles } from "./ENSAvatar.styles"


const { NonAvatarDiv,AvatarImg } = ENSAvatarStyles

const ENSAvatar: React.FC<ENSAvatarprops> = (props) => {

    const {account , chainId, web3} = useMoralis()
    const [ensName, setensName] = useState<string | null>(null)
    const [AvatarURI, setAvatarURI] = useState<string | undefined>()

    useEffect(() => {
        if (account && chainId) {

            web3?.lookupAddress(account).then((result) => {
                setensName(result)

            })

            web3?.getAvatar(String(account)).then((r) => {
                
                setAvatarURI(String(r))
            })
        }
    }, [account, chainId]);



    return (
        <>
        {(AvatarURI == String(null)) ? 
        (<>
            <NonAvatarDiv>
                <Blockies seed={props.seed} />
            </NonAvatarDiv>
            
        </>) : 
        (<>
        <div>   
            
            <AvatarImg src={AvatarURI} />
        </div>
            
        </>)}
            
        </>
        
    )
}

export default ENSAvatar;