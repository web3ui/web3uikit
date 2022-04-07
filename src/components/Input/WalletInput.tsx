import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Blockie } from '../Blockie';
import {
    DivStyledBlockie,
    DivWrapperStyled,
    InputStyled,
    LabelStyled,
    StrongStyled,
    DivStyledEllipsis,
} from './Input.styles';
import type { WalletInputProps } from './types';
import { getEllipsisTxt } from '../../web3utils';

const WalletInput: React.FC<WalletInputProps> = ({
    autoFocus = false,
    disabled = false,
    errorMessage = 'Sorry this is not valid',
    id,
    label,
    name,
    onChange,
    placeholder = '',
    size = 'regular',
    state = disabled ? 'disabled' : undefined,
    style,
    validation,
    value = '',
    width = '320px',
    labelBgColor,
}: WalletInputProps) => {
    const inputEl = useRef<HTMLInputElement>(
        null,
    ) as MutableRefObject<HTMLInputElement>;
    const [isEditMode, setIsEditMode] = useState(true);
    const [currentValue, setCurrentValue] = useState(value);
    const [currentState, setCurrentState] = useState(state);
    const [invalidMessage, setInvalidMessage] = useState(errorMessage);

    useEffect(() => setCurrentState(state), [state]);

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange && onChange(event);
    };

    const hasValidation = () =>
        Boolean(validation?.required || validation?.regExp);

    const validate = (event: React.FocusEvent<HTMLInputElement>) => {
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
    const isFilled = currentValue && currentValue?.length > 0;
    useEffect(() => {
        if (isEditMode) inputEl.current.focus();
    }, [inputEl, isEditMode]);
    return (
        <DivWrapperStyled
            state={currentState}
            className={`input input_${isFilled ? 'filled' : 'empty'}`}
            data-testid="test-div"
            style={{ ...style, width }}
            size={size}
        >
            <DivStyledBlockie>
                <Blockie seed={currentValue} />
            </DivStyledBlockie>

            <DivStyledEllipsis
                data-testid="test-ellipsis-input"
                style={{ display: isEditMode ? 'none' : 'block' }}
                onClick={() => {
                    setIsEditMode(true);
                }}
            >
                {getEllipsisTxt(currentValue)}
            </DivStyledEllipsis>
            <InputStyled
                ref={inputEl}
                autoFocus={autoFocus}
                data-testid="test-input"
                disabled={currentState == 'disabled'}
                id={id}
                name={name}
                onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                    validate(event);
                    if (isFilled) {
                        setIsEditMode(false);
                    }
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    valueChanged(event)
                }
                pattern={validation?.regExp}
                placeholder={placeholder}
                required={validation?.required}
                type="text"
                value={currentValue}
                hidden={!isEditMode}
            />
            {label && (
                <LabelStyled
                    data-testid="test-label"
                    htmlFor={id}
                    hasPrefix
                    labelBgColor={labelBgColor}
                >
                    {label}
                    {validation?.required && '*'}
                </LabelStyled>
            )}

            {currentState === 'error' && (
                <StrongStyled data-testid="test-invalid-feedback">
                    {invalidMessage}
                </StrongStyled>
            )}
        </DivWrapperStyled>
    );
};

export default WalletInput;
