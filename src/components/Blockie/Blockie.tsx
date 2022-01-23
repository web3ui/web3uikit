import React from 'react';
import Blockies from 'react-blockies';
import { useMoralis } from 'react-moralis';
import { BlockieStyles } from './Blockie.styles';
import { BlockieProps } from './types';

const { BlockieStyled } = BlockieStyles;
/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

const Blockie: React.FC<BlockieProps> = (props) => {
    const { account } = useMoralis();
    if (!props?.seed && !account) return null;

    return (
        <BlockieStyled data-testid="test-div">
            <Blockies
                {...props}
                seed={
                    props?.seed?.toLowerCase() ||
                    (account as string).toLowerCase()
                }
                className="identicon"
            />
        </BlockieStyled>
    );
};

export default Blockie;
