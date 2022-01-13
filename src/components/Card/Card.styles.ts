import styled, { css } from 'styled-components';
import { CardProps } from './types';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const CardStyled = styled.div<Pick<CardProps, 'selected'>>`
    ${resetCSS}
    ${fonts.text}
  border: 2px solid transparent;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    display: grid;
    min-height: fit-content;
    padding: 15px;
    position: relative;
    width: 100%;
    ${(p) => (p.selected ? selected : hoverNotSelected)}
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 24px;

    & > div {
        position: absolute;
        top: 0;
        right: 0;
    }
`;

export const CardFooter = styled.div`
    color: ${colors.blue};
    display: grid;
    text-align: center;
    & > p {
        ${fonts.textBold}
        margin: 0;
    }
`;

const selected = css`
    border: 2px solid ${colors.green};
`;

const hoverNotSelected = css`
    &:hover {
        border: 2px solid ${colors.blueSky};
    }
`;
