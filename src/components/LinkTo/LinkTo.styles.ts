import styled from 'styled-components';
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';

// types
import type { LinkToProps } from './types';

// styles
type TStyleProps = Pick<LinkToProps, 'iconLayout'>;

export const LinkStyled = styled.a`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    color: ${color.blue};
    display: inline-block;
    width: fit-content;

    &:hover {
        filter: brightness(0.7);
    }
`;

export const FlexSpanStyled = styled.span<TStyleProps>`
    align-items: baseline;
    display: flex;
    flex-direction: ${({ iconLayout }) =>
        iconLayout === 'leading' ? 'row' : 'row-reverse'};
    margin: ${(p) =>
        p.iconLayout === 'leading' ? '0 2px 0 4px' : '0 4px 0 2px'};

    svg {
        margin: ${(p) =>
            p.iconLayout === 'leading' ? '0 4px 0 0' : '0 0 0 4px'};
    }
`;
