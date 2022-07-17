import { css } from 'styled-components';
import { color } from '@web3uikit/styles';

const linkStyles = css`
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${color.blue};
    padding: 0px;
    color: ${color.blue};

    :active {
        border-width: 0px;
        border-bottom: 1px solid ${color.blue};
    }

    :hover {
        color: ${color.blueSkyDark};
        border-bottom: 1px solid ${color.blueSkyDark};
    }

    svg {
        fill: ${color.blue};
    }
`;

const textStyles = css`
    background-color: transparent;
    border-width: 0px;
    color: ${color.blue};

    svg {
        fill: ${color.blue};
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
