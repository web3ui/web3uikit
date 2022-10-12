import { css } from 'styled-components';
import { color } from '@web3uikit/styles';

const linkStyles = css`
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${color.navy40};
    padding: 0px;
    color: ${color.navy40};

    :active {
        border-width: 0px;
        border-bottom: 1px solid ${color.navy40};
    }

    :hover {
        color: ${color.blue30};
        border-bottom: 1px solid ${color.blue30};
    }

    svg {
        fill: ${color.navy40};
    }
`;

const textStyles = css`
    background-color: transparent;
    border-width: 0px;
    color: ${color.navy40};

    svg {
        fill: ${color.navy40};
    }
`;

const transparentStyles = css`
    background-color: transparent;
    border-color: transparent;
`;

export default {
    linkStyles,
    textStyles,
    transparentStyles,
};
