import React from 'react';
import colors from '../../styles/colors'
import { Tooltip } from '../Tooltip'
import { Icon } from '../Icon'
import { iconTypes } from '../Icon/collection'
import { Divider, NFTFooter, NFTImage, NFTInfo, NFTName, NFTType, NFTWrapper } from './NFT.styles';
import { NFTProps } from './types';
const NFT: React.FC<NFTProps> = ({
    description,
    name,
    id,
    img_url,
    type,
    token_address,
    token_id
}: NFTProps) => {
    return (
        <NFTWrapper id={id}>
            <NFTImage src={img_url} alt={""}/>
            <NFTInfo>
                <NFTName>{name} #{token_id}</NFTName>
                <NFTType>{type}</NFTType>
            </NFTInfo>
            <Divider />
            <NFTFooter style={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse', padding: '10px 16px'}}>
                <Tooltip text={`${token_address} ${description ? description : ''}`} position="bottom" children={[ <Icon svg={iconTypes.helpCircle} fill={colors.blue}/>]}/>
            </NFTFooter>
        </NFTWrapper>
    )
}

export default NFT;