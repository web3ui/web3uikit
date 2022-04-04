import styled from 'styled-components';
import type { TodoProps } from './types';

type TStyleProps = Pick<TodoProps, 'fullWidth'>;

export const DivStyled = styled.section`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
`;

export const DivStyledContent = styled.section<TStyleProps>`
    display: flex; 
    flex-direction: ${({ fullWidth }) => fullWidth ? 'column' : 'row'};
    flex-wrap: wrap; 
    gap: 16px;
`;

export const SectionStyled = styled.section`
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
`;
