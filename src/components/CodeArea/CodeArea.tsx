import React, { FC, useEffect, useRef, useState } from 'react';
import CodeAreaStyles from './CodeArea.styles';
import { Button } from '../Button';
import { ICodeAreaProps } from './types';
import LineNumbers from './LineNumbers';

const {
    ContentStyled,
    HeaderStyled,
    DivStyledButtonWrap,
    TextAreaStyled,
    WidthWrapperStyled,
    WrapperStyled,
} = CodeAreaStyles;

const CodeArea: FC<ICodeAreaProps> = ({
    text,
    maxWidth = '100%',
    onChange,
    headerComponent,
    disabled,
    minHeight = '400px',
    maxHeight,
    ...props
}) => {
    const [currentValue, setCurrentValue] = useState(text);
    const [isMaximized, setIsMaximized] = useState(false);
    const hasMaxHeight = Boolean(maxHeight);

    useEffect(() => setCurrentValue(text), [text]);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const valueChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
        onChange && onChange(event);
    };

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px';
            textareaRef.current.style.minHeight = minHeight;
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px';
            textareaRef.current.style.minHeight = scrollHeight + 'px';
        }
    }, [currentValue]);

    return (
        <WidthWrapperStyled maxWidth={maxWidth} {...props}>
            <WrapperStyled data-testid="test-codearea-wrapper">
                {headerComponent && (
                    <HeaderStyled data-testid="test-codearea-header">
                        {headerComponent}
                    </HeaderStyled>
                )}
                <ContentStyled>
                    <LineNumbers currentValue={currentValue} />
                    <TextAreaStyled
                        data-testid="test-codearea"
                        ref={textareaRef}
                        onChange={(
                            event: React.ChangeEvent<HTMLTextAreaElement>,
                        ) => valueChanged(event)}
                        spellCheck={false}
                        value={currentValue}
                        disabled={disabled}
                    >
                    </TextAreaStyled>
                    {hasMaxHeight && (
                        <DivStyledButtonWrap data-testid="test-codearea-maximize-button-wrapper">
                            {isMaximized ? <Button
                                icon='minimize'
                                iconLayout="icon-only"
                                id="test-button-primary-icon-only"
                                data-testid="test-button-minimize"
                                isTransparent
                                onClick={() => {
                                    if (textareaRef && textareaRef.current) {
                                        textareaRef.current.style.height = minHeight;
                                        setIsMaximized(false);
                                    }
                                }}
                                radius={20}
                                theme="secondary"
                                type="button"
                            /> : <Button
                                icon='maximize'
                                iconLayout="icon-only"
                                id="test-button-primary-icon-only"
                                data-testid="test-button-maximize"
                                isTransparent
                                onClick={() => {
                                    if (textareaRef && textareaRef.current) {
                                        textareaRef.current.style.height = maxHeight || '100%';
                                        setIsMaximized(true);
                                    }
                                }}
                                radius={20}
                                theme="secondary"
                                type="button"
                            />}
                        </DivStyledButtonWrap>
                    )}
                </ContentStyled>
            </WrapperStyled>
        </WidthWrapperStyled>
    );
};

export default CodeArea;
