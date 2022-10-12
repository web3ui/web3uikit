import styled from 'styled-components';
import ButtonBase from '../ButtonBase/ButtonBase';
import { color, gradientColors } from '@web3uikit/styles';

const ButtonOutlineStyled = styled(ButtonBase)`
    background-color: ${color.white};
    border-color: ${color.navy20};
    color: ${color.navy40};

    :hover {
        background-color: ${gradientColors.beauBlue};
        border-color: transparent;
        color: ${color.navy40};

        svg {
            color: ${color.navy40};
        }
    }

    :active {
        box-shadow: 0px 0px 0px 2px ${color.blue70};
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.navy30};
    }

    svg {
        color: ${color.navy40};
    }
`;

export default {
    ButtonOutlineStyled,
};
