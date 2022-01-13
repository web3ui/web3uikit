import styled from "styled-components";
import colors from '../../../../styles/colors';

export const PanelContainer = styled.div`
    position: relative;
    padding: 1em;

    border: 1px solid ${colors.greyLight};
    border-top: none;

    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;

    &:focus {
        z-index: 1;
        outline: none;
        box-shadow: 0 0 0 4px ${colors.blueSky};
    }
`;