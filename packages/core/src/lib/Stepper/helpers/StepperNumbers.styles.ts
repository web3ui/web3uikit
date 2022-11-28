import { breakpoints, color, fonts, resetCSS } from '@web3uikit/styles';
import styled, { css } from 'styled-components';
import { StepNumberProps, StepperProps } from '../types';

type TStyleProps = Pick<
    StepNumberProps,
    'activeStep' | 'thisStep' | 'stepTotal' | 'orientation'
>;

const OrderedListStyled = styled.ol<Pick<StepperProps, 'orientation'>>`
    ${resetCSS};
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 24px;
    position: relative;
    text-align: center;
    width: 100%;
    ${(props) =>
        props.orientation === 'vertical' &&
        css`
            align-items: baseline;
            flex-direction: column;
        `}
`;

const ListItemStyled = styled.li<TStyleProps>`
    ${resetCSS};
    ${fonts.text};
    align-items: center;
    border-radius: 50%;
    border: 2px solid ${color.mint40};
    color: ${color.white};
    display: flex;
    font-size: 24px;
    height: 32px;
    justify-content: center;
    line-height: 0;
    position: relative;
    width: 32px;

    background-color: ${(p) =>
        p.activeStep <= p.thisStep ? color.mint40 : color.white};
    opacity: ${(p) => (p.activeStep < p.thisStep ? '50%' : '100%')};
`;

const SpanStyled = styled.span<TStyleProps>`
    background-color: rgba(46, 125, 175, 0.3);
    border: none;
    display: block;
    height: 2px;

    width: calc(
        (100% / ${(p) => p.stepTotal - 1}) -
            (${(p) => (p.stepTotal === 2 ? '90px' : '64px')})
    );

    ${(props) =>
        props.orientation === 'horizontal'
            ? css`
                  &:last-of-type {
                      display: none;
                  }
              `
            : css`
                  width: 4px;
                  height: 4px;
                  margin: 16px auto;
                  background-color: ${color.mint50};
                  border-radius: 100%;
              `}
`;

const DivStyledOLContainer = styled.div`
    height: 100%;
    margin: 0 auto;
    width: max-content;
    .step-title {
        padding-top: 4px;
        @media screen and (max-width: ${breakpoints.md}) {
            display: none;
        }
    }
`;

const SpanStyledStepContainer = styled.span`
    display: flex;
    justify-content: center;
    gap: 12px;
`;

const SpanStyledStep = styled.div`
    display: flex;
    flex-direction: column;
`;

export default {
    DivStyledOLContainer,
    ListItemStyled,
    OrderedListStyled,
    SpanStyledStepContainer,
    SpanStyled,
    SpanStyledStep,
};
