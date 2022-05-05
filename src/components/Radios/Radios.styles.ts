import styled from 'styled-components';
import { RadiosProps } from '.';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
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
    color: ${color.grey};
    display: block;
    margin-bottom: 4px;
`;

const DivStyled = styled.div<Pick<RadiosProps, 'disabled'>>`
    opacity: ${(props) => props.disabled && 0.5};
    position: relative;
`;

const DivWrapperStyled = styled.div<Pick<RadiosProps, 'isRow'>>`
    align-items: ${({ isRow }) => isRow ? 'center' : 'flex-start'};
    flex-direction: ${(p) => (p.isRow ? 'row' : 'column')};
    gap: ${(p) => p.isRow && '12px'};
    display: flex;
    flex-wrap: wrap;
`;

const LabelStyled = styled.label<TStyleProps>`
    ${resetCSS};
    ${fonts.heading}
    ${fonts.text}
    padding-left: ${(p) => (p.isCreditCardMode ? '0' : '28px')};
    align-content: center;
    color: ${color.greyDark};
    display: flex;
    line-height: 20px;
    margin-bottom: 12px;
    position: relative;
    width: fit-content;

    &:before {
        left: ${(p) => (p.isCreditCardMode ? '20px' : '0')};
        top: ${(p) => (p.isCreditCardMode ? '20px' : '0')};
        background-color: ${color.blueLight};
        border-radius: 50%;
        border: 1px solid ${color.blueSky};
        content: '';
        display: block;
        height: 18px;
        position: absolute;
        transition: all 0.1s ease-out;
        width: 18px;
    }

    &:after {
        left: ${(p) => (p.isCreditCardMode ? '26px' : '6px')};
        top: ${(p) => (p.isCreditCardMode ? '26px' : '6px')};
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

    &:checked {
        & + label {
            &:before {
                background-color: ${color.green};
                border-color: ${color.greenLight};
            }
            &:after {
                opacity: 1;
            }
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
