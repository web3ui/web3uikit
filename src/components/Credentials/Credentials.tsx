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
    title,
    titleColor,
    icon,
    iconColor,
    iconSize,
    isHidden = false,
    text,
    textColor = color.blueDark,
    width = 'auto',
    hiddenText = '•••••••••••••••••••••••••••••••',
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
        <CredentialsStyled width={width} data-testid="test-credentials">
            <CredentialsHeader
                title={title}
                titleColor={titleColor}
                icon={icon}
                iconColor={iconColor}
                iconSize={iconSize}
                {...props}
            />
            <PreformattedStyled>
                <DivWrapperStyled
                    isHidden={isValueHidden}
                    isMultiline={isMultiline}
                >
                    <Typography
                        monospace
                        color={isValueHidden ? color.grey : textColor}
                        data-testid="cred-test-text"
                        weight="400"
                        variant={isValueHidden ? 'caption14' : 'body16'}
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
                <ToolsStyled>
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
