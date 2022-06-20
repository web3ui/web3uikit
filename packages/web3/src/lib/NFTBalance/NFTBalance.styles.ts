import styled from 'styled-components';
const DivStyled = styled.div<{ gap: number }>`
    display: grid;
    gap: ${({ gap }) => `${gap}px`};
`;

const DivFlexStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export default {
    DivStyled,
    DivFlexStyled,
};
