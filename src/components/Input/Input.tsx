import React, { useState } from 'react';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import InputStyles from './Input.styles';
import type { InputProps } from './types';

const { InputStyled, LabelStyled, InputWrapper, InputIcon, CopyInputIcon, VisibilityIcon } =
    InputStyles;

const Input: React.FC<InputProps> = ({
    autoComplete = true,
    hidable = false,
    id = String(Date.now()),
    inputHidden = false,
    label,
    name,
    onChange,
    placeholder = '',
    prefix,
    state,
    type = 'text',
    value = '',
}: InputProps) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [isCopied, setIsCopied] = useState(false);

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange(event);
    };

    const copyToClipboard = (): void => {
        navigator.clipboard.writeText(currentValue);
        setIsCopied(true);
    };

    return (
        <InputWrapper
            state={state}
            className={`input input_${currentValue.length > 0 ? 'filled' : 'empty'
                }`}
            data-testid="test-div"
        >
            {prefix && (
                <InputIcon type="prefix" className="input_prefix">
                    {prefix}
                </InputIcon>
            )}
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
            {hidable && <VisibilityIcon className="input_visibility">{isCopied ? (
                <Icon svg={iconTypes.check} fill={color.green} />
            ) : (
                <Icon svg={iconTypes.copy} />
            )}</VisibilityIcon>}
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
        </InputWrapper>
    );
};

export default Input;
