import styled from 'styled-components';
import { RadiosProps } from '.';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { TRadioLayouts } from './types';

type TStyleProps = Pick<TRadioLayouts, 'isCreditCardMode'>;

const FieldsetStyled = styled.fieldset`
    ${resetCSS};
    display: flex;
    flex-direction: 'column';
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;
`;

const LegendStyled = styled.legend`
    ${resetCSS};
    ${fonts.heading}
    ${fonts.h3}
    color: ${color.blueGray50};
    display: block;
    margin-bottom: 4px;
`;

const DivStyled = styled.div<
    Pick<RadiosProps, 'disabled' | 'isRow'> & { isSmall?: boolean }
>`
    opacity: ${(props) => props.disabled && 0.5};
    position: relative;
    ${(p) => p.isSmall && 'width: 100%'};
    max-width: ${(p) => (p.isRow && p.isSmall ? '584px' : '100%')};
`;

const DivWrapperStyled = styled.div<Pick<RadiosProps, 'isRow'>>`
    align-items: ${({ isRow }) => (isRow ? 'center' : 'flex-start')};
    flex-direction: ${(p) => (p.isRow ? 'row' : 'column')};
    gap: 12px;
    display: flex;
    flex-wrap: wrap;
`;

const LabelStyled = styled.label<TStyleProps & { isSmall: boolean }>`
    ${resetCSS};
    ${fonts.text}
    padding-left: ${(p) => (p.isCreditCardMode ? '0' : '28px')};
    align-content: center;
    color: ${color.blueGray50};
    display: flex;
    line-height: 20px;
    position: relative;

    &:before {
        left: ${(p) => (p.isCreditCardMode ? '20px' : '0')};
        top: ${(p) =>
            p.isCreditCardMode
                ? p.isSmall
                    ? 'calc(50% - 9px)'
                    : '20px'
                : '0'};
        background-color: ${color.aero10};
        border-radius: 50%;
        border: 1px solid ${color.navy30};
        content: '';
        display: block;
        height: 18px;
        position: absolute;
        transition: all 0.1s ease-out;
        width: 18px;
    }

    &:after {
        left: ${(p) => (p.isCreditCardMode ? '26px' : '6px')};
        top: ${(p) =>
            p.isCreditCardMode
                ? p.isSmall
                    ? 'calc(50% - 3px)'
                    : '26px'
                : '6px'};
        background-color: ${color.white};
        border-radius: 50%;
        content: '';
        display: block;
        height: 8px;
        opacity: 0;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 8px;
    }

    &:hover {
        &:before {
            filter: brightness(95%);
        }
    }

    &:active {
        &:before {
            filter: brightness(90%);
        }
    }
`;

const RadioButtonStyled = styled.input`
    position: absolute;
    opacity: 0;
    &:checked {
        & + label {
            &:before {
                background-color: ${color.mint40};
                border-color: ${color.mint20};
            }
            &:after {
                opacity: 1;
            }
        }
    }
    &:focus {
        & + label {
            box-shadow: 0 0 4px ${color.navy30};
            border-radius: 20px;
        }
    }
`;

export default {
    DivStyled,
    DivWrapperStyled,
    FieldsetStyled,
    LabelStyled,
    LegendStyled,
    RadioButtonStyled,
};
