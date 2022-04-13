import React from 'react';
import Icon from '../Icon/Icon';
import { iconTypes } from '../Icon/collection';
import color from '../../styles/colors';
import { LinkToProps } from './types';
import styles from './LinkTo.styles';

const { LinkStyled, SpanStyledFlex, SpanStyledText } = styles;

const LinkTo: React.FC<LinkToProps> = ({
    address,
    text,
    type = 'external',
    iconLayout = 'leading',
}) => (
    <LinkStyled
        data-testid="test-link-to"
        href={`${type === 'email' ? 'mailto:' : ''}${address}`}
        target={`${type === 'email' ? '_self' : '_blank'}`}
    >
        <SpanStyledFlex iconLayout={iconLayout} data-testid="test-link-flex">
            <Icon
                svg={type === 'email' ? iconTypes.mail : iconTypes.link}
                fill={color.blue}
                size={14}
            />

            <SpanStyledText data-testid="test-link-text">
                {text || address}
            </SpanStyledText>
        </SpanStyledFlex>
    </LinkStyled>
);

export default LinkTo;
