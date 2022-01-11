import React, { useState } from 'react';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import InputStyles from './Input.styles';
import type { InputProps } from './types';

const {
    CopyInputIcon,
    ErrorLabel,
    InputIcon,
    InputStyled,
    InputWrapper,
    LabelStyled,
    VisibilityIcon,
} = InputStyles;

const Input: React.FC<InputProps> = ({
    autoComplete = true,
    copyable = false,
    errorMessage = '',
    hidable = false,
    id = String(Date.now()),
    inputHidden = false,
    label,
    name,
    onChange,
    placeholder = '',
    prefix,
    state,
    style,
    type = 'text',
    value = '',
    width = '320px',
}: InputProps) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [isCopied, setIsCopied] = useState(false);
    const [isInputHidden, setIsInputHidden] = useState(inputHidden);

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange(event);
    };

    const copyToClipboard = (): void => {
        if (state === 'disabled') return;
        navigator.clipboard.writeText(currentValue);
        setIsCopied(true);
    };

    const toggleHideInput = (): void => {
        if (state === 'disabled') return;
        setIsInputHidden(!isInputHidden);
    };
    console.log('state', state);
    return (
        <InputWrapper
            state={state}
            className={`input input_${
                currentValue.length > 0 ? 'filled' : 'empty'
            }`}
            data-testid="test-div"
            style={{ ...style, width }}
        >
            {prefix && <InputIcon className="input_prefix">{prefix}</InputIcon>}
            <InputStyled
                autoComplete={`${autoComplete}`}
                data-testid="test-input"
                disabled={state == 'disabled'}
                id={id}
                name={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    valueChanged(event)
                }
                placeholder={placeholder}
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
                    hasPrefix={typeof prefix !== 'undefined'}
                >
                    {label}
                </LabelStyled>
            )}
            {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
            {hidable && (
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
            {copyable && (
                <CopyInputIcon
                    className="input_copy"
                    onClick={() => copyToClipboard()}
                >
                    {isCopied ? (
                        <Icon svg={iconTypes.check} fill={color.green} />
                    ) : (
                        <Icon svg={iconTypes.copy} />
                    )}
                </CopyInputIcon>
            )}
        </InputWrapper>
    );
};

export default Input;
