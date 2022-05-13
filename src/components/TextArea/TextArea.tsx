import React, { useState, useRef, useEffect } from 'react';
import styles from './TextArea.styles';
import { TextAreaProps } from './types';

const { TextAreaStyled, LabelStyled, TextAreaWrapper } = styles;

const TextArea: React.FC<TextAreaProps> = ({
    autoComplete = true,
    id = String(Date.now()),
    label,
    name,
    ref,
    onChange,
    onValidChange,
    onBlur,
    placeholder,
    state,
    validation,
    value = '',
    width = '300px',
    ...props
}: TextAreaProps) => {
    const [currentValue, setCurrentValue] = useState(value);
    const myRef = useRef<HTMLTextAreaElement | null>(ref ? ref.current : null);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const valueChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
        if (onValidChange && isValid(event)) {
            onValidChange(event);
        } else if (onValidChange && !isValid(event)) {
            return;
        } else if (onChange) {
            onChange(event);
        }
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

    const isValid = (
        event:
            | React.FocusEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ): boolean => {
        // check if there exists validation rules
        if (!hasValidation()) return true;

        // check for HTML validation
        if (!event?.target.checkValidity()) return false;

        // check for the value passes the custom RegExp
        if (validation?.regExp) {
            const re = new RegExp(validation?.regExp);
            if (!re.test(event?.target.value)) return false;
        }

        // if no errors were found, then return true
        return true;
    };

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px';
        }
    }, [currentValue]);

    return (
        <TextAreaWrapper
            className={currentValue.length > 0 ? 'filled' : 'empty'}
            data-testid="test-textarea-wrapper"
            state={state}
            width={width}
        >
            <TextAreaStyled
                autoComplete={`${autoComplete}`}
                data-testid="test-textarea"
                disabled={state === 'disabled'}
                id={id}
                maxLength={validation?.characterMaxLength}
                minLength={validation?.characterMinLength}
                name={name}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                    valueChanged(event)
                }
                onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) =>
                    onBlur && onBlur(event)
                }
                placeholder={placeholder}
                ref={(event) => {
                    textareaRef.current = event;
                    if (myRef) myRef.current = event;
                }}
                required={validation?.required}
                rows={4}
                value={currentValue}
                {...props}
            />
            {label && (
                <LabelStyled data-testid="test-label" htmlFor={id}>
                    {label}
                </LabelStyled>
            )}
        </TextAreaWrapper>
    );
};

export default TextArea;
