import React, { useState, useEffect } from 'react';
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
    customize,
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
    size,
    slots,
    state = disabled ? 'disabled' : undefined,
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

    useEffect(() => {
        setCurrentState(state);
    }, [state]);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

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

    const onToggleShowPassword = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
    };

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.currentTarget.value);
        onChange && onChange(event);
    };

    const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
        validate(event);
        setInputInFocus(false);
        onBlur && onBlur(event);
    };

    const onFocusEvent = (event: React.FocusEvent<HTMLInputElement>) => {
        setInputInFocus(true);
        onFocus && onFocus(event);
    };

    return (
        <>
            <DivStyled
                customize={customize}
                className={`${
                    Boolean(currentValue || openByDefault) ? 'filled' : 'blank'
                } ${Boolean(inputInFocus) ? 'focus' : 'blur'}`}
                data-testid="test-input"
                disabled={disabled}
                setLabelMargin={setLabelMargin}
                size={size}
                state={currentState}
                width={width}
                {...props}
            >
                {label && (
                    <LabelBase
                        color={customize?.color}
                        typographyFontWeight={customize?.fontWeight}
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
                        maxLength={validation?.maxLength || props.maxLength}
                        minLength={validation?.minLength || props.minLength}
                        defaultValue={value || props.defaultValue}
                        disabled={disabled || state === 'disabled'}
                        id={id || 'web3uiKit-input'}
                        max={validation?.max || props.max}
                        min={validation?.min || props.min}
                        onBlur={(e) => onBlurEvent(e)}
                        onChange={(e) => onChangeEvent(e)}
                        onFocus={(e) => onFocusEvent(e)}
                        placeholder={placeholder}
                        pattern={validation?.pattern || props.pattern}
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
