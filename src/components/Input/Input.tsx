import React, { useState } from 'react';
import InputStyles from './Input.styles';
import { InputProps } from './types';

const { InputStyled, LabelStyled, InputWrapper, InputIcon, CopyInputIcon } = InputStyles;

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
        <InputWrapper
            state={state}
            className={`input input_${currentValue.length > 0 ? 'filled' : 'empty'}`}
            data-testid="test-div"
        >
            {prefix && <InputIcon type="prefix" className="input_prefix">{prefix}</InputIcon>}
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
            {suffix && <CopyInputIcon className="input_copy">{suffix}</CopyInputIcon>}
        </InputWrapper>
    );
};

export default Input;
