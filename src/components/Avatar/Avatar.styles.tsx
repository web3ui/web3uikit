import styled, { css } from 'styled-components';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import { AvatarProps } from './types';

type TStyleProps = Pick<
    AvatarProps,
    | 'image'
    | 'isRounded'
    | 'theme'
    | 'borderRadius'
    | 'textColor'
    | 'avatarBackground'
>;

export const roundedEdgeValue = '50%';

const customBackgroundImage = css<TStyleProps>`
    background-position: center;
    background-size: cover;
    background-image: url(${(p) => p.image});
`;

const DivStyled = styled.div<TStyleProps>`
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    height: 40px;
    width: 40px;
    overflow: hidden;
    position: static;
    text-transform: uppercase;
    word-break: break-all;
    color: ${(props) => props.textColor};

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
    ${resetCSS};
    ${fonts.openSans};
    ${fonts.h4};
    ${fonts.textBold700};
    left: calc(50% - 28px / 2);
    padding-top: calc(50% - 28px / 2);
    text-align: center;
    color: ${(props) => props.color};
`;

export { DivStyled, H4Styled };
