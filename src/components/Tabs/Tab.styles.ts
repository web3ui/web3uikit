import styled from "styled-components";
import colors from "../../styles/colors";

type StyledTabProps = {
    isActive: boolean;
    disable: boolean;
}

export const StyledTab = styled.li<StyledTabProps>`
    position: relative;

    padding: 0.5em 1em;
    ${(props) => props.isActive && 'margin-bottom: calc(var(--tabs-border-size) * -1);'}

    border-right: 1px solid ${colors.greyLight};
    border-top: 1px solid ${colors.greyLight};

    background-color: ${(props) => !props.isActive ? colors.blueCloud : colors.white};
    color: ${(props) => !props.isActive ? colors.grey : colors.black};

    user-select: none;
    cursor: pointer;

    &:first-child {
        border-left: 1px solid ${colors.greyLight};
        border-top-left-radius: 4px;
    }

    &:last-child {
        border-top-right-radius: 4px;
    }
`;
