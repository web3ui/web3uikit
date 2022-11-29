import { FC, useEffect, useRef, useState } from 'react';
import CodeAreaStyles from './CodeArea.styles';
import { Button } from '../Button';
import { ICodeAreaProps } from './types';
import LineNumbers from './LineNumbers';
import { Maximize, Minimize } from '@web3uikit/icons';

const {
    ContentStyled,
    HeaderStyled,
    DivStyledButtonWrap,
    TextAreaStyled,
    WidthWrapperStyled,
    WrapperStyled,
} = CodeAreaStyles;

const CodeArea: FC<ICodeAreaProps> = ({
    text = '',
    maxWidth = '100%',
    onChange,
    onBlur,
    headerComponent,
    disabled,
    minHeight,
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
            textareaRef.current.style.minHeight = minHeight || 'unset';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px';
            textareaRef.current.style.minHeight = scrollHeight + 'px';
        }
    }, [currentValue]);

    return (
        <WidthWrapperStyled
            maxHeight={maxHeight}
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
                <ContentStyled
                    maxHeight={maxHeight}
                    maxWidth={maxWidth}
                    isMaximized={isMaximized}
                >
                    <LineNumbers currentValue={currentValue} />
                    <TextAreaStyled
                        data-testid="test-codearea"
                        ref={textareaRef}
                        onChange={(
                            event: React.ChangeEvent<HTMLTextAreaElement>,
                        ) => valueChanged(event)}
                        spellCheck={false}
                        onBlur={onBlur}
                        value={currentValue}
                        disabled={disabled}
                    />
                    {hasMaxHeight && (
                        <DivStyledButtonWrap data-testid="test-codearea-maximize-button-wrapper">
                            <Button
                                data-testid={
                                    isMaximized
                                        ? 'test-button-minimize'
                                        : 'test-button-maximize'
                                }
                                icon={
                                    isMaximized ? (
                                        <Minimize fontSize={20} />
                                    ) : (
                                        <Maximize fontSize={20} />
                                    )
                                }
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
                    )}
                </ContentStyled>
            </WrapperStyled>
        </WidthWrapperStyled>
    );
};

export default CodeArea;
