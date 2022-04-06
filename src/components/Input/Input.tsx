import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import Blockies from 'react-blockies';
import { CopyButton } from '../CopyButton';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import {
    BlockieWrapperStyled,
    CopyContainerStyled,
    DivStyled,
    DivWrapperStyled,
    InputEllipsisStyled,
    InputStyled,
    LabelStyled,
    StrongStyled,
    VisibilityIcon,
} from './Input.styles';
import type { InputProps } from './types';
import { getEllipsisTxt } from '../../web3utils';

const Input: React.FC<InputProps> = ({
    autoComplete = true,
    autoFocus = false,
    disabled = false,
    errorMessage = 'Sorry this is not valid',
    hasCopyButton = false,
    id,
    inputHidden = false,
    label,
    name,
    onChange,
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
    isWalletAddress,
}: InputProps) => {
    const inputEl = useRef<HTMLInputElement>(
        null,
    ) as MutableRefObject<HTMLInputElement>;

    const [currentValue, setCurrentValue] = useState(value);
    const [currentState, setCurrentState] = useState(state);
    const [mainType, setMainType] = useState(type);
    const [isInputHidden, setIsInputHidden] = useState(inputHidden);
    const [invalidMessage, setInvalidMessage] = useState(errorMessage);
    const [isEditMode, setIsEditMode] = useState(true);

    useEffect(() => setIsInputHidden(type === 'password'), [inputHidden]);
    useEffect(() => setCurrentState(state), [state]);
    useEffect(() => setMainType(type), [type]);
    useEffect(() => {
        if (isEditMode) inputEl.current.focus();
    }, [inputEl, isEditMode]);

    const isFilled = currentValue && currentValue?.length > 0;

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
    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        // Quit edit mode to preview ellipsis address
        if (isWalletAddress && isFilled) {
            setIsEditMode(false);
        }
        validate(event);
    };
    const getInputType = (): string => {
        if (isWalletAddress) return 'text';
        return mainType !== 'password'
            ? type
            : isInputHidden
            ? 'password'
            : 'text';
    };
    return (
        <DivWrapperStyled
            state={currentState}
            className={`input input_${isFilled ? 'filled' : 'empty'}`}
            data-testid="test-div"
            style={{ ...style, width }}
            size={size}
        >
            {!isWalletAddress && prefixIcon && (
                <DivStyled className="input_prefixIcon">
                    <Icon svg={prefixIcon} />
                </DivStyled>
            )}

            {isWalletAddress && (
                <>
                    <BlockieWrapperStyled data-testid="test-blockie">
                        <Blockies
                            size={6}
                            seed={currentValue?.toLowerCase()}
                            className="blockie"
                        />
                    </BlockieWrapperStyled>
                    {!isEditMode && (
                        <InputEllipsisStyled
                            data-testid="test-ellipsis-input"
                            onClick={() => {
                                setIsEditMode(true);
                            }}
                        >
                            {getEllipsisTxt(currentValue)}
                        </InputEllipsisStyled>
                    )}
                </>
            )}

            <InputStyled
                ref={inputEl}
                autoComplete={`${autoComplete}`}
                autoFocus={autoFocus}
                data-testid="test-input"
                disabled={currentState == 'disabled'}
                id={id}
                max={type === 'number' ? validation?.numberMax : undefined}
                maxLength={validation?.characterMaxLength}
                min={type === 'number' ? validation?.numberMin : undefined}
                minLength={validation?.characterMinLength}
                name={name}
                onBlur={handleOnBlur}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    valueChanged(event)
                }
                pattern={validation?.regExp}
                placeholder={placeholder}
                required={validation?.required}
                type={getInputType()}
                value={currentValue}
                hidden={isWalletAddress && !isEditMode}
            />
            {label && (
                <LabelStyled
                    data-testid="test-label"
                    htmlFor={id}
                    hasPrefix={
                        isWalletAddress
                            ? true
                            : typeof prefixIcon !== 'undefined'
                    }
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

            {hasCopyButton && (
                <CopyContainerStyled>
                    <CopyButton text={currentValue} />
                </CopyContainerStyled>
            )}
        </DivWrapperStyled>
    );
};

export default Input;
