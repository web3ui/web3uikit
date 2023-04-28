import { FC, useEffect, useState } from 'react';
import { Typography } from '../Typography';
import { HideButton } from '../HideButton';
import { CopyButton } from '../CopyButton';
import styles from './Credentials.styles';
import { color } from '@web3uikit/styles';
import { ICredentialsProps } from './types';
import CredentialsHeader from './components/CredentialsHeader';
import TruncateString from './components/TruncateString';

const {
    CredentialsStyled,
    DividerStyled,
    DivWrapperStyled,
    PreformattedStyled,
    ToolsStyled,
    DivIconWrapperStyled,
} = styles;

const Credentials: FC<ICredentialsProps> = ({
    customize,
    hasCopyButton = true,
    hasHideButton = true,
    hasIconTooltip = false,
    hiddenText = '•••••••••••••••••••••••••••••••',
    icon,
    isHidden = false,
    onCopy,
    onReveal,
    text,
    textColor = customize?.color || color.blue70,
    title,
    titleColor,
    width = 'auto',
    ...props
}) => {
    const [isValueHidden, setIsValueHidden] = useState(isHidden);
    const [isMultiline, setIsMultiline] = useState(
        (text.match(/\n/g) || []).length > 0,
    );

    useEffect(() => setIsValueHidden(isHidden), [isHidden]);

    useEffect(
        () => setIsMultiline((text.match(/\n/g) || []).length > 0),
        [text],
    );

    return (
        <CredentialsStyled
            customize={customize}
            data-testid="test-credentials"
            width={width}
            {...props}
        >
            <CredentialsHeader
                data-testid="test-credentials-header"
                icon={icon}
                title={title}
                titleColor={titleColor}
                {...props}
            />
            <PreformattedStyled data-testid="test-credentials-pre">
                <DivWrapperStyled
                    isHidden={isValueHidden}
                    isMultiline={isMultiline}
                >
                    <Typography
                        color={textColor ?? customize?.color ?? color.blue70}
                        data-testid="test-cred-new-comp-heading"
                        fontSize={customize?.fontSize}
                        monospace
                        variant={isValueHidden ? 'caption14' : 'body16'}
                        weight={customize?.fontWeight}
                    >
                        {isValueHidden ? (
                            hiddenText
                        ) : isMultiline ? ( // Multiline text will be shown with scrollbar
                            text
                        ) : (
                            <TruncateString
                                fontSize={customize?.fontSize ?? '16px'}
                                text={text}
                                textColor={
                                    textColor ??
                                    customize?.color ??
                                    color.blue70
                                }
                                percentageOfCharsAfterTrunc={55}
                            />
                        )}
                    </Typography>
                </DivWrapperStyled>
                <ToolsStyled
                    data-testid="test-credentials-tools"
                    hasIconTooltip={hasIconTooltip}
                >
                    {hasHideButton && (
                        <DivIconWrapperStyled>
                            <HideButton
                                hasTooltip={hasIconTooltip}
                                isHidden={isValueHidden}
                                customize={customize}
                                onToggle={() => {
                                    setIsValueHidden((prev) => !prev);
                                    if (isValueHidden) onReveal?.();
                                }}
                            />
                        </DivIconWrapperStyled>
                    )}
                    {hasHideButton && hasCopyButton && !hasIconTooltip && (
                        <DividerStyled />
                    )}
                    {hasCopyButton && (
                        <DivIconWrapperStyled>
                            <CopyButton
                                customize={customize}
                                hasTooltip={hasIconTooltip}
                                onCopy={onCopy}
                                text={text}
                            />
                        </DivIconWrapperStyled>
                    )}
                </ToolsStyled>
            </PreformattedStyled>
        </CredentialsStyled>
    );
};

export default Credentials;
