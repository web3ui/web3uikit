import React, { useState } from 'react';
import InputStyles from './Input.styles';
import { InputProps } from './types';

const { InputStyled, LabelStyled, StyledDiv } = InputStyles;

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
}: // prefix,
// suffix,
InputProps) => {
    const [currentValue, setCurrentValue] = useState(value);

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange(event);
    };

    return (
        <StyledDiv
            state={state}
            className={currentValue.length > 0 ? 'filled' : 'empty'}
            data-testid="test-div"
        >
            {/* {prefix && <InputPrefix>{prefix}</InputPrefix>} */}
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
        </StyledDiv>
    );
};

export default Input;
