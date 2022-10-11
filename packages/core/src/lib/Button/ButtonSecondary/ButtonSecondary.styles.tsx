import styled from 'styled-components';
import ButtonBase from '../ButtonBase/ButtonBase';
import { color } from '@web3uikit/styles';

const ButtonSecondaryStyled = styled(ButtonBase)`
    background-color: ${color.aero10};
    border-color: ${color.aero10};
    color: ${color.navy40};

    :active {
        border-color: ${color.navy40};
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.navy30};
    }

    svg {
        fill: ${color.navy40};
    }
`;

export default {
    ButtonSecondaryStyled,
};
