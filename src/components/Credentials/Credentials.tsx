import React, { FC, useEffect, useState } from 'react';
import { Typography } from '../Typography';
import styles from './Credentials.styles';
import color from '../../styles/colors';
import { ICredentialsProps } from './types';
import CredentialsHeader from './components/CredentialsHeader';
import { HideButton } from '../HideButton';
import { CopyButton } from '../CopyButton';
import TruncateString from './components/TruncateString';

const {
    CredentialsStyled,
    DividerStyled,
    DivWrapperStyled,
    PreformattedStyled,
    ToolsStyled,
} = styles;

const Credentials: FC<ICredentialsProps> = ({
    hasCopyButton = true,
    hasHideButton = true,
    hiddenText = '•••••••••••••••••••••••••••••••',
    icon,
    iconColor,
    iconSize,
    isHidden = false,
    text,
    textColor = color.blueDark,
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
            data-testid="test-credentials"
            width={width}
            {...props}
        >
            <CredentialsHeader
                data-testid="test-credentials-header"
                icon={icon}
                iconColor={iconColor}
                iconSize={iconSize}
                title={title}
                titleColor={titleColor}
            />
            <PreformattedStyled data-testid="test-credentials-pre">
                <DivWrapperStyled
                    isHidden={isValueHidden}
                    isMultiline={isMultiline}
                >
                    <Typography
                        color={isValueHidden ? color.grey : textColor}
                        data-testid="test-cred-new-comp-heading"
                        monospace
                        variant={isValueHidden ? 'caption14' : 'body16'}
                        weight="400"
                    >
                        {isValueHidden ? (
                            hiddenText
                        ) : isMultiline ? ( // Multiline text will be shown with scrollbar
                            text
                        ) : (
                            <TruncateString
                                text={text}
                                percentageOfCharsAfterTrunc={55}
                            />
                        )}
                    </Typography>
                </DivWrapperStyled>
                <ToolsStyled data-testid="test-credentials-tools">
                    {hasHideButton && (
                        <HideButton
                            onToggle={() => setIsValueHidden(!isValueHidden)}
                            isHidden={isValueHidden}
                        />
                    )}
                    {hasHideButton && hasCopyButton && <DividerStyled />}
                    {hasCopyButton && <CopyButton text={text} iconSize={24} />}
                </ToolsStyled>
            </PreformattedStyled>
        </CredentialsStyled>
    );
};

export default Credentials;
