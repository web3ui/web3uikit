import { useState, useEffect, useMemo } from 'react';
import { CopyButton } from '../CopyButton';
import { Eye, EyeClosed } from '@web3uikit/icons';
import InputStyles from './Input.styles';
import type { InputProps, TResponse } from './types';
import { inputValidation } from './InputValidation';

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
        const validationResult: TResponse = inputValidation(
            event,
            errorMessage,
            currentState,
            validation,
        );
        setInvalidMessage(validationResult.message || errorMessage);
        setCurrentState(validationResult.result || 'confirmed');
        if (validationResult.result === 'confirmed') {
            setTimeout(() => setCurrentState(undefined), 3000);
        }
    };

    const isInputEmpty = useMemo(() => {
        if (typeof currentValue === 'string') {
            return currentValue.length > 0;
        } else if (typeof currentValue === 'number') {
            return true;
        } else return false;
    }, [currentValue]);

    return (
        <DivWrapperStyled
            className={`input input_${isInputEmpty ? 'filled' : 'empty'}`}
            data-testid="test-input"
            size={size}
            state={currentState}
            style={{ ...style, width }}
        >
            {prefixIcon && iconPosition == 'front' && (
                <DivStyled className="input_prefixIcon">{prefixIcon}</DivStyled>
            )}
            {customInput && customInput}

            <InputStyled
                autoComplete={`${autoComplete}`}
                autoFocus={autoFocus}
                customInput={customInput}
                data-testid="test-input-input"
                defaultValue={currentValue}
                disabled={currentState == 'disabled'}
                id={id}
                max={type === 'number' ? validation?.numberMax : undefined}
                maxLength={validation?.characterMaxLength}
                min={type === 'number' ? validation?.numberMin : undefined}
                minLength={validation?.characterMinLength}
                name={name}
                onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                    validate(event)
                }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    valueChanged(event)
                }
                pattern={validation?.regExp}
                placeholder={placeholder}
                ref={ref}
                required={validation?.required}
                type={
                    mainType !== 'password'
                        ? type
                        : isInputHidden
                        ? 'password'
                        : 'text'
                }
                {...props}
            />

            {label && (
                <LabelStyled
                    data-testid="test-input-label"
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
                <StrongStyled data-testid="test-input-feedback" isError={true}>
                    {invalidMessage}
                </StrongStyled>
            )}
            {description && !(currentState === 'error') && (
                <StrongStyled data-testid="test-input-feedback" isError={false}>
                    {description}
                </StrongStyled>
            )}
            {canToggleHideInput() && (
                <VisibilityIcon
                    className="input_visibility"
                    data-testid="test-input-icon-visibility"
                    onClick={() => toggleHideInput()}
                    type="button"
                >
                    {isInputHidden ? (
                        <EyeClosed
                            title="eye closed icon"
                            titleId="input eye closed icon"
                        />
                    ) : (
                        <Eye title="eye icon" titleId="input eye icon" />
                    )}
                </VisibilityIcon>
            )}
            {prefixIcon && iconPosition == 'end' && (
                <DivStyled
                    className="input_prefixIcon"
                    data-testid="test-input-icon-prefix"
                >
                    {prefixIcon}
                </DivStyled>
            )}
            {hasCopyButton && (
                <CopyContainerStyled data-testid="test-input-copy">
                    <CopyButton text={currentValue} />
                </CopyContainerStyled>
            )}
        </DivWrapperStyled>
    );
};

export default Input;
