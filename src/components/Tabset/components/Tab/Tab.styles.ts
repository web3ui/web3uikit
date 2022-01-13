import styled from "styled-components";
import colors from "../../../../styles/colors";
import { resetButtonCSS } from '../../../../styles/reset';

type StyledTabProps = {
    isActive: boolean;
    disable: boolean;
}

export const StyledTab = styled.button<StyledTabProps>`
    ${resetButtonCSS}

    padding: 0.5em 1em;

    border-right: 1px solid ${colors.greyLight};
    border-top: 1px solid ${colors.greyLight};
    border-bottom: 1px solid ${(props) => props.isActive ? 'transparent' : colors.greyLight};

    background-color: ${(props) => props.isActive ? colors.white : colors.blueCloud};
    color: ${(props) => props.isActive ? colors.black : colors.grey};

    user-select: none;
    cursor: pointer;

    transition: all 100ms ease-in-out;

    &:first-child {
        border-left: 1px solid ${colors.greyLight};
        border-top-left-radius: 4px;
    }

    &:last-child {
        border-top-right-radius: 4px;
    }

    &[aria-selected="true"] {
        z-index: 1;
    }

    &:focus {
        ${(props) => !props.isActive && 'z-index: 2;'}
        box-shadow: 0 0 0 4px ${colors.blueSky};
    }
`;
