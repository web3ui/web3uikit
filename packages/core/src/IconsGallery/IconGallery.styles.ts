import { color } from '@web3uikit/styles';
import styled from 'styled-components';

const StyledDivGallery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledDivGrid = styled.div`
    max-width: 95vw;
    margin: auto;
    display: grid;
    gap: 1rem;
    align-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const StyledDivIcon = styled.div`
    border: 1px solid grey;
    position: relative;
    margin: auto;
    padding: 50px;
    border-radius: 20px;
    transition: all 0.1s linear;
    &:hover {
        background-color: ${color.aero10};
    }
`;

export { StyledDivGallery, StyledDivIcon, StyledDivGrid };
