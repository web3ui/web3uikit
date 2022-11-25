import styled, { css } from 'styled-components';
import { resetCSS, fonts, color, breakpoints } from '@web3uikit/styles';
import { StepperProps } from './types';

type THeaderStyleProps = Pick<
    StepperProps,
    'headerWidth' | 'orientation' | 'contentPadding'
>;

const DivStyledContent = styled.div`
    ${resetCSS};
    ${fonts.text};
    display: inline-block;
    margin: 20px 20px 32px;
    p,
    i {
        ${resetCSS};
        ${fonts.text};
    }

    :hover {
        display: inline-block;
        height: auto;
    }
`;

const NavStyled = styled.nav<Pick<StepperProps, 'orientation'>>`
    display: flex;
    justify-content: center;
    margin-top: 12px;
    button {
        margin: 0 12px;
    }
    ${(props) =>
        props.orientation === 'vertical' && 'justify-content: space-between;'}
`;

const FooterStyled = styled.footer<Pick<StepperProps, 'orientation'>>`
    ${(props) => props.orientation === 'vertical' && 'width: 100%;'}
`;

const DivStyledHelper = styled.div`
    margin-top: 26px;
    text-align: center;

    p,
    i,
    span {
        ${fonts.text};
        font-size: 12px;
    }

    img,
    button {
        margin: 0 auto;
    }
`;

const getParsedWidth = (width?: number) => {
    if (!width) return 50;
    else if (width >= 100) return 50;
    else return width;
};

const SectionStyled = styled.section<
    Pick<StepperProps, 'orientation' | 'stepperWidth'>
>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    ${(props) =>
        props.orientation === 'vertical'
            ? css`
                  display: grid;
                  grid-template-columns: ${getParsedWidth(props.stepperWidth)}% ${100 -
                          getParsedWidth(props.stepperWidth)}%;
                  @media screen and (max-width: ${breakpoints.md}) {
                      grid-template-columns: 10% 85%;
                  }
              `
            : css`
                  height: 100%;
              `}
`;

const HeaderStyled = styled.header<THeaderStyleProps>`
    ${(p) => p.headerWidth && `max-width: ${p.headerWidth}px`};
    width: 100%;
`;

const DivStyled = styled.div<
    Pick<StepperProps, 'orientation' | 'contentPadding'>
>`
    text-align: center;

    & > div[role='spinner'] {
        margin: 30px auto;
    }
    ${(props) =>
        props.contentPadding &&
        css`
            padding: ${props.contentPadding};
            @media screen and (max-width: ${breakpoints.md}) {
                padding: 10px;
            }
        `};
    ${(props) =>
        props.orientation === 'vertical' &&
        css`
            border-left: 1px solid ${color.navy20};
        `}
`;

export default {
    DivStyled,
    DivStyledContent,
    DivStyledHelper,
    FooterStyled,
    HeaderStyled,
    NavStyled,
    SectionStyled,
};
