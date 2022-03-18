import React, { FC } from 'react';
import styled from 'styled-components';
import color from '../../../styles/colors';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
import { ICredentialsHeaderProps } from '../types';

const HeaderStyled = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`;

const CredentialsHeader: FC<ICredentialsHeaderProps> = ({
    title,
    icon,
    iconColor = color.grey,
    iconSize = 24,
}) => {
    if (!title && !icon) return null;

    return (
        <HeaderStyled>
            {icon && (
                <Icon
                    svg={icon}
                    fill={`${iconColor}`}
                    size={iconSize}
                    data-testid="cred-test-header-icon"
                />
            )}
            {title && (
                <Typography
                    variant="body16"
                    weight="600"
                    color={color.blueDark}
                    data-testid="cred-test-header-text"
                >
                    {title}
                </Typography>
            )}
        </HeaderStyled>
    );
};

export default CredentialsHeader;
