import React, { useState, useEffect } from 'react';
import { CopyButton } from '../CopyButton';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import InputStyles from './Input.styles';
import type { InputProps } from './types';

const {
    CopyContainerStyled,
    DivStyled,
    DivWrapperStyled,
    InputStyled,
    LabelStyled,
    StrongStyled,
    VisibilityIcon,
} = InputStyles;

const Input: React.FC<InputProps> = ({
    autoComplete = true,
    autoFocus = false,
    disabled = false,
    description,
    errorMessage = 'Sorry this is not valid',
    hasCopyButton = false,
    id,
    ref,
    inputHidden = false,
    label,
    name,
    onChange,
    onBlur,
    placeholder = '',
    prefixIcon,
    size = 'regular',
    state = disabled ? 'disabled' : undefined,
    style,
    type = 'text',
    validation,
    value = '',
    width = '320px',
    labelBgColor,
    iconPosition = 'front',
    customInput,
    ...props
}: InputProps) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [currentState, setCurrentState] = useState(state);
    const [mainType, setMainType] = useState(type);
    const [isInputHidden, setIsInputHidden] = useState(inputHidden);
    const [invalidMessage, setInvalidMessage] = useState(errorMessage);

    useEffect(() => setIsInputHidden(type === 'password'), [inputHidden]);
    useEffect(() => setCurrentState(state), [state]);
    useEffect(() => setMainType(type), [type]);
    useEffect(() => setCurrentValue(value), [value]);
    useEffect(() => setInvalidMessage(errorMessage), [errorMessage]);

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange && onChange(event);
    };

    const canToggleHideInput = (): boolean => {
        return mainType === 'password';
    };

    const toggleHideInput = (): void => {
        if (currentState === 'disabled') return;
        setIsInputHidden(!isInputHidden);
    };

    const hasValidation = () =>
        Boolean(
            validation?.required ||
                validation?.numberMax ||
                validation?.numberMin ||
                validation?.characterMaxLength ||
                validation?.characterMinLength ||
                validation?.regExp,
        );

    const validate = (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur && onBlur(event);
        if (!hasValidation()) return;

        // check for HTML validation
        if (!event?.target.checkValidity()) {
            setInvalidMessage(event?.target.validationMessage || errorMessage);
            setCurrentState('error');
            return;
        }

        // check for the value passes the custom RegExp
        if (validation?.regExp) {
            const re = new RegExp(validation?.regExp);
            if (!re.test(event?.target.value)) {
                setInvalidMessage(
                    validation?.regExpInvalidMessage || errorMessage,
                );
                setCurrentState('error');
                return;
            }
        }

        // finally if all pass but the Input is in error state
        if (currentState === 'error') {
            setCurrentState('confirmed');
            setTimeout(() => setCurrentState('initial'), 3000);
        }
    };

    return (
        <DivWrapperStyled
            state={currentState}
            className={`input input_${
                currentValue && currentValue?.length > 0 ? 'filled' : 'empty'
            }`}
            data-testid="test-div"
            style={{ ...style, width }}
            size={size}
        >
            {prefixIcon && iconPosition == 'front' && (
                <DivStyled className="input_prefixIcon">
                    <Icon svg={prefixIcon} />
                </DivStyled>
            )}
            {customInput && customInput}

            <InputStyled
                autoComplete={`${autoComplete}`}
                autoFocus={autoFocus}
                customInput={customInput}
                data-testid="test-input"
                disabled={currentState == 'disabled'}
                id={id}
                max={type === 'number' ? validation?.numberMax : undefined}
                maxLength={validation?.characterMaxLength}
                min={type === 'number' ? validation?.numberMin : undefined}
                minLength={validation?.characterMinLength}
                name={name}
                ref={ref}
                onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                    validate(event)
                }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    valueChanged(event)
                }
                pattern={validation?.regExp}
                placeholder={placeholder}
                required={validation?.required}
                type={
                    mainType !== 'password'
                        ? type
                        : isInputHidden
                        ? 'password'
                        : 'text'
                }
                value={currentValue}
                {...props}
            />

            {label && (
                <LabelStyled
                    data-testid="test-label"
                    htmlFor={id}
                    hasPrefix={
                        typeof prefixIcon !== 'undefined' &&
                        iconPosition == 'front'
                    }
                    labelBgColor={labelBgColor}
                >
                    {label}
                    {validation?.required && '*'}
                </LabelStyled>
            )}
            {currentState === 'error' && (
                <StrongStyled
                    data-testid="test-invalid-feedback"
                    isError={true}
                >
                    {invalidMessage}
                </StrongStyled>
            )}
            {description && !(currentState === 'error') && (
                <StrongStyled
                    data-testid="test-invalid-feedback"
                    isError={false}
                >
                    {description}
                </StrongStyled>
            )}
            {canToggleHideInput() && (
                <VisibilityIcon
                    className="input_visibility"
                    onClick={() => toggleHideInput()}
                    type="button"
                >
                    {isInputHidden ? (
                        <Icon svg={iconTypes.eyeClosed} />
                    ) : (
                        <Icon svg={iconTypes.eye} />
                    )}
                </VisibilityIcon>
            )}
            {prefixIcon && iconPosition == 'end' && (
                <DivStyled className="input_prefixIcon">
                    <Icon svg={prefixIcon} />
                </DivStyled>
            )}
            {hasCopyButton && (
                <CopyContainerStyled>
                    <CopyButton text={currentValue} />
                </CopyContainerStyled>
            )}
        </DivWrapperStyled>
    );
};

export default Input;
