import styled from 'styled-components';
import colors from '../../styles/colors';
const DivStyled = styled.div`
    background-color: white;
    border-radius: 16px;
    display: grid;
    overflow: hidden;
    width: 256px;
    #nft-footer {
        align-items: center;
        border: 2px solid;
        border-color: transparent;
        border-top-color: ${colors.blueLight};
        display: flex;
        flex-direction: row-reverse;
    }
    #nft-info {
        display: flex;
        padding: 8px 8px;
        & > :first-child {
            display: grid;
        }
    }
`;

const DivModalStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 16px;
    #widget-row {
        & > div {
            width: 240px;
            max-width: 100%;
        }
    }
`;

export default {
    DivStyled,
    DivModalStyled,
};
