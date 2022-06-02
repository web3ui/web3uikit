import styled from 'styled-components';
import type { TodoProps } from './types';

type TStyleProps = Pick<TodoProps, 'fullWidth'>;

const DivStyled = styled.section`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const DivStyledContent = styled.div<TStyleProps>`
    display: flex;
    flex-direction: ${({ fullWidth }) => (fullWidth ? 'column' : 'row')};
    flex-wrap: wrap;
    gap: 16px;
`;

const SectionStyled = styled.section`
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

export default {
    DivStyled,
    DivStyledContent,
    SectionStyled,
};
