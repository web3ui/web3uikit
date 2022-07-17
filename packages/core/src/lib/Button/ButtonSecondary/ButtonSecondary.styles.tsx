import styled from 'styled-components';
import ButtonBase from '../ButtonBase/ButtonBase';
import { color } from '@web3uikit/styles';

const ButtonSecondaryStyled = styled(ButtonBase)`
    background-color: ${color.blueLight};
    border-color: ${color.blueLight};
    color: ${color.blue};

    :active {
        border-color: ${color.blue};
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
    }

    svg {
        fill: ${color.blue};
    }
`;

export default {
    ButtonSecondaryStyled,
};
