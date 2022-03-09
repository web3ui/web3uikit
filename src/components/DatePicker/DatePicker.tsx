import React, { useState, useEffect } from 'react';
import { Icon, iconTypes } from '../Icon';
import { SpanStyled } from './DatePicker.styles';
import {
    DivWrapperStyled,
    InputStyled,
    LabelStyled,
    StrongStyled,
} from '../Input/Input.styles';
import color from '../../styles/colors';
import { DatePickerProps } from './types';

const DatePicker: React.FC<DatePickerProps> = ({
    disabled = false,
    id,
    label,
    name = 'Select a date',
    onChange,
    state = disabled ? 'disabled' : undefined,
    type = 'date',
    validation,
    value = new Date().toISOString().substring(0, type === 'date' ? 10 : 7),
}) => {
    const [current, setCurrent] = useState(value);
    const [currentState, setCurrentState] = useState(state);
    const [invalidMessage, setInvalidMessage] = useState('');

    useEffect(() => setCurrentState(state), [state]);

    const dateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrent(event?.target?.value);
        onChange &&
            event?.target?.valueAsDate &&
            onChange({
                date: event?.target?.valueAsDate,
                event: event,
            });
    };

    const hasValidation = () =>
        Boolean(
            validation?.required ||
                validation?.max ||
                validation?.min ||
                validation?.required,
        );

    const validate = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!hasValidation()) return;

        // check for HTML validation
        if (!event?.target.checkValidity()) {
            setInvalidMessage(event?.target.validationMessage);
            setCurrentState('error');
            return;
        }

        // if all pass but the Input is in error state
        if (currentState === 'error') {
            setCurrentState('confirmed');
            setTimeout(() => setCurrentState('initial'), 3000);
        }
    };

    return (
        <DivWrapperStyled
            className={label && 'input_filled'}
            data-testid="test-date-picker"
            state={currentState}
        >
            <InputStyled
                data-testid="date-picker_input"
                disabled={currentState == 'disabled'}
                id={id}
                max={validation?.max}
                min={validation?.min}
                name={name}
                onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                    validate(event)
                }
                onChange={dateChanged}
                required={validation?.required}
                type={type}
                value={current}
            />

            {label && (
                <LabelStyled
                    data-testid="date-picker_label"
                    hasPrefix={false}
                    htmlFor={id}
                    labelBgColor="white"
                >
                    {label}
                </LabelStyled>
            )}

            <SpanStyled data-testid="date-picker_icon">
                <Icon
                    svg={iconTypes.calendar}
                    fill={color.greyDark}
                    size={24}
                />
            </SpanStyled>

            {currentState === 'error' && (
                <StrongStyled data-testid="date-picker_feedback">
                    {invalidMessage}
                </StrongStyled>
            )}
        </DivWrapperStyled>
    );
};

export default DatePicker;
