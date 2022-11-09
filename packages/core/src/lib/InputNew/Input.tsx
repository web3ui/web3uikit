import React, { useState } from 'react';
import { IInputProps, TResponse } from './types';
import styles from './Input.styles';
import { inputValidation } from './InputValidation';
import InputBase from './atoms/InputBase';
import LabelBase from './atoms/LabelBase';
import VisibilityToggle from './atoms/VisibilityToggle';

const {
    DivStyled,
    DivStyledInner,
    StrongStyledDescription,
    StrongStyledFeedback,
} = styles;

const Input: React.FC<IInputProps> = ({
    autoComplete,
    autoFocus,
    customInput,
    description,
    disabled,
    errorMessage = 'Sorry this is not valid',
    id,
    label,
    onBlur,
    onChange,
    onFocus,
    openByDefault,
    placeholder,
    setLabelMargin,
    state = disabled ? 'disabled' : undefined,
    slots,
    type = 'text',
    validation,
    value,
    width,
    ...props
}) => {
    const [currentState, setCurrentState] = useState(state);
    const [currentValue, setCurrentValue] = useState(value);
    const [inputInFocus, setInputInFocus] = useState(autoFocus);
    const [inputType, setInputType] = useState(type);
    const [invalidMessage, setInvalidMessage] = useState(errorMessage);

    const hasValidation = Boolean(validation);

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

    const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
        validate(event);
        setInputInFocus(false);
    };

    const onFocusEvent = (event: React.FocusEvent<HTMLInputElement>) => {
        setInputInFocus(true);
    };

    return (
        <>
            <DivStyled
                className={`${
                    Boolean(currentValue || openByDefault) ? 'filled' : 'blank'
                } ${Boolean(inputInFocus) ? 'focus' : 'blur'}`}
                data-testid="test-input"
                disabled={disabled}
                setLabelMargin={setLabelMargin}
                state={currentState}
                width={width}
                {...props}
            >
                {label && (
                    <LabelBase
                        id={id || 'web3uiKit-input'}
                        testid="test-input-label"
                        text={label}
                    />
                )}

                <DivStyledInner>
                    {slots &&
                        slots.slotBefore?.map((slotItem) => (
                            <span className="slot slot-before">{slotItem}</span>
                        ))}

                    {customInput && customInput}

                    <InputBase
                        autoComplete={autoComplete}
                        autoFocus={autoFocus}
                        characterMaxLength={
                            validation?.characterMaxLength ||
                            props.characterMaxLength
                        }
                        characterMinLength={
                            validation?.characterMinLength ||
                            props.characterMinLength
                        }
                        defaultValue={value || props.defaultValue}
                        disabled={disabled || state === 'disabled'}
                        id={id || 'web3uiKit-input'}
                        numberMax={validation?.numberMax || props.numberMax}
                        numberMin={validation?.numberMin || props.numberMin}
                        onBlur={(e) => onBlurEvent(e)}
                        onChange={(e) => onValueChange(e)}
                        onFocus={(e) => onFocusEvent(e)}
                        placeholder={placeholder}
                        regExp={validation?.regExp || props.regExp}
                        required={validation?.required || props.required}
                        testid="test-input-input"
                        type={inputType}
                    />

                    {slots &&
                        slots.slotAfter?.map((slotItem) => (
                            <span className="slot slot-after">{slotItem}</span>
                        ))}

                    {type === 'password' && (
                        <span className="slot slot-after">
                            <VisibilityToggle
                                isInputHidden={Boolean(
                                    inputType === 'password',
                                )}
                                onClick={() => onToggleShowPassword()}
                            />
                        </span>
                    )}
                </DivStyledInner>

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
