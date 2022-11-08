import { Link, Mail } from '@web3uikit/icons';
import { color as colorStyle } from '@web3uikit/styles';
import { LinkToProps } from './types';
import styles from './LinkTo.styles';
import { Typography } from '../Typography';
import React from 'react';

const { InternalLinkStyled, LinkStyled, SpanStyledFlex, SpanStyledText } =
    styles;

const LinkTo: React.FC<LinkToProps> = ({
    address,
    iconLayout = 'leading',
    text,
    type = 'external',
    isUnderlined = true,
    iconColor,
    color,
    onClick,
    icon,
    ...props
}) => {
    const renderContent = () => (
        <SpanStyledFlex iconLayout={iconLayout} data-testid="test-link-flex">
            {iconLayout !== 'none' && icon ? (
                <React.Fragment>{icon}</React.Fragment>
            ) : (
                type !== 'internal' &&
                (type === 'email' ? (
                    <Mail
                        title="mail icon"
                        titleId="linkto mail icon"
                        fill={iconColor || colorStyle.navy40}
                        fontSize={18}
                        style={{ marginTop: 'auto' }}
                    />
                ) : (
                    <Link
                        title="link icon"
                        titleId="linkto link icon"
                        fill={iconColor || colorStyle.navy40}
                        fontSize={18}
                        style={{ marginTop: 'auto' }}
                    />
                ))
            )}
            <Typography
                data-testid="test-link-text"
                color={color || colorStyle.navy40}
                {...props}
            >
                {text || address}
            </Typography>
        </SpanStyledFlex>
    );

    return type !== 'internal' ? (
        <LinkStyled
            data-testid="test-link-to"
            href={`${type === 'email' ? 'mailto:' : ''}${address}`}
            target={`${type === 'email' ? '_self' : '_blank'}`}
            isUnderlined={isUnderlined}
            textColor={color}
            onClick={onClick}
        >
            {renderContent()}
        </LinkStyled>
    ) : (
        <InternalLinkStyled
            data-testid="test-link-to"
            to={address}
            isUnderlined={isUnderlined}
            textColor={color}
            onClick={onClick}
        >
            {renderContent()}
        </InternalLinkStyled>
    );
};

export default LinkTo;
