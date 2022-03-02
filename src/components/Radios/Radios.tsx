import React, { useState } from 'react';
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
    title,
    validation,
    setWhichIsChecked,
}) => {
    const formattedID = id.replace(/\s/g, '-');
    const [whichIsChecked, setChecked] = useState<number>(
        setWhichIsChecked || items.length,
    );
    return (
        <FieldsetStyled id={`${formattedID}`} data-testid="test-fieldset">
            {title && (
                <LegendStyled data-testid="test-legend">{title}</LegendStyled>
            )}

            {items.map((value, i) => (
                <Fragment key={`${formattedID}_${i}`}>
                    <RadioButtonStyled
                        checked={i === whichIsChecked && checked}
                        data-testid={`test-input-${i}`}
                        id={`${formattedID}_${i}`}
                        name={`${formattedID}_group`}
                        onChange={(e) => {
                            onChange(e);
                            setChecked(i);
                        }}
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
