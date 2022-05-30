import React, {
    useState,
    useEffect,
    useMemo,
    MutableRefObject,
    useRef,
} from 'react';
import Blockies from 'react-blockies';
import { CopyButton } from '../CopyButton';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import InputStyles from './Input.styles';
import type { InputProps } from './types';
import { getEllipsisTxt } from '../../web3utils';

const {
    CopyContainerStyled,
    DivStyled,
    DivStyledBlockie,
    DivStyledEllipsis,
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
    const bluredTextRef = useRef<HTMLDivElement>(
        null,
    ) as MutableRefObject<HTMLDivElement>;
    const [currentValue, setCurrentValue] = useState(value);
    const [isEditMode, setIsEditMode] = useState(true);
    const [currentState, setCurrentState] = useState(state);
    const [mainType, setMainType] = useState(type);
    const [isInputHidden, setIsInputHidden] = useState(inputHidden);
    const [invalidMessage, setInvalidMessage] = useState(errorMessage);

    useEffect(() => setIsInputHidden(type === 'password'), [inputHidden]);
    useEffect(() => setCurrentState(state), [state]);
    useEffect(() => setMainType(type), [type]);
    useEffect(() => setCurrentValue(value), [value]);
    useEffect(() => setInvalidMessage(errorMessage), [errorMessage]);
    useEffect(() => {
        if (isEditMode) {
            (
                bluredTextRef.current?.nextElementSibling as HTMLInputElement
            )?.focus();
        }
    }, [bluredTextRef, isEditMode]);

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

        if (
            type !== 'address' &&
            type !== 'bluredAddress' &&
            !hasValidation()
        ) {
            return;
        }

        // check for the value passes the custom RegExp
        if (validation?.regExp) {
            const re = new RegExp(validation?.regExp);
            if (!re.test(event?.target.value)) {
                setInvalidMessage(
                    validation?.regExpInvalidMessage ||
                        event?.target.validationMessage ||
                        errorMessage,
                );
                setCurrentState('error');
                return;
            }
        }

        // check for HTML validation
        if (!event?.target.checkValidity()) {
            setInvalidMessage(event?.target.validationMessage || errorMessage);
            setCurrentState('error');
            return;
        }

        if (type === 'address' || type === 'bluredAddress') {
            if (
                currentValue !== '' &&
                !/^0x[a-fA-F0-9]{40}$/.test(currentValue as string)
            ) {
                setInvalidMessage('Invalid 0x address');
                setCurrentState('error');
            } else {
                setInvalidMessage('');
                setCurrentState('initial');
            }
            return;
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

    const inputType = (): string => {
        if (type === 'address' || type === 'bluredAddress') return 'text';
        else if (mainType !== 'password') return type;
        else if (isInputHidden) return 'password';
        else return 'text';
    };

    return (
        <DivWrapperStyled
            state={currentState}
            className={`input input_${isInputEmpty ? 'filled' : 'empty'}`}
            data-testid="test-div"
            style={{ ...style, width }}
            size={size}
        >
            {type !== 'address' &&
                type !== 'bluredAddress' &&
                prefixIcon &&
                iconPosition == 'front' && (
                    <DivStyled className="input_prefixIcon">
                        <Icon svg={prefixIcon} />
                    </DivStyled>
                )}
            {(type === 'address' || type === 'bluredAddress') && (
                <DivStyledBlockie>
                    <Blockies
                        size={6}
                        seed={(currentValue as string)?.toLowerCase()}
                        className="blockie"
                    />
                </DivStyledBlockie>
            )}
            {customInput && customInput}
            {type === 'bluredAddress' && (
                <DivStyledEllipsis
                    style={{ display: isEditMode ? 'none' : 'block' }}
                    onClick={() => {
                        setIsEditMode(true);
                    }}
                    ref={bluredTextRef}
                >
                    {getEllipsisTxt(currentValue as string)}
                </DivStyledEllipsis>
            )}

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
                onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                    validate(event);
                    if (isInputEmpty) {
                        setIsEditMode(false);
                    }
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    valueChanged(event)
                }
                pattern={validation?.regExp}
                placeholder={placeholder}
                required={validation?.required}
                type={inputType()}
                value={currentValue}
                hidden={type === 'bluredAddress' && !isEditMode}
                {...props}
            />

            {label && (
                <LabelStyled
                    data-testid="test-label"
                    htmlFor={id}
                    hasPrefix={
                        (typeof prefixIcon !== 'undefined' &&
                            iconPosition == 'front') ||
                        type === 'address' ||
                        type === 'bluredAddress'
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
            {type !== 'address' &&
                type !== 'bluredAddress' &&
                prefixIcon &&
                iconPosition == 'end' && (
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
