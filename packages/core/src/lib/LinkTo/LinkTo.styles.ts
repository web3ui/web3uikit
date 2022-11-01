import styled from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { Link } from 'react-router-dom';

// types
import type { LinkToProps } from './types';

// styles
type TStyleProps = Pick<LinkToProps, 'iconLayout'>;
interface LinkStyledProps {
    underline: boolean;
    textColor: string | undefined;
}

const LinkStyled = styled.a<LinkStyledProps>`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    color: ${({ textColor }) => textColor || color.navy40};
    display: inline-block;
    font-weight: 600;
    height: fit-content;
    max-width: 100%;
    width: fit-content;
    text-decoration: ${({ underline }) => underline ? 'underline': 'none'};

    &:hover {
        filter: brightness(0.7);
    }
`;

const InternalLinkStyled = styled(Link)<LinkStyledProps>`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    color: ${({ textColor }) => textColor || color.navy40};
    display: inline-block;
    font-weight: 600;
    max-width: 100%;
    width: fit-content;
    text-decoration: ${({ underline }) => underline ? 'underline': 'none'};

    &:hover {
        filter: brightness(0.7);
    }
`;

const SpanStyledFlex = styled.span<TStyleProps>`
    align-items: baseline;
    display: flex;
    flex-direction: ${({ iconLayout }) =>
        iconLayout === 'leading' ? 'row' : 'row-reverse'};
    margin: ${(p) =>
        p.iconLayout === 'leading' ? 'auto 2px auto 4px' : 'auto 4px auto 2px'};

    svg {
        margin: ${(p) =>
            p.iconLayout === 'leading' ? 'auto 4px auto 0' : 'auto 0 auto 4px'};
    }
`;

const SpanStyledText = styled.span`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default {
    InternalLinkStyled,
    LinkStyled,
    SpanStyledFlex,
    SpanStyledText,
};
