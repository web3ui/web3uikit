import { FC, useEffect, useState } from 'react';
import { Typography } from '../Typography';
import styles from './Credentials.styles';
import { color } from '@web3uikit/styles';
import { ICredentialsProps } from './types';
import CredentialsHeader from './components/CredentialsHeader';
import TruncateString from './components/TruncateString';
import CustomCopyButton from './components/CustomCopyButton';
import CustomHideButton from './components/CustomHideButton';

const {
    CredentialsStyled,
    DividerStyled,
    DivWrapperStyled,
    PreformattedStyled,
    ToolsStyled,
} = styles;

const Credentials: FC<ICredentialsProps> = ({
    customize,
    hasCopyButton = true,
    hasHideButton = true,
    hiddenText = '•••••••••••••••••••••••••••••••',
    icon,
    isHidden = false,
    text,
    textColor = customize?.color || color.blue70,
    title,
    titleColor,
    width = 'auto',
    onCopy,
    onReveal,
    hasIconTooltip = false,
    ...props
}) => {
    const [isValueHidden, setIsValueHidden] = useState(isHidden);
    const [isMultiline, setIsMultiline] = useState(
        (text.match(/\n/g) || []).length > 0,
    );

    useEffect(() => setIsValueHidden(isHidden), [isHidden]);

    useEffect(() => setIsMultiline((text.match(/\n/g) || []).length > 0), [
        text,
    ]);

    return (
        <CredentialsStyled
            data-testid="test-credentials"
            customize={customize}
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
                                text={text}
                                percentageOfCharsAfterTrunc={55}
                                textColor={
                                    textColor ??
                                    customize?.color ??
                                    color.blue70
                                }
                                fontSize={customize?.fontSize ?? '16px'}
                            />
                        )}
                    </Typography>
                </DivWrapperStyled>
                <ToolsStyled
                    data-testid="test-credentials-tools"
                    hasIconTooltip={hasIconTooltip}
                >
                    {hasHideButton && (
                        <CustomHideButton
                            hasIconTooltip={hasIconTooltip}
                            isValueHidden={isValueHidden}
                            onHideToggle={() => {
                                setIsValueHidden((prev) => !prev);
                                if (isValueHidden) onReveal?.();
                            }}
                        />
                    )}
                    {hasHideButton && hasCopyButton && !hasIconTooltip && (
                        <DividerStyled />
                    )}
                    {hasCopyButton && (
                        <CustomCopyButton
                            customize={customize}
                            hasIconTooltip={hasIconTooltip}
                            onCopy={onCopy}
                            text={text}
                        />
                    )}
                </ToolsStyled>
            </PreformattedStyled>
        </CredentialsStyled>
    );
};

export default Credentials;
