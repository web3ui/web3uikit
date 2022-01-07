import React, { useState, useRef, useEffect } from 'react';
import TextAreaStyles from './TextArea.styles';
import { TextAreaProps } from './types';

const { TextAreaStyled, LabelStyled, TextAreaWrapper } = TextAreaStyles;

const TextArea: React.FC<TextAreaProps> = ({
    autoComplete = true,
    id = String(Date.now()),
    label,
    name,
    onChange,
    placeholder,
    state,
    value = '',
}: TextAreaProps) => {
    const [currentValue, setCurrentValue] = useState(value);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const valueChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
        onChange(event);
    };

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "0px";
            const scrollHeight = textareaRef.current.scrollHeight;
            console.log(scrollHeight)
            textareaRef.current.style.height = scrollHeight + "px";
        }
    }, [currentValue]);

    return (
        <TextAreaWrapper
            state={state}
            className={currentValue.length > 0 ? 'filled' : 'empty'}
            data-testid="test-textarea-wrapper"
        >
            <TextAreaStyled
                autoComplete={`${autoComplete}`}
                data-testid="test-textarea"
                id={id}
                name={name}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                    valueChanged(event)
                }
                placeholder={placeholder}
                value={currentValue}
                ref={textareaRef}
                rows={4}
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
