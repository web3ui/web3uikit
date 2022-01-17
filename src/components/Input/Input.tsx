import React, { useState, useEffect } from 'react';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import {
    ButtonStyled,
    DivStyled,
    DivWrapperStyled,
    InputStyled,
    LabelStyled,
    StrongStyled,
    VisibilityIcon,
} from './Input.styles';
import type { InputProps } from './types';

const Input: React.FC<InputProps> = ({
    autoComplete = true,
    disabled = false,
    characterMaxLength,
    characterMinLength,
    errorMessage = 'Sorry this is not valid',
    hasCopyButton = false,
    id,
    inputHidden = false,
    isHidable = false,
    label,
    name,
    numberMax,
    numberMin,
    onChange,
    placeholder = '',
    prefixIcon,
    regExp,
    regExpInvalidMessage,
    required = false,
    state = disabled ? 'disabled' : undefined,
    style,
    type = 'text',
    value = '',
    width = '320px',
}: InputProps) => {
    if (type !== 'number') {
        numberMax = undefined;
        numberMin = undefined;
    }
    const [currentValue, setCurrentValue] = useState(value);
    const [currentState, setCurrentState] = useState(state);
    const [isCopied, setIsCopied] = useState(false);
    const [isInputHidden, setIsInputHidden] = useState(inputHidden);
    const [invalidMessage, setInvalidMessage] = useState(errorMessage);

    useEffect(() => setIsInputHidden(inputHidden), [inputHidden]);

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange && onChange(event);
    };

    const copyToClipboard = (): void => {
        if (currentState === 'disabled') return;
        navigator.clipboard.writeText(currentValue);
        setIsCopied(true);
    };

    const toggleHideInput = (): void => {
        if (currentState === 'disabled') return;
        setIsInputHidden(!isInputHidden);
    };

    const hasValidation = () =>
        Boolean(
            required ||
                numberMax ||
                numberMin ||
                characterMaxLength ||
                characterMinLength ||
                regExp,
        );

    const validate = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        if (!hasValidation()) return;

        // check for HTML validation
        if (!event?.target.checkValidity()) {
            setInvalidMessage(event?.target.validationMessage || errorMessage);
            setCurrentState('error');
            return;
        }

        // check for the value passes the custom RegExp
        if (regExp) {
            var re = new RegExp(regExp);
            if (!re.test(event?.target.value)) {
                setInvalidMessage(regExpInvalidMessage || errorMessage);
                setCurrentState('error');
                return;
            }
        }

        // finally if all pass but the Input is in error state
        if (currentState === 'error') {
            setCurrentState('confirmed');
            setTimeout(() => setCurrentState(undefined), 3000);
        }
    };

    return (
        <DivWrapperStyled
            state={currentState}
            className={`input input_${
                currentValue.length > 0 ? 'filled' : 'empty'
            }`}
            data-testid="test-div"
            style={{ ...style, width }}
        >
            {prefixIcon && (
                <DivStyled className="input_prefixIcon">
                    <Icon svg={prefixIcon} />
                </DivStyled>
            )}
            <InputStyled
                autoComplete={`${autoComplete}`}
                data-testid="test-input"
                disabled={currentState == 'disabled'}
                id={id}
                max={type === 'number' ? numberMax : undefined}
                maxLength={characterMaxLength}
                min={type === 'number' ? numberMin : undefined}
                minLength={characterMinLength}
                name={name}
                onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                    validate(event)
                }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    valueChanged(event)
                }
                placeholder={placeholder}
                required={required}
                type={type}
                value={
                    isInputHidden
                        ? currentValue.replace(/./g, '*')
                        : currentValue
                }
            />
            {label && (
                <LabelStyled
                    data-testid="test-label"
                    htmlFor={id}
                    hasPrefix={typeof prefixIcon !== 'undefined'}
                >
                    {label}
                    {required && '*'}
                </LabelStyled>
            )}

            {currentState === 'error' && (
                <StrongStyled data-testid="test-invalid-feedback">
                    {invalidMessage}
                </StrongStyled>
            )}

            {isHidable && (
                <VisibilityIcon
                    className="input_visibility"
                    onClick={() => toggleHideInput()}
                >
                    {isInputHidden ? (
                        <Icon svg={iconTypes.eyeClosed} />
                    ) : (
                        <Icon svg={iconTypes.eye} />
                    )}
                </VisibilityIcon>
            )}

            {hasCopyButton && (
                <ButtonStyled
                    className="input_copy"
                    onClick={() => copyToClipboard()}
                >
                    {isCopied ? (
                        <Icon svg={iconTypes.check} fill={color.green} />
                    ) : (
                        <Icon svg={iconTypes.copy} />
                    )}
                </ButtonStyled>
            )}
        </DivWrapperStyled>
    );
};

export default Input;
