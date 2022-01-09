import React, { useState } from 'react';
import InputStyles, { InputIcon } from './Input.styles';
import { InputProps } from './types';

const { InputStyled, LabelStyled, StyledWrapper } = InputStyles;

const Input: React.FC<InputProps> = ({
    autoComplete = true,
    id = String(Date.now()),
    label,
    name,
    onChange,
    placeholder = '',
    state,
    type = 'text',
    value = '',
    prefix,
    suffix,
}:
    InputProps) => {
    const [currentValue, setCurrentValue] = useState(value);

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange(event);
    };

    return (
        <StyledWrapper
            state={state}
            className={currentValue.length > 0 ? 'filled' : 'empty'}
            data-testid="test-div"
        >
            {prefix && <InputIcon type="prefix" className="input_icon">{prefix}</InputIcon>}
            {suffix && <InputIcon type="suffix" className="input_icon">{suffix}</InputIcon>}
            <InputStyled
                autoComplete={`${autoComplete}`}
                data-testid="test-input"
                id={id}
                name={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    valueChanged(event)
                }
                placeholder={placeholder}
                type={type}
                value={currentValue}
            />
            {label && (
                <LabelStyled data-testid="test-label" htmlFor={id}>
                    {label}
                </LabelStyled>
            )}
        </StyledWrapper>
    );
};

export default Input;
