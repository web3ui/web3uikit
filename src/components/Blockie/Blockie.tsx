import React from 'react';
import Blockies from 'react-blockies';
import { BlockieProps } from './types';
import styles from './Blockie.styles';

const { DivStyled } = styles;

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Element
 */

const Blockie: React.FC<BlockieProps> = ({ seed, ...props }) => {
    return (
        <DivStyled data-testid="test-blockie">
            <Blockies seed={seed?.toLowerCase()} {...props} />
        </DivStyled>
    );
};

export default Blockie;
