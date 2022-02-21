import styled from 'styled-components';
import { HeroProps } from './types';

// styles
type TStyleProps = Pick<HeroProps, 'height' | 'textColor'>;

export const SectionStyled = styled.section<TStyleProps>`
    align-items: center;
    background-color: #444444;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    width: 100%;

    height: ${(p) => p.height};

    h1 {
        margin: 0 auto;
        max-width: 90%;
        text-align: center;

        color: ${(p) => p.textColor};
    }

    p {
        margin: 20px auto;
        max-width: 90%;
        text-align: center;
        color: ${(p) => p.textColor};
    }
`;

export const DivStyled = styled.div`
    margin: 20px auto;
    max-width: 90%;
    width: fit-content;
`;
