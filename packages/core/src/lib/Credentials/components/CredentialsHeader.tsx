import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { color } from '@web3uikit/styles';
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
    titleColor = color.blueDark,
    icon,
}) => {
    if (!title && !icon) return null;
    return (
        <HeaderStyled>
            {icon && <Fragment key="credentials-header-icon">{icon}</Fragment>}
            {title && (
                <Typography
                    key="credentials-header-text"
                    variant="body16"
                    weight="600"
                    color={titleColor}
                    data-testid="test-cred-header-text"
                >
                    {title}
                </Typography>
            )}
        </HeaderStyled>
    );
};

export default CredentialsHeader;
