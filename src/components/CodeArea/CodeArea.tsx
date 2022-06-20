import React, { FC, useEffect, useRef, useState } from 'react';
import CodeAreaStyles from './CodeArea.styles';
import { Button } from '../Button';
import { ICodeAreaProps } from './types';
import LineNumbers from './LineNumbers';
import pxToNumber from '../../utils/pxToNumber';

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
    height = 'fit-content',
    ...props
}) => {
    const [currentValue, setCurrentValue] = useState(text);
    const [isMaximized, setIsMaximized] = useState(false);
    // const hasMaxHeight = Boolean(maxHeight);

    useEffect(() => setCurrentValue(text), [text]);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const valueChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
        onChange && onChange(event);
    };

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.minHeight = '0px';
            // textareaRef.current.style.minHeight = height || 'unset';
            const scrollHeight = textareaRef.current.scrollHeight;
            console.log('scrollHeight: ', scrollHeight);
            console.log('showIcon: ', scrollHeight > pxToNumber(height));
            textareaRef.current.style.minHeight = scrollHeight + 'px';
            textareaRef.current.style.minHeight = scrollHeight + 'px';
        }
    }, [currentValue]);

    return (
        <WidthWrapperStyled
            maxWidth={maxWidth}
            isMaximized={isMaximized}
            {...props}
        >
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
                    ></TextAreaStyled>
                    <DivStyledButtonWrap data-testid="test-codearea-maximize-button-wrapper">
                        <Button
                            data-testid={
                                isMaximized
                                    ? 'test-button-minimize'
                                    : 'test-button-maximize'
                            }
                            icon={isMaximized ? 'minimize' : 'maximize'}
                            iconLayout="icon-only"
                            id="test-button-primary-icon-only"
                            isTransparent
                            onClick={() => {
                                setIsMaximized(!isMaximized);
                            }}
                            radius={20}
                            theme="secondary"
                            type="button"
                        />
                    </DivStyledButtonWrap>
                </ContentStyled>
            </WrapperStyled>
        </WidthWrapperStyled>
    );
};

export default CodeArea;
