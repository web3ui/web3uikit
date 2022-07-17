import styled from 'styled-components';
import ButtonBase from '../ButtonBase/ButtonBase';
import { color } from '@web3uikit/styles';

const ButtonPrimaryStyled = styled(ButtonBase)`
    background-color: ${color.green};
    border-color: ${color.greenLight};
    color: ${color.white};

    :hover {
        background: radial-gradient(
                71.63% 130.21% at 50% 0%,
                #aadcd6 0%,
                rgba(33, 191, 150, 0) 100%
            ),
            #21bf96;
    }

    :active {
        border-color: ${color.greenLight};
        background: linear-gradient(
                83.64deg,
                #aadcd6 -9.46%,
                rgba(33, 191, 150, 0) 45.97%,
                #aadcd6 103.7%
            ),
            #21bf96;
        outline: 0;
        box-shadow: none;
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.blue};
    }

    svg {
        fill: ${color.white};
    }
`;

export default {
    ButtonPrimaryStyled,
};
