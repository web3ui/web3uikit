import styled from 'styled-components';
import { HeroProps } from './types';

// styles
type TStyleProps = Pick<HeroProps, 'height' | 'backgroundColor'>;

export const SectionStyled = styled.section<TStyleProps>`
    align-items: center;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    width: 100%;

    background-color: ${(p) => p.backgroundColor};
    height: ${(p) => p.height};

    h1 {
        margin: 0 auto;
        max-width: 90%;
        text-align: center;
    }

    p {
        margin: 20px auto;
        max-width: 90%;
        text-align: center;
    }
`;

export const DivStyled = styled.div`
    margin: 20px auto;
    max-width: 90%;
    width: fit-content;
`;
