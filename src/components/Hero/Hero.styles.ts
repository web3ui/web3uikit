import styled from 'styled-components';
import { HeroProps } from './types';

// styles
type TStyleProps = Pick<
    HeroProps,
    'align' |
    'backgroundColor' |
    'backgroundURL' |
    'height' | 
    'linearGradient' |
    'rounded'
>;

enum Position {
    'left' = 'flex-start',
    'right' = 'flex-end',
    'center' = 'center',
}

export const SectionStyled = styled.section<TStyleProps>`
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;

    align-items: ${({ align = 'center' }) => Position?.[align] || Position.center};
    border-radius: ${(p) => p.rounded || '0px'};
    background-color: ${(p) => p.backgroundColor};
    background-image: ${({ backgroundURL, linearGradient = '' }) => backgroundURL ? `${linearGradient && linearGradient + ', '} url(${backgroundURL})` : linearGradient };
    height: ${({ height }) => height || '80vh'};
    max-height: ${({ height }) => height || '80vh'};

    h1 {
        padding: 0px 40px;
    }

    > span {
        padding: 20px 40px 0px;
    }
`;

export const DivStyled = styled.div`
    padding: 20px 40px 0px;
`;
