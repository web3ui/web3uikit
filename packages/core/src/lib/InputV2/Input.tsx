import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { TInputProps, TInputState } from './types';
import styles from './Input.styles';
import { validate, getType, initializeState } from './helpers/utils';
import {
    labelPrefixPresent,
    RenderLeftIcon,
    RenderRightIcon,
} from './helpers/icons';

const {
    DivWrapperStyled,
    DivStyledText,
    ErrorStyledDiv,
    InputStyled,
    LabelStyled,
    StrongStyled,
} = styles;

function InputBase(
    {
        customInput,
        size = 'regular',
        leftIcon,
        rightIcon,
        label,
        validation,
        description,
        errorMessage = 'Sorry this is not valid',
        width,
        type = 'text',
        allowCopy = false,
        allowClear = false,
        ...restProps
    }: TInputProps,
    ref: React.Ref<HTMLInputElement>,
) {
    const {
        id,
        value,
        autoFocus,
        onChange,
        onBlur,
        onFocus,
        max,
        min,
        formatter,
        minLength,
        maxLength,
        pattern,
        placeholder,
        required,
        disabled,
        ...otherProps
    } = restProps;
    const formattedTextRef = useRef<HTMLDivElement>(
        null,
    ) as MutableRefObject<HTMLDivElement>;
    const [currentValue, setCurrentValue] = useState(value);
    const [currentState, setCurrentState] = useState<TInputState>(
        initializeState(disabled, value),
    );
    const [currentType, setCurrentType] = useState(getType(type));
    const [invalidMessage, setInvalidMessage] = useState(errorMessage);
    const [isEditMode, setIsEditMode] = useState(Boolean(autoFocus));

    // sync internal states with props
    useEffect(() => setCurrentType(getType(type)), [type]);
    useEffect(() => setCurrentValue(value), [value]);
    useEffect(
        () => setCurrentState((prev) => (disabled ? 'disabled' : prev)),
        [disabled],
    );
    useEffect(() => setInvalidMessage(errorMessage), [errorMessage]);
    // sync end
    useEffect(() => {
        if (formatter && isEditMode) {
            (
                formattedTextRef.current?.nextElementSibling as HTMLInputElement
            )?.focus();
        }
    }, [formattedTextRef, formatter, isEditMode]);

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange?.(event);
    };

    const handleBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
        validate(
            currentState,
            currentValue,
            errorMessage,
            event,
            setCurrentState,
            setInvalidMessage,
            type,
            validation,
        );
        if (Boolean(currentValue && currentValue.toString().length > 0)) {
            setIsEditMode(false);
        }
        onBlur?.(event);
    };

    const handleFocusEvent = (event: React.FocusEvent<HTMLInputElement>) => {
        if (currentState === 'disabled') event.preventDefault();
        if (currentState === 'error') {
            setCurrentState(initializeState(disabled, currentValue));
        }
        onFocus?.(event);
    };

    return (
        <>
            <DivWrapperStyled
                state={currentState}
                size={size}
                value={currentValue || ''}
                label={label?.text || ''}
                onClick={() => {
                    setIsEditMode(true);
                }}
            >
                {
                    <RenderLeftIcon
                        type={type}
                        leftIcon={leftIcon}
                        value={currentValue}
                        size={size}
                        disabled={Boolean(disabled)}
                    />
                }
                {formatter !== undefined && (
                    <DivStyledText
                        style={{ display: isEditMode ? 'none' : 'block' }}
                        ref={formattedTextRef}
                    >
                        {formatter(currentValue as string)}
                    </DivStyledText>
                )}
                <InputStyled
                    autoFocus={autoFocus}
                    disabled={currentState === 'disabled'}
                    max={
                        currentType === 'number'
                            ? validation?.numberMax || max
                            : undefined
                    }
                    maxLength={validation?.characterMaxLength || maxLength}
                    min={
                        currentType === 'number'
                            ? validation?.numberMin || min
                            : undefined
                    }
                    minLength={validation?.characterMinLength || minLength}
                    ref={ref}
                    type={currentType}
                    pattern={validation?.regExp || pattern}
                    placeholder={placeholder || ' '}
                    value={currentValue}
                    onFocus={(event) => handleFocusEvent(event)}
                    required={validation?.required || required}
                    onChange={(event) => handleValueChange(event)}
                    onBlur={(event) => handleBlurEvent(event)}
                    hidden={formatter !== undefined && !isEditMode}
                    {...otherProps}
                />
                {label?.text && (
                    <LabelStyled
                        data-testid="test-label"
                        htmlFor={id}
                        hasPrefix={labelPrefixPresent(type, leftIcon)}
                        labelBgColor={label?.bgColor}
                    >
                        {label.text}
                        {validation?.required && '*'}
                    </LabelStyled>
                )}
                {
                    <RenderRightIcon
                        state={currentState}
                        setState={setCurrentState}
                        type={type}
                        internalType={currentType}
                        setInternalType={setCurrentType}
                        rightIcon={rightIcon}
                        value={currentValue}
                        setValue={setCurrentValue}
                        allowCopy={allowCopy}
                        allowClear={allowClear}
                        disabled={disabled}
                    />
                }
                {description && !(currentState === 'error') && (
                    <StrongStyled data-testid="test-input-info">
                        {description}
                    </StrongStyled>
                )}
            </DivWrapperStyled>
            {currentState === 'error' && (
                <ErrorStyledDiv data-testid="test-invalid-feedback">
                    {invalidMessage}
                </ErrorStyledDiv>
            )}
        </>
    );
}

const Input = React.forwardRef(InputBase);

export default Input;
