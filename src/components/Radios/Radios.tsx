import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import styles from './Radios.styles';
import { RadiosProps } from '.';

const { fieldsetStyles, legendStyles, labelStyles, inputStyles } = styles;

const FieldsetStyled = styled.fieldset`
    ${fieldsetStyles}
`;
const LegendStyled = styled.legend`
    ${legendStyles}
`;
const LabelStyled = styled.label`
    ${labelStyles}
`;
const RadioButtonStyled = styled.input`
    ${inputStyles}
`;

const Radios: React.FC<RadiosProps> = ({
    checked,
    id,
    items,
    onChange,
    setWhichIsChecked = 0,
    title,
    validation,
}) => {
    const formattedID = id.replace(/\s/g, '-');

    return (
        <FieldsetStyled id={`${formattedID}`} data-testid="test-fieldset">
            {title && (
                <LegendStyled data-testid="test-legend">{title}</LegendStyled>
            )}

            {items.map((value, i) => (
                <Fragment key={`${formattedID}_${i}`}>
                    <RadioButtonStyled
                        checked={i === setWhichIsChecked && checked}
                        data-testid={`test-input-${i}`}
                        id={`${formattedID}_${i}`}
                        name={`${formattedID}_group`}
                        onChange={onChange}
                        required={validation?.required}
                        type="radio"
                        value={value}
                    />
                    <LabelStyled
                        data-testid={`test-label-${i}`}
                        htmlFor={`${formattedID}_${i}`}
                    >
                        {value}
                    </LabelStyled>
                </Fragment>
            ))}
        </FieldsetStyled>
    );
};

export default Radios;
