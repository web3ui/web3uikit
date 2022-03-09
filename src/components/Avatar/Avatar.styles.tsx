import styled, { css } from 'styled-components';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
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
    color: ${(props) => props.textColor};
    height: ${(props) => props.size}px;
    overflow: hidden;
    position: static;
    text-transform: uppercase;
    width: ${(props) => props.size}px;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.fontSize}px;

    span {
        display: none;
    }
    border-radius: ${(p) =>
        `${
            p.isRounded
                ? roundedEdgeValue
                : p.borderRadius
                ? `${p.borderRadius}px`
                : `${0}px`
        }`};
    background: ${(p) => p.avatarBackground};
    ${(p) => p.theme === 'image' && p.image && customBackgroundImage}
`;

const H4Styled = styled.h4<Pick<AvatarProps, 'textColor'>>`
    ${fonts.h4};
    ${fonts.openSans};
    ${fonts.textBold700};
    ${resetCSS};
    color: ${(props) => props.color};
    font-size: inherit;
`;

export { DivStyled, H4Styled };
