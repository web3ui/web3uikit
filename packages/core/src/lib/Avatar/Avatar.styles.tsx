import styled, { css } from 'styled-components';
import { fonts, resetCSS } from '@web3uikit/styles';

import { AvatarProps } from './types';

type TStyleProps = Pick<
    AvatarProps,
    | 'avatarBackground'
    | 'borderRadius'
    | 'image'
    | 'isRounded'
    | 'textColor'
    | 'theme'
    | 'size'
    | 'fontSize'
>;

export const roundedEdgeValue = '50%';

const customBackgroundImage = css<TStyleProps>`
    background-image: url(${(p) => p.image});
    background-position: center;
    background-size: cover;
`;

const DivStyled = styled.div<TStyleProps>`
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    align-items: center;
    background: ${(p) => p.avatarBackground};
    color: ${(props) => props.textColor};
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.fontSize}px;
    justify-content: center;
    overflow: hidden;
    position: static;
    text-transform: uppercase;
    word-break: break-all;
    ${(p) => p.theme === 'image' && p.image && customBackgroundImage};
    span {
        display: none;
    }
    &,
    & > svg {
        height: ${(props) => props.size}px;
        width: ${(props) => props.size}px;
        border-radius: ${(p) =>
            `${
                p.isRounded
                    ? roundedEdgeValue
                    : p.borderRadius
                    ? `${p.borderRadius}px`
                    : `${0}px`
            }`};
    }
`;

const H4Styled = styled.h4<Pick<AvatarProps, 'textColor'>>`
    ${fonts.h4};
    ${fonts.openSans};
    ${fonts.textBold700};
    ${resetCSS};
    color: ${(props) => props.color};
    font-size: inherit;
`;

export default { DivStyled, H4Styled };
