import styled from 'styled-components';
import { HeroProps } from './types';

// styles
type TStyleProps = Pick<
    HeroProps,
    | 'align'
    | 'backgroundColor'
    | 'backgroundURL'
    | 'height'
    | 'linearGradient'
    | 'rounded'
    | 'padding'
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
    
    align-items: ${({ align = 'center' }) =>
        Position?.[align] || Position.center};
    border-radius: ${(p) => p.rounded || '0px'};
    background-color: ${(p) => p.backgroundColor};
    background-image: ${({ backgroundURL, linearGradient = '' }) =>
        backgroundURL
        ? `${linearGradient && linearGradient + ', '} url(${backgroundURL})`
        : linearGradient};
    height: ${({ height }) => height || '80vh'};
    max-height: ${({ height }) => height || '80vh'};
    padding: ${({ padding }) => padding || '20px'} 0;

    h1 {
        padding: 0px 40px;
        z-index: 1;
    }

    > span {
        padding: 20px 40px 0px;
        z-index: 1;
    }
    * {
        z-index: 0;
    }

    @media (max-width: 600px) {
        align-items: center;
        height: fit-content;
        max-height: fit-content;
        text-align: center;

        h1 {
            font-size: 18px;
            line-height: unset;
            padding: unset;
            text-align: center;
        }

        > span {
            font-size: 14px;
            line-height: unset;
            
            padding: 20px 40px 0px;
            z-index: 1;
        }
    }
`;

export const DivStyled = styled.div`
    padding: 20px 40px 0px;
`;

export const ImageStyled = styled.img`
    width: 126.85px;
    height: 176.61px;
    max-height: calc(100% - 44px);
    position: absolute;
    right: 84px;
    top: 22px;
    bottom: 22px;
`;
