import styled from 'styled-components';

const DivStyled = styled.div`
    background-color: white;
    border-radius: 16px;
    display: grid;
    overflow: hidden;
    place-items: center;
    width: 256px;
    #information {
        padding: 8px 16px 16px;
    }
`;

const DivModalStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 16px;
`;

export default {
    DivStyled,
    DivModalStyled,
};
