import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import { StepNumberProps, StepperProps } from './types';

type TStyleProps = Pick<
    StepNumberProps,
    'activeStep' | 'thisStep' | 'stepTotal'
>;

type THeaderStyleProps = Pick<StepperProps, 'headerWidth'>;

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    position: relative;
`;

export const OrderedListStyled = styled.ol`
    ${resetCSS};
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 40px;
    position: relative;
    text-align: center;
    width: 100%;
`;

export const ListItemStyled = styled.li<TStyleProps>`
    ${resetCSS};
    ${fonts.text};
    align-items: center;
    border-radius: 50%;
    border: 2px solid ${color.green};
    color: ${color.white};
    display: flex;
    font-size: 24px;
    height: 32px;
    justify-content: center;
    line-height: 0;
    position: relative;
    width: 32px;

    background-color: ${(p) =>
        p.activeStep <= p.thisStep ? color.green : color.white};
    opacity: ${(p) => (p.activeStep < p.thisStep ? '50%' : '100%')};
`;

export const SpanStyled = styled.span<TStyleProps>`
    background-color: rgba(46, 125, 175, 0.3);
    border: none;
    display: block;
    height: 2px;

    &:last-of-type {
        display: none;
    }

    width: calc(
        (100% / ${(p) => p.stepTotal - 1}) -
            (${(p) => (p.stepTotal === 2 ? '90px' : '64px')})
    );
`;

export const DivStyled = styled.div`
    text-align: center;

    div[role='spinner'] {
        margin: 30px auto;
    }
`;

export const DivStyledContent = styled.div`
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

export const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    margin-top: 12px;

    button {
        margin: 0 12px;
    }
`;

export const FooterStyled = styled.footer``;

export const DivStyledHelper = styled.div`
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

export const HeaderStyled = styled.header<THeaderStyleProps>`
    ${(p) => p.headerWidth && `max-width: ${p.headerWidth}px`};
    width: 100%;
`;
