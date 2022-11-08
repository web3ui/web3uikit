import React, { useState } from 'react';
import { IInputProps, TResponse } from './types';
import styles from './Input.styles';
import { inputValidation } from './InputValidation';
import InputBase from './atoms/InputBase';
import LabelBase from './atoms/LabelBase';
import VisibilityToggle from './atoms/VisibilityToggle';
import PrefixIcon from './atoms/PrefixIcon';

const { DivStyled, StrongStyledDescription, StrongStyledFeedback } = styles;

const Input: React.FC<IInputProps> = ({
    autoComplete,
    autoFocus,
    customInput,
    description,
    disabled,
    errorMessage = 'Sorry this is not valid',
    iconPosition,
    id,
    label,
    onBlur,
    onChange,
    placeholder,
    prefixIcon,
    state = disabled ? 'disabled' : undefined,
    type = 'text',
    validation,
    value,
    width,
    ...props
}) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [currentState, setCurrentState] = useState(state);
    const [invalidMessage, setInvalidMessage] = useState(errorMessage);
    const [inputType, setInputType] = useState(type);

    const hasValidation = Boolean(validation);
    const isPasswordWithEndIcon = Boolean(
        prefixIcon && iconPosition === 'end' && type === 'password',
    );

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.currentTarget.value);
        onChange && onChange(event);
    };

    const onToggleShowPassword = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
    };

    const validate = (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur && onBlur(event);
        if (!hasValidation) return;
        const validationResult: TResponse = inputValidation(
            event,
            errorMessage,
            currentState,
            validation,
        );

        setInvalidMessage(validationResult.message || errorMessage);
        setCurrentState(validationResult.result || 'confirmed');
        if (validationResult.result === 'confirmed') {
            setTimeout(() => setCurrentState(undefined), 2000);
        }
    };

    return (
        <>
            <DivStyled
                className={Boolean(currentValue) ? 'filled' : 'blank'}
                data-testid="test-input"
                disabled={disabled}
                {...props}
            >
                {prefixIcon && (
                    <PrefixIcon
                        position={iconPosition || 'front'}
                        icon={prefixIcon}
                        isPasswordWithEndIcon={isPasswordWithEndIcon}
                    />
                )}

                {customInput && customInput}

                <InputBase
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    defaultValue={value}
                    id={id || 'web3uiKit-input'}
                    max={validation?.numberMax}
                    maxLength={validation?.characterMaxLength}
                    min={validation?.numberMin}
                    minLength={validation?.characterMinLength}
                    onBlur={(e) => validate(e)}
                    onChange={(e) => onValueChange(e)}
                    placeholder={placeholder}
                    regExp={validation?.regExp}
                    required={validation?.required}
                    state={currentState}
                    testid="test-input-input"
                    type={inputType}
                    width={width}
                />

                <LabelBase
                    id={id || 'web3uiKit-input'}
                    position="absolute"
                    state={currentState}
                    testid="test-input-label"
                    text={label}
                />

                {type === 'password' && (
                    <VisibilityToggle
                        isInputHidden={Boolean(inputType === 'password')}
                        onClick={() => onToggleShowPassword()}
                    />
                )}

                {currentState === 'error' && (
                    <StrongStyledFeedback data-testid="test-input-feedback">
                        {invalidMessage}
                    </StrongStyledFeedback>
                )}
            </DivStyled>

            {description && (
                <StrongStyledDescription data-testid="test-input-feedback">
                    {description}
                </StrongStyledDescription>
            )}
        </>
    );
};

export default Input;
