import React, { FC, useEffect, useRef, useState } from 'react';
import CodeAreaStyles from './CodeArea.styles';
import { ICodeAreaProps } from './types';
import LineNumbers from './LineNumbers';

const {
    ContentStyled,
    HeaderStyled,
    TextAreaStyled,
    WidthWrapperStyled,
    WrapperStyled,
} = CodeAreaStyles;

const CodeArea: FC<ICodeAreaProps> = ({
    text,
    maxWidth = '100%',
    onChange,
    headerComponent,
}) => {
    const [currentValue, setCurrentValue] = useState(text);

    useEffect(() => setCurrentValue(text), [text]);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const valueChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
        onChange && onChange(event);
    };

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px';
            textareaRef.current.style.minHeight = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px';
            textareaRef.current.style.minHeight = scrollHeight + 'px';
        }
    }, [currentValue]);

    return (
        <WidthWrapperStyled maxWidth={maxWidth}>
            <WrapperStyled>
                {headerComponent && (
                    <HeaderStyled>{headerComponent}</HeaderStyled>
                )}
                <ContentStyled>
                    <LineNumbers currentValue={currentValue} />
                    <TextAreaStyled
                        ref={textareaRef}
                        onChange={(
                            event: React.ChangeEvent<HTMLTextAreaElement>,
                        ) => valueChanged(event)}
                        spellCheck={false}
                        value={currentValue}
                    />
                </ContentStyled>
            </WrapperStyled>
        </WidthWrapperStyled>
    );
};

export default CodeArea;
