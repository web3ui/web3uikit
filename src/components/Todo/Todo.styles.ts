import styled from 'styled-components';
import color from '../../styles/colors';

import type { TodoProps } from './types';

type TStyleProps = Pick<TodoProps, 'fullWidth'>;

export const DivStyled = styled.section`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
`;

export const DivStyledContent = styled.section<TStyleProps>`
    display: grid;
    gap: 16px;
    grid-template-columns: ${({ fullWidth }) => `repeat(${fullWidth ? 1 : 4}, minmax(0, 1fr))`};
`;

export const SectionStyled = styled.section`
    background-color: ${color.blueLight};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
`;
