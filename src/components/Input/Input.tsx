import 'flag-icons/css/flag-icons.min.css';
import { callCodeData } from './codeData.utils';
import { CopyButton } from '../CopyButton';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { OptionProps } from '../Select';
import InputStyles from './Input.styles';
import React, { useState, useEffect, useMemo } from 'react';
import type { InputProps } from './types';
import { Dropdown } from '../Dropdown';

const {
    CopyContainerStyled,
    DivStyled,
    DivWrapperStyled,
    InputStyled,
    LabelStyled,
    SpanStyledFlag,
    StrongStyled,
    VisibilityIcon,
    FlagSelectionStyled,
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
    // / FLAG
    const [selectedCountry, setSelectedCountry] = useState(callCodeData[212]);

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

    const isInputEmpty = useMemo(() => {
        if (typeof currentValue === 'string') {
            return currentValue.length > 0;
        } else if (typeof currentValue === 'number') {
            return true;
        } else return false;
    }, [currentValue]);

    // ////////////////// FLAG
    const getFLag = (value: string) => {
        const code = value.split(' ')[0];
        const country = callCodeData.find((item) => item.dialCode === code);
        return country ? country.isoCode : '';
    };

    const countrySelector = () => {
        const o: OptionProps[] = [];
        callCodeData.map((country, index) => {
            o.push({
                prefix: (
                    <div
                        style={{
                            maxWidth: 'fit-content',
                        }}
                    >
                        <SpanStyledFlag
                            className={`fi fi-${getFLag(
                                country.dialCode,
                            ).toLowerCase()}`}
                        />
                    </div>
                ),
                label: country.name,
                id: index,
            });
        });
        return (
            <Dropdown
                options={o}
                onChange={(e) => countrySelected(Number(e.id))}
            />
        );
    };

    const countrySelected = (id: number) => {
        setSelectedCountry(callCodeData[id]);
        attemptFocusOnElement('verify-number-input');
    };

    const attemptFocusOnElement = (elementID: string) => {
        const input: HTMLInputElement | null = document.querySelector(
            `#${elementID}`,
        );
        input?.focus();
    };

    // ////////////////// FLAG

    return (
        <DivWrapperStyled
            state={currentState}
            className={`input input_${isInputEmpty ? 'filled' : 'empty'}`}
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
            {type === 'tel' && (
                <FlagSelectionStyled>{countrySelector()}</FlagSelectionStyled>
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
