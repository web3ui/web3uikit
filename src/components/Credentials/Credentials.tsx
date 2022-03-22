import React, { FC, useEffect, useState } from 'react';
import { Typography } from '../Typography';
import CredentialsStyles from './Credentials.styles';
import color from '../../styles/colors';
import { ICredentialsProps } from './types';
import CredentialsHeader from './components/CredentialsHeader';
import { HideButton } from '../HideButton';
import { CopyButton } from '../CopyButton';

const { CredentialsStyled, DividerStyled, PreformattedStyled, ToolsStyled } =
    CredentialsStyles;

const Credentials: FC<ICredentialsProps> = ({
    hasCopyButton = true,
    hasHideButton = true,
    title,
    icon,
    iconColor,
    iconSize,
    isHidden = false,
    text,
    width = 'auto',
    hiddenText = '•••••••••••••••••••••••••••••••',
}) => {
    const [isValueHidden, setIsValueHidden] = useState(isHidden);

    useEffect(() => setIsValueHidden(isHidden), [isHidden]);

    return (
        <CredentialsStyled width={width} data-testid="test-credentials">
            <CredentialsHeader
                title={title}
                icon={icon}
                iconColor={iconColor}
                iconSize={iconSize}
            />
            <PreformattedStyled>
                <Typography
                    monospace
                    color={color.blueDark}
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
