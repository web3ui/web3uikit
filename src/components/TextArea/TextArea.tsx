import React, { useState, useRef, useEffect } from 'react';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
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
    validation,
    value = '',
    width = '300px',
}: TextAreaProps) => {
    const [currentValue, setCurrentValue] = useState(value);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const valueChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
        onChange && onChange(event);
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
            <Icon
                svg={iconTypes.expand}
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    zIndex: '-1',
                }}
                fill={color.blue}
            />
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
                placeholder={placeholder}
                ref={textareaRef}
                required={validation?.required}
                rows={4}
                value={currentValue}
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
