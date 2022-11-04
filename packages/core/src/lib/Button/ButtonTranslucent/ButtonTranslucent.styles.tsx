import styled from 'styled-components';
import ButtonBase from '../ButtonBase/ButtonBase';
import { color, getShade } from '@web3uikit/styles';

const ButtonTranslucentStyled = styled(ButtonBase)`
    background-color: ${getShade('dark', 20)};
    color: ${color.white};

    :active {
        border: 2px solid transparent;
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.navy30};
    }

    svg {
        fill: ${color.white};
    }
`;

export default {
    ButtonTranslucentStyled,
};
