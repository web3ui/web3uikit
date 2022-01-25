import React from 'react';
import Icon from '../Icon/Icon';
import { iconTypes } from '../Icon/collection';
import color from '../../styles/colors';
import { LinkToProps } from './types';
import { LinkStyled, FlexSpanStyled } from './LinkTo.styles';

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
        <FlexSpanStyled iconLayout={iconLayout} data-testid="test-link-flex">
            <Icon
                svg={type === 'email' ? iconTypes.mail : iconTypes.link}
                fill={color.blue}
                size={14}
            />

            <span data-testid="test-link-text">{text || address}</span>
        </FlexSpanStyled>
    </LinkStyled>
);

export default LinkTo;
