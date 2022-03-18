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
    headerText,
    icon,
    iconColor = color.grey,
    iconSize = 24,
}) => {
    if (!headerText && !icon) return null;

    return (
        <HeaderStyled>
            {icon && <Icon svg={icon} fill={`${iconColor}`} size={iconSize} />}
            {headerText && (
                <Typography
                    variant="body16"
                    weight="600"
                    color={color.blueDark}
                >
                    {headerText}
                </Typography>
            )}
        </HeaderStyled>
    );
};

export default CredentialsHeader;
