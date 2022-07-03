import { FC } from 'react';
import Blockies from 'react-blockies';
import styles from './Blockie.styles';
import { BlockieProps } from './types';

const { DivStyled } = styles;
/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Element
 */

const Blockie: FC<BlockieProps> = ({ seed, ...props }) => {
    return (
        <DivStyled data-testid="test-blockie">
            <Blockies {...props} seed={seed?.toLowerCase()} />
        </DivStyled>
    );
};

export default Blockie;
