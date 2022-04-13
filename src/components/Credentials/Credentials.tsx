import React, { FC, useEffect, useState } from 'react';
import { Typography } from '../Typography';
import styles from './Credentials.styles';
import color from '../../styles/colors';
import { ICredentialsProps } from './types';
import CredentialsHeader from './components/CredentialsHeader';
import { HideButton } from '../HideButton';
import { CopyButton } from '../CopyButton';

const { CredentialsStyled, DividerStyled, PreformattedStyled, ToolsStyled } =
    styles;

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
}) => {
    const [isValueHidden, setIsValueHidden] = useState(isHidden);

    useEffect(() => setIsValueHidden(isHidden), [isHidden]);

    return (
        <CredentialsStyled width={width} data-testid="test-credentials">
            <CredentialsHeader
                title={title}
                titleColor={titleColor}
                icon={icon}
                iconColor={iconColor}
                iconSize={iconSize}
            />
            <PreformattedStyled>
                <Typography
                    monospace
                    color={textColor}
                    data-testid="cred-test-text"
                >
                    {isValueHidden ? hiddenText : text}
                </Typography>
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
