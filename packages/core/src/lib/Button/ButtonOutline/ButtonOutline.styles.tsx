import styled from 'styled-components';
import ButtonBase from '../ButtonBase/ButtonBase';
import { color, gradientColors } from '@web3uikit/styles';

const ButtonOutlineStyled = styled(ButtonBase)`
    background-color: ${color.white};
    border-color: ${color.beauBlue};
    color: ${color.blue};

    :hover {
        background-color: ${gradientColors.beauBlue};
        border-color: transparent;
        color: ${color.blue};

        svg {
            color: ${color.blue};
        }
    }

    :active {
        box-shadow: 0px 0px 0px 2px ${color.blueDark};
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
    }

    svg {
        color: ${color.blue};
    }
`;

export default {
    ButtonOutlineStyled,
};
