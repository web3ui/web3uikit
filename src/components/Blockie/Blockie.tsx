import React from 'react';
import Blockies from 'react-blockies';
import { BlockieStyles } from './Blockie.styles';
import { BlockieProps } from './types';

const { BlockieStyled } = BlockieStyles;
/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

const Blockie: React.FC<BlockieProps> = ({ seed, ...props }) => {
    return (
        <BlockieStyled data-testid="test-blockie">
            <Blockies seed={seed?.toLowerCase()} {...props} />
        </BlockieStyled>
    );
};

export default Blockie;
