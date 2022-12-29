import { breakpoints, color, resetCSS } from '@web3uikit/styles';
import styled, { css } from 'styled-components';
import { IHeroProps, TAlignValues } from './types';

// styles
type TStyleProps = Pick<
    IHeroProps,
    | 'align'
    | 'backgroundColor'
    | 'backgroundURL'
    | 'height'
    | 'linearGradient'
    | 'rounded'
    | 'padding'
    | 'textColor'
>;

const setImageAlign = (align: TAlignValues) => {
    switch (align) {
        case 'center':
            return css`
                margin: auto;
            `;
        case 'left':
            return css`
                margin-right: auto;
            `;
        case 'right':
            return css`
                margin-left: auto;
            `;
    }
};

const SectionStyled = styled.section<TStyleProps>`
    ${resetCSS};
    background-color: ${(p) => p.backgroundColor};
    background-image: ${({ backgroundURL, linearGradient = '' }) =>
        backgroundURL
            ? `${linearGradient && linearGradient + ', '} url(${backgroundURL})`
            : linearGradient};
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: ${(p) => p.rounded || '0px'};
    display: flex;
    justify-content: space-between;
    height: ${({ height }) => height || '100%'};
    max-width: 100%;
    overflow: hidden;
    color: ${(p) => p.textColor || color.white};
    @media (max-width: ${breakpoints.sm}) {
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 20px;
        height: fit-content;
    }
`;

const LeftContainerDiv = styled.div<TStyleProps>`
    display: flex;
    flex-grow: 1;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding: ${(p) => p.padding || '20px'};
    @media (max-width: ${breakpoints.sm}) {
        padding: 20px;
        width: 100%;
        align-items: center;
    }
`;

const RightContainerDiv = styled.div`
    display: flex;
    flex-grow: 1;
    width: 50%;
    @media (max-width: ${breakpoints.sm}) {
        width: 100%;
    }
`;

const ImageStyled = styled.img<TStyleProps>`
    block-size: auto;
    height: 100%;
    max-inline-size: 100%;
    object-fit: contain;
    ${(p) => setImageAlign(p.align || 'center')};
    @media (max-width: ${breakpoints.sm}) {
        margin: auto;
    }
`;

export default {
    ImageStyled,
    LeftContainerDiv,
    RightContainerDiv,
    SectionStyled,
};
