import styled from 'styled-components';
import ButtonBase from '../ButtonBase/ButtonBase';
import { color } from '@web3uikit/styles';

const ButtonMoneyPrimaryStyled = styled(ButtonBase)`
    background-color: ${color.mint50};
    border: 1px solid ${color.mint50};
    color: ${color.white};

    :hover {
        background-color: ${color.mint53};
    }

    :active {
        outline:none;
        transform:translateY(2px);
    }

    :focus {
        border-color:${color.mint10};
    }

    svg {
        fill: ${color.white};
    }
`;

export default {
    ButtonMoneyPrimaryStyled,
};
